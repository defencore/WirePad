import assets from "./input-controls-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-3246",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp2-1", "jp2-2", "jp2-3", "jp2-4"],
      "source": {"label": "Adafruit ADA3246: EAGLE Adafruit Mini Analog Thumbstick.brd; commit f09366288515 header geometry", "url": "https://github.com/adafruit/Adafruit-Mini-Analog-Thumbstick-Breakout-PCB/blob/f09366288515bc9d9ea436602506ed4d2c295544/Adafruit%20Mini%20Analog%20Thumbstick.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND_76"}, {"id": "JP2", "count": 4, "package": "1X04_ROUND_76"}],
        "boardSha256": "f7f080cded9e8fa79cbcb987f96a1d6e42778f1f1aee3718a1b1d1f9c55a47cd"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -13.335, "width": 25.4, "height": 26.67}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3246",
    "name": "Analog Mini Thumbstick Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3246",
    "revision": "EAGLE Adafruit Mini Analog Thumbstick.brd; commit f09366288515",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 26.67,
      "color": "#246545",
      "outline": "M-10.16 13.335A2.54 2.54 0 0 1 -12.7 10.795L-12.7 -10.795A2.54 2.54 0 0 1 -10.16 -13.335L10.16 -13.335A2.54 2.54 0 0 1 12.7 -10.795L12.7 10.795A2.54 2.54 0 0 1 10.16 13.335L-10.16 13.335Z"
    },
    "contacts": assets["adafruit-module-3246"]["contacts"],
    "holes": [
      {
        "x": -6,
        "y": -5.619,
        "drill": 1.6
      },
      {
        "x": 6,
        "y": 6.381,
        "drill": 1.6
      },
      {
        "x": 10.16,
        "y": 10.795,
        "drill": 2.2
      },
      {
        "x": -10.16,
        "y": 10.795,
        "drill": 2.2
      },
      {
        "x": 10.16,
        "y": -10.795,
        "drill": 2.2
      },
      {
        "x": -10.16,
        "y": -10.795,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-3246"]["artwork"],
    "backArtwork": assets["adafruit-module-3246"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3246"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-1"
      ],
      [
        "jp1-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "jp2-3"
      ],
      [
        "jp1-4",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3246"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Mini-Analog-Thumbstick-Breakout-PCB/blob/f09366288515bc9d9ea436602506ed4d2c295544/Adafruit%20Mini%20Analog%20Thumbstick.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Mini-Analog-Thumbstick-Breakout-PCB/blob/f09366288515bc9d9ea436602506ed4d2c295544/Adafruit%20Mini%20Analog%20Thumbstick.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Mini-Analog-Thumbstick-Breakout-PCB/blob/f09366288515bc9d9ea436602506ed4d2c295544/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3246",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3246",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3246. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part. This is an unpopulated passive carrier PCB; the intended device pin names identify its traces and no active driver is fitted.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.04,
      -8.658999999999999,
      9.04,
      9.421
    ]
  },
  {
    "id": "adafruit-module-4836",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4836: EAGLE Adafruit Wii Nunchuck Breakout Adapter.brd; commit d3f2e25c4f92 header geometry", "url": "https://github.com/adafruit/Adafruit-Wii-Nunchuck-Breakout-Adapter-PCB/blob/d3f2e25c4f9211553e32b36ffce03212f414ead3/Adafruit%20Wii%20Nunchuck%20Breakout%20Adapter.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "c4546fc875dfbe4e2075f1feab40bdafde7e62b77d1d9abbef205d43a66010fc"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4836",
    "name": "Adafruit Wii Nunchuck Breakout Adapter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4836",
    "revision": "EAGLE Adafruit Wii Nunchuck Breakout Adapter.brd; commit d3f2e25c4f92",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L6.223 -8.89L6.223 -4.953L7.239 -4.953L7.239 -2.413L6.223 -2.413L6.223 -0.381L3.175 -0.381L3.175 -7.747L-3.175 -7.747L-3.175 -0.508L-6.223 -0.508L-6.223 -2.413L-7.239 -2.413L-7.239 -4.953L-6.223 -4.953L-6.223 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4836"]["contacts"],
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
    "artwork": assets["adafruit-module-4836"]["artwork"],
    "backArtwork": assets["adafruit-module-4836"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4836"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4836"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Wii-Nunchuck-Breakout-Adapter-PCB/blob/d3f2e25c4f9211553e32b36ffce03212f414ead3/Adafruit%20Wii%20Nunchuck%20Breakout%20Adapter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Wii-Nunchuck-Breakout-Adapter-PCB/blob/d3f2e25c4f9211553e32b36ffce03212f414ead3/Adafruit%20Wii%20Nunchuck%20Breakout%20Adapter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Wii-Nunchuck-Breakout-Adapter-PCB/blob/d3f2e25c4f9211553e32b36ffce03212f414ead3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4836",
      "status": "Official Adafruit stock feed reported 93 available.",
      "sku": "ADA4836",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "93"
    },
    "description": "Adafruit ADA4836. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.123,
      12.286,
      4.988
    ]
  },
  {
    "id": "adafruit-module-5753",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA5753: EAGLE Adafruit PC Joystick seesaw Breakout.brd; commit 890610a1efbc header geometry", "url": "https://github.com/adafruit/Adafruit-PC-Joystick-to-seesaw-PCB/blob/890610a1efbc5e3b9c7dca5b28a125e36333b3f6/Adafruit%20PC%20Joystick%20seesaw%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "49a33982750e4fcf20a437257df0f9f2c2093d11b8ef8f1e82d043403bc4ebe9"
      },
      "bodyRegions": [
        {"x": -20.32, "y": -12.7, "width": 40.64, "height": 25.4},
        {"x": -19.685, "y": -18.542, "width": 39.243, "height": 21.082}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5753",
    "name": "Adafruit PC Joystick to seesaw I2C Adapter - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5753",
    "revision": "EAGLE Adafruit PC Joystick seesaw Breakout.brd; commit 890610a1efbc",
    "category": "Inputs",
    "board": {
      "width": 40.64,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-20.32 10.16A2.54 2.54 0 0 0 -17.78 12.7L17.78 12.7A2.54 2.54 0 0 0 20.32 10.16L20.32 -12.7L-20.32 -12.7L-20.32 10.16Z"
    },
    "contacts": assets["adafruit-module-5753"]["contacts"],
    "holes": [
      {
        "x": -16.6624,
        "y": -0.635,
        "drill": 3.302
      },
      {
        "x": 16.6624,
        "y": -0.635,
        "drill": 3.302
      },
      {
        "x": -11.43,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 11.43,
        "y": 10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5753"]["artwork"],
    "backArtwork": assets["adafruit-module-5753"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5753"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-4"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-2",
        "x2-4",
        "x2-5",
        "x2-12"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ],
      [
        "x2-1",
        "x2-8",
        "x2-9",
        "x2-15"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5753"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PC-Joystick-to-seesaw-PCB/blob/890610a1efbc5e3b9c7dca5b28a125e36333b3f6/Adafruit%20PC%20Joystick%20seesaw%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PC-Joystick-to-seesaw-PCB/blob/890610a1efbc5e3b9c7dca5b28a125e36333b3f6/Adafruit%20PC%20Joystick%20seesaw%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PC-Joystick-to-seesaw-PCB/blob/890610a1efbc5e3b9c7dca5b28a125e36333b3f6/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5753",
      "status": "Official Adafruit stock feed reported 29 available.",
      "sku": "ADA5753",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "29"
    },
    "description": "Adafruit ADA5753. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.906,
      -18.582,
      19.906,
      9.49
    ]
  },
  {
    "id": "adafruit-module-5767",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp4-1", "jp4-2", "jp5-1", "jp5-2"],
      "source": {"label": "Adafruit ADA5767: EAGLE Adafruit TSC2046 Breakout.brd; commit cf5b01b3b6ae header geometry", "url": "https://github.com/adafruit/Adafruit-TSC2046-PCB/blob/cf5b01b3b6ae479abf051a8d0d3e8ed5b05ba632/Adafruit%20TSC2046%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}, {"id": "JP4", "count": 2, "package": "1X02_ROUND"}, {"id": "JP5", "count": 2, "package": "1X02_ROUND"}],
        "boardSha256": "c5d333ac199cc5742a71e55a8265e044355807627d10aa2cd7999ed52020d902"
      },
      "bodyRegions": [
        {"x": -14.605, "y": -8.89, "width": 29.21, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5767",
    "name": "Adafruit TSC2046 SPI Resistive Touch Screen Controller",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5767",
    "revision": "EAGLE Adafruit TSC2046 Breakout.brd; commit cf5b01b3b6ae",
    "category": "Inputs",
    "board": {
      "width": 29.21,
      "height": 17.78,
      "color": "#246545",
      "outline": "M14.605 6.35A2.54 2.54 0 0 1 12.065 8.89L-12.065 8.89A2.54 2.54 0 0 1 -14.605 6.35L-14.605 -6.35A2.54 2.54 0 0 1 -12.065 -8.89L12.065 -8.89A2.54 2.54 0 0 1 14.605 -6.35L14.605 6.35Z"
    },
    "contacts": assets["adafruit-module-5767"]["contacts"],
    "holes": [
      {
        "x": -12.065,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 12.065,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5767"]["artwork"],
    "backArtwork": assets["adafruit-module-5767"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5767"]["provenance"],
    "internalConnections": [
      [
        "jp4-1",
        "u-7-1"
      ],
      [
        "jp4-2",
        "u-7-2"
      ],
      [
        "jp5-1",
        "u-7-4"
      ],
      [
        "jp5-2",
        "u-7-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5767"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TSC2046-PCB/blob/cf5b01b3b6ae479abf051a8d0d3e8ed5b05ba632/Adafruit%20TSC2046%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TSC2046-PCB/blob/cf5b01b3b6ae479abf051a8d0d3e8ed5b05ba632/Adafruit%20TSC2046%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TSC2046-PCB/blob/cf5b01b3b6ae479abf051a8d0d3e8ed5b05ba632/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5767",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5767",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5767. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -11.850999999999999,
      -8.492999999999999,
      7.254,
      3.8246
    ]
  },
  {
    "id": "adafruit-module-5295",
    "mountingReview": {
      "contactIds": ["jp5-1", "jp5-2", "jp5-3", "jp5-4", "jp5-5", "jp5-6", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA5295: EAGLE Adafruit NeoSlider.brd; commit f0bf0d2795cd header geometry", "url": "https://github.com/adafruit/Adafruit-NeoSlider-PCB/blob/f0bf0d2795cdc2af0f31f70b032023b25afa5b69/Adafruit%20NeoSlider.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP5", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "f1a7c58f952b9b762a45958a734c825b333e04543c97e1609c1a7e50a7c881f9"
      },
      "bodyRegions": [
        {"x": -38.1, "y": -10.795, "width": 76.2, "height": 21.59}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5295",
    "name": "Adafruit NeoSlider I2C QT Slide Potentiometer with 4 NeoPixels",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5295",
    "revision": "EAGLE Adafruit NeoSlider.brd; commit f0bf0d2795cd",
    "category": "Inputs",
    "board": {
      "width": 76.2,
      "height": 21.59,
      "color": "#246545",
      "outline": "M38.1 8.255A2.54 2.54 0 0 1 35.56 10.795L-35.56 10.795A2.54 2.54 0 0 1 -38.1 8.255L-38.1 -8.255A2.54 2.54 0 0 1 -35.56 -10.795L35.56 -10.795A2.54 2.54 0 0 1 38.1 -8.255L38.1 8.255Z"
    },
    "contacts": assets["adafruit-module-5295"]["contacts"],
    "holes": [
      {
        "x": 19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": 8.255,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5295"]["artwork"],
    "backArtwork": assets["adafruit-module-5295"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5295"]["provenance"],
    "internalConnections": [
      [
        "jp5-1",
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "jp5-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-2"
      ],
      [
        "jp5-3",
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ],
      [
        "jp5-4",
        "conn3-3",
        "conn4-3",
        "jp1-4"
      ],
      [
        "jp5-5",
        "jp1-5"
      ],
      [
        "jp5-6",
        "jp1-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5295"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoSlider-PCB/blob/f0bf0d2795cdc2af0f31f70b032023b25afa5b69/Adafruit%20NeoSlider.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoSlider-PCB/blob/f0bf0d2795cdc2af0f31f70b032023b25afa5b69/Adafruit%20NeoSlider.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoSlider-PCB/blob/f0bf0d2795cdc2af0f31f70b032023b25afa5b69/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5295",
      "status": "Official Adafruit stock feed reported 78 available.",
      "sku": "ADA5295",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "78"
    },
    "description": "Adafruit ADA5295. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -35.473,
      -6.009,
      27.1295,
      9.565
    ],
    "backArtworkBounds": [
      -37.54,
      -4.54,
      37.54,
      4.54
    ]
  },
  {
    "id": "adafruit-module-1580",
    "mountingReview": {
      "contactIds": ["cn1-1", "cn1-2", "cn1-3", "cn1-4", "cn2-1", "cn2-2", "cn2-3", "cn2-4"],
      "source": {"label": "Adafruit ADA1580: EAGLE Adafruit AR1100.brd; commit 217534674def header geometry", "url": "https://github.com/adafruit/Adafruit-AR1100-Resistive-Touch-Controller-PCB/blob/217534674defab8d2040a7399b23d3cead345195/Adafruit%20AR1100.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "CN1", "count": 4, "package": "1X04-CLEANBIG"}, {"id": "CN2", "count": 4, "package": "1X04-CLEANBIG"}],
        "boardSha256": "bbde6e38b6597e3e2a491f48a186845c77b5051d3ea935f107c9b875d7f151fe"
      },
      "bodyRegions": [
        {"x": -13.97, "y": -10.16, "width": 27.94, "height": 20.32},
        {"x": -13.998, "y": -5.08, "width": 9.2, "height": 10.13}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1580",
    "name": "Resistive Touch Screen to USB Mouse Controller - AR1100",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1580",
    "revision": "EAGLE Adafruit AR1100.brd; commit 217534674def",
    "category": "Inputs",
    "board": {
      "width": 27.94,
      "height": 20.32,
      "color": "#246545",
      "outline": "M11.43 -10.16A2.54 2.54 0 0 1 13.97 -7.62L13.97 7.62A2.54 2.54 0 0 1 11.43 10.16L-11.43 10.16A2.54 2.54 0 0 1 -13.97 7.62L-13.97 -7.62A2.54 2.54 0 0 1 -11.43 -10.16L11.43 -10.16Z"
    },
    "contacts": assets["adafruit-module-1580"]["contacts"],
    "holes": [
      {
        "x": -8.398,
        "y": -2.2,
        "drill": 1
      },
      {
        "x": -8.398,
        "y": 2.2,
        "drill": 1
      },
      {
        "x": -11.43,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": 11.43,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": -11.43,
        "y": 7.62,
        "drill": 2.5
      },
      {
        "x": 11.43,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1580"]["artwork"],
    "backArtwork": assets["adafruit-module-1580"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1580"]["provenance"],
    "internalConnections": [
      [
        "u-7-1",
        "cn1-4"
      ],
      [
        "u-7-2",
        "cn1-2"
      ],
      [
        "u-7-3",
        "cn1-1"
      ],
      [
        "u-7-4",
        "cn1-3"
      ],
      [
        "x1-gnd2",
        "x1-gnd",
        "x1-gnd1",
        "x1-gnd3",
        "x1-gnd4",
        "cn2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1580"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AR1100-Resistive-Touch-Controller-PCB/blob/217534674defab8d2040a7399b23d3cead345195/Adafruit%20AR1100.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AR1100-Resistive-Touch-Controller-PCB/blob/217534674defab8d2040a7399b23d3cead345195/Adafruit%20AR1100.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AR1100-Resistive-Touch-Controller-PCB/blob/217534674defab8d2040a7399b23d3cead345195/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1580",
      "status": "Official Adafruit stock feed reported 35 available.",
      "sku": "ADA1580",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "35"
    },
    "description": "Adafruit ADA1580. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.037999999999998,
      -7.431,
      13.938,
      5.907
    ]
  },
  {
    "id": "adafruit-module-5423",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp4-1", "jp4-2", "jp5-1", "jp5-2"],
      "source": {"label": "Adafruit ADA5423: EAGLE Adafruit TSC2007.brd; commit 8d182929dfc2 header geometry", "url": "https://github.com/adafruit/Adafruit-TSC2007-PCB/blob/8d182929dfc27dcdb407a2769cf416f9f63b4a16/Adafruit%20TSC2007.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP4", "count": 2, "package": "1X02_ROUND"}, {"id": "JP5", "count": 2, "package": "1X02_ROUND"}],
        "boardSha256": "fc117b69fee0f38ff22c5cb08cfc226244586f3847bd2c43a5a9286bb40f5227"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -9.525, "width": 25.4, "height": 19.05}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5423",
    "name": "Adafruit TSC2007 I2C Resistive Touch Screen Controller",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5423",
    "revision": "EAGLE Adafruit TSC2007.brd; commit 8d182929dfc2",
    "category": "Inputs",
    "board": {
      "width": 25.4,
      "height": 19.05,
      "color": "#246545",
      "outline": "M-12.7 6.985A2.54 2.54 0 0 0 -10.16 9.525L10.16 9.525A2.54 2.54 0 0 0 12.7 6.985L12.7 -6.985A2.54 2.54 0 0 0 10.16 -9.525L-10.16 -9.525A2.54 2.54 0 0 0 -12.7 -6.985L-12.7 6.985Z"
    },
    "contacts": assets["adafruit-module-5423"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5423"]["artwork"],
    "backArtwork": assets["adafruit-module-5423"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5423"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-4",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-5",
        "conn3-3",
        "conn4-3"
      ],
      [
        "jp4-1",
        "u-4-1"
      ],
      [
        "jp4-2",
        "u-4-2"
      ],
      [
        "jp5-1",
        "u-4-4"
      ],
      [
        "jp5-2",
        "u-4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5423"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TSC2007-PCB/blob/8d182929dfc27dcdb407a2769cf416f9f63b4a16/Adafruit%20TSC2007.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TSC2007-PCB/blob/8d182929dfc27dcdb407a2769cf416f9f63b4a16/Adafruit%20TSC2007.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TSC2007-PCB/blob/8d182929dfc27dcdb407a2769cf416f9f63b4a16/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5423",
      "status": "Official Adafruit stock feed reported 33 available.",
      "sku": "ADA5423",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "33"
    },
    "description": "Adafruit ADA5423. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -9.492999999999999,
      12.159,
      4.615
    ],
    "backArtworkBounds": [
      -9.946,
      -4.612,
      8.041,
      5.755
    ]
  },
  {
    "id": "adafruit-module-3954",
    "sku": "ADA3954",
    "name": "Adafruit NeoTrellis RGB Driver PCB for 4x4 Keypad",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3954",
    "revision": "EAGLE Adafruit NeoTrellis 4x4.brd; commit d9c12effecfb",
    "category": "Indicators",
    "board": {
      "width": 60,
      "height": 60,
      "color": "#246545",
      "outline": "M-30.0 30.0L30.0 30.0L30.0 -30.0L-30.0 -30.0L-30.0 30.0Z"
    },
    "contacts": assets["adafruit-module-3954"]["contacts"],
    "holes": [
      {
        "x": -27.972,
        "y": -14.972,
        "drill": 2.8
      },
      {
        "x": -1.972,
        "y": -14.972,
        "drill": 2.8
      },
      {
        "x": 2.028,
        "y": -14.972,
        "drill": 2.8
      },
      {
        "x": 28.028,
        "y": -14.972,
        "drill": 2.8
      },
      {
        "x": -27.972,
        "y": 15.028,
        "drill": 2.8
      },
      {
        "x": -1.972,
        "y": 15.028,
        "drill": 2.8
      },
      {
        "x": 2.028,
        "y": 15.028,
        "drill": 2.8
      },
      {
        "x": 28.028,
        "y": 15.028,
        "drill": 2.8
      },
      {
        "x": -14.972,
        "y": -14.972,
        "drill": 2
      },
      {
        "x": 15.028,
        "y": -14.972,
        "drill": 2
      },
      {
        "x": -14.972,
        "y": 15.028,
        "drill": 2
      },
      {
        "x": 15.028,
        "y": 15.028,
        "drill": 2
      },
      {
        "x": -28.672,
        "y": -28.672,
        "drill": 1
      },
      {
        "x": 28.728,
        "y": -28.672,
        "drill": 1
      },
      {
        "x": -28.672,
        "y": 28.728,
        "drill": 1
      },
      {
        "x": 28.728,
        "y": 28.728,
        "drill": 1
      },
      {
        "x": 15.014,
        "y": 0.028,
        "drill": 2.5
      },
      {
        "x": -14.958,
        "y": 0.028,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3954"]["artwork"],
    "backArtwork": assets["adafruit-module-3954"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3954"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp2-1",
        "jp3-1",
        "jp4-1"
      ],
      [
        "jp1-2",
        "jp2-2",
        "jp3-2",
        "jp4-2",
        "x2-2"
      ],
      [
        "jp1-3",
        "jp2-3",
        "jp3-3",
        "jp4-3",
        "x2-1"
      ],
      [
        "jp1-4",
        "jp2-4",
        "jp3-4",
        "jp4-4",
        "x2-4"
      ],
      [
        "jp1-5",
        "jp2-5",
        "jp3-5",
        "jp4-5",
        "x2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3954"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoTrellis-4x4-PCB/blob/d9c12effecfbaab5c55e2c96186188166340862a/Adafruit%20NeoTrellis%204x4.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoTrellis-4x4-PCB/blob/d9c12effecfbaab5c55e2c96186188166340862a/Adafruit%20NeoTrellis%204x4.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoTrellis-4x4-PCB/blob/d9c12effecfbaab5c55e2c96186188166340862a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3954",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3954",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3954. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -23.643,
      -23.125999999999998,
      23.723,
      24.596
    ],
    "backArtworkBounds": [
      -30.333,
      -30.206,
      30.262,
      30.262
    ]
  },
  {
    "id": "adafruit-module-5296",
    "mountingReview": {
      "contactIds": ["jp5-1", "jp5-2", "jp5-3", "jp5-4", "jp5-5", "jp5-6", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA5296: EAGLE Adafruit LED Arcade Button 1x4.brd; commit 437bc15cf86f physical insertion headers", "url": "https://github.com/adafruit/Adafruit-LED-Arcade-Button-1x4-PCB/blob/437bc15cf86fe7176b153575118f58b178de18fd/Adafruit%20LED%20Arcade%20Button%201x4.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP5", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "944bddb079b0f238797884a46ee77aee1dba804320d5ff975da2755c6147e915"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -38.1, "y": -10.795, "width": 76.2, "height": 21.59}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5296",
    "name": "Adafruit LED Arcade Button 1x4 - STEMMA QT I2C Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5296",
    "revision": "EAGLE Adafruit LED Arcade Button 1x4.brd; commit 437bc15cf86f",
    "category": "Inputs",
    "board": {
      "width": 76.2,
      "height": 21.59,
      "color": "#246545",
      "outline": "M38.1 8.255A2.54 2.54 0 0 1 35.56 10.795L-35.56 10.795A2.54 2.54 0 0 1 -38.1 8.255L-38.1 -8.255A2.54 2.54 0 0 1 -35.56 -10.795L35.56 -10.795A2.54 2.54 0 0 1 38.1 -8.255L38.1 8.255Z"
    },
    "contacts": assets["adafruit-module-5296"]["contacts"],
    "holes": [
      {
        "x": 19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": 8.255,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5296"]["artwork"],
    "backArtwork": assets["adafruit-module-5296"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5296"]["provenance"],
    "internalConnections": [
      [
        "jp5-1",
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "jp5-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-2",
        "x1-1",
        "x1-mt1",
        "x1-mt2",
        "x2-mt1",
        "x2-mt2",
        "x3-1",
        "x3-mt1",
        "x3-mt2",
        "x4-mt1",
        "x4-mt2",
        "x5-1",
        "x5-mt1",
        "x5-mt2",
        "x6-mt1",
        "x6-mt2",
        "x7-1",
        "x7-mt1",
        "x7-mt2",
        "x8-mt1",
        "x8-mt2"
      ],
      [
        "jp5-3",
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ],
      [
        "jp5-4",
        "conn3-3",
        "conn4-3",
        "jp1-4"
      ],
      [
        "jp5-5",
        "jp1-5"
      ],
      [
        "jp5-6",
        "jp1-6"
      ],
      [
        "x1-2",
        "tp1-p-1"
      ],
      [
        "x2-1",
        "tp5-p-1"
      ],
      [
        "x2-2",
        "x4-2",
        "x6-2",
        "x8-2",
        "tp9-p-1"
      ],
      [
        "x3-2",
        "tp2-p-1"
      ],
      [
        "x4-1",
        "tp6-p-1"
      ],
      [
        "x5-2",
        "tp3-p-1"
      ],
      [
        "x6-1",
        "tp7-p-1"
      ],
      [
        "x7-2",
        "tp4-p-1"
      ],
      [
        "x8-1",
        "tp8-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5296"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LED-Arcade-Button-1x4-PCB/blob/437bc15cf86fe7176b153575118f58b178de18fd/Adafruit%20LED%20Arcade%20Button%201x4.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LED-Arcade-Button-1x4-PCB/blob/437bc15cf86fe7176b153575118f58b178de18fd/Adafruit%20LED%20Arcade%20Button%201x4.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LED-Arcade-Button-1x4-PCB/blob/437bc15cf86fe7176b153575118f58b178de18fd/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5296",
      "status": "Official Adafruit stock feed reported 47 available.",
      "sku": "ADA5296",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "47"
    },
    "description": "Adafruit ADA5296. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -32.082499999999996,
      -6.1610000000000005,
      31.336,
      7.8695
    ],
    "backArtworkBounds": [
      -34.885,
      -7.215,
      34.885,
      7.215
    ]
  },
  {
    "id": "adafruit-module-4978",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA4978: EAGLE Adafruit NeoKey Breakout.brd; commit 8e89cf15d323 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-NeoKey-Breakout-PCB/blob/8e89cf15d32369072d473cda4424f417255abf97/Adafruit%20NeoKey%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP3", "count": 5, "package": "1X05_ROUND_70"}, {"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "duplicateHeaderContacts": [{"pinId": "jp2-1", "equivalentPinId": "jp3-3", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-2", "equivalentPinId": "jp3-5", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp4-1", "equivalentPinId": "jp1-3", "connector": "JP4", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp4-2", "equivalentPinId": "jp3-5", "connector": "JP4", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "b140a66a3618e18928b336e987b0f06ec25d711c96f7362cdd0668604f6c689f"
      },
      "bodyRegions": [
        {"x": -9.525, "y": -10.795, "width": 19.05, "height": 21.59}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4978",
    "name": "NeoKey Socket Breakout for Mechanical Key Switches with NeoPixel",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4978",
    "revision": "EAGLE Adafruit NeoKey Breakout.brd; commit 8e89cf15d323",
    "category": "Inputs",
    "board": {
      "width": 19.05,
      "height": 21.59,
      "color": "#246545",
      "outline": "M9.525 8.255A2.54 2.54 0 0 1 6.985 10.795L-6.985 10.795A2.54 2.54 0 0 1 -9.525 8.255L-9.525 -8.255A2.54 2.54 0 0 1 -6.985 -10.795L6.985 -10.795A2.54 2.54 0 0 1 9.525 -8.255L9.525 8.255Z"
    },
    "contacts": assets["adafruit-module-4978"]["contacts"],
    "holes": [
      {
        "x": 7.62,
        "y": -5.715,
        "drill": 2.54
      },
      {
        "x": -7.62,
        "y": 5.715,
        "drill": 2.54
      },
      {
        "x": 0,
        "y": 0,
        "drill": 3.9
      },
      {
        "x": -2.54,
        "y": -5.08,
        "drill": 3.0635
      },
      {
        "x": 3.81,
        "y": -2.54,
        "drill": 3.0635
      },
      {
        "x": -5.08,
        "y": 0,
        "drill": 1.8135
      },
      {
        "x": 5.08,
        "y": 0,
        "drill": 1.8135
      }
    ],
    "artwork": assets["adafruit-module-4978"]["artwork"],
    "backArtwork": assets["adafruit-module-4978"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-4978"]["provenance"],
    "internalConnections": [
      [
        "sw1-2",
        "jp3-4",
        "jp1-4"
      ],
      [
        "jp3-1",
        "jp1-1"
      ],
      [
        "jp3-2",
        "jp1-2"
      ],
      [
        "jp3-3",
        "jp2-1"
      ],
      [
        "jp3-5",
        "jp1-5",
        "jp2-2",
        "jp4-2"
      ],
      [
        "jp1-3",
        "jp4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4978"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-Breakout-PCB/blob/8e89cf15d32369072d473cda4424f417255abf97/Adafruit%20NeoKey%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-Breakout-PCB/blob/8e89cf15d32369072d473cda4424f417255abf97/Adafruit%20NeoKey%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-Breakout-PCB/blob/8e89cf15d32369072d473cda4424f417255abf97/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4978",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4978",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4978. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.7880000000000003,
      -0.024,
      5.603,
      4.396
    ],
    "backArtworkBounds": [
      -9.565,
      -9.565,
      9.565,
      9.565
    ]
  },
  {
    "id": "adafruit-module-5666",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5666: EAGLE IoT Button with NeoPixel BFF.brd; commit 6c3fe13b68c1 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-IoT-Button-with-NeoPixel-BFF-PCB/blob/6c3fe13b68c13fb1ca52c27b5d0db88478e917f9/IoT%20Button%20with%20NeoPixel%20BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. For castellated packages use only the inner plated round holes for the downward header; the electrically paired outer edge contacts are solderable auxiliary contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_CASTEL"}, {"id": "JP3", "count": 7, "package": "1X07_CASTEL"}],
        "castellationAliases": [{"pinId": "jp1-1c", "equivalentPinId": "jp1-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-2c", "equivalentPinId": "jp1-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-3c", "equivalentPinId": "jp1-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-4c", "equivalentPinId": "jp1-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-5c", "equivalentPinId": "jp1-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-6c", "equivalentPinId": "jp1-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-7c", "equivalentPinId": "jp1-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-1c", "equivalentPinId": "jp3-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-2c", "equivalentPinId": "jp3-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-3c", "equivalentPinId": "jp3-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-4c", "equivalentPinId": "jp3-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-5c", "equivalentPinId": "jp3-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-6c", "equivalentPinId": "jp3-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-7c", "equivalentPinId": "jp3-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}],
        "boardSha256": "238379340e886fbf61e5fed74f886b48f7ec6b6abd379862a5c262b28027a379"
      },
      "rearOverhangRegions": [{"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0}, {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}],
      "bodyRegions": [
        {"x": -8.89, "y": -10.3505, "width": 17.78, "height": 20.701},
        {"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0},
        {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5666",
    "name": "Adafruit IoT Button with NeoPixel BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5666",
    "revision": "EAGLE IoT Button with NeoPixel BFF.brd; commit 6c3fe13b68c1",
    "category": "Inputs",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5666"]["contacts"],
    "holes": [
      {
        "x": -4.4958,
        "y": 1.9685,
        "drill": 1.8034
      },
      {
        "x": 4.4958,
        "y": 1.9685,
        "drill": 1.8034
      }
    ],
    "artwork": assets["adafruit-module-5666"]["artwork"],
    "backArtwork": assets["adafruit-module-5666"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5666"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5666"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-IoT-Button-with-NeoPixel-BFF-PCB/blob/6c3fe13b68c13fb1ca52c27b5d0db88478e917f9/IoT%20Button%20with%20NeoPixel%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-IoT-Button-with-NeoPixel-BFF-PCB/blob/6c3fe13b68c13fb1ca52c27b5d0db88478e917f9/IoT%20Button%20with%20NeoPixel%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-IoT-Button-with-NeoPixel-BFF-PCB/blob/6c3fe13b68c13fb1ca52c27b5d0db88478e917f9/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5666",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5666",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5666. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.517,
      -10.1975,
      6.517,
      8.1045
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-5695",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5695: EAGLE Adafruit NeoKey BFF.brd; commit 4f0e7f24bc6b physical insertion headers", "url": "https://github.com/adafruit/Adafruit-NeoKey-BFF-PCB/blob/4f0e7f24bc6bd4af262cbd93772e1eeb09c9244a/Adafruit%20NeoKey%20BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. For castellated packages use only the inner plated round holes for the downward header; the electrically paired outer edge contacts are solderable auxiliary contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_CASTEL"}, {"id": "JP3", "count": 7, "package": "1X07_CASTEL"}],
        "castellationAliases": [{"pinId": "jp1-1c", "equivalentPinId": "jp1-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-2c", "equivalentPinId": "jp1-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-3c", "equivalentPinId": "jp1-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-4c", "equivalentPinId": "jp1-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-5c", "equivalentPinId": "jp1-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-6c", "equivalentPinId": "jp1-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-7c", "equivalentPinId": "jp1-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-1c", "equivalentPinId": "jp3-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-2c", "equivalentPinId": "jp3-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-3c", "equivalentPinId": "jp3-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-4c", "equivalentPinId": "jp3-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-5c", "equivalentPinId": "jp3-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-6c", "equivalentPinId": "jp3-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-7c", "equivalentPinId": "jp3-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}],
        "boardSha256": "fc59d57397353310dfec86f2bf5147f31bb717064557126fa3921ad7189f8557"
      },
      "bodyRegions": [
        {"x": -10.3505, "y": -8.89, "width": 20.701, "height": 17.78},
        {"x": -9.0, "y": 6.985, "width": 18.0, "height": 2.54},
        {"x": -9.0, "y": -9.525, "width": 18.0, "height": 2.54}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5695",
    "name": "Adafruit NeoKey BFF for Mechanical Key Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5695",
    "revision": "EAGLE Adafruit NeoKey BFF.brd; commit 4f0e7f24bc6b",
    "category": "Inputs",
    "board": {
      "width": 20.701,
      "height": 17.78,
      "color": "#246545",
      "outline": "M7.8105 8.89A2.54 2.54 0 0 0 10.3505 6.35L10.3505 -6.35A2.54 2.54 0 0 0 7.8105 -8.89L-7.8105 -8.89A2.54 2.54 0 0 0 -10.3505 -6.35L-10.3505 6.35A2.54 2.54 0 0 0 -7.8105 8.89L7.8105 8.89Z"
    },
    "contacts": assets["adafruit-module-5695"]["contacts"],
    "holes": [
      {
        "x": 0.1905,
        "y": -0.381,
        "drill": 3.9
      },
      {
        "x": 2.7305,
        "y": 4.699,
        "drill": 3.2
      },
      {
        "x": -3.6195,
        "y": 2.159,
        "drill": 3.2
      },
      {
        "x": 5.2705,
        "y": -0.381,
        "drill": 1.8135
      },
      {
        "x": -4.8895,
        "y": -0.381,
        "drill": 1.8135
      }
    ],
    "artwork": assets["adafruit-module-5695"]["artwork"],
    "backArtwork": assets["adafruit-module-5695"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5695"]["provenance"],
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
        "jp3-6c",
        "sw2-2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ],
      [
        "tp2-p-1",
        "sw2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5695"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-BFF-PCB/blob/4f0e7f24bc6bd4af262cbd93772e1eeb09c9244a/Adafruit%20NeoKey%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-BFF-PCB/blob/4f0e7f24bc6bd4af262cbd93772e1eeb09c9244a/Adafruit%20NeoKey%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoKey-BFF-PCB/blob/4f0e7f24bc6bd4af262cbd93772e1eeb09c9244a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5695",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5695",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5695. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.04,
      -9.565,
      9.6895,
      9.565
    ],
    "backArtworkBounds": [
      -1.4495,
      -6.839,
      1.8305,
      -3.259
    ]
  },
];
