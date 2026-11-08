import assets from "./pressure-force-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen11084",
    "sku": "SEN-11084",
    "name": "SparkFun Altitude/Pressure Sensor Breakout - MPL3115A2",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-altitude-pressure-sensor-breakout-mpl3115a2.html",
    "revision": "EAGLE MPL3115A2_breakout.brd; commit d80362a56081",
    "category": "Sensors",
    "board": {
      "width": 15.24,
      "height": 17.78,
      "color": "#9b242d",
      "outline": "M-7.62 -8.89L7.62 -8.89L7.62 8.89L-7.62 8.89L-7.62 -8.89Z"
    },
    "contacts": assets["sparkfun-module-sen11084"]["contacts"],
    "holes": [
      {
        "x": 5.08,
        "y": -6.35,
        "drill": 3.302
      },
      {
        "x": -5.08,
        "y": -6.35,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen11084"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen11084"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen11084"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-altitude-pressure-sensor-breakout-mpl3115a2.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MPL3115A2_Breakout/blob/d80362a56081f9dc7d808d2cca5a535589d9becb/hardware/MPL3115A2_breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MPL3115A2_Breakout/blob/d80362a56081f9dc7d808d2cca5a535589d9becb/hardware/MPL3115A2_breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MPL3115A2_Breakout/blob/d80362a56081f9dc7d808d2cca5a535589d9becb/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-altitude-pressure-sensor-breakout-mpl3115a2.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-11084",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-11084. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.66,
      -7.62,
      7.66,
      8.93
    ]
  },
  {
    "id": "sparkfun-module-sen12909",
    "sku": "SEN-12909",
    "name": "SparkFun Pressure Sensor Breakout - MS5803-14BA",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-pressure-sensor-breakout-ms5803-14ba.html",
    "revision": "EAGLE SparkFun_MS5803-14BA_Breakout.brd; commit 06fa9f23e3c6",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 17.78,
      "color": "#9b242d",
      "outline": "M-10.16 8.89L10.16 8.89L10.16 -8.89L-10.16 -8.89L-10.16 8.89Z"
    },
    "contacts": assets["sparkfun-module-sen12909"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": 1.27,
        "drill": 3.048
      },
      {
        "x": 7.62,
        "y": -6.35,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen12909"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12909"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12909"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-pressure-sensor-breakout-ms5803-14ba.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MS5803-14BA_Breakout/blob/06fa9f23e3c6b21b5588d30fa55342043b2a4e08/Hardware/SparkFun_MS5803-14BA_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MS5803-14BA_Breakout/blob/06fa9f23e3c6b21b5588d30fa55342043b2a4e08/Hardware/SparkFun_MS5803-14BA_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MS5803-14BA_Breakout/blob/06fa9f23e3c6b21b5588d30fa55342043b2a4e08/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-pressure-sensor-breakout-ms5803-14ba.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12909",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12909. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.184,
      -5.78,
      9.676,
      8.93
    ]
  },
  {
    "id": "sparkfun-module-sen16476",
    "sku": "SEN-16476",
    "name": "SparkFun Qwiic MicroPressure Sensor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-micropressure-sensor.html",
    "revision": "EAGLE SparkFun_MicroPressure_Sensor.brd; commit 8dbe741d6e93",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen16476"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.302
      },
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
        "x": 0.86,
        "y": 0.05,
        "drill": 1
      }
    ],
    "artwork": assets["sparkfun-module-sen16476"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen16476"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen16476"]["provenance"],
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
        "url": "https://www.sparkfun.com/sparkfun-qwiic-micropressure-sensor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroPressure_Sensor/blob/8dbe741d6e9372edd12e93c4f34f845914d4b4b4/Hardware/SparkFun_MicroPressure_Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroPressure_Sensor/blob/8dbe741d6e9372edd12e93c4f34f845914d4b4b4/Hardware/SparkFun_MicroPressure_Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroPressure_Sensor/blob/8dbe741d6e9372edd12e93c4f34f845914d4b4b4/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-micropressure-sensor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-16476",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-16476. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -6.568,
      12.26,
      5.158
    ],
    "backArtworkBounds": [
      -9.437999999999999,
      -8.295,
      1.7672,
      -4.0748
    ]
  },
];
