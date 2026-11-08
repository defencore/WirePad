import assets from "./adapters-carriers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5830",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6"],
      "source": {"label": "Adafruit ADA5830: EAGLE Adafruit LM66200 Ideal Diode Breakout.brd; commit a305a260e91b header geometry", "url": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/Adafruit%20LM66200%20Ideal%20Diode%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "46bf6a6a842f51fdb3cbe87e57a614b3e8e0a7214f4a5f5e956236798d8b6918"
      },
      "bodyRegions": [
        {"x": -8.255, "y": -5.08, "width": 16.51, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5830",
    "name": "Adafruit LM66200 Ideal Dual Diodes Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5830",
    "revision": "EAGLE Adafruit LM66200 Ideal Diode Breakout.brd; commit a305a260e91b",
    "category": "Interfaces",
    "board": {
      "width": 16.51,
      "height": 10.16,
      "color": "#246545",
      "outline": "M-5.715 5.08A2.54 2.54 0 0 1 -8.255 2.54L-8.255 -2.54A2.54 2.54 0 0 1 -5.715 -5.08L5.715 -5.08A2.54 2.54 0 0 1 8.255 -2.54L8.255 2.54A2.54 2.54 0 0 1 5.715 5.08L-5.715 5.08Z"
    },
    "contacts": assets["adafruit-module-5830"]["contacts"],
    "holes": [
      {
        "x": -5.715,
        "y": -2.54,
        "drill": 2.5
      },
      {
        "x": 5.715,
        "y": -2.54,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5830"]["artwork"],
    "backArtwork": assets["adafruit-module-5830"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5830"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5830"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/Adafruit%20LM66200%20Ideal%20Diode%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/Adafruit%20LM66200%20Ideal%20Diode%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5830",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5830",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5830. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.849,
      -1.725,
      2.047,
      0.455
    ]
  },
  {
    "id": "adafruit-module-6066",
    "sku": "ADA6066",
    "name": "Adafruit Pixel Shifter - For Addressable LEDs",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6066",
    "revision": "EAGLE Adafruit Pixel Shifter.brd; commit e8ec19ef46cd",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 15.24,
      "color": "#246545",
      "outline": "M10.16 -7.62A2.54 2.54 0 0 1 12.7 -5.08L12.7 5.08A2.54 2.54 0 0 1 10.16 7.62L-10.16 7.62A2.54 2.54 0 0 1 -12.7 5.08L-12.7 -5.08A2.54 2.54 0 0 1 -10.16 -7.62L10.16 -7.62Z"
    },
    "contacts": assets["adafruit-module-6066"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.08,
        "drill": 2.5
      },
      {
        "x": 0,
        "y": 5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6066"]["artwork"],
    "backArtwork": assets["adafruit-module-6066"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6066"]["provenance"],
    "internalConnections": [
      [
        "jp4-1",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6066"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/Adafruit%20Pixel%20Shifter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/Adafruit%20Pixel%20Shifter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6066",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6066",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6066. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.86,
      -5.44,
      10.86,
      5.44
    ],
    "backArtworkBounds": [
      2.1189999999999998,
      -4.993,
      4.231,
      -1.611
    ]
  },
  {
    "id": "adafruit-module-5743",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA5743: EAGLE Gamepad Seesaw QT rev A.brd; commit f214e3c4c4cc header geometry", "url": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/Gamepad%20Seesaw%20QT%20rev%20A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND"}],
        "boardSha256": "b60d024c024bfc2539ddc95bb85c5691c1889035021dc144451ac6ef2adf6b03"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5743",
    "name": "Adafruit Mini I2C Gamepad with seesaw - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5743",
    "revision": "EAGLE Gamepad Seesaw QT rev A.brd; commit f214e3c4c4cc",
    "category": "Interfaces",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-22.86 11.43A2.54 2.54 0 0 1 -25.4 8.89L-25.4 -8.89A2.54 2.54 0 0 1 -22.86 -11.43L22.86 -11.43A2.54 2.54 0 0 1 25.4 -8.89L25.4 8.89A2.54 2.54 0 0 1 22.86 11.43L-22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-5743"]["contacts"],
    "holes": [
      {
        "x": -19.97,
        "y": -6,
        "drill": 1.6
      },
      {
        "x": -7.97,
        "y": 6,
        "drill": 1.6
      },
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5743"]["artwork"],
    "backArtwork": assets["adafruit-module-5743"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5743"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "jp2-4"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "jp2-2"
      ],
      [
        "conn3-4",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5743"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/Gamepad%20Seesaw%20QT%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/Gamepad%20Seesaw%20QT%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5743",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5743",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5743. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -23.009999999999998,
      -11.016,
      23.96764,
      9.48964
    ],
    "backArtworkBounds": [
      4.4685,
      -3.2785,
      7.914,
      1.1195
    ]
  },
  {
    "id": "adafruit-module-5791",
    "sku": "ADA5791",
    "name": "Adafruit STEMMA Piezo Driver Amp - PAM8904",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5791",
    "revision": "EAGLE Adafruit STEMMA Piezo Driver Amp.brd; commit 678bf96ec531",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5791"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5791"]["artwork"],
    "backArtwork": assets["adafruit-module-5791"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5791"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp2-3"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp2-1"
      ],
      [
        "jp2-4",
        "x2-1"
      ],
      [
        "jp2-5",
        "x2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5791"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/Adafruit%20STEMMA%20Piezo%20Driver%20Amp.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/Adafruit%20STEMMA%20Piezo%20Driver%20Amp.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5791",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5791",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5791. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -8.626,
      12.53,
      6.809
    ],
    "backArtworkBounds": [
      -7.152,
      -4.993,
      -4.9765,
      5.374
    ]
  },
  {
    "id": "adafruit-module-6365",
    "sku": "ADA6365",
    "name": "Adafruit Pi Stemma QT Breakout for Raspberry Pi and Compatibles",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6365",
    "revision": "EAGLE Adafruit Pi Stemma QT Breakout.brd; commit 58188b7bb82e",
    "category": "Interfaces",
    "board": {
      "width": 14.732,
      "height": 15.250075,
      "color": "#246545",
      "outline": "M7.366 -7.614962L-4.340778 -7.625038A3.03464 3.03464 0 0 0 -7.366 -4.577038L-7.366 7.625038L7.366 7.625038L7.366 -7.614962Z"
    },
    "contacts": assets["adafruit-module-6365"]["contacts"],
    "holes": [
      {
        "x": -3.8862,
        "y": -3.627162,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-6365"]["artwork"],
    "backArtwork": assets["adafruit-module-6365"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6365"]["provenance"],
    "internalConnections": [
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-2-",
        "rpi1-4-"
      ],
      [
        "rpi1-3",
        "rpi1-3-",
        "conn3-3"
      ],
      [
        "rpi1-5",
        "rpi1-5-",
        "conn3-4"
      ],
      [
        "rpi1-6",
        "rpi1-6-",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2"
      ],
      [
        "rpi1-1",
        "rpi1-1-"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6365"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/Adafruit%20Pi%20Stemma%20QT%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/Adafruit%20Pi%20Stemma%20QT%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6365",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6365",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6365. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.024,
      -0.31396199999999996,
      6.823,
      7.303038
    ],
    "backArtworkBounds": [
      -5.755,
      4.156038,
      -3.643,
      7.538038
    ]
  },
  {
    "id": "adafruit-module-5613",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9"],
      "source": {"label": "Adafruit ADA5613: EAGLE Adafruit EYESPI Breakout Board.brd; commit bc5fa13b55c2 header geometry", "url": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/Adafruit%20EYESPI%20Breakout%20Board.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP1", "count": 9, "package": "1X09_ROUND_70"}],
        "boardSha256": "980a07b3e4ffe77d07f7cedaf70c3356e2b34062b28a7dd54c361a6482c1c47d"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5613",
    "name": "Adafruit EYESPI Breakout Board - 18 Pin FPC Connector",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5613",
    "revision": "EAGLE Adafruit EYESPI Breakout Board.brd; commit bc5fa13b55c2",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89Z"
    },
    "contacts": assets["adafruit-module-5613"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": 0,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 0,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5613"]["artwork"],
    "backArtwork": assets["adafruit-module-5613"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5613"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "x1-1"
      ],
      [
        "jp2-2",
        "x1-2"
      ],
      [
        "jp2-3",
        "x1-3",
        "x1-support1",
        "x1-support2"
      ],
      [
        "jp2-4",
        "x1-4"
      ],
      [
        "jp2-5",
        "x1-5"
      ],
      [
        "jp2-6",
        "x1-6"
      ],
      [
        "jp2-7",
        "x1-7"
      ],
      [
        "jp2-8",
        "x1-8"
      ],
      [
        "jp2-9",
        "x1-9"
      ],
      [
        "jp1-1",
        "x1-10"
      ],
      [
        "jp1-2",
        "x1-11"
      ],
      [
        "jp1-3",
        "x1-12"
      ],
      [
        "jp1-4",
        "x1-13"
      ],
      [
        "jp1-5",
        "x1-14"
      ],
      [
        "jp1-6",
        "x1-15"
      ],
      [
        "jp1-7",
        "x1-16"
      ],
      [
        "jp1-8",
        "x1-17"
      ],
      [
        "jp1-9",
        "x1-18"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5613"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/Adafruit%20EYESPI%20Breakout%20Board.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/Adafruit%20EYESPI%20Breakout%20Board.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5613",
      "status": "Official Adafruit stock feed reported 43 available.",
      "sku": "ADA5613",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "43"
    },
    "description": "Adafruit ADA5613. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.94,
      -2.362,
      6.94,
      2.318
    ]
  },
  {
    "id": "adafruit-module-4570",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA4570: EAGLE DS1841 rev A.brd; commit 5d475eace8ee header geometry", "url": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/DS1841%20rev%20A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}, {"id": "JP2", "count": 6, "package": "1X06_ROUND"}],
        "boardSha256": "9b2da042da6ec18fccf489b9b19265b2207a46bdef36b72091cd63b751bf0ea4"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4570",
    "name": "Adafruit DS1841 I2C Digital 10K Potentiometer Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4570",
    "revision": "EAGLE DS1841 rev A.brd; commit 5d475eace8ee",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4570"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4570"]["artwork"],
    "backArtwork": assets["adafruit-module-4570"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4570"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-2",
        "conn1-1",
        "conn2-1"
      ],
      [
        "jp1-4",
        "jp2-1",
        "conn1-2",
        "conn2-2"
      ],
      [
        "jp2-3",
        "conn1-4",
        "conn2-4"
      ],
      [
        "jp2-4",
        "conn1-3",
        "conn2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4570"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/DS1841%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/DS1841%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4570",
      "status": "Official Adafruit stock feed reported 56 available.",
      "sku": "ADA4570",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "56"
    },
    "description": "Adafruit ADA4570. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.79,
      12.286,
      4.002
    ],
    "backArtworkBounds": [
      2.754,
      -0.7258,
      7.3806,
      2.6562
    ]
  },
  {
    "id": "adafruit-module-6495",
    "sku": "ADA6495",
    "name": "Adafruit Terminal Block BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6495",
    "revision": "EAGLE Adafruit Terminal Block BFF.brd; commit 6e2c47d43d37",
    "category": "Interfaces",
    "board": {
      "width": 43.18,
      "height": 30.48,
      "color": "#246545",
      "outline": "M21.59 8.3505A2.0 2.0 0 0 1 19.59 10.3505L19.05 10.3505L19.05 12.7A2.54 2.54 0 0 1 16.51 15.24A2.54 2.54 0 0 1 13.97 12.7L13.97 10.3505L-13.97 10.3505L-13.97 12.7A2.54 2.54 0 0 1 -16.51 15.24A2.54 2.54 0 0 1 -19.05 12.7L-19.05 10.3505L-19.59 10.3505A2.0 2.0 0 0 1 -21.59 8.3505L-21.59 -8.3505A2.0 2.0 0 0 1 -19.59 -10.3505L-19.05 -10.3505L-19.05 -12.7A2.54 2.54 0 0 1 -16.51 -15.24A2.54 2.54 0 0 1 -13.97 -12.7L-13.97 -10.3505L13.97 -10.3505L13.97 -12.7A2.54 2.54 0 0 1 16.51 -15.24A2.54 2.54 0 0 1 19.05 -12.7L19.05 -10.3505L19.59 -10.3505A2.0 2.0 0 0 1 21.59 -8.3505L21.59 8.3505Z"
    },
    "contacts": assets["adafruit-module-6495"]["contacts"],
    "holes": [
      {
        "x": -16.8275,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -16.1925,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -15.5575,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -14.9225,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -14.2875,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -17.4625,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -18.0975,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -18.7325,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 16.1925,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 16.8275,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 17.4625,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 18.0975,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 18.7325,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 15.5575,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 14.9225,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": 14.2875,
        "y": -10.287,
        "drill": 0.25
      },
      {
        "x": -16.8275,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -16.1925,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -15.5575,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -14.9225,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -14.2875,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -17.4625,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -18.0975,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -18.7325,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 16.1925,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 16.8275,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 17.4625,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 18.0975,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 18.7325,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 15.5575,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 14.9225,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": 14.2875,
        "y": 10.287,
        "drill": 0.25
      },
      {
        "x": -16.51,
        "y": -12.7,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": 12.7,
        "drill": 2.5
      },
      {
        "x": -16.51,
        "y": 12.7,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": -12.7,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6495"]["artwork"],
    "backArtwork": assets["adafruit-module-6495"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6495"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-8",
        "x1-8b"
      ],
      [
        "jp1-2",
        "x1-9",
        "x1-9b"
      ],
      [
        "jp1-3",
        "x1-10",
        "x1-10b"
      ],
      [
        "jp1-4",
        "x1-11",
        "x1-11b"
      ],
      [
        "jp1-5",
        "conn1-2",
        "x1-12",
        "x1-12b"
      ],
      [
        "jp1-6",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "x2-1",
        "x2-nc1",
        "x2-nc2",
        "x1-13b",
        "x1-13"
      ],
      [
        "jp1-7",
        "x1-14b",
        "x1-14"
      ],
      [
        "jp2-1",
        "x1-1",
        "x1-1b"
      ],
      [
        "jp2-2",
        "x1-2",
        "x1-2b"
      ],
      [
        "jp2-3",
        "x1-3b",
        "x1-3"
      ],
      [
        "jp2-4",
        "x1-4b",
        "x1-4"
      ],
      [
        "jp2-5",
        "conn1-3",
        "x1-5b",
        "x1-5"
      ],
      [
        "jp2-6",
        "conn1-4",
        "x1-6b",
        "x1-6"
      ],
      [
        "jp2-7",
        "x1-7b",
        "x1-7"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6495"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/Adafruit%20Terminal%20Block%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/Adafruit%20Terminal%20Block%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6495",
      "status": "Official Adafruit stock feed reported 9 available.",
      "sku": "ADA6495",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "9"
    },
    "description": "Adafruit ADA6495. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.75,
      -10.3905,
      19.75,
      10.3905
    ],
    "backArtworkBounds": [
      -4.231,
      -0.548,
      5.374,
      1.564
    ]
  },
  {
    "id": "adafruit-module-5964",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA5964: EAGLE Adafruit SEN5x Adapter Breakout.brd; commit fcedf60e56ee header geometry", "url": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/Adafruit%20SEN5x%20Adapter%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "a28e6cb575e3af8edf548efc8077f0284966667496bd03e8acb7c3a7d10b2464"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5964",
    "name": "Adafruit SEN54 or SEN55 Adapter Breakout - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5964",
    "revision": "EAGLE Adafruit SEN5x Adapter Breakout.brd; commit fcedf60e56ee",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35Z"
    },
    "contacts": assets["adafruit-module-5964"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5964"]["artwork"],
    "backArtwork": assets["adafruit-module-5964"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5964"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-4",
        "x1-3"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-2",
        "x1-2",
        "x1-5"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-3",
        "x1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5964"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/Adafruit%20SEN5x%20Adapter%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/Adafruit%20SEN5x%20Adapter%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5964",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5964",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5964. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -8.3204,
      12.159,
      3.903
    ],
    "backArtworkBounds": [
      -9.311,
      -4.485,
      -7.199,
      -1.103
    ]
  },
  {
    "id": "adafruit-module-6331",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA6331: EAGLE Adafruit SEN6x Breakout.brd; commit 7caff419c5f3 header geometry", "url": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/Adafruit%20SEN6x%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "875448b578c99ee1a9db721c6441c7109ca120475d3d68e2772cb817b2707210"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6331",
    "name": "Adafruit SEN6x Breakout for Sensirion SEN66 - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6331",
    "revision": "EAGLE Adafruit SEN6x Breakout.brd; commit 7caff419c5f3",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6331"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6331"]["artwork"],
    "backArtwork": assets["adafruit-module-6331"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6331"]["provenance"],
    "internalConnections": [
      [
        "x1-1",
        "x1-6",
        "jp1-2"
      ],
      [
        "x1-2",
        "x1-5",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2",
        "jp1-3"
      ],
      [
        "conn1-2",
        "conn2-2",
        "jp1-1"
      ],
      [
        "conn1-3",
        "conn2-3",
        "jp1-5"
      ],
      [
        "conn1-4",
        "conn2-4",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6331"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/Adafruit%20SEN6x%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/Adafruit%20SEN6x%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6331",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6331",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6331. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -8.3204,
      12.159,
      4.061
    ],
    "backArtworkBounds": [
      -6.009,
      -4.993,
      -2.627,
      -2.881
    ]
  },
  {
    "id": "adafruit-module-5973",
    "sku": "ADA5973",
    "name": "Adafruit CH9328 UART to HID Keyboard Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5973",
    "revision": "EAGLE Adafruit CH9328 UART to HID Keyboard Breakout.brd; commit 8dccab1fd771",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-7.62 -12.7A2.54 2.54 0 0 0 -10.16 -10.16L-10.16 10.16A2.54 2.54 0 0 0 -7.62 12.7L7.62 12.7A2.54 2.54 0 0 0 10.16 10.16L10.16 -10.16A2.54 2.54 0 0 0 7.62 -12.7L-7.62 -12.7Z"
    },
    "contacts": assets["adafruit-module-5973"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -7.563,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -7.563,
        "drill": 0.65
      },
      {
        "x": -7.62,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": -7.62,
        "y": -10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5973"]["artwork"],
    "backArtwork": assets["adafruit-module-5973"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5973"]["provenance"],
    "internalConnections": [
      [
        "x6-a1b12",
        "x6-b1a12",
        "jp1-2",
        "x1-3",
        "x1-mt1",
        "x1-mt2"
      ],
      [
        "x6-a4b9",
        "x6-b4a9"
      ],
      [
        "x6-b7",
        "x6-a7",
        "d--tp"
      ],
      [
        "x6-a6",
        "x6-b6",
        "dplus-tp"
      ],
      [
        "jp1-1",
        "x1-2"
      ],
      [
        "jp1-3",
        "x1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5973"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/Adafruit%20CH9328%20UART%20to%20HID%20Keyboard%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/Adafruit%20CH9328%20UART%20to%20HID%20Keyboard%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5973",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5973",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5973. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.470999999999998,
      -13.883,
      9.746,
      7.239
    ],
    "backArtworkBounds": [
      5.548,
      -3.342,
      7.66,
      1.31
    ]
  },
  {
    "id": "adafruit-module-5772",
    "sku": "ADA5772",
    "name": "Adafruit EYESPI BFF for QT Py or Xiao - 18 Pin FPC Connector",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5772",
    "revision": "EAGLE Adafruit EYESPI BFF PCB.brd; commit 90ddd1a730d2",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5772"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5772"]["artwork"],
    "backArtwork": assets["adafruit-module-5772"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5772"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c",
        "x1-14"
      ],
      [
        "jp1-6",
        "jp1-6c",
        "x1-13"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c",
        "x1-4"
      ],
      [
        "jp3-3",
        "jp3-3c",
        "x1-6"
      ],
      [
        "jp3-4",
        "jp3-4c",
        "x1-5"
      ],
      [
        "jp3-5",
        "jp3-5c",
        "x1-1"
      ],
      [
        "jp3-6",
        "jp3-6c",
        "x1-3",
        "x1-support1",
        "x1-support2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ],
      [
        "jp2-1",
        "x1-15"
      ],
      [
        "jp4-1",
        "x1-12"
      ],
      [
        "jp5-1",
        "x1-11"
      ],
      [
        "jp6-1",
        "x1-10"
      ],
      [
        "jp7-1",
        "x1-9"
      ],
      [
        "jp8-1",
        "x1-7"
      ],
      [
        "jp9-1",
        "x1-2"
      ],
      [
        "jp10-1",
        "x1-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5772"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/Adafruit%20EYESPI%20BFF%20PCB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/Adafruit%20EYESPI%20BFF%20PCB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5772",
      "status": "Official Adafruit stock feed reported 55 available.",
      "sku": "ADA5772",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "55"
    },
    "description": "Adafruit ADA5772. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.74,
      -8.350499999999998,
      5.74,
      8.4855
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-5978",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA5978: EAGLE Adafruit USB Type C Plug Breakout.brd; commit 11a5d518bac2 header geometry", "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/Adafruit%20USB%20Type%20C%20Plug%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_76"}],
        "boardSha256": "b80c3e751655f75034cd39061f65298ff1a800066df9b829f6c1d06be1bacac5"
      },
      "bodyRegions": [
        {"x": -6.985, "y": -6.35, "width": 13.97, "height": 12.7}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5978",
    "name": "Adafruit USB Type C Plug Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5978",
    "revision": "EAGLE Adafruit USB Type C Plug Breakout.brd; commit 11a5d518bac2",
    "category": "Interfaces",
    "board": {
      "width": 13.97,
      "height": 12.7,
      "color": "#246545",
      "outline": "M6.985 3.81A2.54 2.54 0 0 1 4.445 6.35L-4.445 6.35A2.54 2.54 0 0 1 -6.985 3.81L-6.985 -3.81A2.54 2.54 0 0 1 -4.445 -6.35L4.445 -6.35A2.54 2.54 0 0 1 6.985 -3.81L6.985 3.81Z"
    },
    "contacts": assets["adafruit-module-5978"]["contacts"],
    "holes": [
      {
        "x": 4.445,
        "y": -1.27,
        "drill": 2.5
      },
      {
        "x": -4.445,
        "y": -1.27,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5978"]["artwork"],
    "backArtwork": assets["adafruit-module-5978"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5978"]["provenance"],
    "internalConnections": [
      [
        "x1-b12",
        "x1-a1",
        "x1-a12",
        "jp2-1"
      ],
      [
        "x1-a4",
        "x1-b9",
        "jp2-5"
      ],
      [
        "x1-a5",
        "jp2-4"
      ],
      [
        "x1-a6",
        "jp2-3"
      ],
      [
        "x1-a7",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5978"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/Adafruit%20USB%20Type%20C%20Plug%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/Adafruit%20USB%20Type%20C%20Plug%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5978",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5978",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5978. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -1.5390000000000001,
      -3.6470000000000002,
      -0.747,
      -2.716
    ],
    "backArtworkBounds": [
      -2.072,
      -1.437,
      0.04,
      1.945
    ]
  },
  {
    "id": "adafruit-module-4090",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8"],
      "source": {"label": "Adafruit ADA4090: EAGLE Adafruit USB Type C Downstream Breakout rev B.brd; commit 1484ecb56b36 header geometry", "url": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/Adafruit%20USB%20Type%20C%20Downstream%20Breakout%20rev%20B.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08_ROUND_76"}],
        "boardSha256": "07970b0ad3243684bdf59c0ced537b8b9a8e8b67f7e9032b9464600da21b04e0"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -6.985, "width": 20.32, "height": 13.97}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4090",
    "name": "Adafruit USB Type C Breakout Board - Downstream Connection",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4090",
    "revision": "EAGLE Adafruit USB Type C Downstream Breakout rev B.brd; commit 1484ecb56b36",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 13.97,
      "color": "#246545",
      "outline": "M10.16 4.445A2.54 2.54 0 0 1 7.62 6.985L-7.62 6.985A2.54 2.54 0 0 1 -10.16 4.445L-10.16 -4.445A2.54 2.54 0 0 1 -7.62 -6.985L7.62 -6.985A2.54 2.54 0 0 1 10.16 -4.445L10.16 4.445Z"
    },
    "contacts": assets["adafruit-module-4090"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -0.705,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -0.705,
        "drill": 0.65
      },
      {
        "x": 7.62,
        "y": -4.445,
        "drill": 2.5
      },
      {
        "x": -7.62,
        "y": -4.445,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4090"]["artwork"],
    "backArtwork": assets["adafruit-module-4090"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4090"]["provenance"],
    "internalConnections": [
      [
        "x1-a1b12",
        "x1-b1a12",
        "jp1-1"
      ],
      [
        "x1-a4b9",
        "x1-b4a9",
        "jp1-2"
      ],
      [
        "x1-b8",
        "jp1-3"
      ],
      [
        "x1-a5",
        "jp1-4"
      ],
      [
        "x1-b7",
        "x1-a7",
        "jp1-5"
      ],
      [
        "x1-a6",
        "x1-b6",
        "jp1-6"
      ],
      [
        "x1-a8",
        "jp1-7"
      ],
      [
        "x1-b5",
        "jp1-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4090"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/Adafruit%20USB%20Type%20C%20Downstream%20Breakout%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/Adafruit%20USB%20Type%20C%20Downstream%20Breakout%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4090",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4090",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4090. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.524,
      -7.025,
      4.51,
      1.602
    ]
  },
  {
    "id": "adafruit-module-6050",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8"],
      "source": {"label": "Adafruit ADA6050: EAGLE Adafruit Sunken USB Type C Breakout.brd; commit 4cb1207ddd6e header geometry", "url": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/Adafruit%20Sunken%20USB%20Type%20C%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08_ROUND_76"}],
        "boardSha256": "69c93336fbd822bb387f3f753466ece7d1254a1f5a956ddee6fc482309b2dc7b"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -6.985, "width": 20.32, "height": 13.97},
        {"x": -4.52, "y": -7.561, "width": 9.04, "height": 6.7}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6050",
    "name": "Adafruit Sunken USB Type C Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6050",
    "revision": "EAGLE Adafruit Sunken USB Type C Breakout.brd; commit 4cb1207ddd6e",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 13.97,
      "color": "#246545",
      "outline": "M10.16 4.445A2.54 2.54 0 0 1 7.62 6.985L-7.62 6.985A2.54 2.54 0 0 1 -10.16 4.445L-10.16 -4.445A2.54 2.54 0 0 1 -7.62 -6.985L-4.572 -6.985L-4.572 -0.889L4.572 -0.889L4.572 -6.985L7.62 -6.985A2.54 2.54 0 0 1 10.16 -4.445L10.16 4.445Z"
    },
    "contacts": assets["adafruit-module-6050"]["contacts"],
    "holes": [
      {
        "x": 7.874,
        "y": -3.429,
        "drill": 2.5
      },
      {
        "x": -7.874,
        "y": -3.429,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6050"]["artwork"],
    "backArtwork": assets["adafruit-module-6050"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6050"]["provenance"],
    "internalConnections": [
      [
        "x1-a1b12",
        "x1-b1a12",
        "jp1-1"
      ],
      [
        "x1-a4b9",
        "x1-b4a9",
        "jp1-2"
      ],
      [
        "x1-b8",
        "jp1-3"
      ],
      [
        "x1-a5",
        "jp1-4"
      ],
      [
        "x1-b7",
        "x1-a7",
        "jp1-5"
      ],
      [
        "x1-a6",
        "x1-b6",
        "jp1-6"
      ],
      [
        "x1-a8",
        "jp1-7"
      ],
      [
        "x1-b5",
        "jp1-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6050"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/Adafruit%20Sunken%20USB%20Type%20C%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/Adafruit%20Sunken%20USB%20Type%20C%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6050",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6050",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6050. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.476,
      -7.601,
      6.746,
      2.237
    ]
  },
  {
    "id": "adafruit-module-5625",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp4-1", "jp4-2", "jp4-3", "jp4-4"],
      "source": {"label": "Adafruit ADA5625: EAGLE Adafruit Stemma QT 5 Port Hub.brd; commit 6e0b58b27cc3 header geometry", "url": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/Adafruit%20Stemma%20QT%205%20Port%20Hub.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND_76"}, {"id": "JP4", "count": 4, "package": "1X04_ROUND_76"}],
        "boardSha256": "f672895bdded6cf7cafd0561f77ba7539391ef21df848d2ed41b0fe0ba83e5dd"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5625",
    "name": "Adafruit Qwiic / Stemma QT 5 Port Hub",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5625",
    "revision": "EAGLE Adafruit Stemma QT 5 Port Hub.brd; commit 6e0b58b27cc3",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5625"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5625"]["artwork"],
    "backArtwork": assets["adafruit-module-5625"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5625"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "conn1-2",
        "conn2-2",
        "jp1-1",
        "jp4-1",
        "conn5-2"
      ],
      [
        "conn3-3",
        "conn4-3",
        "conn1-3",
        "conn2-3",
        "jp1-4",
        "jp4-4",
        "conn5-3"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2",
        "jp1-2",
        "jp4-2",
        "conn5-1",
        "conn5-mt1",
        "conn5-mt2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "conn1-4",
        "conn2-4",
        "jp1-3",
        "jp4-3",
        "conn5-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5625"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/Adafruit%20Stemma%20QT%205%20Port%20Hub.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/Adafruit%20Stemma%20QT%205%20Port%20Hub.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5625",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5625",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5625. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.066999999999998,
      -4.777,
      11.233,
      3.14
    ]
  },
  {
    "id": "adafruit-module-5937",
    "sku": "ADA5937",
    "name": "Adafruit BNO055 + BMP280 BFF Add-On for QT Py",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5937",
    "revision": "EAGLE Adafruit BNO055 and BMP280 BFF.brd; commit 6959d4d990cc",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5937"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5937"]["artwork"],
    "backArtwork": assets["adafruit-module-5937"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5937"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c"
      ],
      [
        "jp3-3",
        "jp3-3c"
      ],
      [
        "jp3-4",
        "jp3-4c"
      ],
      [
        "jp3-5",
        "jp3-5c"
      ],
      [
        "jp3-6",
        "jp3-6c"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5937"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/Adafruit%20BNO055%20and%20BMP280%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/Adafruit%20BNO055%20and%20BMP280%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5937",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5937",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5937. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.12,
      -10.0095,
      6.009,
      6.263
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-5956",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3"],
      "source": {"label": "Adafruit ADA5956: EAGLE Adafruit USB Host BFF.brd; commit dc61b50d5ba0 header geometry", "url": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 3, "package": "1X03_ROUND"}],
        "boardSha256": "87755cb302f682a41cb60a75b1cab1aea4137e88891c24141dae9b5ef3a03299"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -10.3505, "width": 17.78, "height": 20.701},
        {"x": -3.975, "y": 5.0785, "width": 8.325, "height": 5.7}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5956",
    "name": "Adafruit USB Host BFF for QT Py or Xiao with MAX3421E",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5956",
    "revision": "EAGLE Adafruit USB Host BFF.brd; commit dc61b50d5ba0",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5956"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5956"]["artwork"],
    "backArtwork": assets["adafruit-module-5956"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5956"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c",
        "jp2-2"
      ],
      [
        "jp1-3",
        "jp1-3c",
        "jp2-1"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c"
      ],
      [
        "jp3-3",
        "jp3-3c"
      ],
      [
        "jp3-4",
        "jp3-4c"
      ],
      [
        "jp3-5",
        "jp3-5c"
      ],
      [
        "jp3-6",
        "jp3-6c",
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-id",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5956"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5956",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5956",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5956. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.0915,
      -9.523,
      5.608,
      10.8185
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-3464",
    "sku": "ADA3464",
    "name": "Adafruit Joy Bonnet for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3464",
    "revision": "EAGLE Adafruit Joy Bonnet.brd; commit 6f2c39755547",
    "category": "Interfaces",
    "board": {
      "width": 65,
      "height": 30.6604,
      "color": "#246545",
      "outline": "M32.5 -12.3302A3.0 3.0 0 0 0 29.5 -15.3302L-29.5 -15.3302A3.0 3.0 0 0 0 -32.5 -12.3302L-32.5 12.3302A3.0 3.0 0 0 0 -29.5 15.3302L29.5 15.3302A3.0 3.0 0 0 0 32.5 12.3302L32.5 -12.3302Z"
    },
    "contacts": assets["adafruit-module-3464"]["contacts"],
    "holes": [
      {
        "x": 29,
        "y": -11.8302,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.1698,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": 11.1698,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -11.8302,
        "drill": 2.8
      },
      {
        "x": -27.0305,
        "y": 5.6558,
        "drill": 1.6
      },
      {
        "x": -15.0305,
        "y": -6.3442,
        "drill": 1.6
      }
    ],
    "artwork": assets["adafruit-module-3464"]["artwork"],
    "backArtwork": assets["adafruit-module-3464"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3464"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3464"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/Adafruit%20Joy%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/Adafruit%20Joy%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3464",
      "status": "Official Adafruit stock feed reported 19 available.",
      "sku": "ADA3464",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "19"
    },
    "description": "Adafruit ADA3464. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -30.0705,
      -13.403099999999998,
      31.0775,
      8.7918
    ]
  },
  {
    "id": "adafruit-module-5302",
    "sku": "ADA5302",
    "name": "Adafruit KB2040 - RP2040 Kee Boar Driver",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5302",
    "revision": "EAGLE Adafruit KB2040.brd; commit b4160dcf4385",
    "category": "Interfaces",
    "board": {
      "width": 33.02,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-16.51 8.89L-16.51 -8.89L16.51 -8.89L16.51 8.89L-16.51 8.89Z"
    },
    "contacts": assets["adafruit-module-5302"]["contacts"],
    "holes": [
      {
        "x": -11.4365,
        "y": 2.89,
        "drill": 0.65
      },
      {
        "x": -11.4365,
        "y": -2.89,
        "drill": 0.65
      }
    ],
    "artwork": assets["adafruit-module-5302"]["artwork"],
    "backArtwork": assets["adafruit-module-5302"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5302"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "jp2-1c",
        "x6-a6",
        "x6-b6"
      ],
      [
        "jp2-2",
        "jp2-2c"
      ],
      [
        "jp2-3",
        "jp2-3c"
      ],
      [
        "jp2-4",
        "jp2-5",
        "jp2-4c",
        "jp2-5c",
        "x6-a1b12",
        "x6-b1a12",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "jp1-11",
        "jp1-11c"
      ],
      [
        "jp2-6",
        "jp2-6c"
      ],
      [
        "jp2-7",
        "jp2-7c"
      ],
      [
        "jp2-8",
        "jp2-8c"
      ],
      [
        "jp2-9",
        "jp2-9c"
      ],
      [
        "jp2-10",
        "jp2-10c"
      ],
      [
        "jp2-11",
        "jp2-11c"
      ],
      [
        "jp2-12",
        "jp2-12c"
      ],
      [
        "jp2-13",
        "jp2-13c"
      ],
      [
        "x6-a4b9",
        "x6-b4a9"
      ],
      [
        "x6-b7",
        "x6-a7",
        "jp1-13",
        "jp1-13c"
      ],
      [
        "conn1-2",
        "jp1-9",
        "jp1-9c"
      ],
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp1-8",
        "jp1-8c"
      ],
      [
        "jp1-10",
        "jp1-10c"
      ],
      [
        "jp1-12",
        "jp1-12c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5302"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/Adafruit%20KB2040.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/Adafruit%20KB2040.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5302",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5302",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5302. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.7565,
      -6.5184,
      16.096,
      6.5819
    ],
    "backArtworkBounds": [
      -16.296,
      -1.056,
      -12.914,
      1.056
    ]
  },
  {
    "id": "adafruit-module-3538",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6"],
      "source": {"label": "Adafruit ADA3538: EAGLE Adafruit AMG8833.brd; commit 3e5dd5f7bc0e header geometry", "url": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/Adafruit%20AMG8833.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP3", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "dffa6669ebfa6874341fb2ac6a0d853bc5e335ce38b1fcacc14fc56217aa8493"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3538",
    "name": "Adafruit AMG8833 IR Thermal Camera Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3538",
    "revision": "EAGLE Adafruit AMG8833.brd; commit 3e5dd5f7bc0e",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.16 12.7A2.54 2.54 0 0 0 12.7 10.16L12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16Z"
    },
    "contacts": assets["adafruit-module-3538"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3538"]["artwork"],
    "backArtwork": assets["adafruit-module-3538"]["backArtwork"],
    "provenance": assets["adafruit-module-3538"]["provenance"],
    "internalConnections": [
      [
        "jp3-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp3-3",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp3-4",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp3-5",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3538"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/Adafruit%20AMG8833.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/Adafruit%20AMG8833.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3538",
      "status": "Official Adafruit stock feed reported 18 available.",
      "sku": "ADA3538",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "18"
    },
    "description": "Adafruit ADA3538. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -7.401,
      12.286,
      7.278
    ],
    "backArtworkBounds": [
      4.659,
      1.611,
      6.771,
      4.993
    ]
  },
  {
    "id": "adafruit-module-3387",
    "mountingReview": {
      "contactIds": ["jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6", "jp4-7", "jp4-8", "jp4-9", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA3387: EAGLE Adafruit LSM9DS1 Rev C.brd; commit 9f6db79a66ae header geometry", "url": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/Adafruit%20LSM9DS1%20Rev%20C.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP4", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "38dd2a62696fde4803ad7f471b7df6ba751a58e886d6463a92b72367ef3daeaa"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3387",
    "name": "Adafruit 9-DOF Accel/Mag/Gyro+Temp Breakout Board - LSM9DS1",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3387",
    "revision": "EAGLE Adafruit LSM9DS1 Rev C.brd; commit 9f6db79a66ae",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-3387"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3387"]["artwork"],
    "backArtwork": assets["adafruit-module-3387"]["backArtwork"],
    "provenance": assets["adafruit-module-3387"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp4-9"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp4-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp4-7"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp4-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3387"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/Adafruit%20LSM9DS1%20Rev%20C.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/Adafruit%20LSM9DS1%20Rev%20C.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3387",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3387",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3387. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.222499999999998,
      -4.5515,
      12.2225,
      4.8295
    ]
  },
  {
    "id": "adafruit-module-1465",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp2-1", "jp2-2", "jp2-3"],
      "source": {"label": "Adafruit ADA1465: EAGLE Adafruit 6-ISP AVR.brd; commit 0c7bd1cb7a40 header geometry", "url": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/Adafruit%206-ISP%20AVR.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03-CLEANBIG"}, {"id": "JP2", "count": 3, "package": "1X03-CLEANBIG"}],
        "boardSha256": "ec8544345907361863a6a8700fa9d32b8e88b25fedb2633243307ba1f0f018f9"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -7.62, "width": 17.78, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1465",
    "name": "Adafruit 6-pin AVR ISP Breadboard Adapter Mini Kit",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1465",
    "revision": "EAGLE Adafruit 6-ISP AVR.brd; commit 0c7bd1cb7a40",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 17.78,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-8.89 5.08A2.54 2.54 0 0 0 -6.35 7.62L6.35 7.62A2.54 2.54 0 0 0 8.89 5.08L8.89 -5.08A2.54 2.54 0 0 0 6.35 -7.62L-6.35 -7.62A2.54 2.54 0 0 0 -8.89 -5.08L-8.89 5.08Z"
    },
    "contacts": assets["adafruit-module-1465"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-1465"]["artwork"],
    "backArtwork": assets["adafruit-module-1465"]["backArtwork"],
    "provenance": assets["adafruit-module-1465"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "isp1-5"
      ],
      [
        "jp1-2",
        "isp1-3"
      ],
      [
        "jp1-3",
        "isp1-1"
      ],
      [
        "jp2-1",
        "isp1-2"
      ],
      [
        "jp2-2",
        "isp1-4"
      ],
      [
        "jp2-3",
        "isp1-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1465"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/Adafruit%206-ISP%20AVR.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/Adafruit%206-ISP%20AVR.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1465",
      "status": "Official Adafruit stock feed reported 2 available.",
      "sku": "ADA1465",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "2"
    },
    "description": "Adafruit ADA1465. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.44,
      -7.64,
      4.44,
      7.64
    ]
  },
];
