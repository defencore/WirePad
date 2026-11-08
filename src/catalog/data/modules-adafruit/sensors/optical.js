import assets from "./optical-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4681",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4681: EAGLE Adafruit BH1750.brd; commit 0b61eb2c8c54 header geometry", "url": "https://github.com/adafruit/Adafruit-BH1750-PCB/blob/0b61eb2c8c54254a5685adc044fbf7c5ab968e56/Adafruit%20BH1750.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "4ed4f97d8e8572e3b46ce72d8d393906e768a7ba627fce5886ae792d581cd4e9"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4681",
    "name": "Adafruit BH1750 Light Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4681",
    "revision": "EAGLE Adafruit BH1750.brd; commit 0b61eb2c8c54",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4681"]["contacts"],
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
    "artwork": assets["adafruit-module-4681"]["artwork"],
    "backArtwork": assets["adafruit-module-4681"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4681"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn4-1"
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
        "url": "https://www.adafruit.com/product/4681"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-BH1750-PCB/blob/0b61eb2c8c54254a5685adc044fbf7c5ab968e56/Adafruit%20BH1750.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-BH1750-PCB/blob/0b61eb2c8c54254a5685adc044fbf7c5ab968e56/Adafruit%20BH1750.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-BH1750-PCB/blob/0b61eb2c8c54254a5685adc044fbf7c5ab968e56/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4681",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4681",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4681. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ],
    "backArtworkBounds": [
      5.294,
      0.341,
      7.406,
      3.723
    ]
  },
  {
    "id": "adafruit-module-4831",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4831: EAGLE Adafruit_LTR390.brd; commit 0f4656c2b2c2 header geometry", "url": "https://github.com/adafruit/Adafruit-LTR390-PCB/blob/0f4656c2b2c2da7860b5a74977b89a8c39999581/Adafruit_LTR390.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "4921eb471e06bf0dd4f280b84e1d7253ec15e1702759466929fdff3443cbe945"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4831",
    "name": "Adafruit LTR390 UV Light Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4831",
    "revision": "EAGLE Adafruit_LTR390.brd; commit 0f4656c2b2c2",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4831"]["contacts"],
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
    "artwork": assets["adafruit-module-4831"]["artwork"],
    "backArtwork": assets["adafruit-module-4831"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4831"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4831"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LTR390-PCB/blob/0f4656c2b2c2da7860b5a74977b89a8c39999581/Adafruit_LTR390.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LTR390-PCB/blob/0f4656c2b2c2da7860b5a74977b89a8c39999581/Adafruit_LTR390.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LTR390-PCB/blob/0f4656c2b2c2da7860b5a74977b89a8c39999581/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4831",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4831",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4831. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ]
  },
  {
    "id": "adafruit-module-4698",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4698: EAGLE Adafruit_AS7341.brd; commit a3fdedb61db3 header geometry", "url": "https://github.com/adafruit/Adafruit-AS7341-PCB/blob/a3fdedb61db3047458d89393f1c8f4b93204df81/Adafruit_AS7341.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "11e4ca0a5b930beea8dfde966011b3f31bde4294356393df36b7fc6739883e81"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4698",
    "name": "Adafruit AS7341 10-Channel Light / Color Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4698",
    "revision": "EAGLE Adafruit_AS7341.brd; commit a3fdedb61db3",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4698"]["contacts"],
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
    "artwork": assets["adafruit-module-4698"]["artwork"],
    "backArtwork": assets["adafruit-module-4698"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4698"]["provenance"],
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
        "conn4-mt2"
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
        "url": "https://www.adafruit.com/product/4698"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AS7341-PCB/blob/a3fdedb61db3047458d89393f1c8f4b93204df81/Adafruit_AS7341.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AS7341-PCB/blob/a3fdedb61db3047458d89393f1c8f4b93204df81/Adafruit_AS7341.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AS7341-PCB/blob/a3fdedb61db3047458d89393f1c8f4b93204df81/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4698",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4698",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4698. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -8.375,
      12.286,
      4.142
    ]
  },
  {
    "id": "adafruit-module-1918",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3"],
      "source": {"label": "Adafruit ADA1918: EAGLE Adafruit GUVA UV Sensor Breakout.brd; commit 6d03cc0e0a1d header geometry", "url": "https://github.com/adafruit/Adafruit-GUVA-Analog-UV-Sensor-Breakout-PCB/blob/6d03cc0e0a1d64360514f60730dba3c79e2846a0/Adafruit%20GUVA%20UV%20Sensor%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 3, "package": "1X03-CLEANBIG"}],
        "boardSha256": "a6c28460859d32beb202574a38e12b014ab2a858fbeb0ec0b281476f447e6b92"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -9.525, "width": 10.16, "height": 19.05}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1918",
    "name": "Analog UV Light Sensor Breakout - GUVA-S12SD",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1918",
    "revision": "EAGLE Adafruit GUVA UV Sensor Breakout.brd; commit 6d03cc0e0a1d",
    "category": "Sensors",
    "board": {
      "width": 10.16,
      "height": 19.05,
      "color": "#246545",
      "outline": "M2.54 9.525A2.54 2.54 0 0 0 5.08 6.985L5.08 -6.985A2.54 2.54 0 0 0 2.54 -9.525L-2.54 -9.525A2.54 2.54 0 0 0 -5.08 -6.985L-5.08 6.985A2.54 2.54 0 0 0 -2.54 9.525L2.54 9.525Z"
    },
    "contacts": assets["adafruit-module-1918"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1918"]["artwork"],
    "backArtwork": assets["adafruit-module-1918"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1918"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1918"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-GUVA-Analog-UV-Sensor-Breakout-PCB/blob/6d03cc0e0a1d64360514f60730dba3c79e2846a0/Adafruit%20GUVA%20UV%20Sensor%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-GUVA-Analog-UV-Sensor-Breakout-PCB/blob/6d03cc0e0a1d64360514f60730dba3c79e2846a0/Adafruit%20GUVA%20UV%20Sensor%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-GUVA-Analog-UV-Sensor-Breakout-PCB/blob/6d03cc0e0a1d64360514f60730dba3c79e2846a0/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1918",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1918",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1918. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.256,
      -3.699,
      4.002,
      4.891
    ]
  },
  {
    "id": "adafruit-module-2748",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3"],
      "source": {"label": "Adafruit ADA2748: EAGLE Adafruit ALS-PT19-315C Breakout.brd; commit 7075f89067df header geometry", "url": "https://github.com/adafruit/Adafruit-ALS-PT19-Sensor-Breakout-PCB/blob/7075f89067dfed503101a3414c45d55e9ab80444/Adafruit%20ALS-PT19-315C%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 3, "package": "1X03_ROUND"}],
        "boardSha256": "30e4bde1cd661fff143dbc452ac67e6910421dfa1f9107581cfed94e3fb48fa1"
      },
      "bodyRegions": [
        {"x": -3.81, "y": -5.08, "width": 7.62, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2748",
    "name": "Adafruit ALS-PT19 Analog Light Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2748",
    "revision": "EAGLE Adafruit ALS-PT19-315C Breakout.brd; commit 7075f89067df",
    "category": "Sensors",
    "board": {
      "width": 7.62,
      "height": 10.16,
      "color": "#246545",
      "outline": "M3.81 2.54A2.54 2.54 0 0 1 1.27 5.08L-1.27 5.08A2.54 2.54 0 0 1 -3.81 2.54L-3.81 -2.54A2.54 2.54 0 0 1 -1.27 -5.08L1.27 -5.08A2.54 2.54 0 0 1 3.81 -2.54L3.81 2.54Z"
    },
    "contacts": assets["adafruit-module-2748"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -2.794,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-2748"]["artwork"],
    "backArtwork": assets["adafruit-module-2748"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2748"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2748"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ALS-PT19-Sensor-Breakout-PCB/blob/7075f89067dfed503101a3414c45d55e9ab80444/Adafruit%20ALS-PT19-315C%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ALS-PT19-Sensor-Breakout-PCB/blob/7075f89067dfed503101a3414c45d55e9ab80444/Adafruit%20ALS-PT19-315C%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ALS-PT19-Sensor-Breakout-PCB/blob/7075f89067dfed503101a3414c45d55e9ab80444/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2748",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2748",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2748. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.047,
      -0.2606,
      2.514,
      1.0226
    ]
  },
  {
    "id": "adafruit-module-5022",
    "sku": "ADA5022",
    "name": "Adafruit Proximity Trinkey - USB APDS9960 Sensor Dev Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5022",
    "revision": "EAGLE Adafruit Proximity Trinkey.brd; commit 6e99b157c785",
    "category": "Sensors",
    "board": {
      "width": 32.7785,
      "height": 12.065,
      "color": "#246545",
      "outline": "M-16.38925 -4.7625A1.285088 1.285088 0 0 1 -15.08925 -6.0325L15.039169 -6.0325A1.350081 1.350081 0 0 1 16.38925 -4.682419L16.38925 4.6825A1.35 1.35 0 0 1 15.03925 6.0325L-15.11925 6.0325A1.27 1.27 0 0 1 -16.38925 4.7625L-16.38925 -4.7625Z"
    },
    "contacts": assets["adafruit-module-5022"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5022"]["artwork"],
    "backArtwork": assets["adafruit-module-5022"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5022"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5022"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Proximity-Trinkey-PCB/blob/6e99b157c7857fc71afc03e713dce83d44b6d750/Adafruit%20Proximity%20Trinkey.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Proximity-Trinkey-PCB/blob/6e99b157c7857fc71afc03e713dce83d44b6d750/Adafruit%20Proximity%20Trinkey.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Proximity-Trinkey-PCB/blob/6e99b157c7857fc71afc03e713dce83d44b6d750/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5022",
      "status": "Official Adafruit stock feed reported 85 available.",
      "sku": "ADA5022",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "85"
    },
    "description": "Adafruit ADA5022. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.47625,
      -6.04,
      11.45875,
      6.04
    ]
  },
  {
    "id": "adafruit-module-5913",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "Adafruit ADA5913: EAGLE Adafruit STEMMA Reflective Photo Interrupt Sensor.brd; commit 301c949dc5f3 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-STEMMA-Reflective-Photo-Interrupt-Sensor-PCB/blob/301c949dc5f3d4b045aca5ca94913a096af24918/Adafruit%20STEMMA%20Reflective%20Photo%20Interrupt%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03_OVAL"}],
        "duplicateHeaderContacts": [{"pinId": "jp2-1", "equivalentPinId": "jp1-1", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-2", "equivalentPinId": "jp1-2", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "jp2-3", "equivalentPinId": "jp1-3", "connector": "JP2", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "9a6a23a7a9ed4c506c3b8501e785cbd21f0d4fbeed11adc7bf0cacd7f457616c"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5913",
    "name": "Adafruit STEMMA Reflective Photo Interrupt Sensor - TCRT1000",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5913",
    "revision": "EAGLE Adafruit STEMMA Reflective Photo Interrupt Sensor.brd; commit 301c949dc5f3",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5913"]["contacts"],
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
    "artwork": assets["adafruit-module-5913"]["artwork"],
    "backArtwork": assets["adafruit-module-5913"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5913"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5913"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Reflective-Photo-Interrupt-Sensor-PCB/blob/301c949dc5f3d4b045aca5ca94913a096af24918/Adafruit%20STEMMA%20Reflective%20Photo%20Interrupt%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Reflective-Photo-Interrupt-Sensor-PCB/blob/301c949dc5f3d4b045aca5ca94913a096af24918/Adafruit%20STEMMA%20Reflective%20Photo%20Interrupt%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Reflective-Photo-Interrupt-Sensor-PCB/blob/301c949dc5f3d4b045aca5ca94913a096af24918/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5913",
      "status": "Official Adafruit stock feed reported 25 available.",
      "sku": "ADA5913",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "25"
    },
    "description": "Adafruit ADA5913. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      12.593,
      7.444
    ],
    "backArtworkBounds": [
      -3.0245,
      -4.485,
      -0.849,
      3.596
    ]
  },
  {
    "id": "adafruit-module-3967",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA3967: EAGLE Adafruit VL53L1X.brd; commit e2a85759d3b8 header geometry", "url": "https://github.com/adafruit/Adafruit-VL53L1X-PCB/blob/e2a85759d3b85907b3c2422f3c140d6bb45390d7/Adafruit%20VL53L1X.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "592e231f3c91e05bf92ff5940062d8f59d4b8f6984e1db51e58a6d60c5faf6d4"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3967",
    "name": "Adafruit VL53L1X Time of Flight Distance Sensor - ~30 to 4000mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3967",
    "revision": "EAGLE Adafruit VL53L1X.brd; commit e2a85759d3b8",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-3967"]["contacts"],
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
    "artwork": assets["adafruit-module-3967"]["artwork"],
    "backArtwork": assets["adafruit-module-3967"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3967"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3967"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VL53L1X-PCB/blob/e2a85759d3b85907b3c2422f3c140d6bb45390d7/Adafruit%20VL53L1X.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VL53L1X-PCB/blob/e2a85759d3b85907b3c2422f3c140d6bb45390d7/Adafruit%20VL53L1X.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VL53L1X-PCB/blob/e2a85759d3b85907b3c2422f3c140d6bb45390d7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3967",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3967",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3967. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.996,
      12.159,
      3.875
    ],
    "backArtworkBounds": [
      -9.437999999999999,
      -1.945,
      -6.056,
      0.167
    ]
  },
  {
    "id": "adafruit-module-6064",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6064: EAGLE Adafruit VCNL4200 Long Distance IR Sensor Breakout.brd; commit 461ffb1e80f5 header geometry", "url": "https://github.com/adafruit/Adafruit-VCNL4200-Breakout-PCB/blob/461ffb1e80f5cb6555e25400d41db8b1a72ca58e/Adafruit%20VCNL4200%20Long%20Distance%20IR%20Sensor%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "8ef403e72fb8777dadc83612fe3094aa7aba90fc8065d81cd558b8f5b1503e02"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6064",
    "name": "Adafruit VCNL4200 Long Distance IR Proximity and Light Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6064",
    "revision": "EAGLE Adafruit VCNL4200 Long Distance IR Sensor Breakout.brd; commit 461ffb1e80f5",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6064"]["contacts"],
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
    "artwork": assets["adafruit-module-6064"]["artwork"],
    "backArtwork": assets["adafruit-module-6064"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6064"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6064"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VCNL4200-Breakout-PCB/blob/461ffb1e80f5cb6555e25400d41db8b1a72ca58e/Adafruit%20VCNL4200%20Long%20Distance%20IR%20Sensor%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VCNL4200-Breakout-PCB/blob/461ffb1e80f5cb6555e25400d41db8b1a72ca58e/Adafruit%20VCNL4200%20Long%20Distance%20IR%20Sensor%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VCNL4200-Breakout-PCB/blob/461ffb1e80f5cb6555e25400d41db8b1a72ca58e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6064",
      "status": "Official Adafruit stock feed reported 95 available.",
      "sku": "ADA6064",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "95"
    },
    "description": "Adafruit ADA6064. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -8.3965,
      12.286,
      4.129
    ],
    "backArtworkBounds": [
      -8.168,
      -6.263,
      -6.056,
      -2.881
    ]
  },
  {
    "id": "adafruit-module-5396",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA5396: EAGLE Adafruit VL53L4CD.brd; commit de475b8aede9 header geometry", "url": "https://github.com/adafruit/Adafruit-VL53L4CD-PCB/blob/de475b8aede92ff30e66671ded9ec015fc0df6ba/Adafruit%20VL53L4CD.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "1337c456f84bd293f373b6cd54446571d814e987d21461f0d168223b28bc02c9"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5396",
    "name": "Adafruit VL53L4CD Time of Flight Distance Sensor - ~1 to 1300mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5396",
    "revision": "EAGLE Adafruit VL53L4CD.brd; commit de475b8aede9",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5396"]["contacts"],
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
    "artwork": assets["adafruit-module-5396"]["artwork"],
    "backArtwork": assets["adafruit-module-5396"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5396"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5396"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CD-PCB/blob/de475b8aede92ff30e66671ded9ec015fc0df6ba/Adafruit%20VL53L4CD.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CD-PCB/blob/de475b8aede92ff30e66671ded9ec015fc0df6ba/Adafruit%20VL53L4CD.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CD-PCB/blob/de475b8aede92ff30e66671ded9ec015fc0df6ba/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5396",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5396",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5396. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.996,
      12.159,
      3.875
    ],
    "backArtworkBounds": [
      -9.437999999999999,
      -1.945,
      -6.056,
      0.167
    ]
  },
  {
    "id": "adafruit-module-5425",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA5425: EAGLE Adafruit VL53L4CX.brd; commit 8e287e0d0629 header geometry", "url": "https://github.com/adafruit/Adafruit-VL53L4CX-PCB/blob/8e287e0d06293984a3c2b4e14180830dda2e3acc/Adafruit%20VL53L4CX.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "670e3e878c6fe85aa93e0b2f8b2983412aeb366be20b46bc2fbe26d1ba20e695"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5425",
    "name": "Adafruit VL53L4CX Time of Flight Distance Sensor - ~1 to 6000mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5425",
    "revision": "EAGLE Adafruit VL53L4CX.brd; commit 8e287e0d0629",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5425"]["contacts"],
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
    "artwork": assets["adafruit-module-5425"]["artwork"],
    "backArtwork": assets["adafruit-module-5425"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5425"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5425"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CX-PCB/blob/8e287e0d06293984a3c2b4e14180830dda2e3acc/Adafruit%20VL53L4CX.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CX-PCB/blob/8e287e0d06293984a3c2b4e14180830dda2e3acc/Adafruit%20VL53L4CX.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VL53L4CX-PCB/blob/8e287e0d06293984a3c2b4e14180830dda2e3acc/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5425",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5425",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5425. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.996,
      12.159,
      3.875
    ],
    "backArtworkBounds": [
      -9.437999999999999,
      -1.945,
      -6.056,
      0.167
    ]
  },
  {
    "id": "adafruit-module-4161",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4161: EAGLE Adafruit VCNL4040.brd; commit e64c08ed339d header geometry", "url": "https://github.com/adafruit/Adafruit-VCNL4040-PCB/blob/e64c08ed339dba5886b54a6e6c6c4c6cf95b25b8/Adafruit%20VCNL4040.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "f4b584976a8e132fbc93b7b14019c468555cf27204de78ced69428d964c3b17a"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4161",
    "name": "Adafruit VCNL4040 Proximity and Lux Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4161",
    "revision": "EAGLE Adafruit VCNL4040.brd; commit e64c08ed339d",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4161"]["contacts"],
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
    "artwork": assets["adafruit-module-4161"]["artwork"],
    "backArtwork": assets["adafruit-module-4161"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4161"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn4-1"
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
        "url": "https://www.adafruit.com/product/4161"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VCNL4040-PCB/blob/e64c08ed339dba5886b54a6e6c6c4c6cf95b25b8/Adafruit%20VCNL4040.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VCNL4040-PCB/blob/e64c08ed339dba5886b54a6e6c6c4c6cf95b25b8/Adafruit%20VCNL4040.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VCNL4040-PCB/blob/e64c08ed339dba5886b54a6e6c6c4c6cf95b25b8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4161",
      "status": "Official Adafruit stock feed reported 45 available.",
      "sku": "ADA4161",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "45"
    },
    "description": "Adafruit ADA4161. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.901
    ]
  },
  {
    "id": "adafruit-module-6498",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6498: EAGLE Adafruit MAX44009 Lux Light Sensor.brd; commit 8105e22700e7 header geometry", "url": "https://github.com/adafruit/Adafruit-MAX44009-Lux-Light-Sensor-PCB/blob/8105e22700e71f254633c947bb89a1d9bafbcb18/Adafruit%20MAX44009%20Lux%20Light%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "8728dd81e6025b0883c0ba0f5dc484620c9cad1e6d269862be2fe970de09426e"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6498",
    "name": "Adafruit MAX44009 Wide-range Lux Light Sensor - 188,000 Lux Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6498",
    "revision": "EAGLE Adafruit MAX44009 Lux Light Sensor.brd; commit 8105e22700e7",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6498"]["contacts"],
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
    "artwork": assets["adafruit-module-6498"]["artwork"],
    "backArtwork": assets["adafruit-module-6498"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6498"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6498"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MAX44009-Lux-Light-Sensor-PCB/blob/8105e22700e71f254633c947bb89a1d9bafbcb18/Adafruit%20MAX44009%20Lux%20Light%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MAX44009-Lux-Light-Sensor-PCB/blob/8105e22700e71f254633c947bb89a1d9bafbcb18/Adafruit%20MAX44009%20Lux%20Light%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MAX44009-Lux-Light-Sensor-PCB/blob/8105e22700e71f254633c947bb89a1d9bafbcb18/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6498",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6498",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6498. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ],
    "backArtworkBounds": [
      -7.533,
      -5.374,
      -1.611,
      2.453
    ]
  },
  {
    "id": "adafruit-module-6491",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6491: EAGLE Adafruit VCNL4030 Proximity and Lux Breakout.brd; commit 2cb43e92b399 header geometry", "url": "https://github.com/adafruit/Adafruit-VCNL4030-Proximity-and-Lux-Sensor-PCB/blob/2cb43e92b39950b2a3431f76c197c378cac2ba3e/Adafruit%20VCNL4030%20Proximity%20and%20Lux%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "c4d0248cd2608d44f18d6b12aac55ec99734d282d034b9a63e62cccb39893085"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6491",
    "name": "Adafruit VCNL4030 Proximity and Lux Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6491",
    "revision": "EAGLE Adafruit VCNL4030 Proximity and Lux Breakout.brd; commit 2cb43e92b399",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6491"]["contacts"],
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
    "artwork": assets["adafruit-module-6491"]["artwork"],
    "backArtwork": assets["adafruit-module-6491"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6491"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6491"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VCNL4030-Proximity-and-Lux-Sensor-PCB/blob/2cb43e92b39950b2a3431f76c197c378cac2ba3e/Adafruit%20VCNL4030%20Proximity%20and%20Lux%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VCNL4030-Proximity-and-Lux-Sensor-PCB/blob/2cb43e92b39950b2a3431f76c197c378cac2ba3e/Adafruit%20VCNL4030%20Proximity%20and%20Lux%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VCNL4030-Proximity-and-Lux-Sensor-PCB/blob/2cb43e92b39950b2a3431f76c197c378cac2ba3e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6491",
      "status": "Official Adafruit stock feed reported 99 available.",
      "sku": "ADA6491",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "99"
    },
    "description": "Adafruit ADA6491. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.9645
    ],
    "backArtworkBounds": [
      -7.152,
      -7.279,
      -3.77,
      -5.167
    ]
  },
  {
    "id": "adafruit-module-6479",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6479: EAGLE Adafruit TCS3430 Ambient Tri-Stimulus Color Sensor.brd; commit 66a56ff8cdb4 header geometry", "url": "https://github.com/adafruit/Adafruit-TCS3430-Ambient-Tri-Stimulus-Color-Sensor-PCB/blob/66a56ff8cdb46158dbb87cbe5cc557d7ff14b6e1/Adafruit%20TCS3430%20Ambient%20Tri-Stimulus%20Color%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "e8b351e9de98ea5dc3c2edd9e5f25f013a4acfe05c3c24cff2eea0e5b7c4d56d"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6479",
    "name": "Adafruit TCS3430 / TCS34303 Ambient Tri-Stimulus Color Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6479",
    "revision": "EAGLE Adafruit TCS3430 Ambient Tri-Stimulus Color Sensor.brd; commit 66a56ff8cdb4",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6479"]["contacts"],
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
    "artwork": assets["adafruit-module-6479"]["artwork"],
    "backArtwork": assets["adafruit-module-6479"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6479"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6479"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TCS3430-Ambient-Tri-Stimulus-Color-Sensor-PCB/blob/66a56ff8cdb46158dbb87cbe5cc557d7ff14b6e1/Adafruit%20TCS3430%20Ambient%20Tri-Stimulus%20Color%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TCS3430-Ambient-Tri-Stimulus-Color-Sensor-PCB/blob/66a56ff8cdb46158dbb87cbe5cc557d7ff14b6e1/Adafruit%20TCS3430%20Ambient%20Tri-Stimulus%20Color%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TCS3430-Ambient-Tri-Stimulus-Color-Sensor-PCB/blob/66a56ff8cdb46158dbb87cbe5cc557d7ff14b6e1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6479",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6479",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6479. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -5.11,
      12.159,
      3.934
    ],
    "backArtworkBounds": [
      -8.040999999999999,
      -5.247,
      -4.659,
      -3.135
    ]
  },
  {
    "id": "adafruit-module-6461",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6461: EAGLE Adafruit APDS9999 Proximity Light Color Sensor.brd; commit 0f0fc27bab6c header geometry", "url": "https://github.com/adafruit/Adafruit-APDS9999-Proximity-Light-and-Color-Sensor-PCB/blob/0f0fc27bab6c79a684ce17a6ab397f63f98f74bd/Adafruit%20APDS9999%20Proximity%20Light%20Color%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "b8d2acbc193f93cb42bdd25c8328625fbf937d71b19b83be31e2ba49e2ff4d01"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6461",
    "name": "Adafruit APDS9999 Proximity, Lux Light & Color Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6461",
    "revision": "EAGLE Adafruit APDS9999 Proximity Light Color Sensor.brd; commit 0f0fc27bab6c",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6461"]["contacts"],
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
    "artwork": assets["adafruit-module-6461"]["artwork"],
    "backArtwork": assets["adafruit-module-6461"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6461"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6461"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-APDS9999-Proximity-Light-and-Color-Sensor-PCB/blob/0f0fc27bab6c79a684ce17a6ab397f63f98f74bd/Adafruit%20APDS9999%20Proximity%20Light%20Color%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-APDS9999-Proximity-Light-and-Color-Sensor-PCB/blob/0f0fc27bab6c79a684ce17a6ab397f63f98f74bd/Adafruit%20APDS9999%20Proximity%20Light%20Color%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-APDS9999-Proximity-Light-and-Color-Sensor-PCB/blob/0f0fc27bab6c79a684ce17a6ab397f63f98f74bd/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6461",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6461",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6461. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ],
    "backArtworkBounds": [
      -7.533,
      -5.374,
      -5.421,
      -1.992
    ]
  },
  {
    "id": "adafruit-module-5810",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA5810: EAGLE Adafruit VCNL4020 Proximity and Light Sensor.brd; commit 525a2aff1484 header geometry", "url": "https://github.com/adafruit/Adafruit-VCNL4020-Proximity-and-Light-Sensor-PCB/blob/525a2aff1484aa23a424b656a5bf022d4b70a36e/Adafruit%20VCNL4020%20Proximity%20and%20Light%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "2adec0ef09bc9fb51684af79edb52c0a29f6821de56ab3addb574e6667c69aa8"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5810",
    "name": "Adafruit VCNL4020 Proximity and Light Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5810",
    "revision": "EAGLE Adafruit VCNL4020 Proximity and Light Sensor.brd; commit 525a2aff1484",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5810"]["contacts"],
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
    "artwork": assets["adafruit-module-5810"]["artwork"],
    "backArtwork": assets["adafruit-module-5810"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5810"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5810"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VCNL4020-Proximity-and-Light-Sensor-PCB/blob/525a2aff1484aa23a424b656a5bf022d4b70a36e/Adafruit%20VCNL4020%20Proximity%20and%20Light%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VCNL4020-Proximity-and-Light-Sensor-PCB/blob/525a2aff1484aa23a424b656a5bf022d4b70a36e/Adafruit%20VCNL4020%20Proximity%20and%20Light%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VCNL4020-Proximity-and-Light-Sensor-PCB/blob/525a2aff1484aa23a424b656a5bf022d4b70a36e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5810",
      "status": "Official Adafruit stock feed reported 84 available.",
      "sku": "ADA5810",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "84"
    },
    "description": "Adafruit ADA5810. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -5.907,
      12.286,
      4.142
    ]
  },
  {
    "id": "adafruit-module-6501",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA6501: EAGLE Adafruit TMF8806 Time of Flight Sensor rev B.brd; commit 00602b9a3252 header geometry", "url": "https://github.com/adafruit/Adafruit-TMF8806-Time-of-Flight-Distance-Sensor-PCB/blob/00602b9a3252e047cf1d8824c6d0e8f7dfc026cc/Adafruit%20TMF8806%20Time%20of%20Flight%20Sensor%20rev%20B.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "bd39877e6c2f692cb9169cc61741e578e74b09f9d95c29345798989b09db863a"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6501",
    "name": "Adafruit TMF8806 Time of Flight Distance Sensor - 10mm to 5m",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6501",
    "revision": "EAGLE Adafruit TMF8806 Time of Flight Sensor rev B.brd; commit 00602b9a3252",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6501"]["contacts"],
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
    "artwork": assets["adafruit-module-6501"]["artwork"],
    "backArtwork": assets["adafruit-module-6501"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6501"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6501"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TMF8806-Time-of-Flight-Distance-Sensor-PCB/blob/00602b9a3252e047cf1d8824c6d0e8f7dfc026cc/Adafruit%20TMF8806%20Time%20of%20Flight%20Sensor%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TMF8806-Time-of-Flight-Distance-Sensor-PCB/blob/00602b9a3252e047cf1d8824c6d0e8f7dfc026cc/Adafruit%20TMF8806%20Time%20of%20Flight%20Sensor%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TMF8806-Time-of-Flight-Distance-Sensor-PCB/blob/00602b9a3252e047cf1d8824c6d0e8f7dfc026cc/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6501",
      "status": "Official Adafruit stock feed reported 75 available.",
      "sku": "ADA6501",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "75"
    },
    "description": "Adafruit ADA6501. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -5.377,
      12.159,
      4.002
    ]
  },
  {
    "id": "adafruit-module-3779",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "ftdi1-1", "ftdi1-2", "ftdi1-3", "ftdi1-4", "ftdi1-5", "ftdi1-6", "ftdi1-7"],
      "source": {"label": "Adafruit ADA3779: EAGLE AS726x-Spectral_REV-D.brd; commit e938964b93a0 physical insertion headers", "url": "https://github.com/adafruit/Adafruit-AS7262-Breakout-PCB/blob/e938964b93a0dca5c0120fe2aa54a16e590b27fa/AS726x-Spectral_REV-D.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Duplicate alternative headers are intentionally not populated downward; all their electrical nets remain available through the selected complete header rows. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP2", "count": 7, "package": "1X07_ROUND"}, {"id": "FTDI1", "count": 7, "package": "1X07_ROUND"}],
        "duplicateHeaderContacts": [{"pinId": "ext_led-1", "equivalentPinId": "jp2-2", "connector": "EXT_LED", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}, {"pinId": "ext_led-2", "equivalentPinId": "ftdi1-7", "connector": "EXT_LED", "reason": "Optional duplicate whole header; every electrical terminal remains on a selected insertion contact."}],
        "boardSha256": "e8fedba6a2578a0646dc6870da011615df3151c679758991191d01b21bceabd5"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -13.97, "y": -12.7, "width": 27.94, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3779",
    "name": "Adafruit AS7262 6-Channel Visible Light / Color Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3779",
    "revision": "EAGLE AS726x-Spectral_REV-D.brd; commit e938964b93a0",
    "category": "Sensors",
    "board": {
      "width": 27.94,
      "height": 25.4,
      "color": "#246545",
      "outline": "M11.43 -12.7A2.54 2.54 0 0 1 13.97 -10.16L13.97 10.16A2.54 2.54 0 0 1 11.43 12.7L-11.43 12.7A2.54 2.54 0 0 1 -13.97 10.16L-13.97 -10.16A2.54 2.54 0 0 1 -11.43 -12.7L11.43 -12.7Z"
    },
    "contacts": assets["adafruit-module-3779"]["contacts"],
    "holes": [
      {
        "x": 11.43,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": -11.43,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 11.43,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": -11.43,
        "y": -10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3779"]["artwork"],
    "backArtwork": assets["adafruit-module-3779"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3779"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "ftdi1-3"
      ],
      [
        "jp2-2",
        "ext_led-1"
      ],
      [
        "jp2-3",
        "ftdi1-1"
      ],
      [
        "jp2-4",
        "ftdi1-4"
      ],
      [
        "jp2-5",
        "ftdi1-5"
      ],
      [
        "ext_led-2",
        "ftdi1-7"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3779"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AS7262-Breakout-PCB/blob/e938964b93a0dca5c0120fe2aa54a16e590b27fa/AS726x-Spectral_REV-D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AS7262-Breakout-PCB/blob/e938964b93a0dca5c0120fe2aa54a16e590b27fa/AS726x-Spectral_REV-D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AS7262-Breakout-PCB/blob/e938964b93a0dca5c0120fe2aa54a16e590b27fa/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3779",
      "status": "Official Adafruit stock feed reported 22 available.",
      "sku": "ADA3779",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "22"
    },
    "description": "Adafruit ADA3779. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -11.85,
      -8.408999999999999,
      11.876,
      7.852
    ],
    "backArtworkBounds": [
      -7.533,
      -1.691,
      -5.421,
      1.691
    ]
  },
  {
    "id": "adafruit-module-6477",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6477: EAGLE Adafruit AS7343 14 Channel Light Color Sensor Breakout.brd; commit ce4bb797425e header geometry", "url": "https://github.com/adafruit/Adafruit-AS7343-14-Channel-Light-Color-Sensor-PCB/blob/ce4bb797425e7eecbcbe1ded1232209a2d995e7e/Adafruit%20AS7343%2014%20Channel%20Light%20Color%20Sensor%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "093e3c9206558a9c004b85eefe9c2ca5d1b282b8b9f63792b2f28ce8cdfe79c2"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6477",
    "name": "Adafruit AS7343 14-Channel Light / Color Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6477",
    "revision": "EAGLE Adafruit AS7343 14 Channel Light Color Sensor Breakout.brd; commit ce4bb797425e",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6477"]["contacts"],
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
    "artwork": assets["adafruit-module-6477"]["artwork"],
    "backArtwork": assets["adafruit-module-6477"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6477"]["provenance"],
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
        "conn4-mt2"
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
        "url": "https://www.adafruit.com/product/6477"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AS7343-14-Channel-Light-Color-Sensor-PCB/blob/ce4bb797425e7eecbcbe1ded1232209a2d995e7e/Adafruit%20AS7343%2014%20Channel%20Light%20Color%20Sensor%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AS7343-14-Channel-Light-Color-Sensor-PCB/blob/ce4bb797425e7eecbcbe1ded1232209a2d995e7e/Adafruit%20AS7343%2014%20Channel%20Light%20Color%20Sensor%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AS7343-14-Channel-Light-Color-Sensor-PCB/blob/ce4bb797425e7eecbcbe1ded1232209a2d995e7e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6477",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6477",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6477. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -8.375,
      12.286,
      4.142
    ],
    "backArtworkBounds": [
      -8.93,
      -5.12,
      -6.818,
      -1.738
    ]
  },
  {
    "id": "adafruit-module-5591",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA5591: EAGLE Adafruit LTR-329.brd; commit 618d2124daa9 header geometry", "url": "https://github.com/adafruit/Adafruit-LTR-329-LTR-303-PCB/blob/618d2124daa9b3865b55c9bf389d3fd9157ee4d7/Adafruit%20LTR-329.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "75a284f0829cb49651a8815fe8b003ee3253b3bebd2a21844e9a9665206e4934"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5591",
    "name": "Adafruit LTR-329 Light Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5591",
    "revision": "EAGLE Adafruit LTR-329.brd; commit 618d2124daa9",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5591"]["contacts"],
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
    "artwork": assets["adafruit-module-5591"]["artwork"],
    "backArtwork": assets["adafruit-module-5591"]["backArtwork"],
    "provenance": assets["adafruit-module-5591"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5591"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LTR-329-LTR-303-PCB/blob/618d2124daa9b3865b55c9bf389d3fd9157ee4d7/Adafruit%20LTR-329.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LTR-329-LTR-303-PCB/blob/618d2124daa9b3865b55c9bf389d3fd9157ee4d7/Adafruit%20LTR-329.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LTR-329-LTR-303-PCB/blob/618d2124daa9b3865b55c9bf389d3fd9157ee4d7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5591",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5591",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5591. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ],
    "backArtworkBounds": [
      -5.247,
      -6.009,
      -1.865,
      -3.897
    ]
  },
  {
    "id": "adafruit-module-1980",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA1980: EAGLE Adafruit TSL2591.brd; commit 22be4c7b8d53 header geometry", "url": "https://github.com/adafruit/Adafruit-TSL2591-Breakout-PCB/blob/22be4c7b8d53155dacedc18f3373ba8dbf95dc23/Adafruit%20TSL2591.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "901af5730a37a347b04a6eeafeb2bc920e42c9416b4d6039e4feb474906d81ff"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1980",
    "name": "Adafruit TSL2591 High Dynamic Range Digital Light Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1980",
    "revision": "EAGLE Adafruit TSL2591.brd; commit 22be4c7b8d53",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-1980"]["contacts"],
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
    "artwork": assets["adafruit-module-1980"]["artwork"],
    "backArtwork": assets["adafruit-module-1980"]["backArtwork"],
    "provenance": assets["adafruit-module-1980"]["provenance"],
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1980"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TSL2591-Breakout-PCB/blob/22be4c7b8d53155dacedc18f3373ba8dbf95dc23/Adafruit%20TSL2591.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TSL2591-Breakout-PCB/blob/22be4c7b8d53155dacedc18f3373ba8dbf95dc23/Adafruit%20TSL2591.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TSL2591-Breakout-PCB/blob/22be4c7b8d53155dacedc18f3373ba8dbf95dc23/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1980",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1980",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1980. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.875
    ]
  },
  {
    "id": "adafruit-module-3317",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA3317: EAGLE Adafruit VL530X STEMMA QT.brd; commit 1ef873512150 header geometry", "url": "https://github.com/adafruit/Adafruit-VL53L0X-ToF-Distance-Sensor-PCB/blob/1ef873512150740edc9798f90028facfa35fd81f/Adafruit%20VL530X%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "5953c86428a7e8e0c8e5cadc6cf0de3d312d2fe9cfa3c05005c4e0170cdc69b9"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3317",
    "name": "Adafruit VL53L0X Time of Flight Distance Sensor - ~30 to 1000mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3317",
    "revision": "EAGLE Adafruit VL530X STEMMA QT.brd; commit 1ef873512150",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-3317"]["contacts"],
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
    "artwork": assets["adafruit-module-3317"]["artwork"],
    "backArtwork": assets["adafruit-module-3317"]["backArtwork"],
    "provenance": assets["adafruit-module-3317"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3317"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VL53L0X-ToF-Distance-Sensor-PCB/blob/1ef873512150740edc9798f90028facfa35fd81f/Adafruit%20VL530X%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VL53L0X-ToF-Distance-Sensor-PCB/blob/1ef873512150740edc9798f90028facfa35fd81f/Adafruit%20VL530X%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VL53L0X-ToF-Distance-Sensor-PCB/blob/1ef873512150740edc9798f90028facfa35fd81f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3317",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3317",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3317. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.996,
      12.159,
      3.875
    ]
  },
  {
    "id": "adafruit-module-3595",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA3595: EAGLE Adafruit APDS9960 Proximity Sensor.brd; commit 23880074d26d header geometry", "url": "https://github.com/adafruit/Adafruit-APDS9960-Breakout-PCB/blob/23880074d26df8524399f323e016680ad82dc69f/Adafruit%20APDS9960%20Proximity%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "0bd352be5b63c8ccb1265c7de0fc54c573801b6ce002e8e19aa5d8aa3a542677"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3595",
    "name": "Adafruit APDS9960 Proximity, Light, RGB, and Gesture Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3595",
    "revision": "EAGLE Adafruit APDS9960 Proximity Sensor.brd; commit 23880074d26d",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-3595"]["contacts"],
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
    "artwork": assets["adafruit-module-3595"]["artwork"],
    "backArtwork": assets["adafruit-module-3595"]["backArtwork"],
    "provenance": assets["adafruit-module-3595"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn4-1"
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
        "url": "https://www.adafruit.com/product/3595"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-APDS9960-Breakout-PCB/blob/23880074d26df8524399f323e016680ad82dc69f/Adafruit%20APDS9960%20Proximity%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-APDS9960-Breakout-PCB/blob/23880074d26df8524399f323e016680ad82dc69f/Adafruit%20APDS9960%20Proximity%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-APDS9960-Breakout-PCB/blob/23880074d26df8524399f323e016680ad82dc69f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3595",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3595",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3595. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.256,
      12.286,
      3.875
    ]
  },
];
