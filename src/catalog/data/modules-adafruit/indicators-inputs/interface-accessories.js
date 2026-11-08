import assets from "./interface-accessories-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5764",
    "sku": "ADA5764",
    "name": "Adafruit TRRS Jack Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5764",
    "revision": "EAGLE Adafruit TRRS Jack Breakout.brd; commit d6d4fe70bc72",
    "category": "Indicators",
    "board": {
      "width": 17.78,
      "height": 17.145,
      "color": "#246545",
      "outline": "M-8.89 6.0325A2.54 2.54 0 0 0 -6.35 8.5725L6.35 8.5725A2.54 2.54 0 0 0 8.89 6.0325L8.89 -6.1595A2.477314 2.477314 0 0 0 6.35 -8.5725L-6.35 -8.5725A2.477314 2.477314 0 0 0 -8.89 -6.1595L-8.89 6.0325Z"
    },
    "contacts": assets["adafruit-module-5764"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -5.9565,
        "drill": 1.2
      },
      {
        "x": 0.1,
        "y": 1.0435,
        "drill": 1.2
      },
      {
        "x": -6.35,
        "y": -6.0325,
        "drill": 2.2
      },
      {
        "x": 6.35,
        "y": -6.0325,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-5764"]["artwork"],
    "backArtwork": assets["adafruit-module-5764"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5764"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-1"
      ],
      [
        "jp1-2",
        "x1-3"
      ],
      [
        "jp1-3",
        "x1-5"
      ],
      [
        "jp1-4",
        "x1-6"
      ],
      [
        "jp1-5",
        "x1-4"
      ],
      [
        "jp1-6",
        "x1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5764"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TRRS-Jack-Breakout-PCB/blob/d6d4fe70bc727056076c4603e90112b8b1c6d006/Adafruit%20TRRS%20Jack%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TRRS-Jack-Breakout-PCB/blob/d6d4fe70bc727056076c4603e90112b8b1c6d006/Adafruit%20TRRS%20Jack%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TRRS-Jack-Breakout-PCB/blob/d6d4fe70bc727056076c4603e90112b8b1c6d006/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5764",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5764",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5764. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.192572,
      -10.585372,
      3.192572,
      3.395565
    ]
  },
  {
    "id": "adafruit-module-5221",
    "sku": "ADA5221",
    "name": "Adafruit ANO Rotary Navigation Encoder Breakout PCB",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5221",
    "revision": "EAGLE Adafruit ANO Rotary Encoder Breakout.brd; commit b6d4e909afa8",
    "category": "Inputs",
    "board": {
      "width": 35.56,
      "height": 38.1,
      "color": "#246545",
      "outline": "M17.78 -16.51A2.54 2.54 0 0 0 15.24 -19.05L-15.24 -19.05A2.54 2.54 0 0 0 -17.78 -16.51L-17.78 16.51A2.54 2.54 0 0 0 -15.24 19.05L15.24 19.05A2.54 2.54 0 0 0 17.78 16.51L17.78 -16.51Z"
    },
    "contacts": assets["adafruit-module-5221"]["contacts"],
    "holes": [
      {
        "x": -3.181981,
        "y": 1.911981,
        "drill": 1.6
      },
      {
        "x": 3.181981,
        "y": -4.451981,
        "drill": 1.6
      },
      {
        "x": -10.606602,
        "y": 9.336602,
        "drill": 4
      },
      {
        "x": 10.606602,
        "y": -11.876602,
        "drill": 4
      },
      {
        "x": -10.606602,
        "y": -11.876602,
        "drill": 4
      },
      {
        "x": 10.606602,
        "y": 9.336602,
        "drill": 4
      },
      {
        "x": 15.24,
        "y": 13.97,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": 13.97,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -16.51,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": -16.51,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5221"]["artwork"],
    "backArtwork": assets["adafruit-module-5221"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5221"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5221"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-Breakout-PCB/blob/b6d4e909afa879750c0bd96747585dc598a90a67/Adafruit%20ANO%20Rotary%20Encoder%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-Breakout-PCB/blob/b6d4e909afa879750c0bd96747585dc598a90a67/Adafruit%20ANO%20Rotary%20Encoder%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-Breakout-PCB/blob/b6d4e909afa879750c0bd96747585dc598a90a67/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5221",
      "status": "Official Adafruit stock feed reported 12 available.",
      "sku": "ADA5221",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "12"
    },
    "description": "Adafruit ADA5221. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part. This is an unpopulated passive carrier PCB; the intended device pin names identify its traces and no active driver is fitted.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "backArtworkBounds": [
      -14.747820999999998,
      -16.017821,
      14.747821,
      13.477821
    ]
  },
  {
    "id": "adafruit-module-5740",
    "sku": "ADA5740",
    "name": "Adafruit ANO Rotary Navigation Encoder to I2C Stemma QT Adapter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5740",
    "revision": "EAGLE Adafruit ANO Rotary Encoder to I2C.brd; commit 4bf9961d2f3b",
    "category": "Inputs",
    "board": {
      "width": 35.56,
      "height": 40.64,
      "color": "#246545",
      "outline": "M17.78 -17.78A2.54 2.54 0 0 0 15.24 -20.32L-15.24 -20.32A2.54 2.54 0 0 0 -17.78 -17.78L-17.78 17.78A2.54 2.54 0 0 0 -15.24 20.32L15.24 20.32A2.54 2.54 0 0 0 17.78 17.78L17.78 -17.78Z"
    },
    "contacts": assets["adafruit-module-5740"]["contacts"],
    "holes": [
      {
        "x": -3.181981,
        "y": 3.181981,
        "drill": 1.6
      },
      {
        "x": 3.181981,
        "y": -3.181981,
        "drill": 1.6
      },
      {
        "x": -10.606602,
        "y": 10.606602,
        "drill": 4
      },
      {
        "x": 10.606602,
        "y": -10.606602,
        "drill": 4
      },
      {
        "x": -10.606602,
        "y": -10.606602,
        "drill": 4
      },
      {
        "x": 10.606602,
        "y": 10.606602,
        "drill": 4
      },
      {
        "x": 15.24,
        "y": 17.78,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": 17.78,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -17.78,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": -17.78,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5740"]["artwork"],
    "backArtwork": assets["adafruit-module-5740"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5740"]["provenance"],
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
        "url": "https://www.adafruit.com/product/5740"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-to-I2C/blob/4bf9961d2f3bbb52921cd88fdf38c1d5cd38e901/Adafruit%20ANO%20Rotary%20Encoder%20to%20I2C.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-to-I2C/blob/4bf9961d2f3bbb52921cd88fdf38c1d5cd38e901/Adafruit%20ANO%20Rotary%20Encoder%20to%20I2C.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-to-I2C/blob/4bf9961d2f3bbb52921cd88fdf38c1d5cd38e901/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5740",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5740",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5740. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.366,
      -7.33,
      17.366,
      14.67
    ],
    "backArtworkBounds": [
      -14.747820999999998,
      -14.747820999999998,
      14.747821,
      14.747821
    ]
  },
  {
    "id": "adafruit-module-5752",
    "sku": "ADA5752",
    "name": "Adafruit I2C Quad Rotary Encoder Breakout with NeoPixel",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5752",
    "revision": "EAGLE Adafruit I2C Quad Rotary Encoder Breakout.brd; commit 635fe5190105",
    "category": "Inputs",
    "board": {
      "width": 76.2,
      "height": 21.59,
      "color": "#246545",
      "outline": "M38.1 8.255A2.54 2.54 0 0 1 35.56 10.795L-35.56 10.795A2.54 2.54 0 0 1 -38.1 8.255L-38.1 -8.255A2.54 2.54 0 0 1 -35.56 -10.795L35.56 -10.795A2.54 2.54 0 0 1 38.1 -8.255L38.1 8.255Z"
    },
    "contacts": assets["adafruit-module-5752"]["contacts"],
    "holes": [
      {
        "x": 19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": 8.255,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5752"]["artwork"],
    "backArtwork": assets["adafruit-module-5752"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5752"]["provenance"],
    "internalConnections": [
      [
        "jp5-1",
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "jp5-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp1-2"
      ],
      [
        "jp5-3",
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ],
      [
        "jp5-4",
        "conn3-3",
        "conn4-3",
        "jp1-4"
      ],
      [
        "jp5-5",
        "jp1-5"
      ],
      [
        "jp5-6",
        "jp1-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5752"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-I2C-Quad-Rotary-Encoder-Breakout-PCB/blob/635fe51901050a78f4ecf4533022d0e440b82875/Adafruit%20I2C%20Quad%20Rotary%20Encoder%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-I2C-Quad-Rotary-Encoder-Breakout-PCB/blob/635fe51901050a78f4ecf4533022d0e440b82875/Adafruit%20I2C%20Quad%20Rotary%20Encoder%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-I2C-Quad-Rotary-Encoder-Breakout-PCB/blob/635fe51901050a78f4ecf4533022d0e440b82875/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5752",
      "status": "Official Adafruit stock feed reported 50 available.",
      "sku": "ADA5752",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "50"
    },
    "description": "Adafruit ADA5752. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -34.673,
      -7.3425,
      35.7015,
      9.616
    ],
    "backArtworkBounds": [
      -35.214999999999996,
      -6.64,
      35.215,
      6.64
    ]
  },
  {
    "id": "adafruit-module-3296",
    "sku": "ADA3296",
    "name": "Adafruit DS1307 Real Time Clock Assembled Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3296",
    "revision": "EAGLE DS1307 Rev B.brd; commit 22f84c8b77ca",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 21.59,
      "height": 25.4,
      "color": "#246545",
      "outline": "M8.255 -12.7A2.54 2.54 0 0 1 10.795 -10.16L10.795 10.16A2.54 2.54 0 0 1 8.255 12.7L-8.255 12.7A2.54 2.54 0 0 1 -10.795 10.16L-10.795 -10.16A2.54 2.54 0 0 1 -8.255 -12.7L-4.953 -12.7L-3.28395 -11.03095A2.539999 2.539999 0 0 0 -1.487897 -10.287L2.503897 -10.287A2.54 2.54 0 0 0 4.29995 -11.03095L5.969 -12.7L8.255 -12.7Z"
    },
    "contacts": assets["adafruit-module-3296"]["contacts"],
    "holes": [
      {
        "x": -8.255,
        "y": -10.16,
        "drill": 2.2
      },
      {
        "x": 8.255,
        "y": 10.16,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-3296"]["artwork"],
    "backArtwork": assets["adafruit-module-3296"]["backArtwork"],
    "provenance": assets["adafruit-module-3296"]["provenance"],
    "internalConnections": [
      [
        "jp2-5",
        "b1--"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3296"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/DS1307-breakout-board/blob/22f84c8b77cacd22bf1296fa9f996f89bf646ae6/DS1307%20Rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/DS1307-breakout-board/blob/22f84c8b77cacd22bf1296fa9f996f89bf646ae6/DS1307%20Rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/DS1307-breakout-board/blob/22f84c8b77cacd22bf1296fa9f996f89bf646ae6/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3296",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3296",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3296. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.691999999999998,
      -12.485999999999999,
      10.708,
      8.574
    ],
    "backArtworkBounds": [
      -9.311,
      0.341,
      -7.199,
      7.533
    ]
  },
];
