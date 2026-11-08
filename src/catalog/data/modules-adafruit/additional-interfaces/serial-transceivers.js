import assets from "./serial-transceivers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5728",
    "sku": "ADA5728",
    "name": "Adafruit PiCowbell CAN Bus for Pico - MCP2515 CAN Controller",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5728",
    "revision": "EAGLE Adafruit PiCowbell CAN Bus.brd; commit 6a54bc0068c9",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 52.07,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-26.035 10.16L-26.035 -10.16L26.035 -10.16L26.035 10.16L-26.035 10.16Z"
    },
    "contacts": assets["adafruit-module-5728"]["contacts"],
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
        "x": 17.145,
        "y": -2.54,
        "drill": 2.286
      },
      {
        "x": 17.145,
        "y": 2.54,
        "drill": 2.286
      }
    ],
    "artwork": assets["adafruit-module-5728"]["artwork"],
    "backArtwork": assets["adafruit-module-5728"]["backArtwork"],
    "artworkBounds": [
      -25.621,
      -5.29,
      25.865,
      5.29
    ],
    "backArtworkBounds": [
      -18.201,
      -4.1675,
      12.486,
      3.596
    ],
    "provenance": assets["adafruit-module-5728"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "cb1-1"
      ],
      [
        "jp1-2",
        "cb1-2"
      ],
      [
        "jp1-3",
        "jp1-8",
        "jp1-13",
        "jp1-18",
        "jp2-3",
        "jp2-8",
        "jp2-13",
        "jp2-18",
        "conn1-1",
        "can-2",
        "cb1-3",
        "cb1-8",
        "cb1-13",
        "cb1-18",
        "cb1-23",
        "cb1-28",
        "cb1-33",
        "cb1-38"
      ],
      [
        "jp1-4",
        "cb1-4"
      ],
      [
        "jp1-5",
        "cb1-5"
      ],
      [
        "jp1-6",
        "conn1-3",
        "cb1-6"
      ],
      [
        "jp1-7",
        "conn1-4",
        "cb1-7"
      ],
      [
        "jp1-9",
        "cb1-9"
      ],
      [
        "jp1-10",
        "cb1-10"
      ],
      [
        "jp1-11",
        "cb1-11"
      ],
      [
        "jp1-12",
        "cb1-12"
      ],
      [
        "jp1-14",
        "cb1-14"
      ],
      [
        "jp1-15",
        "cb1-15"
      ],
      [
        "jp1-16",
        "cb1-16"
      ],
      [
        "jp1-17",
        "cb1-17"
      ],
      [
        "jp1-19",
        "cb1-19"
      ],
      [
        "jp1-20",
        "cb1-20"
      ],
      [
        "jp2-1",
        "cb1-40"
      ],
      [
        "jp2-2",
        "cb1-39"
      ],
      [
        "jp2-4",
        "cb1-37"
      ],
      [
        "jp2-5",
        "conn1-2",
        "cb1-36"
      ],
      [
        "jp2-6",
        "cb1-35"
      ],
      [
        "jp2-7",
        "cb1-34"
      ],
      [
        "jp2-9",
        "cb1-32"
      ],
      [
        "jp2-10",
        "cb1-31"
      ],
      [
        "jp2-11",
        "cb1-30"
      ],
      [
        "jp2-12",
        "cb1-29"
      ],
      [
        "jp2-14",
        "cb1-27"
      ],
      [
        "jp2-15",
        "cb1-26"
      ],
      [
        "jp2-16",
        "cb1-25"
      ],
      [
        "jp2-17",
        "cb1-24"
      ],
      [
        "jp2-19",
        "cb1-22"
      ],
      [
        "jp2-20",
        "cb1-21"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5728"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-CAN-Bus-PCB/blob/6a54bc0068c96f8ab23616ab215f0996f77bea80/Adafruit%20PiCowbell%20CAN%20Bus.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-CAN-Bus-PCB/blob/6a54bc0068c96f8ab23616ab215f0996f77bea80/Adafruit%20PiCowbell%20CAN%20Bus.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-CAN-Bus-PCB/blob/6a54bc0068c96f8ab23616ab215f0996f77bea80/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5728",
      "status": "Official Adafruit stock feed reported 99 available.",
      "sku": "ADA5728",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "99"
    },
    "description": "Adafruit ADA5728. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
