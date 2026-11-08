import assets from "./bus-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob09118",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp2-1", "jp2-2", "jp2-3", "jp2-4"],
      "source": {"label": "SparkFun BOB-09118: EAGLE SparkFun_Opto_Isolator_Breakout.brd; commit fcf3b555d610 header geometry", "url": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware/SparkFun_Opto_Isolator_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04"}, {"id": "JP2", "count": 4, "package": "1X04"}],
        "boardSha256": "5ea67b035204ff4afbc6c603e9e443f4a5d0e34d139199b3fa7029315f8911da"
      },
      "bodyRegions": [
        {"x": -7.62, "y": -6.35, "width": 15.24, "height": 12.7}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-09118",
    "name": "SparkFun Opto-isolator Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-opto-isolator-breakout.html",
    "revision": "EAGLE SparkFun_Opto_Isolator_Breakout.brd; commit fcf3b555d610",
    "category": "Interfaces",
    "board": {
      "width": 15.24,
      "height": 12.7,
      "color": "#9b242d",
      "outline": "M-7.62 6.35L7.62 6.35L7.62 -6.35L-7.62 -6.35L-7.62 6.35Z"
    },
    "contacts": assets["sparkfun-module-bob09118"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob09118"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob09118"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob09118"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-opto-isolator-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware/SparkFun_Opto_Isolator_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware/SparkFun_Opto_Isolator_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-opto-isolator-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-09118",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-09118. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.777,
      -4.55,
      4.8154,
      5.6788
    ],
    "backArtworkBounds": [
      -7.66,
      -5.12,
      7.66,
      5.12
    ]
  },
  {
    "id": "sparkfun-module-bob13906",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j1-7", "j1-8", "j1-9", "j1-10", "j1-11", "j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8"],
      "source": {"label": "SparkFun BOB-13906: EAGLE SparkFun-74HC4051-8-Channel-Mux-Breakout.brd; commit 937d5446a825 header geometry", "url": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/Hardware/SparkFun-74HC4051-8-Channel-Mux-Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 11, "package": "1X11"}, {"id": "J2", "count": 8, "package": "1X08_ROUND"}],
        "boardSha256": "4005b7cbb6652c2b38402d8d6accb0fe260728bf81bd0086a54f780a6d578e29"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -13.97, "width": 12.7, "height": 27.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-13906",
    "name": "SparkFun Multiplexer Breakout - 8 Channel (74HC4051)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-multiplexer-breakout-8-channel-74hc4051.html",
    "revision": "EAGLE SparkFun-74HC4051-8-Channel-Mux-Breakout.brd; commit 937d5446a825",
    "category": "Interfaces",
    "board": {
      "width": 12.7,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M-6.35 13.97L-6.35 -13.97L6.35 -13.97L6.35 13.97L-6.35 13.97Z"
    },
    "contacts": assets["sparkfun-module-bob13906"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 0,
        "y": 11.43,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob13906"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob13906"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob13906"]["provenance"],
    "internalConnections": [
      [
        "j1-9",
        "j2-6"
      ],
      [
        "j1-10",
        "j2-7"
      ],
      [
        "j1-11",
        "j2-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-multiplexer-breakout-8-channel-74hc4051.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/Hardware/SparkFun-74HC4051-8-Channel-Mux-Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/Hardware/SparkFun-74HC4051-8-Channel-Mux-Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-multiplexer-breakout-8-channel-74hc4051.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-13906",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-13906. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -1.417,
      -4.269,
      1.417,
      6.809
    ],
    "backArtworkBounds": [
      -6.39,
      -14.01,
      6.39,
      14.01
    ]
  },
  {
    "id": "sparkfun-module-bob09056",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8"],
      "source": {"label": "SparkFun BOB-09056: EAGLE Analog-Digital-Mux-Breakout.brd; commit f7f2eeb11761 header geometry", "url": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/Hardware/Analog-Digital-Mux-Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16"}, {"id": "JP3", "count": 8, "package": "1X08"}],
        "boardSha256": "801aac85612c46bd2941977f1febb9f025d41f54f8ccf912b33ae60706d8f408"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -20.32, "width": 17.78, "height": 40.64}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-09056",
    "name": "SparkFun Analog/Digital MUX Breakout - CD74HC4067",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-analog-digital-mux-breakout-cd74hc4067.html",
    "revision": "EAGLE Analog-Digital-Mux-Breakout.brd; commit f7f2eeb11761",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 40.64,
      "color": "#9b242d",
      "outline": "M-8.89 20.32L8.89 20.32L8.89 -20.32L-8.89 -20.32L-8.89 20.32Z"
    },
    "contacts": assets["sparkfun-module-bob09056"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": -17.78,
        "drill": 3.302
      },
      {
        "x": 6.35,
        "y": 17.78,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob09056"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob09056"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob09056"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-analog-digital-mux-breakout-cd74hc4067.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/Hardware/Analog-Digital-Mux-Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/Hardware/Analog-Digital-Mux-Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-analog-digital-mux-breakout-cd74hc4067.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-09056",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-09056. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.29,
      -6.746,
      4.29,
      9.286
    ],
    "backArtworkBounds": [
      -8.93,
      -20.36,
      8.93,
      20.36
    ]
  },
  {
    "id": "sparkfun-module-dev17047",
    "mountingReview": {
      "contactIds": ["j9-1", "j9-2", "j9-3", "j9-4"],
      "source": {"label": "SparkFun DEV-17047: EAGLE Qwiic_GPIO.brd; commit d3fc4672ccd7 header geometry", "url": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/Hardware/Qwiic_GPIO.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J9", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "2d8ed56bf13a1880bb2ffd87c0260be6e3438df6c62a7c5c1bea361ca20d64c1"
      },
      "bodyRegions": [
        {"x": -30.48, "y": -19.05, "width": 60.96, "height": 38.1}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "DEV-17047",
    "name": "SparkFun Qwiic GPIO",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-gpio.html",
    "revision": "EAGLE Qwiic_GPIO.brd; commit d3fc4672ccd7",
    "category": "Interfaces",
    "board": {
      "width": 60.96,
      "height": 38.1,
      "color": "#9b242d",
      "outline": "M-30.48 -19.05L30.48 -19.05L30.48 19.05L-30.48 19.05L-30.48 -19.05Z"
    },
    "contacts": assets["sparkfun-module-dev17047"]["contacts"],
    "holes": [
      {
        "x": -27.94,
        "y": 16.51,
        "drill": 3.302
      },
      {
        "x": 27.94,
        "y": 16.51,
        "drill": 3.302
      },
      {
        "x": 27.94,
        "y": -16.51,
        "drill": 3.302
      },
      {
        "x": -27.94,
        "y": -16.51,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-dev17047"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev17047"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-dev17047"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j4-1",
        "j5-4",
        "j6-1",
        "j1-4",
        "j8-1",
        "j9-1"
      ],
      [
        "j2-2",
        "j4-2",
        "j6-4",
        "j1-1",
        "j8-4",
        "j9-2"
      ],
      [
        "j2-3",
        "j4-3",
        "j9-3"
      ],
      [
        "j2-4",
        "j4-4",
        "j9-4"
      ],
      [
        "j5-1",
        "j7-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-gpio.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/Hardware/Qwiic_GPIO.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/Hardware/Qwiic_GPIO.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-gpio.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-17047",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-17047. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -30.04,
      -19.04,
      30.04,
      19.04
    ],
    "backArtworkBounds": [
      -28.4372,
      -11.216,
      25.186,
      11.4192
    ]
  },
];
