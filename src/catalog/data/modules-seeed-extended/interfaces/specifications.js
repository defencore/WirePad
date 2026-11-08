import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-module-113020006",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5"],
      "source": {"label": "Seeed Studio 113020006: EAGLE Grove - NFC v1.brd physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J1", "count": 5, "package": "5P-2.54"}],
        "boardSha256": "a44e9c453466b151f337f80c19b6121e1e32ac32845cfbcab8406c5c6009aa22"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -21.8105, "y": -11.9605, "width": 43.621, "height": 23.921}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "113020006",
    "name": "Seeed Grove - NFC",
    "manufacturer": "Seeed Studio",
    "category": "Wireless",
    "revision": "EAGLE Grove - NFC v1.brd",
    "source": "https://wiki.seeedstudio.com/Grove_NFC/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove_NFC/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-NFC-p-1804.html"
      }
    ],
    "description": "Seeed Studio 113020006. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-NFC-p-1804.html",
      "status": "In stock",
      "sku": "113020006"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-113020006"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.03,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -7.5065,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -6.681,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -5.8555,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 7.67,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 5.1935,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 6.019,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 6.8445,
        "drill": 0.5
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-113020006"]["artwork"],
    "backArtwork": assets["seeed-module-113020006"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-113020006"]["provenance"],
    "internalConnections": [
      [
        "ant1-gnd1",
        "ant1-gnd2",
        "ant1-gnd3"
      ],
      [
        "j3-1",
        "tp1-t",
        "j1-5"
      ],
      [
        "j3-2",
        "tp2-t",
        "j1-4"
      ],
      [
        "j3-3",
        "tp3-t",
        "j1-2"
      ],
      [
        "j3-4",
        "j3-ss1",
        "j3-ss2",
        "tp4-t",
        "j1-1",
        "p1-11"
      ]
    ]
  },
  {
    "id": "seeed-module-103020013",
    "sku": "103020013",
    "name": "Seeed Grove - I2C ADC",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove - I2C ADC.brd / I2C ADC v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-I2C_ADC/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-I2C-ADC.html"
      }
    ],
    "description": "Seeed Studio 103020013. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-I2C-ADC.html",
      "status": "In stock",
      "sku": "103020013"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-103020013"]["contacts"],
    "holes": [
      {
        "x": 20,
        "y": 7.67,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 6.87,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 6.07,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 5.27,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 4.47,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -7.57,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -6.77,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -5.97,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -5.17,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -4.37,
        "drill": 0.6
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-103020013"]["artwork"],
    "backArtwork": assets["seeed-module-103020013"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-103020013"]["provenance"],
    "internalConnections": [
      [
        "j2-3",
        "j1-3"
      ],
      [
        "j2-4",
        "j1-4",
        "gnd-t",
        "addr1-00",
        "addr0-00"
      ],
      [
        "va-t",
        "addr1-11",
        "addr0-11"
      ]
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-103020193",
    "sku": "103020193",
    "name": "Seeed Grove - RS485",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove-RS485.brd / Grove-RS485 v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-RS485/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-RS485/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-RS485-p-2924.html"
      }
    ],
    "description": "Seeed Studio 103020193. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-RS485-p-2924.html",
      "status": "In stock",
      "sku": "103020193"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-103020193"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-103020193"]["artwork"],
    "backArtwork": assets["seeed-module-103020193"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-103020193"]["provenance"],
    "internalConnections": [
      [
        "j1-3",
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "tp4-t"
      ],
      [
        "j2-1",
        "tp1-t"
      ],
      [
        "j2-2",
        "tp2-t"
      ],
      [
        "j2-3",
        "tp3-t"
      ]
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-103020293",
    "sku": "103020293",
    "name": "Seeed Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove - 8 Channel I2C Hub TCA9548A_v1.0_190814.brd",
    "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html"
      }
    ],
    "description": "Seeed Studio 103020293. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html",
      "status": "In stock",
      "sku": "103020293"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip"
    },
    "board": {
      "width": 83.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-39.3 -9.95A0.8 0.8 0 0 0 -40.1 -9.15L-40.1 -2.65A0.3 0.3 0 0 0 -39.8 -2.35A2.418677 2.418677 0 0 1 -39.8 2.45A0.3 0.3 0 0 0 -40.1 2.75L-40.1 9.25A0.8 0.8 0 0 0 -39.3 10.05L-32.2 10.05A0.2 0.2 0 0 1 -32.0 10.25A1.910497 1.910497 0 0 0 -28.2 10.25A0.2 0.2 0 0 1 -28.0 10.05L-12.8 10.05A0.3 0.3 0 0 0 -12.5 9.75A2.418677 2.418677 0 0 1 -7.7 9.75A0.3 0.3 0 0 0 -7.4 10.05L7.8 10.05A0.2 0.2 0 0 1 8.0 10.25A1.910497 1.910497 0 0 0 11.8 10.25A0.2 0.2 0 0 1 12.0 10.05L27.2 10.05A0.3 0.3 0 0 0 27.5 9.75A2.418677 2.418677 0 0 1 32.3 9.75A0.3 0.3 0 0 0 32.6 10.05L39.1 10.05A0.8 0.8 0 0 0 39.9 9.25L39.9 2.15A0.2 0.2 0 0 1 40.1 1.95A1.910497 1.910497 0 0 0 40.1 -1.85A0.2 0.2 0 0 1 39.9 -2.05L39.9 -9.15A0.8 0.8 0 0 0 39.1 -9.95L32.6 -9.95A0.3 0.3 0 0 0 32.3 -9.65A2.418677 2.418677 0 0 1 27.5 -9.65A0.3 0.3 0 0 0 27.2 -9.95L12.1 -9.95A0.3 0.3 0 0 1 11.8 -10.25A1.923538 1.923538 0 0 0 8.0 -10.25A0.3 0.3 0 0 1 7.7 -9.95L-7.4 -9.95A0.3 0.3 0 0 0 -7.7 -9.65A2.418677 2.418677 0 0 1 -12.5 -9.65A0.3 0.3 0 0 0 -12.8 -9.95L-27.9 -9.95A0.3 0.3 0 0 1 -28.2 -10.25A1.923538 1.923538 0 0 0 -32.0 -10.25A0.3 0.3 0 0 1 -32.3 -9.95L-39.3 -9.95Z"
    },
    "contacts": assets["seeed-module-103020293"]["contacts"],
    "holes": [
      {
        "x": -30.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -30.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 9.9,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 9.9,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 39.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-103020293"]["artwork"],
    "backArtwork": assets["seeed-module-103020293"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -40.1,
      -11.873540604271307,
      41.81050003250049,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-103020293"]["provenance"],
    "internalConnections": [
      [
        "tp1-t",
        "j1-1"
      ],
      [
        "tp2-t",
        "j1-2"
      ],
      [
        "tp3-t",
        "jp1-2",
        "jp2-2",
        "jp3-2",
        "ch0-3",
        "ch1-3",
        "ch2-3",
        "ch3-3",
        "ch4-3",
        "ch5-3",
        "ch6-3",
        "ch7-3",
        "j1-3"
      ],
      [
        "tp4-t",
        "ch0-4",
        "ch1-4",
        "ch2-4",
        "ch3-4",
        "ch4-4",
        "ch5-4",
        "ch6-4",
        "ch7-4",
        "j1-4"
      ],
      [
        "tp6-p1",
        "ch0-1"
      ],
      [
        "tp7-p1",
        "ch0-2"
      ],
      [
        "tp8-p1",
        "ch1-1"
      ],
      [
        "tp9-p1",
        "ch1-2"
      ],
      [
        "tp10-p1",
        "ch2-1"
      ],
      [
        "tp11-p1",
        "ch2-2"
      ],
      [
        "tp12-p1",
        "ch3-1"
      ],
      [
        "tp13-p1",
        "ch3-2"
      ],
      [
        "tp14-p1",
        "ch4-1"
      ],
      [
        "tp15-p1",
        "ch4-2"
      ],
      [
        "tp16-p1",
        "ch5-1"
      ],
      [
        "tp17-p1",
        "ch5-2"
      ],
      [
        "tp18-p1",
        "ch6-1"
      ],
      [
        "tp19-p1",
        "ch6-2"
      ],
      [
        "tp20-p1",
        "ch7-1"
      ],
      [
        "tp21-p1",
        "ch7-2"
      ]
    ],
    "backArtworkBounds": [
      -40.1,
      -11.873540604271307,
      41.81050003250049,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-109020041",
    "sku": "109020041",
    "name": "Seeed Grove - 4-Channel 16-bit ADC(ADS1115)",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove - ADS1115 16-bit ADC_v1.0_200303.brd",
    "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html"
      }
    ],
    "description": "Seeed Studio 109020041. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html",
      "status": "In stock",
      "sku": "109020041"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-109020041"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-109020041"]["artwork"],
    "backArtwork": assets["seeed-module-109020041"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-109020041"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j3-2",
        "jp4-1"
      ],
      [
        "j1-2",
        "j3-3",
        "jp3-1"
      ],
      [
        "j1-3",
        "j3-4",
        "j4-6",
        "jp2-1",
        "ain0-3"
      ],
      [
        "j1-4",
        "j3-5",
        "j4-5",
        "jp1-1",
        "ain0-4"
      ],
      [
        "j3-1",
        "jp1-2",
        "jp2-2",
        "jp3-2",
        "jp4-2"
      ],
      [
        "j3-6",
        "j4-4",
        "ain0-1"
      ],
      [
        "j3-7",
        "j4-3",
        "ain0-2"
      ],
      [
        "j3-8",
        "j4-2"
      ],
      [
        "j3-9",
        "j4-1"
      ]
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-101020636",
    "sku": "101020636",
    "name": "Seeed Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove - 12-Channel Capacitive Touch Keypad (ATtiny1616).brd / unmarked PCB revision",
    "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html"
      }
    ],
    "description": "Seeed Studio 101020636. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html",
      "status": "In stock",
      "sku": "101020636"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip"
    },
    "board": {
      "width": 60,
      "height": 80,
      "color": "#24617a",
      "outline": "M-28.0 40.0A2.0 2.0 0 0 1 -30.0 38.0L-30.0 -38.0A2.0 2.0 0 0 1 -28.0 -40.0L28.0 -40.0A2.0 2.0 0 0 1 30.0 -38.0L30.0 38.0A2.0 2.0 0 0 1 28.0 40.0L-28.0 40.0Z"
    },
    "contacts": assets["seeed-module-101020636"]["contacts"],
    "holes": [
      {
        "x": -28,
        "y": 38,
        "drill": 2
      },
      {
        "x": 28,
        "y": 38,
        "drill": 2
      },
      {
        "x": -28,
        "y": -38,
        "drill": 2
      },
      {
        "x": 28,
        "y": -38,
        "drill": 2
      }
    ],
    "artwork": assets["seeed-module-101020636"]["artwork"],
    "backArtwork": assets["seeed-module-101020636"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "backArtworkBounds": [
      -30,
      -40,
      30,
      40.015
    ],
    "provenance": assets["seeed-module-101020636"]["provenance"],
    "internalConnections": [
      [
        "p1-1",
        "tp1-t"
      ],
      [
        "p1-2",
        "tp2-t"
      ],
      [
        "p1-3",
        "tp4-t",
        "j15-2"
      ],
      [
        "p1-4",
        "p1-ss1",
        "p1-ss2",
        "tp3-t",
        "j15-3"
      ]
    ],
    "artworkBounds": [
      -30,
      -40,
      30,
      40
    ]
  },
  {
    "id": "seeed-module-111020048",
    "sku": "111020048",
    "name": "Seeed Grove - 5-Way Switch",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove - 5-Way Switch.brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html"
      }
    ],
    "description": "Seeed Studio 111020048. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html",
      "status": "In stock",
      "sku": "111020048"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-111020048"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-111020048"]["artwork"],
    "backArtwork": assets["seeed-module-111020048"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-111020048"]["provenance"],
    "internalConnections": [
      [
        "tp1-t",
        "j2-1"
      ],
      [
        "tp2-t",
        "j2-2"
      ],
      [
        "tp3-t",
        "j2-3",
        "j1-2"
      ],
      [
        "tp4-t",
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "tp6-t",
        "j1-5"
      ]
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-113020007",
    "sku": "113020007",
    "name": "Seeed Grove BLE v1",
    "manufacturer": "Seeed Studio",
    "category": "Wireless",
    "revision": "EAGLE Grove - BLE v1.0.brd",
    "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-BLE_v1/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Blueseeed-HM11.html"
      }
    ],
    "description": "Seeed Studio 113020007. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Blueseeed-HM11.html",
      "status": "In stock",
      "sku": "113020007"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-113020007"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.03,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -7.5065,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -6.681,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": -5.8555,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 7.67,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 5.1935,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 6.019,
        "drill": 0.5
      },
      {
        "x": 20.0295,
        "y": 6.8445,
        "drill": 0.5
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-113020007"]["artwork"],
    "backArtwork": assets["seeed-module-113020007"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-113020007"]["provenance"],
    "internalConnections": [
      [
        "gnd-t",
        "j2-4",
        "j2-ss1",
        "j2-ss2"
      ],
      [
        "vcc-t",
        "j2-3"
      ],
      [
        "rx-t",
        "j2-2"
      ],
      [
        "tx-t",
        "j2-1"
      ]
    ],
    "backArtworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ]
  },
  {
    "id": "seeed-module-103020002",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8", "j2-9", "j2-10", "j3-1", "j3-2", "j3-3", "j3-4", "j3-5", "j3-6", "j3-7", "j3-8", "j3-9", "j3-10"],
      "source": {"label": "Seeed Studio 103020002: EAGLE Grove Bee Socket V0.9a.brd header geometry", "url": "https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 10, "package": "CK1X10"}, {"id": "J3", "count": 10, "package": "CK1X10"}],
        "boardSha256": "aec166acfdd70017609d40f21cfa9ad83570b7ea4a0f2d67ba9b5d23f97a870c"
      },
      "bodyRegions": [
        {"x": -22.1, "y": -22.1, "width": 44.2, "height": 44.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "103020002",
    "name": "Seeed Grove - Bee Socket",
    "manufacturer": "Seeed Studio",
    "category": "Semiconductors",
    "revision": "EAGLE Grove Bee Socket V0.9a.brd",
    "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Bee_Socket/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Bee-Socket.html"
      }
    ],
    "description": "Seeed Studio 103020002. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Bee-Socket.html",
      "status": "In stock",
      "sku": "103020002"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip"
    },
    "board": {
      "width": 44.2,
      "height": 44.2,
      "color": "#24617a",
      "outline": "M-20.0 -19.2A0.8 0.8 0 0 1 -19.2 -20.0L-12.2 -20.0A0.1 0.1 0 0 1 -12.1 -19.9A2.0 2.0 0 0 0 -10.1 -17.9L-9.9 -17.9A2.0 2.0 0 0 0 -7.9 -19.9A0.1 0.1 0 0 1 -7.8 -20.0L7.8 -20.0A0.1 0.1 0 0 0 7.9 -20.1A2.0 2.0 0 0 1 9.9 -22.1L10.1 -22.1A2.0 2.0 0 0 1 12.1 -20.1A0.1 0.1 0 0 0 12.2 -20.0L19.2 -20.0A0.8 0.8 0 0 1 20.0 -19.2L20.0 -12.2A0.1 0.1 0 0 1 19.9 -12.1A2.0 2.0 0 0 0 17.9 -10.1L17.9 -9.9A2.0 2.0 0 0 0 19.9 -7.9A0.1 0.1 0 0 1 20.0 -7.8L20.0 7.8A0.1 0.1 0 0 0 20.1 7.9A2.0 2.0 0 0 1 22.1 9.9L22.1 10.1A2.0 2.0 0 0 1 20.1 12.1A0.1 0.1 0 0 0 20.0 12.2L20.0 19.2A0.8 0.8 0 0 1 19.2 20.0L12.2 20.0A0.1 0.1 0 0 1 12.1 19.9A2.0 2.0 0 0 0 10.1 17.9L9.9 17.9A2.0 2.0 0 0 0 7.9 19.9A0.1 0.1 0 0 1 7.8 20.0L-7.8 20.0A0.1 0.1 0 0 0 -7.9 20.1A2.0 2.0 0 0 1 -9.9 22.1L-10.1 22.1A2.0 2.0 0 0 1 -12.1 20.1A0.1 0.1 0 0 0 -12.2 20.0L-19.2 20.0A0.8 0.8 0 0 1 -20.0 19.2L-20.0 12.2A0.1 0.1 0 0 1 -19.9 12.1A2.0 2.0 0 0 0 -17.9 10.1L-17.9 9.9A2.0 2.0 0 0 0 -19.9 7.9A0.1 0.1 0 0 1 -20.0 7.8L-20.0 -7.8A0.1 0.1 0 0 0 -20.1 -7.9A2.0 2.0 0 0 1 -22.1 -9.9L-22.1 -10.1A2.0 2.0 0 0 1 -20.1 -12.1A0.1 0.1 0 0 0 -20.0 -12.2L-20.0 -19.2Z"
    },
    "contacts": assets["seeed-module-103020002"]["contacts"],
    "holes": [
      {
        "x": -16.644,
        "y": 18.542,
        "drill": 0.95
      },
      {
        "x": -14.344,
        "y": 18.542,
        "drill": 0.95
      },
      {
        "x": 10,
        "y": -20,
        "drill": 2.2
      },
      {
        "x": -20,
        "y": -10,
        "drill": 2.2
      },
      {
        "x": -10,
        "y": 20,
        "drill": 2.2
      },
      {
        "x": 20,
        "y": 10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-103020002"]["artwork"],
    "backArtwork": assets["seeed-module-103020002"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -22.1,
      -22.1,
      22.1,
      22.1
    ],
    "provenance": assets["seeed-module-103020002"]["provenance"],
    "internalConnections": [
      [
        "j1-4",
        "j2-10",
        "xbee-10"
      ],
      [
        "j2-1",
        "xbee-1"
      ],
      [
        "j2-2",
        "xbee-2"
      ],
      [
        "j2-3",
        "xbee-3"
      ],
      [
        "j2-4",
        "xbee-4"
      ],
      [
        "j2-5",
        "xbee-5"
      ],
      [
        "j2-6",
        "xbee-6"
      ],
      [
        "j2-9",
        "xbee-9"
      ],
      [
        "j3-1",
        "xbee-11"
      ],
      [
        "j3-2",
        "xbee-12"
      ],
      [
        "j3-3",
        "xbee-13"
      ],
      [
        "j3-4",
        "xbee-14"
      ],
      [
        "j3-5",
        "xbee-15"
      ],
      [
        "j3-6",
        "xbee-16"
      ],
      [
        "j3-7",
        "xbee-17"
      ],
      [
        "j3-8",
        "xbee-18"
      ],
      [
        "j3-9",
        "xbee-19"
      ],
      [
        "j3-10",
        "xbee-20"
      ]
    ],
    "backArtworkBounds": [
      -22.1,
      -22.1,
      22.1,
      22.1
    ]
  },
];
