import assets from "./memory-storage-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob00544",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7"],
      "source": {"label": "SparkFun BOB-00544: EAGLE SparkFun_microSD_Breakout.brd; commit 452f85520c81 header geometry", "url": "https://github.com/sparkfun/microSD_Transflash_Breakout/blob/452f85520c81f96c2dedbddf25c896412a55390d/Hardware/SparkFun_microSD_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07"}],
        "boardSha256": "ab4e9ddc4f6caed222fa1a16f0afe0f8d40e32dd6433b9dfb0810225505ea156"
      },
      "bodyRegions": [
        {"x": -10.795, "y": -10.16, "width": 21.59, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-00544",
    "name": "SparkFun microSD Transflash Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-microsd-transflash-breakout.html",
    "revision": "EAGLE SparkFun_microSD_Breakout.brd; commit 452f85520c81",
    "category": "Interfaces",
    "board": {
      "width": 21.59,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-10.795 10.16L10.795 10.16L10.795 -10.16L-10.795 -10.16L-10.795 10.16Z"
    },
    "contacts": assets["sparkfun-module-bob00544"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob00544"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob00544"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob00544"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "u1-2"
      ],
      [
        "jp1-2",
        "u1-3"
      ],
      [
        "jp1-3",
        "u1-4"
      ],
      [
        "jp1-4",
        "u1-5"
      ],
      [
        "jp1-5",
        "u1-6",
        "u1-gnd2",
        "u1-gnd1"
      ],
      [
        "jp1-6",
        "u1-7"
      ],
      [
        "jp1-7",
        "u1-cd2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-microsd-transflash-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/microSD_Transflash_Breakout/blob/452f85520c81f96c2dedbddf25c896412a55390d/Hardware/SparkFun_microSD_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/microSD_Transflash_Breakout/blob/452f85520c81f96c2dedbddf25c896412a55390d/Hardware/SparkFun_microSD_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/microSD_Transflash_Breakout/blob/452f85520c81f96c2dedbddf25c896412a55390d/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-microsd-transflash-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-00544",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-00544. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      8.215000000000002,
      -8.93,
      10.835,
      8.93
    ]
  },
  {
    "id": "sparkfun-module-dev13743",
    "sku": "DEV-13743",
    "name": "SparkFun Level Shifting microSD Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-level-shifting-microsd-breakout.html",
    "revision": "EAGLE Shifting_microSD.brd; commit 805f7ea82e15",
    "category": "Interfaces",
    "board": {
      "width": 17.78,
      "height": 24.13,
      "color": "#9b242d",
      "outline": "M-8.89 -12.065L8.89 -12.065L8.89 12.065L-8.89 12.065L-8.89 -12.065Z"
    },
    "contacts": assets["sparkfun-module-dev13743"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev13743"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev13743"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-dev13743"]["provenance"],
    "internalConnections": [
      [
        "jp2-cd2",
        "jp1-2"
      ],
      [
        "jp2-gnd3",
        "jp2-gnd1",
        "jp2-gnd",
        "jp1-1"
      ],
      [
        "jp2-vcc",
        "tp1-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-level-shifting-microsd-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Shifting_microSD/blob/805f7ea82e15699bff82da9536cf72ba25ca70c9/Hardware/Shifting_microSD.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Shifting_microSD/blob/805f7ea82e15699bff82da9536cf72ba25ca70c9/Hardware/Shifting_microSD.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Shifting_microSD/blob/805f7ea82e15699bff82da9536cf72ba25ca70c9/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-level-shifting-microsd-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-13743",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-13743. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.93,
      -15.215499999999999,
      8.93,
      12.105
    ],
    "backArtworkBounds": [
      -8.511099999999999,
      -6.7966,
      6.4662,
      5.349
    ]
  },
];
