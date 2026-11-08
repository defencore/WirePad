import assets from "./signal-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen12642",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "SparkFun SEN-12642: EAGLE sound-detector.brd; commit 5ab91c0ff109 header geometry", "url": "https://github.com/sparkfun/Sound_Detector/blob/5ab91c0ff1096f7e9ddcd28940336250b9781375/hardware/sound-detector.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05"}],
        "boardSha256": "4e55c1eb8f4926172e6493d8e51c73fcc45fe2fc3f70dd429b2d2bf414efb34b"
      },
      "bodyRegions": [
        {"x": -21.59, "y": -11.43, "width": 43.18, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-12642",
    "name": "SparkFun Sound Detector",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-sound-detector.html",
    "revision": "EAGLE sound-detector.brd; commit 5ab91c0ff109",
    "category": "Sensors",
    "board": {
      "width": 43.18,
      "height": 22.86,
      "color": "#9b242d",
      "outline": "M-21.59 11.43L21.59 11.43L21.59 -11.43L-21.59 -11.43L-21.59 11.43Z"
    },
    "contacts": assets["sparkfun-module-sen12642"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": -8.89,
        "drill": 3.302
      },
      {
        "x": 19.05,
        "y": -8.89,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen12642"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12642"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12642"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-sound-detector.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Sound_Detector/blob/5ab91c0ff1096f7e9ddcd28940336250b9781375/hardware/sound-detector.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Sound_Detector/blob/5ab91c0ff1096f7e9ddcd28940336250b9781375/hardware/sound-detector.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Sound_Detector/blob/5ab91c0ff1096f7e9ddcd28940336250b9781375/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-sound-detector.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12642",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12642. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -21.36,
      -8.016,
      21.63,
      8.625
    ]
  },
  {
    "id": "sparkfun-module-tol20680",
    "sku": "TOL-20680",
    "name": "SparkFun LiPo Fuel Gauge",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-lipo-fuel-gauge.html",
    "revision": "EAGLE SparkFun_Lipo_Fuel_Gauge.brd; commit e3e707c39049",
    "category": "Sensors",
    "board": {
      "width": 10.16,
      "height": 24.13,
      "color": "#9b242d",
      "outline": "M-5.08 12.065L-5.08 -12.065L5.08 -12.065L5.08 12.065L-5.08 12.065Z"
    },
    "contacts": assets["sparkfun-module-tol20680"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-tol20680"]["artwork"],
    "backArtwork": assets["sparkfun-module-tol20680"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-tol20680"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp4-2",
        "jp5-2"
      ],
      [
        "jp1-2",
        "jp5-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-lipo-fuel-gauge.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Lipo_Fuel_Gauge/blob/e3e707c39049de7c6ebeac7bd36e45bb6d1290e3/Hardware/SparkFun_Lipo_Fuel_Gauge.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Lipo_Fuel_Gauge/blob/e3e707c39049de7c6ebeac7bd36e45bb6d1290e3/Hardware/SparkFun_Lipo_Fuel_Gauge.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Lipo_Fuel_Gauge/blob/e3e707c39049de7c6ebeac7bd36e45bb6d1290e3/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-lipo-fuel-gauge.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "TOL-20680",
      "reportedStock": "In stock"
    },
    "description": "SparkFun TOL-20680. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.1,
      -11.295,
      4.1,
      11.085
    ],
    "backArtworkBounds": [
      -1.7672,
      9.104000000000001,
      1.7672,
      11.216
    ]
  },
];
