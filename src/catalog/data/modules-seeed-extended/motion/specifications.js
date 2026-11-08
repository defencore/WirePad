import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-module-108020103",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4"],
      "source": {"label": "Seeed Studio 108020103: EAGLE Grove - I2C Motor Driver (TB6612FNG).brd / v1.0 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J2", "count": 4, "package": "H4-2.54"}],
        "boardSha256": "90db58bf683e43ea5492a137565fbe22965401ba7314f7981445506d465f9e93"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -32.1, "y": -22.1, "width": 64.2, "height": 44.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "108020103",
    "name": "Seeed Grove - I2C Motor Driver (TB6612FNG)",
    "manufacturer": "Seeed Studio",
    "category": "Motors",
    "revision": "EAGLE Grove - I2C Motor Driver (TB6612FNG).brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html"
      }
    ],
    "description": "Seeed Studio 108020103. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html",
      "status": "In stock",
      "sku": "108020103"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip"
    },
    "board": {
      "width": 64.2,
      "height": 44.2,
      "color": "#24617a",
      "outline": "M30.0 -19.2A0.8 0.8 0 0 0 29.2 -20.0L22.2 -20.0A0.1 0.1 0 0 1 22.1 -20.1A2.0 2.0 0 0 0 20.1 -22.1L19.9 -22.1A2.0 2.0 0 0 0 17.9 -20.1A0.111325 0.111325 0 0 1 17.8 -20.0L2.2 -20.0A0.1 0.1 0 0 0 2.1 -19.9A2.0 2.0 0 0 1 0.1 -17.9L-0.1 -17.9A2.0 2.0 0 0 1 -2.1 -19.9A0.1 0.1 0 0 0 -2.2 -20.0L-17.8 -20.0A0.1 0.1 0 0 1 -17.9 -20.1A2.0 2.0 0 0 0 -19.9 -22.1L-20.1 -22.1A2.0 2.0 0 0 0 -22.1 -20.1A0.111325 0.111325 0 0 1 -22.2 -20.0L-29.2 -20.0A0.8 0.8 0 0 0 -30.0 -19.2L-30.0 -12.2A0.110889 0.110889 0 0 0 -29.9 -12.1A2.0 2.0 0 0 1 -27.9 -10.1L-27.9 -10.0A2.002381 2.002381 0 0 1 -29.9 -7.9A0.1 0.1 0 0 0 -30.0 -7.8L-30.0 7.8A0.1 0.1 0 0 1 -30.1 7.9A2.0 2.0 0 0 0 -32.1 9.9L-32.1 10.1A2.0 2.0 0 0 0 -30.1 12.1A0.111325 0.111325 0 0 1 -30.0 12.2L-30.0 19.2A0.8 0.8 0 0 0 -29.2 20.0L-22.2 20.0A0.110889 0.110889 0 0 0 -22.1 19.9A2.0 2.0 0 0 1 -20.1 17.9L-20.0 17.9A2.002381 2.002381 0 0 1 -17.9 19.9A0.1 0.1 0 0 0 -17.8 20.0L-2.2 20.0A0.1 0.1 0 0 1 -2.1 20.1A2.0 2.0 0 0 0 -0.1 22.1L0.1 22.1A2.0 2.0 0 0 0 2.1 20.1A0.1 0.1 0 0 1 2.2 20.0L17.8 20.0A0.110889 0.110889 0 0 0 17.9 19.9A2.0 2.0 0 0 1 19.9 17.9L20.0 17.9A2.002381 2.002381 0 0 1 22.1 19.9A0.1 0.1 0 0 0 22.2 20.0L29.2 20.0A0.8 0.8 0 0 0 30.0 19.2L30.0 12.2A0.1 0.1 0 0 1 30.1 12.1A2.0 2.0 0 0 0 32.1 10.1L32.1 9.9A2.0 2.0 0 0 0 30.1 7.9A0.1 0.1 0 0 1 30.0 7.8L30.0 -7.8A0.1 0.1 0 0 0 29.9 -7.9A2.0 2.0 0 0 1 27.9 -9.9L27.9 -10.1A2.0 2.0 0 0 1 29.9 -12.1A0.1 0.1 0 0 0 30.0 -12.2L30.0 -19.2Z"
    },
    "contacts": assets["seeed-module-108020103"]["contacts"],
    "holes": [
      {
        "x": 0.017,
        "y": 20.015,
        "drill": 2.2
      },
      {
        "x": 30.005,
        "y": 10.02,
        "drill": 2.2
      },
      {
        "x": -29.985,
        "y": 9.983,
        "drill": 2.2
      },
      {
        "x": -19.98,
        "y": -20.005,
        "drill": 2.2
      },
      {
        "x": 19.983,
        "y": -20.015,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-108020103"]["artwork"],
    "backArtwork": assets["seeed-module-108020103"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ],
    "backArtworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ],
    "provenance": assets["seeed-module-108020103"]["provenance"],
    "internalConnections": [
      [
        "j7-4",
        "sda3-t"
      ],
      [
        "j7-5",
        "j5-4",
        "j5-ss1",
        "j5-ss2",
        "scl1-t",
        "j1-2"
      ],
      [
        "j5-1",
        "gnd1-t"
      ],
      [
        "j5-2",
        "vcc2-t"
      ],
      [
        "j5-3",
        "sda1-t"
      ],
      [
        "j2-1",
        "j6-1"
      ],
      [
        "j2-2",
        "j6-2"
      ],
      [
        "j2-3",
        "j8-1"
      ],
      [
        "j2-4",
        "j8-2"
      ]
    ]
  },
  {
    "id": "seeed-module-105020001",
    "sku": "105020001",
    "name": "Seeed Grove - I2C Motor Driver V1.3",
    "manufacturer": "Seeed Studio",
    "category": "Motors",
    "revision": "EAGLE Grove - I2C Motor Driver  v1.3b.brd",
    "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html"
      }
    ],
    "description": "Seeed Studio 105020001. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html",
      "status": "In stock",
      "sku": "105020001"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip"
    },
    "board": {
      "width": 64.2,
      "height": 44.2,
      "color": "#24617a",
      "outline": "M30.0 -19.2A0.8 0.8 0 0 0 29.2 -20.0L22.2 -20.0A0.1 0.1 0 0 1 22.1 -20.1A2.0 2.0 0 0 0 20.1 -22.1L19.9 -22.1A2.0 2.0 0 0 0 17.9 -20.1A0.111325 0.111325 0 0 1 17.8 -20.0L2.2 -20.0A0.1 0.1 0 0 0 2.1 -19.9A2.0 2.0 0 0 1 0.1 -17.9L-0.1 -17.9A2.0 2.0 0 0 1 -2.1 -19.9A0.1 0.1 0 0 0 -2.2 -20.0L-17.8 -20.0A0.1 0.1 0 0 1 -17.9 -20.1A2.0 2.0 0 0 0 -19.9 -22.1L-20.1 -22.1A2.0 2.0 0 0 0 -22.1 -20.1A0.111325 0.111325 0 0 1 -22.2 -20.0L-29.2 -20.0A0.8 0.8 0 0 0 -30.0 -19.2L-30.0 -12.2A0.110889 0.110889 0 0 0 -29.9 -12.1A2.0 2.0 0 0 1 -27.9 -10.1L-27.9 -10.0A2.002381 2.002381 0 0 1 -29.9 -7.9A0.1 0.1 0 0 0 -30.0 -7.8L-30.0 7.8A0.1 0.1 0 0 1 -30.1 7.9A2.0 2.0 0 0 0 -32.1 9.9L-32.1 10.1A2.0 2.0 0 0 0 -30.1 12.1A0.111325 0.111325 0 0 1 -30.0 12.2L-30.0 19.2A0.8 0.8 0 0 0 -29.2 20.0L-22.2 20.0A0.110889 0.110889 0 0 0 -22.1 19.9A2.0 2.0 0 0 1 -20.1 17.9L-20.0 17.9A2.002381 2.002381 0 0 1 -17.9 19.9A0.1 0.1 0 0 0 -17.8 20.0L-2.2 20.0A0.1 0.1 0 0 1 -2.1 20.1A2.0 2.0 0 0 0 -0.1 22.1L0.1 22.1A2.0 2.0 0 0 0 2.1 20.1A0.1 0.1 0 0 1 2.2 20.0L17.8 20.0A0.110889 0.110889 0 0 0 17.9 19.9A2.0 2.0 0 0 1 19.9 17.9L20.0 17.9A2.002381 2.002381 0 0 1 22.1 19.9A0.1 0.1 0 0 0 22.2 20.0L29.2 20.0A0.8 0.8 0 0 0 30.0 19.2L30.0 12.2A0.1 0.1 0 0 1 30.1 12.1A2.0 2.0 0 0 0 32.1 10.1L32.1 9.9A2.0 2.0 0 0 0 30.1 7.9A0.1 0.1 0 0 1 30.0 7.8L30.0 -7.8A0.1 0.1 0 0 0 29.9 -7.9A2.0 2.0 0 0 1 27.9 -9.9L27.9 -10.1A2.0 2.0 0 0 1 29.9 -12.1A0.1 0.1 0 0 0 30.0 -12.2L30.0 -19.2Z"
    },
    "contacts": assets["seeed-module-105020001"]["contacts"],
    "holes": [
      {
        "x": 0.017,
        "y": 20.015,
        "drill": 2.2
      },
      {
        "x": 30.005,
        "y": 10.02,
        "drill": 2.2
      },
      {
        "x": -29.985,
        "y": 9.983,
        "drill": 2.2
      },
      {
        "x": -19.98,
        "y": -20.005,
        "drill": 2.2
      },
      {
        "x": 19.983,
        "y": -20.015,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-105020001"]["artwork"],
    "backArtwork": assets["seeed-module-105020001"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ],
    "provenance": assets["seeed-module-105020001"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j3-1"
      ],
      [
        "j1-2",
        "j3-2"
      ],
      [
        "j5-1",
        "j3-3"
      ],
      [
        "j5-2",
        "j3-4"
      ],
      [
        "j4-1",
        "i2c-3"
      ],
      [
        "j4-2",
        "j2-6"
      ],
      [
        "j6-2",
        "j2-4",
        "i2c-4"
      ]
    ],
    "backArtworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ]
  },
  {
    "id": "seeed-module-108020102",
    "sku": "108020102",
    "name": "Seeed Grove - 16 Channel PWM Driver (PCA9685)",
    "manufacturer": "Seeed Studio",
    "category": "Motors",
    "revision": "EAGLE 16-Channel PWM Driver(PCA9685).brd / unmarked PCB revision",
    "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html"
      }
    ],
    "description": "Seeed Studio 108020102. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html",
      "status": "In stock",
      "sku": "108020102"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip"
    },
    "board": {
      "width": 64.2,
      "height": 44.2,
      "color": "#24617a",
      "outline": "M30.0 -19.2A0.8 0.8 0 0 0 29.2 -20.0L22.2 -20.0A0.1 0.1 0 0 1 22.1 -20.1A2.0 2.0 0 0 0 20.1 -22.1L19.9 -22.1A2.0 2.0 0 0 0 17.9 -20.1A0.111325 0.111325 0 0 1 17.8 -20.0L2.2 -20.0A0.1 0.1 0 0 0 2.1 -19.9A2.0 2.0 0 0 1 0.1 -17.9L-0.1 -17.9A2.0 2.0 0 0 1 -2.1 -19.9A0.1 0.1 0 0 0 -2.2 -20.0L-17.8 -20.0A0.1 0.1 0 0 1 -17.9 -20.1A2.0 2.0 0 0 0 -19.9 -22.1L-20.1 -22.1A2.0 2.0 0 0 0 -22.1 -20.1A0.111325 0.111325 0 0 1 -22.2 -20.0L-29.2 -20.0A0.8 0.8 0 0 0 -30.0 -19.2L-30.0 -12.2A0.110889 0.110889 0 0 0 -29.9 -12.1A2.0 2.0 0 0 1 -27.9 -10.1L-27.9 -10.0A2.002381 2.002381 0 0 1 -29.9 -7.9A0.1 0.1 0 0 0 -30.0 -7.8L-30.0 7.8A0.1 0.1 0 0 1 -30.1 7.9A2.0 2.0 0 0 0 -32.1 9.9L-32.1 10.1A2.0 2.0 0 0 0 -30.1 12.1A0.111325 0.111325 0 0 1 -30.0 12.2L-30.0 19.2A0.8 0.8 0 0 0 -29.2 20.0L-22.2 20.0A0.110889 0.110889 0 0 0 -22.1 19.9A2.0 2.0 0 0 1 -20.1 17.9L-20.0 17.9A2.002381 2.002381 0 0 1 -17.9 19.9A0.1 0.1 0 0 0 -17.8 20.0L-2.2 20.0A0.1 0.1 0 0 1 -2.1 20.1A2.0 2.0 0 0 0 -0.1 22.1L0.1 22.1A2.0 2.0 0 0 0 2.1 20.1A0.1 0.1 0 0 1 2.2 20.0L17.8 20.0A0.110889 0.110889 0 0 0 17.9 19.9A2.0 2.0 0 0 1 19.9 17.9L20.0 17.9A2.002381 2.002381 0 0 1 22.1 19.9A0.1 0.1 0 0 0 22.2 20.0L29.2 20.0A0.8 0.8 0 0 0 30.0 19.2L30.0 12.2A0.1 0.1 0 0 1 30.1 12.1A2.0 2.0 0 0 0 32.1 10.1L32.1 9.9A2.0 2.0 0 0 0 30.1 7.9A0.1 0.1 0 0 1 30.0 7.8L30.0 -7.8A0.1 0.1 0 0 0 29.9 -7.9A2.0 2.0 0 0 1 27.9 -9.9L27.9 -10.1A2.0 2.0 0 0 1 29.9 -12.1A0.1 0.1 0 0 0 30.0 -12.2L30.0 -19.2Z"
    },
    "contacts": assets["seeed-module-108020102"]["contacts"],
    "holes": [
      {
        "x": 0.017,
        "y": 20.015,
        "drill": 2.2
      },
      {
        "x": 30.005,
        "y": 10.02,
        "drill": 2.2
      },
      {
        "x": -29.985,
        "y": 9.983,
        "drill": 2.2
      },
      {
        "x": -19.98,
        "y": -20.005,
        "drill": 2.2
      },
      {
        "x": 19.983,
        "y": -20.015,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-108020102"]["artwork"],
    "backArtwork": assets["seeed-module-108020102"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ],
    "backArtworkBounds": [
      -32.1,
      -22.1,
      32.1,
      22.1
    ],
    "provenance": assets["seeed-module-108020102"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "gnd1-t"
      ],
      [
        "j1-2",
        "vcc2-t"
      ],
      [
        "j1-3",
        "sda1-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "scl1-t",
        "j2-3",
        "j2-4",
        "jp1-00",
        "jp2-00",
        "jp3-00",
        "jp4-00",
        "jp5-00",
        "jp6-00",
        "j4-2",
        "j3-3",
        "j3-4",
        "j6-3",
        "j6-4",
        "j7-3",
        "j7-4",
        "j8-3",
        "j8-4",
        "j9-3",
        "j9-4",
        "j10-3",
        "j10-4",
        "j11-3",
        "j11-4"
      ],
      [
        "j2-2",
        "j2-5",
        "j3-2",
        "j3-5",
        "j6-2",
        "j6-5",
        "j7-2",
        "j7-5",
        "j8-2",
        "j8-5",
        "j9-2",
        "j9-5",
        "j10-2",
        "j10-5",
        "j11-2",
        "j11-5"
      ]
    ]
  },
];
