import assets from "./displays-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-661",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8"],
      "source": {"label": "Adafruit ADA661: EAGLE Adafruit OLED 128x32 Mono.brd; commit 7c33372ae12d header geometry", "url": "https://github.com/adafruit/Adafruit-128x32-SPI-OLED-breakout-board-PCB/blob/7c33372ae12d8cadd9ccd868c4f30274e61ac87d/Adafruit%20OLED%20128x32%20Mono.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08_ROUND_76"}],
        "boardSha256": "376ffbbb9b74471aec1fa8c0243d334c9ada4fdbdf8dc2ab4514d00153686a0b"
      },
      "bodyRegions": [
        {"x": -16.0, "y": -11.5, "width": 32, "height": 23}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA661",
    "name": "Monochrome 128x32 SPI OLED graphic display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/661",
    "revision": "EAGLE Adafruit OLED 128x32 Mono.brd; commit 7c33372ae12d",
    "category": "Indicators",
    "board": {
      "width": 32,
      "height": 23,
      "color": "#246545",
      "outline": "M-16.0 -8.5A2.9998 2.9998 0 0 1 -13.0 -11.5L13.0 -11.5A2.9997 2.9997 0 0 1 16.0 -8.5L16.0 8.5A3.0001 3.0001 0 0 1 13.0 11.5L-13.0 11.5A3.0001 3.0001 0 0 1 -16.0 8.5L-16.0 -8.5Z"
    },
    "contacts": assets["adafruit-module-661"]["contacts"],
    "holes": [
      {
        "x": 12.08,
        "y": -4.555,
        "drill": 0.8
      },
      {
        "x": 12.08,
        "y": 4.695,
        "drill": 0.8
      },
      {
        "x": -13,
        "y": 8.5,
        "drill": 2
      },
      {
        "x": -13,
        "y": -8.58,
        "drill": 2
      },
      {
        "x": 12.84,
        "y": 8.5,
        "drill": 2
      },
      {
        "x": 12.84,
        "y": -8.58,
        "drill": 2
      }
    ],
    "artwork": assets["adafruit-module-661"]["artwork"],
    "backArtwork": assets["adafruit-module-661"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-661"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/661"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-128x32-SPI-OLED-breakout-board-PCB/blob/7c33372ae12d8cadd9ccd868c4f30274e61ac87d/Adafruit%20OLED%20128x32%20Mono.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-128x32-SPI-OLED-breakout-board-PCB/blob/7c33372ae12d8cadd9ccd868c4f30274e61ac87d/Adafruit%20OLED%20128x32%20Mono.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-128x32-SPI-OLED-breakout-board-PCB/blob/7c33372ae12d8cadd9ccd868c4f30274e61ac87d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/661",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA661",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA661. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.559999999999999,
      -5.545,
      14.52,
      5.86
    ],
    "backArtworkBounds": [
      -10.828,
      -10.659999999999998,
      6.784,
      5.11
    ]
  },
  {
    "id": "adafruit-module-5206",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA5206: EAGLE Adafruit 1.69in 280x240 Round Rectangle TFT.brd; commit f47687311833 header geometry", "url": "https://github.com/adafruit/Adafruit-1.69in-280x240-Round-Rectangle-TFT-PCB/blob/f4768731183344c8bbe1453f15ff3c655001d592/Adafruit%201.69in%20280x240%20Round%20Rectangle%20TFT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "f22ea4d0034170f637032acf87325e7408a22b1048ec16418e941fc99fe0014e"
      },
      "bodyRegions": [
        {"x": -18.415, "y": -22.86, "width": 36.83, "height": 45.72},
        {"x": -22.251, "y": -6.35, "width": 20.56, "height": 14.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5206",
    "name": "Adafruit 1.69\" 280x240 Round Rectangle Color IPS TFT Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5206",
    "revision": "EAGLE Adafruit 1.69in 280x240 Round Rectangle TFT.brd; commit f47687311833",
    "category": "Indicators",
    "board": {
      "width": 36.83,
      "height": 45.72,
      "color": "#246545",
      "outline": "M-18.415 20.32A2.54 2.54 0 0 0 -15.875 22.86L15.875 22.86A2.54 2.54 0 0 0 18.415 20.32L18.415 -20.32A2.54 2.54 0 0 0 15.875 -22.86L-15.875 -22.86A2.54 2.54 0 0 0 -18.415 -20.32L-18.415 20.32Z"
    },
    "contacts": assets["adafruit-module-5206"]["contacts"],
    "holes": [
      {
        "x": -5,
        "y": -13,
        "drill": 1
      },
      {
        "x": 5,
        "y": -13,
        "drill": 1
      },
      {
        "x": 15.875,
        "y": -20.32,
        "drill": 2.5
      },
      {
        "x": -15.875,
        "y": -20.32,
        "drill": 2.5
      },
      {
        "x": 15.875,
        "y": 18.415,
        "drill": 2.5
      },
      {
        "x": -15.875,
        "y": 18.415,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5206"]["artwork"],
    "backArtwork": assets["adafruit-module-5206"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5206"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-1"
      ],
      [
        "jp1-3",
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
        "url": "https://www.adafruit.com/product/5206"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.69in-280x240-Round-Rectangle-TFT-PCB/blob/f4768731183344c8bbe1453f15ff3c655001d592/Adafruit%201.69in%20280x240%20Round%20Rectangle%20TFT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.69in-280x240-Round-Rectangle-TFT-PCB/blob/f4768731183344c8bbe1453f15ff3c655001d592/Adafruit%201.69in%20280x240%20Round%20Rectangle%20TFT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.69in-280x240-Round-Rectangle-TFT-PCB/blob/f4768731183344c8bbe1453f15ff3c655001d592/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5206",
      "status": "Official Adafruit stock feed reported 40 available.",
      "sku": "ADA5206",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "40"
    },
    "description": "Adafruit ADA5206. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -22.291,
      -22.003,
      12.153,
      16.067
    ],
    "backArtworkBounds": [
      -15.04,
      -19.74,
      15.04,
      17.84
    ]
  },
  {
    "id": "adafruit-module-5394",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA5394: EAGLE Adafruit 1.9in 320x170 Color IPS TFT.brd; commit 55df02725e80 header geometry", "url": "https://github.com/adafruit/Adafruit-1.9in-320x170-Color-IPS-TFT-PCB/blob/55df02725e803b00706c48715883efdbe4aceb1c/Adafruit%201.9in%20320x170%20Color%20IPS%20TFT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "3ea3e824bd9deef75c4919d8c556bb69276903702fb845b39915ae7ee4354c53"
      },
      "bodyRegions": [
        {"x": -28.575, "y": -18.415, "width": 57.15, "height": 36.83}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5394",
    "name": "Adafruit 1.9\" 320x170 Color IPS TFT Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5394",
    "revision": "EAGLE Adafruit 1.9in 320x170 Color IPS TFT.brd; commit 55df02725e80",
    "category": "Indicators",
    "board": {
      "width": 57.15,
      "height": 36.83,
      "color": "#246545",
      "outline": "M26.035 -18.415A2.54 2.54 0 0 0 23.495 -15.875L23.495 -13.335L-23.495 -13.335L-23.495 -15.875A2.54 2.54 0 0 0 -26.035 -18.415A2.54 2.54 0 0 0 -28.575 -15.875L-28.575 15.875A2.54 2.54 0 0 0 -26.035 18.415A2.54 2.54 0 0 0 -23.495 15.875L-23.495 13.335L23.495 13.335L23.495 15.875A2.54 2.54 0 0 0 26.035 18.415A2.54 2.54 0 0 0 28.575 15.875L28.575 -15.875A2.54 2.54 0 0 0 26.035 -18.415Z"
    },
    "contacts": assets["adafruit-module-5394"]["contacts"],
    "holes": [
      {
        "x": 26.035,
        "y": 15.875,
        "drill": 2.5
      },
      {
        "x": 26.035,
        "y": -15.875,
        "drill": 2.5
      },
      {
        "x": -26.035,
        "y": 15.875,
        "drill": 2.5
      },
      {
        "x": -26.035,
        "y": -15.875,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5394"]["artwork"],
    "backArtwork": assets["adafruit-module-5394"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5394"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-1"
      ],
      [
        "jp1-3",
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
        "url": "https://www.adafruit.com/product/5394"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.9in-320x170-Color-IPS-TFT-PCB/blob/55df02725e803b00706c48715883efdbe4aceb1c/Adafruit%201.9in%20320x170%20Color%20IPS%20TFT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.9in-320x170-Color-IPS-TFT-PCB/blob/55df02725e803b00706c48715883efdbe4aceb1c/Adafruit%201.9in%20320x170%20Color%20IPS%20TFT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.9in-320x170-Color-IPS-TFT-PCB/blob/55df02725e803b00706c48715883efdbe4aceb1c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5394",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5394",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5394. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -22.649,
      -12.732,
      28.294,
      17.719
    ]
  },
  {
    "id": "adafruit-module-5393",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA5393: EAGLE Adafruit 1.47in 320x172 Round Rectangle TFT.brd; commit 73022f63a4b8 header geometry", "url": "https://github.com/adafruit/Adafruit-1.47in-320x172-Round-Rectangle-TFT-PCB/blob/73022f63a4b82117093ff5c250c119b6720005df/Adafruit%201.47in%20320x172%20Round%20Rectangle%20TFT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "8a75b7b9df27584a7fb1caeda45feab2f492221b228a342325ee757b619582f2"
      },
      "bodyRegions": [
        {"x": -18.415, "y": -15.24, "width": 36.83, "height": 30.48},
        {"x": 1.691, "y": -7.777, "width": 20.56, "height": 14.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5393",
    "name": "Adafruit 1.47\" 320x172 Round Rectangle Color IPS TFT Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5393",
    "revision": "EAGLE Adafruit 1.47in 320x172 Round Rectangle TFT.brd; commit 73022f63a4b8",
    "category": "Indicators",
    "board": {
      "width": 36.83,
      "height": 30.48,
      "color": "#246545",
      "outline": "M-18.415 12.7A2.54 2.54 0 0 0 -15.875 15.24L15.875 15.24A2.54 2.54 0 0 0 18.415 12.7L18.415 -12.7A2.54 2.54 0 0 0 15.875 -15.24L-15.875 -15.24A2.54 2.54 0 0 0 -18.415 -12.7L-18.415 12.7Z"
    },
    "contacts": assets["adafruit-module-5393"]["contacts"],
    "holes": [
      {
        "x": -11.984,
        "y": 5,
        "drill": 1
      },
      {
        "x": -11.984,
        "y": -5,
        "drill": 1
      },
      {
        "x": 15.875,
        "y": -12.7,
        "drill": 2.5
      },
      {
        "x": -15.875,
        "y": -12.7,
        "drill": 2.5
      },
      {
        "x": 15.875,
        "y": 12.7,
        "drill": 2.5
      },
      {
        "x": -15.875,
        "y": 12.7,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5393"]["artwork"],
    "backArtwork": assets["adafruit-module-5393"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5393"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-1"
      ],
      [
        "jp1-3",
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
        "url": "https://www.adafruit.com/product/5393"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.47in-320x172-Round-Rectangle-TFT-PCB/blob/73022f63a4b82117093ff5c250c119b6720005df/Adafruit%201.47in%20320x172%20Round%20Rectangle%20TFT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.47in-320x172-Round-Rectangle-TFT-PCB/blob/73022f63a4b82117093ff5c250c119b6720005df/Adafruit%201.47in%20320x172%20Round%20Rectangle%20TFT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.47in-320x172-Round-Rectangle-TFT-PCB/blob/73022f63a4b82117093ff5c250c119b6720005df/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5393",
      "status": "Official Adafruit stock feed reported 92 available.",
      "sku": "ADA5393",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "92"
    },
    "description": "Adafruit ADA5393. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.304,
      -8.332999999999998,
      22.291,
      9.59
    ],
    "backArtworkBounds": [
      -18.124,
      -9.739999999999998,
      18.256,
      9.74
    ]
  },
  {
    "id": "adafruit-module-3527",
    "sku": "ADA3527",
    "name": "Adafruit PiOLED - 128x32 Monochrome OLED Add-on for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3527",
    "revision": "EAGLE Adafruit 128x32 Pi OLED.brd; commit 41f958463af9",
    "category": "Indicators",
    "board": {
      "width": 20.066,
      "height": 34.5186,
      "color": "#246545",
      "outline": "M6.731 -17.2593A3.058565 3.058565 0 0 1 10.033 -14.4653L10.033 -2.4257L3.048 -2.4257L3.048 14.7193A2.54 2.54 0 0 1 0.508 17.2593L-7.6708 17.2593A2.387735 2.387735 0 0 1 -10.033 14.8463L-10.033 -17.2593L6.731 -17.2593Z"
    },
    "contacts": assets["adafruit-module-3527"]["contacts"],
    "holes": [
      {
        "x": 6.0452,
        "y": -13.7795,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-3527"]["artwork"],
    "backArtwork": assets["adafruit-module-3527"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3527"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-1-"
      ],
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-2-",
        "rpi1-4-"
      ],
      [
        "rpi1-3",
        "rpi1-3-"
      ],
      [
        "rpi1-5",
        "rpi1-5-"
      ],
      [
        "rpi1-6",
        "rpi1-6-"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3527"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiOLED-128x32-PCB/blob/41f958463af931f5eb51f1135b290f3378779290/Adafruit%20128x32%20Pi%20OLED.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiOLED-128x32-PCB/blob/41f958463af931f5eb51f1135b290f3378779290/Adafruit%20128x32%20Pi%20OLED.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiOLED-128x32-PCB/blob/41f958463af931f5eb51f1135b290f3378779290/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3527",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3527",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3527. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.965,
      -15.0413,
      3.615,
      17.2887
    ],
    "backArtworkBounds": [
      -9.463,
      0.32830000000000004,
      2.605,
      8.7137
    ]
  },
  {
    "id": "adafruit-module-5297",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA5297: EAGLE Adafruit Monochrome 1.12in 128x128 OLED.brd; commit ac65ded15c60 header geometry", "url": "https://github.com/adafruit/Adafruit-1.12in-128x128-OLED-PCB/blob/ac65ded15c60c42bd7fa323c670640263b88f761/Adafruit%20Monochrome%201.12in%20128x128%20OLED.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_76"}],
        "boardSha256": "48e85dd52b41a510614c275ef7638f7a2f35ae1d6fa9f21a2d13053a70e19b9d"
      },
      "bodyRegions": [
        {"x": -15.24, "y": -20.32, "width": 30.48, "height": 40.64}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5297",
    "name": "Adafruit Monochrome 1.12\" 128x128 OLED Graphic Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5297",
    "revision": "EAGLE Adafruit Monochrome 1.12in 128x128 OLED.brd; commit ac65ded15c60",
    "category": "Indicators",
    "board": {
      "width": 30.48,
      "height": 40.64,
      "color": "#246545",
      "outline": "M13.97 20.32A1.27 1.27 0 0 0 15.24 19.05L15.24 -17.78A2.54 2.54 0 0 0 12.7 -20.32L-12.7 -20.32A2.54 2.54 0 0 0 -15.24 -17.78L-15.24 19.05A1.27 1.27 0 0 0 -13.97 20.32L-11.43 20.32A1.27 1.27 0 0 0 -10.16 19.05L-10.16 15.24L10.16 15.24L10.16 19.05A1.27 1.27 0 0 0 11.43 20.32L13.97 20.32Z"
    },
    "contacts": assets["adafruit-module-5297"]["contacts"],
    "holes": [
      {
        "x": 8.65,
        "y": 13.5,
        "drill": 1
      },
      {
        "x": -8.65,
        "y": 13.5,
        "drill": 1
      },
      {
        "x": -12.7,
        "y": -17.78,
        "drill": 3
      },
      {
        "x": 12.7,
        "y": -17.78,
        "drill": 3
      },
      {
        "x": -12.7,
        "y": 17.78,
        "drill": 3
      },
      {
        "x": 12.7,
        "y": 17.78,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-5297"]["artwork"],
    "backArtwork": assets["adafruit-module-5297"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5297"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5297"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.12in-128x128-OLED-PCB/blob/ac65ded15c60c42bd7fa323c670640263b88f761/Adafruit%20Monochrome%201.12in%20128x128%20OLED.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.12in-128x128-OLED-PCB/blob/ac65ded15c60c42bd7fa323c670640263b88f761/Adafruit%20Monochrome%201.12in%20128x128%20OLED.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.12in-128x128-OLED-PCB/blob/ac65ded15c60c42bd7fa323c670640263b88f761/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5297",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5297",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5297. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.825999999999999,
      -13.497,
      14.826,
      6.161
    ],
    "backArtworkBounds": [
      -13.04,
      -15.04,
      13.04,
      17.04
    ]
  },
  {
    "id": "adafruit-module-6178",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA6178: EAGLE Adafruit 1.28 240x240 Round Display.brd; commit 90e7a557ce75 header geometry", "url": "https://github.com/adafruit/Adafruit-1.28-240x240-Round-Display-PCB/blob/90e7a557ce75a56f658b5d05fbf68a91dd4c1c38/Adafruit%201.28%20240x240%20Round%20Display.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND_76"}],
        "boardSha256": "ca383d83af1069d8000a4b87391890ed7b6c53935b3901415ae06f896ac236da"
      },
      "bodyRegions": [
        {"x": -14.4145, "y": -21.082, "width": 28.829, "height": 42.164},
        {"x": -20.4335, "y": -8.813, "width": 20.47, "height": 14.2},
        {"x": 13.564, "y": -0.5715, "width": 1.32, "height": 0.762}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6178",
    "name": "Adafruit 1.28\" 240x240 Round TFT LCD Display with MicroSD",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6178",
    "revision": "EAGLE Adafruit 1.28 240x240 Round Display.brd; commit 90e7a557ce75",
    "category": "Indicators",
    "board": {
      "width": 28.829,
      "height": 42.164,
      "color": "#246545",
      "outline": "M14.4145 7.747A18.001572 18.001572 0 0 0 0.0254 -21.082L-0.0254 -21.082A18.001572 18.001572 0 0 0 -14.4145 7.747L-14.4145 21.082L14.4145 21.082L14.4145 7.747Z"
    },
    "contacts": assets["adafruit-module-6178"]["contacts"],
    "holes": [
      {
        "x": 5,
        "y": 10.452,
        "drill": 1
      },
      {
        "x": -5,
        "y": 10.452,
        "drill": 1
      },
      {
        "x": 11.43,
        "y": 14.732,
        "drill": 2.5
      },
      {
        "x": -11.43,
        "y": 14.732,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6178"]["artwork"],
    "backArtwork": assets["adafruit-module-6178"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6178"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6178"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.28-240x240-Round-Display-PCB/blob/90e7a557ce75a56f658b5d05fbf68a91dd4c1c38/Adafruit%201.28%20240x240%20Round%20Display.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.28-240x240-Round-Display-PCB/blob/90e7a557ce75a56f658b5d05fbf68a91dd4c1c38/Adafruit%201.28%20240x240%20Round%20Display.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.28-240x240-Round-Display-PCB/blob/90e7a557ce75a56f658b5d05fbf68a91dd4c1c38/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6178",
      "status": "Official Adafruit stock feed reported 8 available.",
      "sku": "ADA6178",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "8"
    },
    "description": "Adafruit ADA6178. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -20.473499999999998,
      -18.955,
      14.924,
      8.397
    ],
    "backArtworkBounds": [
      -8.04,
      6.412,
      8.04,
      17.492
    ]
  },
  {
    "id": "adafruit-module-6113",
    "sku": "ADA6113",
    "name": "Adafruit 1.14\" 240x135 Color Newxie TFT Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6113",
    "revision": "EAGLE Adafruit Color Newxie TFT Display.brd; commit 89c8dfd70d3f",
    "category": "Indicators",
    "board": {
      "width": 17.526,
      "height": 41.91,
      "color": "#246545",
      "outline": "M-8.763 -19.685A1.27 1.27 0 0 1 -7.493 -20.955L-5.08 -20.955A1.27 1.27 0 0 1 -3.81 -19.685L-3.81 -15.875L3.81 -15.875L3.81 -19.685A1.27 1.27 0 0 1 5.08 -20.955L7.493 -20.955A1.27 1.27 0 0 1 8.763 -19.685L8.763 20.8915L-8.763 20.955L-8.763 -19.685Z"
    },
    "contacts": assets["adafruit-module-6113"]["contacts"],
    "holes": [
      {
        "x": -8.4455,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -7.747,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -7.0485,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -6.35,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -5.6515,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -4.953,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -4.2545,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 4.2545,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 4.953,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 5.6515,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 6.35,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 7.0485,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 7.747,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": 8.4455,
        "y": -15.9385,
        "drill": 0.4
      },
      {
        "x": -6.35,
        "y": -18.415,
        "drill": 2.5
      },
      {
        "x": 6.35,
        "y": -18.3515,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6113"]["artwork"],
    "backArtwork": assets["adafruit-module-6113"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6113"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "jp2-2"
      ],
      [
        "jp2-3",
        "jp2-4"
      ],
      [
        "jp2-5",
        "jp2-6"
      ],
      [
        "jp2-7",
        "jp2-8"
      ],
      [
        "jp2-9",
        "jp2-10"
      ],
      [
        "jp2-11",
        "jp2-12"
      ],
      [
        "jp2-13",
        "jp2-14"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6113"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Color-Newxie-TFT-Display-PCB/blob/89c8dfd70d3f9e74606d12f3d5d6af7ea6fa8197/Adafruit%20Color%20Newxie%20TFT%20Display.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Color-Newxie-TFT-Display-PCB/blob/89c8dfd70d3f9e74606d12f3d5d6af7ea6fa8197/Adafruit%20Color%20Newxie%20TFT%20Display.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Color-Newxie-TFT-Display-PCB/blob/89c8dfd70d3f9e74606d12f3d5d6af7ea6fa8197/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6113",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6113",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6113. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.5069,
      -9.881499999999999,
      7.304,
      8.6506
    ]
  },
  {
    "id": "adafruit-module-3134",
    "sku": "ADA3134",
    "name": "Adafruit 15x7 CharliePlex LED Matrix Display FeatherWing - Red",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3134",
    "revision": "EAGLE Adafruit CharlieWing.brd; commit b4883693227a",
    "category": "Indicators",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3134"]["contacts"],
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
    "artwork": assets["adafruit-module-3134"]["artwork"],
    "backArtwork": assets["adafruit-module-3134"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3134"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3134"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-7x15-CharliePlex-LED-FeatherWing/blob/b4883693227a02cd6affefb6ecc7a748b8150883/Adafruit%20CharlieWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-7x15-CharliePlex-LED-FeatherWing/blob/b4883693227a02cd6affefb6ecc7a748b8150883/Adafruit%20CharlieWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-7x15-CharliePlex-LED-FeatherWing/blob/b4883693227a02cd6affefb6ecc7a748b8150883/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3134",
      "status": "Official Adafruit stock feed reported 15 available.",
      "sku": "ADA3134",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "15"
    },
    "description": "Adafruit ADA3134. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -22.895,
      -8.691816999999999,
      20.883818,
      8.183818
    ],
    "backArtworkBounds": [
      -22.646,
      1.484,
      -19.264,
      3.596
    ]
  },
  {
    "id": "adafruit-module-1590",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15"],
      "source": {"label": "Adafruit ADA1590: EAGLE Adafruit RA8875 TFT Breakout.brd; commit 64c271bb8118 header geometry", "url": "https://github.com/adafruit/Adafruit-RA8875-Breakout-Board-PCB/blob/64c271bb8118f9f82b9a4161e5b8e0db6398fb2e/Adafruit%20RA8875%20TFT%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 15, "package": "1X15-CB"}],
        "boardSha256": "cf29872c1ce925713c848bf427c3b1608dae98405463aa0d23ce2a0d8de77fe0"
      },
      "bodyRegions": [
        {"x": -24.13, "y": -20.32, "width": 48.26, "height": 40.64}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1590",
    "name": "RA8875 Driver Board for 40-pin TFT Touch Displays - 800x480 Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1590",
    "revision": "EAGLE Adafruit RA8875 TFT Breakout.brd; commit 64c271bb8118",
    "category": "Inputs",
    "board": {
      "width": 48.26,
      "height": 40.64,
      "color": "#246545",
      "outline": "M21.59 -20.32A2.54 2.54 0 0 1 24.13 -17.78L24.13 17.78A2.54 2.54 0 0 1 21.59 20.32L-21.59 20.32A2.54 2.54 0 0 1 -24.13 17.78L-24.13 -17.78A2.54 2.54 0 0 1 -21.59 -20.32L21.59 -20.32Z"
    },
    "contacts": assets["adafruit-module-1590"]["contacts"],
    "holes": [
      {
        "x": -21.59,
        "y": -17.78,
        "drill": 2.5
      },
      {
        "x": 21.59,
        "y": -17.78,
        "drill": 2.5
      },
      {
        "x": 21.59,
        "y": 17.78,
        "drill": 2.5
      },
      {
        "x": -21.59,
        "y": 17.78,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1590"]["artwork"],
    "backArtwork": assets["adafruit-module-1590"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1590"]["provenance"],
    "internalConnections": [
      [
        "j1-3",
        "j1-5",
        "j1-6",
        "j1-7",
        "j1-13",
        "j1-14",
        "j1-21",
        "j1-22",
        "j1-23",
        "j1-29",
        "j1-36",
        "jp1-14"
      ],
      [
        "j1-4",
        "jp1-13"
      ],
      [
        "j1-37",
        "jp1-1"
      ],
      [
        "j1-38",
        "jp1-4"
      ],
      [
        "j1-39",
        "jp1-2"
      ],
      [
        "j1-40",
        "jp1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1590"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RA8875-Breakout-Board-PCB/blob/64c271bb8118f9f82b9a4161e5b8e0db6398fb2e/Adafruit%20RA8875%20TFT%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RA8875-Breakout-Board-PCB/blob/64c271bb8118f9f82b9a4161e5b8e0db6398fb2e/Adafruit%20RA8875%20TFT%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RA8875-Breakout-Board-PCB/blob/64c271bb8118f9f82b9a4161e5b8e0db6398fb2e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1590",
      "status": "Official Adafruit stock feed reported 47 available.",
      "sku": "ADA1590",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "47"
    },
    "description": "Adafruit ADA1590. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -23.346,
      -19.732,
      21.2378,
      12.875
    ]
  },
  {
    "id": "adafruit-module-3533",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA3533: EAGLE Adafruit 0.96in 160x80 TFT Display.brd; commit 7ada397dddd0 header geometry", "url": "https://github.com/adafruit/Adafruit-0.96-160x80-TFT-Display-Breakout-PCB/blob/7ada397dddd065125d27c9d957d58b2a96cdf6d7/Adafruit%200.96in%20160x80%20TFT%20Display.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}],
        "boardSha256": "2d7a0bcf265f73929d3a9a9ace4b8d40c43a0cd5c1f7fae5fc7e6fa2c3a41912"
      },
      "bodyRegions": [
        {"x": -15.875, "y": -13.9065, "width": 31.75, "height": 27.813},
        {"x": -20.37, "y": -6.2095, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3533",
    "name": "Adafruit 0.96\" 160x80 Color TFT Display w/ MicroSD Card Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3533",
    "revision": "EAGLE Adafruit 0.96in 160x80 TFT Display.brd; commit 7ada397dddd0",
    "category": "Indicators",
    "board": {
      "width": 31.75,
      "height": 27.813,
      "color": "#246545",
      "outline": "M-15.875 -11.3665A2.54 2.54 0 0 1 -13.335 -13.9065A2.54 2.54 0 0 1 -10.795 -11.3665L-10.795 -8.8265L10.795 -8.8265L10.795 -11.3665A2.54 2.54 0 0 1 13.335 -13.9065A2.54 2.54 0 0 1 15.875 -11.3665L15.875 11.3665A2.54 2.54 0 0 1 13.335 13.9065L-13.335 13.9065A2.54 2.54 0 0 1 -15.875 11.3665L-15.875 -11.3665Z"
    },
    "contacts": assets["adafruit-module-3533"]["contacts"],
    "holes": [
      {
        "x": -11.557,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -12.446,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -13.335,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -14.224,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -15.113,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 15.113,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 14.224,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 13.335,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 12.446,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 11.557,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -13.335,
        "y": -11.3665,
        "drill": 2.5
      },
      {
        "x": 13.335,
        "y": -11.3665,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3533"]["artwork"],
    "backArtwork": assets["adafruit-module-3533"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3533"]["provenance"],
    "internalConnections": [
      [
        "cn1-mt1",
        "cn1-mt2",
        "cn1-6",
        "jp1-3"
      ],
      [
        "cn1-7",
        "jp1-5"
      ],
      [
        "cn1-4",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3533"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-0.96-160x80-TFT-Display-Breakout-PCB/blob/7ada397dddd065125d27c9d957d58b2a96cdf6d7/Adafruit%200.96in%20160x80%20TFT%20Display.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-0.96-160x80-TFT-Display-Breakout-PCB/blob/7ada397dddd065125d27c9d957d58b2a96cdf6d7/Adafruit%200.96in%20160x80%20TFT%20Display.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-0.96-160x80-TFT-Display-Breakout-PCB/blob/7ada397dddd065125d27c9d957d58b2a96cdf6d7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3533",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3533",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3533. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -20.41,
      -6.7325,
      14.5394,
      8.8915
    ],
    "backArtworkBounds": [
      -13.629,
      -6.8605,
      13.451,
      9.0195
    ]
  },
  {
    "id": "adafruit-module-1673",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA1673: EAGLE Adafruit 1.27 128x96 RGB OLED.brd; commit e3f77c8c186f header geometry", "url": "https://github.com/adafruit/Adafruit-1.27inch-Color-OLED-Breakout-PCB/blob/e3f77c8c186fbdbadf4f33629ca83cec93f3f731/Adafruit%201.27%20128x96%20RGB%20OLED.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}],
        "boardSha256": "86f7e52d2b87adc53690feecd85d4a46c0e7c120d2010fa90a5d3ce3dbe3d7e7"
      },
      "bodyRegions": [
        {"x": -21.59, "y": -17.78, "width": 43.18, "height": 35.56},
        {"x": -21.87, "y": -12.05, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1673",
    "name": "OLED Breakout Board - 16-bit Color 1.27\" w/microSD holder",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1673",
    "revision": "EAGLE Adafruit 1.27 128x96 RGB OLED.brd; commit e3f77c8c186f",
    "category": "Indicators",
    "board": {
      "width": 43.18,
      "height": 35.56,
      "color": "#246545",
      "outline": "M-19.05 12.7A2.54 2.54 0 0 0 -21.59 15.24A2.54 2.54 0 0 0 -19.05 17.78L19.05 17.78A2.54 2.54 0 0 0 21.59 15.24A2.54 2.54 0 0 0 19.05 12.7L17.78 12.7L17.78 -12.7L19.05 -12.7A2.54 2.54 0 0 0 21.59 -15.24A2.54 2.54 0 0 0 19.05 -17.78L-19.05 -17.78A2.54 2.54 0 0 0 -21.59 -15.24A2.54 2.54 0 0 0 -19.05 -12.7L-17.78 -12.7L-17.78 12.7L-19.05 12.7Z"
    },
    "contacts": assets["adafruit-module-1673"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": 15.24,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": 15.24,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": -15.24,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": -15.24,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1673"]["artwork"],
    "backArtwork": assets["adafruit-module-1673"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1673"]["provenance"],
    "internalConnections": [
      [
        "cn1-mt1",
        "cn1-mt2",
        "cn1-6",
        "jp1-11"
      ],
      [
        "cn1-cd1",
        "jp1-8"
      ],
      [
        "cn1-7",
        "jp1-7"
      ],
      [
        "cn1-4",
        "jp1-9"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1673"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.27inch-Color-OLED-Breakout-PCB/blob/e3f77c8c186fbdbadf4f33629ca83cec93f3f731/Adafruit%201.27%20128x96%20RGB%20OLED.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.27inch-Color-OLED-Breakout-PCB/blob/e3f77c8c186fbdbadf4f33629ca83cec93f3f731/Adafruit%201.27%20128x96%20RGB%20OLED.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.27inch-Color-OLED-Breakout-PCB/blob/e3f77c8c186fbdbadf4f33629ca83cec93f3f731/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1673",
      "status": "Official Adafruit stock feed reported 16 available.",
      "sku": "ADA1673",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "16"
    },
    "description": "Adafruit ADA1673. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -21.91,
      -12.09,
      16.575,
      10.56
    ]
  },
  {
    "id": "adafruit-module-4383",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "Adafruit ADA4383: EAGLE Adafruit 1.14-inch 240x135 Color TFT.brd; commit e87c63d29cae header geometry", "url": "https://github.com/adafruit/Adafruit-1.14-inch-240x135-TFT-PCB/blob/e87c63d29caea5604ad987077b2ca9eb61a4284f/Adafruit%201.14-inch%20240x135%20Color%20TFT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}],
        "boardSha256": "9a1f762be5009829f24f51933e0b15c66eb699f6df0304310680fcb1bab151cf"
      },
      "bodyRegions": [
        {"x": -15.875, "y": -13.9065, "width": 31.75, "height": 27.813},
        {"x": -20.37, "y": -6.2095, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4383",
    "name": "Adafruit 1.14\" 240x135 Color TFT Display + MicroSD Card Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4383",
    "revision": "EAGLE Adafruit 1.14-inch 240x135 Color TFT.brd; commit e87c63d29cae",
    "category": "Indicators",
    "board": {
      "width": 31.75,
      "height": 27.813,
      "color": "#246545",
      "outline": "M-15.875 -11.3665A2.54 2.54 0 0 1 -13.335 -13.9065A2.54 2.54 0 0 1 -10.795 -11.3665L-10.795 -8.8265L10.795 -8.8265L10.795 -11.3665A2.54 2.54 0 0 1 13.335 -13.9065A2.54 2.54 0 0 1 15.875 -11.3665L15.875 11.3665A2.54 2.54 0 0 1 13.335 13.9065L-13.335 13.9065A2.54 2.54 0 0 1 -15.875 11.3665L-15.875 -11.3665Z"
    },
    "contacts": assets["adafruit-module-4383"]["contacts"],
    "holes": [
      {
        "x": -11.557,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -12.446,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -13.335,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -14.224,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -15.113,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 15.113,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 14.224,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 13.335,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 12.446,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": 11.557,
        "y": -8.8265,
        "drill": 0.6
      },
      {
        "x": -5.567,
        "y": 5.4575,
        "drill": 1
      },
      {
        "x": -5.567,
        "y": -4.9425,
        "drill": 1
      },
      {
        "x": -13.335,
        "y": -11.3665,
        "drill": 2.5
      },
      {
        "x": 13.335,
        "y": -11.3665,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4383"]["artwork"],
    "backArtwork": assets["adafruit-module-4383"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4383"]["provenance"],
    "internalConnections": [
      [
        "cn1-mt1",
        "cn1-mt2",
        "cn1-6",
        "jp1-3"
      ],
      [
        "cn1-7",
        "jp1-5"
      ],
      [
        "cn1-4",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4383"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-1.14-inch-240x135-TFT-PCB/blob/e87c63d29caea5604ad987077b2ca9eb61a4284f/Adafruit%201.14-inch%20240x135%20Color%20TFT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-1.14-inch-240x135-TFT-PCB/blob/e87c63d29caea5604ad987077b2ca9eb61a4284f/Adafruit%201.14-inch%20240x135%20Color%20TFT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-1.14-inch-240x135-TFT-PCB/blob/e87c63d29caea5604ad987077b2ca9eb61a4284f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4383",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4383",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4383. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -20.41,
      -6.7325,
      14.5394,
      9.0185
    ],
    "backArtworkBounds": [
      -15.407,
      -8.522499999999999,
      15.673,
      9.1575
    ]
  },
  {
    "id": "adafruit-module-2478",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12", "jp2-13", "jp2-14", "jp2-15", "jp2-16", "jp2-17", "jp2-18", "jp2-19", "jp2-20", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp1-17", "jp1-18", "jp1-19", "jp1-20"],
      "source": {"label": "Adafruit ADA2478: EAGLE Adafruit 2.4in TFT Breakout.brd; commit 62eaf05ad6ea header geometry", "url": "https://github.com/adafruit/Adafruit-2.4-TFT-Breakout-PCB/blob/62eaf05ad6ead75f2da987f2ff7ed994c02869c7/Adafruit%202.4in%20TFT%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 20, "package": "1X20_ROUND"}, {"id": "JP1", "count": 20, "package": "1X20_ROUND"}],
        "boardSha256": "cae8cbba365b80cdaf185c0339650371151ee08610407e4efa611f1d417799bf"
      },
      "bodyRegions": [
        {"x": -31.115, "y": -26.289, "width": 62.23, "height": 52.578},
        {"x": -34.467, "y": 5.03, "width": 20.47, "height": 14.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2478",
    "name": "Adafruit 2.4\" TFT LCD with Touchscreen Breakout w/MicroSD Socket",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2478",
    "revision": "EAGLE Adafruit 2.4in TFT Breakout.brd; commit 62eaf05ad6ea",
    "category": "Inputs",
    "board": {
      "width": 62.23,
      "height": 52.578,
      "color": "#246545",
      "outline": "M-31.115 -23.749A2.54 2.54 0 0 1 -28.575 -26.289L28.575 -26.289A2.54 2.54 0 0 1 31.115 -23.749L31.115 23.749A2.54 2.54 0 0 1 28.575 26.289L-28.575 26.289A2.54 2.54 0 0 1 -31.115 23.749L-31.115 -23.749Z"
    },
    "contacts": assets["adafruit-module-2478"]["contacts"],
    "holes": [
      {
        "x": -28.575,
        "y": 23.749,
        "drill": 2.5
      },
      {
        "x": 28.575,
        "y": 23.749,
        "drill": 2.5
      },
      {
        "x": -28.575,
        "y": -23.749,
        "drill": 2.5
      },
      {
        "x": 28.575,
        "y": -23.749,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2478"]["artwork"],
    "backArtwork": assets["adafruit-module-2478"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2478"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
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
        "jp1-4"
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
        "jp1-5"
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
        "url": "https://www.adafruit.com/product/2478"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-Breakout-PCB/blob/62eaf05ad6ead75f2da987f2ff7ed994c02869c7/Adafruit%202.4in%20TFT%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-Breakout-PCB/blob/62eaf05ad6ead75f2da987f2ff7ed994c02869c7/Adafruit%202.4in%20TFT%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-2.4-TFT-Breakout-PCB/blob/62eaf05ad6ead75f2da987f2ff7ed994c02869c7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2478",
      "status": "Official Adafruit stock feed reported 12 available.",
      "sku": "ADA2478",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "12"
    },
    "description": "Adafruit ADA2478. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -34.507,
      -19.877399999999998,
      23.179,
      19.27
    ],
    "backArtworkBounds": [
      -30.122999999999998,
      -21.34,
      30.107,
      21.34
    ]
  },
  {
    "id": "adafruit-module-1743",
    "sku": "ADA1743",
    "name": "3.2\" TFT LCD with Touchscreen Breakout Board w/MicroSD Socket",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1743",
    "revision": "EAGLE Adafruit 3.2in TFT 320x240.brd; commit 78921b1128d9",
    "category": "Inputs",
    "board": {
      "width": 62.484,
      "height": 88.265,
      "color": "#246545",
      "outline": "M-31.242 41.5925A2.54 2.54 0 0 0 -28.702 44.1325L28.702 44.1325A2.54 2.54 0 0 0 31.242 41.5925A2.54 2.54 0 0 0 28.702 39.0525L27.051 39.0525L27.051 -39.0525L28.702 -39.0525A2.54 2.54 0 0 0 31.242 -41.5925A2.54 2.54 0 0 0 28.702 -44.1325L-28.702 -44.1325A2.54 2.54 0 0 0 -31.242 -41.5925A2.54 2.54 0 0 0 -28.702 -39.0525L-27.051 -39.0525L-27.051 39.0525L-28.702 39.0525A2.54 2.54 0 0 0 -31.242 41.5925Z"
    },
    "contacts": assets["adafruit-module-1743"]["contacts"],
    "holes": [
      {
        "x": -28.575,
        "y": 41.5925,
        "drill": 3
      },
      {
        "x": 28.575,
        "y": 41.5925,
        "drill": 3
      },
      {
        "x": -28.575,
        "y": -41.5925,
        "drill": 3
      },
      {
        "x": 28.575,
        "y": -41.5925,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-1743"]["artwork"],
    "backArtwork": assets["adafruit-module-1743"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1743"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
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
        "jp1-4"
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
        "jp1-5"
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
        "url": "https://www.adafruit.com/product/1743"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-3.2-TFT-Breakout-PCB/blob/78921b1128d96fb384ceedf88545cafa5540b3a8/Adafruit%203.2in%20TFT%20320x240.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-3.2-TFT-Breakout-PCB/blob/78921b1128d96fb384ceedf88545cafa5540b3a8/Adafruit%203.2in%20TFT%20320x240.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-3.2-TFT-Breakout-PCB/blob/78921b1128d96fb384ceedf88545cafa5540b3a8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1743",
      "status": "Official Adafruit stock feed reported 23 available.",
      "sku": "ADA1743",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "23"
    },
    "description": "Adafruit ADA1743. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -28.791999999999998,
      -31.7515,
      23.154,
      33.1485
    ],
    "backArtworkBounds": [
      -27.14,
      -38.9925,
      27.04,
      39.0875
    ]
  },
];
