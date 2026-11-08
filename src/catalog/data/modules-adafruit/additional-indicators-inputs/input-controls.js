import assets from "./input-controls-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-2024",
    "sku": "ADA2024",
    "name": "Adafruit 12 x Capacitive Touch Shield for Arduino - MPR121",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2024",
    "revision": "EAGLE Adafruit MPR121 Capacitive Touch Shield.brd; commit a18e1c035a78",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -18.352999999999998,
      24.889680000000002,
      24.63,
      33.212
    ],
    "board": {
      "width": 53.34,
      "height": 68.58,
      "color": "#246545",
      "outline": "M-26.67 -30.226L-25.146 -31.75L-13.716 -31.75L-11.176 -34.29L21.59 -34.29L24.13 -31.75L26.67 -31.75L26.67 34.29L-26.67 34.29L-26.67 -30.226Z"
    },
    "contacts": assets["adafruit-module-2024"]["contacts"],
    "holes": [
      {
        "x": -24.13,
        "y": 19.05,
        "drill": 3.2
      },
      {
        "x": 24.13,
        "y": 20.32,
        "drill": 3.2
      },
      {
        "x": -8.89,
        "y": -31.75,
        "drill": 3.2
      }
    ],
    "artwork": assets["adafruit-module-2024"]["artwork"],
    "backArtwork": assets["adafruit-module-2024"]["backArtwork"],
    "provenance": assets["adafruit-module-2024"]["provenance"],
    "internalConnections": [
      [
        "u-41-d4",
        "jp1-4"
      ],
      [
        "u-41-a0",
        "jp8-6"
      ],
      [
        "u-41-d3",
        "jp1-5"
      ],
      [
        "u-41-d2",
        "jp1-6"
      ],
      [
        "u-41-d1",
        "jp1-7"
      ],
      [
        "u-41-d0",
        "jp1-8"
      ],
      [
        "u-41-d5",
        "jp1-3"
      ],
      [
        "u-41-d6",
        "jp1-2"
      ],
      [
        "u-41-d7",
        "jp1-1"
      ],
      [
        "u-41-d8",
        "jp6-10"
      ],
      [
        "u-41-d9",
        "jp6-9"
      ],
      [
        "u-41-d10",
        "jp6-8"
      ],
      [
        "u-41-d11",
        "jp6-7"
      ],
      [
        "u-41-d12",
        "jp6-6"
      ],
      [
        "u-41-d13",
        "jp6-5"
      ],
      [
        "u-41-gnd",
        "u-41-gnd-1",
        "u-41-gnd-2",
        "u-41-gnd-3",
        "jp4-2",
        "jp4-3",
        "jp6-4"
      ],
      [
        "u-41-aref",
        "jp6-3"
      ],
      [
        "u-41-a1",
        "jp8-5"
      ],
      [
        "u-41-a2",
        "jp8-4"
      ],
      [
        "u-41-a3",
        "jp8-3"
      ],
      [
        "u-41-a4",
        "jp8-2"
      ],
      [
        "u-41-a5",
        "jp8-1"
      ],
      [
        "u-41-vin",
        "jp4-1"
      ],
      [
        "u-41-5v",
        "jp4-4"
      ],
      [
        "u-41-3v",
        "jp4-5"
      ],
      [
        "u-41-reset",
        "jp4-6"
      ],
      [
        "u-41-sda",
        "jp6-2"
      ],
      [
        "u-41-scl",
        "jp6-1"
      ],
      [
        "u-41-ioref",
        "jp4-7"
      ],
      [
        "u-41-reserved",
        "jp4-8"
      ],
      [
        "jp2-1",
        "al12-p-1",
        "al12-p-2"
      ],
      [
        "jp3-1",
        "al11-p-1",
        "al11-p-2"
      ],
      [
        "jp5-1",
        "al10-p-1",
        "al10-p-2"
      ],
      [
        "jp7-1",
        "al9-p-1",
        "al9-p-2"
      ],
      [
        "jp9-1",
        "al8-p-1",
        "al8-p-2"
      ],
      [
        "jp10-1",
        "al7-p-1",
        "al7-p-2"
      ],
      [
        "jp11-1",
        "al6-p-1",
        "al6-p-2"
      ],
      [
        "jp12-1",
        "al5-p-1",
        "al5-p-2"
      ],
      [
        "jp13-1",
        "al4-p-1",
        "al4-p-2"
      ],
      [
        "jp14-1",
        "al3-p-1",
        "al3-p-2"
      ],
      [
        "jp15-1",
        "al2-p-1",
        "al2-p-2"
      ],
      [
        "jp16-1",
        "al1-p-1",
        "al1-p-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2024"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MPR121-Capacitive-Touch-Shield-PCB/blob/a18e1c035a787044fdb3ff570f4e811dee23ec7c/Adafruit%20MPR121%20Capacitive%20Touch%20Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MPR121-Capacitive-Touch-Shield-PCB/blob/a18e1c035a787044fdb3ff570f4e811dee23ec7c/Adafruit%20MPR121%20Capacitive%20Touch%20Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MPR121-Capacitive-Touch-Shield-PCB/blob/a18e1c035a787044fdb3ff570f4e811dee23ec7c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2024",
      "status": "Official Adafruit stock feed reported 19 available.",
      "sku": "ADA2024",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "19"
    },
    "description": "Adafruit ADA2024. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2340",
    "sku": "ADA2340",
    "name": "Adafruit Capacitive Touch HAT for Raspberry Pi - Mini Kit",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2340",
    "revision": "EAGLE Adafruit Capacitive Touch HAT.brd; commit 6405328c281f",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 65,
      "height": 56.5,
      "color": "#246545",
      "outline": "M-32.5 25.25A3.0 3.0 0 0 0 -29.5 28.25L29.5 28.25A3.0 3.0 0 0 0 32.5 25.25L32.5 -25.25A3.0 3.0 0 0 0 29.5 -28.25L-29.5 -28.25A3.0 3.0 0 0 0 -32.5 -25.25L-32.5 25.25Z"
    },
    "contacts": assets["adafruit-module-2340"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 24.75,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 24.75,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-2340"]["artwork"],
    "backArtwork": assets["adafruit-module-2340"]["backArtwork"],
    "artworkBounds": [
      -4.498,
      -13.446,
      31.827,
      8.2
    ],
    "provenance": assets["adafruit-module-2340"]["provenance"],
    "internalConnections": [
      [
        "conn1-1",
        "rpi1-3"
      ],
      [
        "conn1-2",
        "rpi1-5"
      ],
      [
        "conn1-3",
        "rpi1-8"
      ],
      [
        "conn1-4",
        "rpi1-10"
      ],
      [
        "conn1-5",
        "rpi1-7"
      ],
      [
        "conn1-6",
        "rpi1-11"
      ],
      [
        "conn1-7",
        "rpi1-12"
      ],
      [
        "conn1-8",
        "rpi1-13"
      ],
      [
        "conn1-9",
        "rpi1-15"
      ],
      [
        "conn1-10",
        "rpi1-16"
      ],
      [
        "conn1-11",
        "rpi1-18"
      ],
      [
        "conn1-12",
        "rpi1-22"
      ],
      [
        "conn1-13",
        "rpi1-19"
      ],
      [
        "conn1-14",
        "rpi1-21"
      ],
      [
        "conn1-15",
        "rpi1-23"
      ],
      [
        "conn1-16",
        "rpi1-24"
      ],
      [
        "conn1-17",
        "rpi1-26"
      ],
      [
        "conn1-18",
        "rpi1-29"
      ],
      [
        "conn1-19",
        "rpi1-31"
      ],
      [
        "conn1-20",
        "rpi1-32"
      ],
      [
        "conn1-21",
        "rpi1-33"
      ],
      [
        "conn1-22",
        "rpi1-36"
      ],
      [
        "conn1-23",
        "rpi1-35"
      ],
      [
        "conn1-24",
        "rpi1-38"
      ],
      [
        "conn1-25",
        "rpi1-40"
      ],
      [
        "-26-1",
        "rpi1-37"
      ],
      [
        "jp1-1",
        "al12-p-1",
        "al12-p-2"
      ],
      [
        "jp2-1",
        "al11-p-1",
        "al11-p-2"
      ],
      [
        "jp3-1",
        "al10-p-1",
        "al10-p-2"
      ],
      [
        "jp4-1",
        "al9-p-1",
        "al9-p-2"
      ],
      [
        "jp5-1",
        "al8-p-1",
        "al8-p-2"
      ],
      [
        "jp6-1",
        "al7-p-1",
        "al7-p-2"
      ],
      [
        "jp7-1",
        "al6-p-1",
        "al6-p-2"
      ],
      [
        "jp8-1",
        "al5-p-1",
        "al5-p-2"
      ],
      [
        "jp9-1",
        "al4-p-1",
        "al4-p-2"
      ],
      [
        "jp10-1",
        "al3-p-1",
        "al3-p-2"
      ],
      [
        "jp11-1",
        "al2-p-1",
        "al2-p-2"
      ],
      [
        "jp12-1",
        "al1-p-1",
        "al1-p-2"
      ],
      [
        "rpi1-1",
        "rpi1-17"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2340"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Capacitive-Touch-HAT-PCB/blob/6405328c281fe7d9d8e9cbfa334d50c3eccef7ce/Adafruit%20Capacitive%20Touch%20HAT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Capacitive-Touch-HAT-PCB/blob/6405328c281fe7d9d8e9cbfa334d50c3eccef7ce/Adafruit%20Capacitive%20Touch%20HAT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Capacitive-Touch-HAT-PCB/blob/6405328c281fe7d9d8e9cbfa334d50c3eccef7ce/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2340",
      "status": "Official Adafruit stock feed reported 18 available.",
      "sku": "ADA2340",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "18"
    },
    "description": "Adafruit ADA2340. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5783",
    "sku": "ADA5783",
    "name": "Adafruit EYESPI Pi Beret - Buttons, EYESPI and STEMMA QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5783",
    "revision": "EAGLE Adafruit EYESPI Pi Beret.brd; commit db6a85a699fe",
    "category": "Inputs",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 65,
      "height": 15,
      "color": "#246545",
      "outline": "M-32.5 4.5A3.0 3.0 0 0 0 -29.5 7.5L29.5 7.5A3.0 3.0 0 0 0 32.5 4.5L32.5 -4.5A3.0 3.0 0 0 0 29.5 -7.5L-29.5 -7.5A3.0 3.0 0 0 0 -32.5 -4.5L-32.5 4.5Z"
    },
    "contacts": assets["adafruit-module-5783"]["contacts"],
    "holes": [
      {
        "x": -28.944,
        "y": -3.376,
        "drill": 2.794
      },
      {
        "x": 29.0315,
        "y": -3.376,
        "drill": 2.794
      },
      {
        "x": 22.872,
        "y": -3.376,
        "drill": 2
      },
      {
        "x": -22.848,
        "y": -3.376,
        "drill": 2
      },
      {
        "x": 1.56,
        "y": 3.342,
        "drill": 1
      },
      {
        "x": 4.56,
        "y": 3.342,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-5783"]["artwork"],
    "backArtwork": assets["adafruit-module-5783"]["backArtwork"],
    "artworkBounds": [
      -30.913999999999998,
      -0.668,
      29.91,
      7.532
    ],
    "provenance": assets["adafruit-module-5783"]["provenance"],
    "internalConnections": [
      [
        "rpi2-1",
        "rpi2-17",
        "rpi2-s1",
        "rpi2-s17",
        "conn2-2",
        "x1-1"
      ],
      [
        "rpi2-2",
        "rpi2-4",
        "rpi2-s2",
        "rpi2-s4"
      ],
      [
        "rpi2-3",
        "rpi2-s3",
        "conn2-3",
        "x1-14"
      ],
      [
        "rpi2-5",
        "rpi2-s5",
        "conn2-4",
        "x1-13"
      ],
      [
        "rpi2-6",
        "rpi2-9",
        "rpi2-14",
        "rpi2-20",
        "rpi2-25",
        "rpi2-30",
        "rpi2-34",
        "rpi2-39",
        "rpi2-s6",
        "rpi2-s9",
        "rpi2-s14",
        "rpi2-s20",
        "rpi2-s25",
        "rpi2-s30",
        "rpi2-s34",
        "rpi2-s39",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2",
        "x1-3",
        "x1-support1",
        "x1-support2"
      ],
      [
        "rpi2-11",
        "rpi2-s11",
        "x1-16"
      ],
      [
        "rpi2-12",
        "rpi2-s12",
        "x1-2"
      ],
      [
        "rpi2-13",
        "rpi2-s13",
        "x1-8"
      ],
      [
        "rpi2-18",
        "rpi2-s18",
        "x1-15"
      ],
      [
        "rpi2-19",
        "rpi2-s19",
        "x1-5"
      ],
      [
        "rpi2-21",
        "rpi2-s21",
        "x1-6"
      ],
      [
        "rpi2-22",
        "rpi2-s22",
        "x1-7"
      ],
      [
        "rpi2-23",
        "rpi2-s23",
        "x1-4"
      ],
      [
        "rpi2-24",
        "rpi2-s24",
        "x1-9"
      ],
      [
        "rpi2-26",
        "rpi2-s26",
        "x1-12"
      ],
      [
        "rpi2-29",
        "rpi2-s29"
      ],
      [
        "rpi2-31",
        "rpi2-s31"
      ],
      [
        "rpi2-33",
        "rpi2-s33"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5783"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-Pi-Beret-PCB/blob/db6a85a699fe0bd1d8f0cb4918d9db1ea701f3d9/Adafruit%20EYESPI%20Pi%20Beret.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-Pi-Beret-PCB/blob/db6a85a699fe0bd1d8f0cb4918d9db1ea701f3d9/Adafruit%20EYESPI%20Pi%20Beret.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-EYESPI-Pi-Beret-PCB/blob/db6a85a699fe0bd1d8f0cb4918d9db1ea701f3d9/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5783",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5783",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5783. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
