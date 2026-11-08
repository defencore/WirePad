import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob13282",
    "sku": "BOB-13282",
    "name": "SparkFun RGB LED Breakout - WS2812B",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-rgb-led-breakout-ws2812b.html",
    "revision": "EAGLE SparkFunws2812bBreakout.brd; commit 80e00a06f276",
    "category": "Indicators",
    "board": {
      "width": 17.78,
      "height": 12.7,
      "color": "#9b242d",
      "outline": "M-8.89 6.35L-8.89 -6.35L8.89 -6.35L8.89 6.35L-8.89 6.35Z"
    },
    "contacts": assets["sparkfun-module-bob13282"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": -3.81,
        "drill": 3.302
      },
      {
        "x": -6.35,
        "y": -3.81,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob13282"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob13282"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob13282"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-1"
      ],
      [
        "jp1-3",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-rgb-led-breakout-ws2812b.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/Hardware/SparkFunws2812bBreakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/Hardware/SparkFunws2812bBreakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-rgb-led-breakout-ws2812b.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-13282",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-13282. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.93,
      -1.31,
      8.93,
      6.39
    ]
  },
  {
    "id": "sparkfun-module-bob11722",
    "sku": "BOB-11722",
    "name": "SparkFun Rotary Encoder Breakout - Illuminated (RG/RGB)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-rotary-encoder-breakout-illuminated-rg-rgb.html",
    "revision": "EAGLE SparkFun_Rotary_Encoder-Illuminated.brd; commit 340b6eaf4db6",
    "category": "Inputs",
    "board": {
      "width": 15.24,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M7.62 13.97L7.62 -13.97L-7.62 -13.97L-7.62 13.97L7.62 13.97Z"
    },
    "contacts": assets["sparkfun-module-bob11722"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob11722"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob11722"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob11722"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-rotary-encoder-breakout-illuminated-rg-rgb.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/Hardware/SparkFun_Rotary_Encoder-Illuminated.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/Hardware/SparkFun_Rotary_Encoder-Illuminated.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-rotary-encoder-breakout-illuminated-rg-rgb.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-11722",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-11722. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part. This is an unpopulated passive carrier PCB; the intended device pin names identify its traces and no active driver is fitted.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.39,
      -14.01,
      6.39,
      14.01
    ],
    "backArtworkBounds": [
      -6.24,
      -5.47,
      6.24,
      8.01
    ]
  },
  {
    "id": "sparkfun-module-sen12041",
    "sku": "SEN-12041",
    "name": "SparkFun Capacitive Touch Breakout - AT42QT1010",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-capacitive-touch-breakout-at42qt1010.html",
    "revision": "EAGLE AT42QT1010_Capacitive_Touch_Breakout.brd; commit 333b46787981",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 33.02,
      "color": "#9b242d",
      "outline": "M-12.7 -13.97A2.54 2.54 0 0 1 -10.16 -16.51L10.16 -16.51A2.54 2.54 0 0 1 12.7 -13.97L12.7 13.97A2.54 2.54 0 0 1 10.16 16.51L-10.16 16.51A2.54 2.54 0 0 1 -12.7 13.97L-12.7 -13.97Z"
    },
    "contacts": assets["sparkfun-module-sen12041"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 13.97,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": 13.97,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": -13.97,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": -13.97,
        "drill": 3.302
      },
      {
        "x": -2.54,
        "y": 15.24,
        "drill": 1.4
      },
      {
        "x": 2.54,
        "y": 15.24,
        "drill": 1.4
      },
      {
        "x": 0,
        "y": 2.54,
        "drill": 2.3
      }
    ],
    "artwork": assets["sparkfun-module-sen12041"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12041"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12041"]["provenance"],
    "internalConnections": [
      [
        "jp5-1",
        "jp9-p-1"
      ],
      [
        "jp6-4",
        "jp8-1",
        "j1-1"
      ],
      [
        "jp6-3",
        "jp7-1",
        "j1-2"
      ],
      [
        "jp6-2",
        "jp8-3",
        "j1-3"
      ],
      [
        "jp6-1",
        "jp7-2",
        "j1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-capacitive-touch-breakout-at42qt1010.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/Hardware/AT42QT1010_Capacitive_Touch_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/Hardware/AT42QT1010_Capacitive_Touch_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-capacitive-touch-breakout-at42qt1010.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12041",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12041. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.632,
      -7.66,
      11.47,
      22.53
    ]
  },
  {
    "id": "sparkfun-module-bob13884",
    "sku": "BOB-13884",
    "name": "SparkFun LED Driver Breakout - LP55231",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-led-driver-breakout-lp55231.html",
    "revision": "EAGLE LP55231_breakout.brd; commit 22344d31a032",
    "category": "Indicators",
    "board": {
      "width": 22.86,
      "height": 30.48,
      "color": "#9b242d",
      "outline": "M-11.43 15.24L11.43 15.24L11.43 -15.24L-11.43 -15.24L-11.43 15.24Z"
    },
    "contacts": assets["sparkfun-module-bob13884"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob13884"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob13884"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob13884"]["provenance"],
    "internalConnections": [
      [
        "j2-2",
        "j3-2",
        "j4-2",
        "j1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-led-driver-breakout-lp55231.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/Hardware/LP55231_breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/Hardware/LP55231_breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-led-driver-breakout-lp55231.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-13884",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-13884. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.127,
      -12.7,
      7.62,
      12.7
    ],
    "backArtworkBounds": [
      -4.866,
      -12.994,
      3.342,
      13.502
    ]
  },
  {
    "id": "sparkfun-module-bob15931",
    "sku": "BOB-15931",
    "name": "SparkFun Qwiic Button Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-button-breakout.html",
    "revision": "EAGLE Qwiic_Button.brd; commit e89a82fe2ddb",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-bob15931"]["contacts"],
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
        "x": 4.5,
        "y": -5.08,
        "drill": 1.6
      },
      {
        "x": -4.5,
        "y": -5.08,
        "drill": 1.6
      }
    ],
    "artwork": assets["sparkfun-module-bob15931"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob15931"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-bob15931"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j1-4",
        "jp1-1",
        "j7-6",
        "jp4-1",
        "jp5-1",
        "jp7-1"
      ],
      [
        "j2-2",
        "j3-2",
        "j1-3",
        "jp3-2",
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
        "url": "https://www.sparkfun.com/sparkfun-qwiic-button-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/Hardware/Qwiic_Button.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/Hardware/Qwiic_Button.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-button-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-15931",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-15931. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -11.12,
      12.26,
      9.6412
    ],
    "backArtworkBounds": [
      7.6308,
      2.754,
      10.1492,
      4.866
    ]
  },
  {
    "id": "sparkfun-module-bob10616",
    "sku": "BOB-10616",
    "name": "SparkFun LED Driver Breakout - TLC5940 (16 Channel)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-led-driver-breakout-tlc5940-16-channel.html",
    "revision": "EAGLE SparkFun_TLC5940_Breakout.brd; commit 52c035a3753d",
    "category": "Indicators",
    "board": {
      "width": 59.69,
      "height": 26.67,
      "color": "#9b242d",
      "outline": "M-29.845 13.335L-29.845 -13.335L29.845 -13.335L29.845 13.335L-29.845 13.335Z"
    },
    "contacts": assets["sparkfun-module-bob10616"]["contacts"],
    "holes": [
      {
        "x": -18.415,
        "y": -10.795,
        "drill": 3.302
      },
      {
        "x": 19.685,
        "y": -10.795,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob10616"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob10616"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob10616"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-1",
        "jp3-1",
        "jp4-1",
        "jp5-1",
        "jp6-1",
        "jp7-1",
        "jp8-1",
        "jp9-1",
        "jp10-1",
        "jp11-1",
        "jp12-1",
        "jp13-1",
        "jp14-1",
        "jp15-1",
        "jp16-1",
        "jp22-7",
        "jp23-7"
      ],
      [
        "jp1-2",
        "jp2-2",
        "jp3-2",
        "jp4-2",
        "jp5-2",
        "jp6-2",
        "jp7-2",
        "jp8-2",
        "jp9-2",
        "jp10-2",
        "jp11-2",
        "jp12-2",
        "jp13-2",
        "jp14-2",
        "jp15-2",
        "jp16-2",
        "jp22-6",
        "jp23-6"
      ],
      [
        "jp19-1",
        "jp20-1"
      ],
      [
        "jp19-2",
        "jp20-2"
      ],
      [
        "jp22-1",
        "jp23-1"
      ],
      [
        "jp22-2",
        "jp23-2"
      ],
      [
        "jp22-3",
        "jp23-3"
      ],
      [
        "jp22-5",
        "jp23-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-led-driver-breakout-tlc5940-16-channel.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/Hardware/SparkFun_TLC5940_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/Hardware/SparkFun_TLC5940_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-led-driver-breakout-tlc5940-16-channel.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-10616",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-10616. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -29.884999999999998,
      -12.186281,
      29.885,
      13.375
    ],
    "backArtworkBounds": [
      -13.120999999999999,
      -3.0245,
      -11.009,
      -0.7855
    ]
  },
  {
    "id": "sparkfun-module-com16916",
    "sku": "COM-16916",
    "name": "SparkFun Qwiic Alphanumeric Display - Red",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-alphanumeric-display-red.html",
    "revision": "EAGLE Qwiic_Alphanumeric_Display.brd; commit 93e6d110892d",
    "category": "Indicators",
    "board": {
      "width": 40.64,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M20.32 13.97L20.32 -13.97L-20.32 -13.97L-20.32 13.97L20.32 13.97Z"
    },
    "contacts": assets["sparkfun-module-com16916"]["contacts"],
    "holes": [
      {
        "x": 17.78,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -17.78,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": -17.78,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": 17.78,
        "y": -11.43,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-com16916"]["artwork"],
    "backArtwork": assets["sparkfun-module-com16916"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-com16916"]["provenance"],
    "internalConnections": [
      [
        "j3-1",
        "j4-1",
        "j5-1"
      ],
      [
        "j3-2",
        "j4-2",
        "j5-2"
      ],
      [
        "j3-3",
        "j4-3",
        "j5-3"
      ],
      [
        "j3-4",
        "j4-4",
        "j5-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-alphanumeric-display-red.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/Hardware/Qwiic_Alphanumeric_Display.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/Hardware/Qwiic_Alphanumeric_Display.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-alphanumeric-display-red.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "COM-16916",
      "reportedStock": "In stock"
    },
    "description": "SparkFun COM-16916. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.955,
      -7.787,
      19.844,
      7.787
    ],
    "backArtworkBounds": [
      -20.022,
      -8.023,
      20.058,
      8.057
    ]
  },
  {
    "id": "sparkfun-module-lcd23453",
    "sku": "LCD-23453",
    "name": "SparkFun Qwiic OLED - (1.3in., 128x64)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-oled-1-3in-128x64.html",
    "revision": "EAGLE Qwiic_OLED_1.3in.brd; commit fe1cef157c99",
    "category": "Indicators",
    "board": {
      "width": 35.56,
      "height": 36.83,
      "color": "#9b242d",
      "outline": "M-17.78 15.875A2.54 2.54 0 0 0 -15.24 18.415A2.54 2.54 0 0 0 -12.7 15.875L-12.7 12.7L12.7 12.7L12.7 15.875A2.54 2.54 0 0 0 15.24 18.415A2.54 2.54 0 0 0 17.78 15.875L17.78 -15.875A2.54 2.54 0 0 0 15.24 -18.415A2.54 2.54 0 0 0 12.7 -15.875L12.7 -12.7L-12.7 -12.7L-12.7 -15.875A2.54 2.54 0 0 0 -15.24 -18.415A2.54 2.54 0 0 0 -17.78 -15.875L-17.78 15.875Z"
    },
    "contacts": assets["sparkfun-module-lcd23453"]["contacts"],
    "holes": [
      {
        "x": -8,
        "y": 7.56,
        "drill": 0.8
      },
      {
        "x": 8,
        "y": 7.56,
        "drill": 0.8
      },
      {
        "x": -15.24,
        "y": -15.875,
        "drill": 3.302
      },
      {
        "x": 15.24,
        "y": -15.875,
        "drill": 3.302
      },
      {
        "x": 15.24,
        "y": 15.875,
        "drill": 3.302
      },
      {
        "x": -15.24,
        "y": 15.875,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-lcd23453"]["artwork"],
    "backArtwork": assets["sparkfun-module-lcd23453"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-lcd23453"]["provenance"],
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
        "url": "https://www.sparkfun.com/sparkfun-qwiic-oled-1-3in-128x64.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/Hardware/Qwiic_OLED_1.3in.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/Hardware/Qwiic_OLED_1.3in.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-oled-1-3in-128x64.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "LCD-23453",
      "reportedStock": "In stock"
    },
    "description": "SparkFun LCD-23453. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.475999999999999,
      -12.26,
      9.349,
      12.26
    ],
    "backArtworkBounds": [
      -17.29,
      2.62,
      17.29,
      37.85
    ]
  },
  {
    "id": "sparkfun-module-lcd22495",
    "sku": "LCD-22495",
    "name": "SparkFun Micro OLED Breakout (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micro-oled-breakout-qwiic-lcd-22495.html",
    "revision": "EAGLE Qwiic_OLED_Breakout.brd; commit c3ee0d437bd6",
    "category": "Indicators",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M10.16 10.16L10.16 -10.16L-10.16 -10.16L-10.16 10.16L10.16 10.16Z"
    },
    "contacts": assets["sparkfun-module-lcd22495"]["contacts"],
    "holes": [
      {
        "x": -8.375,
        "y": 6.448,
        "drill": 0.8
      },
      {
        "x": 8.375,
        "y": 6.448,
        "drill": 0.8
      }
    ],
    "artwork": assets["sparkfun-module-lcd22495"]["artwork"],
    "backArtwork": assets["sparkfun-module-lcd22495"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-lcd22495"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j4-1"
      ],
      [
        "j1-2",
        "j2-2",
        "j4-2"
      ],
      [
        "j1-3",
        "j2-3",
        "j4-3"
      ],
      [
        "j1-4",
        "j2-4",
        "j4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micro-oled-breakout-qwiic-lcd-22495.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/Hardware/Qwiic_OLED_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/Hardware/Qwiic_OLED_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micro-oled-breakout-qwiic-lcd-22495.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "LCD-22495",
      "reportedStock": "In stock"
    },
    "description": "SparkFun LCD-22495. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.081999999999999,
      -9.719999999999999,
      5.539,
      9.72
    ],
    "backArtworkBounds": [
      -9.27,
      -10.191999999999998,
      9.315,
      10.188
    ]
  },
  {
    "id": "sparkfun-module-lcd24606",
    "sku": "LCD-24606",
    "name": "SparkFun Qwiic OLED Display (0.91 in., 128x32)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-oled-display-0-91-in-128x32-lcd-24606.html",
    "revision": "EAGLE OLED Display.brd; commit 270ccc6685ca",
    "category": "Indicators",
    "board": {
      "width": 44.412,
      "height": 12.714,
      "color": "#9b242d",
      "outline": "M-22.206 6.357L22.206 6.357L22.206 -6.357L-22.206 -6.357L-22.206 6.357Z"
    },
    "contacts": assets["sparkfun-module-lcd24606"]["contacts"],
    "holes": [
      {
        "x": -19.666,
        "y": -3.803,
        "drill": 3.048
      },
      {
        "x": 19.704,
        "y": -3.803,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-lcd24606"]["artwork"],
    "backArtwork": assets["sparkfun-module-lcd24606"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-lcd24606"]["provenance"],
    "internalConnections": [
      [
        "j3-1",
        "j1-1",
        "tp4-1"
      ],
      [
        "j3-2",
        "j1-2",
        "tp3-1"
      ],
      [
        "j3-3",
        "j1-3",
        "tp2-1"
      ],
      [
        "j3-4",
        "j1-4",
        "tp1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-oled-display-0-91-in-128x32-lcd-24606.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/Hardware/OLED%20Display.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/Hardware/OLED%20Display.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-oled-display-0-91-in-128x32-lcd-24606.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "LCD-24606",
      "reportedStock": "In stock"
    },
    "description": "SparkFun LCD-24606. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.276999999999997,
      -6.072,
      16.403,
      5.508
    ],
    "backArtworkBounds": [
      -21.102999999999998,
      -4.516,
      21.141,
      5.887
    ]
  },
  {
    "id": "sparkfun-module-lcd13003",
    "sku": "LCD-13003",
    "name": "SparkFun Micro OLED Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micro-oled-breakout.html",
    "revision": "EAGLE SparkFun_Micro-OLED_Breakout.brd; commit c7dd8939c905",
    "category": "Indicators",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-10.16 10.16L-10.16 -10.16L10.16 -10.16L10.16 10.16L-10.16 10.16Z"
    },
    "contacts": assets["sparkfun-module-lcd13003"]["contacts"],
    "holes": [
      {
        "x": 8.26,
        "y": 6.448,
        "drill": 0.8
      },
      {
        "x": -8.49,
        "y": 6.448,
        "drill": 0.8
      }
    ],
    "artwork": assets["sparkfun-module-lcd13003"]["artwork"],
    "backArtwork": assets["sparkfun-module-lcd13003"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-lcd13003"]["provenance"],
    "internalConnections": [
      [
        "tp1-p-1",
        "tp2-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micro-oled-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/Hardware/SparkFun_Micro-OLED_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/Hardware/SparkFun_Micro-OLED_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micro-oled-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "LCD-13003",
      "reportedStock": "In stock"
    },
    "description": "SparkFun LCD-13003. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "backArtworkBounds": [
      -9.946,
      -4.104,
      9.53,
      3.545
    ]
  },
  {
    "id": "sparkfun-module-dev15083",
    "sku": "DEV-15083",
    "name": "SparkFun Qwiic Twist - RGB Rotary Encoder Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-twist-rgb-rotary-encoder-breakout.html",
    "revision": "EAGLE Qwiic Twist.brd; commit f9bbde3fad9b",
    "category": "Inputs",
    "board": {
      "width": 30.48,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-15.24 12.7L-15.24 -12.7L15.24 -12.7L15.24 12.7L-15.24 12.7Z"
    },
    "contacts": assets["sparkfun-module-dev15083"]["contacts"],
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
      },
      {
        "x": -12.7,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": 12.7,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-dev15083"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15083"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-dev15083"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j4-1",
        "jp7-1",
        "j7-6"
      ],
      [
        "j2-2",
        "j3-2",
        "j4-2",
        "jp9-2",
        "j7-2"
      ],
      [
        "j2-3",
        "j3-3",
        "j4-3",
        "j7-4"
      ],
      [
        "j2-4",
        "j3-4",
        "j4-4",
        "j7-3"
      ],
      [
        "j10-1",
        "j7-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-twist-rgb-rotary-encoder-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/Hardware/Qwiic%20Twist.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/Hardware/Qwiic%20Twist.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-twist-rgb-rotary-encoder-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15083",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15083. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.799999999999999,
      -8.345999999999998,
      14.8,
      9.286
    ],
    "backArtworkBounds": [
      -13.578199999999999,
      -6.24,
      13.9592,
      7.406
    ]
  },
  {
    "id": "sparkfun-module-com15290",
    "sku": "COM-15290",
    "name": "SparkFun Qwiic Keypad - 12 Button",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-keypad-12-button.html",
    "revision": "EAGLE Qwiic_keypad.brd; commit 3c219d96fedc",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-com15290"]["contacts"],
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
    "artwork": assets["sparkfun-module-com15290"]["artwork"],
    "backArtwork": assets["sparkfun-module-com15290"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-com15290"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j4-1",
        "j6-6",
        "jp4-1"
      ],
      [
        "j2-2",
        "j3-2",
        "j4-2",
        "j6-2"
      ],
      [
        "j2-3",
        "j3-3",
        "j4-3",
        "j6-4"
      ],
      [
        "j2-4",
        "j3-4",
        "j4-4",
        "j6-3"
      ],
      [
        "j6-1",
        "j8-6"
      ],
      [
        "j6-5",
        "j5-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-keypad-12-button.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/Hardware/Qwiic_keypad.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/Hardware/Qwiic_keypad.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-keypad-12-button.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "COM-15290",
      "reportedStock": "In stock"
    },
    "description": "SparkFun COM-15290. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -6.136,
      12.26,
      7.406
    ]
  },
  {
    "id": "sparkfun-module-bob11570",
    "sku": "BOB-11570",
    "name": "SparkFun TRRS 3.5mm Jack Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-trrs-3-5mm-jack-breakout.html",
    "revision": "EAGLE SparkFun_TRRS_3.5mm_Jack_Breakout.brd; commit 1e6fa3677d11",
    "category": "Indicators",
    "board": {
      "width": 12.7,
      "height": 17.78,
      "color": "#9b242d",
      "outline": "M6.33 8.89L6.35 -8.89L-6.35 -8.89L-6.35 8.89L6.33 8.89Z"
    },
    "contacts": assets["sparkfun-module-bob11570"]["contacts"],
    "holes": [
      {
        "x": -4.75,
        "y": -3.81,
        "drill": 1.2
      },
      {
        "x": 2.25,
        "y": -3.81,
        "drill": 1.2
      }
    ],
    "artwork": assets["sparkfun-module-bob11570"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob11570"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob11570"]["provenance"],
    "internalConnections": [
      [
        "jp2-tip",
        "jp1-4"
      ],
      [
        "jp2-earth",
        "jp1-1"
      ],
      [
        "jp2-ring1",
        "jp1-3"
      ],
      [
        "jp2-ring2",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-trrs-3-5mm-jack-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-trrs-3-5mm-jack-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-11570",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-11570. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.12,
      6.31,
      5.12,
      8.93
    ]
  },
];
