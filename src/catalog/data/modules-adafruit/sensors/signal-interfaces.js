import assets from "./signal-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4741",
    "sku": "ADA4741",
    "name": "Adafruit Grayscale 1.5\" 128x128 OLED Graphic Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4741",
    "revision": "EAGLE Adafruit Grayscale 1.5-inch 128x128 OLED.brd; commit a48daa304b9d",
    "category": "Sensors",
    "board": {
      "width": 35.56,
      "height": 46.99,
      "color": "#246545",
      "outline": "M-17.78 20.955A2.54 2.54 0 0 0 -15.24 23.495A2.54 2.54 0 0 0 -12.7 20.955L-12.7 18.415L12.7 18.415L12.7 20.955A2.54 2.54 0 0 0 15.24 23.495A2.54 2.54 0 0 0 17.78 20.955L17.78 -20.955A2.54 2.54 0 0 0 15.24 -23.495L-15.24 -23.495A2.54 2.54 0 0 0 -17.78 -20.955L-17.78 20.955Z"
    },
    "contacts": assets["adafruit-module-4741"]["contacts"],
    "holes": [
      {
        "x": -15.24,
        "y": -20.955,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -20.955,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": 20.955,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": 20.955,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4741"]["artwork"],
    "backArtwork": assets["adafruit-module-4741"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4741"]["provenance"],
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
        "url": "https://www.adafruit.com/product/4741"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Grayscale-1.5-inch-128x128-OLED-PCB/blob/a48daa304b9d13a8d1f4ab29866c116abd44727d/Adafruit%20Grayscale%201.5-inch%20128x128%20OLED.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Grayscale-1.5-inch-128x128-OLED-PCB/blob/a48daa304b9d13a8d1f4ab29866c116abd44727d/Adafruit%20Grayscale%201.5-inch%20128x128%20OLED.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Grayscale-1.5-inch-128x128-OLED-PCB/blob/a48daa304b9d13a8d1f4ab29866c116abd44727d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4741",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4741",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4741. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.366,
      -16.163999999999998,
      17.366,
      7.533
    ]
  },
  {
    "id": "adafruit-module-4712",
    "sku": "ADA4712",
    "name": "Adafruit LC709203F LiPoly / LiIon Fuel Gauge and Battery Monitor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4712",
    "revision": "EAGLE Adafruit LC709203F LiPoly LiIon Fuel Gauge and Battery Monitor.brd; commit 65d60917fbe7",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "contacts": assets["adafruit-module-4712"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -7.62,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": -7.62,
        "drill": 2.54
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
    "artwork": assets["adafruit-module-4712"]["artwork"],
    "backArtwork": assets["adafruit-module-4712"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4712"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn4-1",
        "x1-1",
        "x2-1"
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
        "x1-2",
        "x2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4712"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LC709203F-PCB/blob/65d60917fbe771308a387132dc943800a52f1380/Adafruit%20LC709203F%20LiPoly%20LiIon%20Fuel%20Gauge%20and%20Battery%20Monitor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LC709203F-PCB/blob/65d60917fbe771308a387132dc943800a52f1380/Adafruit%20LC709203F%20LiPoly%20LiIon%20Fuel%20Gauge%20and%20Battery%20Monitor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LC709203F-PCB/blob/65d60917fbe771308a387132dc943800a52f1380/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4712",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4712",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4712. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.222499999999998,
      -9.643999999999998,
      12.2225,
      4.988
    ],
    "backArtworkBounds": [
      -11.088999999999999,
      -5.628,
      -7.707,
      -3.516
    ]
  },
  {
    "id": "adafruit-module-1602",
    "sku": "ADA1602",
    "name": "CAP1188 - 8-Key Capacitive Touch Sensor Breakout - I2C or SPI",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1602",
    "revision": "EAGLE Adafruit CAP1188.brd; commit cf65678210cb",
    "category": "Sensors",
    "board": {
      "width": 17.78,
      "height": 41.91,
      "color": "#246545",
      "outline": "M-8.89 18.415A2.54 2.54 0 0 0 -6.35 20.955L6.35 20.955A2.54 2.54 0 0 0 8.89 18.415L8.89 -18.415A2.54 2.54 0 0 0 6.35 -20.955L-6.35 -20.955A2.54 2.54 0 0 0 -8.89 -18.415L-8.89 18.415Z"
    },
    "contacts": assets["adafruit-module-1602"]["contacts"],
    "holes": [
      {
        "x": -6.35,
        "y": 18.415,
        "drill": 2.2
      },
      {
        "x": 6.35,
        "y": 18.415,
        "drill": 2.2
      },
      {
        "x": -6.35,
        "y": -18.415,
        "drill": 2.2
      },
      {
        "x": 6.35,
        "y": -18.415,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-1602"]["artwork"],
    "backArtwork": assets["adafruit-module-1602"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1602"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1602"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CAP1188-PCB/blob/cf65678210cb9bc8a792efa091d49082e4ad6a2b/Adafruit%20CAP1188.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CAP1188-PCB/blob/cf65678210cb9bc8a792efa091d49082e4ad6a2b/Adafruit%20CAP1188.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CAP1188-PCB/blob/cf65678210cb9bc8a792efa091d49082e4ad6a2b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1602",
      "status": "Official Adafruit stock feed reported 24 available.",
      "sku": "ADA1602",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "24"
    },
    "description": "Adafruit ADA1602. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.242,
      -15.76,
      5.408427,
      15.798
    ]
  },
];
