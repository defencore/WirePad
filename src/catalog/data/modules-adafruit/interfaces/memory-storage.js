import assets from "./memory-storage-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5635",
    "sku": "ADA5635",
    "name": "Adafruit SPI FLASH Breakout - W25Q16 - 16 Mbit / 2 MByte",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5635",
    "revision": "EAGLE SPI Flash Rev E.brd; commit 9a46c77e68ab",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-10.16 -6.35A2.54 2.54 0 0 1 -7.62 -8.89L7.62 -8.89A2.54 2.54 0 0 1 10.16 -6.35L10.16 6.35A2.54 2.54 0 0 1 7.62 8.89L-7.62 8.89A2.54 2.54 0 0 1 -10.16 6.35L-10.16 -6.35Z"
    },
    "contacts": assets["adafruit-module-5635"]["contacts"],
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
    "artwork": assets["adafruit-module-5635"]["artwork"],
    "backArtwork": assets["adafruit-module-5635"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5635"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5635"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/SPI%20Flash%20Rev%20E.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/SPI%20Flash%20Rev%20E.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5635",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5635",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5635. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.8354,
      -3.748,
      7.862,
      3.888
    ]
  },
  {
    "id": "adafruit-module-5146",
    "sku": "ADA5146",
    "name": "Adafruit 24LC32 I2C EEPROM Breakout - 32Kbit / 4 KB - Stemma QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5146",
    "revision": "EAGLE Adafruit 24LC32 I2C EEPROM.brd; commit e92cf5549d43",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5146"]["contacts"],
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
    "artwork": assets["adafruit-module-5146"]["artwork"],
    "backArtwork": assets["adafruit-module-5146"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5146"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "jp3-4"
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
        "url": "https://www.adafruit.com/product/5146"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/Adafruit%2024LC32%20I2C%20EEPROM.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/Adafruit%2024LC32%20I2C%20EEPROM.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5146",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5146",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5146. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
      4.637
    ],
    "backArtworkBounds": [
      -4.866,
      -4.231,
      2.326,
      -0.849
    ]
  },
  {
    "id": "adafruit-module-4682",
    "sku": "ADA4682",
    "name": "Adafruit Micro SD SPI or SDIO Card Breakout Board - 3V ONLY!",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4682",
    "revision": "EAGLE Adafruit SDIO microSD.brd; commit 959792478854",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 22.86,
      "color": "#246545",
      "outline": "M12.7 8.89A2.54 2.54 0 0 1 10.16 11.43L-10.16 11.43A2.54 2.54 0 0 1 -12.7 8.89L-12.7 -8.89A2.54 2.54 0 0 1 -10.16 -11.43L10.16 -11.43A2.54 2.54 0 0 1 12.7 -8.89L12.7 8.89Z"
    },
    "contacts": assets["adafruit-module-4682"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4682"]["artwork"],
    "backArtwork": assets["adafruit-module-4682"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4682"]["provenance"],
    "internalConnections": [
      [
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "jp1-2"
      ],
      [
        "x1-cd1",
        "jp1-9"
      ],
      [
        "x1-8",
        "jp1-7"
      ],
      [
        "x1-7",
        "jp1-4"
      ],
      [
        "x1-5",
        "jp1-3"
      ],
      [
        "x1-4",
        "jp1-1"
      ],
      [
        "x1-3",
        "jp1-5"
      ],
      [
        "x1-2",
        "jp1-6"
      ],
      [
        "x1-1",
        "jp1-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4682"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/Adafruit%20SDIO%20microSD.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/Adafruit%20SDIO%20microSD.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4682",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4682",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4682. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.838,
      -15.710999999999999,
      10.838,
      4.839
    ]
  },
  {
    "id": "adafruit-module-5703",
    "sku": "ADA5703",
    "name": "Adafruit PiCowbell Adalogger for Pico - MicroSD, RTC & STEMMA QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5703",
    "revision": "EAGLE Adafruit PiCowbell Adalogger.brd; commit 667876fdbc1b",
    "category": "Interfaces",
    "board": {
      "width": 52.07,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-26.035 10.16L-26.035 -10.16L26.035 -10.16L26.035 10.16L-26.035 10.16Z"
    },
    "contacts": assets["adafruit-module-5703"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -4.445,
        "drill": 2.286
      },
      {
        "x": -22.86,
        "y": 4.445,
        "drill": 2.286
      },
      {
        "x": 11.43,
        "y": -3.175,
        "drill": 2.286
      },
      {
        "x": 11.43,
        "y": 3.175,
        "drill": 2.286
      },
      {
        "x": 6.363,
        "y": 0,
        "drill": 1.5
      },
      {
        "x": -1.087,
        "y": 0,
        "drill": 1.5
      }
    ],
    "artwork": assets["adafruit-module-5703"]["artwork"],
    "backArtwork": assets["adafruit-module-5703"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5703"]["provenance"],
    "internalConnections": [
      [
        "conn1-2",
        "jp4-5",
        "cb1-36",
        "x1-4"
      ],
      [
        "conn1-3",
        "jp3-10",
        "cb1-6"
      ],
      [
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "jp3-3",
        "jp3-8",
        "jp3-13",
        "jp4-3",
        "jp4-8",
        "jp4-13",
        "cb1-3",
        "cb1-8",
        "cb1-13",
        "cb1-18",
        "cb1-23",
        "cb1-28",
        "cb1-33",
        "cb1-38",
        "x1-6",
        "x1-10",
        "x1-g3",
        "x1-g4",
        "x1-g2",
        "x1-g1",
        "b1--"
      ],
      [
        "conn1-4",
        "jp3-9",
        "cb1-7"
      ],
      [
        "jp3-1",
        "cb1-15"
      ],
      [
        "jp3-2",
        "cb1-14"
      ],
      [
        "jp3-4",
        "cb1-12"
      ],
      [
        "jp3-5",
        "cb1-11"
      ],
      [
        "jp3-6",
        "cb1-10"
      ],
      [
        "jp3-7",
        "cb1-9"
      ],
      [
        "jp3-11",
        "cb1-5"
      ],
      [
        "jp3-12",
        "cb1-4"
      ],
      [
        "jp3-14",
        "cb1-2"
      ],
      [
        "jp3-15",
        "cb1-1"
      ],
      [
        "jp4-1",
        "cb1-40"
      ],
      [
        "jp4-2",
        "cb1-39"
      ],
      [
        "jp4-4",
        "cb1-37"
      ],
      [
        "jp4-6",
        "cb1-35"
      ],
      [
        "jp4-7",
        "cb1-34"
      ],
      [
        "jp4-9",
        "cb1-32"
      ],
      [
        "jp4-10",
        "cb1-31"
      ],
      [
        "jp4-11",
        "cb1-30"
      ],
      [
        "jp4-12",
        "cb1-29"
      ],
      [
        "jp4-14",
        "cb1-27"
      ],
      [
        "jp4-15",
        "cb1-26"
      ],
      [
        "cb1-21",
        "x1-7"
      ],
      [
        "cb1-22",
        "x1-2"
      ],
      [
        "cb1-24",
        "x1-5"
      ],
      [
        "cb1-25",
        "x1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5703"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/Adafruit%20PiCowbell%20Adalogger.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/Adafruit%20PiCowbell%20Adalogger.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5703",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5703",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5703. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -25.621,
      -7.39,
      25.044,
      7.39
    ],
    "backArtworkBounds": [
      23.074,
      4.405,
      25.186,
      7.787
    ]
  },
  {
    "id": "adafruit-module-5683",
    "sku": "ADA5683",
    "name": "Adafruit microSD Card BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5683",
    "revision": "EAGLE Adafruit microSD BFF.brd; commit 65445ba23f0e",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5683"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5683"]["artwork"],
    "backArtwork": assets["adafruit-module-5683"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5683"]["provenance"],
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
        "jp3-2c",
        "x1-5"
      ],
      [
        "jp3-3",
        "jp3-3c",
        "x1-7"
      ],
      [
        "jp3-4",
        "jp3-4c",
        "x1-3"
      ],
      [
        "jp3-5",
        "jp3-5c",
        "x1-4"
      ],
      [
        "jp3-6",
        "jp3-6c",
        "x1-6",
        "x1-10",
        "x1-g3",
        "x1-g4",
        "x1-g2",
        "x1-g1"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ],
      [
        "tp1-p-1",
        "x1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5683"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/Adafruit%20microSD%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/Adafruit%20microSD%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5683",
      "status": "Official Adafruit stock feed reported 91 available.",
      "sku": "ADA5683",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "91"
    },
    "description": "Adafruit ADA5683. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.015,
      -9.359499999999999,
      6.582,
      6.0725
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-1895",
    "sku": "ADA1895",
    "name": "Adafruit I2C Non-Volatile FRAM Breakout - 256Kbit / 32KByte",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1895",
    "revision": "EAGLE Adafruit I2C FRAM.brd; commit f7d4afa22ddd",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 20.32,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-10.16 5.08A2.54 2.54 0 0 0 -7.62 7.62L7.62 7.62A2.54 2.54 0 0 0 10.16 5.08L10.16 -5.08A2.54 2.54 0 0 0 7.62 -7.62L-7.62 -7.62A2.54 2.54 0 0 0 -10.16 -5.08L-10.16 5.08Z"
    },
    "contacts": assets["adafruit-module-1895"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": -5.08,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1895"]["artwork"],
    "backArtwork": assets["adafruit-module-1895"]["backArtwork"],
    "provenance": assets["adafruit-module-1895"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1895"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/Adafruit%20I2C%20FRAM.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/Adafruit%20I2C%20FRAM.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1895",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1895",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1895. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -7.464,
      -2.44,
      2.655,
      2.703
    ]
  },
];
