import assets from "./radio-wireless-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5970",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "Adafruit ADA5970: EAGLE Adafruit TSMP96000 Code Learning IR Breakout.brd; commit 5d4562147391 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/Adafruit%20TSMP96000%20Code%20Learning%20IR%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03_OVAL"}],
        "duplicateHeaderContacts": [{"pinId": "jp2-1", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-2", "equivalentPinId": "jp1-2", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-3", "equivalentPinId": "jp1-3", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "cf7267f3f02773507de611d0d1ffe84165100fa153288bbe6e3af3811348ed14"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5970",
    "name": "Adafruit TSMP96000 \"Code Learning\" Infrared IR Receiver Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5970",
    "revision": "EAGLE Adafruit TSMP96000 Code Learning IR Breakout.brd; commit 5d4562147391",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5970"]["contacts"],
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
    "artwork": assets["adafruit-module-5970"]["artwork"],
    "backArtwork": assets["adafruit-module-5970"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5970"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp2-1"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5970"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/Adafruit%20TSMP96000%20Code%20Learning%20IR%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/Adafruit%20TSMP96000%20Code%20Learning%20IR%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5970",
      "status": "Official Adafruit stock feed reported 61 available.",
      "sku": "ADA5970",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "61"
    },
    "description": "Adafruit ADA5970. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -7.2540000000000004,
      11.453,
      7.457
    ],
    "backArtworkBounds": [
      -3.0245,
      -4.485,
      -0.849,
      3.596
    ]
  },
  {
    "id": "adafruit-module-5940",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "Adafruit ADA5940: EAGLE Adafruit TSSP77038 IR Demodulator Breakout.brd; commit 6df204dc5318 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/Adafruit%20TSSP77038%20IR%20Demodulator%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03_OVAL"}],
        "duplicateHeaderContacts": [{"pinId": "jp2-1", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-2", "equivalentPinId": "jp1-2", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-3", "equivalentPinId": "jp1-3", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "b394196f82725e438ce3c1eb84dc3d854f4c270c149f974e0841f5642436a18d"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5940",
    "name": "Adafruit TSSP77038 38KHz Infrared IR Demodulator Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5940",
    "revision": "EAGLE Adafruit TSSP77038 IR Demodulator Breakout.brd; commit 6df204dc5318",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5940"]["contacts"],
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
    "artwork": assets["adafruit-module-5940"]["artwork"],
    "backArtwork": assets["adafruit-module-5940"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5940"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp2-1"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5940"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/Adafruit%20TSSP77038%20IR%20Demodulator%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/Adafruit%20TSSP77038%20IR%20Demodulator%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5940",
      "status": "Official Adafruit stock feed reported 59 available.",
      "sku": "ADA5940",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "59"
    },
    "description": "Adafruit ADA5940. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -7.203,
      11.319,
      7.457
    ],
    "backArtworkBounds": [
      -3.0245,
      -4.485,
      -0.849,
      3.596
    ]
  },
  {
    "id": "adafruit-module-5939",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5"],
      "source": {"label": "Adafruit ADA5939: EAGLE Adafruit Infrared IR Remote Receiver.brd; commit ead85073a5f1 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/Adafruit%20Infrared%20IR%20Remote%20Receiver.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP3", "count": 5, "package": "1X05_ROUND_70"}],
        "duplicateHeaderContacts": [{"pinId": "jp1-1", "equivalentPinId": "jp3-3", "connector": "JP1", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp1-2", "equivalentPinId": "jp3-4", "connector": "JP1", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp1-3", "equivalentPinId": "jp3-5", "connector": "JP1", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "f50fbfcc07ef00a7bebb32add1226649072f2015b76425949dec7008db5214f9"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78},
        {"x": -0.86, "y": -9.658, "width": 6.8, "height": 4.1}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5939",
    "name": "Adafruit Infrared IR Remote Receiver - STEMMA JST PH 2mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5939",
    "revision": "EAGLE Adafruit Infrared IR Remote Receiver.brd; commit ead85073a5f1",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 1.397L10.922 1.397L10.922 -1.778L12.7 -3.556L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5939"]["contacts"],
    "holes": [
      {
        "x": 4.04,
        "y": -6.858,
        "drill": 0.9
      },
      {
        "x": 1.04,
        "y": -6.858,
        "drill": 0.9
      },
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
    "artwork": assets["adafruit-module-5939"]["artwork"],
    "backArtwork": assets["adafruit-module-5939"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5939"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp3-3"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp3-4"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp3-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5939"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/Adafruit%20Infrared%20IR%20Remote%20Receiver.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/Adafruit%20Infrared%20IR%20Remote%20Receiver.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5939",
      "status": "Official Adafruit stock feed reported 99 available.",
      "sku": "ADA5939",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "99"
    },
    "description": "Adafruit ADA5939. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -9.697999999999999,
      10.908,
      7.254
    ],
    "backArtworkBounds": [
      -3.215,
      -5.501,
      -1.0395,
      3.596
    ]
  },
  {
    "id": "adafruit-module-4201",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12"],
      "source": {"label": "Adafruit ADA4201: EAGLE Adafruit AirLift Breakout.brd; commit 821189f7f916 header geometry", "url": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/Adafruit%20AirLift%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 12, "package": "1X12_ROUND"}],
        "boardSha256": "0eef55dc751da3ebf41c4e466e9207e85e0dfd63fcedb1911a8e0dd2fa0088d9"
      },
      "bodyRegions": [
        {"x": -15.875, "y": -16.51, "width": 31.75, "height": 33.02}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4201",
    "name": "Adafruit AirLift – ESP32 WiFi Co-Processor Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4201",
    "revision": "EAGLE Adafruit AirLift Breakout.brd; commit 821189f7f916",
    "category": "Wireless modules",
    "board": {
      "width": 31.75,
      "height": 33.02,
      "color": "#246545",
      "outline": "M-15.875 13.97A2.54 2.54 0 0 0 -13.335 16.51L13.335 16.51A2.54 2.54 0 0 0 15.875 13.97L15.875 -13.97A2.54 2.54 0 0 0 13.335 -16.51L-13.335 -16.51A2.54 2.54 0 0 0 -15.875 -13.97L-15.875 13.97Z"
    },
    "contacts": assets["adafruit-module-4201"]["contacts"],
    "holes": [
      {
        "x": -13.335,
        "y": -13.843,
        "drill": 2.5
      },
      {
        "x": 12.827,
        "y": -13.335,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4201"]["artwork"],
    "backArtwork": assets["adafruit-module-4201"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4201"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4201"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/Adafruit%20AirLift%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/Adafruit%20AirLift%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4201",
      "status": "Official Adafruit stock feed reported 4 available.",
      "sku": "ADA4201",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "4"
    },
    "description": "Adafruit ADA4201. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.029,
      -16.349999999999998,
      15.331,
      9.8444
    ]
  },
  {
    "id": "adafruit-module-2999",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12", "jp2-13"],
      "source": {"label": "Adafruit ADA2999: EAGLE Adafruit WINC1500 Breakout.brd; commit 7384f4727943 header geometry", "url": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/Adafruit%20WINC1500%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 13, "package": "1X13_ROUND_70"}],
        "boardSha256": "81ffcbd99149ec4625ff035a58d345a8a003be531b2789d8ce4555616fec9e27"
      },
      "bodyRegions": [
        {"x": -16.51, "y": -13.97, "width": 33.02, "height": 27.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2999",
    "name": "Adafruit ATWINC1500 WiFi Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2999",
    "revision": "EAGLE Adafruit WINC1500 Breakout.brd; commit 7384f4727943",
    "category": "Wireless modules",
    "board": {
      "width": 33.02,
      "height": 27.94,
      "color": "#246545",
      "outline": "M13.97 -13.97A2.54 2.54 0 0 1 16.51 -11.43L16.51 11.43A2.54 2.54 0 0 1 13.97 13.97L-13.97 13.97A2.54 2.54 0 0 1 -16.51 11.43L-16.51 -11.43A2.54 2.54 0 0 1 -13.97 -13.97L13.97 -13.97Z"
    },
    "contacts": assets["adafruit-module-2999"]["contacts"],
    "holes": [
      {
        "x": -13.97,
        "y": -11.43,
        "drill": 2.5
      },
      {
        "x": 13.97,
        "y": -11.43,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2999"]["artwork"],
    "backArtwork": assets["adafruit-module-2999"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2999"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2999"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/Adafruit%20WINC1500%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/Adafruit%20WINC1500%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2999",
      "status": "Official Adafruit stock feed reported 90 available.",
      "sku": "ADA2999",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "90"
    },
    "description": "Adafruit ADA2999. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -15.431999999999999,
      -13.168999999999999,
      15.728,
      8.828
    ]
  },
  {
    "id": "adafruit-module-3070",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA3070: EAGLE Adafruit RFM+LoRa Breakout.brd; commit 3ad6bed6e1b4 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/Adafruit%20RFM%2BLoRa%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP3", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "7c1436eaafa74ed13a5871eb45f9e25420dd3151dfacd0a81cd1246867e30ca8"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -14.605, "width": 25.4, "height": 29.21},
        {"x": 5.461, "y": -23.6855, "width": 6.35, "height": 12.7649}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3070",
    "name": "Adafruit RFM69HCW Transceiver Radio Breakout - 868 or 915 MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3070",
    "revision": "EAGLE Adafruit RFM+LoRa Breakout.brd; commit 3ad6bed6e1b4",
    "category": "Wireless modules",
    "board": {
      "width": 25.4,
      "height": 29.21,
      "color": "#246545",
      "outline": "M12.7 12.065A2.54 2.54 0 0 1 10.16 14.605L-10.16 14.605A2.54 2.54 0 0 1 -12.7 12.065L-12.7 -12.065A2.54 2.54 0 0 1 -10.16 -14.605L12.7 -14.605L12.7 12.065Z"
    },
    "contacts": assets["adafruit-module-3070"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-3070"]["artwork"],
    "backArtwork": assets["adafruit-module-3070"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3070"]["provenance"],
    "internalConnections": [
      [
        "x1-gnd-2",
        "x1-gnd-1",
        "x1-gnd-3",
        "x1-gnd-4",
        "jp3-2"
      ],
      [
        "x1-p",
        "jp2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3070"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/Adafruit%20RFM%2BLoRa%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/Adafruit%20RFM%2BLoRa%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3070",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3070",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3070. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.2066,
      -23.7255,
      11.851,
      9.717
    ]
  },
  {
    "id": "adafruit-module-4415",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA4415: EAGLE Adafruit PA1010D Mini GPS.brd; commit 6f1d0f216b84 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/Adafruit%20PA1010D%20Mini%20GPS.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "b8cb633d4010bac22016eebd44980994894d3cd42d402ad9628180a5a48b56e8"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4415",
    "name": "Adafruit Mini GPS PA1010D - UART and I2C - STEMMA QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4415",
    "revision": "EAGLE Adafruit PA1010D Mini GPS.brd; commit 6f1d0f216b84",
    "category": "Wireless modules",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.16 12.7A2.54 2.54 0 0 0 12.7 10.16L12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16Z"
    },
    "contacts": assets["adafruit-module-4415"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -0.262,
        "drill": 3
      },
      {
        "x": -3.95,
        "y": 0,
        "drill": 1.5
      },
      {
        "x": 3.5,
        "y": 0,
        "drill": 1.5
      },
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
    "artwork": assets["adafruit-module-4415"]["artwork"],
    "backArtwork": assets["adafruit-module-4415"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-4415"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2",
        "jp2-3"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn4-1",
        "jp2-1",
        "b1--"
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4415"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/Adafruit%20PA1010D%20Mini%20GPS.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/Adafruit%20PA1010D%20Mini%20GPS.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4415",
      "status": "Official Adafruit stock feed reported 52 available.",
      "sku": "ADA4415",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "52"
    },
    "description": "Adafruit ADA4415. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.361999999999998,
      -8.379,
      12.286,
      7.913
    ],
    "backArtworkBounds": [
      -7.94,
      -7.94,
      7.64,
      8.04
    ]
  },
  {
    "id": "adafruit-module-4363",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8", "jp2-9", "jp2-10", "jp2-11", "jp2-12", "jp2-13", "jp2-14", "jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6", "jp4-7", "jp4-8", "jp4-9", "jp4-10", "jp4-11", "jp4-12", "jp4-13", "jp4-14"],
      "source": {"label": "Adafruit ADA4363: EAGLE Adafruit Airlift Bitsy Add-On.brd; commit e865b846cad8 header geometry", "url": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/Adafruit%20Airlift%20Bitsy%20Add-On.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 14, "package": "1X14_ROUND70"}, {"id": "JP4", "count": 14, "package": "1X14_ROUND70"}],
        "boardSha256": "6995df4878473bf0f659eff1ba39e56dcd1eae4a81ac63e066fd9b7a8c1496c2"
      },
      "bodyRegions": [
        {"x": -17.78, "y": -8.89, "width": 35.56, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4363",
    "name": "Adafruit AirLift Bitsy Add-On – ESP32 WiFi Co-Processor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4363",
    "revision": "EAGLE Adafruit Airlift Bitsy Add-On.brd; commit e865b846cad8",
    "category": "Wireless modules",
    "board": {
      "width": 35.56,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-17.78 7.62A1.27 1.27 0 0 0 -16.51 8.89L16.51 8.89A1.27 1.27 0 0 0 17.78 7.62L17.78 -7.62A1.27 1.27 0 0 0 16.51 -8.89L-16.51 -8.89A1.27 1.27 0 0 0 -17.78 -7.62L-17.78 7.62Z"
    },
    "contacts": assets["adafruit-module-4363"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-4363"]["artwork"],
    "backArtwork": assets["adafruit-module-4363"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4363"]["provenance"],
    "internalConnections": [
      [
        "jp2-2",
        "u5-6",
        "u5-12",
        "u5-14",
        "u5-26",
        "u5-30",
        "u5-gnd-1",
        "u5-gnd-2",
        "u5-gnd-3",
        "u5-gnd-4",
        "u5-gnd-5",
        "u5-gnd-6",
        "u5-gnd-7",
        "u5-gnd-8",
        "u5-gnd-9",
        "u5-gnd-10",
        "u5-gnd-11",
        "u5-gnd-12"
      ],
      [
        "jp2-4",
        "u5-28"
      ],
      [
        "jp2-5",
        "u5-19"
      ],
      [
        "jp2-6",
        "u5-7"
      ],
      [
        "jp4-3",
        "u5-31"
      ],
      [
        "jp4-4",
        "u5-29"
      ],
      [
        "jp4-13",
        "u5-9",
        "u5-10"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4363"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/Adafruit%20Airlift%20Bitsy%20Add-On.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/Adafruit%20Airlift%20Bitsy%20Add-On.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4363",
      "status": "Official Adafruit stock feed reported 73 available.",
      "sku": "ADA4363",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "73"
    },
    "description": "Adafruit ADA4363. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.701999999999998,
      -5.3206,
      17.815,
      6.428
    ],
    "backArtworkBounds": [
      -10.9874,
      -3.4436,
      -4.3542,
      -0.061597
    ]
  },
];
