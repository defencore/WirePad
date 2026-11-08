import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen12040",
    "sku": "SEN-12040",
    "name": "SparkFun Current Sensor Breakout - INA169",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-current-sensor-breakout-ina169.html",
    "revision": "EAGLE INA169_Breakout.brd; commit 42a78dbe618f",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.16 12.7A2.54 2.54 0 0 0 12.7 10.16L12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7Z"
    },
    "contacts": assets["sparkfun-module-sen12040"]["contacts"],
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
    "artwork": assets["sparkfun-module-sen12040"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12040"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12040"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-current-sensor-breakout-ina169.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/Hardware/INA169_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/Hardware/INA169_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-current-sensor-breakout-ina169.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12040",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12040. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.27,
      -8.091999999999999,
      10.619,
      12.74
    ]
  },
];
