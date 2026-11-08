import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob19389",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "SparkFun BOB-19389: EAGLE SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd; commit 4d01f22a9be9 header geometry", "url": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/Hardware/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03_NO_SILK"}],
        "boardSha256": "109ba7a9ae40dd8649400f1c7b516a9dc7c90544bba68763e4e8434bee8663ea"
      },
      "bodyRegions": [
        {"x": -6.985, "y": -5.08, "width": 13.97, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-19389",
    "name": "SparkFun Analog MEMS Microphone Breakout - SPH8878LR5H-1",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-analog-mems-microphone-breakout-sph8878lr5h-1.html",
    "revision": "EAGLE SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd; commit 4d01f22a9be9",
    "category": "Audio",
    "board": {
      "width": 13.97,
      "height": 10.16,
      "color": "#9b242d",
      "outline": "M-6.985 5.08L6.985 5.08L6.985 -5.08L-6.985 -5.08L-6.985 5.08Z"
    },
    "contacts": assets["sparkfun-module-bob19389"]["contacts"],
    "holes": [
      {
        "x": -4.445,
        "y": 1.27,
        "drill": 0.9
      }
    ],
    "artwork": assets["sparkfun-module-bob19389"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob19389"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob19389"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-analog-mems-microphone-breakout-sph8878lr5h-1.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/Hardware/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/Hardware/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-analog-mems-microphone-breakout-sph8878lr5h-1.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-19389",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-19389. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.005,
      -4.3074,
      4.4344,
      3.1644
    ]
  },
  {
    "id": "sparkfun-module-rob14538",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2", "jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "SparkFun ROB-14538: EAGLE Haptic_Motor_Driver_DRV2605L_v20.brd; commit a300e3885810 header geometry", "url": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Hardware/Haptic_Motor_Driver_DRV2605L_v20.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP2", "count": 2, "package": "1X02"}, {"id": "JP1", "count": 6, "package": "1X06"}],
        "boardSha256": "07a3ee9fad3003569ce7c447a21b3fb19174a5c49214beec30ca40df215db1f2"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -10.16, "width": 20.32, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ROB-14538",
    "name": "SparkFun Haptic Motor Driver - DRV2605L",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-haptic-motor-driver-drv2605l.html",
    "revision": "EAGLE Haptic_Motor_Driver_DRV2605L_v20.brd; commit a300e3885810",
    "category": "Power",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-10.16 10.16L10.16 10.16L10.16 -10.16L-10.16 -10.16L-10.16 10.16Z"
    },
    "contacts": assets["sparkfun-module-rob14538"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": -7.62,
        "drill": 3.302
      },
      {
        "x": 7.62,
        "y": -7.62,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-rob14538"]["artwork"],
    "backArtwork": assets["sparkfun-module-rob14538"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-rob14538"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-haptic-motor-driver-drv2605l.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Hardware/Haptic_Motor_Driver_DRV2605L_v20.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Hardware/Haptic_Motor_Driver_DRV2605L_v20.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Libraries/Arduino/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-haptic-motor-driver-drv2605l.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "ROB-14538",
      "reportedStock": "In stock"
    },
    "description": "SparkFun ROB-14538. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.2,
      -5.12,
      10.2,
      10.2
    ]
  },
  {
    "id": "sparkfun-module-bob11083",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10"],
      "source": {"label": "SparkFun BOB-11083: EAGLE SparkFun_FM_Tuner_Basic_Breakout.brd; commit bd5b348b039c header geometry", "url": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/Hardware/SparkFun_FM_Tuner_Basic_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 10, "package": "1X10"}],
        "boardSha256": "1cbb646d6d43c423e61958e951e2c602677a09b96471b4d69324985a68b35d53"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -6.985, "width": 25.4, "height": 13.97}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-11083",
    "name": "SparkFun FM Tuner Basic Breakout - Si4703",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-fm-tuner-basic-breakout-si4703.html",
    "revision": "EAGLE SparkFun_FM_Tuner_Basic_Breakout.brd; commit bd5b348b039c",
    "category": "Audio",
    "board": {
      "width": 25.4,
      "height": 13.97,
      "color": "#9b242d",
      "outline": "M-12.7 6.985L12.7 6.985L12.7 -6.985L-12.7 -6.985L-12.7 6.985Z"
    },
    "contacts": assets["sparkfun-module-bob11083"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob11083"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob11083"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob11083"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-fm-tuner-basic-breakout-si4703.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/Hardware/SparkFun_FM_Tuner_Basic_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/Hardware/SparkFun_FM_Tuner_Basic_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-fm-tuner-basic-breakout-si4703.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-11083",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-11083. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.739999999999998,
      -7.025,
      12.74,
      7.025
    ]
  },
  {
    "id": "sparkfun-module-bob09540",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15"],
      "source": {"label": "SparkFun BOB-09540: EAGLE SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd; commit 8b81b873540e header geometry", "url": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/Hardware/SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 15, "package": "1X15"}],
        "boardSha256": "3f56c8a7b6bb1ec172aff8c554bab79a22ff1257a9658f09bb1c8d41c728d681"
      },
      "bodyRegions": [
        {"x": -20.32, "y": -12.065, "width": 40.64, "height": 24.13}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-09540",
    "name": "SparkFun L298N Breakout PCB (unpopulated)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-full-bridge-motor-driver-breakout-l298n.html",
    "revision": "EAGLE SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd; commit 8b81b873540e",
    "category": "Power",
    "board": {
      "width": 40.64,
      "height": 24.13,
      "color": "#9b242d",
      "outline": "M-20.32 12.065L-20.32 -12.065L20.32 -12.065L20.32 12.065L-20.32 12.065Z"
    },
    "contacts": assets["sparkfun-module-bob09540"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -9.144,
        "drill": 2.9972
      },
      {
        "x": 12.7,
        "y": -9.144,
        "drill": 2.9972
      },
      {
        "x": -17.78,
        "y": -6.985,
        "drill": 3.302
      },
      {
        "x": 17.78,
        "y": -6.985,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob09540"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob09540"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob09540"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-full-bridge-motor-driver-breakout-l298n.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/Hardware/SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/Hardware/SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-full-bridge-motor-driver-breakout-l298n.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-09540",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-09540. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part. This is an unpopulated passive carrier PCB; the intended device pin names identify its traces and no active driver is fitted.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -19.09,
      9.485000000000001,
      19.09,
      12.105
    ]
  },
  {
    "id": "sparkfun-module-rob14451",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp2-1", "jp2-2", "jp2-3", "jp2-4", "jp2-5", "jp2-6", "jp2-7", "jp2-8"],
      "source": {"label": "SparkFun ROB-14451: EAGLE SparkFun_Motor_Driver-TB6612FNG_v11.brd; commit 76bbcba16c45 header geometry", "url": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/Hardware/SparkFun_Motor_Driver-TB6612FNG_v11.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 8, "package": "1X08_OFFSET_REDUCED"}, {"id": "JP2", "count": 8, "package": "1X08_OFFSET_REDUCED"}],
        "boardSha256": "0c71c32c7531e2c468b7752a91a1cac0903d8cac6a23562e9ce99de4ec855f6e"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -10.16, "width": 20.32, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ROB-14451",
    "name": "SparkFun Motor Driver - Dual TB6612FNG (1A)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-motor-driver-dual-tb6612fng-1a.html",
    "revision": "EAGLE SparkFun_Motor_Driver-TB6612FNG_v11.brd; commit 76bbcba16c45",
    "category": "Power",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-10.16 10.16L10.16 10.16L10.16 -10.16L-10.16 -10.16L-10.16 10.16Z"
    },
    "contacts": assets["sparkfun-module-rob14451"]["contacts"],
    "holes": [
      {
        "x": -7.62,
        "y": 8.89,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": 6.35,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": 3.81,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": 1.27,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": -1.27,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": -3.81,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": -6.35,
        "drill": 1.1176
      },
      {
        "x": -7.62,
        "y": -8.89,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": -8.89,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": -6.35,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": -3.81,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": -1.27,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": 1.27,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": 3.81,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": 6.35,
        "drill": 1.1176
      },
      {
        "x": 7.62,
        "y": 8.89,
        "drill": 1.1176
      }
    ],
    "artwork": assets["sparkfun-module-rob14451"]["artwork"],
    "backArtwork": assets["sparkfun-module-rob14451"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-rob14451"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-6",
        "jp2-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-motor-driver-dual-tb6612fng-1a.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/Hardware/SparkFun_Motor_Driver-TB6612FNG_v11.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/Hardware/SparkFun_Motor_Driver-TB6612FNG_v11.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-motor-driver-dual-tb6612fng-1a.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "ROB-14451",
      "reportedStock": "In stock"
    },
    "description": "SparkFun ROB-14451. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -2.681,
      -7.99,
      2.64,
      5.56
    ]
  },
  {
    "id": "sparkfun-module-prt10217",
    "mountingReview": {
      "contactIds": ["jp8-1", "jp8-2"],
      "source": {"label": "SparkFun PRT-10217: EAGLE SparkFun_Lipo_Charger_Basic-microUSB.brd; commit 73710c1269a3 header geometry", "url": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/Hardware/SparkFun_Lipo_Charger_Basic-microUSB.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP8", "count": 2, "package": "1X02"}],
        "boardSha256": "637f853c79a6d959e20d70d7893093e8a89d1185536f8c03c84c43dc80201c31"
      },
      "bodyRegions": [
        {"x": -14.605, "y": -5.08, "width": 29.21, "height": 10.16},
        {"x": -16.263878, "y": -5.6, "width": 6.0, "height": 9.6}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-10217",
    "name": "SparkFun LiPo Charger Basic - Micro-B",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-micro-usb.html",
    "revision": "EAGLE SparkFun_Lipo_Charger_Basic-microUSB.brd; commit 73710c1269a3",
    "category": "Power",
    "board": {
      "width": 29.21,
      "height": 10.16,
      "color": "#9b242d",
      "outline": "M14.605 5.08L14.605 -5.08L-14.605 -5.08L-14.605 5.08L14.605 5.08Z"
    },
    "contacts": assets["sparkfun-module-prt10217"]["contacts"],
    "holes": [
      {
        "x": -0.635,
        "y": 0,
        "drill": 3.302
      },
      {
        "x": -11.063878,
        "y": -1.9,
        "drill": 0.85
      },
      {
        "x": -11.063878,
        "y": 1.9,
        "drill": 0.85
      }
    ],
    "artwork": assets["sparkfun-module-prt10217"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt10217"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt10217"]["provenance"],
    "internalConnections": [
      [
        "jp8-1",
        "jp9-gnd1",
        "jp1-1"
      ],
      [
        "jp8-2",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-micro-usb.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/Hardware/SparkFun_Lipo_Charger_Basic-microUSB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/Hardware/SparkFun_Lipo_Charger_Basic-microUSB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-micro-usb.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-10217",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-10217. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.303877999999997,
      -5.64,
      13.835,
      4.612
    ],
    "backArtworkBounds": [
      1.865,
      -2.58,
      4.485,
      2.58
    ]
  },
  {
    "id": "sparkfun-module-prt10401",
    "mountingReview": {
      "contactIds": ["jp8-1", "jp8-2"],
      "source": {"label": "SparkFun PRT-10401: EAGLE SparkFun_LiPo-Charger-Basic-MiniUSB.brd; commit 2337e59b6f32 header geometry", "url": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/Hardware/SparkFun_LiPo-Charger-Basic-MiniUSB.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP8", "count": 2, "package": "1X02"}],
        "boardSha256": "439bb2d34bb47858b790cc5285f5f0f4d06f686970e7955ce380d04fe5fe0905"
      },
      "bodyRegions": [
        {"x": -16.51, "y": -6.35, "width": 33.02, "height": 12.7},
        {"x": -17.33, "y": -3.8, "width": 9.2, "height": 7.6}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-10401",
    "name": "SparkFun LiPo Charger Basic - Mini-USB",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-mini-usb.html",
    "revision": "EAGLE SparkFun_LiPo-Charger-Basic-MiniUSB.brd; commit 2337e59b6f32",
    "category": "Power",
    "board": {
      "width": 33.02,
      "height": 12.7,
      "color": "#9b242d",
      "outline": "M16.51 6.35L16.51 -6.35L-16.51 -6.35L-16.51 6.35L16.51 6.35Z"
    },
    "contacts": assets["sparkfun-module-prt10401"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 0,
        "drill": 3.302
      },
      {
        "x": -11.43,
        "y": -2.2,
        "drill": 0.9
      },
      {
        "x": -11.43,
        "y": 2.2,
        "drill": 0.9
      }
    ],
    "artwork": assets["sparkfun-module-prt10401"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt10401"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt10401"]["provenance"],
    "internalConnections": [
      [
        "jp7-1",
        "jp8-1",
        "x1-gnd"
      ],
      [
        "jp7-2",
        "jp8-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-mini-usb.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/Hardware/SparkFun_LiPo-Charger-Basic-MiniUSB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/Hardware/SparkFun_LiPo-Charger-Basic-MiniUSB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-lipo-charger-basic-mini-usb.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-10401",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-10401. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.369999999999997,
      -4.04,
      15.74,
      4.04
    ],
    "backArtworkBounds": [
      2.5,
      -2.58,
      5.12,
      2.58
    ]
  },
  {
    "id": "sparkfun-module-prt15353",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6"],
      "source": {"label": "SparkFun PRT-15353: EAGLE SparkFun_TPL5110_Nano_Power_Switch.brd; commit 2d8d2cce78c7 physical insertion headers", "url": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/Hardware/SparkFun_TPL5110_Nano_Power_Switch.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J2", "count": 6, "package": "1X06_NO_SILK"}],
        "boardSha256": "3b5a15fd87b6339122e6a34d8e176a6792b38310286e60065ac622f715409c05"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-15353",
    "name": "SparkFun Nano Power Timer - TPL5110",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-nano-power-timer-tpl5110.html",
    "revision": "EAGLE SparkFun_TPL5110_Nano_Power_Switch.brd; commit 2d8d2cce78c7",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-prt15353"]["contacts"],
    "holes": [
      {
        "x": -10.668,
        "y": -10.668,
        "drill": 3.048
      },
      {
        "x": 10.668,
        "y": -10.668,
        "drill": 3.048
      },
      {
        "x": -10.668,
        "y": 10.668,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-prt15353"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt15353"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-prt15353"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j2-4"
      ],
      [
        "j1-2",
        "j2-6"
      ],
      [
        "jp2-2",
        "j2-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-nano-power-timer-tpl5110.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/Hardware/SparkFun_TPL5110_Nano_Power_Switch.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/Hardware/SparkFun_TPL5110_Nano_Power_Switch.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-nano-power-timer-tpl5110.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-15353",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-15353. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.723999999999998,
      -12.0544,
      11.93,
      10.1126
    ],
    "backArtworkBounds": [
      -7.1012,
      -10.962,
      -4.5828,
      -8.85
    ]
  },
  {
    "id": "sparkfun-module-prt11214",
    "sku": "PRT-11214",
    "name": "SparkFun MOSFET Power Controller",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-mosfet-power-controller.html",
    "revision": "EAGLE SparkFun_MOSFET_Power_Controller.brd; commit d20f59094c1d",
    "category": "Power",
    "board": {
      "width": 21.59,
      "height": 30.48,
      "color": "#9b242d",
      "outline": "M-10.795 -13.97A1.27 1.27 0 0 1 -9.525 -15.24L9.525 -15.24A1.27 1.27 0 0 1 10.795 -13.97L10.795 13.97A1.27 1.27 0 0 1 9.525 15.24L-9.525 15.24A1.27 1.27 0 0 1 -10.795 13.97L-10.795 -13.97Z"
    },
    "contacts": assets["sparkfun-module-prt11214"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-prt11214"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt11214"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt11214"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp3-2",
        "jp5-1",
        "bh2-p-1"
      ],
      [
        "jp1-2",
        "jp4-1",
        "jp2-2",
        "bh3-p-1"
      ],
      [
        "jp3-1",
        "jp5-2",
        "bh1-p-1"
      ],
      [
        "jp4-2",
        "jp2-1",
        "bh4-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-mosfet-power-controller.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/SparkFun_MOSFET_Power_Controller.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/SparkFun_MOSFET_Power_Controller.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-mosfet-power-controller.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-11214",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-11214. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.288,
      -15.311,
      10.025,
      15.311
    ]
  },
  {
    "id": "sparkfun-module-prt13032",
    "mountingReview": {
      "contactIds": ["jp5-1", "jp5-2"],
      "source": {"label": "SparkFun PRT-13032: EAGLE SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd; commit 61db9993900f header geometry", "url": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/Hardware/SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP5", "count": 2, "package": "1X02"}],
        "boardSha256": "3f2b692b18f62be937900cbe56e51cb079645673557a58d07d9cabd276810a92"
      },
      "bodyRegions": [
        {"x": -27.305, "y": -8.255, "width": 54.61, "height": 16.51}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-13032",
    "name": "SparkFun Breadboard Power Supply Stick - 5V/3.3V",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-breadboard-power-supply-stick-5v-3-3v.html",
    "revision": "EAGLE SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd; commit 61db9993900f",
    "category": "Power",
    "board": {
      "width": 54.61,
      "height": 16.51,
      "color": "#9b242d",
      "outline": "M-27.305 8.255L27.305 8.255L27.305 -8.255L-27.305 -8.255L-27.305 8.255Z"
    },
    "contacts": assets["sparkfun-module-prt13032"]["contacts"],
    "holes": [
      {
        "x": -9.017,
        "y": 2.54,
        "drill": 2.032
      },
      {
        "x": -9.017,
        "y": -2.032,
        "drill": 2.032
      },
      {
        "x": 23.495,
        "y": 1.675,
        "drill": 0.85
      },
      {
        "x": 23.495,
        "y": 4.675,
        "drill": 0.85
      },
      {
        "x": -23.495,
        "y": 4.675,
        "drill": 0.85
      },
      {
        "x": -23.495,
        "y": 1.675,
        "drill": 0.85
      }
    ],
    "artwork": assets["sparkfun-module-prt13032"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt13032"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt13032"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp4-1",
        "j1-gnd",
        "j1-p-4",
        "jp5-2",
        "jp6-1",
        "jp9-1"
      ],
      [
        "jp2-1",
        "jp3-1",
        "jp7-1",
        "jp8-1"
      ],
      [
        "j1-vin0",
        "jp5-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-breadboard-power-supply-stick-5v-3-3v.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/Hardware/SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/Hardware/SparkFun_Breadboard_Power_Supply-5v_3V_SMD.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-breadboard-power-supply-stick-5v-3-3v.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-13032",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-13032. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -26.075,
      -8.295,
      25.285,
      8.295
    ]
  },
  {
    "id": "sparkfun-module-prt14765",
    "mountingReview": {
      "contactIds": ["jp7-1", "jp7-2", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "j1-1", "j1-2", "j1-3", "j1-4", "j2-1", "j2-2", "j2-3", "j2-4"],
      "source": {"label": "SparkFun PRT-14765: EAGLE Single_Supply_Logic_Level_Converter.brd; commit 5f675f2d775c header geometry", "url": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/Hardware/Single_Supply_Logic_Level_Converter.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP7", "count": 2, "package": "1X02"}, {"id": "JP3", "count": 4, "package": "1X04"}, {"id": "J1", "count": 4, "package": "1X04"}, {"id": "J2", "count": 4, "package": "1X04"}],
        "boardSha256": "3ead1c827915e1e6a4b37e2e7e2778d566275e38b9ad99a188eef871f0487f51"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -13.97, "width": 25.4, "height": 27.94}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-14765",
    "name": "SparkFun Logic Level Converter - Single Supply",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-logic-level-converter-single-supply.html",
    "revision": "EAGLE Single_Supply_Logic_Level_Converter.brd; commit 5f675f2d775c",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M-12.7 13.97L-12.7 -13.97L12.7 -13.97L12.7 13.97L-12.7 13.97Z"
    },
    "contacts": assets["sparkfun-module-prt14765"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-prt14765"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt14765"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt14765"]["provenance"],
    "internalConnections": [
      [
        "jp7-1",
        "jp3-2",
        "jp3-4",
        "j3-1",
        "j4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-logic-level-converter-single-supply.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/Hardware/Single_Supply_Logic_Level_Converter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/Hardware/Single_Supply_Logic_Level_Converter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-logic-level-converter-single-supply.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-14765",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-14765. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.739999999999998,
      -11.469999999999999,
      12.74,
      14.01
    ]
  },
  {
    "id": "sparkfun-module-wig13118",
    "sku": "WIG-13118",
    "name": "SparkFun Servo Trigger",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-servo-trigger.html",
    "revision": "EAGLE SparkFun_Servo_Trigger.brd; commit 92e979266c02",
    "category": "Power",
    "board": {
      "width": 22.86,
      "height": 43.164,
      "color": "#9b242d",
      "outline": "M-11.43 21.582L11.43 21.582L11.43 -21.582L-11.43 -21.582L-11.43 21.582Z"
    },
    "contacts": assets["sparkfun-module-wig13118"]["contacts"],
    "holes": [
      {
        "x": -8.255,
        "y": 18.423,
        "drill": 3.302
      },
      {
        "x": 8.255,
        "y": 18.423,
        "drill": 3.302
      },
      {
        "x": -8.255,
        "y": -18.407,
        "drill": 3.302
      },
      {
        "x": 8.255,
        "y": -18.407,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wig13118"]["artwork"],
    "backArtwork": assets["sparkfun-module-wig13118"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wig13118"]["provenance"],
    "internalConnections": [
      [
        "jp9-2",
        "jp2-2",
        "jp3-2",
        "jp4-2"
      ],
      [
        "jp9-4",
        "jp2-3"
      ],
      [
        "jp9-6",
        "jp1-2",
        "jp2-1",
        "jp3-1",
        "jp4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-servo-trigger.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/Hardware/SparkFun_Servo_Trigger.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/Hardware/SparkFun_Servo_Trigger.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-servo-trigger.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WIG-13118",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WIG-13118. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.361999999999998,
      -11.93,
      11.47,
      14.678159
    ],
    "backArtworkBounds": [
      1.5,
      -11.191999999999998,
      6.12,
      -9.112
    ]
  },
  {
    "id": "sparkfun-module-com16810",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun COM-16810: EAGLE Qwiic Solid State Relay.brd; commit f9fa87f14eca header geometry", "url": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/Hardware/Qwiic%20Solid%20State%20Relay.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "dcd657b0f55346df6c9833d3de89538098175353e67458e5fe158f3c718644d7"
      },
      "bodyRegions": [
        {"x": -45.085, "y": -33.655, "width": 90.17, "height": 67.31}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "COM-16810",
    "name": "SparkFun Qwiic Dual Solid State Relay",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-dual-solid-state-relay.html",
    "revision": "EAGLE Qwiic Solid State Relay.brd; commit f9fa87f14eca",
    "category": "Power",
    "board": {
      "width": 90.17,
      "height": 67.31,
      "color": "#9b242d",
      "outline": "M42.545 -33.655A2.54 2.54 0 0 1 45.085 -31.115L45.085 31.115A2.54 2.54 0 0 1 42.545 33.655L-13.455 33.655L-13.455 29.845A1.0 1.0 0 0 0 -14.455 28.845L-22.455 28.845A1.0 1.0 0 0 0 -23.455 29.845L-23.455 33.655L-42.545 33.655A2.54 2.54 0 0 1 -45.085 31.115L-45.085 -31.115A2.54 2.54 0 0 1 -42.545 -33.655L42.545 -33.655Z"
    },
    "contacts": assets["sparkfun-module-com16810"]["contacts"],
    "holes": [
      {
        "x": 42.545,
        "y": 31.115,
        "drill": 3.302
      },
      {
        "x": -42.545,
        "y": 10.795,
        "drill": 3.302
      },
      {
        "x": -42.545,
        "y": 31.115,
        "drill": 3.302
      },
      {
        "x": 42.545,
        "y": 10.795,
        "drill": 3.302
      },
      {
        "x": 42.545,
        "y": -31.115,
        "drill": 3.302
      },
      {
        "x": -42.545,
        "y": -31.115,
        "drill": 3.302
      },
      {
        "x": 29.545,
        "y": 21.115,
        "drill": 3.302
      },
      {
        "x": -4.455,
        "y": 21.115,
        "drill": 3.302
      },
      {
        "x": -7.455,
        "y": 31.115,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-com16810"]["artwork"],
    "backArtwork": assets["sparkfun-module-com16810"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-com16810"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-4",
        "j3-4",
        "j9-3"
      ],
      [
        "j1-2",
        "j2-3",
        "j3-3",
        "j9-4"
      ],
      [
        "j1-3",
        "j2-2",
        "j3-2",
        "j9-2"
      ],
      [
        "j1-4",
        "j2-1",
        "j3-1",
        "j9-6"
      ],
      [
        "j9-5",
        "j6-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-dual-solid-state-relay.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/Hardware/Qwiic%20Solid%20State%20Relay.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/Hardware/Qwiic%20Solid%20State%20Relay.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-dual-solid-state-relay.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "COM-16810",
      "reportedStock": "In stock"
    },
    "description": "SparkFun COM-16810. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -44.644999999999996,
      -33.339999999999996,
      44.645,
      32.90125
    ]
  },
  {
    "id": "sparkfun-module-wrl15484",
    "sku": "WRL-15484",
    "name": "SparkFun Artemis Module - Low Power Machine Learning BLE Cortex-M4F",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-artemis-module-low-power-machine-learning-ble-cortex-m4f.html",
    "revision": "EAGLE SparkFun_Artemis.brd; commit e1d026549109",
    "category": "Power",
    "board": {
      "width": 15,
      "height": 10,
      "color": "#9b242d",
      "outline": "M-7.5 5.0L7.5 5.0L7.5 -5.0L-7.5 -5.0L-7.5 5.0Z"
    },
    "contacts": assets["sparkfun-module-wrl15484"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-wrl15484"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl15484"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl15484"]["provenance"],
    "internalConnections": [
      [
        "j36-1",
        "j37-1"
      ],
      [
        "j1-1",
        "j59-1",
        "j22-1",
        "j38-1",
        "j39-1",
        "j47-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-artemis-module-low-power-machine-learning-ble-cortex-m4f.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/Hardware/SparkFun_Artemis.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/Hardware/SparkFun_Artemis.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-artemis-module-low-power-machine-learning-ble-cortex-m4f.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-15484",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-15484. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.69,
      -4.54,
      6.74,
      4.39
    ]
  },
  {
    "id": "sparkfun-module-prt10588",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "SparkFun PRT-10588: EAGLE SparkFun_Audio_Jack_Breakout.brd; commit f0329895d565 header geometry", "url": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/Hardware/SparkFun_Audio_Jack_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05"}],
        "boardSha256": "ebe65ab9efaac33e60a681a3257789c860aed0c0244d8b9f353c4f09a02c7a88"
      },
      "bodyRegions": [
        {"x": -10.795, "y": -7.62, "width": 21.59, "height": 15.24},
        {"x": -13.485, "y": -6.0, "width": 14.0, "height": 12.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "PRT-10588",
    "name": "SparkFun Audio Jack Breakout",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-audio-jack-breakout.html",
    "revision": "EAGLE SparkFun_Audio_Jack_Breakout.brd; commit f0329895d565",
    "category": "Audio",
    "board": {
      "width": 21.59,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M-10.795 7.62L10.795 7.62L10.795 -7.62L-10.795 -7.62L-10.795 7.62Z"
    },
    "contacts": assets["sparkfun-module-prt10588"]["contacts"],
    "holes": [
      {
        "x": -6.985,
        "y": -5,
        "drill": 1.2
      },
      {
        "x": -9.485,
        "y": -5,
        "drill": 1.2
      },
      {
        "x": -9.485,
        "y": 5,
        "drill": 1.2
      },
      {
        "x": -6.985,
        "y": 5,
        "drill": 1.2
      },
      {
        "x": -1.985,
        "y": 0,
        "drill": 1.2
      }
    ],
    "artwork": assets["sparkfun-module-prt10588"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt10588"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-prt10588"]["provenance"],
    "internalConnections": [
      [
        "u1-sleeve",
        "jp1-1"
      ],
      [
        "u1-rsh",
        "jp1-3"
      ],
      [
        "u1-ring",
        "jp1-2"
      ],
      [
        "u1-tsh",
        "jp1-4"
      ],
      [
        "u1-tip",
        "jp1-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-audio-jack-breakout.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/Hardware/SparkFun_Audio_Jack_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/Hardware/SparkFun_Audio_Jack_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-audio-jack-breakout.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-10588",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-10588. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. The optional device/control footprint is shown as an empty dashed outline; the commercial board does not include that user-fitted part. This is an unpopulated passive carrier PCB; the intended device pin names identify its traces and no active driver is fitted.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -13.524999999999999,
      -6.39,
      9.565,
      6.39
    ]
  },
  {
    "id": "sparkfun-module-prt14380",
    "sku": "PRT-14380",
    "name": "SparkFun Adjustable LiPo Charger",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-adjustable-lipo-charger.html",
    "revision": "EAGLE Sparkfun_Adjustable_LiPo_Charger.brd; commit 868eacc48301",
    "category": "Power",
    "board": {
      "width": 31.75,
      "height": 38.1,
      "color": "#9b242d",
      "outline": "M-15.875 19.05L15.875 19.05L15.875 -19.05L-15.875 -19.05L-15.875 19.05Z"
    },
    "contacts": assets["sparkfun-module-prt14380"]["contacts"],
    "holes": [
      {
        "x": -13.961081,
        "y": -2.692581,
        "drill": 0.7
      },
      {
        "x": -14.127081,
        "y": -2.692581,
        "drill": 0.7
      },
      {
        "x": -14.326081,
        "y": -2.693581,
        "drill": 0.7
      },
      {
        "x": -14.491081,
        "y": -2.693581,
        "drill": 0.7
      },
      {
        "x": -11.006081,
        "y": -2.359181,
        "drill": 0.66
      },
      {
        "x": -11.136081,
        "y": -2.349181,
        "drill": 0.66
      },
      {
        "x": -11.286081,
        "y": -2.359181,
        "drill": 0.66
      },
      {
        "x": -11.395281,
        "y": -2.353781,
        "drill": 0.66
      },
      {
        "x": -11.006081,
        "y": 2.480819,
        "drill": 0.66
      },
      {
        "x": -11.136081,
        "y": 2.490819,
        "drill": 0.66
      },
      {
        "x": -11.286081,
        "y": 2.480819,
        "drill": 0.66
      },
      {
        "x": -11.395281,
        "y": 2.486219,
        "drill": 0.66
      },
      {
        "x": -13.961081,
        "y": 2.768419,
        "drill": 0.7
      },
      {
        "x": -14.130081,
        "y": 2.767419,
        "drill": 0.7
      },
      {
        "x": -14.323081,
        "y": 2.766419,
        "drill": 0.7
      },
      {
        "x": -14.491081,
        "y": 2.766419,
        "drill": 0.7
      }
    ],
    "artwork": assets["sparkfun-module-prt14380"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt14380"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-prt14380"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-2",
        "j3-gnd",
        "j4-2",
        "bt1-2"
      ],
      [
        "j1-2",
        "j2-1",
        "bt1-3"
      ],
      [
        "j3-vbus",
        "j4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-adjustable-lipo-charger.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/Hardware/Sparkfun_Adjustable_LiPo_Charger.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/Hardware/Sparkfun_Adjustable_LiPo_Charger.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-adjustable-lipo-charger.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-14380",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-14380. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.136999999999999,
      -14.581499999999998,
      15.232,
      12.078
    ],
    "backArtworkBounds": [
      -7.406,
      -12.74,
      17.584,
      12.74
    ]
  },
  {
    "id": "sparkfun-module-dev20690",
    "sku": "DEV-20690",
    "name": "SparkFun Qwiic Speaker Amp",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-speaker-amp.html",
    "revision": "EAGLE SparkFun_Qwiic_Speaker_Amp.brd; commit 0666c55c884f",
    "category": "Audio",
    "board": {
      "width": 43.18,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-21.59 12.7L21.59 12.7L21.59 -12.7L-21.59 -12.7L-21.59 12.7Z"
    },
    "contacts": assets["sparkfun-module-dev20690"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": 10.16,
        "drill": 3.048
      },
      {
        "x": 19.05,
        "y": 10.16,
        "drill": 3.048
      },
      {
        "x": -7.653019,
        "y": -9.1873,
        "drill": 2
      },
      {
        "x": -7.653019,
        "y": -2.1873,
        "drill": 2
      },
      {
        "x": -19.05,
        "y": -10.16,
        "drill": 3.048
      },
      {
        "x": 19.05,
        "y": -10.16,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-dev20690"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev20690"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-dev20690"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-sleeve",
        "j4-1",
        "j6-1"
      ],
      [
        "j1-2",
        "jp1-1"
      ],
      [
        "j1-3",
        "tp2-1"
      ],
      [
        "j1-4",
        "tp1-1"
      ],
      [
        "j2-tsh",
        "j6-3"
      ],
      [
        "j2-rsh",
        "j6-2"
      ],
      [
        "j4-2",
        "jp1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-speaker-amp.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/Hardware/SparkFun_Qwiic_Speaker_Amp.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/Hardware/SparkFun_Qwiic_Speaker_Amp.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-speaker-amp.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-20690",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-20690. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -21.419999999999998,
      -15.2273,
      21.42,
      9.750041
    ],
    "backArtworkBounds": [
      -3.6722,
      -11.579218999999998,
      16.2833,
      -3.749678
    ]
  },
  {
    "id": "sparkfun-module-prt13777",
    "sku": "PRT-13777",
    "name": "SparkFun Battery Babysitter - LiPo Battery Manager",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-battery-babysitter-lipo-battery-manager.html",
    "revision": "EAGLE sparkfun-battery-babysitter.brd; commit c3cb25541fb2",
    "category": "Power",
    "board": {
      "width": 33.02,
      "height": 33.02,
      "color": "#9b242d",
      "outline": "M-16.51 -16.51L16.51 -16.51L16.51 16.51L-16.51 16.51L-16.51 -16.51Z"
    },
    "contacts": assets["sparkfun-module-prt13777"]["contacts"],
    "holes": [
      {
        "x": 8.25,
        "y": -12.151,
        "drill": 0.85
      },
      {
        "x": 4.45,
        "y": -12.151,
        "drill": 0.85
      },
      {
        "x": -13.97,
        "y": -13.97,
        "drill": 3.302
      },
      {
        "x": 13.97,
        "y": -13.97,
        "drill": 3.302
      },
      {
        "x": -13.97,
        "y": 13.97,
        "drill": 3.302
      },
      {
        "x": 13.97,
        "y": 13.97,
        "drill": 3.302
      },
      {
        "x": 13.716,
        "y": -7.088,
        "drill": 0.9
      },
      {
        "x": 13.716,
        "y": -4.088,
        "drill": 0.9
      }
    ],
    "artwork": assets["sparkfun-module-prt13777"]["artwork"],
    "backArtwork": assets["sparkfun-module-prt13777"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-prt13777"]["provenance"],
    "internalConnections": [
      [
        "jp1-dplus1",
        "tp2-p-1"
      ],
      [
        "jp1-d-1",
        "tp1-p-1"
      ],
      [
        "jp1-vbus1",
        "jp3-1",
        "jp4-1",
        "jp2-1"
      ],
      [
        "jp1-gnd1",
        "jp6-1",
        "jp10-1",
        "jp5-1",
        "jp3-2",
        "jp7-2",
        "jp8-1",
        "jp9-1",
        "jp4-2",
        "jp2-2"
      ],
      [
        "jp1-shield1",
        "jp1-shield3",
        "jp1-shield2"
      ],
      [
        "jp6-2",
        "jp5-2"
      ],
      [
        "jp7-1",
        "jp8-2",
        "jp9-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-battery-babysitter-lipo-battery-manager.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/Hardware/sparkfun-battery-babysitter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/Hardware/sparkfun-battery-babysitter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-battery-babysitter-lipo-battery-manager.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "PRT-13777",
      "reportedStock": "In stock"
    },
    "description": "SparkFun PRT-13777. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.29,
      -17.391,
      16.556,
      16.5305
    ],
    "backArtworkBounds": [
      -13.8195,
      -11.088999999999999,
      13.8195,
      11.216
    ]
  },
];
