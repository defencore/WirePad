import assets from "./temperature-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen13314",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "SparkFun SEN-13314: EAGLE Digital Temperature Sensor Breakout - TMP102.brd; commit 36ba5a6a2681 header geometry", "url": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/Hardware/Digital%20Temperature%20Sensor%20Breakout%20-%20TMP102.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06"}],
        "boardSha256": "d256bbd2224655414d58d246a4b4364e647e6573c030583c132fb5fc44d2c921"
      },
      "bodyRegions": [
        {"x": -7.62, "y": -7.62, "width": 15.24, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-13314",
    "name": "SparkFun Digital Temperature Sensor Breakout - TMP102",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-digital-temperature-sensor-breakout-tmp102.html",
    "revision": "EAGLE Digital Temperature Sensor Breakout - TMP102.brd; commit 36ba5a6a2681",
    "category": "Sensors",
    "board": {
      "width": 15.24,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M-7.62 7.62L7.62 7.62L7.62 -7.62L-7.62 -7.62L-7.62 7.62Z"
    },
    "contacts": assets["sparkfun-module-sen13314"]["contacts"],
    "holes": [
      {
        "x": -5.08,
        "y": -5.08,
        "drill": 3.048
      },
      {
        "x": 5.08,
        "y": -5.08,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen13314"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13314"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13314"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-digital-temperature-sensor-breakout-tmp102.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/Hardware/Digital%20Temperature%20Sensor%20Breakout%20-%20TMP102.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/Hardware/Digital%20Temperature%20Sensor%20Breakout%20-%20TMP102.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-digital-temperature-sensor-breakout-tmp102.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13314",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13314. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.66,
      -2.11,
      7.66,
      7.66
    ]
  },
  {
    "id": "sparkfun-module-sen10740",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "SparkFun SEN-10740: EAGLE SparkFun_IR_Thermometer_Eval-MLX90614.brd; commit afc54826e084 header geometry", "url": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06"}, {"id": "JP2", "count": 8, "package": "1X08"}],
        "boardSha256": "857d5ac665368b28df0b46e58c7d92bc00d79341546c83c6d7f5bf4d74ca3d5f"
      },
      "bodyRegions": [
        {"x": -15.24, "y": -11.43, "width": 30.48, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-10740",
    "name": "SparkFun IR Thermometer Evaluation Board - MLX90614",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-ir-thermometer-evaluation-board-mlx90614.html",
    "revision": "EAGLE SparkFun_IR_Thermometer_Eval-MLX90614.brd; commit afc54826e084",
    "category": "Sensors",
    "board": {
      "width": 30.48,
      "height": 22.86,
      "color": "#9b242d",
      "outline": "M15.22 11.43L15.24 -11.43L-15.24 -11.43L-15.24 11.43L15.22 11.43Z"
    },
    "contacts": assets["sparkfun-module-sen10740"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-sen10740"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen10740"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen10740"]["provenance"],
    "internalConnections": [
      [
        "j1-2",
        "jp2-1"
      ],
      [
        "j1-6",
        "jp1-5",
        "jp1-6",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-ir-thermometer-evaluation-board-mlx90614.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-ir-thermometer-evaluation-board-mlx90614.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-10740",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-10740. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.28,
      -11.469999999999999,
      12.9103,
      11.47
    ]
  },
  {
    "id": "sparkfun-module-sen15805",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun SEN-15805: EAGLE v10 Sparkfun_TMP117_Qwiic.brd; commit aa763eaee71d header geometry", "url": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "9196c5492020bb2594d0c5d9a7b672514d58f515563dcc4f2a4b9c7ab03ebce3"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-15805",
    "name": "SparkFun High Precision Temperature Sensor - TMP117 (Qwiic)",
    "manufacturer": "SparkFun",
    "category": "Sensors",
    "revision": "EAGLE v10 Sparkfun_TMP117_Qwiic.brd; commit aa763eaee71d",
    "source": "https://www.sparkfun.com/sparkfun-high-precision-temperature-sensor-tmp117-qwiic.html",
    "references": [
      {
        "label": "Manufacturer exact-SKU offer",
        "url": "https://www.sparkfun.com/sparkfun-high-precision-temperature-sensor-tmp117-qwiic.html"
      },
      {
        "label": "Manufacturer module guide",
        "url": "https://learn.sparkfun.com/tutorials/qwiic-tmp117-high-precision-digital-temperature-sensor-hookup-guide/hardware-overview"
      },
      {
        "label": "Manufacturer EAGLE board",
        "url": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.brd"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.sch"
      },
      {
        "label": "Hardware license CC BY-SA 4.0",
        "url": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/LICENSE.md"
      },
      {
        "label": "TMP117 pin-function datasheet",
        "url": "https://www.ti.com/lit/ds/symlink/tmp117.pdf"
      }
    ],
    "description": "SparkFun SEN-15805 high-precision TMP117 temperature sensor module, source PCB v10. Five plated header/service contacts and both four-position Qwiic sockets are modeled at their exact physical source locations. The board runs from the 3.3 V Qwiic supply. INT is an open-drain alert/data-ready output. Thermal-isolation routing slots around the sensor are retained in the illustration. Board color and small finishes are representative.",
    "tags": [
      "sparkfun",
      "qwiic",
      "tmp117",
      "temperature",
      "module",
      "i2c",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-high-precision-temperature-sensor-tmp117-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-15805",
      "reportedStock": "In stock"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic",
      "url": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.brd"
    },
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen15805"]["contacts"],
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
    "artwork": assets["sparkfun-module-sen15805"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen15805"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -12.26,
      -4.917,
      12.26,
      6.6696
    ],
    "backArtworkBounds": [
      -10.327,
      -0.21780000000000002,
      11.9526,
      6.4154
    ],
    "provenance": assets["sparkfun-module-sen15805"]["provenance"],
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
    ]
  },
];
