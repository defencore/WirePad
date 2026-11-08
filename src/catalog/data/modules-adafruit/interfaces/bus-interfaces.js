import assets from "./bus-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-1551",
    "mountingReview": {
      "contactIds": ["cn1-1", "cn1-2", "cn1-3", "cn1-4"],
      "source": {"label": "Adafruit ADA1551: EAGLE Adafruit DS2413.brd; commit a5aeeffa483a header geometry", "url": "https://github.com/adafruit/Adafruit-DS2413-PCB/blob/a5aeeffa483ae80c718e9cb3cd23ea769cd5321b/Adafruit%20DS2413.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "CN1", "count": 4, "package": "1X04-CLEANBIG"}],
        "boardSha256": "e0a7b007260285ac70fd67b5df48dccdbfab78cc03c4395f2afa2b2bd58b68df"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -7.62, "width": 10.16, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1551",
    "name": "DS2413 1-Wire Two GPIO Controller Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1551",
    "revision": "EAGLE Adafruit DS2413.brd; commit a5aeeffa483a",
    "category": "Interfaces",
    "board": {
      "width": 10.16,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-5.08 6.35A1.27 1.27 0 0 0 -3.81 7.62L3.81 7.62A1.27 1.27 0 0 0 5.08 6.35L5.08 -6.35A1.27 1.27 0 0 0 3.81 -7.62L-3.81 -7.62A1.27 1.27 0 0 0 -5.08 -6.35L-5.08 6.35Z"
    },
    "contacts": assets["adafruit-module-1551"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1551"]["artwork"],
    "backArtwork": assets["adafruit-module-1551"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1551"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1551"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DS2413-PCB/blob/a5aeeffa483ae80c718e9cb3cd23ea769cd5321b/Adafruit%20DS2413.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DS2413-PCB/blob/a5aeeffa483ae80c718e9cb3cd23ea769cd5321b/Adafruit%20DS2413.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DS2413-PCB/blob/a5aeeffa483ae80c718e9cb3cd23ea769cd5321b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1551",
      "status": "Official Adafruit stock feed reported 18 available.",
      "sku": "ADA1551",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "18"
    },
    "description": "Adafruit ADA1551. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.04,
      -1.6320000000000001,
      2.04,
      2.648
    ]
  },
  {
    "id": "adafruit-module-1875",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6"],
      "source": {"label": "Adafruit ADA1875: EAGLE Adafruit TXB0104.brd; commit 0dcd9500672a header geometry", "url": "https://github.com/adafruit/Adafruit-TXB0104-Level-Shifter-Breakout-PCB/blob/0dcd9500672a5b6ab652f9cbf9e01bccdd6a31b6/Adafruit%20TXB0104.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 6, "package": "1X06-CLEANBIG"}, {"id": "JP4", "count": 6, "package": "1X06-CLEANBIG"}],
        "boardSha256": "61d590641f69c2f38ea8f67b172ecad4c1e02f73ea67c9d50d482093ae726db3"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -8.89, "width": 12.7, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1875",
    "name": "TXB0104 Bi-Directional Level Shifter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1875",
    "revision": "EAGLE Adafruit TXB0104.brd; commit 0dcd9500672a",
    "category": "Interfaces",
    "board": {
      "width": 12.7,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-3.81 -8.89A2.54 2.54 0 0 0 -6.35 -6.35L-6.35 6.35A2.54 2.54 0 0 0 -3.81 8.89L3.81 8.89A2.54 2.54 0 0 0 6.35 6.35L6.35 -6.35A2.54 2.54 0 0 0 3.81 -8.89L-3.81 -8.89Z"
    },
    "contacts": assets["adafruit-module-1875"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-1875"]["artwork"],
    "backArtwork": assets["adafruit-module-1875"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1875"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1875"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TXB0104-Level-Shifter-Breakout-PCB/blob/0dcd9500672a5b6ab652f9cbf9e01bccdd6a31b6/Adafruit%20TXB0104.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TXB0104-Level-Shifter-Breakout-PCB/blob/0dcd9500672a5b6ab652f9cbf9e01bccdd6a31b6/Adafruit%20TXB0104.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TXB0104-Level-Shifter-Breakout-PCB/blob/0dcd9500672a5b6ab652f9cbf9e01bccdd6a31b6/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1875",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1875",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1875. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.5546,
      -4.612,
      2.5546,
      7.177
    ]
  },
  {
    "id": "adafruit-module-4756",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4756: EAGLE Adafruit LTC4311 I2C Extender.brd; commit 8fb4ee69175a header geometry", "url": "https://github.com/adafruit/Adafruit-LTC4311-PCB/blob/8fb4ee69175a7ddb4128edbb7d9d79a78fbbf405/Adafruit%20LTC4311%20I2C%20Extender.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "6b2543f8c4ed3769ac2aea7ebd174997890368a0ec2762d41a6e733e9726d1af"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4756",
    "name": "Adafruit LTC4311 I2C Extender / Active Terminator",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4756",
    "revision": "EAGLE Adafruit LTC4311 I2C Extender.brd; commit 8fb4ee69175a",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4756"]["contacts"],
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
    "artwork": assets["adafruit-module-4756"]["artwork"],
    "backArtwork": assets["adafruit-module-4756"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4756"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-4"
      ],
      [
        "conn3-1",
        "conn4-1",
        "jp2-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4756"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LTC4311-PCB/blob/8fb4ee69175a7ddb4128edbb7d9d79a78fbbf405/Adafruit%20LTC4311%20I2C%20Extender.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LTC4311-PCB/blob/8fb4ee69175a7ddb4128edbb7d9d79a78fbbf405/Adafruit%20LTC4311%20I2C%20Extender.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LTC4311-PCB/blob/8fb4ee69175a7ddb4128edbb7d9d79a78fbbf405/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4756",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4756",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4756. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.032,
      -4.1865,
      12.032,
      3.14
    ]
  },
  {
    "id": "adafruit-module-5914",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA5914: EAGLE Adafruit LTC4316.brd; commit 16f4d8d3e788 header geometry", "url": "https://github.com/adafruit/Adafruit-LTC4316-PCB/blob/16f4d8d3e788323f11749103c2cf7a24ee3c521c/Adafruit%20LTC4316.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "aca805aebdde98960103a5ab0f78d427623c5aa6fbed71ab9221ea813459fcae"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5914",
    "name": "Adafruit LTC4316 I2C Address Translator",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5914",
    "revision": "EAGLE Adafruit LTC4316.brd; commit 16f4d8d3e788",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5914"]["contacts"],
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
    "artwork": assets["adafruit-module-5914"]["artwork"],
    "backArtwork": assets["adafruit-module-5914"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5914"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "jp2-6"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-2"
      ],
      [
        "conn3-4",
        "jp2-5"
      ],
      [
        "conn4-3",
        "jp2-4"
      ],
      [
        "conn4-4",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5914"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LTC4316-PCB/blob/16f4d8d3e788323f11749103c2cf7a24ee3c521c/Adafruit%20LTC4316.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LTC4316-PCB/blob/16f4d8d3e788323f11749103c2cf7a24ee3c521c/Adafruit%20LTC4316.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LTC4316-PCB/blob/16f4d8d3e788323f11749103c2cf7a24ee3c521c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5914",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5914",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5914. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -8.626,
      12.159,
      4.269
    ],
    "backArtworkBounds": [
      -6.517,
      -7.406,
      -3.135,
      -5.294
    ]
  },
  {
    "id": "adafruit-module-5637",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5"],
      "source": {"label": "Adafruit ADA5637: EAGLE Adafruit QT 5-3V Shifter.brd; commit 1b59f72ce55b header geometry", "url": "https://github.com/adafruit/Adafruit-QT-5-3V-Shifter-PCB/blob/1b59f72ce55b4b116f2b8756c4eefdb9fa2e4eb3/Adafruit%20QT%205-3V%20Shifter.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_76"}, {"id": "JP3", "count": 5, "package": "1X05_ROUND_76"}],
        "boardSha256": "96098864fbf3d1d8098f779434fcf802837bfe8b35186e5ac0f985d403ae41b2"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5637",
    "name": "Adafruit QT 5V to 3V Level Shifter Breakout - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5637",
    "revision": "EAGLE Adafruit QT 5-3V Shifter.brd; commit 1b59f72ce55b",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5637"]["contacts"],
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
    "artwork": assets["adafruit-module-5637"]["artwork"],
    "backArtwork": assets["adafruit-module-5637"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5637"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "jp2-1",
        "jp3-1"
      ],
      [
        "conn3-3",
        "jp2-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-3",
        "jp3-3"
      ],
      [
        "conn3-4",
        "jp2-4"
      ],
      [
        "conn4-2",
        "jp2-2",
        "jp3-2"
      ],
      [
        "conn4-3",
        "jp3-5"
      ],
      [
        "conn4-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5637"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-QT-5-3V-Shifter-PCB/blob/1b59f72ce55b4b116f2b8756c4eefdb9fa2e4eb3/Adafruit%20QT%205-3V%20Shifter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-QT-5-3V-Shifter-PCB/blob/1b59f72ce55b4b116f2b8756c4eefdb9fa2e4eb3/Adafruit%20QT%205-3V%20Shifter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-QT-5-3V-Shifter-PCB/blob/1b59f72ce55b4b116f2b8756c4eefdb9fa2e4eb3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5637",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5637",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5637. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      3.494
    ],
    "backArtworkBounds": [
      -6.644,
      -4.231,
      -4.532,
      -0.849
    ]
  },
  {
    "id": "adafruit-module-5545",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10"],
      "source": {"label": "Adafruit ADA5545: EAGLE Adafruit PCF8574 QT.brd; commit a2fbf46bed44 header geometry", "url": "https://github.com/adafruit/Adafruit-PCF8574-PCB/blob/a2fbf46bed447a1bd87b51f11169b275b9bc8fb0/Adafruit%20PCF8574%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP3", "count": 10, "package": "1X10_ROUND70"}],
        "boardSha256": "e0524038141158575ba547c8840928331cf8b8f88926401dec0f1884f3cc5a2c"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5545",
    "name": "Adafruit PCF8574 I2C GPIO Expander Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5545",
    "revision": "EAGLE Adafruit PCF8574 QT.brd; commit a2fbf46bed44",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5545"]["contacts"],
    "holes": [
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
    "artwork": assets["adafruit-module-5545"]["artwork"],
    "backArtwork": assets["adafruit-module-5545"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5545"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2",
        "jp3-10"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-1"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5545"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCF8574-PCB/blob/a2fbf46bed447a1bd87b51f11169b275b9bc8fb0/Adafruit%20PCF8574%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCF8574-PCB/blob/a2fbf46bed447a1bd87b51f11169b275b9bc8fb0/Adafruit%20PCF8574%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCF8574-PCB/blob/a2fbf46bed447a1bd87b51f11169b275b9bc8fb0/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5545",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5545",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5545. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      3.748
    ],
    "backArtworkBounds": [
      -8.549,
      -2.961,
      7.279,
      1.31
    ]
  },
  {
    "id": "adafruit-module-6027",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6027: EAGLE Adafruit DS2482S-800 Breakout.brd; commit 520f5e8de729 header geometry", "url": "https://github.com/adafruit/Adafruit-DS2482S-800-Breakout-PCB/blob/520f5e8de72928ab3b5517cc8db37e8aedb6133c/Adafruit%20DS2482S-800%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "43b3e638e3cf0111551c3bc069cb2bca6e2851b93cf5e2f3f932b47a10139893"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6027",
    "name": "Adafruit DS2482S-800 8 Channel I2C to 1-Wire Bus Adapter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6027",
    "revision": "EAGLE Adafruit DS2482S-800 Breakout.brd; commit 520f5e8de729",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.16 12.7A2.54 2.54 0 0 0 12.7 10.16L12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16Z"
    },
    "contacts": assets["adafruit-module-6027"]["contacts"],
    "holes": [
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
    "artwork": assets["adafruit-module-6027"]["artwork"],
    "backArtwork": assets["adafruit-module-6027"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6027"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2",
        "jp2-1",
        "jp2-4",
        "jp2-7",
        "jp2-10",
        "jp2-13",
        "jp2-16",
        "jp2-19",
        "jp2-22"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-3",
        "jp2-6",
        "jp2-9",
        "jp2-12",
        "jp2-15",
        "jp2-18",
        "jp2-21",
        "jp2-24"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6027"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DS2482S-800-Breakout-PCB/blob/520f5e8de72928ab3b5517cc8db37e8aedb6133c/Adafruit%20DS2482S-800%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DS2482S-800-Breakout-PCB/blob/520f5e8de72928ab3b5517cc8db37e8aedb6133c/Adafruit%20DS2482S-800%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DS2482S-800-Breakout-PCB/blob/520f5e8de72928ab3b5517cc8db37e8aedb6133c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6027",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6027",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6027. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -10.2,
      12.159,
      7.965
    ],
    "backArtworkBounds": [
      -12.232,
      -4.231,
      7.406,
      8.93
    ]
  },
  {
    "id": "adafruit-module-5611",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp6-1", "jp6-2", "jp6-3", "jp6-4", "jp6-5", "jp6-6", "jp6-7", "jp6-8", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp4-1", "jp4-2", "jp4-3", "jp4-4"],
      "source": {"label": "Adafruit ADA5611: EAGLE Adafruit PCF8575.brd; commit 8a26f47e5a0c physical insertion headers", "url": "https://github.com/adafruit/Adafruit-PCF8575-PCB/blob/8a26f47e5a0c47467d0bdf6a3385eb2c5a9a0377/Adafruit%20PCF8575.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}, {"id": "JP6", "count": 8, "package": "1X08_ROUND_70"}, {"id": "JP3", "count": 4, "package": "1X04_ROUND"}, {"id": "JP4", "count": 4, "package": "1X04_ROUND"}],
        "duplicateHeaderContacts": [{"pinId": "jp7-1", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-2", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-3", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-4", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-5", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-6", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-7", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp7-8", "equivalentPinId": "jp4-1", "connector": "JP7", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-1", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-2", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-3", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-4", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-5", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-6", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-7", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp8-8", "equivalentPinId": "jp4-2", "connector": "JP8", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "96e83ae0be8dda87d5e3933efa30934cec431236a0a59d56b1bc5b8809c06476"
      },
      "bodyRegions": [
        {"x": -20.32, "y": -8.89, "width": 40.64, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5611",
    "name": "Adafruit PCF8575 I2C 16 GPIO Expander Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5611",
    "revision": "EAGLE Adafruit PCF8575.brd; commit 8a26f47e5a0c",
    "category": "Interfaces",
    "board": {
      "width": 40.64,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-20.32 6.35A2.54 2.54 0 0 0 -17.78 8.89L17.78 8.89A2.54 2.54 0 0 0 20.32 6.35L20.32 -6.35A2.54 2.54 0 0 0 17.78 -8.89L-17.78 -8.89A2.54 2.54 0 0 0 -20.32 -6.35L-20.32 6.35Z"
    },
    "contacts": assets["adafruit-module-5611"]["contacts"],
    "holes": [
      {
        "x": -17.78,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 17.78,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -17.78,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 17.78,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5611"]["artwork"],
    "backArtwork": assets["adafruit-module-5611"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5611"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp7-1",
        "jp7-2",
        "jp7-3",
        "jp7-4",
        "jp7-5",
        "jp7-6",
        "jp7-7",
        "jp7-8",
        "jp4-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp4-4"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp8-1",
        "jp8-2",
        "jp8-3",
        "jp8-4",
        "jp8-5",
        "jp8-6",
        "jp8-7",
        "jp8-8",
        "jp4-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5611"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCF8575-PCB/blob/8a26f47e5a0c47467d0bdf6a3385eb2c5a9a0377/Adafruit%20PCF8575.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCF8575-PCB/blob/8a26f47e5a0c47467d0bdf6a3385eb2c5a9a0377/Adafruit%20PCF8575.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCF8575-PCB/blob/8a26f47e5a0c47467d0bdf6a3385eb2c5a9a0377/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5611",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5611",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5611. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.779,
      -5.0595,
      19.779,
      4.383
    ],
    "backArtworkBounds": [
      -16.9945,
      -4.866,
      -2.119,
      -0.214
    ]
  },
  {
    "id": "adafruit-module-5626",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA5626: EAGLE PCA9548A QT Board.brd; commit 5b8baf8ad61c physical insertion headers", "url": "https://github.com/adafruit/Adafruit-PCA9548-PCB/blob/5b8baf8ad61c5bd340e53f47d9386bd3bd553d92/PCA9548A%20QT%20Board.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "a475ae5afc4be00bf27478afde22568f2c9882fa9110c73ce98628f84e307308"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -20.32, "y": -10.16, "width": 40.64, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5626",
    "name": "Adafruit PCA9548 8-Channel STEMMA QT / Qwiic I2C Multiplexer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5626",
    "revision": "EAGLE PCA9548A QT Board.brd; commit 5b8baf8ad61c",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 40.64,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-20.32 7.62A2.54 2.54 0 0 0 -17.78 10.16L17.78 10.16A2.54 2.54 0 0 0 20.32 7.62L20.32 -7.62A2.54 2.54 0 0 0 17.78 -10.16L-17.78 -10.16A2.54 2.54 0 0 0 -20.32 -7.62L-20.32 7.62Z"
    },
    "contacts": assets["adafruit-module-5626"]["contacts"],
    "holes": [
      {
        "x": 17.78,
        "y": -7.62,
        "drill": 2.032
      },
      {
        "x": 17.78,
        "y": 7.62,
        "drill": 2.032
      },
      {
        "x": 9.93,
        "y": 0,
        "drill": 1
      },
      {
        "x": 12.93,
        "y": 0,
        "drill": 1
      },
      {
        "x": -17.78,
        "y": -7.747,
        "drill": 2.5
      },
      {
        "x": -17.78,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5626"]["artwork"],
    "backArtwork": assets["adafruit-module-5626"]["backArtwork"],
    "provenance": assets["adafruit-module-5626"]["provenance"],
    "internalConnections": [
      [
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn4-3",
        "jp1-4"
      ],
      [
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2",
        "conn5-1",
        "conn5-mt1",
        "conn5-mt2",
        "conn6-1",
        "conn6-mt1",
        "conn6-mt2",
        "conn7-1",
        "conn7-mt1",
        "conn7-mt2",
        "conn8-1",
        "conn8-mt1",
        "conn8-mt2",
        "conn9-1",
        "conn9-mt1",
        "conn9-mt2",
        "conn10-1",
        "conn10-mt1",
        "conn10-mt2",
        "jp1-2"
      ],
      [
        "conn4-4",
        "jp1-3"
      ],
      [
        "conn1-2",
        "conn2-2",
        "conn5-2",
        "conn6-2",
        "conn7-2",
        "conn8-2",
        "conn9-2",
        "conn10-2"
      ],
      [
        "conn1-3",
        "tp16-p-1"
      ],
      [
        "conn1-4",
        "tp15-p-1"
      ],
      [
        "conn2-3",
        "tp14-p-1"
      ],
      [
        "conn2-4",
        "tp13-p-1"
      ],
      [
        "conn5-3",
        "tp12-p-1"
      ],
      [
        "conn5-4",
        "tp11-p-1"
      ],
      [
        "conn6-3",
        "tp10-p-1"
      ],
      [
        "conn6-4",
        "tp9-p-1"
      ],
      [
        "conn7-3",
        "tp7-p-1"
      ],
      [
        "conn7-4",
        "tp8-p-1"
      ],
      [
        "conn8-3",
        "tp6-p-1"
      ],
      [
        "conn8-4",
        "tp5-p-1"
      ],
      [
        "conn9-3",
        "tp4-p-1"
      ],
      [
        "conn9-4",
        "tp3-p-1"
      ],
      [
        "conn10-3",
        "tp2-p-1"
      ],
      [
        "conn10-4",
        "tp1-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5626"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCA9548-PCB/blob/5b8baf8ad61c5bd340e53f47d9386bd3bd553d92/PCA9548A%20QT%20Board.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCA9548-PCB/blob/5b8baf8ad61c5bd340e53f47d9386bd3bd553d92/PCA9548A%20QT%20Schematic.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCA9548-PCB/blob/5b8baf8ad61c5bd340e53f47d9386bd3bd553d92/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5626",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5626",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5626. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.779,
      -9.745999999999999,
      15.699,
      9.746
    ],
    "backArtworkBounds": [
      -7.787,
      2.1189999999999998,
      -1.738,
      5.501
    ]
  },
  {
    "id": "adafruit-module-5663",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA5663: EAGLE PCA9546 STEMMA QT.brd; commit a98b24b8bafa physical insertion headers", "url": "https://github.com/adafruit/Adafruit-PCA9546-PCB/blob/a98b24b8bafac251284dff313569e4c2b790bf23/PCA9546%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "e09a1099ee51120c0297e3e1a7923ae8fe1f78ac21fc67883ad08785556886fd"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -10.16, "width": 25.4, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5663",
    "name": "Adafruit PCA9546 4-Channel I2C Multiplexer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5663",
    "revision": "EAGLE PCA9546 STEMMA QT.brd; commit a98b24b8bafa",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "contacts": assets["adafruit-module-5663"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": -7.62,
        "drill": 2.032
      },
      {
        "x": 10.16,
        "y": 7.62,
        "drill": 2.032
      },
      {
        "x": -10.16,
        "y": -7.747,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5663"]["artwork"],
    "backArtwork": assets["adafruit-module-5663"]["backArtwork"],
    "provenance": assets["adafruit-module-5663"]["provenance"],
    "internalConnections": [
      [
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn4-3",
        "jp1-4"
      ],
      [
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2",
        "conn9-1",
        "conn9-mt1",
        "conn9-mt2",
        "conn10-1",
        "conn10-mt1",
        "conn10-mt2",
        "jp1-2"
      ],
      [
        "conn4-4",
        "jp1-3"
      ],
      [
        "conn1-2",
        "conn2-2",
        "conn9-2",
        "conn10-2"
      ],
      [
        "conn1-3",
        "tp1-p-1"
      ],
      [
        "conn1-4",
        "tp2-p-1"
      ],
      [
        "conn2-3",
        "tp3-p-1"
      ],
      [
        "conn2-4",
        "tp4-p-1"
      ],
      [
        "conn9-3",
        "tp5-p-1"
      ],
      [
        "conn9-4",
        "tp6-p-1"
      ],
      [
        "conn10-3",
        "tp7-p-1"
      ],
      [
        "conn10-4",
        "tp8-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5663"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCA9546-PCB/blob/a98b24b8bafac251284dff313569e4c2b790bf23/PCA9546%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCA9546-PCB/blob/a98b24b8bafac251284dff313569e4c2b790bf23/PCA9546%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCA9546-PCB/blob/a98b24b8bafac251284dff313569e4c2b790bf23/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5663",
      "status": "Official Adafruit stock feed reported 13 available.",
      "sku": "ADA5663",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "13"
    },
    "description": "Adafruit ADA5663. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -9.745999999999999,
      8.2696,
      9.746
    ],
    "backArtworkBounds": [
      -6.771,
      2.1189999999999998,
      5.882,
      5.501
    ]
  },
];
