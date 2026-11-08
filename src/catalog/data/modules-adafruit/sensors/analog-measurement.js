import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5832",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA5832: EAGLE Adafruit INA228 I2C Power Monitor.brd; commit 61b0d990f8e5 header geometry", "url": "https://github.com/adafruit/Adafruit-INA228-PCB/blob/61b0d990f8e5f2e6df1ee5d270c501d17f53242d/Adafruit%20INA228%20I2C%20Power%20Monitor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "e59bb5abc4fc6c6ccabb35757e24e5e2642fd812210468ee798deaf9143bba97"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -10.16, "width": 25.4, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA5832",
    "name": "Adafruit INA228 - I2C 85V, 20-bit High or Low Side Power Monitor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5832",
    "revision": "EAGLE Adafruit INA228 I2C Power Monitor.brd; commit 61b0d990f8e5",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "contacts": assets["adafruit-module-5832"]["contacts"],
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
      }
    ],
    "artwork": assets["adafruit-module-5832"]["artwork"],
    "backArtwork": assets["adafruit-module-5832"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5832"]["provenance"],
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
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-3"
      ],
      [
        "jp2-5",
        "x1-2"
      ],
      [
        "jp2-6",
        "x1-1"
      ],
      [
        "jp2-7",
        "x1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5832"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-INA228-PCB/blob/61b0d990f8e5f2e6df1ee5d270c501d17f53242d/Adafruit%20INA228%20I2C%20Power%20Monitor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-INA228-PCB/blob/61b0d990f8e5f2e6df1ee5d270c501d17f53242d/Adafruit%20INA228%20I2C%20Power%20Monitor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-INA228-PCB/blob/61b0d990f8e5f2e6df1ee5d270c501d17f53242d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5832",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5832",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5832. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -9.863,
      12.286,
      5.25
    ],
    "backArtworkBounds": [
      0.087,
      -9.565,
      9.946,
      5.628
    ]
  },
  {
    "id": "adafruit-module-1164",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "Adafruit ADA1164: EAGLE Adafruit INA169 CurPowerMonitor.brd; commit 8c1084623d75 header geometry", "url": "https://github.com/adafruit/Adafruit-INA169-Breakout-PCB/blob/8c1084623d75d41d05dd5070c191f7a1176434ca/Adafruit%20INA169%20CurPowerMonitor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05_ROUND_70"}],
        "boardSha256": "b7a077685b223df3567e3263de127fa30daf9e99063459470749f3162796f435"
      },
      "bodyRegions": [
        {"x": -11.43, "y": -10.485, "width": 22.86, "height": 20.97},
        {"x": -3.627, "y": -10.491, "width": 7.0, "height": 7.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA1164",
    "name": "INA169 Analog DC Current Sensor Breakout - 60V 5A Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1164",
    "revision": "EAGLE Adafruit INA169 CurPowerMonitor.brd; commit 8c1084623d75",
    "category": "Sensors",
    "board": {
      "width": 22.86,
      "height": 20.97,
      "color": "#246545",
      "outline": "M-11.43 -7.945A2.54 2.54 0 0 1 -8.89 -10.485L8.89 -10.485A2.54 2.54 0 0 1 11.43 -7.945L11.43 7.945A2.54 2.54 0 0 1 8.89 10.485L-8.89 10.485A2.54 2.54 0 0 1 -11.43 7.945L-11.43 -7.945Z"
    },
    "contacts": assets["adafruit-module-1164"]["contacts"],
    "holes": [
      {
        "x": 8.89,
        "y": 7.945,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": 7.945,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": -7.945,
        "drill": 2.5
      },
      {
        "x": 8.89,
        "y": -7.945,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1164"]["artwork"],
    "backArtwork": assets["adafruit-module-1164"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1164"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "jp1-3"
      ],
      [
        "j1-2",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1164"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-INA169-Breakout-PCB/blob/8c1084623d75d41d05dd5070c191f7a1176434ca/Adafruit%20INA169%20CurPowerMonitor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-INA169-Breakout-PCB/blob/8c1084623d75d41d05dd5070c191f7a1176434ca/Adafruit%20INA169%20CurPowerMonitor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-INA169-Breakout-PCB/blob/8c1084623d75d41d05dd5070c191f7a1176434ca/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1164",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1164",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1164. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.986,
      -10.530999999999999,
      11.089,
      5.191
    ]
  },
  {
    "id": "adafruit-module-6340",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "Adafruit ADA6340: EAGLE Adafruit INA237 Power Monitor PCB.brd; commit d62a2a17f071 header geometry", "url": "https://github.com/adafruit/Adafruit-INA237-Power-Monitor-PCB/blob/d62a2a17f07157d492c9cd14a48fe0efc3f8dbbc/Adafruit%20INA237%20Power%20Monitor%20PCB.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 8, "package": "1X08_ROUND_70"}],
        "boardSha256": "75561ca68143f5acc0e6eda7f3be92d3379fd70b83fbf4751a1bc05687c8f385"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -10.16, "width": 25.4, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6340",
    "name": "Adafruit INA237 85V 10A 16-bit DC Current Voltage Power Monitor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6340",
    "revision": "EAGLE Adafruit INA237 Power Monitor PCB.brd; commit d62a2a17f071",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "contacts": assets["adafruit-module-6340"]["contacts"],
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
      }
    ],
    "artwork": assets["adafruit-module-6340"]["artwork"],
    "backArtwork": assets["adafruit-module-6340"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6340"]["provenance"],
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
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-3"
      ],
      [
        "jp2-5",
        "x1-2"
      ],
      [
        "jp2-6",
        "x1-1"
      ],
      [
        "jp2-7",
        "x1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6340"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-INA237-Power-Monitor-PCB/blob/d62a2a17f07157d492c9cd14a48fe0efc3f8dbbc/Adafruit%20INA237%20Power%20Monitor%20PCB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-INA237-Power-Monitor-PCB/blob/d62a2a17f07157d492c9cd14a48fe0efc3f8dbbc/Adafruit%20INA237%20Power%20Monitor%20PCB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-INA237-Power-Monitor-PCB/blob/d62a2a17f07157d492c9cd14a48fe0efc3f8dbbc/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6340",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6340",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6340. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -9.863,
      12.286,
      5.25
    ],
    "backArtworkBounds": [
      0.087,
      -9.565,
      9.946,
      5.628
    ]
  },
  {
    "id": "adafruit-module-6062",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12", "jp3-13", "jp3-14", "jp3-15"],
      "source": {"label": "Adafruit ADA6062: EAGLE Adafruit INA3221 Breakout.brd; commit 8512a5309b71 header geometry", "url": "https://github.com/adafruit/Adafruit-INA3221-Breakout-PCB/blob/8512a5309b714b62bf669fd1b85787a5ef051a16/Adafruit%20INA3221%20Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 15, "package": "1X15_ROUND_70"}],
        "boardSha256": "74c75a06b769f428b50b97ebb83ad8ccfdb5a6e6c81e3d4e61904a286eed4f8e"
      },
      "bodyRegions": [
        {"x": -19.177, "y": -11.43, "width": 38.354, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA6062",
    "name": "Adafruit INA3221 - Triple 0-26 VDC, ±3.2 Amp Power Monitor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6062",
    "revision": "EAGLE Adafruit INA3221 Breakout.brd; commit 8512a5309b71",
    "category": "Sensors",
    "board": {
      "width": 38.354,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-19.177 8.89A2.54 2.54 0 0 0 -16.637 11.43L16.637 11.43A2.54 2.54 0 0 0 19.177 8.89L19.177 -8.89A2.54 2.54 0 0 0 16.637 -11.43L-16.637 -11.43A2.54 2.54 0 0 0 -19.177 -8.89L-19.177 8.89Z"
    },
    "contacts": assets["adafruit-module-6062"]["contacts"],
    "holes": [
      {
        "x": -16.637,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": 16.637,
        "y": -8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6062"]["artwork"],
    "backArtwork": assets["adafruit-module-6062"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6062"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "jp3-9"
      ],
      [
        "j1-2",
        "jp3-10"
      ],
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-4"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-3"
      ],
      [
        "j2-1",
        "jp3-7"
      ],
      [
        "j2-2",
        "jp3-8"
      ],
      [
        "j3-1",
        "jp3-5"
      ],
      [
        "j3-2",
        "jp3-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6062"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-INA3221-Breakout-PCB/blob/8512a5309b714b62bf669fd1b85787a5ef051a16/Adafruit%20INA3221%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-INA3221-Breakout-PCB/blob/8512a5309b714b62bf669fd1b85787a5ef051a16/Adafruit%20INA3221%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-INA3221-Breakout-PCB/blob/8512a5309b714b62bf669fd1b85787a5ef051a16/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6062",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6062",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6062. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -18.762999999999998,
      -9.354999999999999,
      18.763,
      6.517
    ]
  },
];
