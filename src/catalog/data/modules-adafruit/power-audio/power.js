import assets from "./power-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4683",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA4683: EAGLE Adafruit MPM3610.brd; commit 8cdc9051c29e header geometry", "url": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/Adafruit%20MPM3610.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "8026c7b02718230ea1bf308607b2a385e8a6c43c9fe3d7e85474357c54f96cce"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -8.5725, "width": 10.16, "height": 17.145}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4683",
    "name": "MPM3610 3.3V Buck Converter Breakout - 21V In 3.3V Out at 1.2A",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4683",
    "revision": "EAGLE Adafruit MPM3610.brd; commit 8cdc9051c29e",
    "category": "Power",
    "board": {
      "width": 10.16,
      "height": 17.145,
      "color": "#246545",
      "outline": "M-5.08 -6.0325A2.54 2.54 0 0 1 -2.54 -8.5725L2.54 -8.5725A2.54 2.54 0 0 1 5.08 -6.0325L5.08 8.5725L-5.08 8.5725L-5.08 -6.0325Z"
    },
    "contacts": assets["adafruit-module-4683"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -6.0325,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4683"]["artwork"],
    "backArtwork": assets["adafruit-module-4683"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4683"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4683"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/Adafruit%20MPM3610.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/Adafruit%20MPM3610.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4683",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4683",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4683. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.191,
      -2.6815,
      3.19,
      4.4465
    ]
  },
  {
    "id": "adafruit-module-4654",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA4654: EAGLE Adafruit TPS61023.brd; commit 82b5a33a1900 header geometry", "url": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/Adafruit%20TPS61023.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "3120167e68e07fa2f51759855c7cdb7ceba8e4b1cba024be39dd1c0edd274a68"
      },
      "bodyRegions": [
        {"x": -5.715, "y": -8.89, "width": 11.43, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4654",
    "name": "Adafruit MiniBoost 5V @ 1A - TPS61023",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4654",
    "revision": "EAGLE Adafruit TPS61023.brd; commit 82b5a33a1900",
    "category": "Power",
    "board": {
      "width": 11.43,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-5.715 -6.35A2.54 2.54 0 0 1 -3.175 -8.89L3.175 -8.89A2.54 2.54 0 0 1 5.715 -6.35L5.715 8.89L-5.715 8.89L-5.715 -6.35Z"
    },
    "contacts": assets["adafruit-module-4654"]["contacts"],
    "holes": [
      {
        "x": -3.175,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4654"]["artwork"],
    "backArtwork": assets["adafruit-module-4654"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4654"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4654"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/Adafruit%20TPS61023.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/Adafruit%20TPS61023.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4654",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4654",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4654. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.822,
      -3.571,
      4.396,
      4.891
    ]
  },
  {
    "id": "adafruit-module-2200",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA2200: EAGLE Adafruit LM4040.brd; commit 6e1c7a03f744 header geometry", "url": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/Adafruit%20LM4040.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "6a640b786f6b9e1df08f4591164885f5e18e1a0340a75619fd9ce60d30dbd573"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -8.255, "width": 12.7, "height": 16.51}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2200",
    "name": "Precision LM4040 Voltage Reference Breakout - 2.048V and 4.096V",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2200",
    "revision": "EAGLE Adafruit LM4040.brd; commit 6e1c7a03f744",
    "category": "Audio",
    "board": {
      "width": 12.7,
      "height": 16.51,
      "color": "#246545",
      "outline": "M-6.35 -6.985A1.27 1.27 0 0 1 -5.08 -8.255L5.08 -8.255A1.27 1.27 0 0 1 6.35 -6.985L6.35 6.985A1.27 1.27 0 0 1 5.08 8.255L-5.08 8.255A1.27 1.27 0 0 1 -6.35 6.985L-6.35 -6.985Z"
    },
    "contacts": assets["adafruit-module-2200"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-2200"]["artwork"],
    "backArtwork": assets["adafruit-module-2200"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2200"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2200"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/Adafruit%20LM4040.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/Adafruit%20LM4040.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2200",
      "status": "Official Adafruit stock feed reported 85 available.",
      "sku": "ADA2200",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "85"
    },
    "description": "Adafruit ADA2200. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.1524,
      -4.383,
      4.1524,
      2.605
    ]
  },
  {
    "id": "adafruit-module-5644",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA5644: EAGLE Adafruit TPS61040 Boost Converter.brd; commit 07958c909f40 header geometry", "url": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/Adafruit%20TPS61040%20Boost%20Converter.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "c196b5b0c3a2a543644724cfb10de8592b588cadd00703ee36b9e536d98ae9c2"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -7.62, "width": 10.16, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5644",
    "name": "Adafruit 12V Bias Voltage Boost Converter - TPS61040",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5644",
    "revision": "EAGLE Adafruit TPS61040 Boost Converter.brd; commit 07958c909f40",
    "category": "Power",
    "board": {
      "width": 10.16,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-5.08 -5.08A2.54 2.54 0 0 1 -2.54 -7.62L2.54 -7.62A2.54 2.54 0 0 1 5.08 -5.08L5.08 7.62L-5.08 7.62L-5.08 -5.08Z"
    },
    "contacts": assets["adafruit-module-5644"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5644"]["artwork"],
    "backArtwork": assets["adafruit-module-5644"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5644"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5644"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/Adafruit%20TPS61040%20Boost%20Converter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/Adafruit%20TPS61040%20Boost%20Converter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5644",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5644",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5644. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.612,
      -3.494,
      4.663,
      3.786
    ]
  },
  {
    "id": "adafruit-module-4920",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA4920: EAGLE TPS62827 3.3V Buck Converter.brd; commit 441e9beed498 header geometry", "url": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/TPS62827%203.3V%20Buck%20Converter.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "02d33cb3b7cb6fcc3c3f78a1762702c69e3c59abb5ec072020e31ebd0a9a2b41"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -8.255, "width": 10.16, "height": 16.51}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4920",
    "name": "TPS62827 3.3V Buck Converter Breakout - 3.3V Output 2 Amp Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4920",
    "revision": "EAGLE TPS62827 3.3V Buck Converter.brd; commit 441e9beed498",
    "category": "Power",
    "board": {
      "width": 10.16,
      "height": 16.51,
      "color": "#246545",
      "outline": "M-5.08 -5.715A2.54 2.54 0 0 1 -2.54 -8.255L2.54 -8.255A2.54 2.54 0 0 1 5.08 -5.715L5.08 8.255L-5.08 8.255L-5.08 -5.715Z"
    },
    "contacts": assets["adafruit-module-4920"]["contacts"],
    "holes": [
      {
        "x": 2.54,
        "y": -5.715,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4920"]["artwork"],
    "backArtwork": assets["adafruit-module-4920"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4920"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4920"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/TPS62827%203.3V%20Buck%20Converter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/TPS62827%203.3V%20Buck%20Converter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4920",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4920",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4920. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.6370000000000005,
      -7.1395,
      4.758,
      4.6165
    ]
  },
  {
    "id": "adafruit-module-2745",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA2745: EAGLE Adafruit LM3671 Buck.brd; commit 7635cfe1f158 header geometry", "url": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/Adafruit%20LM3671%20Buck.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "3523a897b9278e8527dbab25d62bab4783d457c19c0fe15a6da4173a89e4e47d"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -7.62, "width": 10.16, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2745",
    "name": "LM3671 3.3V Buck Converter Breakout - 3.3V Output 600mA Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2745",
    "revision": "EAGLE Adafruit LM3671 Buck.brd; commit 7635cfe1f158",
    "category": "Power",
    "board": {
      "width": 10.16,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-5.08 -5.08A2.54 2.54 0 0 1 -2.54 -7.62L2.54 -7.62A2.54 2.54 0 0 1 5.08 -5.08L5.08 7.62L-5.08 7.62L-5.08 -5.08Z"
    },
    "contacts": assets["adafruit-module-2745"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2745"]["artwork"],
    "backArtwork": assets["adafruit-module-2745"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2745"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2745"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/Adafruit%20LM3671%20Buck.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/Adafruit%20LM3671%20Buck.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2745",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2745",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2745. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.515,
      -2.986,
      4.129,
      2.706
    ]
  },
  {
    "id": "adafruit-module-3661",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4"],
      "source": {"label": "Adafruit ADA3661: EAGLE Adafruit AP6302.brd; commit 31d35855d276 header geometry", "url": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/Adafruit%20AP6302.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "7659d8bc9faa45b74c7a1684b293a52a6fae2e0dd321a71df11a4f8adc0cd3a5"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -7.62, "width": 10.16, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3661",
    "name": "Adafruit MiniBoost 5V @ 100mA Charge Pump - AP3602A",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3661",
    "revision": "EAGLE Adafruit AP6302.brd; commit 31d35855d276",
    "category": "Power",
    "board": {
      "width": 10.16,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-5.08 -5.08A2.54 2.54 0 0 1 -2.54 -7.62L2.54 -7.62A2.54 2.54 0 0 1 5.08 -5.08L5.08 7.62L-5.08 7.62L-5.08 -5.08Z"
    },
    "contacts": assets["adafruit-module-3661"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3661"]["artwork"],
    "backArtwork": assets["adafruit-module-3661"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3661"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3661"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/Adafruit%20AP6302.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/Adafruit%20AP6302.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3661",
      "status": "Official Adafruit stock feed reported 38 available.",
      "sku": "ADA3661",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "38"
    },
    "description": "Adafruit ADA3661. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.875,
      -2.605,
      4.256,
      2.506
    ]
  },
  {
    "id": "adafruit-module-6280",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7"],
      "source": {"label": "Adafruit ADA6280: EAGLE Adafruit TPS65131 Split Power Supply.brd; commit 5c4644c7acc1 header geometry", "url": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/Adafruit%20TPS65131%20Split%20Power%20Supply.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 7, "package": "1X07_ROUND_76"}],
        "boardSha256": "27b631085261bb1109804e20faf77a6d89c538969a495f2cc7b1feb885ee0583"
      },
      "bodyRegions": [
        {"x": -9.525, "y": -13.97, "width": 19.05, "height": 27.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6280",
    "name": "Adafruit TPS65131 Split Power Supply Boost Converter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6280",
    "revision": "EAGLE Adafruit TPS65131 Split Power Supply.brd; commit 5c4644c7acc1",
    "category": "Power",
    "board": {
      "width": 19.05,
      "height": 27.94,
      "color": "#246545",
      "outline": "M-9.525 11.43A2.54 2.54 0 0 0 -6.985 13.97L6.985 13.97A2.54 2.54 0 0 0 9.525 11.43L9.525 -11.43A2.54 2.54 0 0 0 6.985 -13.97L-6.985 -13.97A2.54 2.54 0 0 0 -9.525 -11.43L-9.525 11.43Z"
    },
    "contacts": assets["adafruit-module-6280"]["contacts"],
    "holes": [
      {
        "x": -6.985,
        "y": -11.43,
        "drill": 2.5
      },
      {
        "x": 6.985,
        "y": -11.43,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6280"]["artwork"],
    "backArtwork": assets["adafruit-module-6280"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6280"]["provenance"],
    "internalConnections": [
      [
        "jp2-2",
        "jp2-4",
        "jp2-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6280"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/Adafruit%20TPS65131%20Split%20Power%20Supply.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/Adafruit%20TPS65131%20Split%20Power%20Supply.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6280",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6280",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6280. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.078999999999999,
      -8.895999999999999,
      9.025,
      8.981
    ]
  },
  {
    "id": "adafruit-module-1400",
    "mountingReview": {
      "contactIds": ["cn1-1", "cn1-2", "cn1-3", "cn1-4", "cn2-1", "cn2-2", "cn2-3", "cn2-4"],
      "source": {"label": "Adafruit ADA1400: EAGLE Adafruit Power Switch.brd; commit 6013b8b9aa67 header geometry", "url": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/Adafruit%20Power%20Switch.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "CN1", "count": 4, "package": "1X04-CLEANBIG"}, {"id": "CN2", "count": 4, "package": "1X04-CLEANBIG"}],
        "boardSha256": "ecd6831c8ee5282f05be4e9cb793bfcc77007b54dd919f670d3c1d8fa5444d8e"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -8.89, "width": 20.32, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1400",
    "name": "Adafruit Push-button Power Switch Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1400",
    "revision": "EAGLE Adafruit Power Switch.brd; commit 6013b8b9aa67",
    "category": "Power",
    "board": {
      "width": 20.32,
      "height": 17.78,
      "color": "#246545",
      "outline": "M8.255 -8.89A1.905 1.905 0 0 1 10.16 -6.985L10.16 6.985A1.905 1.905 0 0 1 8.255 8.89L-8.255 8.89A1.905 1.905 0 0 1 -10.16 6.985L-10.16 -6.985A1.905 1.905 0 0 1 -8.255 -8.89L8.255 -8.89Z"
    },
    "contacts": assets["adafruit-module-1400"]["contacts"],
    "holes": [
      {
        "x": -8.128,
        "y": -6.858,
        "drill": 2.8
      },
      {
        "x": -8.128,
        "y": 6.858,
        "drill": 2.8
      },
      {
        "x": 8.128,
        "y": -6.858,
        "drill": 2.8
      },
      {
        "x": 8.128,
        "y": 6.858,
        "drill": 2.8
      },
      {
        "x": -4.4958,
        "y": 0,
        "drill": 1.8034
      },
      {
        "x": 4.4958,
        "y": 0,
        "drill": 1.8034
      }
    ],
    "artwork": assets["adafruit-module-1400"]["artwork"],
    "backArtwork": assets["adafruit-module-1400"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1400"]["provenance"],
    "internalConnections": [
      [
        "cn1-1",
        "cn2-1"
      ],
      [
        "cn1-2",
        "cn2-2"
      ],
      [
        "cn1-3",
        "cn2-3"
      ],
      [
        "cn1-4",
        "cn2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1400"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/Adafruit%20Power%20Switch.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/Adafruit%20Power%20Switch.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1400",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1400",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1400. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.0344,
      -6.8,
      6.009,
      7.119
    ],
    "backArtworkBounds": [
      -6.517,
      -6.136,
      6.517,
      6.136
    ]
  },
  {
    "id": "adafruit-module-6359",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9"],
      "source": {"label": "Adafruit ADA6359: EAGLE Adafruit LM73100 Ideal Diode Breakout.brd; commit eb584e823d1e header geometry", "url": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/Adafruit%20LM73100%20Ideal%20Diode%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 9, "package": "1X09_ROUND_70"}],
        "boardSha256": "f3abf44de03a19922ef722be0eccb6d041af09243ae28b32da3063801916626f"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6359",
    "name": "Adafruit LM73100 23V 5A Max Ideal Diode Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6359",
    "revision": "EAGLE Adafruit LM73100 Ideal Diode Breakout.brd; commit eb584e823d1e",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-10.16 8.89A2.54 2.54 0 0 1 -12.7 6.35L-12.7 -6.35A2.54 2.54 0 0 1 -10.16 -8.89L10.16 -8.89A2.54 2.54 0 0 1 12.7 -6.35L12.7 6.35A2.54 2.54 0 0 1 10.16 8.89L-10.16 8.89Z"
    },
    "contacts": assets["adafruit-module-6359"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.604,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.604,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6359"]["artwork"],
    "backArtwork": assets["adafruit-module-6359"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6359"]["provenance"],
    "internalConnections": [
      [
        "x1-1",
        "x2-2",
        "jp1-8"
      ],
      [
        "x1-2",
        "jp1-9"
      ],
      [
        "x2-1",
        "jp1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6359"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/Adafruit%20LM73100%20Ideal%20Diode%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/Adafruit%20LM73100%20Ideal%20Diode%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6359",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6359",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6359. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.53,
      -6.428,
      12.53,
      3.9515
    ],
    "backArtworkBounds": [
      2.1189999999999998,
      -7.025,
      5.501,
      -4.913
    ]
  },
  {
    "id": "adafruit-module-5649",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5"],
      "source": {"label": "Adafruit ADA5649: EAGLE Adafruit STEMMA QT Booster Breakout.brd; commit 13637316890d header geometry", "url": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/Adafruit%20STEMMA%20QT%20Booster%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_76"}, {"id": "JP3", "count": 5, "package": "1X05_ROUND_76"}],
        "boardSha256": "db3f974e5fa415078567784a426c3f02720560b0b041824ea5efc6fa1a2bc4f4"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5649",
    "name": "Adafruit QT 3V to 5V Level Booster Breakout - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5649",
    "revision": "EAGLE Adafruit STEMMA QT Booster Breakout.brd; commit 13637316890d",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35Z"
    },
    "contacts": assets["adafruit-module-5649"]["contacts"],
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
    "artwork": assets["adafruit-module-5649"]["artwork"],
    "backArtwork": assets["adafruit-module-5649"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5649"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "jp2-2",
        "jp3-2"
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
        "jp2-1",
        "jp3-1"
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
        "url": "https://www.adafruit.com/product/5649"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/Adafruit%20STEMMA%20QT%20Booster%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/Adafruit%20STEMMA%20QT%20Booster%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5649",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5649",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5649. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.764,
      12.159,
      4.123
    ],
    "backArtworkBounds": [
      -7.025,
      0.722,
      7.66,
      4.231
    ]
  },
  {
    "id": "adafruit-module-6516",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6516: EAGLE Adafruit GP8403 Breakout Board rev B.brd; commit e1326df4fb03 header geometry", "url": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/Adafruit%20GP8403%20Breakout%20Board%20rev%20B.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "4e7fcc3098182dfa155d00224cb4a088911280e6c1dfa19ee7577d6582f2b53f"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -11.43, "width": 25.4, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6516",
    "name": "Adafruit GP8403 Breakout Board I2C DAC with 12V Booster + NVM",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6516",
    "revision": "EAGLE Adafruit GP8403 Breakout Board rev B.brd; commit e1326df4fb03",
    "category": "Audio",
    "board": {
      "width": 25.4,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-12.7 8.89A2.54 2.54 0 0 0 -10.16 11.43L10.16 11.43A2.54 2.54 0 0 0 12.7 8.89L12.7 -8.89A2.54 2.54 0 0 0 10.16 -11.43L-10.16 -11.43A2.54 2.54 0 0 0 -12.7 -8.89L-12.7 8.89Z"
    },
    "contacts": assets["adafruit-module-6516"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6516"]["artwork"],
    "backArtwork": assets["adafruit-module-6516"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6516"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-4"
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
      ],
      [
        "jp1-5",
        "jp2-3"
      ],
      [
        "jp1-6",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6516"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/Adafruit%20GP8403%20Breakout%20Board%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/Adafruit%20GP8403%20Breakout%20Board%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6516",
      "status": "Official Adafruit stock feed reported 99 available.",
      "sku": "ADA6516",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "99"
    },
    "description": "Adafruit ADA6516. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -10.225,
      12.286,
      6.555
    ],
    "backArtworkBounds": [
      -4.231,
      0.468,
      5.628,
      3.85
    ]
  },
  {
    "id": "adafruit-module-259",
    "sku": "ADA259",
    "name": "USB LiIon/LiPoly charger",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/259",
    "revision": "EAGLE Adafruit USB LiIon-LiPoly Charger.brd; commit e8bcaf9566ca",
    "category": "Power",
    "board": {
      "width": 35,
      "height": 35,
      "color": "#246545",
      "outline": "M-17.5 -14.5A3.0 3.0 0 0 1 -14.5 -17.5L14.5 -17.5A2.9999 2.9999 0 0 1 17.5 -14.5L17.5 14.5A3.0 3.0 0 0 1 14.5 17.5L-14.5 17.5A2.9999 2.9999 0 0 1 -17.5 14.5L-17.5 -14.5Z"
    },
    "contacts": assets["adafruit-module-259"]["contacts"],
    "holes": [
      {
        "x": 2.2,
        "y": -11.754,
        "drill": 1
      },
      {
        "x": -2.2,
        "y": -11.754,
        "drill": 1
      },
      {
        "x": 14.5,
        "y": 14.5,
        "drill": 2
      },
      {
        "x": 14.5,
        "y": -14.5,
        "drill": 2
      },
      {
        "x": -14.5,
        "y": -14.5,
        "drill": 2
      },
      {
        "x": -14.5,
        "y": 14.5,
        "drill": 2
      }
    ],
    "artwork": assets["adafruit-module-259"]["artwork"],
    "backArtwork": assets["adafruit-module-259"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-259"]["provenance"],
    "internalConnections": [
      [
        "cn1-vbus",
        "jp1-2"
      ],
      [
        "cn1-gnd",
        "cn2-1",
        "cn3-1",
        "jp3-1",
        "jp5-1",
        "jp1-1"
      ],
      [
        "cn2-2",
        "cn3-2",
        "jp3-2",
        "jp5-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/259"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/Adafruit%20USB%20LiIon-LiPoly%20Charger.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/Adafruit%20USB%20LiIon-LiPoly%20Charger.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/259",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA259",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA259. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.524,
      -17.394,
      11.051,
      16.7985
    ]
  },
  {
    "id": "adafruit-module-5882",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5882: EAGLE Adafruit DC Power BFF.brd; commit de89d2fa7b7c header geometry", "url": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/Adafruit%20DC%20Power%20BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_ROUND_76"}, {"id": "JP3", "count": 7, "package": "1X07_ROUND_76"}],
        "boardSha256": "3d5bd469bd08190ebcc1980499bac0fad6b8374cd449b1a1a917674ec6f3758a"
      },
      "bodyRegions": [
        {"x": -15.24, "y": -10.414, "width": 30.48, "height": 20.828},
        {"x": -4.54, "y": -16.061, "width": 9.0, "height": 14.204}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5882",
    "name": "Adafruit DC Power BFF Add-On for QT Py",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5882",
    "revision": "EAGLE Adafruit DC Power BFF.brd; commit de89d2fa7b7c",
    "category": "Power",
    "board": {
      "width": 30.48,
      "height": 20.828,
      "color": "#246545",
      "outline": "M-8.89 7.874A2.54 2.54 0 0 0 -6.35 10.414L6.35 10.414A2.670022 2.670022 0 0 0 8.89 7.62L8.89 6.35L10.16 6.35L10.16 10.414L15.24 10.414L15.24 -10.414L10.16 -10.414L10.16 -6.35L8.89 -6.35L8.89 -7.747A2.54 2.54 0 0 0 6.35 -10.287L-6.35 -10.287A2.54 2.54 0 0 0 -8.89 -7.747L-8.89 -6.35L-10.16 -6.35L-10.16 -10.414L-15.24 -10.414L-15.24 10.414L-10.16 10.414L-10.16 6.35L-8.89 6.35L-8.89 7.874Z"
    },
    "contacts": assets["adafruit-module-5882"]["contacts"],
    "holes": [
      {
        "x": -9.144,
        "y": -4.318,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": -4.826,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": -5.334,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": -5.842,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": 5.842,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": 5.334,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": 4.826,
        "drill": 0.3
      },
      {
        "x": -9.144,
        "y": 4.318,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": -4.318,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": -4.826,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": -5.334,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": -5.842,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": 5.842,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": 5.334,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": 4.826,
        "drill": 0.3
      },
      {
        "x": 9.144,
        "y": 4.318,
        "drill": 0.3
      },
      {
        "x": -12.7,
        "y": -7.874,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": 7.874,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": -7.874,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": 7.874,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5882"]["artwork"],
    "backArtwork": assets["adafruit-module-5882"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5882"]["provenance"],
    "internalConnections": [
      [
        "jp3-6",
        "x1-gnd",
        "x1-gndbreak",
        "j1-1",
        "jp5-1"
      ],
      [
        "x1-pwr",
        "j1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5882"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/Adafruit%20DC%20Power%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/Adafruit%20DC%20Power%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5882",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5882",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5882. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.437,
      -16.101,
      6.047,
      10.244
    ]
  },
  {
    "id": "adafruit-module-6106",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8"],
      "source": {"label": "Adafruit ADA6106: EAGLE Adafruit bq25185 with 5V Boost Breakout.brd; commit 2ce979f3dec5 header geometry", "url": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/Adafruit%20bq25185%20with%205V%20Boost%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "653b8636b76a9f31950635950c72c748811e7b3d7258f7a7b1a99ce2cabc7708"
      },
      "bodyRegions": [
        {"x": -14.605, "y": -9.525, "width": 29.21, "height": 19.05},
        {"x": -15.748, "y": -4.47, "width": 7.35, "height": 8.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6106",
    "name": "Adafruit bq25185 USB / DC / Solar Charger with 5V Boost Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6106",
    "revision": "EAGLE Adafruit bq25185 with 5V Boost Breakout.brd; commit 2ce979f3dec5",
    "category": "Power",
    "board": {
      "width": 29.21,
      "height": 19.05,
      "color": "#246545",
      "outline": "M12.065 -9.525A2.54 2.54 0 0 1 14.605 -6.985L14.605 7.112A2.477314 2.477314 0 0 1 12.065 9.525L-12.065 9.525A2.54 2.54 0 0 1 -14.605 6.985L-14.605 -6.985A2.54 2.54 0 0 1 -12.065 -9.525L12.065 -9.525Z"
    },
    "contacts": assets["adafruit-module-6106"]["contacts"],
    "holes": [
      {
        "x": -9.468,
        "y": 2.89,
        "drill": 0.65
      },
      {
        "x": -9.468,
        "y": -2.89,
        "drill": 0.65
      },
      {
        "x": 12.065,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": 12.065,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -12.065,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": -12.065,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6106"]["artwork"],
    "backArtwork": assets["adafruit-module-6106"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6106"]["provenance"],
    "internalConnections": [
      [
        "x2-a1b12",
        "x2-b1a12",
        "vbat-1",
        "vbat-nc1",
        "vbat-nc2",
        "jp3-5",
        "x1-1"
      ],
      [
        "x2-a4b9",
        "x2-b4a9",
        "jp3-2"
      ],
      [
        "x2-b7",
        "x2-a7",
        "jp3-3"
      ],
      [
        "x2-a6",
        "x2-b6",
        "jp3-4"
      ],
      [
        "vbat-2",
        "jp3-6"
      ],
      [
        "jp3-7",
        "x1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6106"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/Adafruit%20bq25185%20with%205V%20Boost%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/Adafruit%20bq25185%20with%205V%20Boost%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6106",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6106",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6106. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.787999999999998,
      -9.4575,
      14.435,
      5.0815
    ],
    "backArtworkBounds": [
      -9.184,
      -3.469,
      -7.072,
      -0.087
    ]
  },
  {
    "id": "adafruit-module-6092",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8"],
      "source": {"label": "Adafruit ADA6092: EAGLE Adafruit bq25185 with 3.3V Output.brd; commit a28ea1355e38 header geometry", "url": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/Adafruit%20bq25185%20with%203.3V%20Output.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "1173310ae09d125c07f7315628f67d6e1f11320b3d804b510aa6ba301232f99c"
      },
      "bodyRegions": [
        {"x": -14.605, "y": -9.525, "width": 29.21, "height": 19.05},
        {"x": -15.748, "y": -4.47, "width": 7.35, "height": 8.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6092",
    "name": "Adafruit bq25185 USB / DC / Solar Charger with 3.3V Buck Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6092",
    "revision": "EAGLE Adafruit bq25185 with 3.3V Output.brd; commit a28ea1355e38",
    "category": "Power",
    "board": {
      "width": 29.21,
      "height": 19.05,
      "color": "#246545",
      "outline": "M12.065 -9.525A2.54 2.54 0 0 1 14.605 -6.985L14.605 7.112A2.477314 2.477314 0 0 1 12.065 9.525L-12.065 9.525A2.54 2.54 0 0 1 -14.605 6.985L-14.605 -6.985A2.54 2.54 0 0 1 -12.065 -9.525L12.065 -9.525Z"
    },
    "contacts": assets["adafruit-module-6092"]["contacts"],
    "holes": [
      {
        "x": -9.468,
        "y": 2.89,
        "drill": 0.65
      },
      {
        "x": -9.468,
        "y": -2.89,
        "drill": 0.65
      },
      {
        "x": 12.065,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": 12.065,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -12.065,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": -12.065,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6092"]["artwork"],
    "backArtwork": assets["adafruit-module-6092"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6092"]["provenance"],
    "internalConnections": [
      [
        "x2-a1b12",
        "x2-b1a12",
        "vbat-1",
        "vbat-nc1",
        "vbat-nc2",
        "jp2-2",
        "jp3-5"
      ],
      [
        "x2-a4b9",
        "x2-b4a9",
        "jp3-2"
      ],
      [
        "x2-b7",
        "x2-a7",
        "jp3-3"
      ],
      [
        "x2-a6",
        "x2-b6",
        "jp3-4"
      ],
      [
        "vbat-2",
        "jp3-6"
      ],
      [
        "jp2-3",
        "jp3-7"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6092"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/Adafruit%20bq25185%20with%203.3V%20Output.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/Adafruit%20bq25185%20with%203.3V%20Output.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6092",
      "status": "Official Adafruit stock feed reported 44 available.",
      "sku": "ADA6092",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "44"
    },
    "description": "Adafruit ADA6092. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.787999999999998,
      -9.203,
      13.4,
      5.0815
    ],
    "backArtworkBounds": [
      -9.184,
      -3.469,
      -7.072,
      -0.087
    ]
  },
];
