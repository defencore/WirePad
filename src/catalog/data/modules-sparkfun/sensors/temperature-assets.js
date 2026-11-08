// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-sen13314": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "ALERT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT. Physical source contact JP1.5.",
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "ADD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADD0. Physical source contact JP1.6.",
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
      }
    ],
    "artwork": "<rect x=\"-7.62\" y=\"5.08\" width=\"15.24\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.556\" y=\"-1.016\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6\" y=\"-2.07\" width=\"1.2\" height=\"1.7683\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.108\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.499\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.972\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.432\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Digital Temperature Sensor Breakout - TMP102.brd",
      "boardSha256": "d256bbd2224655414d58d246a4b4364e647e6573c030583c132fb5fc44d2c921",
      "sourceBounds": [
        0,
        0,
        15.24,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102",
      "commit": "36ba5a6a268163e38cb3e0a89b786ba80f15c143",
      "boardURL": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/Hardware/Digital%20Temperature%20Sensor%20Breakout%20-%20TMP102.brd",
      "schematicURL": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/Hardware/Digital%20Temperature%20Sensor%20Breakout%20-%20TMP102.sch",
      "schematicSha256": "2523c8d5b553246843b75752e8c7bb018ebcf0d7ded8de17258ff9a5c8e7cd18",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/Digital_Temperature_Sensor_Breakout_-_TMP102/blob/36ba5a6a268163e38cb3e0a89b786ba80f15c143/LICENSE.md",
      "sourceArchiveSha256": "1721b1387fdcf26a0b0fe7544656c95fe5582a76fa5cf6596b25a4a66752998a",
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
  "sparkfun-module-sen10740": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J1.1.",
        "x": -11.43,
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
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U3.OUT to this rail. CAD net: 3.3V. Physical source contact J1.2.",
        "x": -13.97,
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
        "id": "j1-3",
        "number": "J1.3",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact J1.3.",
        "x": -11.43,
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
        "id": "j1-4",
        "number": "J1.4",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact J1.4.",
        "x": -13.97,
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
        "id": "j1-5",
        "number": "J1.5",
        "label": "RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST. Physical source contact J1.5.",
        "x": -11.43,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.6.",
        "x": -13.97,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "DTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DTR. Physical source contact JP1.1.",
        "x": -13.97,
        "y": 10.16,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.2.",
        "x": -11.43,
        "y": 10.16,
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
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.3.",
        "x": -8.89,
        "y": 10.16,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.4.",
        "x": -6.35,
        "y": 10.16,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.5.",
        "x": -3.81,
        "y": 10.16,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": -1.27,
        "y": 10.16,
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
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U3.OUT to this rail. CAD net: 3.3V. Physical source contact JP2.1.",
        "x": 3.81,
        "y": -10.16,
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
        "x": 1.27,
        "y": -10.16,
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
        "label": "PC0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PC0. Physical source contact JP2.3.",
        "x": -1.27,
        "y": -10.16,
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
        "label": "PC1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PC1. Physical source contact JP2.4.",
        "x": -3.81,
        "y": -10.16,
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
        "label": "PC2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PC2. Physical source contact JP2.5.",
        "x": -6.35,
        "y": -10.16,
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
        "label": "PC3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PC3. Physical source contact JP2.6.",
        "x": -8.89,
        "y": -10.16,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.7.",
        "x": -11.43,
        "y": -10.16,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.8.",
        "x": -13.97,
        "y": -10.16,
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
    "artwork": "<rect x=\"-15.24\" y=\"-11.43\" width=\"20.32\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.045\" y=\"-6.045\" width=\"7.01\" height=\"7.01\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.24\" y=\"-6.35\" width=\"5.415\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.24\" y=\"8.89\" width=\"15.24\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.97\" y=\"2.54\" width=\"5.08\" height=\"5.08\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.23\" y=\"3.88\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.39\" y=\"-7.55\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.2324\" y=\"5.5396\" width=\"2.8448\" height=\"1.6104\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.7389\" y=\"2.9137\" width=\"1.1314\" height=\"1.1312\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_IR_Thermometer_Eval-MLX90614.brd",
      "boardSha256": "857d5ac665368b28df0b46e58c7d92bc00d79341546c83c6d7f5bf4d74ca3d5f",
      "sourceBounds": [
        0,
        0,
        30.48,
        22.86
      ],
      "selectedConnectors": [
        "J1",
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "J1.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "LED1",
              "pin": "A",
              "direction": "pas"
            },
            {
              "part": "LED2",
              "pin": "A",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "AVCC",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VCC@1",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VCC@2",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AREF",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "OUT",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/IR_Thermometer_Evaluation_Board-MLX90614/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.sch"
        },
        {
          "number": "JP2.1",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "LED1",
              "pin": "A",
              "direction": "pas"
            },
            {
              "part": "LED2",
              "pin": "A",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "AVCC",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VCC@1",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VCC@2",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AREF",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "OUT",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/IR_Thermometer_Evaluation_Board-MLX90614/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/IR_Thermometer_Evaluation_Board-MLX90614",
      "commit": "afc54826e0842d36211a28420ee916cf09fba23b",
      "boardURL": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.brd",
      "schematicURL": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/Hardware/SparkFun_IR_Thermometer_Eval-MLX90614.sch",
      "schematicSha256": "d819edb62736212babc6a5e193f3c884f8a789216a2ed154ee27c9c43b021f69",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/IR_Thermometer_Evaluation_Board-MLX90614/blob/afc54826e0842d36211a28420ee916cf09fba23b/LICENSE.md",
      "sourceArchiveSha256": "5a33849078f207521a3b4e2ca6f32ee653c0f98afb8f220cc59cc203e7df8dbd",
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
  "sparkfun-module-sen15805": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -5.08,
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
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V.",
        "x": -2.54,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": 0,
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
        "label": "SCL",
        "type": "input",
        "description": "TMP117 I2C serial clock input. CAD net: SCL.",
        "x": 2.54,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 7.62,
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
        "id": "j2-2",
        "number": "J2.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V.",
        "x": 7.62,
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
        "id": "j2-3",
        "number": "J2.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": 7.62,
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "SCL",
        "type": "input",
        "description": "TMP117 I2C serial clock input. CAD net: SCL.",
        "x": 7.62,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -7.62,
        "y": -1.5,
        "size": [
          1.35,
          0.6
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
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V.",
        "x": -7.62,
        "y": -0.5,
        "size": [
          1.35,
          0.6
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
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": -7.62,
        "y": 0.5,
        "size": [
          1.35,
          0.6
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
        "type": "input",
        "description": "TMP117 I2C serial clock input. CAD net: SCL.",
        "x": -7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "INT",
        "type": "open_collector",
        "description": "TMP117 open-drain ALERT / conversion-ready output. Source printed INT. CAD net: !INT.",
        "x": 5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<path d=\"M-1.9812 1.2192A0.328011 0.328011 0 0 0 -1.709419 1.595122L-1.5875 1.612903A0.419867 0.419867 0 0 1 -1.1938 2.0574A0.426911 0.426911 0 0 1 -1.607822 2.496822L-1.709422 2.499363A1.169704 1.169704 0 0 1 -2.8702 1.3208L-2.8702 -0.762A1.181168 1.181168 0 0 1 -1.6764 -1.9304L-1.4986 -1.9304A0.4064 0.4064 0 0 1 -1.0922 -1.524A0.428085 0.428085 0 0 1 -1.529084 -1.1049L-1.638303 -1.099819A0.353204 0.353204 0 0 0 -1.9812 -0.7366L-1.9812 1.2192Z\" fill=\"#edf2eb\" stroke=\"#a6b8ae\" stroke-width=\".08\"/><path d=\"M1.8796 1.016L1.892297 -0.7493A0.262221 0.262221 0 0 0 1.648463 -1.0287A0.484912 0.484912 0 0 1 1.132841 -1.480822A0.400147 0.400147 0 0 1 1.524 -1.889759A1.175633 1.175633 0 0 1 2.7686 -0.7874L2.7686 1.2954A1.181168 1.181168 0 0 1 1.5748 2.4638L1.397 2.4638A0.499354 0.499354 0 0 1 0.8382 2.032A0.457905 0.457905 0 0 1 1.3208 1.6002L1.4351 1.605281A0.521935 0.521935 0 0 0 1.8796 1.016Z\" fill=\"#edf2eb\" stroke=\"#a6b8ae\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0\" y=\"-1.0\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.67435\" y=\"4.24815\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.897\" y=\"5.7786\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.594\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.598\" y=\"5.105\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.756\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9348\" y=\"5.105\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.706\" y=\"-4.877\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<path d=\"M-1.9812 1.2192A0.328011 0.328011 0 0 0 -1.709419 1.595122L-1.5875 1.612903A0.419867 0.419867 0 0 1 -1.1938 2.0574A0.426911 0.426911 0 0 1 -1.607822 2.496822L-1.709422 2.499363A1.169704 1.169704 0 0 1 -2.8702 1.3208L-2.8702 -0.762A1.181168 1.181168 0 0 1 -1.6764 -1.9304L-1.4986 -1.9304A0.4064 0.4064 0 0 1 -1.0922 -1.524A0.428085 0.428085 0 0 1 -1.529084 -1.1049L-1.638303 -1.099819A0.353204 0.353204 0 0 0 -1.9812 -0.7366L-1.9812 1.2192Z\" fill=\"#edf2eb\" stroke=\"#a6b8ae\" stroke-width=\".08\"/><path d=\"M1.8796 1.016L1.892297 -0.7493A0.262221 0.262221 0 0 0 1.648463 -1.0287A0.484912 0.484912 0 0 1 1.132841 -1.480822A0.400147 0.400147 0 0 1 1.524 -1.889759A1.175633 1.175633 0 0 1 2.7686 -0.7874L2.7686 1.2954A1.181168 1.181168 0 0 1 1.5748 2.4638L1.397 2.4638A0.499354 0.499354 0 0 1 0.8382 2.032A0.457905 0.457905 0 0 1 1.3208 1.6002L1.4351 1.605281A0.521935 0.521935 0 0 0 1.8796 1.016Z\" fill=\"#edf2eb\" stroke=\"#a6b8ae\" stroke-width=\".08\"/><rect x=\"8.4582\" y=\"4.3434\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.287\" y=\"-0.1778\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.0894\" y=\"3.0226\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Sparkfun_TMP117_Qwiic.brd",
      "boardSha256": "9196c5492020bb2594d0c5d9a7b672514d58f515563dcc4f2a4b9c7ab03ebce3",
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
      "repo": "sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic",
      "commit": "aa763eaee71d9245e5c31daa6883f6f5c6186f16",
      "boardURL": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/Hardware/Sparkfun_TMP117_Qwiic.sch",
      "schematicSha256": "5e3cf56fdfcc25a93e8df168ca9120950517c5294b5f28dfadacdc029c0724b5",
      "sourceArchiveSha256": "1b70d8aab1ea1fdba2faab5b7c120153149a89175d3097198244e15cd904474d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_High_Precision_Temperature_Sensor_TMP117_Qwiic/blob/aa763eaee71d9245e5c31daa6883f6f5c6186f16/LICENSE.md",
      "pinOverrides": [
        {
          "number": "J4.1",
          "from": "bidirectional",
          "to": "open_collector",
          "reason": "TMP117 datasheet Table5-1 ALERT is an open-drain output; source symbol incorrectly uses io.",
          "source": "https://www.ti.com/lit/ds/symlink/tmp117.pdf",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "!INT",
              "direction": "io"
            }
          ]
        }
      ],
      "roleReview": [],
      "completenessReview": {
        "externalConnectors": [
          "J1",
          "J2",
          "J3",
          "J4"
        ],
        "excludedConfigurationJumpers": [
          "I2C pull-up bridge",
          "JP10 INT pull-up bridge",
          "JP4/JP5 address selection",
          "JP1 power-LED bridge"
        ],
        "excludedMechanical": [
          "JP2/JP3/JP8/JP9 four mounting holes, shown as holes"
        ],
        "evidence": "Matching source board/schematic and exact product front photo. User-facing port set is GND/3.3V/SDA/SCL/INT plus two parallel Qwiic sockets. Configuration solder bridges are controls rather than separate wiring terminals."
      },
      "thermalIsolationSlots": [
        "M-1.9812 1.2192A0.328011 0.328011 0 0 0 -1.709419 1.595122L-1.5875 1.612903A0.419867 0.419867 0 0 1 -1.1938 2.0574A0.426911 0.426911 0 0 1 -1.607822 2.496822L-1.709422 2.499363A1.169704 1.169704 0 0 1 -2.8702 1.3208L-2.8702 -0.762A1.181168 1.181168 0 0 1 -1.6764 -1.9304L-1.4986 -1.9304A0.4064 0.4064 0 0 1 -1.0922 -1.524A0.428085 0.428085 0 0 1 -1.529084 -1.1049L-1.638303 -1.099819A0.353204 0.353204 0 0 0 -1.9812 -0.7366L-1.9812 1.2192Z",
        "M1.8796 1.016L1.892297 -0.7493A0.262221 0.262221 0 0 0 1.648463 -1.0287A0.484912 0.484912 0 0 1 1.132841 -1.480822A0.400147 0.400147 0 0 1 1.524 -1.889759A1.175633 1.175633 0 0 1 2.7686 -0.7874L2.7686 1.2954A1.181168 1.181168 0 0 1 1.5748 2.4638L1.397 2.4638A0.499354 0.499354 0 0 1 0.8382 2.032A0.457905 0.457905 0 0 1 1.3208 1.6002L1.4351 1.605281A0.521935 0.521935 0 0 0 1.8796 1.016Z"
      ],
      "review": "Exact source package rotations, physical contacts and same-net groups reviewed against board/schematic. Source INT direction independently corrected to open-drain from manufacturer datasheet.",
      "photoEvidence": {
        "url": "https://cdn.sparkfun.com/assets/parts/1/4/4/3/0/15805-SparkFun_High_Precision_Temperature_Sensor_-_TMP117__Qwiic_-01.jpg",
        "sha256": "712e7819f195681d44682f6c7b722c2a1dd78c0104bc1725c19699ad33398865"
      },
      "replacesExcludedPopulationVariant": "sparkfun-module-prt08780"
    }
  }
};
