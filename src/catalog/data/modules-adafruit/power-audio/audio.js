import assets from "./audio-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-6049",
    "sku": "ADA6049",
    "name": "Adafruit I2S MEMS Microphone Breakout - ICS-43434",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6049",
    "revision": "EAGLE Adafruit I2S MEMS Microphone Breakout - ICS-43434.brd; commit cde79ddef57c",
    "category": "Audio",
    "board": {
      "width": 16.51,
      "height": 12.7,
      "color": "#246545",
      "outline": "M8.255 3.81A2.54 2.54 0 0 1 5.715 6.35L-5.715 6.35A2.54 2.54 0 0 1 -8.255 3.81L-8.255 -3.81A2.54 2.54 0 0 1 -5.715 -6.35L5.715 -6.35A2.54 2.54 0 0 1 8.255 -3.81L8.255 3.81Z"
    },
    "contacts": assets["adafruit-module-6049"]["contacts"],
    "holes": [
      {
        "x": -5.715,
        "y": -3.81,
        "drill": 2.5
      },
      {
        "x": 5.715,
        "y": -3.81,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6049"]["artwork"],
    "backArtwork": assets["adafruit-module-6049"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6049"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6049"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/Adafruit%20I2S%20MEMS%20Microphone%20Breakout%20-%20ICS-43434.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/Adafruit%20I2S%20MEMS%20Microphone%20Breakout%20-%20ICS-43434.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6049",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6049",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6049. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.822,
      -2.552,
      6.746,
      2.25
    ]
  },
  {
    "id": "adafruit-module-3885",
    "sku": "ADA3885",
    "name": "Adafruit STEMMA Speaker - Plug and Play Audio Amplifier",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3885",
    "revision": "EAGLE Adafruit STEMMA Speaker.brd; commit 2f4a20b1411e",
    "category": "Audio",
    "board": {
      "width": 30.48,
      "height": 36.83,
      "color": "#246545",
      "outline": "M-15.24 15.875A2.539144 2.539144 0 0 0 -12.7 18.415L12.7 18.415A2.539891 2.539891 0 0 0 15.24 15.875L15.24 -15.875A2.54 2.54 0 0 0 12.7 -18.415L-12.7 -18.415A2.54 2.54 0 0 0 -15.24 -15.875L-15.24 15.875Z"
    },
    "contacts": assets["adafruit-module-3885"]["contacts"],
    "holes": [
      {
        "x": 12.7,
        "y": -15.875,
        "drill": 2.2
      },
      {
        "x": -12.7,
        "y": -15.875,
        "drill": 2.2
      },
      {
        "x": 12.7,
        "y": 15.875,
        "drill": 2.2
      },
      {
        "x": -12.7,
        "y": 15.875,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-3885"]["artwork"],
    "backArtwork": assets["adafruit-module-3885"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3885"]["provenance"],
    "internalConnections": [
      [
        "sense-1",
        "tp1-p-1"
      ],
      [
        "sense-2",
        "tp2-p-1"
      ],
      [
        "sense-3",
        "tp3-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3885"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/Adafruit%20STEMMA%20Speaker.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/Adafruit%20STEMMA%20Speaker.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3885",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3885",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3885. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -14.331,
      7.3275,
      9.337,
      17.883
    ]
  },
  {
    "id": "adafruit-module-5647",
    "sku": "ADA5647",
    "name": "Adafruit STEMMA Audio Amp - Mono 2.5W Class D - PAM8302",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5647",
    "revision": "EAGLE Adafruit STEMMA Audio Amp.brd; commit 12d0f77a674d",
    "category": "Audio",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5647"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5647"]["artwork"],
    "backArtwork": assets["adafruit-module-5647"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5647"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp2-3"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp2-1"
      ],
      [
        "jp2-4",
        "x2-2"
      ],
      [
        "jp2-5",
        "x2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5647"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/Adafruit%20STEMMA%20Audio%20Amp.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/Adafruit%20STEMMA%20Audio%20Amp.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5647",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5647",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5647. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -8.091999999999999,
      12.53,
      6.809
    ],
    "backArtworkBounds": [
      -7.0885,
      1.992,
      -4.9765,
      5.374
    ]
  },
  {
    "id": "adafruit-module-1712",
    "sku": "ADA1712",
    "name": "Stereo 2.8W Class D Audio Amplifier - I2C Control AGC - TPA2016",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1712",
    "revision": "EAGLE Adafruit TPA2016D2.brd; commit cad449b53378",
    "category": "Audio",
    "board": {
      "width": 21.59,
      "height": 27.94,
      "color": "#246545",
      "outline": "M8.255 -13.97A2.54 2.54 0 0 1 10.795 -11.43L10.795 11.43A2.54 2.54 0 0 1 8.255 13.97L-8.255 13.97A2.54 2.54 0 0 1 -10.795 11.43L-10.795 -11.43A2.54 2.54 0 0 1 -8.255 -13.97L8.255 -13.97Z"
    },
    "contacts": assets["adafruit-module-1712"]["contacts"],
    "holes": [
      {
        "x": 8.255,
        "y": 11.43,
        "drill": 2.5
      },
      {
        "x": 8.255,
        "y": -11.43,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1712"]["artwork"],
    "backArtwork": assets["adafruit-module-1712"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1712"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1712"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/Adafruit%20TPA2016D2.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/Adafruit%20TPA2016D2.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1712",
      "status": "Official Adafruit stock feed reported 17 available.",
      "sku": "ADA1712",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "17"
    },
    "description": "Adafruit ADA1712. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.441,
      -11.905,
      10.879,
      9.694
    ]
  },
  {
    "id": "adafruit-module-1552",
    "sku": "ADA1552",
    "name": "Stereo 2.1W Class D Audio Amplifier - TPA2012",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1552",
    "revision": "EAGLE Adafruit TS2012 TPA2012 Class D Audio Amp.brd; commit b099d41a3fb4",
    "category": "Audio",
    "board": {
      "width": 23,
      "height": 28,
      "color": "#246545",
      "outline": "M11.5 12.0A2.0 2.0 0 0 1 9.5 14.0L-9.5 14.0A2.0 2.0 0 0 1 -11.5 12.0L-11.5 -12.0A2.0 2.0 0 0 1 -9.5 -14.0L9.5 -14.0A2.0 2.0 0 0 1 11.5 -12.0L11.5 12.0Z"
    },
    "contacts": assets["adafruit-module-1552"]["contacts"],
    "holes": [
      {
        "x": 9,
        "y": 11.5,
        "drill": 2.5
      },
      {
        "x": 9,
        "y": -11.5,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1552"]["artwork"],
    "backArtwork": assets["adafruit-module-1552"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1552"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1552"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/Adafruit%20TS2012%20TPA2012%20Class%20D%20Audio%20Amp.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/Adafruit%20TS2012%20TPA2012%20Class%20D%20Audio%20Amp.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1552",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1552",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1552. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.15,
      -10.85,
      11.14,
      13.53
    ]
  },
  {
    "id": "adafruit-module-3678",
    "sku": "ADA3678",
    "name": "Adafruit I2S Stereo Decoder - UDA1334A Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3678",
    "revision": "EAGLE Adafruit UDA1334 I2S DAC.brd; commit e836025c26c8",
    "category": "Audio",
    "board": {
      "width": 38.1,
      "height": 25.4,
      "color": "#246545",
      "outline": "M16.51 -12.7A2.54 2.54 0 0 1 19.05 -10.16L19.05 10.16A2.54 2.54 0 0 1 16.51 12.7L-16.51 12.7A2.54 2.54 0 0 1 -19.05 10.16L-19.05 -10.16A2.54 2.54 0 0 1 -16.51 -12.7L16.51 -12.7Z"
    },
    "contacts": assets["adafruit-module-3678"]["contacts"],
    "holes": [
      {
        "x": 15.55,
        "y": 0,
        "drill": 2
      },
      {
        "x": 8.55,
        "y": 0,
        "drill": 2
      },
      {
        "x": -16.51,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": -16.51,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": 16.51,
        "y": -10.16,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3678"]["artwork"],
    "backArtwork": assets["adafruit-module-3678"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3678"]["provenance"],
    "internalConnections": [
      [
        "x2-1",
        "jp3-8"
      ],
      [
        "x2-2",
        "x2-4",
        "jp3-7"
      ],
      [
        "x2-3",
        "x2-5",
        "jp3-9"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3678"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/Adafruit%20UDA1334%20I2S%20DAC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/Adafruit%20UDA1334%20I2S%20DAC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3678",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3678",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3678. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -17.464,
      -8.193,
      21.59,
      7.466
    ]
  },
  {
    "id": "adafruit-module-6421",
    "sku": "ADA6421",
    "name": "Adafruit PCM5122 I2S DAC with Line Level Output - HW, I2C or SPI",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6421",
    "revision": "EAGLE Adafruit PCM5122 I2S DAC.brd; commit 5ce8729798ce",
    "category": "Audio",
    "board": {
      "width": 35.56,
      "height": 22.9235,
      "color": "#246545",
      "outline": "M15.24 -11.46175A2.54 2.54 0 0 1 17.78 -8.92175L17.78 8.92175A2.54 2.54 0 0 1 15.24 11.46175L-15.24 11.46175A2.54 2.54 0 0 1 -17.78 8.92175L-17.78 -8.92175A2.54 2.54 0 0 1 -15.24 -11.46175L15.24 -11.46175Z"
    },
    "contacts": assets["adafruit-module-6421"]["contacts"],
    "holes": [
      {
        "x": 15.291,
        "y": 0.03175,
        "drill": 1.4
      },
      {
        "x": 8.291,
        "y": 0.13175,
        "drill": 1.4
      },
      {
        "x": -15.24,
        "y": 8.92175,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": 8.92175,
        "drill": 2.5
      },
      {
        "x": -15.24,
        "y": -8.92175,
        "drill": 2.5
      },
      {
        "x": 15.24,
        "y": -8.92175,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6421"]["artwork"],
    "backArtwork": assets["adafruit-module-6421"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6421"]["provenance"],
    "internalConnections": [
      [
        "jp3-2",
        "jp3-9",
        "x3-2",
        "x3-1"
      ],
      [
        "jp3-8",
        "x3-4",
        "x3-6"
      ],
      [
        "jp3-10",
        "x3-5",
        "x3-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6421"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/Adafruit%20PCM5122%20I2S%20DAC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/Adafruit%20PCM5122%20I2S%20DAC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6421",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6421",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6421. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -16.575,
      -6.28975,
      19.919871,
      6.40925
    ],
    "backArtworkBounds": [
      -3.596,
      -4.96125,
      -0.214,
      -2.84925
    ]
  },
  {
    "id": "adafruit-module-5769",
    "sku": "ADA5769",
    "name": "Adafruit Audio BFF Add-on for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5769",
    "revision": "EAGLE Adafruit Audio BFF PCB.brd; commit cc58e5b14991",
    "category": "Audio",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5769"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5769"]["artwork"],
    "backArtwork": assets["adafruit-module-5769"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5769"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-1c",
        "x1-2"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c",
        "x1-5"
      ],
      [
        "jp3-3",
        "jp3-3c",
        "x1-7"
      ],
      [
        "jp3-4",
        "jp3-4c",
        "x1-3"
      ],
      [
        "jp3-5",
        "jp3-5c",
        "x1-4"
      ],
      [
        "jp3-6",
        "jp3-6c",
        "x1-6",
        "x1-10",
        "x1-g3",
        "x1-g4",
        "x1-g2",
        "x1-g1",
        "u-12-m1",
        "u-12-m2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5769"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/Adafruit%20Audio%20BFF%20PCB.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/Adafruit%20Audio%20BFF%20PCB.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5769",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5769",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5769. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.142,
      -9.880999999999998,
      5.9445,
      9.2325
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-5770",
    "sku": "ADA5770",
    "name": "Adafruit I2S Amplifier BFF Add-On for QT Py and Xiao",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5770",
    "revision": "EAGLE Adafruit I2S Amplifier BFF.brd; commit fe191f0585be",
    "category": "Audio",
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5770"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-5770"]["artwork"],
    "backArtwork": assets["adafruit-module-5770"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5770"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c"
      ],
      [
        "jp3-3",
        "jp3-3c"
      ],
      [
        "jp3-4",
        "jp3-4c"
      ],
      [
        "jp3-5",
        "jp3-5c"
      ],
      [
        "jp3-6",
        "jp3-6c",
        "u-1-m1",
        "u-1-m2"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5770"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/Adafruit%20I2S%20Amplifier%20BFF.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/Adafruit%20I2S%20Amplifier%20BFF.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5770",
      "status": "Official Adafruit stock feed reported 68 available.",
      "sku": "ADA5770",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "68"
    },
    "description": "Adafruit ADA5770. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.263,
      -9.882499999999999,
      5.501,
      3.277
    ],
    "backArtworkBounds": [
      -9.565,
      -9.04,
      9.565,
      9.04
    ]
  },
  {
    "id": "adafruit-module-1381",
    "sku": "ADA1381",
    "name": "VS1053 Codec + MicroSD Breakout - MP3/WAV/MIDI/OGG Play + Record",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1381",
    "revision": "EAGLE Adafruit VS1053 Breakout.brd; commit 61db4e571d89",
    "category": "Audio",
    "board": {
      "width": 27.6352,
      "height": 57.709,
      "color": "#246545",
      "outline": "M11.2776 28.8545A2.54 2.54 0 0 0 13.8176 26.3145L13.8176 -26.3145A2.54 2.54 0 0 0 11.2776 -28.8545L-11.2776 -28.8545A2.54 2.54 0 0 0 -13.8176 -26.3145L-13.8176 26.3145A2.54 2.54 0 0 0 -11.2776 28.8545L-7.7216 28.8545A2.032 2.032 0 0 0 -5.6896 26.8225L3.9624 26.8225A2.032 2.032 0 0 0 5.9944 28.8545L11.2776 28.8545Z"
    },
    "contacts": assets["adafruit-module-1381"]["contacts"],
    "holes": [
      {
        "x": -10.8966,
        "y": 25.0445,
        "drill": 3
      },
      {
        "x": 10.4394,
        "y": 25.0445,
        "drill": 3
      },
      {
        "x": 10.4394,
        "y": -25.3745,
        "drill": 3
      },
      {
        "x": -10.8966,
        "y": -25.3745,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-1381"]["artwork"],
    "backArtwork": assets["adafruit-module-1381"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1381"]["provenance"],
    "internalConnections": [
      [
        "cn1-mt1",
        "cn1-mt2",
        "cn1-6",
        "jp2-5",
        "jp2-9"
      ],
      [
        "cn1-cd1",
        "jp3-16"
      ],
      [
        "cn1-7",
        "jp2-10"
      ],
      [
        "cn1-4",
        "jp2-8",
        "jp3-5"
      ],
      [
        "jp2-3",
        "jp2-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1381"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/Adafruit%20VS1053%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/Adafruit%20VS1053%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1381",
      "status": "Official Adafruit stock feed reported 67 available.",
      "sku": "ADA1381",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "67"
    },
    "description": "Adafruit ADA1381. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -11.0656,
      -25.3475,
      9.0502,
      33.2625
    ]
  },
  {
    "id": "adafruit-module-5768",
    "sku": "ADA5768",
    "name": "Adafruit RP2040 Prop-Maker Feather with I2S Audio Amplifier",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5768",
    "revision": "EAGLE Adafruit Feather RP2040 Prop-Maker.brd; commit 408fa9a40c0a",
    "category": "Audio",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-5768"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      },
      {
        "x": -20.3265,
        "y": 2.89,
        "drill": 0.65
      },
      {
        "x": -20.3265,
        "y": -2.89,
        "drill": 0.65
      },
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5768"]["artwork"],
    "backArtwork": assets["adafruit-module-5768"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-5768"]["provenance"],
    "internalConnections": [
      [
        "jp1-13",
        "x1-1",
        "x1-nc1",
        "x1-nc2",
        "x6-a1b12",
        "x6-b1a12",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "outputs-2",
        "servo-3"
      ],
      [
        "jp1-14",
        "jp1-15",
        "conn1-2"
      ],
      [
        "x1-2",
        "jp3-1"
      ],
      [
        "jp3-3",
        "x6-a4b9",
        "x6-b4a9"
      ],
      [
        "jp3-11",
        "conn1-4"
      ],
      [
        "jp3-12",
        "conn1-3"
      ],
      [
        "x6-b7",
        "x6-a7",
        "d-1-tp"
      ],
      [
        "x6-a6",
        "x6-b6",
        "dplus1-tp"
      ],
      [
        "outputs-3",
        "servo-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5768"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/Adafruit%20Feather%20RP2040%20Prop-Maker.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/Adafruit%20Feather%20RP2040%20Prop-Maker.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5768",
      "status": "Official Adafruit stock feed reported 54 available.",
      "sku": "ADA5768",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "54"
    },
    "description": "Adafruit ADA5768. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -26.6465,
      -10.914,
      17.16,
      7.979
    ],
    "backArtworkBounds": [
      -14.771999999999998,
      -0.929,
      14.3275,
      4.6755
    ]
  },
];
