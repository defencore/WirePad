import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen20176",
    "sku": "SEN-20176",
    "name": "SparkFun Micro 6DoF IMU - ISM330DHCX (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micro-6dof-imu-ism330dhcx-qwiic.html",
    "revision": "EAGLE SparkFun_6DoF_ISM330DHCX_Qwiic_Micro.brd; commit f848874e34e0",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -3.0908,
      -3.5198,
      9.085,
      3.2364
    ],
    "backArtworkBounds": [
      -0.8782,
      -3.6976,
      6.21855,
      1.7672
    ],
    "board": {
      "width": 19.05,
      "height": 7.62,
      "color": "#9b242d",
      "outline": "M-9.525 -3.81L9.525 -3.81L9.525 3.81L-9.525 3.81L-9.525 -3.81Z"
    },
    "contacts": assets["sparkfun-module-sen20176"]["contacts"],
    "holes": [
      {
        "x": -6.985,
        "y": 0.0,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen20176"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen20176"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen20176"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j4-1",
        "tp4-1"
      ],
      [
        "j1-2",
        "tp3-1"
      ],
      [
        "j1-3",
        "tp2-1"
      ],
      [
        "j1-4",
        "tp1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micro-6dof-imu-ism330dhcx-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_ISM330DHCX/blob/f848874e34e034c00f4e4b8a50d073738f87817b/Hardware/Qwiic%20Micro/SparkFun_6DoF_ISM330DHCX_Qwiic_Micro.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_ISM330DHCX/blob/f848874e34e034c00f4e4b8a50d073738f87817b/Hardware/Qwiic%20Micro/SparkFun_6DoF_ISM330DHCX_Qwiic_Micro.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_ISM330DHCX/blob/f848874e34e034c00f4e4b8a50d073738f87817b/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micro-6dof-imu-ism330dhcx-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-20176",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-20176. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen21207",
    "sku": "SEN-21207",
    "name": "SparkFun Micro Triple Axis Accelerometer Breakout - BMA400 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micro-triple-axis-accelerometer-breakout-bma400-qwiic.html",
    "revision": "EAGLE SparkFun_Qwiic_Micro_Accelerometer_BMA400.brd; commit 2751c15eec8f",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -3.08,
      -2.326,
      3.08,
      9.085
    ],
    "backArtworkBounds": [
      -3.596,
      -3.1642,
      3.596,
      3.6722
    ],
    "board": {
      "width": 7.62,
      "height": 19.05,
      "color": "#9b242d",
      "outline": "M-3.81 9.525L3.81 9.525L3.81 -9.525L-3.81 -9.525L-3.81 9.525Z"
    },
    "contacts": assets["sparkfun-module-sen21207"]["contacts"],
    "holes": [
      {
        "x": 0.0,
        "y": -6.985,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen21207"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen21207"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen21207"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "tp1-1"
      ],
      [
        "j1-2",
        "tp2-1"
      ],
      [
        "j1-3",
        "tp3-1"
      ],
      [
        "j1-4",
        "tp4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micro-triple-axis-accelerometer-breakout-bma400-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Accelerometer_BMA400/blob/2751c15eec8f50759e3414337c0133b55b9c19d1/Hardware/Qwiic%20Micro/SparkFun_Qwiic_Micro_Accelerometer_BMA400.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Accelerometer_BMA400/blob/2751c15eec8f50759e3414337c0133b55b9c19d1/Hardware/Qwiic%20Micro/SparkFun_Qwiic_Micro_Accelerometer_BMA400.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Accelerometer_BMA400/blob/2751c15eec8f50759e3414337c0133b55b9c19d1/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micro-triple-axis-accelerometer-breakout-bma400-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-21207",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-21207. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen16467",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun SEN-16467: EAGLE SHTC3 Breakout.brd; commit 89ecc1a11c2d header geometry", "url": "https://github.com/sparkfun/Qwiic_Humidity_SHTC3/blob/89ecc1a11c2d0c3bbd8bc6224095ddf24aff0d09/Hardware/SHTC3%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "fc48e5b95c979410798f1050f933a80c6d8c9b31f50c3ae9e3c91fe0e5c379fa"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-16467",
    "name": "SparkFun Humidity Sensor Breakout - SHTC3 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-humidity-sensor-breakout-shtc3-qwiic.html",
    "revision": "EAGLE SHTC3 Breakout.brd; commit 89ecc1a11c2d",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -6.809,
      12.26,
      10.7842
    ],
    "backArtworkBounds": [
      -1.7672,
      -6.136,
      1.7672,
      -4.024
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen16467"]["contacts"],
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
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen16467"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen16467"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen16467"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j4-1",
        "j1-1"
      ],
      [
        "j2-2",
        "j4-2",
        "j1-2"
      ],
      [
        "j2-3",
        "j4-3",
        "j1-3"
      ],
      [
        "j2-4",
        "j4-4",
        "j1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-humidity-sensor-breakout-shtc3-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Humidity_SHTC3/blob/89ecc1a11c2d0c3bbd8bc6224095ddf24aff0d09/Hardware/SHTC3%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Humidity_SHTC3/blob/89ecc1a11c2d0c3bbd8bc6224095ddf24aff0d09/Hardware/SHTC3%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Humidity_SHTC3/blob/89ecc1a11c2d0c3bbd8bc6224095ddf24aff0d09/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-humidity-sensor-breakout-shtc3-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-16467",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-16467. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen22395",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4"],
      "source": {"label": "SparkFun SEN-22395: EAGLE SparkFun_Qwiic_CO2_Sensor_SCD40.brd; commit cc7038afb586 header geometry", "url": "https://github.com/sparkfun/SparkFun_Qwiic_CO2_Sensor_SCD4X/blob/cc7038afb5866ae185909394f119b9622c563c26/Hardware/SCD40/SparkFun_Qwiic_CO2_Sensor_SCD40.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "0d3334c64f6ca9c96bd089e0cb96521b182be25b0efe7c6a8bf79258993458ea"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-22395",
    "name": "SparkFun CO2 Humidity and Temperature Sensor - SCD40 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-co-humidity-and-temperature-sensor-scd40-qwiic.html",
    "revision": "EAGLE SparkFun_Qwiic_CO2_Sensor_SCD40.brd; commit cc7038afb586",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -6.822,
      12.26,
      6.809
    ],
    "backArtworkBounds": [
      -10.7715,
      -6.263,
      10.962,
      7.2282
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen22395"]["contacts"],
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
    "artwork": assets["sparkfun-module-sen22395"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen22395"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen22395"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j3-1"
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
        "url": "https://www.sparkfun.com/sparkfun-co-humidity-and-temperature-sensor-scd40-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_CO2_Sensor_SCD4X/blob/cc7038afb5866ae185909394f119b9622c563c26/Hardware/SCD40/SparkFun_Qwiic_CO2_Sensor_SCD40.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_CO2_Sensor_SCD4X/blob/cc7038afb5866ae185909394f119b9622c563c26/Hardware/SCD40/SparkFun_Qwiic_CO2_Sensor_SCD40.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_CO2_Sensor_SCD4X/blob/cc7038afb5866ae185909394f119b9622c563c26/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-co-humidity-and-temperature-sensor-scd40-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-22395",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-22395. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen21262",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4", "j3-5"],
      "source": {"label": "SparkFun SEN-21262: EAGLE SparkFun_Temperature_Sensor-STTS22H.brd; commit 9d0e0f48df40 header geometry", "url": "https://github.com/sparkfun/SparkFun_Temperature_Sensor-STTS22H/blob/9d0e0f48df40bdf507b0101b32ba3f23b96b763a/Hardware/Qwiic/SparkFun_Temperature_Sensor-STTS22H.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 5, "package": "1X05_NO_SILK"}],
        "boardSha256": "0e381610e6327d05db6e7424d35ab3dedbd14a7ff3a19dbb48d22ee4c75ab931"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-21262",
    "name": "SparkFun Temperature Sensor - STTS22H (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-temperature-sensor-stts22h-qwiic.html",
    "revision": "EAGLE SparkFun_Temperature_Sensor-STTS22H.brd; commit 9d0e0f48df40",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -6.8599,
      12.2346,
      3.04
    ],
    "backArtworkBounds": [
      -7.914,
      -6.898,
      12.2574,
      5.374
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7L-12.7 -12.7Z"
    },
    "contacts": assets["sparkfun-module-sen21262"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.048
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen21262"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen21262"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen21262"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j3-1"
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
        "url": "https://www.sparkfun.com/sparkfun-temperature-sensor-stts22h-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Temperature_Sensor-STTS22H/blob/9d0e0f48df40bdf507b0101b32ba3f23b96b763a/Hardware/Qwiic/SparkFun_Temperature_Sensor-STTS22H.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Temperature_Sensor-STTS22H/blob/9d0e0f48df40bdf507b0101b32ba3f23b96b763a/Hardware/Qwiic/SparkFun_Temperature_Sensor-STTS22H.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Temperature_Sensor-STTS22H/blob/9d0e0f48df40bdf507b0101b32ba3f23b96b763a/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-temperature-sensor-stts22h-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-21262",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-21262. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen21221",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4", "j3-5", "j3-6"],
      "source": {"label": "SparkFun SEN-21221: EAGLE SparkFun_Qwiic_Barometer_LPS28DFW.brd; commit b012d97cd56b header geometry", "url": "https://github.com/sparkfun/SparkFun_Qwiic_Barometer_LPS28DFW/blob/b012d97cd56bf5a8a2a540c1f81aa75693716141/Hardware/Qwiic%201x1/SparkFun_Qwiic_Barometer_LPS28DFW.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "14c1ad1008fe1651138756284efa1593f9e4fe4f17caca866c13de921f28def9"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-21221",
    "name": "SparkFun Absolute Digital Barometer - LPS28DFW (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-absolute-digital-barometer-lps28dfw-qwiic.html",
    "revision": "EAGLE SparkFun_Qwiic_Barometer_LPS28DFW.brd; commit b012d97cd56b",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -6.86625,
      12.26,
      3.04
    ],
    "backArtworkBounds": [
      -1.7672,
      -5.501,
      11.4192,
      4.231
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen21221"]["contacts"],
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
    "artwork": assets["sparkfun-module-sen21221"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen21221"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen21221"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j3-1"
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
        "url": "https://www.sparkfun.com/sparkfun-absolute-digital-barometer-lps28dfw-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Barometer_LPS28DFW/blob/b012d97cd56bf5a8a2a540c1f81aa75693716141/Hardware/Qwiic%201x1/SparkFun_Qwiic_Barometer_LPS28DFW.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Barometer_LPS28DFW/blob/b012d97cd56bf5a8a2a540c1f81aa75693716141/Hardware/Qwiic%201x1/SparkFun_Qwiic_Barometer_LPS28DFW.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Barometer_LPS28DFW/blob/b012d97cd56bf5a8a2a540c1f81aa75693716141/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-absolute-digital-barometer-lps28dfw-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-21221",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-21221. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-sen21325",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6"],
      "source": {"label": "SparkFun SEN-21325: EAGLE SparkFun_6DoF_LSM6DSV16X.brd; commit 81f28abb82c4 header geometry", "url": "https://github.com/sparkfun/SparkFun_6DoF_LSM6DSV16X/blob/81f28abb82c4edfa63f5bcc623be1ea7ef1c1ce5/Hardware/Qwiic/SparkFun_6DoF_LSM6DSV16X.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_NO_SILK"}, {"id": "JP3", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "b893e514dfea5aeb2aff480b1c39e2ae814a9ba67094f88f1e2318fb1bcf9dc4"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-21325",
    "name": "SparkFun 6DoF IMU Breakout - LSM6DSV16X (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-6dof-imu-breakout-lsm6dsv16x-qwiic.html",
    "revision": "EAGLE SparkFun_6DoF_LSM6DSV16X.brd; commit 81f28abb82c4",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -6.619,
      12.2346,
      3.952
    ],
    "backArtworkBounds": [
      -11.876399999999999,
      -6.136,
      7.9902,
      3.596
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7L-12.7 -12.7Z"
    },
    "contacts": assets["sparkfun-module-sen21325"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.048
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.048
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen21325"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen21325"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen21325"]["provenance"],
    "internalConnections": [
      [
        "jp1-3",
        "j1-4",
        "j2-4"
      ],
      [
        "jp1-4",
        "j1-3",
        "j2-3"
      ],
      [
        "jp1-5",
        "j1-2",
        "j2-2"
      ],
      [
        "jp1-6",
        "j1-1",
        "j2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-6dof-imu-breakout-lsm6dsv16x-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_6DoF_LSM6DSV16X/blob/81f28abb82c4edfa63f5bcc623be1ea7ef1c1ce5/Hardware/Qwiic/SparkFun_6DoF_LSM6DSV16X.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_6DoF_LSM6DSV16X/blob/81f28abb82c4edfa63f5bcc623be1ea7ef1c1ce5/Hardware/Qwiic/SparkFun_6DoF_LSM6DSV16X.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_6DoF_LSM6DSV16X/blob/81f28abb82c4edfa63f5bcc623be1ea7ef1c1ce5/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-6dof-imu-breakout-lsm6dsv16x-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-21325",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-21325. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
