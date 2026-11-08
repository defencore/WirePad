import assets from "./displays-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-326",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA326: EAGLE Adafruit 0.96in 128x64 OLED STEMMA QT.brd; commit 51ef8e242dcf header geometry", "url": "https://github.com/adafruit/Adafruit-128x64-Monochrome-OLED-PCB/blob/51ef8e242dcf460d5effc298d8565110624e6b23/Adafruit%200.96in%20128x64%20OLED%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "0f3edce362179e1520a71fe477d631187fbc6f914fc569b8ba39931fe741d617"
      },
      "bodyRegions": [
        {"x": -14.605, "y": -15.875, "width": 29.21, "height": 31.75}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA326",
    "name": "Monochrome 0.96\" 128x64 OLED Graphic Display - STEMMA QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/326",
    "revision": "EAGLE Adafruit 0.96in 128x64 OLED STEMMA QT.brd; commit 51ef8e242dcf",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -14.190999999999999,
      -10.899999999999999,
      14.191,
      5.793
    ],
    "backArtworkBounds": [
      -13.389999999999999,
      -11.097999999999999,
      13.393,
      10.842
    ],
    "board": {
      "width": 29.21,
      "height": 31.75,
      "color": "#246545",
      "outline": "M-14.605 13.335A2.54 2.54 0 0 0 -12.065 15.875A2.54 2.54 0 0 0 -9.525 13.335L-9.525 10.795L9.525 10.795L9.525 13.335A2.54 2.54 0 0 0 12.065 15.875A2.54 2.54 0 0 0 14.605 13.335L14.605 -13.335A2.54 2.54 0 0 0 12.065 -15.875L-12.065 -15.875A2.54 2.54 0 0 0 -14.605 -13.335L-14.605 13.335Z"
    },
    "contacts": assets["adafruit-module-326"]["contacts"],
    "holes": [
      {
        "x": -12.065,
        "y": -13.335,
        "drill": 2.5
      },
      {
        "x": 12.065,
        "y": -13.335,
        "drill": 2.5
      },
      {
        "x": -12.065,
        "y": 13.335,
        "drill": 2.5
      },
      {
        "x": 12.065,
        "y": 13.335,
        "drill": 2.5
      },
      {
        "x": 8,
        "y": 8.752,
        "drill": 0.4
      },
      {
        "x": -8,
        "y": 8.752,
        "drill": 0.4
      }
    ],
    "artwork": assets["adafruit-module-326"]["artwork"],
    "backArtwork": assets["adafruit-module-326"]["backArtwork"],
    "provenance": assets["adafruit-module-326"]["provenance"],
    "internalConnections": [
      [
        "conn4-2",
        "jp2-7",
        "conn1-2"
      ],
      [
        "conn4-3",
        "jp2-1",
        "conn1-3"
      ],
      [
        "conn4-1",
        "jp2-8",
        "conn1-1"
      ],
      [
        "conn4-4",
        "jp2-2",
        "conn1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/326"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-128x64-Monochrome-OLED-PCB/blob/51ef8e242dcf460d5effc298d8565110624e6b23/Adafruit%200.96in%20128x64%20OLED%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-128x64-Monochrome-OLED-PCB/blob/51ef8e242dcf460d5effc298d8565110624e6b23/Adafruit%200.96in%20128x64%20OLED%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-128x64-Monochrome-OLED-PCB/blob/51ef8e242dcf460d5effc298d8565110624e6b23/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/326",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA326",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA326. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-938",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA938: EAGLE Adafruit 1.3in 128x64 OLED STEMMA QT.brd; commit 02c953af3a9c header geometry", "url": "https://github.com/adafruit/Adafruit-1.3inch-128x64-Mono-OLED-PCB/blob/02c953af3a9c7c53d0c33faaa98a8aa1bffca5be/Adafruit%201.3in%20128x64%20OLED%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "72d99dc9f01c49627118bfe6c99eacb47e53f53da4530d2bff626d753e065722"
      },
      "bodyRegions": [
        {"x": -17.78, "y": -16.51, "width": 35.56, "height": 33.02}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA938",
    "name": "Monochrome 1.3\" 128x64 OLED graphic display - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/938",
    "revision": "EAGLE Adafruit 1.3in 128x64 OLED STEMMA QT.brd; commit 02c953af3a9c",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -17.366,
      -9.757,
      17.366,
      6.809
    ],
    "backArtworkBounds": [
      -17.29,
      -11.603,
      17.29,
      11.477
    ],
    "board": {
      "width": 35.56,
      "height": 33.02,
      "color": "#246545",
      "outline": "M-17.78 13.97A2.54 2.54 0 0 0 -15.24 16.51A2.54 2.54 0 0 0 -12.7 13.97L-12.7 11.43L12.7 11.43L12.7 13.97A2.54 2.54 0 0 0 15.24 16.51A2.54 2.54 0 0 0 17.78 13.97L17.78 -13.97A2.54 2.54 0 0 0 15.24 -16.51L-15.24 -16.51A2.54 2.54 0 0 0 -17.78 -13.97L-17.78 13.97Z"
    },
    "contacts": assets["adafruit-module-938"]["contacts"],
    "holes": [
      {
        "x": -15.24,
        "y": -13.97,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -13.97,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": 13.97,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": 13.97,
        "drill": 2.5
      },
      {
        "x": 8,
        "y": 8.387,
        "drill": 0.4
      },
      {
        "x": -8,
        "y": 8.387,
        "drill": 0.4
      }
    ],
    "artwork": assets["adafruit-module-938"]["artwork"],
    "backArtwork": assets["adafruit-module-938"]["backArtwork"],
    "provenance": assets["adafruit-module-938"]["provenance"],
    "internalConnections": [
      [
        "conn4-2",
        "jp2-7",
        "conn1-2"
      ],
      [
        "conn4-3",
        "jp2-1",
        "conn1-3"
      ],
      [
        "conn4-1",
        "jp2-8",
        "conn1-1"
      ],
      [
        "conn4-4",
        "jp2-2",
        "conn1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/938"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.3inch-128x64-Mono-OLED-PCB/blob/02c953af3a9c7c53d0c33faaa98a8aa1bffca5be/Adafruit%201.3in%20128x64%20OLED%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.3inch-128x64-Mono-OLED-PCB/blob/02c953af3a9c7c53d0c33faaa98a8aa1bffca5be/Adafruit%201.3in%20128x64%20OLED%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.3inch-128x64-Mono-OLED-PCB/blob/02c953af3a9c7c53d0c33faaa98a8aa1bffca5be/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/938",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA938",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA938. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2315",
    "mountingReview": {
      "contactIds": ["conn1-1", "conn1-2", "conn1-3", "conn1-4", "conn1-5", "conn1-6", "conn1-7", "conn1-8", "conn1-9", "conn1-10", "conn1-11", "conn1-12", "conn1-13", "conn1-14", "conn1-15", "conn1-16", "conn1-17", "conn1-18", "conn1-19", "conn1-20", "conn1-21", "conn1-22", "conn1-23", "conn1-24", "conn1-25"],
      "source": {"label": "Adafruit ADA2315: EAGLE Adafruit 2.2in TFT HAT rev B.brd; commit 1611c88b5a0f header geometry", "url": "https://github.com/adafruit/Adafruit-PiTFT-2.2-Inch-HAT-PCB/blob/1611c88b5a0f16be4fa7ca2b05c5bc311e0f7577/Adafruit%202.2in%20TFT%20HAT%20rev%20B.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "CONN1", "count": 25, "package": "1X25_ROUND_70MIL"}],
        "boardSha256": "521dbf3b1db22e3d0b3527112dcebba0d733dbc7475f39caba3aef05400f17ad"
      },
      "bodyRegions": [
        {"x": -32.5, "y": -28.25, "width": 65, "height": 56.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2315",
    "name": "Adafruit PiTFT 2.2\" HAT Mini Kit - 320x240 2.2\" TFT - No Touch",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2315",
    "revision": "EAGLE Adafruit 2.2in TFT HAT rev B.brd; commit 1611c88b5a0f",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -32.54,
      -28.29,
      32.54,
      28.29
    ],
    "backArtworkBounds": [
      -30.508,
      -14.588999999999999,
      -27.007,
      -6.762
    ],
    "board": {
      "width": 65,
      "height": 56.5,
      "color": "#246545",
      "outline": "M-32.5 25.25A3.0 3.0 0 0 0 -29.5 28.25L29.5 28.25A3.0 3.0 0 0 0 32.5 25.25L32.5 -25.25A3.0 3.0 0 0 0 29.5 -28.25L-29.5 -28.25A3.0 3.0 0 0 0 -32.5 -25.25L-32.5 25.25Z"
    },
    "contacts": assets["adafruit-module-2315"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 24.75,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 24.75,
        "drill": 2.8
      },
      {
        "x": 12.308,
        "y": 7.722,
        "drill": 1
      },
      {
        "x": 12.308,
        "y": -5.578,
        "drill": 1
      },
      {
        "x": -19.146,
        "y": -17.428,
        "drill": 1
      },
      {
        "x": -19.146,
        "y": 19.572,
        "drill": 1
      },
      {
        "x": 27.354,
        "y": 19.572,
        "drill": 1
      },
      {
        "x": 27.354,
        "y": -17.428,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-2315"]["artwork"],
    "backArtwork": assets["adafruit-module-2315"]["backArtwork"],
    "provenance": assets["adafruit-module-2315"]["provenance"],
    "internalConnections": [
      [
        "conn1-1",
        "rpi1-3"
      ],
      [
        "conn1-2",
        "rpi1-5"
      ],
      [
        "conn1-3",
        "rpi1-8"
      ],
      [
        "conn1-4",
        "rpi1-10"
      ],
      [
        "conn1-5",
        "rpi1-7"
      ],
      [
        "conn1-6",
        "rpi1-11"
      ],
      [
        "conn1-7",
        "rpi1-12"
      ],
      [
        "conn1-8",
        "rpi1-13"
      ],
      [
        "conn1-9",
        "rpi1-15"
      ],
      [
        "conn1-10",
        "rpi1-16"
      ],
      [
        "conn1-11",
        "rpi1-18"
      ],
      [
        "conn1-12",
        "rpi1-22"
      ],
      [
        "conn1-13",
        "rpi1-19"
      ],
      [
        "conn1-14",
        "rpi1-21"
      ],
      [
        "conn1-15",
        "rpi1-23"
      ],
      [
        "conn1-16",
        "rpi1-24"
      ],
      [
        "conn1-17",
        "rpi1-26"
      ],
      [
        "conn1-18",
        "rpi1-29"
      ],
      [
        "conn1-19",
        "rpi1-31"
      ],
      [
        "conn1-20",
        "rpi1-32"
      ],
      [
        "conn1-21",
        "rpi1-33"
      ],
      [
        "conn1-22",
        "rpi1-36"
      ],
      [
        "conn1-23",
        "rpi1-35"
      ],
      [
        "conn1-24",
        "rpi1-38"
      ],
      [
        "conn1-25",
        "rpi1-40"
      ],
      [
        "jp1-1",
        "jp3-1",
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39"
      ],
      [
        "jp2-1",
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "jp4-1",
        "rpi1-1",
        "rpi1-17"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2315"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiTFT-2.2-Inch-HAT-PCB/blob/1611c88b5a0f16be4fa7ca2b05c5bc311e0f7577/Adafruit%202.2in%20TFT%20HAT%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiTFT-2.2-Inch-HAT-PCB/blob/1611c88b5a0f16be4fa7ca2b05c5bc311e0f7577/Adafruit%202.2in%20TFT%20HAT%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiTFT-2.2-Inch-HAT-PCB/blob/1611c88b5a0f16be4fa7ca2b05c5bc311e0f7577/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2315",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2315",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2315. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3088",
    "sku": "ADA3088",
    "name": "Adafruit 4-Digit 7-Segment LED Matrix Display FeatherWing",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3088",
    "revision": "EAGLE 7 seg featherwing rev A.brd; commit 50dc43b6c03a",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -23.407999999999998,
      -6.542,
      9.0824,
      3.85
    ],
    "backArtworkBounds": [
      -25.04,
      -9.54,
      25.04,
      9.54
    ],
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-22.86 11.43A2.54 2.54 0 0 1 -25.4 8.89L-25.4 -8.89A2.54 2.54 0 0 1 -22.86 -11.43L22.86 -11.43A2.54 2.54 0 0 1 25.4 -8.89L25.4 8.89A2.54 2.54 0 0 1 22.86 11.43L-22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3088"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.54
      }
    ],
    "artwork": assets["adafruit-module-3088"]["artwork"],
    "backArtwork": assets["adafruit-module-3088"]["backArtwork"],
    "provenance": assets["adafruit-module-3088"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3088"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LED-Backpack-FeatherWing-PCB/blob/50dc43b6c03adafa21683995f62efb6e825bba12/7%20seg%20featherwing%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LED-Backpack-FeatherWing-PCB/blob/50dc43b6c03adafa21683995f62efb6e825bba12/7%20seg%20featherwing%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LED-Backpack-FeatherWing-PCB/blob/50dc43b6c03adafa21683995f62efb6e825bba12/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3088",
      "status": "Official Adafruit stock feed reported 10 available.",
      "sku": "ADA3088",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "10"
    },
    "description": "Adafruit ADA3088. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-684",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10"],
      "source": {"label": "Adafruit ADA684: EAGLE Adafruit 96x64 RGB OLED Breakout v2.0.brd; commit 41ffc374eacf header geometry", "url": "https://github.com/adafruit/Adafruit-96x64-RGB-OLED-Breakout-PCB/blob/41ffc374eacf8b0e1747c455ff87f5317a332a21/Adafruit%2096x64%20RGB%20OLED%20Breakout%20v2.0.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 10, "package": "1X10_ROUND_76"}],
        "boardSha256": "18c9bf96eee3b1804bcfffd6fcf8cfedd23f3f18f238748dd6c9f9b3a862bea4"
      },
      "bodyRegions": [
        {"x": -17.78, "y": -14.605, "width": 35.56, "height": 29.21},
        {"x": -22.021, "y": -8.94, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA684",
    "name": "OLED Breakout Board - 16-bit Color 0.96\" w/microSD holder",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/684",
    "revision": "EAGLE Adafruit 96x64 RGB OLED Breakout v2.0.brd; commit 41ffc374eacf",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -22.061,
      -8.979999999999999,
      16.7024,
      12.812
    ],
    "backArtworkBounds": [
      -12.899999999999999,
      -9.444999999999999,
      12.89,
      14.725
    ],
    "board": {
      "width": 35.56,
      "height": 29.21,
      "color": "#246545",
      "outline": "M-17.78 12.065A2.54 2.54 0 0 0 -15.24 14.605L15.24 14.605A2.54 2.54 0 0 0 17.78 12.065L17.78 -12.065A2.54 2.54 0 0 0 15.24 -14.605L-15.24 -14.605A2.54 2.54 0 0 0 -17.78 -12.065L-17.78 12.065Z"
    },
    "contacts": assets["adafruit-module-684"]["contacts"],
    "holes": [
      {
        "x": -15.24,
        "y": -12.065,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -12.065,
        "drill": 2.5
      },
      {
        "x": 8,
        "y": 12.107,
        "drill": 1
      },
      {
        "x": -8,
        "y": 12.107,
        "drill": 1
      },
      {
        "x": -15.24,
        "y": 12.065,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": 12.065,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-684"]["artwork"],
    "backArtwork": assets["adafruit-module-684"]["backArtwork"],
    "provenance": assets["adafruit-module-684"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "cn1-cd1"
      ],
      [
        "jp2-2",
        "cn1-7"
      ],
      [
        "jp2-10",
        "cn1-mt1",
        "cn1-mt2",
        "cn1-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/684"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-96x64-RGB-OLED-Breakout-PCB/blob/41ffc374eacf8b0e1747c455ff87f5317a332a21/Adafruit%2096x64%20RGB%20OLED%20Breakout%20v2.0.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-96x64-RGB-OLED-Breakout-PCB/blob/41ffc374eacf8b0e1747c455ff87f5317a332a21/Adafruit%2096x64%20RGB%20OLED%20Breakout%20v2.0.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-96x64-RGB-OLED-Breakout-PCB/blob/41ffc374eacf8b0e1747c455ff87f5317a332a21/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/684",
      "status": "Official Adafruit stock feed reported 91 available.",
      "sku": "ADA684",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "91"
    },
    "description": "Adafruit ADA684. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4311",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA4311: EAGLE Adafruit EYESPI 2.0 Inch 240x320 IPS TFT.brd; commit 9804ed3f84ab header geometry", "url": "https://github.com/adafruit/Adafruit-2.0-inch-240x320-TFT-PCB/blob/9804ed3f84ab9b4547706bc13a467492435a60f4/Adafruit%20EYESPI%202.0%20Inch%20240x320%20IPS%20TFT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "7747d0234e04c21be8dd7f28bbb2556b879dd4c64d06d7770222075fd02edc0a"
      },
      "bodyRegions": [
        {"x": -17.78, "y": -29.5275, "width": 35.56, "height": 59.055},
        {"x": -7.038, "y": -33.6415, "width": 14.2, "height": 20.47}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4311",
    "name": "2.0\" 320x240 Color IPS TFT Display with microSD Card Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4311",
    "revision": "EAGLE Adafruit EYESPI 2.0 Inch 240x320 IPS TFT.brd; commit 9804ed3f84ab",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -13.423399999999999,
      -33.6815,
      17.05,
      21.8455
    ],
    "backArtworkBounds": [
      -17.275,
      -24.3025,
      17.405,
      23.7775
    ],
    "board": {
      "width": 35.56,
      "height": 59.055,
      "color": "#246545",
      "outline": "M17.78 -26.9875A2.54 2.54 0 0 0 15.24 -29.5275L-15.24 -29.5275A2.54 2.54 0 0 0 -17.78 -26.9875L-17.78 26.9875A2.54 2.54 0 0 0 -15.24 29.5275L15.24 29.5275A2.54 2.54 0 0 0 17.78 26.9875L17.78 -26.9875Z"
    },
    "contacts": assets["adafruit-module-4311"]["contacts"],
    "holes": [
      {
        "x": 15.24,
        "y": -26.9875,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": -26.9875,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4311"]["artwork"],
    "backArtwork": assets["adafruit-module-4311"]["backArtwork"],
    "provenance": assets["adafruit-module-4311"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x2-2"
      ],
      [
        "jp1-2",
        "x2-10"
      ],
      [
        "jp1-3",
        "x2-7"
      ],
      [
        "jp1-4",
        "x2-8"
      ],
      [
        "jp1-5",
        "x2-9"
      ],
      [
        "jp1-6",
        "x2-5"
      ],
      [
        "jp1-7",
        "x1-7",
        "x2-6"
      ],
      [
        "jp1-8",
        "x2-4"
      ],
      [
        "jp1-9",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "x2-3",
        "x2-support1",
        "x2-support2"
      ],
      [
        "jp1-10",
        "x1-4"
      ],
      [
        "jp1-11",
        "x2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4311"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-2.0-inch-240x320-TFT-PCB/blob/9804ed3f84ab9b4547706bc13a467492435a60f4/Adafruit%20EYESPI%202.0%20Inch%20240x320%20IPS%20TFT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-2.0-inch-240x320-TFT-PCB/blob/9804ed3f84ab9b4547706bc13a467492435a60f4/Adafruit%20EYESPI%202.0%20Inch%20240x320%20IPS%20TFT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-2.0-inch-240x320-TFT-PCB/blob/9804ed3f84ab9b4547706bc13a467492435a60f4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4311",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4311",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4311. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2088",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA2088: EAGLE Adafruit EYESPI 1.44 inch TFT Breakout.brd; commit ceaa44415717 header geometry", "url": "https://github.com/adafruit/Adafruit-1.44-TFT-Breakout-PCB/blob/ceaa444157175651785903b73bb0001e45b7ea88/Adafruit%20EYESPI%201.44%20inch%20TFT%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "645acb380659b2a9847bd7dcda4de0b384807303366795c665a64a83c10fd95c"
      },
      "bodyRegions": [
        {"x": -22.225, "y": -21.59, "width": 44.45, "height": 43.18},
        {"x": -26.466, "y": -6.273, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2088",
    "name": "Adafruit 1.44\" Color TFT LCD Display with MicroSD Card breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2088",
    "revision": "EAGLE Adafruit EYESPI 1.44 inch TFT Breakout.brd; commit ceaa44415717",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -26.506,
      -15.271999999999998,
      15.432,
      12.1264
    ],
    "backArtworkBounds": [
      -20.253,
      -15.34,
      14.827,
      15.34
    ],
    "board": {
      "width": 44.45,
      "height": 43.18,
      "color": "#246545",
      "outline": "M17.145 19.05A2.54 2.54 0 0 0 19.685 21.59A2.54 2.54 0 0 0 22.225 19.05L22.225 -19.05A2.54 2.54 0 0 0 19.685 -21.59A2.54 2.54 0 0 0 17.145 -19.05L17.145 -16.51L-17.145 -16.51L-17.145 -19.05A2.54 2.54 0 0 0 -19.685 -21.59A2.54 2.54 0 0 0 -22.225 -19.05L-22.225 19.05A2.54 2.54 0 0 0 -19.685 21.59A2.54 2.54 0 0 0 -17.145 19.05L-17.145 16.51L17.145 16.51L17.145 19.05Z"
    },
    "contacts": assets["adafruit-module-2088"]["contacts"],
    "holes": [
      {
        "x": -19.685,
        "y": -19.05,
        "drill": 2.5
      },
      {
        "x": -19.685,
        "y": 19.05,
        "drill": 2.5
      },
      {
        "x": 19.685,
        "y": -19.05,
        "drill": 2.5
      },
      {
        "x": 19.685,
        "y": 19.05,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2088"]["artwork"],
    "backArtwork": assets["adafruit-module-2088"]["backArtwork"],
    "provenance": assets["adafruit-module-2088"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x2-1"
      ],
      [
        "jp1-2",
        "x1-4"
      ],
      [
        "jp1-3",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "x2-3",
        "x2-support1",
        "x2-support2"
      ],
      [
        "jp1-4",
        "x2-4"
      ],
      [
        "jp1-5",
        "x1-7",
        "x2-6"
      ],
      [
        "jp1-6",
        "x2-5"
      ],
      [
        "jp1-7",
        "x2-9"
      ],
      [
        "jp1-8",
        "x2-8"
      ],
      [
        "jp1-9",
        "x2-7"
      ],
      [
        "jp1-10",
        "x2-10"
      ],
      [
        "jp1-11",
        "x2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2088"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.44-TFT-Breakout-PCB/blob/ceaa444157175651785903b73bb0001e45b7ea88/Adafruit%20EYESPI%201.44%20inch%20TFT%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.44-TFT-Breakout-PCB/blob/ceaa444157175651785903b73bb0001e45b7ea88/Adafruit%20EYESPI%201.44%20inch%20TFT%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.44-TFT-Breakout-PCB/blob/ceaa444157175651785903b73bb0001e45b7ea88/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2088",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2088",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2088. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3787",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12"],
      "source": {"label": "Adafruit ADA3787: EAGLE Adafruit 1.54in 240x240 TFT EYESPI.brd; commit 3f46e828b840 header geometry", "url": "https://github.com/adafruit/Adafruit-1.54-inch-240x240-TFT-PCB/blob/3f46e828b8404212ac402a82e02ab37381af1eb9/Adafruit%201.54in%20240x240%20TFT%20EYESPI.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 12, "package": "1X12_ROUND_76MIL"}],
        "boardSha256": "0e4b40810e3466a12cf7c3d9914a99374cf1d1c090eeb61a920bfdd31b35b32f"
      },
      "bodyRegions": [
        {"x": -21.9075, "y": -20.955, "width": 43.815, "height": 41.91},
        {"x": -26.4025, "y": -14.909, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3787",
    "name": "Adafruit 1.54\" 240x240 Wide Angle TFT LCD Display with MicroSD",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3787",
    "revision": "EAGLE Adafruit 1.54in 240x240 TFT EYESPI.brd; commit 3f46e828b840",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -26.4425,
      -14.9545,
      16.7395,
      11.013
    ],
    "backArtworkBounds": [
      -18.2505,
      -15.799999999999999,
      16.5295,
      15.8
    ],
    "board": {
      "width": 43.815,
      "height": 41.91,
      "color": "#246545",
      "outline": "M16.8275 18.415A2.54 2.54 0 0 0 19.3675 20.955A2.54 2.54 0 0 0 21.9075 18.415L21.9075 -18.415A2.54 2.54 0 0 0 19.3675 -20.955A2.54 2.54 0 0 0 16.8275 -18.415L16.8275 -15.875L-16.8275 -15.875L-16.8275 -18.415A2.54 2.54 0 0 0 -19.3675 -20.955A2.54 2.54 0 0 0 -21.9075 -18.415L-21.9075 18.415A2.54 2.54 0 0 0 -19.3675 20.955A2.54 2.54 0 0 0 -16.8275 18.415L-16.8275 15.875L16.8275 15.875L16.8275 18.415Z"
    },
    "contacts": assets["adafruit-module-3787"]["contacts"],
    "holes": [
      {
        "x": -19.3675,
        "y": -18.415,
        "drill": 2.5
      },
      {
        "x": -19.3675,
        "y": 18.415,
        "drill": 2.5
      },
      {
        "x": 19.3675,
        "y": -18.415,
        "drill": 2.5
      },
      {
        "x": 19.3675,
        "y": 18.415,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3787"]["artwork"],
    "backArtwork": assets["adafruit-module-3787"]["backArtwork"],
    "provenance": assets["adafruit-module-3787"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "x2-1"
      ],
      [
        "jp2-2",
        "x1-4"
      ],
      [
        "jp2-3",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "x2-3",
        "x2-support1",
        "x2-support2"
      ],
      [
        "jp2-4",
        "x2-4"
      ],
      [
        "jp2-5",
        "x1-7",
        "x2-6"
      ],
      [
        "jp2-6",
        "x2-5"
      ],
      [
        "jp2-7",
        "x2-9"
      ],
      [
        "jp2-8",
        "x2-8"
      ],
      [
        "jp2-9",
        "x2-7"
      ],
      [
        "jp2-10",
        "x2-10"
      ],
      [
        "jp2-11",
        "x2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3787"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.54-inch-240x240-TFT-PCB/blob/3f46e828b8404212ac402a82e02ab37381af1eb9/Adafruit%201.54in%20240x240%20TFT%20EYESPI.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.54-inch-240x240-TFT-PCB/blob/3f46e828b8404212ac402a82e02ab37381af1eb9/Adafruit%201.54in%20240x240%20TFT%20EYESPI.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.54-inch-240x240-TFT-PCB/blob/3f46e828b8404212ac402a82e02ab37381af1eb9/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3787",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3787",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3787. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4313",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA4313: EAGLE Adafruit 1.3in 240x240 IPS TFT EYESPI.brd; commit 7632e0cbe4a0 header geometry", "url": "https://github.com/adafruit/Adafruit-1.3-inch-240x240-TFT-PCB/blob/7632e0cbe4a0b5b5219c8262aa0737c611716a09/Adafruit%201.3in%20240x240%20IPS%20TFT%20EYESPI.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "3305158f5b122a32cad41b676a98886b04dc37bea1b950e6c91701444e4ff8a5"
      },
      "bodyRegions": [
        {"x": -17.78, "y": -19.05, "width": 35.56, "height": 38.1}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4313",
    "name": "Adafruit 1.3\" 240x240 Wide Angle TFT LCD Display with MicroSD",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4313",
    "revision": "EAGLE Adafruit 1.3in 240x240 IPS TFT EYESPI.brd; commit 7632e0cbe4a0",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -17.099999999999998,
      -13.142399999999999,
      12.3205,
      18.251
    ],
    "board": {
      "width": 35.56,
      "height": 38.1,
      "color": "#246545",
      "outline": "M12.7 16.51A2.54 2.54 0 0 0 15.24 19.05A2.54 2.54 0 0 0 17.78 16.51L17.78 -16.51A2.54 2.54 0 0 0 15.24 -19.05A2.54 2.54 0 0 0 12.7 -16.51L12.7 -13.97L-12.7 -13.97L-12.7 -16.51A2.54 2.54 0 0 0 -15.24 -19.05A2.54 2.54 0 0 0 -17.78 -16.51L-17.78 16.51A2.54 2.54 0 0 0 -15.24 19.05A2.54 2.54 0 0 0 -12.7 16.51L-12.7 13.97L12.7 13.97L12.7 16.51Z"
    },
    "contacts": assets["adafruit-module-4313"]["contacts"],
    "holes": [
      {
        "x": -15.24,
        "y": -16.51,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": 16.51,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -16.51,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": 16.51,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4313"]["artwork"],
    "backArtwork": assets["adafruit-module-4313"]["backArtwork"],
    "provenance": assets["adafruit-module-4313"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-1"
      ],
      [
        "jp1-2",
        "x2-4"
      ],
      [
        "jp1-3",
        "x2-mt1",
        "x2-mt2",
        "x2-6",
        "x1-3",
        "x1-support1",
        "x1-support2"
      ],
      [
        "jp1-4",
        "x1-4"
      ],
      [
        "jp1-5",
        "x2-7",
        "x1-6"
      ],
      [
        "jp1-6",
        "x1-5"
      ],
      [
        "jp1-7",
        "x1-9"
      ],
      [
        "jp1-8",
        "x1-8"
      ],
      [
        "jp1-9",
        "x1-7"
      ],
      [
        "jp1-10",
        "x1-10"
      ],
      [
        "jp1-11",
        "x1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4313"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.3-inch-240x240-TFT-PCB/blob/7632e0cbe4a0b5b5219c8262aa0737c611716a09/Adafruit%201.3in%20240x240%20IPS%20TFT%20EYESPI.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.3-inch-240x240-TFT-PCB/blob/7632e0cbe4a0b5b5219c8262aa0737c611716a09/Adafruit%201.3in%20240x240%20IPS%20TFT%20EYESPI.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.3-inch-240x240-TFT-PCB/blob/7632e0cbe4a0b5b5219c8262aa0737c611716a09/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4313",
      "status": "Official Adafruit stock feed reported 62 available.",
      "sku": "ADA4313",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "62"
    },
    "description": "Adafruit ADA4313. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2050",
    "sku": "ADA2050",
    "name": "3.5\" TFT 320x480 + Touchscreen Breakout Board w/MicroSD Socket",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2050",
    "revision": "EAGLE Adafruit 3.5in 480x320 Resistive Touch.brd; commit f229969d9b14",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -28.791999999999998,
      -32.856,
      23.027,
      36.768
    ],
    "backArtworkBounds": [
      -27.34,
      -42.46,
      27.34,
      42.52
    ],
    "board": {
      "width": 66.04,
      "height": 96.52,
      "color": "#246545",
      "outline": "M30.48 48.26A2.54 2.54 0 0 0 33.02 45.72A2.54 2.54 0 0 0 30.48 43.18L27.94 43.18L27.94 -43.18L30.48 -43.18A2.54 2.54 0 0 0 33.02 -45.72A2.54 2.54 0 0 0 30.48 -48.26L-30.48 -48.26A2.54 2.54 0 0 0 -33.02 -45.72A2.54 2.54 0 0 0 -30.48 -43.18L-27.94 -43.18L-27.94 43.18L-30.48 43.18A2.54 2.54 0 0 0 -33.02 45.72A2.54 2.54 0 0 0 -30.48 48.26L30.48 48.26Z"
    },
    "contacts": assets["adafruit-module-2050"]["contacts"],
    "holes": [
      {
        "x": -30.48,
        "y": 45.72,
        "drill": 3
      },
      {
        "x": 30.48,
        "y": 45.72,
        "drill": 3
      },
      {
        "x": -30.48,
        "y": -45.72,
        "drill": 3
      },
      {
        "x": 30.48,
        "y": -45.72,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-2050"]["artwork"],
    "backArtwork": assets["adafruit-module-2050"]["backArtwork"],
    "provenance": assets["adafruit-module-2050"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "jp2-15",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "jp1-1"
      ],
      [
        "jp2-2",
        "jp1-2"
      ],
      [
        "jp2-3",
        "x1-4"
      ],
      [
        "jp2-4",
        "jp1-5"
      ],
      [
        "jp2-5",
        "x1-7"
      ],
      [
        "jp2-7",
        "jp1-3"
      ],
      [
        "jp2-8",
        "jp1-4"
      ],
      [
        "jp2-9",
        "jp1-7"
      ],
      [
        "jp2-10",
        "jp1-8"
      ],
      [
        "jp2-11",
        "jp1-10"
      ],
      [
        "jp2-12",
        "jp1-9"
      ],
      [
        "jp2-13",
        "jp1-12"
      ],
      [
        "jp2-14",
        "jp1-11"
      ],
      [
        "jp2-20",
        "x1-cd2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2050"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/3.5inch-TFT-Breakout-PCB/blob/f229969d9b1416f34bedc4015fce967aaf7c5b00/Adafruit%203.5in%20480x320%20Resistive%20Touch.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/3.5inch-TFT-Breakout-PCB/blob/f229969d9b1416f34bedc4015fce967aaf7c5b00/Adafruit%203.5in%20480x320%20Resistive%20Touch.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/3.5inch-TFT-Breakout-PCB/blob/f229969d9b1416f34bedc4015fce967aaf7c5b00/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2050",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2050",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2050. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2900",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12"],
      "source": {"label": "Adafruit ADA2900: EAGLE Adafruit OLED FeatherWing.brd; commit 179eb83875ab header geometry", "url": "https://github.com/adafruit/Adafruit-OLED-FeatherWing-PCB/blob/179eb83875ab86c49a6b2d771e95099a55d8984b/Adafruit%20OLED%20FeatherWing.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16_ROUND"}, {"id": "JP2", "count": 12, "package": "1X12_ROUND"}],
        "boardSha256": "4f09e0779ad88ab1295f2cff75a44e01ec63edc38d4919892c4cc82c76b6ded6"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2900",
    "name": "Adafruit FeatherWing OLED - 128x32 OLED Add-on For Feather",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2900",
    "revision": "EAGLE Adafruit OLED FeatherWing.brd; commit 179eb83875ab",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -23.221999999999998,
      -10.988999999999999,
      23.916,
      6.536
    ],
    "backArtworkBounds": [
      -15.661,
      -8.802999999999999,
      -12.279,
      -6.691
    ],
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89Z"
    },
    "contacts": assets["adafruit-module-2900"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      }
    ],
    "artwork": assets["adafruit-module-2900"]["artwork"],
    "backArtwork": assets["adafruit-module-2900"]["backArtwork"],
    "provenance": assets["adafruit-module-2900"]["provenance"],
    "internalConnections": [
      [
        "ms1-28",
        "jp2-1"
      ],
      [
        "ms1-27",
        "jp2-2"
      ],
      [
        "ms1-26",
        "jp2-3"
      ],
      [
        "ms1-25",
        "jp2-4"
      ],
      [
        "ms1-24",
        "jp2-5"
      ],
      [
        "ms1-23",
        "jp2-6"
      ],
      [
        "ms1-22",
        "jp2-7"
      ],
      [
        "ms1-21",
        "jp2-8"
      ],
      [
        "ms1-20",
        "jp2-9"
      ],
      [
        "ms1-19",
        "jp2-10"
      ],
      [
        "ms1-18",
        "jp2-11"
      ],
      [
        "ms1-17",
        "jp2-12"
      ],
      [
        "ms1-5",
        "jp1-12"
      ],
      [
        "ms1-6",
        "jp1-11"
      ],
      [
        "ms1-7",
        "jp1-10"
      ],
      [
        "ms1-8",
        "jp1-9"
      ],
      [
        "ms1-9",
        "jp1-8"
      ],
      [
        "ms1-10",
        "jp1-7"
      ],
      [
        "ms1-11",
        "jp1-6"
      ],
      [
        "ms1-12",
        "jp1-5"
      ],
      [
        "ms1-13",
        "jp1-4"
      ],
      [
        "ms1-14",
        "jp1-3"
      ],
      [
        "ms1-15",
        "jp1-2"
      ],
      [
        "ms1-16",
        "jp1-1"
      ],
      [
        "ms1-4",
        "jp1-13"
      ],
      [
        "ms1-3",
        "jp1-14"
      ],
      [
        "ms1-2",
        "jp1-15"
      ],
      [
        "ms1-1",
        "jp1-16"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2900"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-OLED-FeatherWing-PCB/blob/179eb83875ab86c49a6b2d771e95099a55d8984b/Adafruit%20OLED%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-OLED-FeatherWing-PCB/blob/179eb83875ab86c49a6b2d771e95099a55d8984b/Adafruit%20OLED%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-OLED-FeatherWing-PCB/blob/179eb83875ab86c49a6b2d771e95099a55d8984b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2900",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2900",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2900. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3315",
    "sku": "ADA3315",
    "name": "TFT FeatherWing - 2.4\" 320x240 Touchscreen For All Feathers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3315",
    "revision": "EAGLE Adafruit 2.4in TFT FeatherWing V2.brd; commit 7db81bbb064e",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -26.329,
      -32.298,
      25.875,
      36.92
    ],
    "backArtworkBounds": [
      -21.34,
      -28.98,
      21.34,
      31.25
    ],
    "board": {
      "width": 52.578,
      "height": 64.77,
      "color": "#246545",
      "outline": "M23.749 -32.385A2.54 2.54 0 0 1 26.289 -29.845L26.289 29.845A2.54 2.54 0 0 1 23.749 32.385L-23.749 32.385A2.54 2.54 0 0 1 -26.289 29.845L-26.289 -29.845A2.54 2.54 0 0 1 -23.749 -32.385L23.749 -32.385Z"
    },
    "contacts": assets["adafruit-module-3315"]["contacts"],
    "holes": [
      {
        "x": -23.749,
        "y": 29.845,
        "drill": 2.5
      },
      {
        "x": 23.749,
        "y": 29.845,
        "drill": 2.5
      },
      {
        "x": -8.509,
        "y": -28.194,
        "drill": 2
      },
      {
        "x": 16.891,
        "y": -28.194,
        "drill": 2
      },
      {
        "x": -18.669,
        "y": -5.334,
        "drill": 2
      },
      {
        "x": 16.891,
        "y": -5.334,
        "drill": 2
      },
      {
        "x": -23.749,
        "y": -29.845,
        "drill": 2.5
      },
      {
        "x": 23.749,
        "y": -29.845,
        "drill": 2.5
      },
      {
        "x": -6.961,
        "y": 28.321,
        "drill": 1
      },
      {
        "x": -3.961,
        "y": 28.321,
        "drill": 1
      },
      {
        "x": -17.279,
        "y": 30.907,
        "drill": 1
      },
      {
        "x": -14.979,
        "y": 30.907,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-3315"]["artwork"],
    "backArtwork": assets["adafruit-module-3315"]["backArtwork"],
    "provenance": assets["adafruit-module-3315"]["provenance"],
    "internalConnections": [
      [
        "ms2-1",
        "ms2-1-",
        "tp4-p-1"
      ],
      [
        "ms2-2",
        "ms2-2-",
        "tp5-p-1",
        "x2-4",
        "conn1-2"
      ],
      [
        "ms2-3-",
        "ms2-3",
        "tp6-p-1"
      ],
      [
        "ms2-4-",
        "ms2-4",
        "tp7-p-1",
        "x2-mt1",
        "x2-mt2",
        "x2-6",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2"
      ],
      [
        "ms2-5-",
        "ms2-5",
        "tp8-p-1"
      ],
      [
        "ms2-6-",
        "ms2-6",
        "tp9-p-1"
      ],
      [
        "ms2-7-",
        "ms2-7",
        "tp11-p-1"
      ],
      [
        "ms2-8-",
        "ms2-8",
        "tp12-p-1"
      ],
      [
        "ms2-9-",
        "ms2-9",
        "tp13-p-1"
      ],
      [
        "ms2-10-",
        "ms2-10",
        "tp14-p-1"
      ],
      [
        "ms2-11-",
        "ms2-11",
        "tp15-p-1",
        "x2-5"
      ],
      [
        "ms2-12-",
        "ms2-12",
        "tp16-p-1",
        "x2-3"
      ],
      [
        "ms2-13-",
        "ms2-13",
        "tp17-p-1",
        "x2-7"
      ],
      [
        "ms2-14-",
        "ms2-14",
        "tp18-p-1"
      ],
      [
        "ms2-15-",
        "ms2-15",
        "tp19-p-1"
      ],
      [
        "ms2-16-",
        "ms2-16",
        "tp20-p-1"
      ],
      [
        "ms2-28-",
        "ms2-28",
        "tp21-p-1"
      ],
      [
        "ms2-27-",
        "ms2-27",
        "tp10-p-1"
      ],
      [
        "ms2-26",
        "ms2-26-",
        "tp22-p-1"
      ],
      [
        "ms2-25",
        "ms2-25-",
        "tp23-p-1"
      ],
      [
        "ms2-24",
        "ms2-24-",
        "tp24-p-1"
      ],
      [
        "ms2-23",
        "ms2-23-",
        "tp25-p-1"
      ],
      [
        "ms2-22",
        "ms2-22-"
      ],
      [
        "ms2-21",
        "ms2-21-"
      ],
      [
        "ms2-20",
        "ms2-20-"
      ],
      [
        "ms2-19",
        "ms2-19-"
      ],
      [
        "ms2-18",
        "ms2-18-",
        "tp26-p-1",
        "conn1-4"
      ],
      [
        "ms2-17",
        "ms2-17-",
        "tp27-p-1",
        "conn1-3"
      ],
      [
        "tp3-p-1",
        "x2-cd1",
        "x2-cd2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3315"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-FeatherWing-PCB/blob/7db81bbb064e1e703423beb6f8e4dbf9b7272879/Adafruit%202.4in%20TFT%20FeatherWing%20V2.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-FeatherWing-PCB/blob/7db81bbb064e1e703423beb6f8e4dbf9b7272879/Adafruit%202.4in%20TFT%20FeatherWing%20V2.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-FeatherWing-PCB/blob/7db81bbb064e1e703423beb6f8e4dbf9b7272879/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3315",
      "status": "Official Adafruit stock feed reported 28 available.",
      "sku": "ADA3315",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "28"
    },
    "description": "Adafruit ADA3315. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3651",
    "sku": "ADA3651",
    "name": "Adafruit TFT FeatherWing - 3.5\" 480x320 Touchscreen for Feathers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3651",
    "revision": "EAGLE Adafruit 3.5in 480x320 FeatherWing Rev B.brd; commit 824a68056b2b",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -26.008,
      -42.711999999999996,
      26.126,
      47.334
    ],
    "board": {
      "width": 66.04,
      "height": 85.344,
      "color": "#246545",
      "outline": "M30.48 42.672A2.54 2.54 0 0 0 33.02 40.132A2.54 2.54 0 0 0 30.48 37.592L27.94 37.592L27.94 -37.592L30.48 -37.592A2.54 2.54 0 0 0 33.02 -40.132A2.54 2.54 0 0 0 30.48 -42.672L-30.48 -42.672A2.54 2.54 0 0 0 -33.02 -40.132A2.54 2.54 0 0 0 -30.48 -37.592L-27.94 -37.592L-27.94 37.592L-30.48 37.592A2.54 2.54 0 0 0 -33.02 40.132A2.54 2.54 0 0 0 -30.48 42.672L30.48 42.672Z"
    },
    "contacts": assets["adafruit-module-3651"]["contacts"],
    "holes": [
      {
        "x": -30.48,
        "y": 40.132,
        "drill": 3
      },
      {
        "x": 30.48,
        "y": 40.132,
        "drill": 3
      },
      {
        "x": -30.48,
        "y": -40.132,
        "drill": 3
      },
      {
        "x": 30.48,
        "y": -40.132,
        "drill": 3
      },
      {
        "x": 11.43,
        "y": -24.892,
        "drill": 2
      },
      {
        "x": 11.43,
        "y": 0.508,
        "drill": 2
      },
      {
        "x": -11.43,
        "y": -35.052,
        "drill": 2
      },
      {
        "x": -11.43,
        "y": 0.508,
        "drill": 2
      },
      {
        "x": -11.66,
        "y": 38.862,
        "drill": 1
      },
      {
        "x": -8.66,
        "y": 38.862,
        "drill": 1
      },
      {
        "x": -20.2,
        "y": 40.94,
        "drill": 1
      },
      {
        "x": -17.9,
        "y": 40.94,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-3651"]["artwork"],
    "backArtwork": assets["adafruit-module-3651"]["backArtwork"],
    "provenance": assets["adafruit-module-3651"]["provenance"],
    "internalConnections": [
      [
        "ms2-1",
        "ms2-1-",
        "tp4-p-1"
      ],
      [
        "ms2-2",
        "ms2-2-",
        "tp5-p-1",
        "x3-4",
        "conn1-2"
      ],
      [
        "ms2-3-",
        "ms2-3",
        "tp6-p-1"
      ],
      [
        "ms2-4-",
        "ms2-4",
        "tp7-p-1",
        "x3-mt1",
        "x3-mt2",
        "x3-6",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2"
      ],
      [
        "ms2-5-",
        "ms2-5",
        "tp8-p-1"
      ],
      [
        "ms2-6-",
        "ms2-6",
        "tp9-p-1"
      ],
      [
        "ms2-7-",
        "ms2-7",
        "tp11-p-1"
      ],
      [
        "ms2-8-",
        "ms2-8",
        "tp12-p-1"
      ],
      [
        "ms2-9-",
        "ms2-9",
        "tp13-p-1"
      ],
      [
        "ms2-10-",
        "ms2-10",
        "tp14-p-1"
      ],
      [
        "ms2-11-",
        "ms2-11",
        "tp15-p-1",
        "x3-5"
      ],
      [
        "ms2-12-",
        "ms2-12",
        "tp16-p-1",
        "x3-3"
      ],
      [
        "ms2-13-",
        "ms2-13",
        "tp17-p-1",
        "x3-7"
      ],
      [
        "ms2-14-",
        "ms2-14",
        "tp18-p-1"
      ],
      [
        "ms2-15-",
        "ms2-15",
        "tp19-p-1"
      ],
      [
        "ms2-16-",
        "ms2-16",
        "tp20-p-1"
      ],
      [
        "ms2-28-",
        "ms2-28",
        "tp21-p-1"
      ],
      [
        "ms2-27-",
        "ms2-27",
        "tp10-p-1"
      ],
      [
        "ms2-26",
        "ms2-26-",
        "tp22-p-1"
      ],
      [
        "ms2-25",
        "ms2-25-",
        "tp23-p-1"
      ],
      [
        "ms2-24",
        "ms2-24-",
        "tp24-p-1"
      ],
      [
        "ms2-23",
        "ms2-23-",
        "tp25-p-1"
      ],
      [
        "ms2-22",
        "ms2-22-"
      ],
      [
        "ms2-21",
        "ms2-21-"
      ],
      [
        "ms2-20",
        "ms2-20-"
      ],
      [
        "ms2-19",
        "ms2-19-"
      ],
      [
        "ms2-18",
        "ms2-18-",
        "tp26-p-1",
        "conn1-4"
      ],
      [
        "ms2-17",
        "ms2-17-",
        "tp27-p-1",
        "conn1-3"
      ],
      [
        "x3-cd1",
        "x3-cd2",
        "tp2-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3651"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-3.5in-TFT-Featherwing-PCB/blob/824a68056b2b102a71621405b9bd683ddf38796b/Adafruit%203.5in%20480x320%20FeatherWing%20Rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-3.5in-TFT-Featherwing-PCB/blob/824a68056b2b102a71621405b9bd683ddf38796b/Adafruit%203.5in%20480x320%20FeatherWing%20Rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-3.5in-TFT-Featherwing-PCB/blob/824a68056b2b102a71621405b9bd683ddf38796b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3651",
      "status": "Official Adafruit stock feed reported 33 available.",
      "sku": "ADA3651",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "33"
    },
    "description": "Adafruit ADA3651. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4567",
    "sku": "ADA4567",
    "name": "Adafruit 2.23\" Monochrome OLED Bonnet for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4567",
    "revision": "EAGLE Adafruit 2.23-inch Monochrome OLED Bonnet.brd; commit 63ee954e2c78",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 65,
      "height": 30.6604,
      "color": "#246545",
      "outline": "M-32.5 12.3302A3.0 3.0 0 0 0 -29.5 15.3302L29.5 15.3302A3.0 3.0 0 0 0 32.5 12.3302L32.5 -12.3302A3.0 3.0 0 0 0 29.5 -15.3302L-29.5 -15.3302A3.0 3.0 0 0 0 -32.5 -12.3302L-32.5 12.3302Z"
    },
    "contacts": assets["adafruit-module-4567"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 11.8302,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.8302,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-4567"]["artwork"],
    "backArtwork": assets["adafruit-module-4567"]["backArtwork"],
    "backArtworkBounds": [
      -22.9654,
      -2.8708,
      20.5601,
      14.2812
    ],
    "provenance": assets["adafruit-module-4567"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17",
        "conn1-2"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "rpi1-3",
        "conn1-3"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39",
        "conn1-1"
      ],
      [
        "rpi1-5",
        "conn1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4567"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-2.23-inch-Monochrome-OLED-Bonnet-PCB/blob/63ee954e2c78665d69f9f5e730198dd6479f95b5/Adafruit%202.23-inch%20Monochrome%20OLED%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-2.23-inch-Monochrome-OLED-Bonnet-PCB/blob/63ee954e2c78665d69f9f5e730198dd6479f95b5/Adafruit%202.23-inch%20Monochrome%20OLED%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-2.23-inch-Monochrome-OLED-Bonnet-PCB/blob/63ee954e2c78665d69f9f5e730198dd6479f95b5/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4567",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4567",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4567. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5778",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA5778: EAGLE Adafruit MatrixPortal S3.brd; commit 1ff841b511d7 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-MatrixPortal-S3-PCB/blob/1ff841b511d7dc153ae8d4c0b148d33cb3b2ba85/Adafruit%20MatrixPortal%20S3.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}],
        "boardSha256": "985aaa4bcc94beb3f8f85c4298989ec8e2036bc032c2509ee4ff19c8fbfa46e7"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -31.75, "y": -22.225, "width": 63.5, "height": 44.45},
        {"x": -32.372, "y": 0.183, "width": 3.4, "height": 7.0},
        {"x": -32.245, "y": -9.596, "width": 3.4, "height": 7.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5778",
    "name": "Adafruit Matrix Portal S3 CircuitPython Powered Internet Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5778",
    "revision": "EAGLE Adafruit MatrixPortal S3.brd; commit 1ff841b511d7",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 63.5,
      "height": 44.45,
      "color": "#246545",
      "outline": "M31.75 19.685A2.54 2.54 0 0 1 29.21 22.225L-29.21 22.225A2.54 2.54 0 0 1 -31.75 19.685L-31.75 -13.335L-30.861 -14.224L-30.861 -17.399L-31.75 -18.288L-31.75 -19.685A2.54 2.54 0 0 1 -29.21 -22.225L29.21 -22.225A2.54 2.54 0 0 1 31.75 -19.685L31.75 19.685Z"
    },
    "contacts": assets["adafruit-module-5778"]["contacts"],
    "holes": [
      {
        "x": -25.47,
        "y": 16.86,
        "drill": 0.65
      },
      {
        "x": -25.47,
        "y": 11.08,
        "drill": 0.65
      },
      {
        "x": -29.637,
        "y": -17.025,
        "drill": 1
      },
      {
        "x": -29.637,
        "y": -14.725,
        "drill": 1
      },
      {
        "x": -30.145,
        "y": -7.246,
        "drill": 1
      },
      {
        "x": -30.145,
        "y": -4.946,
        "drill": 1
      },
      {
        "x": -30.272,
        "y": 2.533,
        "drill": 1
      },
      {
        "x": -30.272,
        "y": 4.833,
        "drill": 1
      },
      {
        "x": -24.13,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": -24.13,
        "y": -13.335,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": -13.335,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5778"]["artwork"],
    "backArtwork": assets["adafruit-module-5778"]["backArtwork"],
    "artworkBounds": [
      -32.412,
      -21.938,
      30.04,
      21.8835
    ],
    "backArtworkBounds": [
      20.76,
      -16.74,
      30.04,
      16.74
    ],
    "provenance": assets["adafruit-module-5778"]["provenance"],
    "internalConnections": [
      [
        "x5-a1b12",
        "x5-b1a12",
        "tp2-p-1",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "sense-1",
        "sense-nc1",
        "sense-nc2",
        "jp1-1",
        "jp2-4",
        "jp3-5"
      ],
      [
        "x5-a4b9",
        "x5-b4a9",
        "tp1-p-1"
      ],
      [
        "x5-b7",
        "x5-a7"
      ],
      [
        "x5-a6",
        "x5-b6"
      ],
      [
        "conn1-2",
        "jp1-2"
      ],
      [
        "jp2-1",
        "jp3-4"
      ],
      [
        "jp2-2",
        "jp3-3"
      ],
      [
        "jp2-3",
        "jp3-6"
      ],
      [
        "jp2-5",
        "jp3-8"
      ],
      [
        "jp2-6",
        "jp3-7"
      ],
      [
        "jp2-7",
        "jp3-10"
      ],
      [
        "jp2-8",
        "jp3-9"
      ],
      [
        "jp2-9",
        "jp3-12"
      ],
      [
        "jp2-10",
        "jp3-11"
      ],
      [
        "jp2-11",
        "jp3-14"
      ],
      [
        "jp2-12",
        "jp3-13"
      ],
      [
        "jp2-13",
        "jp3-16"
      ],
      [
        "jp2-14",
        "jp3-15"
      ],
      [
        "jp2-15",
        "jp3-18"
      ],
      [
        "jp2-16",
        "jp3-17"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5778"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MatrixPortal-S3-PCB/blob/1ff841b511d7dc153ae8d4c0b148d33cb3b2ba85/Adafruit%20MatrixPortal%20S3.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MatrixPortal-S3-PCB/blob/1ff841b511d7dc153ae8d4c0b148d33cb3b2ba85/Adafruit%20MatrixPortal%20S3.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MatrixPortal-S3-PCB/blob/1ff841b511d7dc153ae8d4c0b148d33cb3b2ba85/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5778",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5778",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5778. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3531",
    "sku": "ADA3531",
    "name": "Adafruit 128x64 OLED Bonnet for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3531",
    "revision": "EAGLE Adafruit 128x64 OLED Bonnet.brd; commit 5cabac70d709",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 65,
      "height": 30.6604,
      "color": "#246545",
      "outline": "M-32.5 12.3302A3.0 3.0 0 0 0 -29.5 15.3302L29.5 15.3302A3.0 3.0 0 0 0 32.5 12.3302L32.5 -12.3302A3.0 3.0 0 0 0 29.5 -15.3302L-29.5 -15.3302A3.0 3.0 0 0 0 -32.5 -12.3302L-32.5 12.3302Z"
    },
    "contacts": assets["adafruit-module-3531"]["contacts"],
    "holes": [
      {
        "x": -8.0134,
        "y": 11.9062,
        "drill": 0.4
      },
      {
        "x": 7.9866,
        "y": 11.9062,
        "drill": 0.4
      },
      {
        "x": -29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.8302,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": 11.8302,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-3531"]["artwork"],
    "backArtwork": assets["adafruit-module-3531"]["backArtwork"],
    "artworkBounds": [
      -31.7014,
      -8.083799999999998,
      31.6016,
      14.9962
    ],
    "provenance": assets["adafruit-module-3531"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17",
        "rpi1-s1",
        "rpi1-s17"
      ],
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-s2",
        "rpi1-s4"
      ],
      [
        "rpi1-3",
        "rpi1-s3"
      ],
      [
        "rpi1-5",
        "rpi1-s5"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39",
        "rpi1-s6",
        "rpi1-s9",
        "rpi1-s14",
        "rpi1-s20",
        "rpi1-s25",
        "rpi1-s30",
        "rpi1-s34",
        "rpi1-s39"
      ],
      [
        "rpi1-7",
        "rpi1-s7"
      ],
      [
        "rpi1-11",
        "rpi1-s11"
      ],
      [
        "rpi1-13",
        "rpi1-s13"
      ],
      [
        "rpi1-15",
        "rpi1-s15"
      ],
      [
        "rpi1-16",
        "rpi1-s16"
      ],
      [
        "rpi1-29",
        "rpi1-s29"
      ],
      [
        "rpi1-31",
        "rpi1-s31"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3531"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-128x64-OLED-Bonnet-for-Raspberry-Pi-PCB/blob/5cabac70d709c34fb8477e2eca90dc6429af0151/Adafruit%20128x64%20OLED%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-128x64-OLED-Bonnet-for-Raspberry-Pi-PCB/blob/5cabac70d709c34fb8477e2eca90dc6429af0151/Adafruit%20128x64%20OLED%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-128x64-OLED-Bonnet-for-Raspberry-Pi-PCB/blob/5cabac70d709c34fb8477e2eca90dc6429af0151/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3531",
      "status": "Official Adafruit stock feed reported 42 available.",
      "sku": "ADA3531",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "42"
    },
    "description": "Adafruit ADA3531. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4506",
    "sku": "ADA4506",
    "name": "Adafruit 1.3\" Color TFT Bonnet for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4506",
    "revision": "EAGLE Adafruit 1.3in Color TFT Bonnet.brd; commit 3db1dae4f805",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 65,
      "height": 30.6604,
      "color": "#246545",
      "outline": "M-32.5 12.3302A3.0 3.0 0 0 0 -29.5 15.3302L29.5 15.3302A3.0 3.0 0 0 0 32.5 12.3302L32.5 -12.3302A3.0 3.0 0 0 0 29.5 -15.3302L-29.5 -15.3302A3.0 3.0 0 0 0 -32.5 -12.3302L-32.5 12.3302Z"
    },
    "contacts": assets["adafruit-module-4506"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 11.8302,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.8302,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-4506"]["artwork"],
    "backArtwork": assets["adafruit-module-4506"]["backArtwork"],
    "artworkBounds": [
      -31.7014,
      -6.7062,
      31.6016,
      9.3992
    ],
    "backArtworkBounds": [
      -24.362399999999997,
      -5.3522,
      13.2856,
      14.9162
    ],
    "provenance": assets["adafruit-module-4506"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17",
        "conn1-2"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "rpi1-3",
        "conn1-3"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39",
        "conn1-1"
      ],
      [
        "rpi1-5",
        "conn1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4506"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.3in-Color-TFT-Bonnet-PCB/blob/3db1dae4f805b3572137c3a93e8ae65b40875546/Adafruit%201.3in%20Color%20TFT%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.3in-Color-TFT-Bonnet-PCB/blob/3db1dae4f805b3572137c3a93e8ae65b40875546/Adafruit%201.3in%20Color%20TFT%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.3in-Color-TFT-Bonnet-PCB/blob/3db1dae4f805b3572137c3a93e8ae65b40875546/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4506",
      "status": "Official Adafruit stock feed reported 60 available.",
      "sku": "ADA4506",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "60"
    },
    "description": "Adafruit ADA4506. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5957",
    "sku": "ADA5957",
    "name": "Adafruit DVI Sock for Pico - Works with HDMI Displays",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5957",
    "revision": "EAGLE Adafruit DVI Sock for Pico.brd; commit f9e5a5557654",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 27.94,
      "height": 22.86,
      "color": "#246545",
      "outline": "M11.43 -11.43A2.54 2.54 0 0 1 13.97 -8.89L13.97 8.89A2.54 2.54 0 0 1 11.43 11.43L-13.97 11.43L-13.97 -11.43L11.43 -11.43Z"
    },
    "contacts": assets["adafruit-module-5957"]["contacts"],
    "holes": [
      {
        "x": 1.905,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 1.905,
        "y": -8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5957"]["artwork"],
    "backArtwork": assets["adafruit-module-5957"]["backArtwork"],
    "artworkBounds": [
      0.719,
      -7.29,
      15.684,
      7.29
    ],
    "provenance": assets["adafruit-module-5957"]["provenance"],
    "internalConnections": [
      [
        "x2-p-1",
        "x2-p-2",
        "x2-p-3",
        "x2-p-4",
        "x2-2",
        "x2-5",
        "x2-8",
        "x2-11",
        "x2-17",
        "jp2-3",
        "jp3-3",
        "jp5-3",
        "tp3-p-1",
        "tp10-p-1"
      ],
      [
        "x2-13",
        "jp4-1"
      ],
      [
        "x2-14",
        "jp5-1"
      ],
      [
        "x2-18",
        "jp5-2"
      ],
      [
        "x2-19",
        "jp4-2"
      ],
      [
        "jp2-1",
        "tp1-p-1"
      ],
      [
        "jp2-2",
        "tp2-p-1"
      ],
      [
        "jp2-4",
        "tp4-p-1"
      ],
      [
        "jp2-5",
        "tp5-p-1"
      ],
      [
        "jp3-1",
        "tp9-p-1"
      ],
      [
        "jp3-2",
        "tp8-p-1"
      ],
      [
        "jp3-4",
        "tp7-p-1"
      ],
      [
        "jp3-5",
        "tp6-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5957"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DVI-Sock-for-Pico-PCB/blob/f9e5a5557654b1b3d8d63e5405fc23394c13cd19/Adafruit%20DVI%20Sock%20for%20Pico.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DVI-Sock-for-Pico-PCB/blob/f9e5a5557654b1b3d8d63e5405fc23394c13cd19/Adafruit%20DVI%20Sock%20for%20Pico.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DVI-Sock-for-Pico-PCB/blob/f9e5a5557654b1b3d8d63e5405fc23394c13cd19/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5957",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5957",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5957. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3305",
    "sku": "ADA3305",
    "name": "Adafruit TFT 50pin to 40pin + AR1100 Touchscreen Adapter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3305",
    "revision": "EAGLE Adafruit 50pin to 40pin TFT with AR1100 Adapter.brd; commit 0c0c72915d3f",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 48.26,
      "height": 22.86,
      "color": "#246545",
      "outline": "M21.59 11.43A2.54 2.54 0 0 0 24.13 8.89L24.13 -8.89A2.54 2.54 0 0 0 21.59 -11.43L-21.59 -11.43A2.54 2.54 0 0 0 -24.13 -8.89L-24.13 8.89A2.54 2.54 0 0 0 -21.59 11.43L21.59 11.43Z"
    },
    "contacts": assets["adafruit-module-3305"]["contacts"],
    "holes": [
      {
        "x": -18.35,
        "y": -2.27,
        "drill": 1
      },
      {
        "x": -18.35,
        "y": 2.13,
        "drill": 1
      },
      {
        "x": 21.59,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 21.59,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -21.59,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -21.59,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3305"]["artwork"],
    "backArtwork": assets["adafruit-module-3305"]["backArtwork"],
    "artworkBounds": [
      -23.99,
      -11.62,
      23.1426,
      11.43
    ],
    "provenance": assets["adafruit-module-3305"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-3",
        "j2-4"
      ],
      [
        "j1-2",
        "j2-1",
        "j2-2"
      ],
      [
        "j1-3",
        "j1-29",
        "j1-36",
        "j2-5",
        "j2-36",
        "j2-38",
        "j2-48",
        "x1-gnd2",
        "x1-gnd",
        "x1-gnd1",
        "x1-gnd3",
        "x1-gnd4"
      ],
      [
        "j1-4",
        "j1-31",
        "j2-7"
      ],
      [
        "j1-5",
        "j2-12"
      ],
      [
        "j1-6",
        "j2-13"
      ],
      [
        "j1-7",
        "j2-14"
      ],
      [
        "j1-8",
        "j2-15"
      ],
      [
        "j1-9",
        "j2-16"
      ],
      [
        "j1-10",
        "j2-17"
      ],
      [
        "j1-11",
        "j2-18"
      ],
      [
        "j1-12",
        "j2-19"
      ],
      [
        "j1-13",
        "j2-20"
      ],
      [
        "j1-14",
        "j2-21"
      ],
      [
        "j1-15",
        "j2-22"
      ],
      [
        "j1-16",
        "j2-23"
      ],
      [
        "j1-17",
        "j2-24"
      ],
      [
        "j1-18",
        "j2-25"
      ],
      [
        "j1-19",
        "j2-26"
      ],
      [
        "j1-20",
        "j2-27"
      ],
      [
        "j1-21",
        "j2-28"
      ],
      [
        "j1-22",
        "j2-29"
      ],
      [
        "j1-23",
        "j2-30"
      ],
      [
        "j1-24",
        "j2-31"
      ],
      [
        "j1-25",
        "j2-32"
      ],
      [
        "j1-26",
        "j2-33"
      ],
      [
        "j1-27",
        "j2-34"
      ],
      [
        "j1-28",
        "j2-35"
      ],
      [
        "j1-30",
        "j2-37"
      ],
      [
        "j1-32",
        "j2-11"
      ],
      [
        "j1-33",
        "j2-10"
      ],
      [
        "j1-34",
        "j2-9"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3305"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-50pin-to-40pin-TFT-with-AR1100-Adapter-PCB/blob/0c0c72915d3f1a48031f893c11a9e7c903f5cbf9/Adafruit%2050pin%20to%2040pin%20TFT%20with%20AR1100%20Adapter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-50pin-to-40pin-TFT-with-AR1100-Adapter-PCB/blob/0c0c72915d3f1a48031f893c11a9e7c903f5cbf9/Adafruit%2050pin%20to%2040pin%20TFT%20with%20AR1100%20Adapter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-50pin-to-40pin-TFT-with-AR1100-Adapter-PCB/blob/0c0c72915d3f1a48031f893c11a9e7c903f5cbf9/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3305",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3305",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3305. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5745",
    "sku": "ADA5745",
    "name": "Adafruit PiCowbell DVI Output for Pico - Works with HDMI Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5745",
    "revision": "EAGLE Adafruit PiCowbell DVI Output for Pico.brd; commit eebbb6a106e7",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 52.07,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-26.035 10.16L-26.035 -10.16L26.035 -10.16L26.035 10.16L-26.035 10.16Z"
    },
    "contacts": assets["adafruit-module-5745"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -4.445,
        "drill": 2.286
      },
      {
        "x": -22.86,
        "y": 4.445,
        "drill": 2.286
      },
      {
        "x": 20.425,
        "y": 3.75,
        "drill": 1
      },
      {
        "x": 20.425,
        "y": -3.75,
        "drill": 1
      },
      {
        "x": -8.509,
        "y": 1.5,
        "drill": 1
      },
      {
        "x": -8.509,
        "y": -1.5,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-5745"]["artwork"],
    "backArtwork": assets["adafruit-module-5745"]["backArtwork"],
    "artworkBounds": [
      -25.621,
      -5.7804,
      26.1766,
      5.7804
    ],
    "backArtworkBounds": [
      -15.026,
      1.992,
      -12.914,
      5.374
    ],
    "provenance": assets["adafruit-module-5745"]["provenance"],
    "internalConnections": [
      [
        "conn1-2",
        "jp3-5",
        "cb1-36"
      ],
      [
        "conn1-3",
        "jp4-6",
        "cb1-6"
      ],
      [
        "conn1-1",
        "jp3-3",
        "jp3-8",
        "jp3-13",
        "jp4-3",
        "jp4-8",
        "jp4-13",
        "x2-1",
        "x2-4",
        "x2-7",
        "x2-10",
        "x2-13",
        "x2-mnt3",
        "x2-mnt2",
        "x2-mnt4",
        "x2-mnt1",
        "cb1-3",
        "cb1-8",
        "cb1-13",
        "cb1-18",
        "cb1-23",
        "cb1-28",
        "cb1-33",
        "cb1-38"
      ],
      [
        "conn1-4",
        "jp4-7",
        "cb1-7"
      ],
      [
        "jp3-1",
        "cb1-40"
      ],
      [
        "jp3-2",
        "x2-18",
        "cb1-39"
      ],
      [
        "jp3-4",
        "cb1-37"
      ],
      [
        "jp3-6",
        "cb1-35"
      ],
      [
        "jp3-7",
        "cb1-34"
      ],
      [
        "jp3-9",
        "cb1-32"
      ],
      [
        "jp3-10",
        "cb1-31"
      ],
      [
        "jp3-11",
        "cb1-30"
      ],
      [
        "jp3-12",
        "cb1-29"
      ],
      [
        "jp3-14",
        "cb1-27"
      ],
      [
        "jp3-15",
        "cb1-26"
      ],
      [
        "jp3-16",
        "cb1-25"
      ],
      [
        "jp3-17",
        "cb1-24"
      ],
      [
        "jp4-1",
        "cb1-1"
      ],
      [
        "jp4-2",
        "cb1-2"
      ],
      [
        "jp4-4",
        "cb1-4"
      ],
      [
        "jp4-5",
        "cb1-5"
      ],
      [
        "jp4-9",
        "cb1-9"
      ],
      [
        "jp4-10",
        "cb1-10"
      ],
      [
        "jp4-11",
        "cb1-11"
      ],
      [
        "jp4-12",
        "cb1-12"
      ],
      [
        "jp4-14",
        "cb1-14"
      ],
      [
        "jp4-15",
        "cb1-15"
      ],
      [
        "jp4-16",
        "cb1-16"
      ],
      [
        "jp4-17",
        "cb1-17"
      ],
      [
        "x2-14",
        "jp1-3"
      ],
      [
        "x2-17",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5745"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-DVI-Output/blob/eebbb6a106e7084c95cee9f53a9a498f4e444766/Adafruit%20PiCowbell%20DVI%20Output%20for%20Pico.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-DVI-Output/blob/eebbb6a106e7084c95cee9f53a9a498f4e444766/Adafruit%20PiCowbell%20DVI%20Output%20for%20Pico.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-DVI-Output/blob/eebbb6a106e7084c95cee9f53a9a498f4e444766/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5745",
      "status": "Official Adafruit stock feed reported 73 available.",
      "sku": "ADA5745",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "73"
    },
    "description": "Adafruit ADA5745. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
