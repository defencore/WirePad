// Derived physical facts from SparkFun Electronics open hardware.
// Source commits, license URLs and attribution are retained per entry and in ATTRIBUTION.json.
// Original simplified package primitives; decorative logos/copper/silkscreen art are not reproduced.
export default [
  {
    "id": "sparkfun-module-com18356",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5"],
      "source": {"label": "SparkFun COM-18356: EAGLE SparkFun Buck Regulator - AP63203.brd; commit 63cdc8eadd12 header geometry", "url": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/SparkFun%20Buck%20Regulator%20-%20AP63203/Hardware/SparkFun%20Buck%20Regulator%20-%20AP63203.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 5, "package": "1X05_NO_SILK"}],
        "boardSha256": "187e843aab50591cc436ad8d1cc5d5a57a7d6cd7f2f42487715ceb242ece4308"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4},
        {"x": -4.517, "y": 5.603, "width": 9.017, "height": 13.4},
        {"x": 5.744, "y": -7.543, "width": 7.0, "height": 15.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "COM-18356",
    "name": "SparkFun Buck Regulator Breakout - 3.3V (AP63203)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-buck-regulator-breakout-3-3v-ap63203.html",
    "revision": "EAGLE SparkFun Buck Regulator - AP63203.brd; commit 63cdc8eadd12",
    "category": "Power",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -5.6405,
      -7.583,
      12.784,
      19.043
    ],
    "backArtworkBounds": [
      1.738,
      -2.7832,
      3.85,
      -0.2648
    ],
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J1.1.",
        "x": 9.144,
        "y": 5.207,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.2.",
        "x": 9.144,
        "y": 1.707,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.3.",
        "x": 9.144,
        "y": -1.793,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.4.",
        "x": 9.144,
        "y": -5.293,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "EN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EN. Physical source contact J2.1.",
        "x": -11.43,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J2.2.",
        "x": -11.43,
        "y": 2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.3.",
        "x": -11.43,
        "y": 0.0,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.4.",
        "x": -11.43,
        "y": -2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.5.",
        "x": -11.43,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-gnd",
        "number": "J3.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.GND.",
        "x": 0.0,
        "y": 11.303,
        "size": [
          4.0,
          2.0
        ],
        "shape": "oval",
        "connector": "J3",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "j3-gndbreak",
        "number": "J3.GNDBREAK",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.GNDBREAK.",
        "x": 4.699,
        "y": 8.255,
        "size": [
          2.0,
          4.0
        ],
        "shape": "oval",
        "connector": "J3",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "j3-pwr",
        "number": "J3.PWR",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J3.PWR.",
        "x": 0.0,
        "y": 5.334,
        "size": [
          4.6,
          2.3
        ],
        "shape": "oval",
        "connector": "J3",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "j3-gndbreak1",
        "number": "J3.GNDBREAK1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.GNDBREAK1.",
        "x": -4.699,
        "y": 8.255,
        "size": [
          2.0,
          4.0
        ],
        "shape": "oval",
        "connector": "J3",
        "back": false,
        "drill": 1.0
      }
    ],
    "holes": [
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": "<rect x=\"-4.517\" y=\"5.603\" width=\"9.017\" height=\"13.4\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.744\" y=\"-7.543\" width=\"7.0\" height=\"15.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9779\" y=\"-6.215062\" width=\"3.9878\" height=\"4.048125\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6005\" y=\"-1.5675\" width=\"3.073\" height=\"2.373\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.372\" y=\"-4.8514\" width=\"1.6\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0635\" y=\"1.68275\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.66\" y=\"-1.562\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.66\" y=\"-0.038\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"1.74\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.134\" y=\"1.74\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.886\" y=\"0.914\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.785\" y=\"-6.274\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"1.778\" y=\"-2.7432\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun Buck Regulator - AP63203.brd",
      "boardSha256": "187e843aab50591cc436ad8d1cc5d5a57a7d6cd7f2f42487715ceb242ece4308",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Buck_Regulator_AP63203",
      "commit": "63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5",
      "boardURL": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/SparkFun%20Buck%20Regulator%20-%20AP63203/Hardware/SparkFun%20Buck%20Regulator%20-%20AP63203.brd",
      "schematicURL": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/SparkFun%20Buck%20Regulator%20-%20AP63203/Hardware/SparkFun%20Buck%20Regulator%20-%20AP63203.sch",
      "schematicSha256": "5849f16230a368b7ad53f4216f2d2a4ca81b8a4ddb6386790dbf9efff8f1d9ab",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/license.md",
      "sourceArchiveSha256": "f931e44c411d320c248facfb46f40b6433d8864fab7ca4be8c23ac76131e9e7b",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": []
    },
    "internalConnections": [
      [
        "j1-1",
        "j2-2",
        "j3-pwr"
      ],
      [
        "j1-2",
        "j1-3",
        "j2-3",
        "j2-4",
        "j3-gnd"
      ],
      [
        "j1-4",
        "j2-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-buck-regulator-breakout-3-3v-ap63203.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/SparkFun%20Buck%20Regulator%20-%20AP63203/Hardware/SparkFun%20Buck%20Regulator%20-%20AP63203.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/SparkFun%20Buck%20Regulator%20-%20AP63203/Hardware/SparkFun%20Buck%20Regulator%20-%20AP63203.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Buck_Regulator_AP63203/blob/63cdc8eadd1258e32630f4e8ce2c1978d6ed62a5/license.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-buck-regulator-breakout-3-3v-ap63203.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "COM-18356",
      "reportedStock": "In stock"
    },
    "description": "SparkFun COM-18356. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  }
];
