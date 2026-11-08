import assets from "./environmental-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen13322",
    "sku": "SEN-13322",
    "name": "SparkFun Soil Moisture Sensor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-soil-moisture-sensor.html",
    "revision": "EAGLE SparkFun_Soil_Moisture_Sensor.brd; commit f4d72d965d0a",
    "category": "Sensors",
    "board": {
      "width": 22.86,
      "height": 60.96,
      "color": "#9b242d",
      "outline": "M-8.89 -30.48A2.54 2.54 0 0 0 -11.43 -27.94L-11.43 22.86L-8.89 30.48L-6.35 30.48L-3.81 22.86L-3.81 -13.97A1.27 1.27 0 0 1 -2.54 -15.24L2.54 -15.24A1.27 1.27 0 0 1 3.81 -13.97L3.81 22.86L6.35 30.48L8.89 30.48L11.43 22.86L11.43 -27.94A2.54 2.54 0 0 0 8.89 -30.48L-8.89 -30.48Z"
    },
    "contacts": assets["sparkfun-module-sen13322"]["contacts"],
    "holes": [
      {
        "x": -8.89,
        "y": -27.94,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": -27.94,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen13322"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13322"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13322"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-3"
      ],
      [
        "jp1-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "jp2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-soil-moisture-sensor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/Hardware/SparkFun_Soil_Moisture_Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/Hardware/SparkFun_Soil_Moisture_Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-soil-moisture-sensor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13322",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13322. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.2602,
      -30.5386,
      6.2198,
      -18.3496
    ]
  },
  {
    "id": "sparkfun-module-sen13676",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "SparkFun SEN-13676: EAGLE SparkFun_BME280_Breakout.brd; commit 91f0c754a30c header geometry", "url": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/Hardware/SparkFun_BME280_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_NO_SILK"}, {"id": "JP2", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "40ec150503438dc1be8200f557fa0d89ff1842bc98d29d757f7d38e0d931b3c1"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -10.16, "width": 12.7, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-13676",
    "name": "SparkFun Atmospheric Sensor Breakout - BME280",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-atmospheric-sensor-breakout-bme280.html",
    "revision": "EAGLE SparkFun_BME280_Breakout.brd; commit 91f0c754a30c",
    "category": "Sensors",
    "board": {
      "width": 12.7,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-6.35 -10.16L6.35 -10.16L6.35 10.16L-6.35 10.16L-6.35 -10.16Z"
    },
    "contacts": assets["sparkfun-module-sen13676"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 7.62,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen13676"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13676"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13676"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-6"
      ],
      [
        "jp1-2",
        "jp2-5"
      ],
      [
        "jp1-3",
        "jp2-2"
      ],
      [
        "jp1-4",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-atmospheric-sensor-breakout-bme280.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/Hardware/SparkFun_BME280_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/Hardware/SparkFun_BME280_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-atmospheric-sensor-breakout-bme280.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13676",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13676. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.206,
      -8.091999999999999,
      1.9835,
      4.917
    ],
    "backArtworkBounds": [
      -4.231,
      -9.946,
      2.0085,
      5.374
    ]
  },
  {
    "id": "sparkfun-module-sen20844",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4", "j3-5", "j3-6", "j3-7"],
      "source": {"label": "SparkFun SEN-20844: EAGLE SparkFun_Air_Quality_ENS160.brd; commit 6e53479ba84b header geometry", "url": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/Hardware/SparkFun_Air_Quality_ENS160.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 7, "package": "1X07_NO_SILK"}],
        "boardSha256": "2e5f235f25e8087397cda9b92e623038cecdeb1d2798f5339dfa79942357aba0"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-20844",
    "name": "SparkFun Indoor Air Quality Sensor - ENS160 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-indoor-air-quality-sensor-ens160-qwiic.html",
    "revision": "EAGLE SparkFun_Air_Quality_ENS160.brd; commit 6e53479ba84b",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7L-12.7 -12.7Z"
    },
    "contacts": assets["sparkfun-module-sen20844"]["contacts"],
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
      }
    ],
    "artwork": assets["sparkfun-module-sen20844"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen20844"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen20844"]["provenance"],
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
        "url": "https://www.sparkfun.com/sparkfun-indoor-air-quality-sensor-ens160-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/Hardware/SparkFun_Air_Quality_ENS160.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/Hardware/SparkFun_Air_Quality_ENS160.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-indoor-air-quality-sensor-ens160-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-20844",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-20844. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -6.8599,
      12.2346,
      4.777
    ],
    "backArtworkBounds": [
      -1.7672,
      -7.025,
      12.2574,
      -1.484
    ]
  },
  {
    "id": "sparkfun-module-sen16466",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun SEN-16466: EAGLE Qwiic Environmental BME680.brd; commit ff6f1f269c19 header geometry", "url": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/Hardware/Qwiic%20Environmental%20BME680.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 6, "package": "1X06_NO_SILK"}, {"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "d498f766479410a327810df5c45b59f029b97ffcae867a421191dd48abf1dcf5"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-16466",
    "name": "SparkFun Environmental Sensor Breakout - BME680 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-environmental-sensor-breakout-bme680-qwiic.html",
    "revision": "EAGLE Qwiic Environmental BME680.brd; commit ff6f1f269c19",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen16466"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen16466"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen16466"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen16466"]["provenance"],
    "internalConnections": [
      [
        "j2-2",
        "j5-3",
        "j7-3",
        "j1-3"
      ],
      [
        "j2-4",
        "j5-4",
        "j7-4",
        "j1-4"
      ],
      [
        "j2-5",
        "j5-2",
        "j7-2",
        "j1-2"
      ],
      [
        "j2-6",
        "j5-1",
        "j7-1",
        "j1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-environmental-sensor-breakout-bme680-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/Hardware/Qwiic%20Environmental%20BME680.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/Hardware/Qwiic%20Environmental%20BME680.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-environmental-sensor-breakout-bme680-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-16466",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-16466. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      11.4192
    ],
    "backArtworkBounds": [
      -2.326,
      -5.3486,
      -0.214,
      -3.0334
    ]
  },
];
