import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen19036",
    "mountingReview": {
      "contactIds": ["j6-1", "j6-2", "j6-3", "j6-4", "j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun SEN-19036: EAGLE SparkFun_dToF-TMF8820.brd; commit 740270a20d78 header geometry", "url": "https://github.com/sparkfun/SparkFun_Qwiic_dTof-TMF882X/blob/740270a20d78007335bffadc37cc784e1ea64e54/Hardware/TMF8820/SparkFun_dToF-TMF8820.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J6", "count": 4, "package": "1X04_NO_SILK"}, {"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "ce2672ea688fb0b3d9e82a1a6c4b8df23682f7ad103a7024476274df5f09323b"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-19036",
    "name": "SparkFun Qwiic dToF Imager - TMF8820",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-dtof-imager-tmf8820.html",
    "revision": "EAGLE SparkFun_dToF-TMF8820.brd; commit 740270a20d78",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -12.26,
      -7.533,
      12.26,
      5.476
    ],
    "backArtworkBounds": [
      -11.4192,
      -4.866,
      1.7672,
      6.136
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen19036"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-sen19036"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen19036"]["backArtwork"],
    "provenance": assets["sparkfun-module-sen19036"]["provenance"],
    "internalConnections": [
      [
        "j4-1",
        "j5-1",
        "j6-1"
      ],
      [
        "j4-2",
        "j5-2",
        "j6-2"
      ],
      [
        "j4-3",
        "j5-3",
        "j6-3"
      ],
      [
        "j4-4",
        "j5-4",
        "j6-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-dtof-imager-tmf8820.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_dTof-TMF882X/blob/740270a20d78007335bffadc37cc784e1ea64e54/Hardware/TMF8820/SparkFun_dToF-TMF8820.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_dTof-TMF882X/blob/740270a20d78007335bffadc37cc784e1ea64e54/Hardware/TMF8820/SparkFun_dToF-TMF8820.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_dTof-TMF882X/blob/740270a20d78007335bffadc37cc784e1ea64e54/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-dtof-imager-tmf8820.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-19036",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-19036. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-prt00449",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp2-3", "jp2-4"],
      "source": {"label": "SparkFun PRT-00449: EAGLE Sparkfun_RS232.brd; commit 1ffd9ab09586 header geometry", "url": "https://github.com/sparkfun/RS232_Shifter_SMD/blob/1ffd9ab0958647a191cd9c134b5008753b02ec4c/Hardware/Sparkfun_RS232.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 4, "package": "1X04"}],
        "boardSha256": "72176fe86fd148bd84c9893b59ab478c8a89ebd3ecfc4716d72822c696e3154b"
      },
      "bodyRegions": [
        {"x": -11.43, "y": -15.24, "width": 22.86, "height": 30.48}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-00449",
    "name": "SparkFun RS232 Shifter - SMD",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-rs232-shifter-smd.html",
    "revision": "EAGLE Sparkfun_RS232.brd; commit 1ffd9ab09586",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 22.86,
      "height": 30.48,
      "color": "#9b242d",
      "outline": "M-11.43 15.24L11.43 15.24L11.43 -15.24L-11.43 -15.24L-11.43 15.24Z"
    },
    "contacts": assets["sparkfun-module-prt00449"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-prt00449"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt00449"]["backArtwork"],
    "artworkBounds": [
      2.068,
      -14.375,
      9.946,
      15.28
    ],
    "provenance": assets["sparkfun-module-prt00449"]["provenance"],
    "internalConnections": [
      [
        "jp1-5",
        "jp2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-rs232-shifter-smd.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RS232_Shifter_SMD/blob/1ffd9ab0958647a191cd9c134b5008753b02ec4c/Hardware/Sparkfun_RS232.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RS232_Shifter_SMD/blob/1ffd9ab0958647a191cd9c134b5008753b02ec4c/Hardware/Sparkfun_RS232.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RS232_Shifter_SMD/blob/1ffd9ab0958647a191cd9c134b5008753b02ec4c/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-rs232-shifter-smd.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-00449",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-00449. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev12924",
    "sku": "DEV-12924",
    "name": "SparkFun MicroView - USB Programmer",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-microview-usb-programmer.html",
    "revision": "EAGLE SparkFun_MicroViewUSB.brd; commit 7057bea2c0b5",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 27.94,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-13.97 10.16L13.97 10.16L13.97 -10.16L-13.97 -10.16L-13.97 10.16Z"
    },
    "contacts": assets["sparkfun-module-dev12924"]["contacts"],
    "holes": [
      {
        "x": -10.85,
        "y": -2.25,
        "drill": 1.1
      },
      {
        "x": -10.85,
        "y": 2.25,
        "drill": 1.1
      },
      {
        "x": -10.52,
        "y": 5.85,
        "drill": 0.8
      },
      {
        "x": -10.12,
        "y": 5.85,
        "drill": 0.8
      },
      {
        "x": -11.32,
        "y": 5.85,
        "drill": 0.8
      },
      {
        "x": -11.72,
        "y": 5.85,
        "drill": 0.8
      },
      {
        "x": -10.52,
        "y": -5.85,
        "drill": 0.8
      },
      {
        "x": -10.12,
        "y": -5.85,
        "drill": 0.8
      },
      {
        "x": -11.32,
        "y": -5.85,
        "drill": 0.8
      },
      {
        "x": -11.72,
        "y": -5.85,
        "drill": 0.8
      }
    ],
    "artwork": assets["sparkfun-module-dev12924"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev12924"]["backArtwork"],
    "artworkBounds": [
      -28.59,
      -7.5200000000000005,
      13.74,
      8.016
    ],
    "provenance": assets["sparkfun-module-dev12924"]["provenance"],
    "internalConnections": [
      [
        "jp1-gnd1",
        "j1-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-microview-usb-programmer.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroView_USB_Programmer/blob/7057bea2c0b54db610f1ea53f22856b7026088ea/Hardware/SparkFun_MicroViewUSB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroView_USB_Programmer/blob/7057bea2c0b54db610f1ea53f22856b7026088ea/Hardware/SparkFun_MicroViewUSB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroView_USB_Programmer/blob/7057bea2c0b54db610f1ea53f22856b7026088ea/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-microview-usb-programmer.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-12924",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-12924. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-bob13263",
    "sku": "BOB-13263",
    "name": "SparkFun FT231X Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-ft231x-breakout.html",
    "revision": "EAGLE ft231x-breakout.brd; commit d2e1c4d47918",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 24.13,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M-12.065 7.62L-12.065 -7.62L12.065 -7.62L12.065 7.62L-12.065 7.62Z"
    },
    "contacts": assets["sparkfun-module-bob13263"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob13263"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob13263"]["backArtwork"],
    "artworkBounds": [
      -13.635,
      -4.9724,
      9.495,
      6.35
    ],
    "backArtworkBounds": [
      -6.8345,
      -3.596,
      2.834,
      3.596
    ],
    "provenance": assets["sparkfun-module-bob13263"]["provenance"],
    "internalConnections": [
      [
        "x1-vbus",
        "jp10-6"
      ],
      [
        "x1-gnd",
        "x1-mt1",
        "x1-mt2",
        "jp1-1",
        "jp10-7"
      ],
      [
        "jp1-2",
        "jp11-1"
      ],
      [
        "jp1-4",
        "jp10-5"
      ],
      [
        "jp1-5",
        "jp11-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-ft231x-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/FT231X_Breakout/blob/d2e1c4d47918c22910eefd6794f0705f62567c08/hardware/ft231x-breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/FT231X_Breakout/blob/d2e1c4d47918c22910eefd6794f0705f62567c08/hardware/ft231x-breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/FT231X_Breakout/blob/d2e1c4d47918c22910eefd6794f0705f62567c08/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-ft231x-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-13263",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-13263. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl13287",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11"],
      "source": {"label": "SparkFun WRL-13287: EAGLE SparkFun-ESP8266-WiFi-Shield.brd; commit 749e0c4b562e physical insertion headers", "url": "https://github.com/sparkfun/ESP8266_WiFi_Shield/blob/749e0c4b562e96147a4b3361443263421a739eb5/Hardware/SparkFun-ESP8266-WiFi-Shield.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 11, "package": "1X11"}],
        "boardSha256": "2947f4120a5f7d472827a2bd171b2e6c57f6d82f7278490ba925b697ce8d2fbc"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -29.845, "y": -26.67, "width": 59.69, "height": 53.34}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "WRL-13287",
    "name": "SparkFun WiFi Shield - ESP8266",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-wifi-shield-esp8266.html",
    "revision": "EAGLE SparkFun-ESP8266-WiFi-Shield.brd; commit 749e0c4b562e",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 59.69,
      "height": 53.34,
      "color": "#9b242d",
      "outline": "M-29.845 -24.13L-27.305 -26.67L26.035 -26.67L27.305 -25.4L27.305 -13.97L29.845 -11.43L29.845 21.59L27.305 24.13L27.305 26.67L-29.845 26.67L-29.845 -24.13Z"
    },
    "contacts": assets["sparkfun-module-wrl13287"]["contacts"],
    "holes": [
      {
        "x": 27.305,
        "y": 19.05,
        "drill": 3.302
      },
      {
        "x": -23.241,
        "y": -24.13,
        "drill": 3.302
      },
      {
        "x": -24.511,
        "y": 24.13,
        "drill": 3.302
      },
      {
        "x": 23.495,
        "y": -13.97,
        "drill": 3.302
      },
      {
        "x": 6.755,
        "y": -16.51,
        "drill": 0.85
      },
      {
        "x": 9.755,
        "y": -16.51,
        "drill": 0.85
      }
    ],
    "artwork": assets["sparkfun-module-wrl13287"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl13287"]["backArtwork"],
    "artworkBounds": [
      -29.884999999999998,
      -22.9,
      29.277,
      25.44
    ],
    "backArtworkBounds": [
      -20.8045,
      -15.026,
      -16.105,
      17.55
    ],
    "provenance": assets["sparkfun-module-wrl13287"]["provenance"],
    "internalConnections": [
      [
        "tp7-p-1",
        "jp1-2"
      ],
      [
        "jp3-gnd-0",
        "jp3-gnd-1",
        "jp3-gnd-2",
        "jp2-gnd",
        "jp4-p-1",
        "jp4-p-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-wifi-shield-esp8266.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP8266_WiFi_Shield/blob/749e0c4b562e96147a4b3361443263421a739eb5/Hardware/SparkFun-ESP8266-WiFi-Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP8266_WiFi_Shield/blob/749e0c4b562e96147a4b3361443263421a739eb5/Hardware/SparkFun-ESP8266-WiFi-Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP8266_WiFi_Shield/blob/749e0c4b562e96147a4b3361443263421a739eb5/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-wifi-shield-esp8266.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-13287",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-13287. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev15837",
    "mountingReview": {
      "contactIds": ["j6-1", "j6-2", "j6-3", "j7-1", "j7-2", "j7-3"],
      "source": {"label": "SparkFun DEV-15837: EAGLE weather-bit.brd; commit 7c11fc6f1685 physical insertion headers", "url": "https://github.com/sparkfun/Micro_Bit_Weather_Bit/blob/7c11fc6f1685c92a7b45d4cf2ae8ae3dfafb80d1/Hardware/weather-bit.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J6", "count": 3, "package": "1X03"}, {"id": "J7", "count": 3, "package": "1X03"}],
        "boardSha256": "ee107c0c6eb238f61cc2f41c7414e70753be69db6ee62c08610791fe1763dd1c"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -34.29, "y": -29.21, "width": 68.58, "height": 58.42},
        {"x": -28.4, "y": -64.46, "width": 56.8, "height": 47.2},
        {"x": -28.448, "y": 11.176, "width": 13.716, "height": 18.542},
        {"x": 14.732, "y": 11.176, "width": 13.716, "height": 18.542}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "DEV-15837",
    "name": "SparkFun weather:bit - micro:bit Carrier Board (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-weather-bit-micro-bit-carrier-board-qwiic.html",
    "revision": "EAGLE weather-bit.brd; commit 7c11fc6f1685",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 68.58,
      "height": 58.42,
      "color": "#9b242d",
      "outline": "M31.75 -29.21A2.54 2.54 0 0 1 34.29 -26.67L34.29 26.67A2.54 2.54 0 0 1 31.75 29.21L-31.75 29.21A2.54 2.54 0 0 1 -34.29 26.67L-34.29 -26.67A2.54 2.54 0 0 1 -31.75 -29.21L31.75 -29.21Z"
    },
    "contacts": assets["sparkfun-module-dev15837"]["contacts"],
    "holes": [
      {
        "x": -31.75,
        "y": -26.67,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": -26.67,
        "drill": 3.302
      },
      {
        "x": 16.51,
        "y": 21.59,
        "drill": 3.2512
      },
      {
        "x": 26.67,
        "y": 21.59,
        "drill": 3.2512
      },
      {
        "x": -26.67,
        "y": 21.59,
        "drill": 3.2512
      },
      {
        "x": -16.51,
        "y": 21.59,
        "drill": 3.2512
      },
      {
        "x": -31.75,
        "y": 26.67,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": 26.67,
        "drill": 3.302
      },
      {
        "x": 13,
        "y": -23.56,
        "drill": 1.6
      },
      {
        "x": -13,
        "y": -23.56,
        "drill": 1.6
      }
    ],
    "artwork": assets["sparkfun-module-dev15837"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15837"]["backArtwork"],
    "artworkBounds": [
      -32.5466,
      -64.5,
      32.5212,
      29.758
    ],
    "provenance": assets["sparkfun-module-dev15837"]["provenance"],
    "internalConnections": [
      [
        "j2-3",
        "tp6-p-1"
      ],
      [
        "j2-4",
        "tp7-p-1"
      ],
      [
        "j3-2",
        "tp10-p-1"
      ],
      [
        "j3-3",
        "tp11-p-1"
      ],
      [
        "j3-4",
        "tp12-p-1"
      ],
      [
        "j3-5",
        "tp15-p-1"
      ],
      [
        "j4-1",
        "j6-1",
        "j9-3",
        "j9-3-2",
        "j8-2",
        "j10-4",
        "j10-4-2",
        "tp1-p-1"
      ],
      [
        "j4-2",
        "j6-2",
        "tp9-p-1"
      ],
      [
        "j4-3",
        "j5-2",
        "j6-3",
        "j7-2",
        "j9-4",
        "j9-4-2",
        "j8-1",
        "j10-5",
        "j10-6",
        "j10-5-2",
        "j10-6-2",
        "tp2-p-1",
        "tp16-p-1",
        "tp17-p-1"
      ],
      [
        "j5-1",
        "j7-1",
        "tp5-p-1"
      ],
      [
        "j5-3",
        "j7-3",
        "tp19-p-1"
      ],
      [
        "j9-1",
        "j9-1-2",
        "j8-4",
        "tp4-p-1"
      ],
      [
        "j9-2",
        "j9-2-2",
        "j8-3",
        "tp3-p-1"
      ],
      [
        "j10-3",
        "j10-3-2"
      ],
      [
        "j10-2",
        "j10-2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-weather-bit-micro-bit-carrier-board-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Micro_Bit_Weather_Bit/blob/7c11fc6f1685c92a7b45d4cf2ae8ae3dfafb80d1/Hardware/weather-bit.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Micro_Bit_Weather_Bit/blob/7c11fc6f1685c92a7b45d4cf2ae8ae3dfafb80d1/Hardware/weather-bit.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Micro_Bit_Weather_Bit/blob/7c11fc6f1685c92a7b45d4cf2ae8ae3dfafb80d1/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-weather-bit-micro-bit-carrier-board-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15837",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15837. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev17725",
    "sku": "DEV-17725",
    "name": "SparkFun MicroMod Update Tool",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micromod-update-tool.html",
    "revision": "EAGLE MicroMod_Asset_Tracker_Firmware_Update_Tool.brd; commit 1da02c805c6c",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 22,
      "height": 22,
      "color": "#9b242d",
      "outline": "M10.0 -11.0A1.025305 1.025305 0 0 1 11.0 -10.0L11.0 6.4A0.617568 0.617568 0 0 1 10.4 7.0A0.510657 0.510657 0 0 0 9.925 7.5L9.925 11.0L3.225 11.0L3.225 8.1A0.6 0.6 0 0 0 2.025 8.1L2.025 11.0L-9.925 11.0L-9.925 7.5A0.516237 0.516237 0 0 0 -10.4 7.0A0.617568 0.617568 0 0 1 -11.0 6.4L-11.0 -10.0A1.025305 1.025305 0 0 1 -10.0 -11.0L2.25 -11.0A1.75 1.75 0 0 0 5.75 -11.0L10.0 -11.0Z"
    },
    "contacts": assets["sparkfun-module-dev17725"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev17725"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev17725"]["backArtwork"],
    "artworkBounds": [
      -5.2996,
      -9.776499999999999,
      10.01625,
      -2.0137
    ],
    "backArtworkBounds": [
      -9.706499999999998,
      2.2545,
      9.9315,
      3.3505
    ],
    "provenance": assets["sparkfun-module-dev17725"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j5-2",
        "j5-74"
      ],
      [
        "j1-1",
        "j5-gnd1",
        "j5-gnd3",
        "j5-gnd2",
        "j5-1",
        "j5-7",
        "j5-33",
        "j5-36",
        "j5-39",
        "j5-45",
        "j5-75"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micromod-update-tool.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroMod_Asset_Tracker_Update_Tool/blob/1da02c805c6ca93b8c6c91f639babe04baff3c45/Hardware/MicroMod_Asset_Tracker_Firmware_Update_Tool.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroMod_Asset_Tracker_Update_Tool/blob/1da02c805c6ca93b8c6c91f639babe04baff3c45/Hardware/MicroMod_Asset_Tracker_Firmware_Update_Tool.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroMod_Asset_Tracker_Update_Tool/blob/1da02c805c6ca93b8c6c91f639babe04baff3c45/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micromod-update-tool.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-17725",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-17725. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-bob16445",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8", "j2-9", "j2-10", "j2-11", "j2-12", "j2-13", "j2-14", "j2-15", "j2-16", "j2-17", "j2-18", "j2-19", "j2-20", "j2-21", "j2-22"],
      "source": {"label": "SparkFun BOB-16445: EAGLE Micro_Bit_Breakout.brd; commit 1e9cd8063e3a header geometry", "url": "https://github.com/sparkfun/Micro_Bit_Breakout/blob/1e9cd8063e3ae1b69dbc29cd949a2d8854e48135/Hardware/Micro_Bit_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 22, "package": "1X22"}],
        "boardSha256": "6a1da4c524601a02d45809646f337387dee1378127ec571eb224a47845b3ae8a"
      },
      "bodyRegions": [
        {"x": -34.29, "y": -11.43, "width": 68.58, "height": 22.86},
        {"x": -28.45, "y": -16.49, "width": 56.9, "height": 21.37}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-16445",
    "name": "SparkFun Qwiic micro:bit Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-micro-bit-breakout.html",
    "revision": "EAGLE Micro_Bit_Breakout.brd; commit 1e9cd8063e3a",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 68.58,
      "height": 22.86,
      "color": "#9b242d",
      "outline": "M-33.02 -11.43L-34.29 -10.16L-34.29 -5.08L-33.02 -3.81L-30.48 -3.81L-29.21 -2.54L-29.21 5.08L-27.94 6.35L-27.94 11.43L27.94 11.43L27.94 6.35L29.21 5.08L29.21 -2.54L30.48 -3.81L33.02 -3.81L34.29 -5.08L34.29 -10.16L33.02 -11.43L-33.02 -11.43Z"
    },
    "contacts": assets["sparkfun-module-bob16445"]["contacts"],
    "holes": [
      {
        "x": -31.75,
        "y": -7.62,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": -7.62,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob16445"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob16445"]["backArtwork"],
    "artworkBounds": [
      -28.49,
      -16.529999999999998,
      28.49,
      11.47
    ],
    "provenance": assets["sparkfun-module-bob16445"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j2-2",
        "j1-a1",
        "j1-a2",
        "j1-a3",
        "j1-a4",
        "j1-a5",
        "j1-a6"
      ],
      [
        "j2-3",
        "j1-a9",
        "j1-a10",
        "j1-a11",
        "j1-a12",
        "j1-a13",
        "j1-a14"
      ],
      [
        "j2-4",
        "j1-a36",
        "j1-a37",
        "j1-a38",
        "j1-a39"
      ],
      [
        "j2-5",
        "j1-a28",
        "j1-a29",
        "j1-a30",
        "j1-a31"
      ],
      [
        "j2-6",
        "j1-a19",
        "j1-a20",
        "j1-a21",
        "j1-a22"
      ],
      [
        "j2-7",
        "j1-a40"
      ],
      [
        "j2-8",
        "j1-a35"
      ],
      [
        "j2-9",
        "j1-a34"
      ],
      [
        "j2-10",
        "j1-a33"
      ],
      [
        "j2-11",
        "j1-a32"
      ],
      [
        "j2-12",
        "j1-a27"
      ],
      [
        "j2-13",
        "j1-a26"
      ],
      [
        "j2-14",
        "j1-a25"
      ],
      [
        "j2-15",
        "j1-a24"
      ],
      [
        "j2-16",
        "j1-a23"
      ],
      [
        "j2-17",
        "j1-a18"
      ],
      [
        "j2-18",
        "j1-a17"
      ],
      [
        "j2-19",
        "j1-a16"
      ],
      [
        "j2-20",
        "j1-a15"
      ],
      [
        "j2-21",
        "j1-a8"
      ],
      [
        "j2-22",
        "j1-a7"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-micro-bit-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Micro_Bit_Breakout/blob/1e9cd8063e3ae1b69dbc29cd949a2d8854e48135/Hardware/Micro_Bit_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Micro_Bit_Breakout/blob/1e9cd8063e3ae1b69dbc29cd949a2d8854e48135/Hardware/Micro_Bit_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Micro_Bit_Breakout/blob/1e9cd8063e3ae1b69dbc29cd949a2d8854e48135/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-micro-bit-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-16445",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-16445. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev15794",
    "sku": "DEV-15794",
    "name": "SparkFun Qwiic SHIM for Raspberry Pi & NVIDIA Jetson Orin Nano",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-shim-for-raspberry-pi.html",
    "revision": "EAGLE Qwiic Pi SHIM.brd; commit b1803830bd5c",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 10.16,
      "height": 13.97,
      "color": "#9b242d",
      "outline": "M-3.81 6.985A1.27 1.27 0 0 1 -5.08 5.715L-5.08 -5.715A1.302137 1.302137 0 0 1 -3.81 -6.985L1.27 -6.985A1.27 1.27 0 0 1 2.54 -5.715L2.54 -2.2098L4.445 -2.2098A0.62243 0.62243 0 0 1 5.08 -1.6002L5.08 5.715A1.302137 1.302137 0 0 1 3.81 6.985L-3.81 6.985Z"
    },
    "contacts": assets["sparkfun-module-dev15794"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev15794"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15794"]["backArtwork"],
    "artworkBounds": [
      -4.7416,
      -1.643,
      4.3356,
      5.1326
    ],
    "provenance": assets["sparkfun-module-dev15794"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j9-6"
      ],
      [
        "j1-3",
        "j9-3"
      ],
      [
        "j1-4",
        "j9-5"
      ],
      [
        "j9-2",
        "j9-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-shim-for-raspberry-pi.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Pi_SHIM/blob/b1803830bd5c8b9f264a86ea724303ac92b6563b/Hardware/Qwiic%20Pi%20SHIM.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Pi_SHIM/blob/b1803830bd5c8b9f264a86ea724303ac92b6563b/Hardware/Qwiic%20Pi%20SHIM.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Pi_SHIM/blob/b1803830bd5c8b9f264a86ea724303ac92b6563b/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-shim-for-raspberry-pi.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15794",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15794. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl11373",
    "sku": "WRL-11373",
    "name": "SparkFun XBee Explorer Regulated",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-xbee-explorer-regulated.html",
    "revision": "EAGLE XBee-Regulated.brd; commit eac83216d9f6",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 34.29,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M17.145 13.97L17.145 -13.97L-17.145 -13.97L-17.145 13.97L17.145 13.97Z"
    },
    "contacts": assets["sparkfun-module-wrl11373"]["contacts"],
    "holes": [
      {
        "x": -14.605,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -14.605,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 13.335,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 13.335,
        "y": 11.43,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wrl11373"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl11373"]["backArtwork"],
    "artworkBounds": [
      -18.355,
      -12.29,
      15.575,
      12.29
    ],
    "provenance": assets["sparkfun-module-wrl11373"]["provenance"],
    "internalConnections": [
      [
        "u2-10",
        "jp2-1",
        "jp2-11",
        "jp4-5",
        "jp4-6"
      ],
      [
        "u2-9",
        "jp2-2"
      ],
      [
        "u2-8",
        "jp2-3"
      ],
      [
        "u2-7",
        "jp2-4"
      ],
      [
        "u2-6",
        "jp2-5"
      ],
      [
        "u2-5",
        "jp2-6"
      ],
      [
        "u2-4",
        "jp2-7"
      ],
      [
        "u2-3",
        "jp2-8"
      ],
      [
        "u2-2",
        "jp2-9"
      ],
      [
        "u2-1",
        "jp2-10"
      ],
      [
        "u2-11",
        "jp3-10"
      ],
      [
        "u2-12",
        "jp3-9"
      ],
      [
        "u2-13",
        "jp3-8"
      ],
      [
        "u2-14",
        "jp3-7"
      ],
      [
        "u2-15",
        "jp3-6"
      ],
      [
        "u2-16",
        "jp3-5"
      ],
      [
        "u2-17",
        "jp3-4",
        "jp4-1"
      ],
      [
        "u2-18",
        "jp3-3"
      ],
      [
        "u2-19",
        "jp3-2"
      ],
      [
        "u2-20",
        "jp3-1"
      ],
      [
        "jp3-11",
        "jp4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-regulated.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/XBee_Explorer_Regulated/blob/eac83216d9f6b8921fe2813fc3e6d34e357090aa/Hardware/XBee-Regulated.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/XBee_Explorer_Regulated/blob/eac83216d9f6b8921fe2813fc3e6d34e357090aa/Hardware/XBee-Regulated.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/XBee_Explorer_Regulated/blob/eac83216d9f6b8921fe2813fc3e6d34e357090aa/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-regulated.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-11373",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-11373. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl11697",
    "sku": "WRL-11697",
    "name": "SparkFun XBee Explorer Dongle",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-xbee-explorer-dongle.html",
    "revision": "EAGLE XBee-Explorer-Dongle.brd; commit 4cb68052dfc5",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 40.64,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M20.32 13.97L20.32 -13.97L-20.32 -13.97L-20.32 13.97L20.32 13.97Z"
    },
    "contacts": assets["sparkfun-module-wrl11697"]["contacts"],
    "holes": [
      {
        "x": -17.78,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -17.78,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 17.78,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 17.78,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -17.4609,
        "y": -2.1357,
        "drill": 1.1
      },
      {
        "x": -17.4609,
        "y": 2.3643,
        "drill": 1.1
      }
    ],
    "artwork": assets["sparkfun-module-wrl11697"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl11697"]["backArtwork"],
    "artworkBounds": [
      -35.2009,
      -12.29,
      20.233,
      12.29
    ],
    "backArtworkBounds": [
      -7.4695,
      -11.216,
      4.9295,
      11.216
    ],
    "provenance": assets["sparkfun-module-wrl11697"]["provenance"],
    "internalConnections": [
      [
        "jp3-1",
        "u2-20"
      ],
      [
        "jp3-2",
        "u2-19"
      ],
      [
        "jp3-3",
        "u2-18"
      ],
      [
        "jp3-4",
        "u2-17"
      ],
      [
        "jp3-5",
        "u2-16"
      ],
      [
        "jp3-6",
        "u2-15"
      ],
      [
        "jp3-7",
        "u2-14"
      ],
      [
        "jp3-8",
        "u2-13"
      ],
      [
        "jp3-9",
        "u2-12"
      ],
      [
        "jp3-10",
        "u2-11"
      ],
      [
        "jp3-11",
        "jp4-vbus"
      ],
      [
        "jp2-1",
        "jp2-11",
        "u2-10",
        "jp4-gnd"
      ],
      [
        "jp2-2",
        "u2-9"
      ],
      [
        "jp2-3",
        "u2-8"
      ],
      [
        "jp2-4",
        "u2-7"
      ],
      [
        "jp2-5",
        "u2-6"
      ],
      [
        "jp2-6",
        "u2-5"
      ],
      [
        "jp2-7",
        "u2-4"
      ],
      [
        "jp2-8",
        "u2-3"
      ],
      [
        "jp2-9",
        "u2-2"
      ],
      [
        "jp2-10",
        "u2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-dongle.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/XBee_Explorer_Dongle/blob/4cb68052dfc5e8f37b921ec27df40bbae25c4817/Hardware/XBee-Explorer-Dongle.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/XBee_Explorer_Dongle/blob/4cb68052dfc5e8f37b921ec27df40bbae25c4817/Hardware/XBee-Explorer-Dongle.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/XBee_Explorer_Dongle/blob/4cb68052dfc5e8f37b921ec27df40bbae25c4817/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-dongle.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-11697",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-11697. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl11812",
    "sku": "WRL-11812",
    "name": "SparkFun XBee Explorer USB",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-xbee-explorer-usb.html",
    "revision": "EAGLE XBee-Explorer.brd; commit 1c268163f47b",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 35.56,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M17.78 13.97L17.78 -13.97L-17.78 -13.97L-17.78 13.97L17.78 13.97Z"
    },
    "contacts": assets["sparkfun-module-wrl11812"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -2.2,
        "drill": 0.9
      },
      {
        "x": -12.7,
        "y": 2.2,
        "drill": 0.9
      },
      {
        "x": -15.24,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -15.24,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 15.24,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 15.24,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wrl11812"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl11812"]["backArtwork"],
    "artworkBounds": [
      -18.64,
      -12.29,
      17.693,
      12.29
    ],
    "backArtworkBounds": [
      -10.0095,
      -11.216,
      2.3895,
      11.216
    ],
    "provenance": assets["sparkfun-module-wrl11812"]["provenance"],
    "internalConnections": [
      [
        "u2-10",
        "x1-gnd",
        "jp5-1",
        "jp5-11"
      ],
      [
        "u2-9",
        "jp5-2"
      ],
      [
        "u2-8",
        "jp5-3"
      ],
      [
        "u2-7",
        "jp5-4"
      ],
      [
        "u2-6",
        "jp5-5"
      ],
      [
        "u2-5",
        "jp5-6"
      ],
      [
        "u2-4",
        "jp5-7"
      ],
      [
        "u2-3",
        "jp5-8"
      ],
      [
        "u2-2",
        "jp5-9"
      ],
      [
        "u2-1",
        "jp5-10"
      ],
      [
        "u2-11",
        "jp6-10"
      ],
      [
        "u2-12",
        "jp6-9"
      ],
      [
        "u2-13",
        "jp6-8"
      ],
      [
        "u2-14",
        "jp6-7"
      ],
      [
        "u2-15",
        "jp6-6"
      ],
      [
        "u2-16",
        "jp6-5"
      ],
      [
        "u2-17",
        "jp6-4"
      ],
      [
        "u2-18",
        "jp6-3"
      ],
      [
        "u2-19",
        "jp6-2"
      ],
      [
        "u2-20",
        "jp6-1"
      ],
      [
        "x1-vbus",
        "jp6-11"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-usb.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/XBee_Explorer_USB/blob/1c268163f47bea2f6d020cf3382618237049e284/Hardware/XBee-Explorer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/XBee_Explorer_USB/blob/1c268163f47bea2f6d020cf3382618237049e284/Hardware/XBee-Explorer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/XBee_Explorer_USB/blob/1c268163f47bea2f6d020cf3382618237049e284/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-xbee-explorer-usb.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-11812",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-11812. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-bob13717",
    "mountingReview": {
      "contactIds": ["jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12", "jp3-13", "jp3-14", "jp3-15", "jp3-16", "jp3-17", "jp4-1", "jp4-2", "jp4-3", "jp4-4", "jp4-5", "jp4-6", "jp4-7", "jp4-8", "jp4-9", "jp4-10", "jp4-11", "jp4-12", "jp4-13", "jp4-14", "jp4-15", "jp4-16", "jp4-17"],
      "source": {"label": "SparkFun BOB-13717: EAGLE SparkFun_Pi_Wedge_40-Pin_PreAssembled.brd; commit 6d93ad550771 header geometry", "url": "https://github.com/sparkfun/Pi_Wedge_40-Pin_PreAssembled/blob/6d93ad550771dc4c304dc220aea1f0c69fdad907/hardware/SparkFun_Pi_Wedge_40-Pin_PreAssembled.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP3", "count": 17, "package": "1X17_NO_SILK_KIT"}, {"id": "JP4", "count": 17, "package": "1X17_NO_SILK_KIT"}],
        "boardSha256": "e45d47beff65d5605eea55c9646449787afbdc47cbc2582118fceda4cb18c848"
      },
      "bodyRegions": [
        {"x": -41.275, "y": -32.766, "width": 82.55, "height": 65.532},
        {"x": 37.993, "y": -30.194, "width": 8.5, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-13717",
    "name": "SparkFun Pi Wedge",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-pi-wedge.html",
    "revision": "EAGLE SparkFun_Pi_Wedge_40-Pin_PreAssembled.brd; commit 6d93ad550771",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 82.55,
      "height": 65.532,
      "color": "#9b242d",
      "outline": "M41.275 -13.374841A1.436841 1.436841 0 0 1 39.838159 -11.938L9.271 -11.938A1.27 1.27 0 0 0 8.001 -10.668L8.001 31.496A1.27 1.27 0 0 1 6.731 32.766L-8.509 32.766A1.27 1.27 0 0 1 -9.779 31.496L-9.779 -10.668A1.27 1.27 0 0 0 -11.049 -11.938L-39.838159 -11.938A1.436841 1.436841 0 0 1 -41.275 -13.374841L-41.275 -31.329159A1.436841 1.436841 0 0 1 -39.838159 -32.766L39.838159 -32.766A1.436841 1.436841 0 0 1 41.275 -31.329159L41.275 -13.374841Z"
    },
    "contacts": assets["sparkfun-module-bob13717"]["contacts"],
    "holes": [
      {
        "x": 39.243,
        "y": -17.494,
        "drill": 1.4
      },
      {
        "x": 39.243,
        "y": -27.654,
        "drill": 1.4
      },
      {
        "x": -27.305,
        "y": -16.764,
        "drill": 3.302
      },
      {
        "x": 26.035,
        "y": -16.764,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob13717"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob13717"]["backArtwork"],
    "artworkBounds": [
      -38.214999999999996,
      -30.701999999999998,
      46.533,
      -13.982
    ],
    "provenance": assets["sparkfun-module-bob13717"]["provenance"],
    "internalConnections": [
      [
        "jp1-6",
        "jp2-6",
        "jp2-9",
        "jp2-14",
        "jp2-20",
        "jp2-25",
        "jp2-30",
        "jp2-34",
        "jp2-39",
        "jp3-1",
        "jp4-1"
      ],
      [
        "jp1-3",
        "jp2-10",
        "jp3-5"
      ],
      [
        "jp1-2",
        "jp2-8",
        "jp3-4"
      ],
      [
        "jp2-1",
        "jp2-17",
        "jp3-2",
        "jp4-2"
      ],
      [
        "jp2-2",
        "jp2-4",
        "jp3-3",
        "jp4-3"
      ],
      [
        "jp2-3",
        "jp4-6"
      ],
      [
        "jp2-5",
        "jp4-7"
      ],
      [
        "jp2-7",
        "jp3-11"
      ],
      [
        "jp2-11",
        "jp3-17"
      ],
      [
        "jp2-12",
        "jp4-17"
      ],
      [
        "jp2-13",
        "jp4-8"
      ],
      [
        "jp2-15",
        "jp4-13"
      ],
      [
        "jp2-16",
        "jp4-12"
      ],
      [
        "jp2-18",
        "jp4-11"
      ],
      [
        "jp2-19",
        "jp3-8"
      ],
      [
        "jp2-21",
        "jp3-7"
      ],
      [
        "jp2-22",
        "jp4-10"
      ],
      [
        "jp2-23",
        "jp3-6"
      ],
      [
        "jp2-24",
        "jp3-9"
      ],
      [
        "jp2-26",
        "jp3-10"
      ],
      [
        "jp2-27",
        "jp4-4"
      ],
      [
        "jp2-28",
        "jp4-5"
      ],
      [
        "jp2-29",
        "jp3-12"
      ],
      [
        "jp2-31",
        "jp3-13"
      ],
      [
        "jp2-32",
        "jp3-14"
      ],
      [
        "jp2-33",
        "jp3-15"
      ],
      [
        "jp2-35",
        "jp4-16"
      ],
      [
        "jp2-36",
        "jp3-16"
      ],
      [
        "jp2-37",
        "jp4-9"
      ],
      [
        "jp2-38",
        "jp4-15"
      ],
      [
        "jp2-40",
        "jp4-14"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-pi-wedge.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Pi_Wedge_40-Pin_PreAssembled/blob/6d93ad550771dc4c304dc220aea1f0c69fdad907/hardware/SparkFun_Pi_Wedge_40-Pin_PreAssembled.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Pi_Wedge_40-Pin_PreAssembled/blob/6d93ad550771dc4c304dc220aea1f0c69fdad907/hardware/SparkFun_Pi_Wedge_40-Pin_PreAssembled.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Pi_Wedge_40-Pin_PreAssembled/blob/6d93ad550771dc4c304dc220aea1f0c69fdad907/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-pi-wedge.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-13717",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-13717. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev12761",
    "sku": "DEV-12761",
    "name": "SparkFun microSD Shield",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-microsd-shield.html",
    "revision": "EAGLE microSD_Shield.brd; commit 993693390e53",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 53.34,
      "height": 59.69,
      "color": "#9b242d",
      "outline": "M26.67 27.305L24.13 29.845L-24.13 29.845L-26.67 27.305L-26.67 -26.035L-25.4 -27.305L-13.97 -27.305L-11.43 -29.845L21.59 -29.845L24.13 -27.305L26.67 -27.305L26.67 27.305Z"
    },
    "contacts": assets["sparkfun-module-dev12761"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev12761"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev12761"]["backArtwork"],
    "artworkBounds": [
      -20.36,
      -28.615,
      24.17,
      32.805
    ],
    "provenance": assets["sparkfun-module-dev12761"]["provenance"],
    "internalConnections": [
      [
        "u2-res",
        "jp7-3",
        "j1-5"
      ],
      [
        "u2-3-3v",
        "u1-4",
        "jp7-4"
      ],
      [
        "u2-5v",
        "jp7-5",
        "j1-2"
      ],
      [
        "u2-gnd-0",
        "u2-gnd-1",
        "u2-gnd-2",
        "u1-cd2",
        "u1-cd1",
        "u1-gnd3",
        "u1-gnd1",
        "u1-6",
        "jp5-7",
        "jp7-6",
        "jp7-7",
        "j1-6"
      ],
      [
        "u2-vin",
        "jp7-8"
      ],
      [
        "u2-a0",
        "jp6-1"
      ],
      [
        "u2-a1",
        "jp6-2"
      ],
      [
        "u2-a2",
        "jp6-3"
      ],
      [
        "u2-a3",
        "jp6-4"
      ],
      [
        "u2-a4",
        "jp6-5"
      ],
      [
        "u2-a5",
        "jp6-6"
      ],
      [
        "u2-rx",
        "jp4-1"
      ],
      [
        "u2-tx",
        "jp4-2"
      ],
      [
        "u2-d2",
        "jp4-3"
      ],
      [
        "u2-d3",
        "jp4-4"
      ],
      [
        "u2-d4",
        "jp4-5"
      ],
      [
        "u2-d5",
        "jp4-6"
      ],
      [
        "u2-d6",
        "jp4-7"
      ],
      [
        "u2-d7",
        "jp4-8"
      ],
      [
        "u2-d8",
        "jp5-1"
      ],
      [
        "u2-d9",
        "jp5-2"
      ],
      [
        "u2-d10",
        "jp5-3"
      ],
      [
        "u2-d11",
        "jp5-4",
        "j1-4"
      ],
      [
        "u2-d12",
        "u1-7",
        "jp5-5",
        "j1-1"
      ],
      [
        "u2-d13",
        "jp5-6",
        "j1-3"
      ],
      [
        "u2-aref",
        "jp5-8"
      ],
      [
        "u2-sda",
        "jp5-9"
      ],
      [
        "u2-scl",
        "jp5-10"
      ],
      [
        "u2-ioref",
        "jp7-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-microsd-shield.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/microSD_Shield/blob/993693390e5300f1dc514fdfb9424026b4f4ad7f/Hardware/microSD_Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/microSD_Shield/blob/993693390e5300f1dc514fdfb9424026b4f4ad7f/Hardware/microSD_Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/microSD_Shield/blob/993693390e5300f1dc514fdfb9424026b4f4ad7f/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-microsd-shield.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-12761",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-12761. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
