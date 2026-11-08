import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-module-101020852",
    "sku": "101020852",
    "name": "Seeed Grove - Analog Microphone",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Analog Microphone_v1.0_191223.brd",
    "source": "https://wiki.seeedstudio.com/Grove-Analog-Microphone/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Analog-Microphone/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html"
      }
    ],
    "description": "Seeed Studio 101020852. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html",
      "status": "In stock",
      "sku": "101020852"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip"
    },
    "board": {
      "width": 20,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-module-101020852"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-101020852"]["artwork"],
    "backArtwork": assets["seeed-module-101020852"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -10,
      -11.873540604271303,
      10,
      11.96050003250049
    ],
    "provenance": assets["seeed-module-101020852"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t"
      ]
    ],
    "backArtworkBounds": [
      -10,
      -11.873540604271303,
      10,
      11.96050003250049
    ]
  },
  {
    "id": "seeed-module-101991067",
    "sku": "101991067",
    "name": "Seeed Grove Smart IR Gesture Sensor (PAJ7660)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Smart IR Gesture Sensor.brd / v1.0",
    "source": "https://wiki.seeedstudio.com/grove_gesture_paj7660/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/grove_gesture_paj7660/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html"
      }
    ],
    "description": "Seeed Studio 101991067. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports. The fitted camera lens assembly is representative; the cited carrier source contains its FPC connection and the PAG7661 processor.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html",
      "status": "In stock",
      "sku": "101991067"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip"
    },
    "board": {
      "width": 43.621141,
      "height": 20.0064,
      "color": "#24617a",
      "outline": "M19.799998 -2.4032A2.418671 2.418671 0 0 0 19.799998 2.3968A0.300002 0.300002 0 0 1 20.099998 2.6968L20.099998 9.1968A0.800019 0.800019 0 0 1 19.299998 9.9968L-7.200002 9.9968A0.300008 0.300008 0 0 1 -7.500002 9.6968A2.418671 2.418671 0 0 0 -12.300002 9.6968A0.300003 0.300003 0 0 1 -12.600002 9.9968L-19.100002 9.9968A0.800023 0.800023 0 0 1 -19.900002 9.1968L-19.900002 2.0968A0.200003 0.200003 0 0 0 -20.100002 1.8968A1.910489 1.910489 0 0 1 -20.100002 -1.9032A0.200006 0.200006 0 0 0 -19.899998 -2.1032L-19.900002 -9.2032A0.800022 0.800022 0 0 1 -19.100002 -10.0032L-12.600002 -10.0032A0.300002 0.300002 0 0 1 -12.300002 -9.7032A2.418671 2.418671 0 0 0 -7.500002 -9.7032A0.300006 0.300006 0 0 1 -7.200002 -10.0032L19.299998 -10.0032A0.800017 0.800017 0 0 1 20.099998 -9.2032L20.099998 -2.7032A0.300003 0.300003 0 0 1 19.799998 -2.4032Z"
    },
    "contacts": assets["seeed-module-101991067"]["contacts"],
    "holes": [
      {
        "x": 14.738998,
        "y": 2.8868,
        "drill": 0.55
      },
      {
        "x": 14.738998,
        "y": -2.8932,
        "drill": 0.55
      },
      {
        "x": -19.900002,
        "y": -0.0032,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-101991067"]["artwork"],
    "backArtwork": assets["seeed-module-101991067"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -21.8105704679854,
      -10.0032,
      20.099998000006668,
      9.996800000015
    ],
    "backArtworkBounds": [
      -21.8105704679854,
      -10.0032,
      21.078998,
      9.996800000015
    ],
    "provenance": assets["seeed-module-101991067"]["provenance"],
    "internalConnections": [
      [
        "usb-s1",
        "usb-s3",
        "usb-s2",
        "usb-s4",
        "usb-a1_b12",
        "usb-b1_a12",
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "j3-2"
      ],
      [
        "usb-a6",
        "usb-b6"
      ],
      [
        "usb-a7",
        "usb-b7"
      ],
      [
        "usb-b4_a9",
        "usb-a4_b9"
      ],
      [
        "j2-4",
        "jp1-mm"
      ],
      [
        "j2-5",
        "j3-4"
      ],
      [
        "j2-6",
        "j3-6"
      ]
    ]
  },
  {
    "id": "seeed-module-105020074",
    "sku": "105020074",
    "name": "Seeed Grove - LED Matrix Driver (HT16K33)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE LED Matrix Driver(HT16K33) v1.0.brd",
    "source": "https://wiki.seeedstudio.com/Grove-LED_Matrix_Driver-HT16K33/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-LED_Matrix_Driver-HT16K33/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html"
      }
    ],
    "description": "Seeed Studio 105020074. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html",
      "status": "In stock",
      "sku": "105020074"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip"
    },
    "board": {
      "width": 44.2,
      "height": 44.2,
      "color": "#24617a",
      "outline": "M-20.0 -19.2A0.8 0.8 0 0 1 -19.2 -20.0L-12.2 -20.0A0.1 0.1 0 0 1 -12.1 -19.9A2.0 2.0 0 0 0 -10.1 -17.9L-9.9 -17.9A2.0 2.0 0 0 0 -7.9 -19.9A0.1 0.1 0 0 1 -7.8 -20.0L7.8 -20.0A0.1 0.1 0 0 0 7.9 -20.1A2.0 2.0 0 0 1 9.9 -22.1L10.1 -22.1A2.0 2.0 0 0 1 12.1 -20.1A0.1 0.1 0 0 0 12.2 -20.0L19.2 -20.0A0.8 0.8 0 0 1 20.0 -19.2L20.0 -12.2A0.1 0.1 0 0 1 19.9 -12.1A2.0 2.0 0 0 0 17.9 -10.1L17.9 -9.9A2.0 2.0 0 0 0 19.9 -7.9A0.1 0.1 0 0 1 20.0 -7.8L20.0 7.8A0.1 0.1 0 0 0 20.1 7.9A2.0 2.0 0 0 1 22.1 9.9L22.1 10.1A2.0 2.0 0 0 1 20.1 12.1A0.1 0.1 0 0 0 20.0 12.2L20.0 19.2A0.8 0.8 0 0 1 19.2 20.0L12.2 20.0A0.1 0.1 0 0 1 12.1 19.9A2.0 2.0 0 0 0 10.1 17.9L9.9 17.9A2.0 2.0 0 0 0 7.9 19.9A0.1 0.1 0 0 1 7.8 20.0L-7.8 20.0A0.1 0.1 0 0 0 -7.9 20.1A2.0 2.0 0 0 1 -9.9 22.1L-10.1 22.1A2.0 2.0 0 0 1 -12.1 20.1A0.1 0.1 0 0 0 -12.2 20.0L-19.2 20.0A0.8 0.8 0 0 1 -20.0 19.2L-20.0 12.2A0.1 0.1 0 0 1 -19.9 12.1A2.0 2.0 0 0 0 -17.9 10.1L-17.9 9.9A2.0 2.0 0 0 0 -19.9 7.9A0.1 0.1 0 0 1 -20.0 7.8L-20.0 -7.8A0.1 0.1 0 0 0 -20.1 -7.9A2.0 2.0 0 0 1 -22.1 -9.9L-22.1 -10.1A2.0 2.0 0 0 1 -20.1 -12.1A0.1 0.1 0 0 0 -20.0 -12.2L-20.0 -19.2Z"
    },
    "contacts": assets["seeed-module-105020074"]["contacts"],
    "holes": [
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
    "artwork": assets["seeed-module-105020074"]["artwork"],
    "backArtwork": assets["seeed-module-105020074"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -22.1,
      -22.1,
      22.1,
      22.1
    ],
    "backArtworkBounds": [
      -22.1,
      -22.1,
      22.1,
      22.1
    ],
    "provenance": assets["seeed-module-105020074"]["provenance"],
    "internalConnections": [
      [
        "j7-2",
        "j8-4",
        "j8-ss1",
        "j8-ss2",
        "tp7-t"
      ]
    ]
  },
  {
    "id": "seeed-module-101020615",
    "sku": "101020615",
    "name": "Seeed Grove - ±5A DC/AC Current Sensor (ACS70331)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE 5A DCAC Current Sensor(ACS70331) v1.0.brd",
    "source": "https://wiki.seeedstudio.com/Grove-5A_DC_AC_Current_Sensor-ACS70331/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-5A_DC_AC_Current_Sensor-ACS70331/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html"
      }
    ],
    "description": "Seeed Studio 101020615. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html",
      "status": "In stock",
      "sku": "101020615"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020615"]["contacts"],
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
    "artwork": assets["seeed-module-101020615"]["artwork"],
    "backArtwork": assets["seeed-module-101020615"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-101020615"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t"
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
    "id": "seeed-module-110020248",
    "sku": "110020248",
    "name": "Seeed Grove - Integrated Pressure Sensor Kit",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Integrated Pressure Sensor Kit (MPX5700AP)_v1.0_190717.brd",
    "source": "https://wiki.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html"
      }
    ],
    "description": "Seeed Studio 110020248. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html",
      "status": "In stock",
      "sku": "110020248"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip"
    },
    "board": {
      "width": 43.359555,
      "height": 30.157635,
      "color": "#24617a",
      "outline": "M-12.192 -10.033A0.127 0.127 0 0 0 -12.065 -10.16A1.909229 1.909229 0 0 1 -8.255 -10.16A0.127 0.127 0 0 0 -8.128 -10.033L4.826 -10.033L6.604 -13.081A3.521818 3.521818 0 0 1 12.954 -13.081L14.732 -10.033L19.05 -10.033A0.827939 0.827939 0 0 1 19.812 -9.271L19.812 -2.286A0.323788 0.323788 0 0 0 20.066 -1.905A1.931277 1.931277 0 0 1 20.066 1.905A0.254 0.254 0 0 0 19.812 2.159L19.812 9.017A1.016 1.016 0 0 1 18.796 10.033L14.732 10.033L12.954 13.081A3.521818 3.521818 0 0 1 6.604 13.081L4.826 10.033L-8.128 10.033A0.127 0.127 0 0 0 -8.255 10.16A1.914501 1.914501 0 0 1 -12.065 10.16A0.127 0.127 0 0 0 -12.192 10.033L-19.304 10.033A0.70138 0.70138 0 0 1 -20.066 9.271L-20.066 2.667A0.200805 0.200805 0 0 1 -19.939 2.413A2.434613 2.434613 0 0 0 -19.812 -2.413A0.254 0.254 0 0 1 -20.066 -2.667L-20.066 -9.271A0.641308 0.641308 0 0 1 -19.431 -10.033L-12.192 -10.033Z"
    },
    "contacts": assets["seeed-module-110020248"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": 10.033,
        "drill": 2.170175
      },
      {
        "x": -10.16,
        "y": -10.033,
        "drill": 2.170175
      }
    ],
    "artwork": assets["seeed-module-110020248"]["artwork"],
    "backArtwork": assets["seeed-module-110020248"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.07746326529684,
      -15.078817663673265,
      21.679777628773852,
      15.078817663673265
    ],
    "provenance": assets["seeed-module-110020248"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t"
      ]
    ],
    "backArtworkBounds": [
      -20.07746326529684,
      -15.078817663673265,
      21.679777628773852,
      15.078817663673265
    ]
  },
  {
    "id": "seeed-module-110020291",
    "sku": "110020291",
    "name": "Seeed Grove - PH Sensor Kit (E-201C-Blue)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - PH Sensor_v1.0_190717.brd",
    "source": "https://wiki.seeedstudio.com/Grove-PH-Sensor-kit/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-PH-Sensor-kit/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html"
      }
    ],
    "description": "Seeed Studio 110020291. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html",
      "status": "In stock",
      "sku": "110020291"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-110020291"]["contacts"],
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
    "artwork": assets["seeed-module-110020291"]["artwork"],
    "backArtwork": assets["seeed-module-110020291"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      39.183,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-110020291"]["provenance"],
    "internalConnections": [
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
      ],
      [
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "tp4-t"
      ],
      [
        "j1-2",
        "j1-3",
        "j1-4",
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
    "id": "seeed-module-101020058",
    "sku": "101020058",
    "name": "Seeed Grove - EMG Detector",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove-EMG Sensor v1.1.brd",
    "source": "https://wiki.seeedstudio.com/Grove-EMG_Detector/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-EMG_Detector/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html"
      }
    ],
    "description": "Seeed Studio 101020058. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html",
      "status": "In stock",
      "sku": "101020058"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020058"]["contacts"],
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
        "x": -3.275,
        "y": -0.617,
        "drill": 1.27
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
    "artwork": assets["seeed-module-101020058"]["artwork"],
    "backArtwork": assets["seeed-module-101020058"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-101020058"]["provenance"],
    "internalConnections": [
      [
        "j1-ls",
        "j1-com2",
        "j1-rs",
        "j1-com1"
      ],
      [
        "j2-1",
        "tp3-t"
      ],
      [
        "j2-3",
        "tp2-t"
      ],
      [
        "j2-4",
        "tp1-t"
      ],
      [
        "j2-ss1",
        "j2-ss2",
        "tp4-t"
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
    "id": "seeed-module-101020753",
    "sku": "101020753",
    "name": "Seeed Grove - TDS Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - TDS Sensor_v1.0_190717.brd",
    "source": "https://wiki.seeedstudio.com/Grove-TDS-Sensor/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-TDS-Sensor/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html"
      }
    ],
    "description": "Seeed Studio 101020753. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html",
      "status": "In stock",
      "sku": "101020753"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M19.3 9.95A0.8 0.8 0 0 0 20.1 9.15L20.1 2.65A0.3 0.3 0 0 0 19.8 2.35A2.418677 2.418677 0 0 1 19.8 -2.45A0.3 0.3 0 0 0 20.1 -2.75L20.1 -9.25A0.8 0.8 0 0 0 19.3 -10.05L12.2 -10.05A0.2 0.2 0 0 1 12.0 -10.25A1.910497 1.910497 0 0 0 8.2 -10.25A0.2 0.2 0 0 1 8.0 -10.05L-7.2 -10.05A0.3 0.3 0 0 0 -7.5 -9.75A2.418677 2.418677 0 0 1 -12.3 -9.75A0.3 0.3 0 0 0 -12.6 -10.05L-19.1 -10.05A0.8 0.8 0 0 0 -19.9 -9.25L-19.9 -2.15A0.2 0.2 0 0 1 -20.1 -1.95A1.910497 1.910497 0 0 0 -20.1 1.85A0.2 0.2 0 0 1 -19.9 2.05L-19.9 9.15A0.8 0.8 0 0 0 -19.1 9.95L-12.6 9.95A0.3 0.3 0 0 0 -12.3 9.65A2.418677 2.418677 0 0 1 -7.5 9.65A0.3 0.3 0 0 0 -7.2 9.95L7.9 9.95A0.3 0.3 0 0 1 8.2 10.25A1.923538 1.923538 0 0 0 12.0 10.25A0.3 0.3 0 0 1 12.3 9.95L19.3 9.95Z"
    },
    "contacts": assets["seeed-module-101020753"]["contacts"],
    "holes": [
      {
        "x": 10.1,
        "y": -10.05,
        "drill": 2.2
      },
      {
        "x": 10.1,
        "y": 9.95,
        "drill": 2.2
      },
      {
        "x": -19.9,
        "y": -0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-module-101020753"]["artwork"],
    "backArtwork": assets["seeed-module-101020753"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -21.810500032500492,
      -11.960500032500494,
      20.100000000000005,
      11.873540604271307
    ],
    "provenance": assets["seeed-module-101020753"]["provenance"],
    "internalConnections": [
      [
        "gnd-t",
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "j2-3",
        "j2-4"
      ],
      [
        "j1-1",
        "sig-t"
      ],
      [
        "j1-2",
        "nc-t"
      ],
      [
        "j1-3",
        "vcc-t"
      ],
      [
        "tp4-t",
        "j2-2"
      ]
    ],
    "backArtworkBounds": [
      -21.810500032500492,
      -11.960500032500494,
      20.100000000000005,
      11.873540604271307
    ]
  },
  {
    "id": "seeed-module-110020370",
    "sku": "110020370",
    "name": "Seeed Grove - ORP Sensor Kit Pro",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - ORP Sensor Kit Pro_v1.0_221019.brd",
    "source": "https://wiki.seeedstudio.com/Grove-ORP-Sensor-Pro/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-ORP-Sensor-Pro/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html"
      }
    ],
    "description": "Seeed Studio 110020370. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html",
      "status": "In stock",
      "sku": "110020370"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-110020370"]["contacts"],
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
    "artwork": assets["seeed-module-110020370"]["artwork"],
    "backArtwork": assets["seeed-module-110020370"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      36.389,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-110020370"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t",
        "j2-2",
        "j2-3",
        "j2-4",
        "j2-5"
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
    "id": "seeed-module-103020024",
    "sku": "103020024",
    "name": "Seeed Grove - Finger-clip Heart Rate Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Finger-clip Heart Rate Sensor v1.0 .brd",
    "source": "https://wiki.seeedstudio.com/Grove-Finger-clip_Heart_Rate_Sensor/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Finger-clip_Heart_Rate_Sensor/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html"
      }
    ],
    "description": "Seeed Studio 103020024. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html",
      "status": "In stock",
      "sku": "103020024"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-103020024"]["contacts"],
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
    "artwork": assets["seeed-module-103020024"]["artwork"],
    "backArtwork": assets["seeed-module-103020024"]["backArtwork"],
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
    "provenance": assets["seeed-module-103020024"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "tp8-t"
      ],
      [
        "j2-2",
        "tp7-t"
      ],
      [
        "j2-3",
        "tp6-t"
      ],
      [
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "tp5-t",
        "j3-4"
      ],
      [
        "tp9-t",
        "j3-3"
      ]
    ]
  },
  {
    "id": "seeed-module-101020512",
    "sku": "101020512",
    "name": "Seeed Grove - VOC and eCO2 Gas Sensor(SGP30)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE VOC and eCO2 Gas Sensor (SGP30) v1.0.brd",
    "source": "https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html"
      }
    ],
    "description": "Seeed Studio 101020512. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html",
      "status": "In stock",
      "sku": "101020512"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020512"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
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
    "artwork": assets["seeed-module-101020512"]["artwork"],
    "backArtwork": assets["seeed-module-101020512"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-101020512"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "gnd-t",
        "tp1-t"
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
    "id": "seeed-module-101020635",
    "sku": "101020635",
    "name": "Seeed Grove - Water Level Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Water Level Sensor (10CM).brd / unmarked PCB revision",
    "source": "https://wiki.seeedstudio.com/Grove-Water-Level-Sensor/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Water-Level-Sensor/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html"
      }
    ],
    "description": "Seeed Studio 101020635. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html",
      "status": "In stock",
      "sku": "101020635"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip"
    },
    "board": {
      "width": 133,
      "height": 24,
      "color": "#24617a",
      "outline": "M-54.5 10.0A2.0 2.0 0 0 1 -58.5 10.0L-65.5 10.0A1.0 1.0 0 0 1 -66.5 9.0L-66.5 -9.0A1.0 1.0 0 0 1 -65.5 -10.0L-58.5 -10.0A2.0 2.0 0 0 1 -54.5 -10.0L65.5 -10.0A1.0 1.0 0 0 1 66.5 -9.0L66.5 9.0A1.0 1.0 0 0 1 65.5 10.0L-54.5 10.0Z"
    },
    "contacts": assets["seeed-module-101020635"]["contacts"],
    "holes": [
      {
        "x": -56.5315,
        "y": -9.9915,
        "drill": 0.2032
      }
    ],
    "artwork": assets["seeed-module-101020635"]["artwork"],
    "backArtwork": assets["seeed-module-101020635"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -66.5,
      -12,
      66.5,
      12
    ],
    "provenance": assets["seeed-module-101020635"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "tp21-t"
      ],
      [
        "j1-2",
        "tp22-t"
      ],
      [
        "j1-3",
        "j2-3",
        "tp23-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "j2-4",
        "tp24-t"
      ]
    ],
    "backArtworkBounds": [
      -66.5,
      -12,
      66.5,
      12
    ]
  },
  {
    "id": "seeed-module-101020592",
    "sku": "101020592",
    "name": "Seeed Grove - I2C High Accuracy Temp&Humi Sensor(SHT35)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - I2C High Accuracy Temp&Humi Sensor (SHT35).brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html"
      }
    ],
    "description": "Seeed Studio 101020592. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html",
      "status": "In stock",
      "sku": "101020592"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020592"]["contacts"],
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
    "artwork": assets["seeed-module-101020592"]["artwork"],
    "backArtwork": assets["seeed-module-101020592"]["backArtwork"],
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
    "provenance": assets["seeed-module-101020592"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "vcc-t",
        "jp1-11"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "gnd-t",
        "jp1-00"
      ]
    ]
  },
  {
    "id": "seeed-module-101020587",
    "sku": "101020587",
    "name": "Seeed Grove - Optical Rotary Encoder(TCUT1600X01)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Optical Rotary Encoder(TCUT1600X01).brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-Optical_Rotary_Encoder-TCUT1600X01/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Optical_Rotary_Encoder-TCUT1600X01/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X01.html"
      }
    ],
    "description": "Seeed Studio 101020587. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X01.html",
      "status": "In stock",
      "sku": "101020587"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020587"]["contacts"],
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
    "artwork": assets["seeed-module-101020587"]["artwork"],
    "backArtwork": assets["seeed-module-101020587"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "artworkBounds": [
      -20.100000000000005,
      -11.873540604271307,
      21.810500032500492,
      11.960500032500494
    ],
    "provenance": assets["seeed-module-101020587"]["provenance"],
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
        "j2-3"
      ],
      [
        "tp4-t",
        "j2-4",
        "j2-ss1",
        "j2-ss2"
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
    "id": "seeed-module-101020584",
    "sku": "101020584",
    "name": "Seeed Grove - 6-Axis Accelerometer&Gyroscope(BMI088)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - 6-Axis Accelerometer&Gyroscope(BMI088).brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-6-Axis_Accelerometer&Gyroscope_BMI088/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-6-Axis_Accelerometer&Gyroscope_BMI088/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope-BMI088.html"
      }
    ],
    "description": "Seeed Studio 101020584. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope-BMI088.html",
      "status": "In stock",
      "sku": "101020584"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020584"]["contacts"],
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
    "artwork": assets["seeed-module-101020584"]["artwork"],
    "backArtwork": assets["seeed-module-101020584"]["backArtwork"],
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
    "provenance": assets["seeed-module-101020584"]["provenance"],
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
        "j2-3"
      ],
      [
        "tp4-t",
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "jp1-00",
        "jp2-00"
      ]
    ]
  },
  {
    "id": "seeed-module-101020583",
    "sku": "101020583",
    "name": "Seeed Grove - Step Counter(BMA456)",
    "manufacturer": "Seeed Studio",
    "category": "Sensors",
    "revision": "EAGLE Grove - Step Counter(BMA456).brd / v1.0",
    "source": "https://wiki.seeedstudio.com/Grove-Step_Counter-BMA456/",
    "references": [
      {
        "label": "Manufacturer module guide",
        "url": "https://wiki.seeedstudio.com/Grove-Step_Counter-BMA456/"
      },
      {
        "label": "Manufacturer CAD archive",
        "url": "https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip"
      },
      {
        "label": "Exact SKU product offer",
        "url": "https://www.seeedstudio.com/Grove-Step-Counter-BMA456.html"
      }
    ],
    "description": "Seeed Studio 101020583. Exact manufacturer-source board revision; board color and small finishes are representative. All external connector solder contacts and named service pads are at their source physical positions. Hover for terminal functions. Bonded display/sensor component lands and mounting fiducials are not wiring ports.",
    "tags": [
      "seeed",
      "grove",
      "module",
      "arduino",
      "diy"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Step-Counter-BMA456.html",
      "status": "In stock",
      "sku": "101020583"
    },
    "footprintMode": "reference",
    "footprintNote": "Reference module carrier with source CAD contact centers and source-sized selected lands. Connector solder-side lands represent board contacts, not a complete mating plug footprint. Opposite-side contacts are projected onto F.Cu in the reference carrier; verify the actual mating board and connector. Generated 3D geometry is approximate.",
    "cad": {
      "label": "Manufacturer EAGLE board and schematic archive",
      "url": "https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip"
    },
    "board": {
      "width": 43.621,
      "height": 23.921,
      "color": "#24617a",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-module-101020583"]["contacts"],
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
    "artwork": assets["seeed-module-101020583"]["artwork"],
    "backArtwork": assets["seeed-module-101020583"]["backArtwork"],
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
    "provenance": assets["seeed-module-101020583"]["provenance"],
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
        "j2-3"
      ],
      [
        "tp4-t",
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "jp1-00",
        "tp8-t"
      ]
    ]
  },
];
