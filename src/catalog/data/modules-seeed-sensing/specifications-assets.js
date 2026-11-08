// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-grove-bme280-101020193": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.149841,
        "y": 3.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.149841,
        "y": 1.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.149841,
        "y": -0.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.149841,
        "y": -2.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": 5.439838,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": -5.360163,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "spi-1",
        "number": "SPI.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": 15.902,
        "y": -6.3,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-2",
        "number": "SPI.2",
        "label": "SDA_3V3",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. This contact is in the unshifted 3.3 V sensor domain. Source net: SDA_3V3.",
        "x": 15.902,
        "y": -3.76,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-3",
        "number": "SPI.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.902,
        "y": -1.22,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-4",
        "number": "SPI.4",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 15.902,
        "y": 1.32,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-5",
        "number": "SPI.5",
        "label": "SCL_3V3",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. This contact is in the unshifted 3.3 V sensor domain. Source net: SCL_3V3.",
        "x": 15.902,
        "y": 3.86,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-6",
        "number": "SPI.6",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 15.902,
        "y": 6.4,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "interface-1",
        "number": "INTERFACE.1",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 3.71,
        "y": 5.765,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "INTERFACE",
        "back": true,
        "smd": true
      },
      {
        "id": "interface-2",
        "number": "INTERFACE.2",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 2.948,
        "y": 5.765,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "INTERFACE",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.5023,
        "y": 3.852378,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.5023,
        "y": 6.394919,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-mm",
        "number": "ADDR.MM",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 0.408,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-00",
        "number": "ADDR.00",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 1.678,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-11",
        "number": "ADDR.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -0.862,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.449841\" y=\"-6.060162\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.632\" y=\"-7.57\" width=\"2.54\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.54\" y=\"-1.2\" width=\"2.5\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.3605\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.1955\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6245\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"-3.506\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"3.733\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"2.082\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"3.733\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"2.082\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"-5.284\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.354\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.624\" y=\"-7.951\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.44\" y=\"5.13\" width=\"1.778\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Barometer Sensor(BME280) v1.0.brd",
      "boardSha256": "19c9b2219daf04f98681dc225cb90a3287cfa1d6dbb44229641aa12257937dd6",
      "sourceBounds": [
        -20.635,
        -10.2,
        19.565,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "SPI",
        "INTERFACE",
        "GND",
        "VCC",
        "SDA",
        "SCL",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "ADDR"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-bme680-101020513": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.149841,
        "y": 3.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.149841,
        "y": 1.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.149841,
        "y": -0.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.149841,
        "y": -2.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": 5.439838,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": -5.360163,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "spi-1",
        "number": "SPI.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": 15.902,
        "y": -6.3,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-2",
        "number": "SPI.2",
        "label": "SDA_3V3",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. This contact is in the unshifted 3.3 V sensor domain. Source net: SDA_3V3.",
        "x": 15.902,
        "y": -3.76,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-3",
        "number": "SPI.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.902,
        "y": -1.22,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-4",
        "number": "SPI.4",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 15.902,
        "y": 1.32,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-5",
        "number": "SPI.5",
        "label": "SCL_3V3",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. This contact is in the unshifted 3.3 V sensor domain. Source net: SCL_3V3.",
        "x": 15.902,
        "y": 3.86,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-6",
        "number": "SPI.6",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 15.902,
        "y": 6.4,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 3.837,
        "y": 6.4,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 3.075,
        "y": 6.4,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-mm",
        "number": "J3.MM",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 1.17,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-00",
        "number": "J3.00",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 2.44,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-11",
        "number": "J3.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -0.1,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.5023,
        "y": 3.852378,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.5023,
        "y": 6.394919,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.449841\" y=\"-6.060162\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.632\" y=\"-7.57\" width=\"2.54\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.782\" y=\"-1.704\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2335\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.1955\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6245\" y=\"-0.839\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"3.606\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.297\" y=\"-3.633\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"3.733\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.424\" y=\"2.082\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.297\" y=\"-5.157\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"2.082\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.354\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-0.862\" y=\"-7.951\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680).brd",
      "boardSha256": "34e9f2c1f4b5aa02986dd6406d7cdad6a6f68e9b10861d1eeb27933acdd85cdb",
      "sourceBounds": [
        -20.635,
        -10.2,
        19.565,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "SPI",
        "J2",
        "J3",
        "GND",
        "VCC",
        "SDA",
        "SCL",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-bmp280-101020192": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.149841,
        "y": 3.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.149841,
        "y": 1.039838,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.149841,
        "y": -0.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.149841,
        "y": -2.960162,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": 5.439838,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.649841,
        "y": -5.360163,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "spi-1",
        "number": "SPI.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": 15.902,
        "y": -6.3,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-2",
        "number": "SPI.2",
        "label": "SDA_3V3",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. This contact is in the unshifted 3.3 V sensor domain. Source net: SDA_3V3.",
        "x": 15.902,
        "y": -3.76,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-3",
        "number": "SPI.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.902,
        "y": -1.22,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-4",
        "number": "SPI.4",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 15.902,
        "y": 1.32,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-5",
        "number": "SPI.5",
        "label": "SCL_3V3",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. This contact is in the unshifted 3.3 V sensor domain. Source net: SCL_3V3.",
        "x": 15.902,
        "y": 3.86,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "spi-6",
        "number": "SPI.6",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 15.902,
        "y": 6.4,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "SPI",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "interface-1",
        "number": "INTERFACE.1",
        "label": "CS",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CS.",
        "x": 3.71,
        "y": 5.765,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "INTERFACE",
        "back": true,
        "smd": true
      },
      {
        "id": "interface-2",
        "number": "INTERFACE.2",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 2.948,
        "y": 5.765,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "INTERFACE",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.5023,
        "y": 3.852378,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.5023,
        "y": 6.394919,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-mm",
        "number": "ADDR.MM",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output; becomes the I2C address-selection input in I2C mode. Unshifted 3.3 V sensor domain. Source net: SDO.",
        "x": 0.408,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-00",
        "number": "ADDR.00",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 1.678,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      },
      {
        "id": "addr-11",
        "number": "ADDR.11",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": -0.862,
        "y": -7.189,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.449841\" y=\"-6.060162\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.632\" y=\"-7.57\" width=\"2.54\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.79\" y=\"-1.2\" width=\"2.0\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.3225\" y=\"-0.585\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1065\" y=\"-0.585\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.7515\" y=\"-0.585\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.297\" y=\"3.987\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.259\" y=\"3.987\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.551\" y=\"-3.379\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.297\" y=\"2.336\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.037\" y=\"2.336\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.037\" y=\"-4.903\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.259\" y=\"2.336\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.551\" y=\"-5.03\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.005\" y=\"-4.903\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.227\" y=\"-4.903\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.815\" y=\"2.336\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.815\" y=\"-4.903\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.624\" y=\"-7.951\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.44\" y=\"5.13\" width=\"1.778\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Barometer Sensor (BMP280) v1.0.brd",
      "boardSha256": "f5348ea11ab7de30aa6ae84f05ff7f2f96b134700c28019712079aeb7ed9d47c",
      "sourceBounds": [
        -20.635,
        -10.2,
        19.565,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "SPI",
        "INTERFACE",
        "GND",
        "VCC",
        "SDA",
        "SCL",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "ADDR"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-digital-ir-temperature-101020077": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -13.054,
        "y": 3.177,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -13.054,
        "y": 1.177,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -13.054,
        "y": -0.823,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -13.054,
        "y": -2.823,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -16.304,
        "y": 5.977,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -16.304,
        "y": -5.623,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
        "label": "3V",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V. Source net: 3V.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.454\" y=\"-5.923\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0845\" y=\"-5.8555\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.361\" y=\"-5.6015\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.196\" y=\"-0.5215\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.196\" y=\"3.2885\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.021\" y=\"3.479\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.021\" y=\"-0.331\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.735\" y=\"3.479\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.735\" y=\"-5.665\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.735\" y=\"-0.331\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.17\" y=\"-5.665\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.863\" y=\"3.479\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.863\" y=\"-5.665\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.863\" y=\"-0.331\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"14.759\" y=\"2.463\" width=\"1.016\" height=\"0.933\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"15.267\" cy=\"-0.204\" r=\"2.7\" fill=\"#aeb7b4\" stroke=\"#e5e5d8\" stroke-width=\".15\"/><circle cx=\"15.267\" cy=\"-0.204\" r=\".775\" fill=\"#323c3a\" stroke=\"#8c9993\" stroke-width=\".12\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Digital Infrared Temperature Sensor v1.0.brd",
      "boardSha256": "d0fde051028876f05f561593e2dfb67f05a80e4d1f26e7ddee6498b069eaacee",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-hp206c-101020068": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -16.835,
        "y": 5.996,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -16.835,
        "y": -5.896,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "int-1",
        "number": "INT.1",
        "label": "INT1",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: INT1.",
        "x": 1.810494,
        "y": -6.935,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "INT",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.504013,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.509506,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.509506,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.509506,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.320494,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.320494,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.320494,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.320494,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.835\" y=\"-6.05\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.505494\" y=\"-2.715\" width=\"6.2\" height=\"6.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.556494\" y=\"-5.411\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.339506\" y=\"-5.215006\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.174506\" y=\"2.3995\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.174506\" y=\"-1.4105\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.349506\" y=\"2.463\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.349506\" y=\"-5.151506\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.999506\" y=\"2.463\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.999506\" y=\"-5.151506\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.999506\" y=\"-1.347\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.349506\" y=\"-1.347\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.094506\" y=\"-5.151506\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove-Barometer (High-Accuracy) v1.0.brd",
      "boardSha256": "5b0ad001af5d8d0a9c91131d7df623b34d06836da9ecf90c988846ea2474a113",
      "sourceBounds": [
        -20.00549375,
        -10.2,
        20.19450625,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "INT",
        "GND",
        "VCC",
        "SDA",
        "SCL",
        "TP5",
        "TP6",
        "TP7",
        "TP8"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-scd30-101020634": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "SCD30 I2C clock; the sensor can stretch the clock through its open-drain interface. Source net: SCL.",
        "x": -19.9062,
        "y": 2.7754,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -19.9062,
        "y": 0.7754,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -19.9062,
        "y": -1.2246,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -19.9062,
        "y": -3.2246,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -27.4062,
        "y": 5.1754,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -27.4062,
        "y": -5.6246,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.23,
        "y": 9.9776,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "drill": 0.889
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -7.69,
        "y": 9.9776,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": true,
        "drill": 0.889
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "SCD30 I2C clock; the sensor can stretch the clock through its open-drain interface. Source net: SCL.",
        "x": -5.15,
        "y": 9.9776,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": true,
        "drill": 0.889
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -2.61,
        "y": 9.9776,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": true,
        "drill": 0.889
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL",
        "type": "bidirectional",
        "description": "SCD30 I2C clock; the sensor can stretch the clock through its open-drain interface. Source net: SCL.",
        "x": -28.5735,
        "y": 6.3455,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -28.5862,
        "y": 3.8154,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -28.5862,
        "y": -3.8074,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -28.5608,
        "y": -6.3248,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-29.2062\" y=\"-6.3246\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.5\" y=\"8.7076\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8\" y=\"-16\" width=\"35\" height=\"23\" rx=\"2\" fill=\"#4f5355\" stroke=\"#8f9997\" stroke-width=\".3\"/><circle cx=\"-1\" cy=\"-8\" r=\"2.8\" fill=\"#151d1e\" stroke=\"#6e7a75\" stroke-width=\".2\"/><circle cx=\"8\" cy=\"-2\" r=\"2.8\" fill=\"#151d1e\" stroke=\"#6e7a75\" stroke-width=\".2\"/><circle cx=\"17\" cy=\"-8\" r=\"2.8\" fill=\"#151d1e\" stroke=\"#6e7a75\" stroke-width=\".2\"/><rect x=\"20\" y=\"1\" width=\"3.4\" height=\"3.4\" rx=\".5\" fill=\"#142020\" stroke=\"#8b9995\" stroke-width=\".2\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - CO2 & Temperature & Humidity Sensor (SCD30).brd",
      "boardSha256": "c15a75faba1c6faccbab195501e0e763fc3d6c28c5c8cf295220853ec05d0389",
      "sourceBounds": [
        -32.1028,
        -22.096600000000002,
        32.0972,
        22.1034
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "sensorCover": "Representative SCD30 cover silhouette; four underlying carrier header contacts are accessible as underside solder contacts.",
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-scd41-101020952": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -0.378,
        "y": -3,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -0.378,
        "y": -1,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "2.4–5 V module supply input. Source net: VCC.",
        "x": -0.378,
        "y": 1,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -0.378,
        "y": 3,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -7.878,
        "y": -5.5,
        "size": [
          2.1844,
          2.54
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -7.878,
        "y": 5.5,
        "size": [
          2.1844,
          2.54
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "j2-p-1",
        "number": "J2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 3.81,
        "y": 7.874,
        "size": [
          1.6002,
          1.6002
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.0922
      },
      {
        "id": "j2-p-2",
        "number": "J2.P$2",
        "label": "VCC",
        "type": "power_in",
        "description": "2.4–5 V module supply input. Source net: VCC.",
        "x": 1.27,
        "y": 7.874,
        "size": [
          1.6002,
          1.6002
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0922
      },
      {
        "id": "j2-p-3",
        "number": "J2.P$3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -1.27,
        "y": 7.874,
        "size": [
          1.6002,
          1.6002
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0922
      },
      {
        "id": "j2-p-4",
        "number": "J2.P$4",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -3.81,
        "y": 7.874,
        "size": [
          1.6002,
          1.6002
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0922
      }
    ],
    "artwork": "<rect x=\"-5.1\" y=\"-5.1\" width=\"10.2\" height=\"10.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.1882\" y=\"5.4991\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.05\" y=\"-5.05\" width=\"10.1\" height=\"10.1\" rx=\"1.1\" fill=\"#bbc3bf\" stroke=\"#eee6d5\" stroke-width=\".2\"/><rect x=\"-4.6\" y=\"-4.6\" width=\"9.2\" height=\"9.2\" rx=\".9\" fill=\"#292e2f\"/><path d=\"M-2.7 -2.7H2.7V2.7H-2.7Z\" fill=\"#eeeeea\"/>",
    "backArtwork": "<rect x=\"-9.678\" y=\"-6.1\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9812\" y=\"-8.5598\" width=\"1.27\" height=\"2.54\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.7592\" y=\"-8.5598\" width=\"1.27\" height=\"2.54\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.5372\" y=\"-8.5598\" width=\"1.27\" height=\"2.54\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - CO2 & Temperature & Humidity Sensor - SCD41 V1.01.brd",
      "boardSha256": "26345baf1fdb8a15ff17cf57250a010657b27aca90b387d51f865cfafc9cdcef",
      "sourceBounds": [
        -10,
        -12.1,
        10,
        12.1
      ],
      "selectedConnectors": [
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-fsr402-101020553": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "3V3",
        "type": "power_out",
        "description": "Regulated 3.3 V probe bias output from the onboard regulator; do not drive externally. Source net: 3V3.",
        "x": 3.9243,
        "y": 1.3327,
        "size": [
          1.8,
          1.8
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VIN",
        "type": "passive",
        "description": "Force-sensitive resistor sensing node into the amplifier input; the external probe connects between this node and the 3.3 V bias terminal. Source net: VIN.",
        "x": 3.9243,
        "y": -1.2073,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: OUT.",
        "x": -6.3627,
        "y": 3.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: NC.",
        "x": -6.3627,
        "y": 1.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -6.3627,
        "y": -0.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -6.3627,
        "y": -2.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "OUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: OUT.",
        "x": -8.2677,
        "y": 6.4127,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: NC.",
        "x": -8.2677,
        "y": 3.8727,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -8.2677,
        "y": -3.7473,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -8.2677,
        "y": -6.2873,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"0.6743\" y=\"-2.6773\" width=\"6.5\" height=\"5.48\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.3208\" y=\"-6.6683\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.1717\" y=\"4.7617\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9177\" y=\"-7.4303\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6477\" y=\"4.7617\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.3937\" y=\"-7.4303\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6073\" y=\"4.6347\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.2103\" y=\"-7.4303\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.0833\" y=\"4.6347\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6863\" y=\"-7.4303\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5593\" y=\"4.6347\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9023\" y=\"5.1587\" width=\"1.25\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Round Force Sensor (FSR402).brd",
      "boardSha256": "186b24807b5b02e3a0b8ee2c4cb5d04d63346014c22bed0a7d0d7390c341f24f",
      "sourceBounds": [
        -9.987300000000001,
        -10.1873,
        10.012700000000002,
        10.3127
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-vl53l0x-101020532": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "XSHUT",
        "type": "input",
        "description": "Active-low VL53L0X shutdown input in the unshifted sensor domain. Source net: XSHUT.",
        "x": -5.7277,
        "y": 8.3177,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GPIO1",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: GPIO1.",
        "x": -3.1877,
        "y": 8.3177,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "SCL_VCC",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL_VCC.",
        "x": -3.1877,
        "y": 3.0627,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA_VCC.",
        "x": -3.1877,
        "y": 1.0627,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -3.1877,
        "y": -0.9373,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.1877,
        "y": -2.9373,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-ss1",
        "number": "J3.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -6.3107,
        "y": 5.8627,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS1"
      },
      {
        "id": "j3-ss2",
        "number": "J3.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -6.3107,
        "y": -5.7373,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS2"
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL_VCC",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL_VCC.",
        "x": -8.2677,
        "y": 6.4127,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA_VCC.",
        "x": -8.2677,
        "y": 3.8727,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -8.2677,
        "y": -3.7473,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -8.2677,
        "y": -6.2873,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.4607\" y=\"-6.0373\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.9977\" y=\"7.0477\" width=\"5.08\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5273\" y=\"-7.1128\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5273\" y=\"0.5072\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5273\" y=\"4.3172\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6477\" y=\"4.3807\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.5113\" y=\"-3.2393\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5527\" y=\"-7.0493\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6477\" y=\"-7.0493\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6477\" y=\"-3.2393\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.6703\" y=\"-3.2393\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6477\" y=\"0.5707\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6073\" y=\"-7.0493\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7023\" y=\"4.3807\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7023\" y=\"-7.0493\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7023\" y=\"0.5707\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7023\" y=\"-3.2393\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.2127\" y=\"-2.1373\" width=\"2.4\" height=\"4.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Time of Flight Distance Sensor(VL53L0X).brd",
      "boardSha256": "b600d662eef779a401b84056d2ec5cb6f01bba1d9b0c337853a9a6508f142783",
      "sourceBounds": [
        -9.987300000000001,
        -10.1873,
        10.012700000000002,
        10.3127
      ],
      "selectedConnectors": [
        "J1",
        "J3",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-as5600-101020692": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.16,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.16,
        "y": 1.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.16,
        "y": -0.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.16,
        "y": -2.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": 5.45,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "DIR",
        "type": "input",
        "description": "AS5600 direction-select input, shared with the direction switch. Source net: N$5.",
        "x": 3.71,
        "y": 5.892,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 2.44,
        "y": 5.892,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "DIR_HIGH",
        "type": "passive",
        "description": "Direction HIGH selection through the source pull-up resistor; configuration strap terminal. Source net: N$3.",
        "x": 4.98,
        "y": 5.892,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-1",
        "number": "TP5.1",
        "label": "OUT",
        "type": "output",
        "description": "AS5600 analog/PWM angular-position output in the 3.3 V sensor domain. Source net: N$1.",
        "x": 16.41,
        "y": 6.4,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": false,
        "smd": true
      },
      {
        "id": "tp6-1",
        "number": "TP6.1",
        "label": "PGO",
        "type": "input",
        "description": "AS5600 programming-options input; use the sensor programming procedure. Source net: N$2.",
        "x": 16.41,
        "y": -1.22,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp8-1",
        "number": "TP8.1",
        "label": "SCL_3V3",
        "type": "input",
        "description": "Unshifted AS5600-side I2C clock, 3.3 V logic domain. Source net: N$8.",
        "x": 16.41,
        "y": 3.86,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": false,
        "smd": true
      },
      {
        "id": "tp9-1",
        "number": "TP9.1",
        "label": "SDA_3V3",
        "type": "bidirectional",
        "description": "Unshifted AS5600-side I2C data, 3.3 V logic domain. Source net: N$4.",
        "x": 16.41,
        "y": 1.32,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP9",
        "back": false,
        "smd": true
      },
      {
        "id": "tp10-1",
        "number": "TP10.1",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": 16.41,
        "y": -3.76,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP10",
        "back": false,
        "smd": true
      },
      {
        "id": "tp11-1",
        "number": "TP11.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 16.41,
        "y": -6.3,
        "size": [
          2.032,
          1.016
        ],
        "shape": "rect",
        "connector": "TP11",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.46\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.434\" y=\"1.828\" width=\"2.794\" height=\"6.604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.678\" y=\"5.13\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4975\" y=\"-9.0305\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"3.225\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"-4.395\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"0.685\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"-1.855\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"5.765\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.267\" y=\"-6.935\" width=\"2.286\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-5.411\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-2.871\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.6965\" y=\"3.8465\" width=\"1.678\" height=\"0.789\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7645\" y=\"-5.234\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7495\" y=\"-8.409\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7645\" y=\"-0.154\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.7805\" y=\"-8.409\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7645\" y=\"-2.694\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5745\" y=\"-5.234\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5745\" y=\"-2.694\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7645\" y=\"-8.409\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.7335\" y=\"-8.409\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"7.9\" y=\"-2.45\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 12-bit Magnetic Rotary Position Sensor (AS5600).brd",
      "boardSha256": "42a06dbc836e80aee60b6e158060705fd1ce1953b9e288bd8542fcc9e1f7b002",
      "sourceBounds": [
        -20,
        -10.199999999999998,
        20.200000000000003,
        10.300000000000002
      ],
      "selectedConnectors": [
        "J1",
        "JP1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP8",
        "TP9",
        "TP10",
        "TP11"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-digital-pir-101020793": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG",
        "type": "output",
        "description": "Digital PIR motion indication from the onboard output stage; observe the module supply domain. Source net: SIG.",
        "x": -6.3627,
        "y": 3.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: NC.",
        "x": -6.3627,
        "y": 1.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC_IN",
        "type": "power_in",
        "description": "3–5 V module supply input. Source net: VCC_IN.",
        "x": -6.3627,
        "y": -0.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -6.3627,
        "y": -2.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SIG",
        "type": "output",
        "description": "Digital PIR motion indication from the onboard output stage; observe the module supply domain. Source net: SIG.",
        "x": -8.3185,
        "y": 6.4127,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: NC.",
        "x": -8.2677,
        "y": 3.8727,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC_IN",
        "type": "power_in",
        "description": "3–5 V module supply input. Source net: VCC_IN.",
        "x": -8.2677,
        "y": -3.7473,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -8.2423,
        "y": -6.2873,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.5627\" y=\"-4.9373\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2131\" y=\"-9.221\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3881\" y=\"-8.9797\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5019\" y=\"6.4127\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.2512\" y=\"-8.9797\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6327\" y=\"6.3873\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.8641\" y=\"-8.9797\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6327\" y=\"-9.1067\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.0706\" y=\"-9.1067\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.0927\" y=\"6.7937\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.3392\" y=\"2.8897\" width=\"1.3095\" height=\"1.3095\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"3.7973\" cy=\"0.0627\" r=\"4.55\" fill=\"#e4e7e2\" stroke=\"#aab8b8\" stroke-width=\".18\"/><path d=\"M-0.0026999999999999247 0.0627h7.6M3.7973 -3.7373v7.6\" stroke=\"#bac6c6\" stroke-width=\".12\"/><circle cx=\"3.7973\" cy=\"0.0627\" r=\"2.7\" fill=\"none\" stroke=\"#c6ceca\" stroke-width=\".13\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Digital PIR Motion Sensor_v1.0_191009.brd",
      "boardSha256": "d18ce4049f91f796cb0870c773d896af299ca9b83b61eac6c40e8e21ccdd53d1",
      "sourceBounds": [
        -9.987300000000001,
        -10.1873,
        10.012700000000002,
        10.3127
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-amg8833-101020557": {
    "contacts": [
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.16,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.16,
        "y": 1.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.16,
        "y": -0.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.16,
        "y": -2.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-ss1",
        "number": "J5.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": 5.45,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true,
        "caption": "J5.SS1"
      },
      {
        "id": "j5-ss2",
        "number": "J5.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true,
        "caption": "J5.SS2"
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "AD_SELECT",
        "type": "input",
        "description": "AMG8833 I2C address-select input. Source net: AD.",
        "x": -0.608,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "ADDR_HIGH",
        "type": "passive",
        "description": "Address HIGH selection through the source pull-up resistor; configuration strap terminal. Source net: N$6.",
        "x": -1.878,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 0.662,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net 3V3. Source net: 3V3.",
        "x": -0.862,
        "y": -1.22,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA3",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd4-t",
        "number": "GND4.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND4",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc1-t",
        "number": "VCC1.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA4",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd1-t",
        "number": "GND1.T",
        "label": "!INT",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: !INT.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND1",
        "back": true,
        "smd": true
      },
      {
        "id": "scl1-t",
        "number": "SCL1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL1",
        "back": true,
        "smd": true
      },
      {
        "id": "scl2-t",
        "number": "SCL2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL2",
        "back": true,
        "smd": true
      },
      {
        "id": "scl3-t",
        "number": "SCL3.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL3",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.46\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.53\" y=\"-3.95\" width=\"11.6\" height=\"8.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.894\" y=\"-2.6805\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.894\" y=\"3.479\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.894\" y=\"0.939\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.524\" y=\"-3.544\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"-3.544\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-3.544\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.524\" y=\"3.695\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.524\" y=\"-1.385\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"1.155\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"-1.385\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"3.695\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"1.155\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-1.385\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"3.695\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"-5.83\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.683\" y=\"-5.83\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-5.83\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.286\" y=\"-5.83\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.53\" y=\"-3.95\" width=\"11.6\" height=\"8\" rx=\".55\" fill=\"#b4bab3\" stroke=\"#ece7d8\" stroke-width=\".2\"/><rect x=\"12.13\" y=\"-1.95\" width=\"2.7\" height=\"2.8\" rx=\".15\" fill=\"#463b4a\" stroke=\"#dbd2be\" stroke-width=\".18\"/>",
    "backArtwork": "<rect x=\"-2.64\" y=\"-9.729\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Infrared Array Sensor (AMG8833).brd",
      "boardSha256": "b31934ef3f11ea113a66d8b9fed38ff02753c91b02f13cf4e9dc98f912f7f0ef",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J5",
        "JP1",
        "SDA3",
        "GND4",
        "VCC1",
        "SDA4",
        "SCL",
        "GND1",
        "SCL1",
        "SCL2",
        "SCL3"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-compass-v2-101020492": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "HSCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: HSCL.",
        "x": -3.175,
        "y": 3.05,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "HSDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: HSDA.",
        "x": -3.175,
        "y": 1.05,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "+5V",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: +5V.",
        "x": -3.175,
        "y": -0.95,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.175,
        "y": -2.95,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -6.425,
        "y": 5.85,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true,
        "caption": "J2.SS1"
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -6.425,
        "y": -5.75,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true,
        "caption": "J2.SS2"
      },
      {
        "id": "j1-mm",
        "number": "J1.MM",
        "label": "CSB",
        "type": "input",
        "description": "Sensor chip-select / interface-selection input in the unshifted sensor domain. Source net: CSB.",
        "x": 2.54,
        "y": -6.681,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-00",
        "number": "J1.00",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 3.81,
        "y": -6.681,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-11",
        "number": "J1.11",
        "label": "+3V3",
        "type": "power_out",
        "description": "Onboard regulated sensor rail / test output; do not drive externally. Source net +3V3. Source net: +3V3.",
        "x": 1.27,
        "y": -6.681,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "int-p-1",
        "number": "INT.P$1",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: INT.",
        "x": -3.175,
        "y": 8.305,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "INT",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "drdy-p-1",
        "number": "DRDY.P$1",
        "label": "DRDY",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: DRDY.",
        "x": -5.969,
        "y": 8.305,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "DRDY",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "HSCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: HSCL.",
        "x": -8.255,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "HSDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: HSDA.",
        "x": -8.255,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "+5V",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: +5V.",
        "x": -8.255,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -8.255,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.575\" y=\"-6.05\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"6.2095\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"3.0345\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.4445\" y=\"-7.189\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"3.098\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.207\" y=\"-7.697\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"6.273\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.953\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.6035\" y=\"-7.697\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.905\" y=\"3.098\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.905\" y=\"-7.57\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.8735\" y=\"-7.697\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.905\" y=\"6.273\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.905\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.477\" y=\"-7.697\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.919\" y=\"-0.73\" width=\"1.56\" height=\"1.56\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"0.508\" y=\"-7.443\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.858\" y=\"7.416\" width=\"1.778\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.064\" y=\"7.416\" width=\"1.778\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 3-Axis Digitial Compass v2.0.brd",
      "boardSha256": "20baf3f00d45e6e15c83f5cbd8614ee13a5f47b867b1a217bc35992d4693eb5a",
      "sourceBounds": [
        -10,
        -10.2,
        10,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "J1",
        "INT",
        "DRDY",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-adxl335-101020051": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.81,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "XOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: XOUT.",
        "x": -1.27,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "YOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: YOUT.",
        "x": 1.27,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "ZOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: ZOUT.",
        "x": 3.81,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "ST",
        "type": "input",
        "description": "Sensor setting / self-test control input; follow the manufacturer control sequence. Source net: ST.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      }
    ],
    "footprintPads": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.81,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "XOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: XOUT.",
        "x": -1.27,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "YOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: YOUT.",
        "x": 1.27,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "ZOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: ZOUT.",
        "x": 3.81,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "ST",
        "type": "input",
        "description": "Sensor setting / self-test control input; follow the manufacturer control sequence. Source net: ST.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-3",
        "number": "P2.P$1",
        "label": "XOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: XOUT.",
        "x": -1.27,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P2",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "P3.P$1",
        "label": "YOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: YOUT.",
        "x": 1.27,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P3",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-5",
        "number": "P4.P$1",
        "label": "ZOUT",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: ZOUT.",
        "x": 3.81,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P4",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "P5.P$1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -6.35,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P5",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "P6.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.81,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P6",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-6",
        "number": "P7.P$1",
        "label": "ST",
        "type": "input",
        "description": "Sensor setting / self-test control input; follow the manufacturer control sequence. Source net: ST.",
        "x": 6.35,
        "y": -7.493,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "P7",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-7.62\" y=\"-7.62\" width=\"15.24\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.8105\" y=\"4.2545\" width=\"4.191\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.604\" y=\"6.7945\" width=\"3.048\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.604\" y=\"-2.0955\" width=\"3.048\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.5405\" y=\"1.105\" width=\"2.921\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"-1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"-1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 3-Axis Analog Accelerometer v1.1.brd",
      "boardSha256": "8773404528a2219c39caa5023ba85a91911fba617857fcf339cb0d82e229e013",
      "sourceBounds": [
        -10,
        -12.1,
        10,
        12.1
      ],
      "selectedConnectors": [
        "J1",
        "P2",
        "P3",
        "P4",
        "P5",
        "P6",
        "P7"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-d7s-101021096": {
    "contacts": [
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -10.16,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -10.16,
        "y": 1.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.16,
        "y": -0.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.16,
        "y": -2.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-ss1",
        "number": "J3.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": 5.45,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS1"
      },
      {
        "id": "j3-ss2",
        "number": "J3.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -17.66,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS2"
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "INT1",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: INT1.",
        "x": 15.902,
        "y": 7.67,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "INT2",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: INT2.",
        "x": 15.902,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": 15.902,
        "y": 2.59,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": 15.902,
        "y": 0.05,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "SET",
        "type": "input",
        "description": "Sensor setting / self-test control input; follow the manufacturer control sequence. Source net: SET.",
        "x": 15.902,
        "y": -2.49,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.902,
        "y": -5.03,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-7",
        "number": "J1.7",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": 15.902,
        "y": -7.57,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.514\" y=\"-4.95\" width=\"11.4\" height=\"10.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.46\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.632\" y=\"-8.84\" width=\"2.54\" height=\"17.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.313\" y=\"6.4\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.989\" y=\"6.4\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.662\" y=\"6.4\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.281\" y=\"-9.221\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.821\" y=\"-9.1575\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.196\" y=\"-1.22\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.196\" y=\"2.59\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "D7S Vibration Sensor.brd",
      "boardSha256": "1819e0a32c15a22927f8e760aba2fe22b6a4c8a3efb265357b763085924183da",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J3",
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-gesture-paj7620-101020083": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock / SPI clock into the sensor. Grove-side contacts use the module supply domain. Source net: SCL.",
        "x": 0.1,
        "y": -2.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C data / SPI SDI depending on the selected interface. Observe the bus pull-up and module supply limits. Source net: SDA.",
        "x": 0.1,
        "y": -0.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net: VCC.",
        "x": 0.1,
        "y": 1.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 0.1,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -7.4,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded socket retention contact in the source board.",
        "x": -7.4,
        "y": 5.45,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "int-1",
        "number": "INT.1",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt / data-ready output; observe the source sensor logic domain and pull-up configuration. Source net: INT.",
        "x": -6.477,
        "y": -8.459,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "INT",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-2.6\" y=\"-1.45\" width=\"5.2\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.747\" y=\"-9.729\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.5433\" y=\"0.1516\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.5306\" y=\"-1.982\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5086\" y=\"-6.7699\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.2866\" y=\"4.1521\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"-6.6175\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.0612\" y=\"4.1775\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6134\" y=\"-6.6429\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6134\" y=\"-2.0836\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9116\" y=\"2.2598\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9116\" y=\"-3.4425\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2639\" y=\"4.2156\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"4.2156\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.254\" y=\"4.2156\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.254\" y=\"-6.6556\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8448\" y=\"4.241\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.27\" y=\"4.2156\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.8161\" y=\"-6.6429\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6134\" y=\"1.0406\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.4196\" y=\"4.241\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6\" y=\"-1.45\" width=\"5.2\" height=\"3\" rx=\".25\" fill=\"#333039\" stroke=\"#7e7381\" stroke-width=\".15\"/><rect x=\"-2.2\" y=\"-.95\" width=\"1.7\" height=\"2\" rx=\".12\" fill=\"#58435d\"/><rect x=\".5\" y=\"-.95\" width=\"1.7\" height=\"2\" rx=\".12\" fill=\"#322c42\"/>",
    "backArtwork": "<rect x=\"-9.2\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Gesture v1.0.brd",
      "boardSha256": "1dccfa39c54d51f1b8d290f7bff1e2a761ecc65a24e9aca7082c045d6f915e6a",
      "sourceBounds": [
        -10,
        -10.2,
        10,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "INT"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  },
  "seeed-grove-gsr-101020052": {
    "contacts": [
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Ground-side electrode terminal, shared with module ground. Source net: GND.",
        "x": 7.35,
        "y": -7.735,
        "size": [
          1.3,
          1.3
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "IN",
        "type": "passive",
        "description": "Electrode sensing terminal into the input resistor/amplifier network; connect the source electrode lead. Source net: IN.",
        "x": 5.35,
        "y": -7.735,
        "size": [
          1.3,
          1.3
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SIG",
        "type": "output",
        "description": "Analog sensor output; read with an ADC appropriate for the source voltage domain. Source net: SIG.",
        "x": -3,
        "y": 5.08,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical contact is unconnected in the exact manufacturer schematic; leave open. Source net: NC.",
        "x": -1,
        "y": 5.08,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": 1,
        "y": 5.08,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 3,
        "y": 5.08,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"2.88\" width=\"10.0\" height=\"5.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.35\" y=\"-9.335\" width=\"6.0\" height=\"4.7\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.2\" y=\"-3.7789\" width=\"4.4\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.02\" y=\"4.75\" width=\"3.2\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"-3.937\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"-2.413\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"-0.889\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"0.635\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.366\" y=\"-4.572\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.715\" y=\"-4.572\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.366\" y=\"-1.397\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.715\" y=\"-1.397\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"-8.001\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"-6.35\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-8.001\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.127\" y=\"-6.35\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Exact manufacturer board and schematic connector nets, external functions and wiki operating supply reviewed. CAD revision is explicit; the sales offer does not guarantee warehouse PCB revision.",
      "format": "EAGLE XML",
      "boardFile": "Grove - GSR v1.0.brd",
      "boardSha256": "9d1e369b1b8bf62badc7c7a7d24158d9463219fbccbd5041c95eed7e2afe9203",
      "sourceBounds": [
        -10,
        -12.1,
        10,
        12.1
      ],
      "selectedConnectors": [
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "All external connector/fixture/configuration contacts explicitly selected; panel copies and fiducials excluded.",
        "Types reviewed against source schematic net destinations, chip functions and wiki operating supply; library IO defaults do not establish the external electrical role.",
        "Exact module-package contour selected separately from adjacent panel copies where available."
      ]
    }
  }
};
