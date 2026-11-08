// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-bob10160": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SS. Physical source contact JP1.1.",
        "x": -7.62,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.2.",
        "x": -5.08,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.3.",
        "x": -2.54,
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
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact JP1.4.",
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "INT/SQW",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT/SQW. Physical source contact JP1.5.",
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.6.",
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
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.7.",
        "x": 7.62,
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
        "id": "bat1-gnd",
        "number": "BAT1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact BAT1.GND.",
        "x": 0,
        "y": -3.81,
        "size": [
          3.9624,
          3.9624
        ],
        "shape": "rect",
        "connector": "BAT1",
        "back": true,
        "smd": true
      },
      {
        "id": "bat1-pwr-1",
        "number": "BAT1.PWR@1",
        "label": "VBATT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBATT. Physical source contact BAT1.PWR@1.",
        "x": 7.874,
        "y": -3.81,
        "size": [
          3.175,
          3.175
        ],
        "shape": "rect",
        "connector": "BAT1",
        "back": true,
        "smd": true
      },
      {
        "id": "bat1-pwr-2",
        "number": "BAT1.PWR@2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BAT1.PWR@2.",
        "x": -7.874,
        "y": -3.81,
        "size": [
          3.175,
          3.175
        ],
        "shape": "rect",
        "connector": "BAT1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.5\" y=\"-3.75\" width=\"13.0\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.89\" y=\"7.62\" width=\"17.78\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.096\" y=\"-9.144\" width=\"12.192\" height=\"11.684\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "DeadOn RTC - DS3234 Breakout-v11.brd",
      "boardSha256": "9c5d5d32bfddcaa07ed9495b2db79f1760537b809811d5c61fb2c23e5768e8a7",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "JP1",
        "BAT1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/DeadOn_RTC",
      "commit": "c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d",
      "boardURL": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Hardware/DeadOn%20RTC%20-%20DS3234%20Breakout-v11.brd",
      "schematicURL": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Hardware/DeadOn%20RTC%20-%20DS3234%20Breakout-v11.sch",
      "schematicSha256": "e47681e2aee0d5bf9799f013af69a297b82b632f97c112cb297d35bbcfcb0136",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Libraries/Arduino/LICENSE.md",
      "sourceArchiveSha256": "73688f8cc110e3b10f7ad4d117161f3f5becc9a2222f78be4d187a1e9dd97712",
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
  "sparkfun-module-bob16281": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -7.62,
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
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": -7.62,
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
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": -7.62,
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
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": -7.62,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
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
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
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
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
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
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -8.89,
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
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
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
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
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
        "id": "j3-5",
        "number": "J3.5",
        "label": "!EVI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !EVI. Physical source contact J3.5.",
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
        "id": "j3-6",
        "number": "J3.6",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J3.6.",
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
        "id": "j3-7",
        "number": "J3.7",
        "label": "CLKOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLKOUT. Physical source contact J3.7.",
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
        "id": "j3-8",
        "number": "J3.8",
        "label": "CLKOE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLKOE. Physical source contact J3.8.",
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
      },
      {
        "id": "bt2-gnd",
        "number": "BT2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact BT2.GND.",
        "x": 0,
        "y": -7.239,
        "size": [
          8,
          8
        ],
        "shape": "rect",
        "connector": "BT2",
        "back": true,
        "smd": true
      },
      {
        "id": "bt2-pwr-1",
        "number": "BT2.PWR@1",
        "label": "+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$3. Physical source contact BT2.PWR@1.",
        "x": 7.874,
        "y": -7.239,
        "size": [
          3.175,
          3.175
        ],
        "shape": "rect",
        "connector": "BT2",
        "back": true,
        "smd": true
      },
      {
        "id": "bt2-pwr-2",
        "number": "BT2.PWR@2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BT2.PWR@2.",
        "x": -7.874,
        "y": -7.239,
        "size": [
          3.175,
          3.175
        ],
        "shape": "rect",
        "connector": "BT2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-2.54\" y=\"-8.89\" width=\"5.08\" height=\"5.08\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.8\" y=\"0.47\" width=\"3.6\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.51\" y=\"-0.1524\" width=\"1.3604\" height=\"2.8448\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.90625\" y=\"10.00125\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"0.851\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.108\" y=\"4.089\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.877\" y=\"4.089\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.972\" y=\"4.089\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.151\" y=\"4.013\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.011\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.013\" y=\"4.089\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.096\" y=\"-12.573\" width=\"12.192\" height=\"11.684\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>BT2 round housing from manufacturer package circles; finish representative</title><circle cx=\"0.0\" cy=\"-7.239\" r=\"6.0\" fill=\"none\" stroke=\"#87958d\" stroke-width=\".22\"/></g>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_RTC_RV8803.brd",
      "boardSha256": "2127e2c8ebbf97e776a6f41944f2fa848065d341c9c4fa40fc059ee04b2f4d1a",
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
        "BT2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Real_Time_Clock_RV-8803",
      "commit": "3e7ea152fc18804519abb0774bacf88edacfb60f",
      "boardURL": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/Hardware/Qwiic_RTC_RV8803.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/Hardware/Qwiic_RTC_RV8803.sch",
      "schematicSha256": "48bbe12512d7e9c37f51a1e2ec14eccf9f2121252ca029e447787b8e00970fc7",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/LICENSE.md",
      "sourceArchiveSha256": "98fd04a1ee0f476dadb71807410c5f6b52a96b4bae3cec3a97e12ff67d08c45c",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "BT2.PWR@1",
            "net": "N$3",
            "sourceConnectorFunctions": [
              "+"
            ]
          }
        ],
        "reviewWarnings": [],
        "sourceWarnings": []
      },
      "roundHousingReview": [
        {
          "ref": "BT2",
          "package": "BATTCON_12MM",
          "sourceLayer": "51",
          "center": [
            0,
            -7.239
          ],
          "radius": 6,
          "back": true
        }
      ]
    }
  },
  "sparkfun-module-dev15573": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 7.62,
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
        "x": 7.62,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 7.62,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 7.62,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
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
      }
    ],
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0746\" y=\"-1.1\" width=\"4.1492\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.72185\" y=\"4.60375\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.994\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"2.4512\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-2.959\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.826\" y=\"2.0828\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.2484\" y=\"4.0386\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Cryptographic_Co-processor_ATECC508A.brd",
      "boardSha256": "e434d8ba6f9358e1785c73b8faaaa22200054bc3600775f5ceaf881aa56a5023",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "J3",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic",
      "commit": "da869f8ba6f81d4b27afae658ca783c68a12dfaa",
      "boardURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/Hardware/SparkFun_Cryptographic_Co-processor_ATECC508A.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/Hardware/SparkFun_Cryptographic_Co-processor_ATECC508A.sch",
      "schematicSha256": "1cfbea25da41e862917c0aec7864ea17a3e6e17e7e692350b9f129350879ea6d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/LICENSE.md",
      "sourceArchiveSha256": "fba0fbc800198ee4cf3d0e882de5c7a8f20a3645153c6db04db97dc3d89bb027",
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
  "sparkfun-module-dev18077": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 7.62,
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
        "x": 7.62,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 7.62,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 7.62,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
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
      }
    ],
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0746\" y=\"-2.7178\" width=\"4.1492\" height=\"5.4356\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.72185\" y=\"4.60375\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.994\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"4.915\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"3.2132\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-4.1528\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.826\" y=\"2.0828\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.2484\" y=\"4.0386\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Cryptographic_Co-processor_ATECC608A.brd",
      "boardSha256": "c1d0f7dd71764546791af3a52f1598dd16b7a4d418b8af16b97699e9ced71c1d",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "J3",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic",
      "commit": "a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88",
      "boardURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/Hardware/SparkFun_Cryptographic_Co-processor_ATECC608A.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/Hardware/SparkFun_Cryptographic_Co-processor_ATECC608A.sch",
      "schematicSha256": "3137f5da5cb7a93ac16bd43ad5e67544c23dedc0a342a50efc38baeadb2572b5",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/LICENSE.md",
      "sourceArchiveSha256": "350259edc4fab3ab2173c4064b8b5cb3005564666841517e15ba4ffc0d9d7073",
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
