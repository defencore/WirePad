// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-sen13322": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -2.54,
        "y": -24.13,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": 0,
        "y": -24.13,
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
        "label": "SIG",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIG. Physical source contact JP1.3.",
        "x": 2.54,
        "y": -24.13,
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
        "label": "SIG",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIG. Physical source contact JP2.1.",
        "x": 3.6576,
        "y": -26.8986,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -0.0202,
        "y": -26.8986,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.3.",
        "x": -3.698,
        "y": -26.8986,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.2
      }
    ],
    "artwork": "<rect x=\"-6.2202\" y=\"-30.4986\" width=\"12.4\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"-27.178\" width=\"7.62\" height=\"5.588\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4224\" y=\"-19.75\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.121\" y=\"-19.406\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.972\" y=\"-19.406\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Soil_Moisture_Sensor.brd",
      "boardSha256": "818d09fa9cdfc42da19b4c9ab148a0ee322180cda1094d5bd2d87290ad887313",
      "sourceBounds": [
        0,
        0,
        22.86,
        60.96
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Soil_Moisture_Sensor",
      "commit": "f4d72d965d0a72b6b031ec2d08d87dd4d307cd76",
      "boardURL": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/Hardware/SparkFun_Soil_Moisture_Sensor.brd",
      "schematicURL": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/Hardware/SparkFun_Soil_Moisture_Sensor.sch",
      "schematicSha256": "185da51f942a00eec8bd1faeaa5f322c7892caf77adb919f20f6725b86a7fda1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Soil_Moisture_Sensor/blob/f4d72d965d0a72b6b031ec2d08d87dd4d307cd76/LICENSE.md",
      "sourceArchiveSha256": "f53b14a219a09a6c36426ff8b9361c608a07c9dc78e1a164681bbbc79c8bee2d",
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
  "sparkfun-module-sen13676": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -5.08,
        "y": -7.62,
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
        "x": -5.08,
        "y": -5.08,
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
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
        "x": -5.08,
        "y": -2.54,
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
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": -5.08,
        "y": 0,
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
        "label": "!CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS. Physical source contact JP2.1.",
        "x": 5.08,
        "y": 5.08,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.2.",
        "x": 5.08,
        "y": 2.54,
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
        "label": "SDO/ADR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO/ADR. Physical source contact JP2.3.",
        "x": 5.08,
        "y": 0,
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
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.4.",
        "x": 5.08,
        "y": -2.54,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP2.5.",
        "x": 5.08,
        "y": -5.08,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.6.",
        "x": 5.08,
        "y": -7.62,
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
    "artwork": "<rect x=\"-1.42875\" y=\"-2.69875\" width=\"2.8575\" height=\"2.8575\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"-6.067625\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"-4.467125\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"4.026\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2315\" y=\"2.743\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"2.756\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.5965\" y=\"-8.052\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.1115\" y=\"-9.906\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.191\" y=\"2.286\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.0635\" y=\"2.413\" width=\"2.032\" height=\"2.159\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_BME280_Breakout.brd",
      "boardSha256": "40ec150503438dc1be8200f557fa0d89ff1842bc98d29d757f7d38e0d931b3c1",
      "sourceBounds": [
        0,
        0,
        12.7,
        20.32
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_BME280_Breakout_Board",
      "commit": "91f0c754a30c304afdd3717e64423aaae459d84a",
      "boardURL": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/Hardware/SparkFun_BME280_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/Hardware/SparkFun_BME280_Breakout.sch",
      "schematicSha256": "7af5da495178987d748538128477fc1e250d6957fccd4c63435be700c9d7dfab",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_BME280_Breakout_Board/blob/91f0c754a30c304afdd3717e64423aaae459d84a/LICENSE.md",
      "sourceArchiveSha256": "e06f1dc76641075c0abc3de43570bfb90507e746b93c7876f02499cbcd442590",
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
  "sparkfun-module-sen20844": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 7.5946,
        "y": 1.5,
        "size": [
          1.35,
          0.6
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
        "x": 7.5946,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "PICO/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PICO/SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 7.5946,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCLK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 7.5946,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -7.62,
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
        "x": -7.62,
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
        "label": "PICO/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PICO/SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": -7.62,
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
        "label": "SCLK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": -7.62,
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
        "x": -6.35,
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
        "id": "j3-3",
        "number": "J3.3",
        "label": "PICO/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PICO/SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
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
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCLK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
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
        "id": "j3-5",
        "number": "J3.5",
        "label": "POCI/ADDR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: POCI/ADDR. Physical source contact J3.5.",
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
      },
      {
        "id": "j3-6",
        "number": "J3.6",
        "label": "!CS!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS!. Physical source contact J3.6.",
        "x": 6.35,
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
        "id": "j3-7",
        "number": "J3.7",
        "label": "!INT!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT!. Physical source contact J3.7.",
        "x": 8.89,
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
    "artwork": "<rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9446\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"-1.55\" width=\"3.15\" height=\"3.15\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.045\" y=\"-0.8\" width=\"2.8\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.23315\" y=\"-6.8199\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"2.375\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.33\" y=\"-4.42\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.194\" y=\"-4.42\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"3.886\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.4232\" y=\"-5.6392\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"-4.877\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"-3.34\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.343\" y=\"3.2\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.181\" y=\"3.2\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.801\" y=\"-4.877\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.801\" y=\"-3.34\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.7272\" y=\"-6.985\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7272\" y=\"-3.556\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.779\" y=\"-6.858\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Air_Quality_ENS160.brd",
      "boardSha256": "2e5f235f25e8087397cda9b92e623038cecdeb1d2798f5339dfa79942357aba0",
      "sourceBounds": [
        0,
        0,
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
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160",
      "commit": "6e53479ba84b3efeb097c745669291de00012ed7",
      "boardURL": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/Hardware/SparkFun_Air_Quality_ENS160.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/Hardware/SparkFun_Air_Quality_ENS160.sch",
      "schematicSha256": "2b21b2ff563f84449b2f0899737675690e68d38a8bce2cf06421ca7358c57ff1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Indoor_Air_Quality_Sensor-ENS160/blob/6e53479ba84b3efeb097c745669291de00012ed7/License.md",
      "sourceArchiveSha256": "1afaea1c02fb6d3fa591de6dfb7e19d2c09e23be359b5cf2df13305ddf700916",
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
  "sparkfun-module-sen16466": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "!CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS. Physical source contact J2.1.",
        "x": -6.35,
        "y": -11.43,
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
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact J2.2.",
        "x": -3.81,
        "y": -11.43,
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
        "label": "SDO/ADR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO/ADR. Physical source contact J2.3.",
        "x": -1.27,
        "y": -11.43,
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
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 1.27,
        "y": -11.43,
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
        "x": 3.81,
        "y": -11.43,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.6.",
        "x": 6.35,
        "y": -11.43,
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
        "id": "j5-1",
        "number": "J5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J5.1.",
        "x": -7.62,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J5.2.",
        "x": -7.62,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact J5.3.",
        "x": -7.62,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J5.4.",
        "x": -7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J7.1.",
        "x": 7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "smd": true
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J7.2.",
        "x": 7.62,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "smd": true
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact J7.3.",
        "x": 7.62,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "smd": true
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J7.4.",
        "x": 7.62,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -3.81,
        "y": 11.43,
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
        "x": -1.27,
        "y": 11.43,
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
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 1.27,
        "y": 11.43,
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
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 3.81,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.65\" y=\"-1.65\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7272\" y=\"4.064\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.144\" y=\"8.9408\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.00125\" y=\"5.87375\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.804\" y=\"7.569\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"-4.242\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.242\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.391\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"4.648\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"-4.242\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.286\" y=\"-5.3086\" width=\"2.032\" height=\"2.2352\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic Environmental BME680.brd",
      "boardSha256": "d498f766479410a327810df5c45b59f029b97ffcae867a421191dd48abf1dcf5",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J2",
        "J5",
        "J7",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Environmental_Sensor_BME680",
      "commit": "ff6f1f269c195a209b036d0325c8b94deaeae1ab",
      "boardURL": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/Hardware/Qwiic%20Environmental%20BME680.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/Hardware/Qwiic%20Environmental%20BME680.sch",
      "schematicSha256": "64699278216b2388c8fa6c35de73d295a28ba7a94403100a711e6ef61967808f",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Environmental_Sensor_BME680/blob/ff6f1f269c195a209b036d0325c8b94deaeae1ab/License.md",
      "sourceArchiveSha256": "751706dece304bee06b66ee4f67c2663123ab7517ef4499f58de73911964937f",
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
