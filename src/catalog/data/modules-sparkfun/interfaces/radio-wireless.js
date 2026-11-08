import assets from "./radio-wireless-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen13030",
    "sku": "SEN-13030",
    "name": "SparkFun RFID Reader Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-rfid-reader-breakout.html",
    "revision": "EAGLE RFID_Breakout.brd; commit 9db9110ae20f",
    "category": "Wireless modules",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-10.541 -12.7A1.651 1.651 0 0 0 -7.239 -12.7L7.239 -12.7A1.651 1.651 0 0 0 10.541 -12.7L12.7 -12.7L12.7 12.7L10.541 12.7A1.651 1.651 0 0 0 7.239 12.7L-7.239 12.7A1.651 1.651 0 0 0 -10.541 12.7L-12.7 12.7L-12.7 -12.7L-10.541 -12.7Z"
    },
    "contacts": assets["sparkfun-module-sen13030"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-sen13030"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13030"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13030"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-rfid-reader-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RFID_Reader_Breakout/blob/9db9110ae20f114ab58c5dd117d58dd7b789db52/hardware/RFID_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RFID_Reader_Breakout/blob/9db9110ae20f114ab58c5dd117d58dd7b789db52/hardware/RFID_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RFID_Reader_Breakout/blob/9db9110ae20f114ab58c5dd117d58dd7b789db52/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-rfid-reader-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13030",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13030. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.739999999999998,
      -6.39,
      12.74,
      8.93
    ]
  },
  {
    "id": "sparkfun-module-wrl22032",
    "sku": "WRL-22032",
    "name": "SparkFun Digi XBee® Explorer Regulated",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-digi-xbeer-explorer-regulated.html",
    "revision": "EAGLE SparkFun_Digi_XBee_Regulated_Qwiic.brd; commit 0e25ebd7364d",
    "category": "Interfaces",
    "board": {
      "width": 35.56,
      "height": 52.07,
      "color": "#9b242d",
      "outline": "M-17.78 26.035L-17.78 -26.035L17.78 -26.035L17.78 26.035L-17.78 26.035Z"
    },
    "contacts": assets["sparkfun-module-wrl22032"]["contacts"],
    "holes": [
      {
        "x": 15.24,
        "y": -23.495,
        "drill": 3.048
      },
      {
        "x": 15.24,
        "y": 23.495,
        "drill": 3.048
      },
      {
        "x": -15.24,
        "y": -23.495,
        "drill": 3.048
      },
      {
        "x": -15.24,
        "y": 23.495,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-wrl22032"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl22032"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-wrl22032"]["provenance"],
    "internalConnections": [
      [
        "j4-1",
        "j6-10",
        "j2-10"
      ],
      [
        "j4-2",
        "j6-1",
        "j2-1"
      ],
      [
        "j4-3",
        "j6-7",
        "j2-7"
      ],
      [
        "j4-4",
        "j5-2",
        "j2-19"
      ],
      [
        "j5-1",
        "j2-20"
      ],
      [
        "j5-3",
        "j2-18"
      ],
      [
        "j5-4",
        "j2-17"
      ],
      [
        "j5-5",
        "j2-16"
      ],
      [
        "j5-6",
        "j2-15"
      ],
      [
        "j5-8",
        "j2-13"
      ],
      [
        "j5-9",
        "j2-12"
      ],
      [
        "j5-10",
        "j2-11"
      ],
      [
        "j6-2",
        "j2-2"
      ],
      [
        "j6-3",
        "j2-3"
      ],
      [
        "j6-4",
        "j2-4"
      ],
      [
        "j6-5",
        "j2-5"
      ],
      [
        "j6-6",
        "j2-6"
      ],
      [
        "j6-9",
        "j2-9"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-digi-xbeer-explorer-regulated.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Digi_XBee_Regulated_Qwiic/blob/0e25ebd7364daae9f0bd36c49f88e7d2f2435074/Hardware/SparkFun_Digi_XBee_Regulated_Qwiic.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Digi_XBee_Regulated_Qwiic/blob/0e25ebd7364daae9f0bd36c49f88e7d2f2435074/Hardware/SparkFun_Digi_XBee_Regulated_Qwiic.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Digi_XBee_Regulated_Qwiic/blob/0e25ebd7364daae9f0bd36c49f88e7d2f2435074/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-digi-xbeer-explorer-regulated.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-22032",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-22032. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.636,
      -24.704019,
      17.2485,
      25.595
    ],
    "backArtworkBounds": [
      -1.7672,
      12.66,
      16.4992,
      20.868
    ]
  },
  {
    "id": "sparkfun-module-wrl15836",
    "sku": "WRL-15836",
    "name": "SparkFun Pro RF - LoRa, 915MHz (SAMD21)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-pro-rf-lora-915mhz-samd21.html",
    "revision": "EAGLE SAMD21_Pro_RF.brd; commit 4d1cfcd83d3b",
    "category": "Interfaces",
    "board": {
      "width": 44.45,
      "height": 30.48,
      "color": "#9b242d",
      "outline": "M-13.716 12.7L-12.446 15.24L19.685 15.24A2.54 2.54 0 0 0 22.225 12.7L22.225 -12.7A2.54 2.54 0 0 0 19.685 -15.24L-12.573 -15.24L-13.843 -12.7L-19.685 -12.7A2.54 2.54 0 0 0 -22.225 -10.16L-22.225 10.16A2.54 2.54 0 0 0 -19.685 12.7L-13.716 12.7Z"
    },
    "contacts": assets["sparkfun-module-wrl15836"]["contacts"],
    "holes": [
      {
        "x": 15.875,
        "y": -13.97,
        "drill": 1.7
      },
      {
        "x": -14.375,
        "y": 11.176,
        "drill": 0.9
      },
      {
        "x": -17.375,
        "y": 11.176,
        "drill": 0.9
      },
      {
        "x": -15.875,
        "y": -10.276,
        "drill": 0.7
      },
      {
        "x": -15.875,
        "y": -12.076,
        "drill": 0.7
      },
      {
        "x": 19.685,
        "y": -12.7,
        "drill": 3.048
      },
      {
        "x": 19.685,
        "y": 12.7,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-wrl15836"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl15836"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl15836"]["provenance"],
    "internalConnections": [
      [
        "j1-shield7",
        "j1-shield2",
        "j1-shield",
        "j1-shield3",
        "j1-shield4",
        "j1-shield5",
        "j1-shield6",
        "j1-shield8",
        "j1-shield9",
        "j1-shield10"
      ],
      [
        "j1-gnd",
        "j7-1",
        "j8-1",
        "j6-1",
        "j6-2",
        "j6-3",
        "j6-4",
        "j6-5",
        "j6-6",
        "j6-7",
        "j6-8",
        "j6-9",
        "j6-10",
        "j5-1",
        "j5-2",
        "j5-3",
        "j5-4",
        "j5-5",
        "j5-6",
        "j5-7",
        "j5-8",
        "j5-9",
        "j12-1",
        "j2-1",
        "j11-1",
        "j13-1",
        "j13-2"
      ],
      [
        "j1-vbus",
        "j8-2"
      ],
      [
        "j7-2",
        "j12-2"
      ],
      [
        "j3-2",
        "j2-2"
      ],
      [
        "j4-1",
        "j13-feed"
      ],
      [
        "tp1-p-1",
        "j10-1"
      ],
      [
        "tp2-p-1",
        "j14-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-pro-rf-lora-915mhz-samd21.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SAMD21_Pro_RF/blob/4d1cfcd83d3b3f5626493ca8165d668130ef8da6/Hardware/SAMD21_Pro_RF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SAMD21_Pro_RF/blob/4d1cfcd83d3b3f5626493ca8165d668130ef8da6/Hardware/SAMD21_Pro_RF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SAMD21_Pro_RF/blob/4d1cfcd83d3b3f5626493ca8165d668130ef8da6/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-pro-rf-lora-915mhz-samd21.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-15836",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-15836. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -23.973,
      -13.315999999999999,
      21.912,
      14.016
    ],
    "backArtworkBounds": [
      -17.758,
      -8.167,
      17.057,
      8.9046
    ]
  },
];
