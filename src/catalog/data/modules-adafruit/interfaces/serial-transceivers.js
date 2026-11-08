import assets from "./serial-transceivers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5708",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7"],
      "source": {"label": "Adafruit ADA5708: EAGLE Adafruit CAN Pal Breakout.brd; commit 56618b3a5316 header geometry", "url": "https://github.com/adafruit/Adafruit-CAN-Pal-PCB/blob/56618b3a53162ce48872514be044eab033ed33ef/Adafruit%20CAN%20Pal%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 7, "package": "1X07_ROUND_70"}],
        "boardSha256": "c4465ef10bc37959d6d2b6f4ae72526831b1785e7a1cf8acf00d8842063f69ae"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -10.16, "width": 20.32, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5708",
    "name": "Adafruit CAN Pal - CAN Bus Transceiver",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5708",
    "revision": "EAGLE Adafruit CAN Pal Breakout.brd; commit 56618b3a5316",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-10.16 7.62A2.54 2.54 0 0 0 -7.62 10.16L7.62 10.16A2.54 2.54 0 0 0 10.16 7.62L10.16 -7.62A2.54 2.54 0 0 0 7.62 -10.16L-7.62 -10.16A2.54 2.54 0 0 0 -10.16 -7.62L-10.16 7.62Z"
    },
    "contacts": assets["adafruit-module-5708"]["contacts"],
    "holes": [
      {
        "x": 6.707,
        "y": 1.651,
        "drill": 1
      },
      {
        "x": 3.707,
        "y": 1.651,
        "drill": 1
      },
      {
        "x": -7.62,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": -7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5708"]["artwork"],
    "backArtwork": assets["adafruit-module-5708"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5708"]["provenance"],
    "internalConnections": [
      [
        "x4-1",
        "jp2-1"
      ],
      [
        "x4-2",
        "jp2-6"
      ],
      [
        "x4-3",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5708"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CAN-Pal-PCB/blob/56618b3a53162ce48872514be044eab033ed33ef/Adafruit%20CAN%20Pal%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CAN-Pal-PCB/blob/56618b3a53162ce48872514be044eab033ed33ef/Adafruit%20CAN%20Pal%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CAN-Pal-PCB/blob/56618b3a53162ce48872514be044eab033ed33ef/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5708",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5708",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5708. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.491,
      -9.989999999999998,
      8.847,
      5.412
    ]
  },
  {
    "id": "adafruit-module-5988",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12"],
      "source": {"label": "Adafruit ADA5988: EAGLE Adafruit RS-232 Full Pinout Level-Shifter Breakout.brd; commit 63c6200bb3ef header geometry", "url": "https://github.com/adafruit/Adafruit-RS-232-Level-Shifter-Breakout-PCB/blob/63c6200bb3ef17d491089cfa6441b1810d79bb20/Adafruit%20RS-232%20Full%20Pinout%20Level-Shifter%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 12, "package": "1X12_ROUND_76MIL"}],
        "boardSha256": "6a7b35ef909f5a2d243c326c34db3957aaa01275bf2aac8e0c749ff18162e870"
      },
      "bodyRegions": [
        {"x": -15.875, "y": -14.6685, "width": 31.75, "height": 29.337},
        {"x": -15.494, "y": -21.1455, "width": 30.988, "height": 21.082}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5988",
    "name": "Adafruit RS-232 Full Pinout Level-Shifter Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5988",
    "revision": "EAGLE Adafruit RS-232 Full Pinout Level-Shifter Breakout.brd; commit 63c6200bb3ef",
    "category": "Interfaces",
    "board": {
      "width": 31.75,
      "height": 29.337,
      "color": "#246545",
      "outline": "M-15.875 12.1285A2.54 2.54 0 0 0 -13.335 14.6685L13.335 14.6685A2.54 2.54 0 0 0 15.875 12.1285L15.875 -14.6685L-15.875 -14.6685L-15.875 12.1285Z"
    },
    "contacts": assets["adafruit-module-5988"]["contacts"],
    "holes": [
      {
        "x": -12.065,
        "y": 3.2385,
        "drill": 3
      },
      {
        "x": 12.065,
        "y": 3.2385,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-5988"]["artwork"],
    "backArtwork": assets["adafruit-module-5988"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5988"]["provenance"],
    "internalConnections": [
      [
        "jp2-2",
        "x2-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5988"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RS-232-Level-Shifter-Breakout-PCB/blob/63c6200bb3ef17d491089cfa6441b1810d79bb20/Adafruit%20RS-232%20Full%20Pinout%20Level-Shifter%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RS-232-Level-Shifter-Breakout-PCB/blob/63c6200bb3ef17d491089cfa6441b1810d79bb20/Adafruit%20RS-232%20Full%20Pinout%20Level-Shifter%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RS-232-Level-Shifter-Breakout-PCB/blob/63c6200bb3ef17d491089cfa6441b1810d79bb20/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5988",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5988",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5988. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.533999999999999,
      -21.185499999999998,
      15.534,
      9.59
    ]
  },
  {
    "id": "adafruit-module-5987",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA5987: EAGLE Adafruit RS232 Pal.brd; commit 653d1bb7c6cf header geometry", "url": "https://github.com/adafruit/Adafruit-RS232-Pal-PCB/blob/653d1bb7c6cf2d9efe381b85ff275bf0feefdb17/Adafruit%20RS232%20Pal.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "8718489dc93e19944ca749e7599744b31d8354ba46740e002836b0aa80a73dea"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -10.16, "width": 17.78, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5987",
    "name": "Adafruit RS232 Pal - Two Channel UART to RS-232 Level Shifters",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5987",
    "revision": "EAGLE Adafruit RS232 Pal.brd; commit 653d1bb7c6cf",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-6.35 -10.16A2.54 2.54 0 0 0 -8.89 -7.62L-8.89 7.62A2.54 2.54 0 0 0 -6.35 10.16L6.35 10.16A2.54 2.54 0 0 0 8.89 7.62L8.89 -7.62A2.54 2.54 0 0 0 6.35 -10.16L-6.35 -10.16Z"
    },
    "contacts": assets["adafruit-module-5987"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": 0,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5987"]["artwork"],
    "backArtwork": assets["adafruit-module-5987"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5987"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5987"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RS232-Pal-PCB/blob/653d1bb7c6cf2d9efe381b85ff275bf0feefdb17/Adafruit%20RS232%20Pal.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RS232-Pal-PCB/blob/653d1bb7c6cf2d9efe381b85ff275bf0feefdb17/Adafruit%20RS232%20Pal.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RS232-Pal-PCB/blob/653d1bb7c6cf2d9efe381b85ff275bf0feefdb17/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5987",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5987",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5987. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.3228,
      -5.044,
      2.3228,
      4.7005
    ]
  },
  {
    "id": "adafruit-module-5879",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "Adafruit ADA5879: EAGLE Adafruit UPDI Friend.brd; commit 606304673840 header geometry", "url": "https://github.com/adafruit/Adafruit-UPDI-Friend-PCB/blob/6063046738409ca77509f5ccce2f2b0ce72be210/Adafruit%20UPDI%20Friend.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03_ROUND_76"}],
        "boardSha256": "fe954b3bfe370788593c6de37f63a518e9ceb12089adf0d001f3a57d473cca3d"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -12.7, "width": 17.78, "height": 25.4},
        {"x": -4.47, "y": -13.589, "width": 8.94, "height": 7.35}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5879",
    "name": "Adafruit UPDI Friend - USB Serial UPDI Programmer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5879",
    "revision": "EAGLE Adafruit UPDI Friend.brd; commit 606304673840",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 25.4,
      "color": "#246545",
      "outline": "M8.89 10.16A2.54 2.54 0 0 1 6.35 12.7L-6.35 12.7A2.54 2.54 0 0 1 -8.89 10.16L-8.89 -10.795A1.905 1.905 0 0 1 -6.985 -12.7L6.985 -12.7A1.905 1.905 0 0 1 8.89 -10.795L8.89 10.16Z"
    },
    "contacts": assets["adafruit-module-5879"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -7.309,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -7.309,
        "drill": 0.65
      },
      {
        "x": -1.5,
        "y": 3.556,
        "drill": 0.9
      },
      {
        "x": 1.5,
        "y": 3.556,
        "drill": 0.9
      },
      {
        "x": 6.858,
        "y": -10.668,
        "drill": 2.2
      },
      {
        "x": -6.858,
        "y": -10.668,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-5879"]["artwork"],
    "backArtwork": assets["adafruit-module-5879"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5879"]["provenance"],
    "internalConnections": [
      [
        "x2-a1b12",
        "x2-b1a12",
        "x1-3",
        "x1-mt1",
        "x1-mt2",
        "jp1-3"
      ],
      [
        "x2-a4b9",
        "x2-b4a9"
      ],
      [
        "x2-b7",
        "x2-a7"
      ],
      [
        "x2-a6",
        "x2-b6"
      ],
      [
        "x1-2",
        "jp1-2"
      ],
      [
        "x1-1",
        "jp1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5879"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-UPDI-Friend-PCB/blob/6063046738409ca77509f5ccce2f2b0ce72be210/Adafruit%20UPDI%20Friend.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-UPDI-Friend-PCB/blob/6063046738409ca77509f5ccce2f2b0ce72be210/Adafruit%20UPDI%20Friend.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-UPDI-Friend-PCB/blob/6063046738409ca77509f5ccce2f2b0ce72be210/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5879",
      "status": "Official Adafruit stock feed reported 80 available.",
      "sku": "ADA5879",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "80"
    },
    "description": "Adafruit ADA5879. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.985,
      -13.629,
      7.85,
      11.524
    ]
  },
  {
    "id": "adafruit-module-5877",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5877: EAGLE Adafruit CAN Bus BFF.brd; commit 7456bb16b65d physical insertion headers", "url": "https://github.com/adafruit/Adafruit-CAN-Bus-BFF-PCB/blob/7456bb16b65da5de6bae232dbe146e98cf4b0a5b/Adafruit%20CAN%20Bus%20BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. For castellated packages use only the inner plated round holes for the downward header; the electrically paired outer edge contacts are solderable auxiliary contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_CASTEL"}, {"id": "JP3", "count": 7, "package": "1X07_CASTEL"}],
        "castellationAliases": [{"pinId": "jp1-1c", "equivalentPinId": "jp1-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-2c", "equivalentPinId": "jp1-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-3c", "equivalentPinId": "jp1-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-4c", "equivalentPinId": "jp1-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-5c", "equivalentPinId": "jp1-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-6c", "equivalentPinId": "jp1-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-7c", "equivalentPinId": "jp1-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-1c", "equivalentPinId": "jp3-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-2c", "equivalentPinId": "jp3-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-3c", "equivalentPinId": "jp3-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-4c", "equivalentPinId": "jp3-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-5c", "equivalentPinId": "jp3-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-6c", "equivalentPinId": "jp3-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-7c", "equivalentPinId": "jp3-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}],
        "boardSha256": "696760d5bab35b52f9e3a3cc418e1bd0b9e69ab29042212dda33ae4a09c2bde9"
      },
      "rearOverhangRegions": [{"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0}, {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}],
      "bodyRegions": [
        {"x": -8.89, "y": -10.3505, "width": 17.78, "height": 20.701},
        {"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0},
        {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5877",
    "name": "Adafruit CAN Bus BFF Add-On for QT Py",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5877",
    "revision": "EAGLE Adafruit CAN Bus BFF.brd; commit 7456bb16b65d",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5877"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5877"]["artwork"],
    "backArtwork": assets["adafruit-module-5877"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5877"]["provenance"],
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
        "neo-1",
        "neo-nc1",
        "neo-nc2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5877"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CAN-Bus-BFF-PCB/blob/7456bb16b65da5de6bae232dbe146e98cf4b0a5b/Adafruit%20CAN%20Bus%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CAN-Bus-BFF-PCB/blob/7456bb16b65da5de6bae232dbe146e98cf4b0a5b/Adafruit%20CAN%20Bus%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CAN-Bus-BFF-PCB/blob/7456bb16b65da5de6bae232dbe146e98cf4b0a5b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5877",
      "status": "Official Adafruit stock feed reported 69 available.",
      "sku": "ADA5877",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "69"
    },
    "description": "Adafruit ADA5877. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.608,
      -9.818499999999998,
      5.12,
      8.8455
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
];
