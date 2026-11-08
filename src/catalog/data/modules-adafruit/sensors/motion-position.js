import assets from "./motion-position-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-6357",
    "sku": "ADA6357",
    "name": "Adafruit AS5600 Magnetic Angle Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6357",
    "revision": "EAGLE Adafruit AS5600 Magnetic Angle Sensor.brd; commit e146e7740455",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6357"]["contacts"],
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
    "artwork": assets["adafruit-module-6357"]["artwork"],
    "backArtwork": assets["adafruit-module-6357"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-6357"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6357"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-AS5600-Magnetic-Angle-Sensor-PCB/blob/e146e77404551f1ae0619f6627bcc4435d81b0eb/Adafruit%20AS5600%20Magnetic%20Angle%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-AS5600-Magnetic-Angle-Sensor-PCB/blob/e146e77404551f1ae0619f6627bcc4435d81b0eb/Adafruit%20AS5600%20Magnetic%20Angle%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-AS5600-Magnetic-Angle-Sensor-PCB/blob/e146e77404551f1ae0619f6627bcc4435d81b0eb/license.txt"
      },
      {
        "label": "Manufacturer AS5600 pinout and PGO service pad",
        "url": "https://learn.adafruit.com/adafruit-as5600-magnetic-angle-sensor/pinouts"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6357",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6357",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6357. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -5.044,
      12.286,
      3.934
    ],
    "backArtworkBounds": [
      -8.7395,
      -4.358,
      -2.5635,
      -0.849
    ]
  },
  {
    "id": "adafruit-module-2019",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8"],
      "source": {"label": "Adafruit ADA2019: EAGLE Adafruit MMA8451.brd; commit f9fa425744bf header geometry", "url": "https://github.com/adafruit/Adafruit-MMA8451-Breakout-PCB/blob/f9fa425744bf6c85d7ff0a4c80fd36311a0da974/Adafruit%20MMA8451.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "83e363f22dca040fac9b27b0c7bdf0a6fbe297e233fe1c068ba72afb56cbe703"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -8.89, "width": 20.32, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2019",
    "name": "Adafruit Triple-Axis Accelerometer - ±2/4/8g @ 14-bit - MMA8451",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2019",
    "revision": "EAGLE Adafruit MMA8451.brd; commit f9fa425744bf",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-10.16 -6.35A2.54 2.54 0 0 1 -7.62 -8.89L7.62 -8.89A2.54 2.54 0 0 1 10.16 -6.35L10.16 6.35A2.54 2.54 0 0 1 7.62 8.89L-7.62 8.89A2.54 2.54 0 0 1 -10.16 6.35L-10.16 -6.35Z"
    },
    "contacts": assets["adafruit-module-2019"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2019"]["artwork"],
    "backArtwork": assets["adafruit-module-2019"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2019"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2019"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MMA8451-Breakout-PCB/blob/f9fa425744bf6c85d7ff0a4c80fd36311a0da974/Adafruit%20MMA8451.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MMA8451-Breakout-PCB/blob/f9fa425744bf6c85d7ff0a4c80fd36311a0da974/Adafruit%20MMA8451.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MMA8451-Breakout-PCB/blob/f9fa425744bf6c85d7ff0a4c80fd36311a0da974/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2019",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2019",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2019. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.547999999999998,
      -4.51,
      9.082,
      5.018
    ]
  },
  {
    "id": "adafruit-module-1032",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9"],
      "source": {"label": "Adafruit ADA1032: EAGLE Adafruit L3GD20H Breakout.brd; commit 32bf273c2143 header geometry", "url": "https://github.com/adafruit/Adafruit-L3GD20-Breakout-PCB/blob/32bf273c21430e7c4e28cfa79be2109f91b893ea/Adafruit%20L3GD20H%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 9, "package": "1X09_ROUND_76"}],
        "boardSha256": "406f9879c1a769beb42ee1caa4aab5af89416919ca688323ed5698ea4b250d44"
      },
      "bodyRegions": [
        {"x": -15.24, "y": -9.525, "width": 30.48, "height": 19.05}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1032",
    "name": "L3GD20H Triple-Axis Gyro Breakout Board - L3GD20/L3G4200 Upgrade",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1032",
    "revision": "EAGLE Adafruit L3GD20H Breakout.brd; commit 32bf273c2143",
    "category": "Sensors",
    "board": {
      "width": 30.48,
      "height": 19.05,
      "color": "#246545",
      "outline": "M15.24 6.985A2.54 2.54 0 0 1 12.7 9.525L-12.7 9.525A2.54 2.54 0 0 1 -15.24 6.985L-15.24 5.842A2.54 2.54 0 0 1 -12.7 3.302L-12.065 3.302L-12.065 -4.445L-12.7 -4.445A2.54 2.54 0 0 1 -15.24 -6.985A2.54 2.54 0 0 1 -12.7 -9.525L12.7 -9.525A2.54 2.54 0 0 1 15.24 -6.985A2.54 2.54 0 0 1 12.7 -4.445L12.065 -4.445L12.065 3.302L12.7 3.302A2.54 2.54 0 0 1 15.24 5.842L15.24 6.985Z"
    },
    "contacts": assets["adafruit-module-1032"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": 5.842,
        "drill": 2.2
      },
      {
        "x": 12.7,
        "y": 5.842,
        "drill": 2.2
      },
      {
        "x": 12.7,
        "y": -6.985,
        "drill": 2.2
      },
      {
        "x": -12.7,
        "y": -6.985,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-1032"]["artwork"],
    "backArtwork": assets["adafruit-module-1032"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1032"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1032"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-L3GD20-Breakout-PCB/blob/32bf273c21430e7c4e28cfa79be2109f91b893ea/Adafruit%20L3GD20H%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-L3GD20-Breakout-PCB/blob/32bf273c21430e7c4e28cfa79be2109f91b893ea/Adafruit%20L3GD20H%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-L3GD20-Breakout-PCB/blob/32bf273c21430e7c4e28cfa79be2109f91b893ea/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1032",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1032",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1032. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.860399999999998,
      -6.5424,
      9.844,
      4.129
    ]
  },
  {
    "id": "adafruit-module-4366",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4366: EAGLE Adafruit_TLV493D.brd; commit 2450d66eef51 header geometry", "url": "https://github.com/adafruit/Adafruit-TLV493D-PCB/blob/2450d66eef51807f25f6ce598fa7aa9f95d588aa/Adafruit_TLV493D.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND"}],
        "boardSha256": "2746bb3b5c85538c2fca187f6f086cd1b9419cfe95706e36d528a1f53cfa62fb"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4366",
    "name": "Adafruit TLV493D Triple-Axis Magnetometer - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4366",
    "revision": "EAGLE Adafruit_TLV493D.brd; commit 2450d66eef51",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4366"]["contacts"],
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
    "artwork": assets["adafruit-module-4366"]["artwork"],
    "backArtwork": assets["adafruit-module-4366"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4366"]["provenance"],
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
        "conn4-1",
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
        "url": "https://www.adafruit.com/product/4366"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TLV493D-PCB/blob/2450d66eef51807f25f6ce598fa7aa9f95d588aa/Adafruit_TLV493D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TLV493D-PCB/blob/2450d66eef51807f25f6ce598fa7aa9f95d588aa/Adafruit_TLV493D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TLV493D-PCB/blob/2450d66eef51807f25f6ce598fa7aa9f95d588aa/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4366",
      "status": "Official Adafruit stock feed reported 78 available.",
      "sku": "ADA4366",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "78"
    },
    "description": "Adafruit ADA4366. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    ]
  },
  {
    "id": "adafruit-module-5579",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA5579: EAGLE MMC56x3 rev A.brd; commit fb9a564eb119 header geometry", "url": "https://github.com/adafruit/Adafruit-MMC5603-PCB/blob/fb9a564eb11939578643054a859481408a64a868/MMC56x3%20rev%20A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "6bc97e261a0cf86b269a742102c7f62b7f9105b3a2d4fc062a88819f66f162e8"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5579",
    "name": "Adafruit Triple-axis Magnetometer - MMC5603",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5579",
    "revision": "EAGLE MMC56x3 rev A.brd; commit fb9a564eb119",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5579"]["contacts"],
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
    "artwork": assets["adafruit-module-5579"]["artwork"],
    "backArtwork": assets["adafruit-module-5579"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5579"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5579"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MMC5603-PCB/blob/fb9a564eb11939578643054a859481408a64a868/MMC56x3%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MMC5603-PCB/blob/fb9a564eb11939578643054a859481408a64a868/MMC56x3%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MMC5603-PCB/blob/fb9a564eb11939578643054a859481408a64a868/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5579",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5579",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5579. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.9004
    ]
  },
  {
    "id": "adafruit-module-6388",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA6388: EAGLE Adafruit QMC5883P Magnetometer.brd; commit e99e587a0e0e header geometry", "url": "https://github.com/adafruit/Adafruit-QMC5883P-Triple-Axis-Magnetometer-PCB/blob/e99e587a0e0e38b1deaf081639ec0116de6006aa/Adafruit%20QMC5883P%20Magnetometer.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "14957ae9f24cdfc68335e8153988f2f4bd0bb7d16a7e178fe42ad35c8a057157"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6388",
    "name": "Adafruit QMC5883P - Triple Axis Magnetometer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6388",
    "revision": "EAGLE Adafruit QMC5883P Magnetometer.brd; commit e99e587a0e0e",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6388"]["contacts"],
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
    "artwork": assets["adafruit-module-6388"]["artwork"],
    "backArtwork": assets["adafruit-module-6388"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6388"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6388"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-QMC5883P-Triple-Axis-Magnetometer-PCB/blob/e99e587a0e0e38b1deaf081639ec0116de6006aa/Adafruit%20QMC5883P%20Magnetometer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-QMC5883P-Triple-Axis-Magnetometer-PCB/blob/e99e587a0e0e38b1deaf081639ec0116de6006aa/Adafruit%20QMC5883P%20Magnetometer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-QMC5883P-Triple-Axis-Magnetometer-PCB/blob/e99e587a0e0e38b1deaf081639ec0116de6006aa/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6388",
      "status": "Official Adafruit stock feed reported 41 available.",
      "sku": "ADA6388",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "41"
    },
    "description": "Adafruit ADA6388. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      4.015
    ],
    "backArtworkBounds": [
      -6.517,
      -7.533,
      -3.135,
      -5.421
    ]
  },
  {
    "id": "adafruit-module-5309",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA5309: EAGLE Adafruit MSA311.brd; commit a4a29e769419 header geometry", "url": "https://github.com/adafruit/Adafruit_MSA311_PCB/blob/a4a29e76941999057e062a5255594cabc4eba0ca/Adafruit%20MSA311.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "e733588a568feb72eed6f28a27656f080e9a5b66f8dd08b8b36a53ad2c22e7ac"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5309",
    "name": "Adafruit MSA311 Triple Axis Accelerometer - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5309",
    "revision": "EAGLE Adafruit MSA311.brd; commit a4a29e769419",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5309"]["contacts"],
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
    "artwork": assets["adafruit-module-5309"]["artwork"],
    "backArtwork": assets["adafruit-module-5309"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5309"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5309"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit_MSA311_PCB/blob/a4a29e76941999057e062a5255594cabc4eba0ca/Adafruit%20MSA311.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit_MSA311_PCB/blob/a4a29e76941999057e062a5255594cabc4eba0ca/Adafruit%20MSA311.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit_MSA311_PCB/blob/a4a29e76941999057e062a5255594cabc4eba0ca/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5309",
      "status": "Official Adafruit stock feed reported 34 available.",
      "sku": "ADA5309",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "34"
    },
    "description": "Adafruit ADA5309. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    ]
  },
  {
    "id": "adafruit-module-6426",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6426: EAGLE Adafruit STHS34PF80 IR Presence Sensor.brd; commit df3aece9ec5e header geometry", "url": "https://github.com/adafruit/Adafruit-STHS34PF80-IR-Presence-Sensor-PCB/blob/df3aece9ec5e5ad5f1a1fe48835046ddb6b0a292/Adafruit%20STHS34PF80%20IR%20Presence%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "e06038ce900abeec95a1e43356163a7871110d79a876c5d75b4ad93c7917f719"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6426",
    "name": "Adafruit STHS34PF80 IR Presence / Motion Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6426",
    "revision": "EAGLE Adafruit STHS34PF80 IR Presence Sensor.brd; commit df3aece9ec5e",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6426"]["contacts"],
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
    "artwork": assets["adafruit-module-6426"]["artwork"],
    "backArtwork": assets["adafruit-module-6426"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6426"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6426"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STHS34PF80-IR-Presence-Sensor-PCB/blob/df3aece9ec5e5ad5f1a1fe48835046ddb6b0a292/Adafruit%20STHS34PF80%20IR%20Presence%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STHS34PF80-IR-Presence-Sensor-PCB/blob/df3aece9ec5e5ad5f1a1fe48835046ddb6b0a292/Adafruit%20STHS34PF80%20IR%20Presence%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STHS34PF80-IR-Presence-Sensor-PCB/blob/df3aece9ec5e5ad5f1a1fe48835046ddb6b0a292/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6426",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6426",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6426. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.409,
      12.159,
      3.875
    ],
    "backArtworkBounds": [
      -8.93,
      -5.12,
      -5.548,
      -3.008
    ]
  },
  {
    "id": "adafruit-module-4488",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7"],
      "source": {"label": "Adafruit ADA4488: EAGLE Adafruit LIS2MDL.brd; commit c65288a9024d header geometry", "url": "https://github.com/adafruit/Adafruit-LIS2MDL-PCB/blob/c65288a9024d03b559eb0121ec8c231345ed8e3e/Adafruit%20LIS2MDL.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_ROUND_70"}],
        "boardSha256": "78d17fad3994337420323a68318c4769bbdd3b3d8504f97442b6dd6fef504bdf"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4488",
    "name": "Adafruit Triple-axis Magnetometer - LIS2MDL",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4488",
    "revision": "EAGLE Adafruit LIS2MDL.brd; commit c65288a9024d",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4488"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.54
      },
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
    "artwork": assets["adafruit-module-4488"]["artwork"],
    "backArtwork": assets["adafruit-module-4488"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4488"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4488"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LIS2MDL-PCB/blob/c65288a9024d03b559eb0121ec8c231345ed8e3e/Adafruit%20LIS2MDL.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LIS2MDL-PCB/blob/c65288a9024d03b559eb0121ec8c231345ed8e3e/Adafruit%20LIS2MDL.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LIS2MDL-PCB/blob/c65288a9024d03b559eb0121ec8c231345ed8e3e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4488",
      "status": "Official Adafruit stock feed reported 8 available.",
      "sku": "ADA4488",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "8"
    },
    "description": "Adafruit ADA4488. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.169,
      12.286,
      4.0915
    ]
  },
  {
    "id": "adafruit-module-4413",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp3-1", "jp3-2", "jp3-3", "jp3-4"],
      "source": {"label": "Adafruit ADA4413: EAGLE Adafruit_LSM303AGR.brd; commit 3a099ee3de34 header geometry", "url": "https://github.com/adafruit/Adafruit-LSM303AGR-PCB/blob/3a099ee3de341bfaf089d7f314380e825b3ae35e/Adafruit_LSM303AGR.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP3", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "9e4e8f4c25a8cdc2f8bb6cd137884f7ac3b3fc2137ef8bc276b28c3da9d1f2a2"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4413",
    "name": "Adafruit LSM303AGR Accelerometer Magnetometer - STEMMA QT Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4413",
    "revision": "EAGLE Adafruit_LSM303AGR.brd; commit 3a099ee3de34",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4413"]["contacts"],
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
    "artwork": assets["adafruit-module-4413"]["artwork"],
    "backArtwork": assets["adafruit-module-4413"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4413"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4413"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LSM303AGR-PCB/blob/3a099ee3de341bfaf089d7f314380e825b3ae35e/Adafruit_LSM303AGR.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LSM303AGR-PCB/blob/3a099ee3de341bfaf089d7f314380e825b3ae35e/Adafruit_LSM303AGR.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LSM303AGR-PCB/blob/3a099ee3de341bfaf089d7f314380e825b3ae35e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4413",
      "status": "Official Adafruit stock feed reported 20 available.",
      "sku": "ADA4413",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "20"
    },
    "description": "Adafruit ADA4413. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.231,
      12.286,
      4.891
    ]
  },
  {
    "id": "adafruit-module-5543",
    "mountingReview": {
      "contactIds": ["jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA5543: EAGLE LIS3MDL + LSM6DS3 rev A.brd; commit bc2d3ee876a2 header geometry", "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-LIS3MDL-PCB/blob/bc2d3ee876a254d5ebc669bc4d0df78b11602a64/LIS3MDL%20%2B%20LSM6DS3%20rev%20A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP4", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "ee24a927d28f4b8f32c421e1af1916290d0959ec86a1152a39fbe8a3cf98cd4c"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5543",
    "name": "Adafruit LSM6DS3TR-C + LIS3MDL - Precision 9 DoF IMU",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5543",
    "revision": "EAGLE LIS3MDL + LSM6DS3 rev A.brd; commit bc2d3ee876a2",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5543"]["contacts"],
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
    "artwork": assets["adafruit-module-5543"]["artwork"],
    "backArtwork": assets["adafruit-module-5543"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5543"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp4-1"
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
        "jp4-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5543"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-LIS3MDL-PCB/blob/bc2d3ee876a254d5ebc669bc4d0df78b11602a64/LIS3MDL%20%2B%20LSM6DS3%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-LIS3MDL-PCB/blob/bc2d3ee876a254d5ebc669bc4d0df78b11602a64/LIS3MDL%20%2B%20LSM6DS3%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-LIS3MDL-PCB/blob/bc2d3ee876a254d5ebc669bc4d0df78b11602a64/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5543",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5543",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5543. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -5.0595,
      12.286,
      4.9926
    ],
    "backArtworkBounds": [
      -7.406,
      -4.739,
      -2.754,
      -1.357
    ]
  },
  {
    "id": "adafruit-module-4626",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6"],
      "source": {"label": "Adafruit ADA4626: EAGLE Adafruit_LIS331.brd; commit 4b94be760d88 header geometry", "url": "https://github.com/adafruit/Adafruit-LIS331-PCB/blob/4b94be760d8804bd08d6f3959697bac0875c8fea/Adafruit_LIS331.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP2", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "16c14fb7631e2e0761f91d2427a91436602e6fd5277c5a3875606a30168d2ffc"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4626",
    "name": "Adafruit LIS331 Triple-Axis Wide-Range ±24g Accelerometer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4626",
    "revision": "EAGLE Adafruit_LIS331.brd; commit 4b94be760d88",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4626"]["contacts"],
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
    "artwork": assets["adafruit-module-4626"]["artwork"],
    "backArtwork": assets["adafruit-module-4626"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4626"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-5"
      ],
      [
        "conn3-1",
        "conn4-1",
        "jp3-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4626"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LIS331-PCB/blob/4b94be760d8804bd08d6f3959697bac0875c8fea/Adafruit_LIS331.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LIS331-PCB/blob/4b94be760d8804bd08d6f3959697bac0875c8fea/Adafruit_LIS331.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LIS331-PCB/blob/4b94be760d8804bd08d6f3959697bac0875c8fea/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4626",
      "status": "Official Adafruit stock feed reported 2 available.",
      "sku": "ADA4626",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "2"
    },
    "description": "Adafruit ADA4626. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.361,
      12.286,
      4.3195
    ],
    "backArtworkBounds": [
      2.1189999999999998,
      -3.977,
      5.501,
      -1.865
    ]
  },
  {
    "id": "adafruit-module-4438",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4438: EAGLE Adafruit_LSM6DSOX.brd; commit c05abef4675b header geometry", "url": "https://github.com/adafruit/Adafruit-LSM6DSOX-PCB/blob/c05abef4675b0380fbf3d23171615a2f1ac0b130/Adafruit_LSM6DSOX.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "42b56029ffb6dddc04ed11b2173ebecbe7d558b3489007661546e2276abea58a"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4438",
    "name": "Adafruit LSM6DSOX 6 DoF Accelerometer and Gyroscope",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4438",
    "revision": "EAGLE Adafruit_LSM6DSOX.brd; commit c05abef4675b",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4438"]["contacts"],
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
    "artwork": assets["adafruit-module-4438"]["artwork"],
    "backArtwork": assets["adafruit-module-4438"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4438"]["provenance"],
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
        "conn4-1",
        "jp1-3",
        "jp2-1"
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
        "url": "https://www.adafruit.com/product/4438"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LSM6DSOX-PCB/blob/c05abef4675b0380fbf3d23171615a2f1ac0b130/Adafruit_LSM6DSOX.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LSM6DSOX-PCB/blob/c05abef4675b0380fbf3d23171615a2f1ac0b130/Adafruit_LSM6DSOX.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LSM6DSOX-PCB/blob/c05abef4675b0380fbf3d23171615a2f1ac0b130/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4438",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4438",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4438. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.742,
      12.286,
      4.7005
    ],
    "backArtworkBounds": [
      -7.8505,
      1.6363999999999999,
      -4.4685,
      3.7484
    ]
  },
  {
    "id": "adafruit-module-4503",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4503: EAGLE Adafruit_LSM6DS3.brd; commit 9bf02b7214d3 header geometry", "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-PCB/blob/9bf02b7214d35f2699bfd24737865511e4f9f114/Adafruit_LSM6DS3.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "7a51838fd1cd4c5454fbd59fff928d67bd5fff31385b1db71daac461e2c5344d"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4503",
    "name": "Adafruit LSM6DS3TR-C 6-DoF Accel + Gyro IMU",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4503",
    "revision": "EAGLE Adafruit_LSM6DS3.brd; commit 9bf02b7214d3",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4503"]["contacts"],
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
    "artwork": assets["adafruit-module-4503"]["artwork"],
    "backArtwork": assets["adafruit-module-4503"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4503"]["provenance"],
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
        "conn4-1",
        "jp1-3",
        "jp2-1"
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
        "url": "https://www.adafruit.com/product/4503"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-PCB/blob/9bf02b7214d35f2699bfd24737865511e4f9f114/Adafruit_LSM6DS3.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-PCB/blob/9bf02b7214d35f2699bfd24737865511e4f9f114/Adafruit_LSM6DS3.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LSM6DS3TR-C-PCB/blob/9bf02b7214d35f2699bfd24737865511e4f9f114/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4503",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4503",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4503. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.742,
      12.286,
      4.7005
    ],
    "backArtworkBounds": [
      -7.8505,
      1.6363999999999999,
      -4.4685,
      3.7484
    ]
  },
  {
    "id": "adafruit-module-6489",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6489: EAGLE Adafruit TMAG5273A1 3D Hall Effect Magnetometer Breakout.brd; commit 543c3c93357a header geometry", "url": "https://github.com/adafruit/Adafruit-TMAG5273-3D-Hall-Effect-Magnetometer-Breakout-PCB/blob/543c3c93357a56703c6f33de5c8e277451bf9f1d/Adafruit%20TMAG5273A1%203D%20Hall%20Effect%20Magnetometer%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "82f4e2ee60cbc045db2fe6bf51e6c48f66313e21494c0ce28c489d3f6893b3c0"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6489",
    "name": "Adafruit TMAG5273 (A1) 3D Hall Effect Magnetometer Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6489",
    "revision": "EAGLE Adafruit TMAG5273A1 3D Hall Effect Magnetometer Breakout.brd; commit 543c3c93357a",
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
    "contacts": assets["adafruit-module-6489"]["contacts"],
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
    "artwork": assets["adafruit-module-6489"]["artwork"],
    "backArtwork": assets["adafruit-module-6489"]["backArtwork"],
    "provenance": assets["adafruit-module-6489"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6489"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TMAG5273-3D-Hall-Effect-Magnetometer-Breakout-PCB/blob/543c3c93357a56703c6f33de5c8e277451bf9f1d/Adafruit%20TMAG5273A1%203D%20Hall%20Effect%20Magnetometer%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TMAG5273-3D-Hall-Effect-Magnetometer-Breakout-PCB/blob/543c3c93357a56703c6f33de5c8e277451bf9f1d/Adafruit%20TMAG5273A1%203D%20Hall%20Effect%20Magnetometer%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TMAG5273-3D-Hall-Effect-Magnetometer-Breakout-PCB/blob/543c3c93357a56703c6f33de5c8e277451bf9f1d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6489",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6489",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6489. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    ]
  },
  {
    "id": "adafruit-module-2472",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6"],
      "source": {"label": "Adafruit ADA2472: EAGLE Adafruit BNO055 STEMMA QT.brd; commit 64c5a387aa80 header geometry", "url": "https://github.com/adafruit/Adafruit-BNO055-Breakout-PCB/blob/64c5a387aa807edb01eff440d1cd07ce4b608642/Adafruit%20BNO055%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 4, "package": "1X04_ROUND_76"}, {"id": "JP3", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "f3beeaba3b9b8b36b72486bb36e5402a7707927164a0961747fd45bdb1ec0404"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -10.16, "width": 25.4, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2472",
    "name": "Adafruit 9-DOF Absolute Orientation IMU Fusion Breakout - BNO055",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2472",
    "revision": "EAGLE Adafruit BNO055 STEMMA QT.brd; commit 64c5a387aa80",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "contacts": assets["adafruit-module-2472"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 7.62,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2472"]["artwork"],
    "backArtwork": assets["adafruit-module-2472"]["backArtwork"],
    "provenance": assets["adafruit-module-2472"]["provenance"],
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
        "url": "https://www.adafruit.com/product/2472"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-BNO055-Breakout-PCB/blob/64c5a387aa807edb01eff440d1cd07ce4b608642/Adafruit%20BNO055%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-BNO055-Breakout-PCB/blob/64c5a387aa807edb01eff440d1cd07ce4b608642/Adafruit%20BNO055%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-BNO055-Breakout-PCB/blob/64c5a387aa807edb01eff440d1cd07ce4b608642/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2472",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2472",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2472. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.8055,
      12.286,
      4.891
    ],
    "backArtworkBounds": [
      -1.5005,
      0.4045,
      1.8815,
      2.5165
    ]
  },
  {
    "id": "adafruit-module-4097",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp2-1", "jp2-2", "jp2-3", "jp2-4"],
      "source": {"label": "Adafruit ADA4097: EAGLE Adafruit ADXL343 STEMMA QT.brd; commit 13dce5a59630 header geometry", "url": "https://github.com/adafruit/Adafruit_ADXL343_PCB/blob/13dce5a5963041d7d7f60492da459e00a96f4344/Adafruit%20ADXL343%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP2", "count": 4, "package": "1X04_ROUND"}],
        "boardSha256": "0fce811e81158ae6c9f459d94b686b647fe6a567f816b1072f3bb5b1a266ed80"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4097",
    "name": "ADXL343 - Triple-Axis Accelerometer (+-2g/4g/8g/16g) w/ I2C/SPI",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4097",
    "revision": "EAGLE Adafruit ADXL343 STEMMA QT.brd; commit 13dce5a59630",
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
    "contacts": assets["adafruit-module-4097"]["contacts"],
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
    "artwork": assets["adafruit-module-4097"]["artwork"],
    "backArtwork": assets["adafruit-module-4097"]["backArtwork"],
    "provenance": assets["adafruit-module-4097"]["provenance"],
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
        "conn4-mt2",
        "jp2-1"
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
        "url": "https://www.adafruit.com/product/4097"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit_ADXL343_PCB/blob/13dce5a5963041d7d7f60492da459e00a96f4344/Adafruit%20ADXL343%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit_ADXL343_PCB/blob/13dce5a5963041d7d7f60492da459e00a96f4344/Adafruit%20ADXL343%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit_ADXL343_PCB/blob/13dce5a5963041d7d7f60492da459e00a96f4344/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4097",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4097",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4097. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.615,
      12.159,
      3.9405
    ],
    "backArtworkBounds": [
      -7.787,
      -4.866,
      -4.405,
      -2.754
    ]
  },
  {
    "id": "adafruit-module-4022",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6"],
      "source": {"label": "Adafruit ADA4022: EAGLE Adafruit MLX90393 QT.brd; commit 1c5deadca258 header geometry", "url": "https://github.com/adafruit/Adafruit-MLX90393-PCB/blob/1c5deadca25875af5eb643b80ae0b7ece4afbb02/Adafruit%20MLX90393%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}, {"id": "JP4", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "a8e00d9c3c24815fe4cf8d6a632b380934b5eed7db5363dab665b113794989ff"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4022",
    "name": "Adafruit Wide-Range Triple-axis Magnetometer - MLX90393",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4022",
    "revision": "EAGLE Adafruit MLX90393 QT.brd; commit 1c5deadca258",
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
    "contacts": assets["adafruit-module-4022"]["contacts"],
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
    "artwork": assets["adafruit-module-4022"]["artwork"],
    "backArtwork": assets["adafruit-module-4022"]["backArtwork"],
    "provenance": assets["adafruit-module-4022"]["provenance"],
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
        "conn4-mt2",
        "jp4-6"
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
        "url": "https://www.adafruit.com/product/4022"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MLX90393-PCB/blob/1c5deadca25875af5eb643b80ae0b7ece4afbb02/Adafruit%20MLX90393%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MLX90393-PCB/blob/1c5deadca25875af5eb643b80ae0b7ece4afbb02/Adafruit%20MLX90393%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MLX90393-PCB/blob/1c5deadca25875af5eb643b80ae0b7ece4afbb02/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4022",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4022",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4022. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.342,
      12.159,
      4.764
    ],
    "backArtworkBounds": [
      -7.4568,
      -5.2978,
      -2.8048,
      -1.9158
    ]
  },
];
