import assets from "./pressure-force-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-6067",
    "sku": "ADA6067",
    "name": "Adafruit LPS28 (LPS28DFW) Pressure Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6067",
    "revision": "EAGLE Adafruit LPS28 Pressure Sensor.brd; commit 593fed8bfe3f",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6067"]["contacts"],
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
    "artwork": assets["adafruit-module-6067"]["artwork"],
    "backArtwork": assets["adafruit-module-6067"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6067"]["provenance"],
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
        "url": "https://www.adafruit.com/product/6067"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/Adafruit%20LPS28%20Pressure%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/Adafruit%20LPS28%20Pressure%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6067",
      "status": "Official Adafruit stock feed reported 27 available.",
      "sku": "ADA6067",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "27"
    },
    "description": "Adafruit ADA6067. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
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
    ],
    "backArtworkBounds": [
      -6.263,
      -3.342,
      -2.881,
      -1.23
    ]
  },
  {
    "id": "adafruit-module-5974",
    "sku": "ADA5974",
    "name": "Adafruit HX711 24-bit ADC for Load Cells / Strain Gauges",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5974",
    "revision": "EAGLE Adafruit HX711 ADC Breakout.brd; commit 4444b42fc47d",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-12.7 8.89A2.54 2.54 0 0 0 -10.16 11.43L10.16 11.43A2.54 2.54 0 0 0 12.7 8.89L12.7 -8.89A2.54 2.54 0 0 0 10.16 -11.43L-10.16 -11.43A2.54 2.54 0 0 0 -12.7 -8.89L-12.7 8.89Z"
    },
    "contacts": assets["adafruit-module-5974"]["contacts"],
    "holes": [
      {
        "x": 9.652,
        "y": 3.659,
        "drill": 0.9
      },
      {
        "x": 9.652,
        "y": 0.659,
        "drill": 0.9
      },
      {
        "x": -10.16,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5974"]["artwork"],
    "backArtwork": assets["adafruit-module-5974"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5974"]["provenance"],
    "internalConnections": [
      [
        "jp1-3",
        "jp2-6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5974"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/Adafruit%20HX711%20ADC%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/Adafruit%20HX711%20ADC%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5974",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5974",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5974. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -11.774999999999999,
      -11.241,
      12.492,
      6.682
    ],
    "backArtworkBounds": [
      -6.644,
      5.421,
      -3.262,
      7.533
    ]
  },
];
