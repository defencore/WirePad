import assets from "./lighting-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-1312",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp2-1", "jp2-2", "jp2-3"],
      "source": {"label": "Adafruit ADA1312: EAGLE Adafruit_Breadboard_NeoPixel.brd; commit fcb0f12bb621 header geometry", "url": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/Adafruit_Breadboard_NeoPixel.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03-CLEANBIG"}, {"id": "JP2", "count": 3, "package": "1X03-CLEANBIG"}],
        "boardSha256": "0992ebc56e332a783d2c930136177dc28b54698957433717e1587d3e701c7e26"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -5.08, "width": 12.7, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1312",
    "name": "Breadboard-friendly RGB Smart NeoPixel - Pack of 5",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1312",
    "revision": "EAGLE Adafruit_Breadboard_NeoPixel.brd; commit fcb0f12bb621",
    "category": "Indicators",
    "board": {
      "width": 12.7,
      "height": 10.16,
      "color": "#246545",
      "outline": "M3.81 -5.08A2.54 2.54 0 0 1 6.35 -2.54L6.35 2.54A2.54 2.54 0 0 1 3.81 5.08L-3.81 5.08A2.54 2.54 0 0 1 -6.35 2.54L-6.35 -2.54A2.54 2.54 0 0 1 -3.81 -5.08L3.81 -5.08Z"
    },
    "contacts": assets["adafruit-module-1312"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -3.81,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": 3.81,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-1312"]["artwork"],
    "backArtwork": assets["adafruit-module-1312"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1312"]["provenance"],
    "internalConnections": [
      [
        "jp1-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "jp2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1312"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/Adafruit_Breadboard_NeoPixel.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/Adafruit_Breadboard_NeoPixel.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1312",
      "status": "Official Adafruit stock feed reported 15 available.",
      "sku": "ADA1312",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "15"
    },
    "description": "Adafruit ADA1312. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. One module from the commercial multi-pack is illustrated.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.3930000000000002,
      -4.333,
      3.686,
      4.333
    ]
  },
  {
    "id": "adafruit-module-5201",
    "mountingReview": {
      "contactIds": ["jp5-1", "jp5-2", "jp5-3", "jp5-4", "jp5-5", "jp5-6", "jp5-7"],
      "source": {"label": "Adafruit ADA5201: EAGLE Adafruit IS31FL3741 Matrix.brd; commit 07d4cb6a19e6 header geometry", "url": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/Adafruit%20IS31FL3741%20Matrix.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP5", "count": 7, "package": "1X07_ROUND_76"}],
        "boardSha256": "2e2d6821b4e157d6a6725c70ff019c5fb55605eaea5eff173b8e027174b90c32"
      },
      "bodyRegions": [
        {"x": -19.5, "y": -25.54, "width": 39, "height": 51.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5201",
    "name": "Adafruit IS31FL3741 13x9 PWM RGB LED Matrix Driver",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5201",
    "revision": "EAGLE Adafruit IS31FL3741 Matrix.brd; commit 07d4cb6a19e6",
    "category": "Indicators",
    "board": {
      "width": 39,
      "height": 51.08,
      "color": "#246545",
      "outline": "M19.5 23.0A2.54 2.54 0 0 1 16.96 25.54L-16.96 25.54A2.54 2.54 0 0 1 -19.5 23.0L-19.5 -23.0A2.54 2.54 0 0 1 -16.96 -25.54L16.96 -25.54A2.54 2.54 0 0 1 19.5 -23.0L19.5 23.0Z"
    },
    "contacts": assets["adafruit-module-5201"]["contacts"],
    "holes": [
      {
        "x": -17,
        "y": -15.54,
        "drill": 2.5
      },
      {
        "x": 17,
        "y": -15.54,
        "drill": 2.5
      },
      {
        "x": -17,
        "y": 22.96,
        "drill": 2.5
      },
      {
        "x": 17,
        "y": 22.96,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5201"]["artwork"],
    "backArtwork": assets["adafruit-module-5201"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5201"]["provenance"],
    "internalConnections": [
      [
        "jp5-1",
        "conn1-2",
        "conn2-2"
      ],
      [
        "jp5-2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2"
      ],
      [
        "jp5-3",
        "conn1-4",
        "conn2-4"
      ],
      [
        "jp5-4",
        "conn1-3",
        "conn2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5201"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/Adafruit%20IS31FL3741%20Matrix.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/Adafruit%20IS31FL3741%20Matrix.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5201",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5201",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5201. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -18.233,
      -24.666,
      19.14,
      20.2
    ],
    "backArtworkBounds": [
      8.218,
      -20.73,
      11.627,
      -12.503
    ]
  },
  {
    "id": "adafruit-module-4886",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp7-1", "jp7-2", "jp7-3", "jp7-4", "jp7-5", "jp7-6", "jp7-7", "jp7-8", "jp7-9", "jp7-10", "jp7-11"],
      "source": {"label": "Adafruit ADA4886: EAGLE Adafruit AW9523.brd; commit 080a15c70db8 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/Adafruit%20AW9523.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11_ROUND"}, {"id": "JP7", "count": 11, "package": "1X11_ROUND"}],
        "duplicateHeaderContacts": [{"pinId": "jp2-1", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-2", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-3", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-4", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-5", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-6", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-7", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-8", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-9", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-10", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-11", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp3-1", "equivalentPinId": "jp1-1", "connector": "JP3", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp3-2", "equivalentPinId": "jp1-1", "connector": "JP3", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp3-3", "equivalentPinId": "jp1-1", "connector": "JP3", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp3-4", "equivalentPinId": "jp1-1", "connector": "JP3", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp3-5", "equivalentPinId": "jp1-1", "connector": "JP3", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "3dec4c7ca674817b9b1a5f79dbcd7cabf7c74e58928bf5e64bc0a95a8b9831b9"
      },
      "bodyRegions": [
        {"x": -19.05, "y": -8.89, "width": 38.1, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4886",
    "name": "Adafruit AW9523 GPIO Expander and LED Driver Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4886",
    "revision": "EAGLE Adafruit AW9523.brd; commit 080a15c70db8",
    "category": "Indicators",
    "board": {
      "width": 38.1,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-19.05 6.35A2.54 2.54 0 0 0 -16.51 8.89L16.51 8.89A2.54 2.54 0 0 0 19.05 6.35L19.05 -6.35A2.54 2.54 0 0 0 16.51 -8.89L-16.51 -8.89A2.54 2.54 0 0 0 -19.05 -6.35L-19.05 6.35Z"
    },
    "contacts": assets["adafruit-module-4886"]["contacts"],
    "holes": [
      {
        "x": -16.51,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -16.51,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4886"]["artwork"],
    "backArtwork": assets["adafruit-module-4886"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4886"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1",
        "jp2-1",
        "jp2-2",
        "jp2-3",
        "jp2-4",
        "jp2-5",
        "jp2-6",
        "jp2-7",
        "jp2-8",
        "jp2-9",
        "jp2-10",
        "jp2-11",
        "jp3-1",
        "jp3-2",
        "jp3-3",
        "jp3-4",
        "jp3-5"
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
        "jp1-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4886"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/Adafruit%20AW9523.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/Adafruit%20AW9523.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4886",
      "status": "Official Adafruit stock feed reported 20 available.",
      "sku": "ADA4886",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "20"
    },
    "description": "Adafruit ADA4886. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -18.509,
      -3.14,
      18.509,
      4.282
    ]
  },
  {
    "id": "adafruit-module-5766",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp2-1", "jp2-2", "jp3-1", "jp3-2", "jp3-3"],
      "source": {"label": "Adafruit ADA5766: EAGLE Adafruit NeoDriver STEMMA QT.brd; commit aaaae6964cf5 header geometry", "url": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/Adafruit%20NeoDriver%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP2", "count": 2, "package": "1X02_ROUND"}, {"id": "JP3", "count": 3, "package": "1X03_ROUND"}],
        "boardSha256": "9b0f6e4a0ed9a4b5eccdef8c1cf990e34c6304df0aeb127fabdbd6e85d994bc1"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5766",
    "name": "Adafruit NeoDriver - I2C to NeoPixel Driver Board - Stemma QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5766",
    "revision": "EAGLE Adafruit NeoDriver STEMMA QT.brd; commit aaaae6964cf5",
    "category": "Indicators",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#246545",
      "outline": "M12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.033 12.7A2.604274 2.604274 0 0 0 12.7 10.16L12.7 -10.16Z"
    },
    "contacts": assets["adafruit-module-5766"]["contacts"],
    "holes": [
      {
        "x": -10.795,
        "y": -10.16,
        "drill": 2.032
      },
      {
        "x": 10.795,
        "y": -10.16,
        "drill": 2.032
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
      },
      {
        "x": -10.16,
        "y": -2.54,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -2.54,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5766"]["artwork"],
    "backArtwork": assets["adafruit-module-5766"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5766"]["provenance"],
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
        "jp2-1",
        "jp3-3",
        "x2-1",
        "x3-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ],
      [
        "jp1-5",
        "jp3-2",
        "x2-2"
      ],
      [
        "jp2-2",
        "jp3-1",
        "x2-3",
        "x3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5766"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/Adafruit%20NeoDriver%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/Adafruit%20NeoDriver%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5766",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5766",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5766. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -11.26,
      12.286,
      7.84
    ],
    "backArtworkBounds": [
      -8.040999999999999,
      -0.548,
      -1.611,
      2.834
    ]
  },
  {
    "id": "adafruit-module-5646",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5646: EAGLE Adafruit_5x5_NeoPixel_Grid_BFF.brd; commit defbba9accab physical insertion headers", "url": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/Adafruit_5x5_NeoPixel_Grid_BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. For castellated packages use only the inner plated round holes for the downward header; the electrically paired outer edge contacts are solderable auxiliary contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_CASTEL"}, {"id": "JP3", "count": 7, "package": "1X07_CASTEL"}],
        "castellationAliases": [{"pinId": "jp1-1c", "equivalentPinId": "jp1-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-2c", "equivalentPinId": "jp1-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-3c", "equivalentPinId": "jp1-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-4c", "equivalentPinId": "jp1-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-5c", "equivalentPinId": "jp1-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-6c", "equivalentPinId": "jp1-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-7c", "equivalentPinId": "jp1-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-1c", "equivalentPinId": "jp3-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-2c", "equivalentPinId": "jp3-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-3c", "equivalentPinId": "jp3-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-4c", "equivalentPinId": "jp3-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-5c", "equivalentPinId": "jp3-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-6c", "equivalentPinId": "jp3-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-7c", "equivalentPinId": "jp3-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}],
        "boardSha256": "0fbc1b916d7cb9f132e1474895c906cd805705d79517aee981c949c838da50f2"
      },
      "rearOverhangRegions": [{"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0}, {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}],
      "bodyRegions": [
        {"x": -8.89, "y": -10.3505, "width": 17.78, "height": 20.701},
        {"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0},
        {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5646",
    "name": "Adafruit 5x5 NeoPixel Grid BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5646",
    "revision": "EAGLE Adafruit_5x5_NeoPixel_Grid_BFF.brd; commit defbba9accab",
    "category": "Indicators",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5646"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5646"]["artwork"],
    "backArtwork": assets["adafruit-module-5646"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5646"]["provenance"],
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
        "tp3-p-1"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5646"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/Adafruit_5x5_NeoPixel_Grid_BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5646",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5646",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5646. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.1745,
      -9.882499999999999,
      5.92,
      9.857
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-5645",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7"],
      "source": {"label": "Adafruit ADA5645: EAGLE Adafruit_NeoPixel_Driver_BFF.brd; commit eb3fc189fbd7 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/Adafruit_NeoPixel_Driver_BFF.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. For castellated packages use only the inner plated round holes for the downward header; the electrically paired outer edge contacts are solderable auxiliary contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_CASTEL"}, {"id": "JP3", "count": 7, "package": "1X07_CASTEL"}],
        "castellationAliases": [{"pinId": "jp1-1c", "equivalentPinId": "jp1-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-2c", "equivalentPinId": "jp1-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-3c", "equivalentPinId": "jp1-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-4c", "equivalentPinId": "jp1-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-5c", "equivalentPinId": "jp1-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-6c", "equivalentPinId": "jp1-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp1-7c", "equivalentPinId": "jp1-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-1c", "equivalentPinId": "jp3-1", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-2c", "equivalentPinId": "jp3-2", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-3c", "equivalentPinId": "jp3-3", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-4c", "equivalentPinId": "jp3-4", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-5c", "equivalentPinId": "jp3-5", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-6c", "equivalentPinId": "jp3-6", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}, {"pinId": "jp3-7c", "equivalentPinId": "jp3-7", "reason": "Electrically paired outer castellation; insert the package inner round header hole only."}],
        "boardSha256": "5bd5a07613ec766a277e56ce1370dcb9972db186c020e16f0d399ff65b1e57fa"
      },
      "rearOverhangRegions": [{"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0}, {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}],
      "bodyRegions": [
        {"x": -8.89, "y": -10.3505, "width": 17.78, "height": 20.701},
        {"x": -9.525, "y": -9.0, "width": 2.54, "height": 18.0},
        {"x": 6.985, "y": -9.0, "width": 2.54, "height": 18.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5645",
    "name": "Adafruit NeoPixel Driver BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5645",
    "revision": "EAGLE Adafruit_NeoPixel_Driver_BFF.brd; commit eb3fc189fbd7",
    "category": "Indicators",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5645"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5645"]["artwork"],
    "backArtwork": assets["adafruit-module-5645"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5645"]["provenance"],
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
        "jp3-7c",
        "neo-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5645"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/Adafruit_NeoPixel_Driver_BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/Adafruit_NeoPixel_Driver_BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5645",
      "status": "Official Adafruit stock feed reported 68 available.",
      "sku": "ADA5645",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "68"
    },
    "description": "Adafruit ADA5645. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.247,
      -9.564499999999999,
      5.374,
      8.6125
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
];
