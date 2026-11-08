import assets from "./humidity-environment-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4636",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4636: EAGLE Adafruit_SHTC3.brd; commit 762d5a5d96ba header geometry", "url": "https://github.com/adafruit/Adafruit-SHTC3-PCB/blob/762d5a5d96ba72ec14e1fc05e32a3f5ce00cde7c/Adafruit_SHTC3.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "58f96d715de1d60766b021b841543808f65f11b21a1254924ad5a0da364358af"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4636",
    "name": "Adafruit Sensirion SHTC3 Temperature & Humidity Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4636",
    "revision": "EAGLE Adafruit_SHTC3.brd; commit 762d5a5d96ba",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4636"]["contacts"],
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
    "artwork": assets["adafruit-module-4636"]["artwork"],
    "backArtwork": assets["adafruit-module-4636"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4636"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4636"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SHTC3-PCB/blob/762d5a5d96ba72ec14e1fc05e32a3f5ce00cde7c/Adafruit_SHTC3.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SHTC3-PCB/blob/762d5a5d96ba72ec14e1fc05e32a3f5ce00cde7c/Adafruit_SHTC3.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SHTC3-PCB/blob/762d5a5d96ba72ec14e1fc05e32a3f5ce00cde7c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4636",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4636",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4636. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.6370000000000005,
      12.159,
      3.934
    ]
  },
  {
    "id": "adafruit-module-4716",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA4716: EAGLE Adafruit MS8607.brd; commit 56dfd5af979f header geometry", "url": "https://github.com/adafruit/Adafruit-MS8607-PCB/blob/56dfd5af979fb63cff98ebcfe2170644b4439430/Adafruit%20MS8607.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND"}],
        "boardSha256": "b934e2e1cc743b48e1141385f11722f6b817003f227f7512b7b2d94a8aa9cab1"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4716",
    "name": "Adafruit MS8607 Pressure Humidity Temperature PHT Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4716",
    "revision": "EAGLE Adafruit MS8607.brd; commit 56dfd5af979f",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4716"]["contacts"],
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
    "artwork": assets["adafruit-module-4716"]["artwork"],
    "backArtwork": assets["adafruit-module-4716"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4716"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4716"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MS8607-PCB/blob/56dfd5af979fb63cff98ebcfe2170644b4439430/Adafruit%20MS8607.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MS8607-PCB/blob/56dfd5af979fb63cff98ebcfe2170644b4439430/Adafruit%20MS8607.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MS8607-PCB/blob/56dfd5af979fb63cff98ebcfe2170644b4439430/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4716",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4716",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4716. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      4.2055
    ]
  },
  {
    "id": "adafruit-module-4867",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4867: EAGLE Adafruit SCD30.brd; commit 54178bea411a header geometry", "url": "https://github.com/adafruit/Adafruit-SCD-30-PCB/blob/54178bea411a7661007c529d41ed45fce767d155/Adafruit%20SCD30.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "0b55346d46f6413a7a41913e75a0a980c3b62fff00667b5345b1194239c78bdc"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -12.7, "width": 50.8, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4867",
    "name": "Adafruit SCD-30 - NDIR True CO2 Temperature and Humidity Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4867",
    "revision": "EAGLE Adafruit SCD30.brd; commit 54178bea411a",
    "category": "Sensors",
    "board": {
      "width": 50.8,
      "height": 25.4,
      "color": "#246545",
      "outline": "M-25.4 10.16A2.54 2.54 0 0 0 -22.86 12.7L22.86 12.7A2.604274 2.604274 0 0 0 25.4 10.033L25.4 -10.287A2.477314 2.477314 0 0 0 22.86 -12.7L-22.86 -12.7A2.54 2.54 0 0 0 -25.4 -10.16L-25.4 10.16Z"
    },
    "contacts": assets["adafruit-module-4867"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": 22.86,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 22.86,
        "y": 10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4867"]["artwork"],
    "backArtwork": assets["adafruit-module-4867"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4867"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4867"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SCD-30-PCB/blob/54178bea411a7661007c529d41ed45fce767d155/Adafruit%20SCD30.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SCD-30-PCB/blob/54178bea411a7661007c529d41ed45fce767d155/Adafruit%20SCD30.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SCD-30-PCB/blob/54178bea411a7661007c529d41ed45fce767d155/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4867",
      "status": "Official Adafruit stock feed reported 93 available.",
      "sku": "ADA4867",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "93"
    },
    "description": "Adafruit ADA4867. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -24.858999999999998,
      -11.482999999999999,
      18.022,
      11.597
    ]
  },
  {
    "id": "adafruit-module-4832",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA4832: EAGLE Adafruit HTU31D.brd; commit 9ac7a4470edb header geometry", "url": "https://github.com/adafruit/Adafruit-HTU31-PCB/blob/9ac7a4470edb8555ba33d1aba62f260fa4cc63da/Adafruit%20HTU31D.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "f225ef7711081dcb91d7792d8f43c19b019c4bf57821106275a0c732018d7a1e"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4832",
    "name": "Adafruit HTU31 Temperature & Humidity Sensor Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4832",
    "revision": "EAGLE Adafruit HTU31D.brd; commit 9ac7a4470edb",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4832"]["contacts"],
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
    "artwork": assets["adafruit-module-4832"]["artwork"],
    "backArtwork": assets["adafruit-module-4832"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4832"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4832"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-HTU31-PCB/blob/9ac7a4470edb8555ba33d1aba62f260fa4cc63da/Adafruit%20HTU31D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-HTU31-PCB/blob/9ac7a4470edb8555ba33d1aba62f260fa4cc63da/Adafruit%20HTU31D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-HTU31-PCB/blob/9ac7a4470edb8555ba33d1aba62f260fa4cc63da/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4832",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4832",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4832. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.222499999999998,
      -4.123,
      12.2225,
      4.002
    ],
    "backArtworkBounds": [
      5.04,
      -1.2465,
      7.152,
      2.1355
    ]
  },
  {
    "id": "adafruit-module-6478",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "Adafruit ADA6478: EAGLE Adafruit STCC4 and SHT41 CO2 Temperature and Humidity Sensor.brd; commit 3bf8a8ea4042 header geometry", "url": "https://github.com/adafruit/Adafruit-STCC4-and-SHT41-CO2-Temperature-and-Humidity-Sensor-PCB/blob/3bf8a8ea4042964af182c617ce1ab904cc4a7bd1/Adafruit%20STCC4%20and%20SHT41%20CO2%20Temperature%20and%20Humidity%20Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06_ROUND_70"}],
        "boardSha256": "756e9efe91ab128ac8eae841599ca88b9bdba5e0506bd836947dba42974b1e23"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6478",
    "name": "Adafruit STCC4 and SHT41 - CO2, Temperature & Humidity Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6478",
    "revision": "EAGLE Adafruit STCC4 and SHT41 CO2 Temperature and Humidity Sensor.brd; commit 3bf8a8ea4042",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6478"]["contacts"],
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
    "artwork": assets["adafruit-module-6478"]["artwork"],
    "backArtwork": assets["adafruit-module-6478"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6478"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6478"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STCC4-and-SHT41-CO2-Temperature-and-Humidity-Sensor-PCB/blob/3bf8a8ea4042964af182c617ce1ab904cc4a7bd1/Adafruit%20STCC4%20and%20SHT41%20CO2%20Temperature%20and%20Humidity%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STCC4-and-SHT41-CO2-Temperature-and-Humidity-Sensor-PCB/blob/3bf8a8ea4042964af182c617ce1ab904cc4a7bd1/Adafruit%20STCC4%20and%20SHT41%20CO2%20Temperature%20and%20Humidity%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STCC4-and-SHT41-CO2-Temperature-and-Humidity-Sensor-PCB/blob/3bf8a8ea4042964af182c617ce1ab904cc4a7bd1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6478",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6478",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6478. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.904,
      12.159,
      3.888
    ],
    "backArtworkBounds": [
      -8.040999999999999,
      -4.358,
      8.168,
      -1.992
    ]
  },
  {
    "id": "adafruit-module-3251",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA3251: EAGLE Adafruit Si7021 Temperature and Humidity.brd; commit 6ab3474d07ba header geometry", "url": "https://github.com/adafruit/Adafruit-Si7021-PCB/blob/6ab3474d07ba277c08b10f2d322f0f59968b0b9d/Adafruit%20Si7021%20Temperature%20and%20Humidity.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "476abc769a815dcfa9a74c83414bba0fdc080299cd7b882b0002fa3db7dbaa17"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3251",
    "name": "Adafruit Si7021 Temperature & Humidity Sensor Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3251",
    "revision": "EAGLE Adafruit Si7021 Temperature and Humidity.brd; commit 6ab3474d07ba",
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
    "contacts": assets["adafruit-module-3251"]["contacts"],
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
    "artwork": assets["adafruit-module-3251"]["artwork"],
    "backArtwork": assets["adafruit-module-3251"]["backArtwork"],
    "provenance": assets["adafruit-module-3251"]["provenance"],
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
        "url": "https://www.adafruit.com/product/3251"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Si7021-PCB/blob/6ab3474d07ba277c08b10f2d322f0f59968b0b9d/Adafruit%20Si7021%20Temperature%20and%20Humidity.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Si7021-PCB/blob/6ab3474d07ba277c08b10f2d322f0f59968b0b9d/Adafruit%20Si7021%20Temperature%20and%20Humidity.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Si7021-PCB/blob/6ab3474d07ba277c08b10f2d322f0f59968b0b9d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3251",
      "status": "Official Adafruit stock feed reported 19 available.",
      "sku": "ADA3251",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "19"
    },
    "description": "Adafruit ADA3251. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    "id": "adafruit-module-5190",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5"],
      "source": {"label": "Adafruit ADA5190: EAGLE Adafruit SCD-41.brd; commit c83995482b4c header geometry", "url": "https://github.com/adafruit/Adafruit-SCD-4x-PCB/blob/c83995482b4c830a835caef158e6196a507025b3/Adafruit%20SCD-41.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 5, "package": "1X05_ROUND_76"}],
        "boardSha256": "ff2209c94618f266f03a1f8fcde63c90703752aaea600e6d5fa7c5a4af365881"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -11.43, "width": 25.4, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5190",
    "name": "Adafruit SCD-41 - True CO2 Temperature and Humidity Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5190",
    "revision": "EAGLE Adafruit SCD-41.brd; commit c83995482b4c",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-12.7 8.89A2.54 2.54 0 0 0 -10.16 11.43L10.16 11.43A2.54 2.54 0 0 0 12.7 8.89L12.7 -8.89A2.54 2.54 0 0 0 10.16 -11.43L-10.16 -11.43A2.54 2.54 0 0 0 -12.7 -8.89L-12.7 8.89Z"
    },
    "contacts": assets["adafruit-module-5190"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -8.89,
        "drill": 3
      },
      {
        "x": 10.16,
        "y": -8.89,
        "drill": 3
      },
      {
        "x": -10.16,
        "y": 8.89,
        "drill": 3
      },
      {
        "x": 10.16,
        "y": 8.89,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-5190"]["artwork"],
    "backArtwork": assets["adafruit-module-5190"]["backArtwork"],
    "provenance": assets["adafruit-module-5190"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5190"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SCD-4x-PCB/blob/c83995482b4c830a835caef158e6196a507025b3/Adafruit%20SCD-41.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SCD-4x-PCB/blob/c83995482b4c830a835caef158e6196a507025b3/Adafruit%20SCD-41.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SCD-4x-PCB/blob/c83995482b4c830a835caef158e6196a507025b3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5190",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5190",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5190. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -7.558,
      12.286,
      6.428
    ],
    "backArtworkBounds": [
      -7.152,
      -8.549,
      6.898,
      -6.437
    ]
  },
  {
    "id": "adafruit-module-1899",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA1899: EAGLE Adafruit HTU21D-F STEMMA QT.brd; commit 9a352b1841ff header geometry", "url": "https://github.com/adafruit/Adafruit-HTU21D-Breakout-PCB/blob/9a352b1841ff45b684a7263721490af9cc6a455f/Adafruit%20HTU21D-F%20STEMMA%20QT.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "6244b55dba42e5284ec43f8161aed0f176cc36af163e12a19896a7e13bd093cf"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1899",
    "name": "Adafruit HTU21D-F Temperature & Humidity Sensor Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1899",
    "revision": "EAGLE Adafruit HTU21D-F STEMMA QT.brd; commit 9a352b1841ff",
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
    "contacts": assets["adafruit-module-1899"]["contacts"],
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
    "artwork": assets["adafruit-module-1899"]["artwork"],
    "backArtwork": assets["adafruit-module-1899"]["backArtwork"],
    "provenance": assets["adafruit-module-1899"]["provenance"],
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
        "url": "https://www.adafruit.com/product/1899"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-HTU21D-Breakout-PCB/blob/9a352b1841ff45b684a7263721490af9cc6a455f/Adafruit%20HTU21D-F%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-HTU21D-Breakout-PCB/blob/9a352b1841ff45b684a7263721490af9cc6a455f/Adafruit%20HTU21D-F%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-HTU21D-Breakout-PCB/blob/9a352b1841ff45b684a7263721490af9cc6a455f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1899",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1899",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1899. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    "id": "adafruit-module-3660",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7"],
      "source": {"label": "Adafruit ADA3660: EAGLE Adafruit BME680.brd; commit 2d1e857d88c1 header geometry", "url": "https://github.com/adafruit/Adafruit-BME680-PCB/blob/2d1e857d88c157422347d2568fdfcd76155c1997/Adafruit%20BME680.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07_ROUND_70"}],
        "boardSha256": "482cb7b4bc94ba5d7bd31e36109b513204b307caf7318202cba29f0f747e9859"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -8.89, "width": 25.4, "height": 17.78}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3660",
    "name": "Adafruit BME680 - Temperature, Humidity, Pressure and Gas Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3660",
    "revision": "EAGLE Adafruit BME680.brd; commit 2d1e857d88c1",
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
    "contacts": assets["adafruit-module-3660"]["contacts"],
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
    "artwork": assets["adafruit-module-3660"]["artwork"],
    "backArtwork": assets["adafruit-module-3660"]["backArtwork"],
    "provenance": assets["adafruit-module-3660"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-6"
      ],
      [
        "conn3-1",
        "conn4-1",
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
        "url": "https://www.adafruit.com/product/3660"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-BME680-PCB/blob/2d1e857d88c157422347d2568fdfcd76155c1997/Adafruit%20BME680.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-BME680-PCB/blob/2d1e857d88c157422347d2568fdfcd76155c1997/Adafruit%20BME680.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-BME680-PCB/blob/2d1e857d88c157422347d2568fdfcd76155c1997/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3660",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3660",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3660. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.804,
      12.286,
      3.9388
    ],
    "backArtworkBounds": [
      -1.437,
      2.627,
      1.945,
      4.739
    ]
  },
];
