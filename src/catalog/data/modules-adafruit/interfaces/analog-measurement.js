import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5892",
    "sku": "ADA5892",
    "name": "Adafruit STEMMA Analog SPDT Switch - MAX4544 12V - JST PH 2mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5892",
    "revision": "EAGLE Adafruit STEMMA Analog SPDT Switch.brd; commit 0d377c1934aa",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5892"]["contacts"],
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
    "artwork": assets["adafruit-module-5892"]["artwork"],
    "backArtwork": assets["adafruit-module-5892"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5892"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp4-3"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp4-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp4-1"
      ],
      [
        "jp3-1",
        "jp4-6"
      ],
      [
        "jp3-2",
        "jp4-5"
      ],
      [
        "jp3-3",
        "jp4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5892"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Analog-SPDT-Switch-PCB/blob/0d377c1934aaadf3bcc8a9a89adf87b82d96726a/Adafruit%20STEMMA%20Analog%20SPDT%20Switch.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Analog-SPDT-Switch-PCB/blob/0d377c1934aaadf3bcc8a9a89adf87b82d96726a/Adafruit%20STEMMA%20Analog%20SPDT%20Switch.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Analog-SPDT-Switch-PCB/blob/0d377c1934aaadf3bcc8a9a89adf87b82d96726a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5892",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5892",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5892. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -6.695,
      9.59,
      6.663
    ],
    "backArtworkBounds": [
      -7.7235000000000005,
      -5.501,
      -5.548,
      3.723
    ]
  },
  {
    "id": "adafruit-module-5870",
    "sku": "ADA5870",
    "name": "Adafruit MCP3421 18-Bit ADC - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5870",
    "revision": "EAGLE Adafruit MCP3421 ADC.brd; commit 3037fb9364ec",
    "category": "ADC",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5870"]["contacts"],
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
    "artwork": assets["adafruit-module-5870"]["artwork"],
    "backArtwork": assets["adafruit-module-5870"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5870"]["provenance"],
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
      ],
      [
        "jp1-5",
        "x1-1"
      ],
      [
        "jp1-6",
        "x1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5870"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MCP3421-18-Bit-ADC-PCB/blob/3037fb9364ec7dbc29817c3254bda21e8217cbe5/Adafruit%20MCP3421%20ADC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MCP3421-18-Bit-ADC-PCB/blob/3037fb9364ec7dbc29817c3254bda21e8217cbe5/Adafruit%20MCP3421%20ADC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MCP3421-18-Bit-ADC-PCB/blob/3037fb9364ec7dbc29817c3254bda21e8217cbe5/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5870",
      "status": "Official Adafruit stock feed reported 58 available.",
      "sku": "ADA5870",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "58"
    },
    "description": "Adafruit ADA5870. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.0955,
      -8.719999999999999,
      12.159,
      3.761
    ]
  },
  {
    "id": "adafruit-module-6432",
    "sku": "ADA6432",
    "name": "Adafruit ADS122C04 24-Bit ADC - 4 Channel 2-kSPS",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6432",
    "revision": "EAGLE Adafruit ADS122C04 24-Bit ADC.brd; commit bb60e307305d",
    "category": "ADC",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6432"]["contacts"],
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
    "artwork": assets["adafruit-module-6432"]["artwork"],
    "backArtwork": assets["adafruit-module-6432"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6432"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6432"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ADS122C04-24-Bit-ADC-PCB/blob/bb60e307305d48648d0d77d3edcdef25bee5c94a/Adafruit%20ADS122C04%2024-Bit%20ADC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ADS122C04-24-Bit-ADC-PCB/blob/bb60e307305d48648d0d77d3edcdef25bee5c94a/Adafruit%20ADS122C04%2024-Bit%20ADC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ADS122C04-24-Bit-ADC-PCB/blob/bb60e307305d48648d0d77d3edcdef25bee5c94a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6432",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6432",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6432. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      3.7895
    ],
    "backArtworkBounds": [
      -8.675999999999998,
      -3.977,
      7.279,
      5.0565
    ]
  },
  {
    "id": "adafruit-module-5836",
    "sku": "ADA5836",
    "name": "Adafruit ADS7830 8-Channel 8-Bit ADC with I2C",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5836",
    "revision": "EAGLE Adafruit ADS7830 Breakout PCB.brd; commit b796c6e98ecc",
    "category": "ADC",
    "board": {
      "width": 30.48,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-15.24 6.35A2.54 2.54 0 0 0 -12.7 8.89L12.7 8.89A2.54 2.54 0 0 0 15.24 6.35L15.24 -6.35A2.54 2.54 0 0 0 12.7 -8.89L-12.7 -8.89A2.54 2.54 0 0 0 -15.24 -6.35L-15.24 6.35Z"
    },
    "contacts": assets["adafruit-module-5836"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5836"]["artwork"],
    "backArtwork": assets["adafruit-module-5836"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5836"]["provenance"],
    "internalConnections": [
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5836"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ADS7830-PCB/blob/b796c6e98ecc7bddd24d97c2ce9e553dbf0edf7c/Adafruit%20ADS7830%20Breakout%20PCB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ADS7830-PCB/blob/b796c6e98ecc7bddd24d97c2ce9e553dbf0edf7c/Adafruit%20ADS7830%20Breakout%20PCB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ADS7830-PCB/blob/b796c6e98ecc7bddd24d97c2ce9e553dbf0edf7c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5836",
      "status": "Official Adafruit stock feed reported 30 available.",
      "sku": "ADA5836",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "30"
    },
    "description": "Adafruit ADA5836. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.699,
      -4.142,
      14.699,
      3.718
    ],
    "backArtworkBounds": [
      -10.2,
      -2.961,
      9.946,
      5.374
    ]
  },
  {
    "id": "adafruit-module-5932",
    "sku": "ADA5932",
    "name": "Adafruit ADG729 Dual 1-to-4 Analog Matrix Switch",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5932",
    "revision": "EAGLE Adafruit ADG729 Dual 1-to-4 Analog Switch.brd; commit 0cae682f07dc",
    "category": "Interfaces",
    "board": {
      "width": 30.48,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-15.24 6.35A2.54 2.54 0 0 0 -12.7 8.89L12.7 8.89A2.54 2.54 0 0 0 15.24 6.35L15.24 -6.35A2.54 2.54 0 0 0 12.7 -8.89L-12.7 -8.89A2.54 2.54 0 0 0 -15.24 -6.35L-15.24 6.35Z"
    },
    "contacts": assets["adafruit-module-5932"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5932"]["artwork"],
    "backArtwork": assets["adafruit-module-5932"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5932"]["provenance"],
    "internalConnections": [
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
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5932"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ADG729-Dual-1-to-4-Analog-Matrix-Switch-PCB/blob/0cae682f07dc8351b45d07d01df7e9eaa0ca875f/Adafruit%20ADG729%20Dual%201-to-4%20Analog%20Switch.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ADG729-Dual-1-to-4-Analog-Matrix-Switch-PCB/blob/0cae682f07dc8351b45d07d01df7e9eaa0ca875f/Adafruit%20ADG729%20Dual%201-to-4%20Analog%20Switch.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ADG729-Dual-1-to-4-Analog-Matrix-Switch-PCB/blob/0cae682f07dc8351b45d07d01df7e9eaa0ca875f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5932",
      "status": "Official Adafruit stock feed reported 30 available.",
      "sku": "ADA5932",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "30"
    },
    "description": "Adafruit ADA5932. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.699,
      -4.123,
      14.699,
      3.337
    ],
    "backArtworkBounds": [
      -10.2,
      -3.977,
      4.866,
      5.247
    ]
  },
  {
    "id": "adafruit-module-6494",
    "sku": "ADA6494",
    "name": "Adafruit ADS7128 8-Channel ADC and GPIO Expander",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6494",
    "revision": "EAGLE Adafruit ADS7128 8-Channel ADC and GPIO Expander.brd; commit ecc6fd2b2e97",
    "category": "ADC",
    "board": {
      "width": 30.48,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-15.24 6.35A2.54 2.54 0 0 0 -12.7 8.89L12.7 8.89A2.54 2.54 0 0 0 15.24 6.35L15.24 -6.35A2.54 2.54 0 0 0 12.7 -8.89L-12.7 -8.89A2.54 2.54 0 0 0 -15.24 -6.35L-15.24 6.35Z"
    },
    "contacts": assets["adafruit-module-6494"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6494"]["artwork"],
    "backArtwork": assets["adafruit-module-6494"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6494"]["provenance"],
    "internalConnections": [
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
        "jp3-2",
        "jp3-8"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6494"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ADS7128-8-Channel-ADC-and-GPIO-Expander-PCB/blob/ecc6fd2b2e97ae7e0e1799c3c15e738a79b1287c/Adafruit%20ADS7128%208-Channel%20ADC%20and%20GPIO%20Expander.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ADS7128-8-Channel-ADC-and-GPIO-Expander-PCB/blob/ecc6fd2b2e97ae7e0e1799c3c15e738a79b1287c/Adafruit%20ADS7128%208-Channel%20ADC%20and%20GPIO%20Expander.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ADS7128-8-Channel-ADC-and-GPIO-Expander-PCB/blob/ecc6fd2b2e97ae7e0e1799c3c15e738a79b1287c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6494",
      "status": "Official Adafruit stock feed reported 16 available.",
      "sku": "ADA6494",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "16"
    },
    "description": "Adafruit ADA6494. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.699,
      -4.123,
      14.699,
      3.748
    ],
    "backArtworkBounds": [
      -10.707999999999998,
      -3.977,
      2.3895,
      4.358
    ]
  },
];
