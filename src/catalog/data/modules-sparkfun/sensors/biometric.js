import assets from "./biometric-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen15219",
    "sku": "SEN-15219",
    "name": "SparkFun Pulse Oximeter and Heart Rate Sensor - MAX30101 & MAX32664 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-pulse-oximeter-and-heart-rate-sensor-max30101-max32664-qwiic.html",
    "revision": "EAGLE SparkFun_Pulse_Oximeter_Heart-Rate_Sensor.brd; commit eadf4873d663",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 12.7,
      "color": "#9b242d",
      "outline": "M-12.7 6.35L-12.7 -6.35L12.7 -6.35L12.7 6.35L-12.7 6.35Z"
    },
    "contacts": assets["sparkfun-module-sen15219"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-sen15219"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen15219"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen15219"]["provenance"],
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
        "url": "https://www.sparkfun.com/sparkfun-pulse-oximeter-and-heart-rate-sensor-max30101-max32664-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Pulse_Oximeter_Heart_Rate_Sensor/blob/eadf4873d663a43eef36f3ed97415727a784df7b/Hardware/SparkFun_Pulse_Oximeter_Heart-Rate_Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Pulse_Oximeter_Heart_Rate_Sensor/blob/eadf4873d663a43eef36f3ed97415727a784df7b/Hardware/SparkFun_Pulse_Oximeter_Heart-Rate_Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Pulse_Oximeter_Heart_Rate_Sensor/blob/eadf4873d663a43eef36f3ed97415727a784df7b/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-pulse-oximeter-and-heart-rate-sensor-max30101-max32664-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-15219",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-15219. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.7614,
      -6.0878,
      11.762,
      5.91
    ],
    "backArtworkBounds": [
      -2.849809,
      -5.552,
      10.9112,
      3.060259
    ]
  },
];
