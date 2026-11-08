import assets from "./motors-relays-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4409",
    "sku": "ADA4409",
    "name": "Adafruit STEMMA Non-Latching Mini Relay - JST PH 2mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4409",
    "revision": "EAGLE Adafruit Non-Latching Relay Breakout.brd; commit 7559d509a129",
    "category": "Power",
    "board": {
      "width": 34.29,
      "height": 21.59,
      "color": "#246545",
      "outline": "M-17.145 8.255A2.54 2.54 0 0 0 -14.605 10.795L14.478 10.795A2.604274 2.604274 0 0 0 17.145 8.255L17.145 -8.255A2.604274 2.604274 0 0 0 14.478 -10.795L-14.605 -10.795A2.54 2.54 0 0 0 -17.145 -8.255L-17.145 8.255Z"
    },
    "contacts": assets["adafruit-module-4409"]["contacts"],
    "holes": [
      {
        "x": 14.605,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": 14.605,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -14.605,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -14.605,
        "y": 8.255,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4409"]["artwork"],
    "backArtwork": assets["adafruit-module-4409"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4409"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3"
      ],
      [
        "jp1-2",
        "x4-2"
      ],
      [
        "jp1-3",
        "x4-1"
      ],
      [
        "x5-l1-2",
        "x5-l1-1"
      ],
      [
        "x5-l2-2",
        "x5-l2-1"
      ],
      [
        "x5-l3-2",
        "x5-l3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4409"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Non-Latching-Mini-Relay-PCB/blob/7559d509a129d1555af92d410a75b5d89673a9e4/Adafruit%20Non-Latching%20Relay%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Non-Latching-Mini-Relay-PCB/blob/7559d509a129d1555af92d410a75b5d89673a9e4/Adafruit%20Non-Latching%20Relay%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Non-Latching-Mini-Relay-PCB/blob/7559d509a129d1555af92d410a75b5d89673a9e4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4409",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4409",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4409. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.6765,
      -10.206999999999999,
      16.209,
      12.149
    ],
    "backArtworkBounds": [
      -8.866499999999998,
      4.659,
      -6.7545,
      8.041
    ]
  },
  {
    "id": "adafruit-module-5648",
    "sku": "ADA5648",
    "name": "Adafruit MOSFET Driver - For Motors, Solenoids, LEDs, etc",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5648",
    "revision": "EAGLE Adafruit MOSFET Driver STEMMA Breakout.brd; commit ea11049753a7",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5648"]["contacts"],
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
    "artwork": assets["adafruit-module-5648"]["artwork"],
    "backArtwork": assets["adafruit-module-5648"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5648"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp3-3"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp3-2",
        "x1-l2-2",
        "x1-l2-1"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp3-1"
      ],
      [
        "jp3-4",
        "x1-l1-2",
        "x1-l1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5648"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MOSFET-Driver-STEMMA-PCB/blob/ea11049753a79330cc2651df233909c0191a5af4/Adafruit%20MOSFET%20Driver%20STEMMA%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MOSFET-Driver-STEMMA-PCB/blob/ea11049753a79330cc2651df233909c0191a5af4/Adafruit%20MOSFET%20Driver%20STEMMA%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MOSFET-Driver-STEMMA-PCB/blob/ea11049753a79330cc2651df233909c0191a5af4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5648",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5648",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5648. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -7.5584,
      11.664,
      7.425
    ],
    "backArtworkBounds": [
      -6.136,
      -4.8025,
      -2.754,
      4.358
    ]
  },
  {
    "id": "adafruit-module-6109",
    "sku": "ADA6109",
    "name": "Adafruit A4988 Stepper Motor Driver Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6109",
    "revision": "EAGLE Adafruit A4988 Breakout.brd; commit f10f6b1d10ae",
    "category": "Power",
    "board": {
      "width": 26.67,
      "height": 24.13,
      "color": "#246545",
      "outline": "M-13.335 9.525A2.54 2.54 0 0 0 -10.795 12.065L10.795 12.065A2.54 2.54 0 0 0 13.335 9.525L13.335 -9.525A2.54 2.54 0 0 0 10.795 -12.065L-10.795 -12.065A2.54 2.54 0 0 0 -13.335 -9.525L-13.335 9.525Z"
    },
    "contacts": assets["adafruit-module-6109"]["contacts"],
    "holes": [
      {
        "x": -10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": -10.795,
        "y": 5.08,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": 5.08,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-6109"]["artwork"],
    "backArtwork": assets["adafruit-module-6109"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6109"]["provenance"],
    "internalConnections": [
      [
        "jp4-2",
        "jp1-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6109"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-A4988-Breakout-PCB/blob/f10f6b1d10aeeabc7a4a3445b81925c0a51d0e45/Adafruit%20A4988%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-A4988-Breakout-PCB/blob/f10f6b1d10aeeabc7a4a3445b81925c0a51d0e45/Adafruit%20A4988%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-A4988-Breakout-PCB/blob/f10f6b1d10aeeabc7a4a3445b81925c0a51d0e45/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6109",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6109",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6109. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.7365,
      -11.495,
      12.731,
      7.282
    ],
    "backArtworkBounds": [
      4.3415,
      2.627,
      6.4535,
      7.279
    ]
  },
  {
    "id": "adafruit-module-2448",
    "sku": "ADA2448",
    "name": "Adafruit TB6612 1.2A DC/Stepper Motor Driver Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2448",
    "revision": "EAGLE Adafruit TB6612.brd; commit 514d5ded1aad",
    "category": "Power",
    "board": {
      "width": 19.05,
      "height": 26.67,
      "color": "#246545",
      "outline": "M9.525 10.795A2.54 2.54 0 0 1 6.985 13.335L-6.985 13.335A2.54 2.54 0 0 1 -9.525 10.795L-9.525 -10.795A2.54 2.54 0 0 1 -6.985 -13.335L6.985 -13.335A2.54 2.54 0 0 1 9.525 -10.795L9.525 10.795Z"
    },
    "contacts": assets["adafruit-module-2448"]["contacts"],
    "holes": [
      {
        "x": 6.985,
        "y": -10.795,
        "drill": 2.5
      },
      {
        "x": 6.985,
        "y": 10.795,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2448"]["artwork"],
    "backArtwork": assets["adafruit-module-2448"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-2448"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "jp1-1"
      ],
      [
        "j1-2",
        "jp1-3",
        "jp3-3",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2448"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TB6612-Motor-Driver-Breakout-PCB/blob/514d5ded1aade108d0698d0e718a92c22ff5496f/Adafruit%20TB6612.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TB6612-Motor-Driver-Breakout-PCB/blob/514d5ded1aade108d0698d0e718a92c22ff5496f/Adafruit%20TB6612.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TB6612-Motor-Driver-Breakout-PCB/blob/514d5ded1aade108d0698d0e718a92c22ff5496f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2448",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2448",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2448. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -3.875,
      -13.418999999999999,
      3.596,
      9.844
    ]
  },
  {
    "id": "adafruit-module-3190",
    "sku": "ADA3190",
    "name": "Adafruit DRV8871 DC Motor Driver Breakout Board - 3.6A Max",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3190",
    "revision": "EAGLE Adafruit DRV8871.brd; commit 4183ffe41cac",
    "category": "Power",
    "board": {
      "width": 20.32,
      "height": 24.13,
      "color": "#246545",
      "outline": "M7.62 -12.065A2.54 2.54 0 0 1 10.16 -9.525L10.16 9.525A2.54 2.54 0 0 1 7.62 12.065L-7.62 12.065A2.54 2.54 0 0 1 -10.16 9.525L-10.16 -9.525A2.54 2.54 0 0 1 -7.62 -12.065L7.62 -12.065Z"
    },
    "contacts": assets["adafruit-module-3190"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": 9.525,
        "drill": 2.5
      },
      {
        "x": 7.62,
        "y": 9.525,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3190"]["artwork"],
    "backArtwork": assets["adafruit-module-3190"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3190"]["provenance"],
    "internalConnections": [
      [
        "x2-1",
        "jp2-2"
      ],
      [
        "x2-2",
        "jp2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3190"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DRV8871-Breakout-PCB/blob/4183ffe41cac746a327c60825b18fa814e081e0f/Adafruit%20DRV8871.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DRV8871-Breakout-PCB/blob/4183ffe41cac746a327c60825b18fa814e081e0f/Adafruit%20DRV8871.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DRV8871-Breakout-PCB/blob/4183ffe41cac746a327c60825b18fa814e081e0f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3190",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3190",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3190. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.100999999999999,
      -11.895,
      8.041,
      6.898
    ]
  },
  {
    "id": "adafruit-module-6353",
    "sku": "ADA6353",
    "name": "Adafruit STSPIN220 Stepper Motor Driver Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6353",
    "revision": "EAGLE Adafruit STSPIN220 Stepper Motor Driver.brd; commit 900c41820348",
    "category": "Power",
    "board": {
      "width": 26.67,
      "height": 24.13,
      "color": "#246545",
      "outline": "M-13.335 9.525A2.54 2.54 0 0 0 -10.795 12.065L10.795 12.065A2.54 2.54 0 0 0 13.335 9.525L13.335 -9.525A2.54 2.54 0 0 0 10.795 -12.065L-10.795 -12.065A2.54 2.54 0 0 0 -13.335 -9.525L-13.335 9.525Z"
    },
    "contacts": assets["adafruit-module-6353"]["contacts"],
    "holes": [
      {
        "x": -10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": -10.795,
        "y": 5.08,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": 5.08,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-6353"]["artwork"],
    "backArtwork": assets["adafruit-module-6353"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6353"]["provenance"],
    "internalConnections": [
      [
        "jp1-5",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6353"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STSPIN220-Stepper-Motor-Driver-Breakout-Board-PCB/blob/900c418203489887894b71debe1849a6df259c0f/Adafruit%20STSPIN220%20Stepper%20Motor%20Driver.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STSPIN220-Stepper-Motor-Driver-Breakout-Board-PCB/blob/900c418203489887894b71debe1849a6df259c0f/Adafruit%20STSPIN220%20Stepper%20Motor%20Driver.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STSPIN220-Stepper-Motor-Driver-Breakout-Board-PCB/blob/900c418203489887894b71debe1849a6df259c0f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6353",
      "status": "Official Adafruit stock feed reported 12 available.",
      "sku": "ADA6353",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "12"
    },
    "description": "Adafruit ADA6353. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.3555,
      -11.495,
      12.731,
      7.063
    ]
  },
  {
    "id": "adafruit-module-3297",
    "sku": "ADA3297",
    "name": "Adafruit DRV8833 DC/Stepper Motor Driver Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3297",
    "revision": "EAGLE Adafruit DRV8833.brd; commit dda79a86d651",
    "category": "Power",
    "board": {
      "width": 17.78,
      "height": 25.4,
      "color": "#246545",
      "outline": "M6.35 -12.7A2.54 2.54 0 0 1 8.89 -10.16L8.89 10.16A2.54 2.54 0 0 1 6.35 12.7L-6.35 12.7A2.54 2.54 0 0 1 -8.89 10.16L-8.89 -10.16A2.54 2.54 0 0 1 -6.35 -12.7L6.35 -12.7Z"
    },
    "contacts": assets["adafruit-module-3297"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": 6.35,
        "y": 10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3297"]["artwork"],
    "backArtwork": assets["adafruit-module-3297"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3297"]["provenance"],
    "internalConnections": [
      [
        "j1-2",
        "jp5-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3297"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DRV8833-Motor-Driver-Breakout-PCB/blob/dda79a86d6518d05a35091cb8b03b9c0d57d04e2/Adafruit%20DRV8833.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DRV8833-Motor-Driver-Breakout-PCB/blob/dda79a86d6518d05a35091cb8b03b9c0d57d04e2/Adafruit%20DRV8833.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DRV8833-Motor-Driver-Breakout-PCB/blob/dda79a86d6518d05a35091cb8b03b9c0d57d04e2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3297",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3297",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3297. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.891,
      -12.53,
      4.2524,
      12.105
    ],
    "backArtworkBounds": [
      -2.199,
      7.453,
      1.183,
      11.978
    ]
  },
];
