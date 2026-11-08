import assets from "./motion-position-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen12916",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "SparkFun SEN-12916: EAGLE SparkFun_HMC6343_Breakout.brd; commit fbf992ea2d4b header geometry", "url": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/Hardware/SparkFun_HMC6343_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04"}],
        "boardSha256": "87e79e00a8f71ae02e3255256ca4000722a8a15b6d10e4f1c345897089e28f36"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -10.16, "width": 20.32, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-12916",
    "name": "SparkFun Digital Compass - HMC6343",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-hmc6343-breakout.html",
    "revision": "EAGLE SparkFun_HMC6343_Breakout.brd; commit fbf992ea2d4b",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-10.16 10.16L10.16 10.16L10.16 -10.16L-10.16 -10.16L-10.16 10.16Z"
    },
    "contacts": assets["sparkfun-module-sen12916"]["contacts"],
    "holes": [
      {
        "x": 7.62,
        "y": -7.62,
        "drill": 3.302
      },
      {
        "x": -7.62,
        "y": 7.62,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen12916"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12916"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12916"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-hmc6343-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/Hardware/SparkFun_HMC6343_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/Hardware/SparkFun_HMC6343_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-hmc6343-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12916",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12916. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.348999999999998,
      -9.348999999999998,
      6.39,
      10.2
    ]
  },
  {
    "id": "sparkfun-module-sen09269",
    "mountingReview": {
      "contactIds": ["sl1-1", "sl1-2", "sl1-3", "sl1-4", "sl1-5", "sl1-6"],
      "source": {"label": "SparkFun SEN-09269: EAGLE ADXL335_Breakout.brd; commit a6bd15dc1c32 header geometry", "url": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/Hardware/ADXL335_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "SL1", "count": 6, "package": "1X06"}],
        "boardSha256": "8e0987ccbae9df81317d1b221de2d5590153391457542fdc88e6347270fb739e"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -7.62, "width": 17.78, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-09269",
    "name": "SparkFun Triple Axis Accelerometer Breakout - ADXL335",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl335.html",
    "revision": "EAGLE ADXL335_Breakout.brd; commit a6bd15dc1c32",
    "category": "Sensors",
    "board": {
      "width": 17.78,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M8.87 7.62L8.89 -7.62L-8.89 -7.62L-8.89 7.62L8.87 7.62Z"
    },
    "contacts": assets["sparkfun-module-sen09269"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": 5.08,
        "drill": 3.048
      },
      {
        "x": 6.35,
        "y": -5.08,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen09269"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen09269"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen09269"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl335.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/Hardware/ADXL335_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/Hardware/ADXL335_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl335.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-09269",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-09269. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.93,
      -7.66,
      2.802,
      7.66
    ]
  },
  {
    "id": "sparkfun-module-sen09836",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8"],
      "source": {"label": "SparkFun SEN-09836: EAGLE ADXL345_Breakout.brd; commit 8e83a624bcae header geometry", "url": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/Hardware/ADXL345_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08"}],
        "boardSha256": "c24922728d0d5e47a2ae2fc88ac5c1f9433176839e0dfac97392f58ebb3ae5ba"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -7.62, "width": 20.32, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-09836",
    "name": "SparkFun Triple Axis Accelerometer Breakout - ADXL345",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl345.html",
    "revision": "EAGLE ADXL345_Breakout.brd; commit 8e83a624bcae",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M-10.16 7.62L10.16 7.62L10.16 -7.62L-10.16 -7.62L-10.16 7.62Z"
    },
    "contacts": assets["sparkfun-module-sen09836"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": -5.08,
        "drill": 3.302
      },
      {
        "x": 7.62,
        "y": -5.08,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen09836"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen09836"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen09836"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl345.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/Hardware/ADXL345_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/Hardware/ADXL345_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl345.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-09836",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-09836. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.2,
      -6.701,
      10.2,
      7.66
    ]
  },
  {
    "id": "sparkfun-module-sen11446",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp2-1", "jp2-2", "jp2-3", "jp2-4"],
      "source": {"label": "SparkFun SEN-11446: EAGLE ADXL362_BOB.brd; commit 59a85587537e header geometry", "url": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/Hardware/ADXL362_BOB.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04"}, {"id": "JP2", "count": 4, "package": "1X04"}],
        "boardSha256": "d09bcd9b3f5fb96fd6b279078b6b5690e303aea894f37246e88407defeeb6949"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -5.08, "width": 12.7, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-11446",
    "name": "SparkFun Triple Axis Accelerometer Breakout - ADXL362",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl362.html",
    "revision": "EAGLE ADXL362_BOB.brd; commit 59a85587537e",
    "category": "Sensors",
    "board": {
      "width": 12.7,
      "height": 10.16,
      "color": "#9b242d",
      "outline": "M-6.35 5.08L6.35 5.08L6.35 -5.08L-6.35 -5.08L-6.35 5.08Z"
    },
    "contacts": assets["sparkfun-module-sen11446"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-sen11446"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen11446"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen11446"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl362.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/Hardware/ADXL362_BOB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/Hardware/ADXL362_BOB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-adxl362.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-11446",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-11446. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.39,
      -5.12,
      6.39,
      5.12
    ]
  },
  {
    "id": "sparkfun-module-sen19921",
    "sku": "SEN-19921",
    "name": "SparkFun Micro Magnetometer - MMC5983MA (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micro-magnetometer-mmc5983ma-qwiic.html",
    "revision": "EAGLE SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.brd; commit a6d2ec7928ca",
    "category": "Sensors",
    "board": {
      "width": 7.62,
      "height": 19.05,
      "color": "#9b242d",
      "outline": "M3.81 9.525L3.81 -9.525L-3.81 -9.525L-3.81 9.525L3.81 9.525Z"
    },
    "contacts": assets["sparkfun-module-sen19921"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -6.985,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen19921"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen19921"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-sen19921"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp5-1",
        "j4-1"
      ],
      [
        "j1-2",
        "tp1-1"
      ],
      [
        "j1-3",
        "tp2-1"
      ],
      [
        "j1-4",
        "tp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micro-magnetometer-mmc5983ma-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/Hardware/SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/Hardware/SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/license.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micro-magnetometer-mmc5983ma-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-19921",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-19921. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.0713,
      -3.592,
      3.449341,
      9.085
    ],
    "backArtworkBounds": [
      -1.818,
      1.8903999999999999,
      3.7484,
      7.05675
    ]
  },
  {
    "id": "sparkfun-module-sen13963",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6"],
      "source": {"label": "SparkFun SEN-13963: EAGLE SparkFun_LIS3DH-Breakout.brd; commit a57ba3b3d98e header geometry", "url": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/Hardware/SparkFun_LIS3DH-Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 6, "package": "1X06_NO_SILK"}, {"id": "J2", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "dbb8693c545a98e21b53b401b2a105d8f26fa58efb095179618de399185d22a5"
      },
      "bodyRegions": [
        {"x": -11.43, "y": -6.35, "width": 22.86, "height": 12.7}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-13963",
    "name": "SparkFun Triple Axis Accelerometer Breakout - LIS3DH",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-lis3dh.html",
    "revision": "EAGLE SparkFun_LIS3DH-Breakout.brd; commit a57ba3b3d98e",
    "category": "Sensors",
    "board": {
      "width": 22.86,
      "height": 12.7,
      "color": "#9b242d",
      "outline": "M-11.43 6.35L-11.43 -6.35L11.43 -6.35L11.43 6.35L-11.43 6.35Z"
    },
    "contacts": assets["sparkfun-module-sen13963"]["contacts"],
    "holes": [
      {
        "x": -8.89,
        "y": 0,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": 0,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen13963"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13963"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13963"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-lis3dh.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/Hardware/SparkFun_LIS3DH-Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/Hardware/SparkFun_LIS3DH-Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-triple-axis-accelerometer-breakout-lis3dh.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13963",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13963. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.031,
      -3.38,
      4.714,
      2.745
    ],
    "backArtworkBounds": [
      -5.374,
      -1.548,
      1.04,
      2.707
    ]
  },
  {
    "id": "sparkfun-module-sen12589",
    "sku": "SEN-12589",
    "name": "SparkFun RedBot Sensor - Accelerometer",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-redbot-sensor-accelerometer.html",
    "revision": "EAGLE RedBot Accelerometer.brd; commit dc04b82d3abc",
    "category": "Sensors",
    "board": {
      "width": 13.97,
      "height": 17.78,
      "color": "#9b242d",
      "outline": "M-6.985 8.89L-6.985 -8.89L6.985 -8.89L6.985 8.89L-6.985 8.89Z"
    },
    "contacts": assets["sparkfun-module-sen12589"]["contacts"],
    "holes": [
      {
        "x": -1.905,
        "y": 3.81,
        "drill": 1.8
      },
      {
        "x": -1.905,
        "y": 6.35,
        "drill": 1.8
      }
    ],
    "artwork": assets["sparkfun-module-sen12589"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12589"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-sen12589"]["provenance"],
    "internalConnections": [
      [
        "jp1-4",
        "jp1-3",
        "jp2-4",
        "jp2-3"
      ],
      [
        "jp1-5",
        "jp1-6",
        "jp2-5",
        "jp2-6"
      ],
      [
        "jp1-2",
        "jp2-1"
      ],
      [
        "jp1-1",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-redbot-sensor-accelerometer.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/Hardware/RedBot%20Accelerometer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/Hardware/RedBot%20Accelerometer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-redbot-sensor-accelerometer.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12589",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12589. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.1614,
      -8.117199999999999,
      6.5424,
      8.93
    ],
    "backArtworkBounds": [
      -4.445,
      1.23,
      0.635,
      8.93
    ]
  },
  {
    "id": "sparkfun-module-sen14571",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6"],
      "source": {"label": "SparkFun SEN-14571: EAGLE Qwiic_MLX90393_Magnetometer.brd; commit 9167ef00efc6 header geometry", "url": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/Hardware/Qwiic_MLX90393_Magnetometer.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 6, "package": "1X06_NO_SILK"}, {"id": "J2", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "7abddbb07fe1208bada10c2d68c684235389f156c33723e4ed917e093b3c0f5f"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-14571",
    "name": "SparkFun Triple Axis Magnetometer Breakout - MLX90393 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-triple-axis-magnetometer-breakout-mlx90393-qwiic.html",
    "revision": "EAGLE Qwiic_MLX90393_Magnetometer.brd; commit 9167ef00efc6",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen14571"]["contacts"],
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
    "artwork": assets["sparkfun-module-sen14571"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen14571"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen14571"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j3-1",
        "j4-1"
      ],
      [
        "j1-2",
        "j2-2",
        "j3-2",
        "j4-2"
      ],
      [
        "j1-3",
        "j2-5",
        "j3-3",
        "j4-3"
      ],
      [
        "j1-4",
        "j2-3",
        "j3-4",
        "j4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-triple-axis-magnetometer-breakout-mlx90393-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/Hardware/Qwiic_MLX90393_Magnetometer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/Hardware/Qwiic_MLX90393_Magnetometer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-triple-axis-magnetometer-breakout-mlx90393-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-14571",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-14571. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.206,
      -12.26,
      4.206,
      12.26
    ],
    "backArtworkBounds": [
      -6.2122,
      -11.216,
      6.2122,
      8.676
    ]
  },
  {
    "id": "sparkfun-module-sen22857",
    "sku": "SEN-22857",
    "name": "SparkFun VR IMU Breakout - BNO086 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-vr-imu-breakout-bno086-qwiic.html",
    "revision": "EAGLE SparkFun_VR_IMU_Breakout_BNO086_QWIIC.brd; commit fc8ed693a519",
    "category": "Sensors",
    "board": {
      "width": 30.48,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-15.24 12.7L-15.24 -12.7L15.24 -12.7L15.24 12.7L-15.24 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen22857"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 12.7,
        "y": -10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen22857"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen22857"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen22857"]["provenance"],
    "internalConnections": [
      [
        "j6-1",
        "j1-1",
        "j4-1",
        "j2-1",
        "j3-1"
      ],
      [
        "j6-2",
        "j1-3",
        "j4-2",
        "j2-2",
        "j3-2"
      ],
      [
        "j6-3",
        "j1-4",
        "j4-4",
        "j2-4",
        "j3-4"
      ],
      [
        "j6-4",
        "j1-5",
        "j4-3",
        "j2-3",
        "j3-3"
      ],
      [
        "j6-7",
        "j8-2"
      ],
      [
        "j6-8",
        "j7-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-vr-imu-breakout-bno086-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/Hardware/SparkFun_VR_IMU_Breakout_BNO086_QWIIC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/Hardware/SparkFun_VR_IMU_Breakout_BNO086_QWIIC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-vr-imu-breakout-bno086-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-22857",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-22857. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.799999999999999,
      -5.984,
      14.8,
      10.619
    ],
    "backArtworkBounds": [
      -10.0476,
      -3.9008,
      13.428341,
      7.406
    ]
  },
];
