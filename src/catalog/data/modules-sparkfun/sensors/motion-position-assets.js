// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-sen12916": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -2.54,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": 0,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
        "x": 2.54,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 5.08,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-4.572\" y=\"-5.842\" width=\"9.144\" height=\"9.144\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"7.62\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.366\" y=\"-9.144\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.309\" y=\"-1.626\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.404\" y=\"-1.626\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-8.039\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_HMC6343_Breakout.brd",
      "boardSha256": "87e79e00a8f71ae02e3255256ca4000722a8a15b6d10e4f1c345897089e28f36",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/HMC6343_Breakout",
      "commit": "fbf992ea2d4b75a3d542096c5980e1a0421aec73",
      "boardURL": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/Hardware/SparkFun_HMC6343_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/Hardware/SparkFun_HMC6343_Breakout.sch",
      "schematicSha256": "cc28528e9a158387ccbc73a1eb87aacca92fb5620cd0dd4b8f936caf5ef6262c",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/HMC6343_Breakout/blob/fbf992ea2d4b75a3d542096c5980e1a0421aec73/LICENSE.md",
      "sourceArchiveSha256": "ff870f9d8dbcd35106bc89b33d9a2bd702439b16f6ec0ee7d62223aeacc9cf62",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen09269": {
    "contacts": [
      {
        "id": "sl1-1",
        "number": "SL1.1",
        "label": "ST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ST. Physical source contact SL1.1.",
        "x": -7.62,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "sl1-2",
        "number": "SL1.2",
        "label": "ZOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ZOUT. Physical source contact SL1.2.",
        "x": -7.62,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "sl1-3",
        "number": "SL1.3",
        "label": "YOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: YOUT. Physical source contact SL1.3.",
        "x": -7.62,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "sl1-4",
        "number": "SL1.4",
        "label": "XOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XOUT. Physical source contact SL1.4.",
        "x": -7.62,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "sl1-5",
        "number": "SL1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SL1.5.",
        "x": -7.62,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "sl1-6",
        "number": "SL1.6",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SL1.6.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "SL1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-8.89\" y=\"-7.62\" width=\"2.54\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.238\" y=\"-2.0\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.406\" y=\"-5.245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"4.521\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.115\" y=\"-2.388\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.102\" y=\"1.295\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "ADXL335_Breakout.brd",
      "boardSha256": "8e0987ccbae9df81317d1b221de2d5590153391457542fdc88e6347270fb739e",
      "sourceBounds": [
        0,
        0,
        17.78,
        15.24
      ],
      "selectedConnectors": [
        "SL1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ADXL335_Breakout",
      "commit": "a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb",
      "boardURL": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/Hardware/ADXL335_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/Hardware/ADXL335_Breakout.sch",
      "schematicSha256": "7cd8bea17f3135075f3308b630ac80a09b08f6d00c2d84b423d863ae29309c2c",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ADXL335_Breakout/blob/a6bd15dc1c323079e7c0a6c2453a8c9bb4c61abb/README.md",
      "sourceArchiveSha256": "ebf7671f8f9df85a0d20cb54c39b7d7dd2c60f1f33d050ac4f17b559f8cd4ff7",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen09836": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -8.89,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.2.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP1.3.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "INT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT1. Physical source contact JP1.4.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "INT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT2. Physical source contact JP1.5.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SDO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO. Physical source contact JP1.6.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.7.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.8.",
        "x": 8.89,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-10.16\" y=\"5.08\" width=\"20.32\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.3984\" y=\"-1.9826\" width=\"5.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5\" y=\"-6.661\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.505\" y=\"-4.674\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.3944\" y=\"-4.674\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "ADXL345_Breakout.brd",
      "boardSha256": "c24922728d0d5e47a2ae2fc88ac5c1f9433176839e0dfac97392f58ebb3ae5ba",
      "sourceBounds": [
        0,
        0,
        20.32,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ADXL345_Breakout",
      "commit": "8e83a624bcaea0a3071885c58634b56fbefa346d",
      "boardURL": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/Hardware/ADXL345_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/Hardware/ADXL345_Breakout.sch",
      "schematicSha256": "1ca358d24cc7b226e3a95ddc1944b6dc33b06dbd7d4242354fbf29ee530c4f7f",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ADXL345_Breakout/blob/8e83a624bcaea0a3071885c58634b56fbefa346d/README.md",
      "sourceArchiveSha256": "09b5a4ce697992d85ada0aef7f1012909fe90fe0a50ad483f10e52150657c881",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen11446": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "!CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$4. Physical source contact JP1.1.",
        "x": -5.08,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$3. Physical source contact JP1.2.",
        "x": -5.08,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$2. Physical source contact JP1.3.",
        "x": -5.08,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact JP1.4.",
        "x": -5.08,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP2.1.",
        "x": 5.08,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": 5.08,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "INT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$7. Physical source contact JP2.3.",
        "x": 5.08,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "INT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$8. Physical source contact JP2.4.",
        "x": 5.08,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"3.81\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.85\" y=\"-1.75\" width=\"3.45\" height=\"3.25\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "ADXL362_BOB.brd",
      "boardSha256": "d09bcd9b3f5fb96fd6b279078b6b5690e303aea894f37246e88407defeeb6949",
      "sourceBounds": [
        0,
        0,
        12.7,
        10.16
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ADXL362_Breakout",
      "commit": "59a85587537e4fc45d4ad3c78782bf165ba9caac",
      "boardURL": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/Hardware/ADXL362_BOB.brd",
      "schematicURL": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/Hardware/ADXL362_BOB.sch",
      "schematicSha256": "262e1630e12ecce9eb104d25ffb46801346bfe350f72d1b9b5325698809ac5a1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ADXL362_Breakout/blob/59a85587537e4fc45d4ad3c78782bf165ba9caac/README.md",
      "sourceArchiveSha256": "b8114c02281c57dda7bd262120dfe6fec3cc1a7069748f3b9fe5b25f7fea1f47",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen19921": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -1.5,
        "y": 4.445,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": -0.5,
        "y": 4.445,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 0.5,
        "y": 4.445,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 1.5,
        "y": 4.445,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-1",
        "number": "TP1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact TP1.1.",
        "x": -0.9525,
        "y": 8.5725,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-1",
        "number": "TP2.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact TP2.1.",
        "x": 0.9525,
        "y": 8.5725,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-1",
        "number": "TP3.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact TP3.1.",
        "x": 2.8575,
        "y": 8.5725,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-1",
        "number": "TP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP5.1.",
        "x": -2.8575,
        "y": 8.5725,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact J2.1.",
        "x": -2.54,
        "y": -4.445,
        "size": [
          1.2,
          1.2
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 2.54,
        "y": -4.445,
        "size": [
          1.2,
          1.2
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 0.7
      }
    ],
    "artwork": "<rect x=\"-3.0\" y=\"4.795\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7554\" y=\"-2.3269\" width=\"3.508\" height=\"3.381\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.647341\" y=\"2.5226\" width=\"0.762\" height=\"1.77\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0313\" y=\"1.7606\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0313\" y=\"-1.389\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.778341\" y=\"0.2874\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.9478\" y=\"2.2534\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1604\" y=\"2.2758\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.754\" y=\"-3.552\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.778\" y=\"4.98475\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.6764\" y=\"1.9304\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.brd",
      "boardSha256": "53ddddc25b526c1e9a228a907645d9451730aefda561665834a3b841b9a6f0e1",
      "sourceBounds": [
        0,
        0,
        7.62,
        19.05
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP5",
        "J2",
        "J4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA",
      "commit": "a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07",
      "boardURL": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/Hardware/SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/Hardware/SparkFun_Magnetometer_MMC5983MA_Qwiic_Micro.sch",
      "schematicSha256": "98a86e5ea8b3414cf5abc84ba761188d53e7c07390b189abc1e16883e4b705eb",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Qwiic_Magnetometer-MMC5983MA/blob/a6d2ec7928ca7a622ed40d157ed361ef2d9f5c07/license.md",
      "sourceArchiveSha256": "6de38cc21973bb89d742e522ad2d01ebf16cb2fb7e238604f1a2dbd9f36d9b5a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen13963": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 7.62,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J1.2.",
        "x": 5.08,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 2.54,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 0,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "SA0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SA0. Physical source contact J1.5.",
        "x": -2.54,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "!CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS. Physical source contact J1.6.",
        "x": -5.08,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 7.62,
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
        "label": "ADC1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADC1. Physical source contact J2.2.",
        "x": 5.08,
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
        "id": "j2-3",
        "number": "J2.3",
        "label": "ADC2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADC2. Physical source contact J2.3.",
        "x": 2.54,
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "ADC3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADC3. Physical source contact J2.4.",
        "x": 0,
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
        "id": "j2-5",
        "number": "J2.5",
        "label": "INT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT1. Physical source contact J2.5.",
        "x": -2.54,
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
        "id": "j2-6",
        "number": "J2.6",
        "label": "INT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT2. Physical source contact J2.6.",
        "x": -5.08,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-1.6242\" y=\"-1.6524\" width=\"3.352\" height=\"3.3774\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.261\" y=\"-3.34\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.708\" y=\"1.854\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"-0.94\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.991\" y=\"-2.007\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.334\" y=\"0.635\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0\" y=\"-1.508\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_LIS3DH-Breakout.brd",
      "boardSha256": "dbb8693c545a98e21b53b401b2a105d8f26fa58efb095179618de399185d22a5",
      "sourceBounds": [
        0,
        0,
        22.86,
        12.7
      ],
      "selectedConnectors": [
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/LIS3DH_Breakout",
      "commit": "a57ba3b3d98e85724a43635a34a181869db26e82",
      "boardURL": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/Hardware/SparkFun_LIS3DH-Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/Hardware/SparkFun_LIS3DH-Breakout.sch",
      "schematicSha256": "608a2e8fa43f4c341934c99c83c4ae71109b547eacc7fc48c5b7d3338ff8f218",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/LIS3DH_Breakout/blob/a57ba3b3d98e85724a43635a34a181869db26e82/LICENSE.md",
      "sourceArchiveSha256": "7f5d49fe31df8de13e7a0230dd51af512d6be8d662a822f100953bdb146c41ca",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen12589": {
    "contacts": [
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP1.4.",
        "x": 0.635,
        "y": 5.08,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP1.3.",
        "x": -4.445,
        "y": 5.08,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.5.",
        "x": -4.445,
        "y": 7.62,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": 0.635,
        "y": 7.62,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.2.",
        "x": 0.635,
        "y": 2.54,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.1.",
        "x": -4.445,
        "y": 2.54,
        "size": [
          3.17,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP2.4.",
        "x": -4.755,
        "y": 5.08,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP2.3.",
        "x": 0.945,
        "y": 5.08,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.5.",
        "x": 0.945,
        "y": 7.62,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.6.",
        "x": -4.755,
        "y": 7.62,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.2.",
        "x": -4.755,
        "y": 2.54,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.1.",
        "x": 0.945,
        "y": 2.54,
        "size": [
          1.9,
          1.02
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.969\" y=\"1.27\" width=\"6.604\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.818\" y=\"-5.437\" width=\"3.254\" height=\"3.254\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.667\" y=\"-8.0772\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.6576\" y=\"2.9996\" width=\"2.8448\" height=\"1.6104\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8194\" y=\"-3.494\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1214\" y=\"-3.494\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.055\" y=\"-0.673\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-1.194\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.0288\" y=\"-3.3024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.753\" y=\"-0.673\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"0.457\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.893\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.115\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.581\" y=\"-7.431\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.405\" y=\"1.27\" width=\"5.0\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "RedBot Accelerometer.brd",
      "boardSha256": "48929265fd322f1736e2bd13750406356aa4dffc7e5ae36d74118337187153f4",
      "sourceBounds": [
        0,
        0,
        13.97,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/RedBot_Accelerometer",
      "commit": "dc04b82d3abcb1f428d3d7b37406e565d15d90bc",
      "boardURL": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/Hardware/RedBot%20Accelerometer.brd",
      "schematicURL": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/Hardware/RedBot%20Accelerometer.sch",
      "schematicSha256": "97abd2727389e7aa8a0205b92bf87d4629ff0ef6544b0580dcbf9f11db366a61",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/RedBot_Accelerometer/blob/dc04b82d3abcb1f428d3d7b37406e565d15d90bc/README.md",
      "sourceArchiveSha256": "1ffa5752e3da6cdfd8a477b015dbe9400d32b67668764684c8d2bf1cba4374b6",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen14571": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 11.43,
        "y": 7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": 11.43,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 11.43,
        "y": 2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 11.43,
        "y": 0,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT. Physical source contact J1.5.",
        "x": 11.43,
        "y": -2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "TRIG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRIG. Physical source contact J1.6.",
        "x": 11.43,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -11.43,
        "y": 7.62,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
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
        "id": "j2-3",
        "number": "J2.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.3.",
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J2.4.",
        "x": -11.43,
        "y": 0,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.5.",
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
        "id": "j2-6",
        "number": "J2.6",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact J2.6.",
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -1.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": -0.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": 0.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": 1.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 1.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": 0.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": -0.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": -1.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.0\" y=\"-12.22\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"7.97\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7526\" y=\"-1.6891\" width=\"3.508\" height=\"3.381\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"3.645\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"-4.229\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"3.632\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"-4.242\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.7178\" y=\"6.604\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1722\" y=\"6.604\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.524\" y=\"-8.636\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.2192\" y=\"-11.176\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_MLX90393_Magnetometer.brd",
      "boardSha256": "7abddbb07fe1208bada10c2d68c684235389f156c33723e4ed917e093b3c0f5f",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Magnetometer_MLX90393",
      "commit": "9167ef00efc6b20c69a5dd715c359d926beadd56",
      "boardURL": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/Hardware/Qwiic_MLX90393_Magnetometer.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/Hardware/Qwiic_MLX90393_Magnetometer.sch",
      "schematicSha256": "acba7b6ce666b33f419dc1fc0ddf62176113bbf2099a5b473f66e02aa4ff70a1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Magnetometer_MLX90393/blob/9167ef00efc6b20c69a5dd715c359d926beadd56/LICENSE.md",
      "sourceArchiveSha256": "a798a738937baafefb059a28b63c0b4b5069c51b20d6677bcaad9c3f3ff279da",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-sen22857": {
    "contacts": [
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.1.",
        "x": -8.89,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J6.2.",
        "x": -6.35,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "SCL/SCK/RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK/RX. I2C serial clock / source-listed alternate function. Physical source contact J6.3.",
        "x": -3.81,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "SDA/MISO/TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MISO/TX. I2C serial data / source-listed alternate function. Physical source contact J6.4.",
        "x": -1.27,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-5",
        "number": "J6.5",
        "label": "ADDR/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR/MOSI. Physical source contact J6.5.",
        "x": 1.27,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-6",
        "number": "J6.6",
        "label": "!CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS. Physical source contact J6.6.",
        "x": 3.81,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-7",
        "number": "J6.7",
        "label": "PS0/WAKE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PS0/WAKE. Physical source contact J6.7.",
        "x": 6.35,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-8",
        "number": "J6.8",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J6.8.",
        "x": 8.89,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J7.1.",
        "x": 6.35,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J7.2.",
        "x": 8.89,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.2.",
        "x": -3.81,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.3.",
        "x": -1.27,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL/SCK/RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK/RX. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 1.27,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "SDA/MISO/TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MISO/TX. I2C serial data / source-listed alternate function. Physical source contact J1.5.",
        "x": 3.81,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.6.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "!BOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !BOOT. Physical source contact J5.1.",
        "x": -13.97,
        "y": 5.08,
        "size": [
          1.6,
          1.6
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.95
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "PS1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PS1. Physical source contact J8.1.",
        "x": -6.35,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "PS0/WAKE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PS0/WAKE. Physical source contact J8.2.",
        "x": -8.89,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 10.16,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": 10.16,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA/MISO/TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MISO/TX. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": 10.16,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL/SCK/RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK/RX. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": 10.16,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -10.16,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
        "x": -10.16,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "SDA/MISO/TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MISO/TX. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": -10.16,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "SCL/SCK/RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK/RX. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": -10.16,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -3.81,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": -1.27,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA/MISO/TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MISO/TX. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": 1.27,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL/SCK/RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK/RX. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": 3.81,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"10.51\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.76\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.7\" y=\"-2.0\" width=\"5.4\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.414\" y=\"5.8928\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"-4.66\" width=\"3.2\" height=\"1.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.84275\" y=\"-5.74675\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.512\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.972\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.074\" y=\"9.728\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.121\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.424\" y=\"-5.944\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.074\" y=\"4.648\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.163\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.512\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.258\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.448\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.185\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.375\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.47\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"10.949941\" y=\"-3.8608\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.787641\" y=\"2.4003\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.0076\" y=\"5.334\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.0076\" y=\"2.794\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_VR_IMU_Breakout_BNO086_QWIIC.brd",
      "boardSha256": "cb5e165424218a7223aaf036eec194ec1d27f2969a2d06520b417f170d81a13e",
      "sourceBounds": [
        0,
        0,
        30.48,
        25.4
      ],
      "selectedConnectors": [
        "J6",
        "J7",
        "J1",
        "J5",
        "J8",
        "J4",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC",
      "commit": "fc8ed693a5193c8faec3098f29d206dea171958e",
      "boardURL": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/Hardware/SparkFun_VR_IMU_Breakout_BNO086_QWIIC.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/Hardware/SparkFun_VR_IMU_Breakout_BNO086_QWIIC.sch",
      "schematicSha256": "58a8b4f77dd4a1bae4a6c7a1797188a07cd05d1fa7d53091966c0a4484a0d95f",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_VR_IMU_Breakout_BNO086_QWIIC/blob/fc8ed693a5193c8faec3098f29d206dea171958e/LICENSE.md",
      "sourceArchiveSha256": "18946756659f7fb10a02e5ad9d599a9036b30c3bc8b4f453fa6ee37aea02bd64",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  }
};
