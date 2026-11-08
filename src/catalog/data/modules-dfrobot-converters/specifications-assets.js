// Original CAD-derived illustrations and retained source evidence.
// Attribution and manufacturer references remain in each specification/provenance.
export default {
  "dfrobot-gravity-gp8403-dfr0971": {
    "contacts": [
      {
        "id": "p2-4",
        "number": "P2.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.665,
        "y": -2.987,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-3",
        "number": "P2.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.665,
        "y": -0.989,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "C",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.665,
        "y": 1.009,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "D",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.665,
        "y": 3.007,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "VOUT1",
        "type": "output",
        "description": "Controlled analog voltage output channel 1. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -12.420706,
        "y": -5.089978,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -12.420706,
        "y": -0.009976,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "VOUT0",
        "type": "output",
        "description": "Controlled analog voltage output channel 0. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -12.420706,
        "y": 5.070026,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.415000\" y=\"-5.737000\" width=\"6.5\" height=\"11.494\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.165000\" y=\"-4.237000\" width=\"1.4\" height=\"8.494\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.665\" y=\"6.606999999999999\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"-16.420706\" y=\"-7.589978\" width=\"8.0\" height=\"15.160004\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-15.520706\" y=\"-7.389978\" width=\"1.0\" height=\"14.760004\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.555982\" y=\"-2.371035\" width=\"4.0\" height=\"4.81\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-2.403982\" y=\"-11.663335\" width=\"2.4969\" height=\"2.4969\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"10.9\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8403</text><rect x=\"-3.000000\" y=\"7.050000\" width=\"6\" height=\"5.5\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-2.200000\" y=\"8.150000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-2.150000\" y=\"8.550000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.500000\" y=\"8.150000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.450000\" y=\"8.550000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.200000\" y=\"8.150000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.250000\" y=\"8.550000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"6.300000000000001\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">A0 A1 A2</text><circle cx=\"14.0\" cy=\"-10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"-10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"12.3\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR0971</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_cad_V1.0.zip",
      "cadSha256": "8cca4f12cb902a5d4d0fdf37fd8e5bb702420e44877133a9e20737eeac8fcc4c",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_schematics_V1.0.pdf",
      "schematicSha256": "4424a74069c374e21e3f6811bc5641092c9a29a24ae39c1ce0ebf4f16fccf709",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR0971/DFR0971_Main_01.jpg",
      "photoSha256": "a28c44643493f1ebcb9cf6846b7d51927524ae85089760c56b0ea965255cd72e",
      "sourceBounds": [
        34.37558127141112,
        -14.16883598145141,
        69.37558239141143,
        12.83116589854948
      ],
      "componentEnvelopes": [
        {
          "x": 1.444018,
          "y": 0.033965,
          "width": 4.0,
          "height": 4.81,
          "layer": "细实线"
        },
        {
          "x": -1.155532,
          "y": -10.414885,
          "width": 2.4969,
          "height": 2.4969,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR0971",
        "url": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_stpfile_V1.0.zip",
        "sha256": "405e7f062b7dc0c09e189c08a6f4439a35a5057dc062b0ee981d77dbf7b89eab",
        "stepFiles": [
          "DFR0971_gp8403-dac-module_stpfile_V1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR0971_gp8403-dac-module_stpfile_V1.0.stp",
            "sha256": "c48ffedec49b95acdf41b3efba78e6302c6e33efd9c227f68fea8c840fa00655",
            "bytes": 11729045,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8302-dfr0972": {
    "contacts": [
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. This is separate from the 18–24V VIN screw-terminal input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 10.028,
        "y": -3.013,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 10.028,
        "y": -1.03,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 10.028,
        "y": 0.952,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 10.028,
        "y": 2.934,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "18–24V analog current-stage power input, upstream of the schematic reverse-polarity diode. Do not apply this voltage to the I2C VCC contact. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.198523,
        "y": -9.959935,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.198523,
        "y": -4.874693,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "VOUT",
        "type": "output",
        "description": "Controlled analog current output. Observe the source range, load and control-mode requirements; this is not a host power input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.198523,
        "y": 4.879921,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.198523,
        "y": 9.96,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.778000\" y=\"-5.763000\" width=\"6.5\" height=\"11.447\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.528000\" y=\"-4.263000\" width=\"1.4\" height=\"8.447\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"14.028\" y=\"6.534000000000001\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"-17.198523\" y=\"-12.459935\" width=\"8.0\" height=\"10.085242000000001\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.298523\" y=\"-12.259935\" width=\"1.0\" height=\"9.685241999999999\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-17.198523\" y=\"2.379921\" width=\"8.0\" height=\"10.080079000000001\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.298523\" y=\"2.579921\" width=\"1.0\" height=\"9.680079\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"2.089100\" y=\"6.166000\" width=\"3.653\" height=\"5.8744\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-1.610300\" y=\"-0.145300\" width=\"3.4927\" height=\"2.728\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-3.550000\" y=\"-10.350000\" width=\"4.1\" height=\"4.7\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"13.4\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8302</text><circle cx=\"14.0\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"-12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"14.0\" cy=\"12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR0972</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_cad_V1.0.zip",
      "cadSha256": "58d658b22e629458ca3fc7b3e2b26d310a3bc4b7c60f4afd151bc7fd31547a8d",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_schematics_V1.0.pdf",
      "schematicSha256": "9331b9156d99bd739771e2feb0363d9d3d6f48e89b5c20f6dbc763137b97d04e",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR0972/DFR0972_Main_01.jpg",
      "photoSha256": "2516e174aea43826d52b917ee37acd5464c53945f37afcdca2fa6d03de72cfa1",
      "sourceBounds": [
        44.8463,
        -63.8751,
        79.8463,
        -31.8751
      ],
      "componentEnvelopes": [
        {
          "x": 3.9156,
          "y": 9.1032,
          "width": 3.653,
          "height": 5.8744,
          "layer": "小器件轮廓"
        },
        {
          "x": 0.13605,
          "y": 1.2187,
          "width": 3.4927,
          "height": 2.728,
          "layer": "小器件轮廓"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR0972",
        "url": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_stpfile_V1.0.zip",
        "sha256": "6b4a9090d380ea6563bc899c66d03eaf561f142477b8bba7e060c393e2221fc2",
        "stepFiles": [
          "DFR0972_gp8302-dac-module_stpfile_V1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR0972_gp8302-dac-module_stpfile_V1.0.stp",
            "sha256": "88ece7b984f61cb24be2507496914da321e3060200afc4e3571d5d8a9fd4339e",
            "bytes": 7174820,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8512-dfr1035": {
    "contacts": [
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": -2.997,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": -0.999,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "C",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": 0.999,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "D",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": 2.997,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "VOUT",
        "type": "output",
        "description": "Controlled analog voltage output. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.139989,
        "y": -2.539893,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.139989,
        "y": 2.540143,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.425000\" y=\"-5.747000\" width=\"6.5\" height=\"11.494\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.175000\" y=\"-4.247000\" width=\"1.4\" height=\"8.494\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.675\" y=\"6.5969999999999995\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"-17.139989\" y=\"-5.039893\" width=\"8.0\" height=\"10.080036\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.239989\" y=\"-4.839893\" width=\"1.0\" height=\"9.680036\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-1.000000\" y=\"-2.510200\" width=\"4.1001\" height=\"5.1003\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-6.327200\" y=\"-0.755000\" width=\"2.7142\" height=\"4.6699\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"10.9\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8512</text><rect x=\"-3.000000\" y=\"-12.700000\" width=\"6\" height=\"3.8\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-1.100000\" y=\"-11.850000\" width=\"2.2\" height=\"1.8\" rx=\"0.1\" fill=\"#252c31\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"-13.600000000000001\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">RANGE</text><circle cx=\"-14.01\" cy=\"-10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"12.3\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1035</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_cad_1.0.zip",
      "cadSha256": "f4b5856bd1d5a85da5202d19c0d2b76adba4ab6259a6679e69315168ab6dd74f",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_schematics_1.0.pdf",
      "schematicSha256": "77b1a5a71afee9b0544977b31535f9a6de30ed1524f03ae6b8ed72a039e49239",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR1035/DFR1035_Main_01.jpg",
      "photoSha256": "57612898284c1a9f35227ee6ce11f198a2e2613081a732aef071d16e0811a8e6",
      "sourceBounds": [
        -37.9441,
        -18.2171,
        -2.9441,
        8.7829
      ],
      "componentEnvelopes": [
        {
          "x": 1.05005,
          "y": 0.03995,
          "width": 4.1001,
          "height": 5.1003,
          "layer": "细实线"
        },
        {
          "x": -4.9701,
          "y": 1.57995,
          "width": 2.7142,
          "height": 4.6699,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1035",
        "url": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_stpfile_1.0.zip",
        "sha256": "73776b39250eb2a77b1842d8129301b9ea4a2ca48bcb620fa5bf401c7037fb76",
        "stepFiles": [
          "DFR1035_gp8512-dac_stpfile_1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1035_gp8512-dac_stpfile_1.0.stp",
            "sha256": "6288f2966490230455b4a6530aa65e9118280eef6e86c8b88eeb73dabd0feebc",
            "bytes": 4322586,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8101s-dfr1036": {
    "contacts": [
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.827,
        "y": -2.026,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.827,
        "y": 0,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "D",
        "type": "input",
        "description": "PWM duty-cycle input for the documented converter channel. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.827,
        "y": 2.026,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "VOUT",
        "type": "output",
        "description": "Controlled analog voltage output. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.140137,
        "y": -2.539972,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.140137,
        "y": 2.540063,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.577000\" y=\"-4.776000\" width=\"6.5\" height=\"9.552\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.327000\" y=\"-3.276000\" width=\"1.4\" height=\"6.552\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.827\" y=\"5.6259999999999994\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">PWM</text><rect x=\"-17.140137\" y=\"-5.039972\" width=\"8.0\" height=\"10.080035\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.240137\" y=\"-4.839972\" width=\"1.0\" height=\"9.680035\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-1.340100\" y=\"-3.170200\" width=\"4.1001\" height=\"5.1003\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-6.327200\" y=\"-1.415100\" width=\"2.7141\" height=\"4.67\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-0.900100\" y=\"5.450000\" width=\"2.43\" height=\"3.41\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"10.9\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8101S</text><rect x=\"-3.000000\" y=\"-12.700000\" width=\"6\" height=\"3.8\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-1.100000\" y=\"-11.850000\" width=\"2.2\" height=\"1.8\" rx=\"0.1\" fill=\"#252c31\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"-13.600000000000001\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">RANGE</text><circle cx=\"-14.01\" cy=\"10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"12.3\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1036</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_cad_1.0.zip",
      "cadSha256": "bd1781be95fa4025688aa9c56bc630ec3d842592a5579d636eeb43cf403b2e40",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_schematics_1.0.pdf",
      "schematicSha256": "edc88facbf21f02ce6acbd91882547d9d2f7e486579d91c4fd60cde6aa62b9d4",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR1036/DFR1036_Main_01.jpg",
      "photoSha256": "31de0d476e846dd2f58a55fdbb95430f4a4e9c436e89bac439ba3a3274e92182",
      "sourceBounds": [
        -42.0901,
        -10.3999,
        -7.0901,
        16.6001
      ],
      "componentEnvelopes": [
        {
          "x": 0.70995,
          "y": -0.62005,
          "width": 4.1001,
          "height": 5.1003,
          "layer": "细实线"
        },
        {
          "x": -4.97015,
          "y": 0.9199,
          "width": 2.7141,
          "height": 4.67,
          "layer": "细实线"
        },
        {
          "x": 0.3149,
          "y": 7.155,
          "width": 2.43,
          "height": 3.41,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1036",
        "url": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_stpfile_1.0.zip",
        "sha256": "5adf4654c295e5c79724979173403945a0cde1698229c2a6723b7b3916d607c4",
        "stepFiles": [
          "DFR1036_gp8101s-dac_stpfile_1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1036_gp8101s-dac_stpfile_1.0.stp",
            "sha256": "43b75853caf330abcab2adee9a08749973cdf939d771d11ea6c6d81f41719b41",
            "bytes": 4578647,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8501-dfr1037": {
    "contacts": [
      {
        "id": "p3-3",
        "number": "P3.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": -7.316,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p3-2",
        "number": "P3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": -5.29,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p3-1",
        "number": "P3.1",
        "label": "D1",
        "type": "input",
        "description": "PWM duty-cycle input for output channel 1. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": -3.264,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": 3.274,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": 5.3,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "D0",
        "type": "input",
        "description": "PWM duty-cycle input for output channel 0. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.817,
        "y": 7.326,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "VOUT1",
        "type": "output",
        "description": "Controlled analog voltage output channel 1. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.090634,
        "y": -5.059945,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.090634,
        "y": 0.020089,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p2-3",
        "number": "P2.3",
        "label": "VOUT0",
        "type": "output",
        "description": "Controlled analog voltage output channel 0. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.090634,
        "y": 5.100089,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.567000\" y=\"-10.066000\" width=\"6.5\" height=\"9.552\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.317000\" y=\"-8.566000\" width=\"1.4\" height=\"6.552\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.817\" y=\"0.33599999999999985\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">PWM</text><rect x=\"10.567000\" y=\"0.524000\" width=\"6.5\" height=\"9.552\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.317000\" y=\"2.024000\" width=\"1.4\" height=\"6.552\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.817\" y=\"10.926\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">PWM</text><rect x=\"-17.090634\" y=\"-7.559945\" width=\"8.0\" height=\"15.160034\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.190634\" y=\"-7.359945\" width=\"1.0\" height=\"14.760034\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.246900\" y=\"-2.440000\" width=\"3.9001\" height=\"5.0002\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-6.636500\" y=\"-6.497300\" width=\"3.453\" height=\"4.5142\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-6.636500\" y=\"1.113000\" width=\"3.453\" height=\"4.5142\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"13.4\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8501</text><rect x=\"-3.000000\" y=\"10.300000\" width=\"6\" height=\"3.8\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-1.100000\" y=\"11.150000\" width=\"2.2\" height=\"1.8\" rx=\"0.1\" fill=\"#252c31\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"9.399999999999999\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">RANGE</text><circle cx=\"-14.01\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1037</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_cad_1.0.zip",
      "cadSha256": "3e2eb395e262738335e374609b8535996deee6d76eb2fcbf4869cc7bde2a8aac",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_schematics_1.0.pdf",
      "schematicSha256": "76523c0802713f62592764a68561ca66062a5eab088ba7c5bae4888204027d2f",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR1037/DFR1037_Main_01.jpg",
      "photoSha256": "141574b2bde1a65f4baae647057372d4ed888519a2125b1d395b02ef9133834d",
      "sourceBounds": [
        -38.7403,
        -22.8591,
        -3.7403,
        9.1409
      ],
      "componentEnvelopes": [
        {
          "x": 3.19695,
          "y": 0.0601,
          "width": 3.9001,
          "height": 5.0002,
          "layer": "细实线"
        },
        {
          "x": -4.91,
          "y": -4.2402,
          "width": 3.453,
          "height": 4.5142,
          "layer": "细实线"
        },
        {
          "x": -4.91,
          "y": 3.3701,
          "width": 3.453,
          "height": 4.5142,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1037",
        "url": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_stpfile_1.0.zip",
        "sha256": "58770fa606cb432e453ebed799f0d2546ed8b563df0c72b7486ab6d712273daf",
        "stepFiles": [
          "DFR1037_gp8501-2-channel-dac_stpfile_1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1037_gp8501-2-channel-dac_stpfile_1.0.stp",
            "sha256": "2db89f402c80544f3bf8a2c3cb4f61e28afa9ef2a18eb23748d02da338dcd93c",
            "bytes": 5021330,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8211s-dfr1071": {
    "contacts": [
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": -2.997,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": -0.999,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "C",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": 0.999,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "D",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 9.675,
        "y": 2.997,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "VOUT",
        "type": "output",
        "description": "Controlled analog voltage output. Output range depends on the manufacturer converter configuration; this is not a host supply input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.110107,
        "y": -2.53995,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -13.110107,
        "y": 2.540049,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"10.425000\" y=\"-5.747000\" width=\"6.5\" height=\"11.494\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.175000\" y=\"-4.247000\" width=\"1.4\" height=\"8.494\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"13.675\" y=\"6.5969999999999995\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"-17.110107\" y=\"-5.039950\" width=\"8.0\" height=\"10.079999\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-16.210107\" y=\"-4.839950\" width=\"1.0\" height=\"9.679998999999999\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.700100\" y=\"-0.430200\" width=\"4.1001\" height=\"5.1004\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-5.627200\" y=\"-0.195000\" width=\"2.7141\" height=\"4.6699\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"10.9\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8211S</text><circle cx=\"-14.01\" cy=\"-10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"-10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"10.0\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-14.01\" cy=\"10.0\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"12.3\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1071</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_cad_1.0.zip",
      "cadSha256": "7cfdaa7e6798ab7268923424b2b503bdad146e63240ebcd078503549063768a3",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_schematics_1.0.pdf",
      "schematicSha256": "e73bc49e53b49970214b711a6b96bdab75c85cd7a23bfbb456abbfe64754fdd7",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR1071/DFR1071_Main_01.jpg",
      "photoSha256": "5fb2ccc7e5c46e69e2558e3a4cc35a587a02e42c75b3fe63ae15c4f39d7a4ac1",
      "sourceBounds": [
        -38.7403,
        -5.8278,
        -3.7403,
        21.1722
      ],
      "componentEnvelopes": [
        {
          "x": 1.34995,
          "y": 2.12,
          "width": 4.1001,
          "height": 5.1004,
          "layer": "细实线"
        },
        {
          "x": -4.27015,
          "y": 2.13995,
          "width": 2.7141,
          "height": 4.6699,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1071",
        "url": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_stpfile_1.0.zip",
        "sha256": "31752a1ffa6598c07b64d7bce54e96c6fd9de2b9510e8133e9ec50b81a1c4441",
        "stepFiles": [
          "DFR1071_gp8211s-dac_stpfile_1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1071_gp8211s-dac_stpfile_1.0.stp",
            "sha256": "3e2c553320cc79ff394a67f3efbfa112bc0faef061f03794c13a2253bc458d7b",
            "bytes": 4449215,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-ads1115-0-10v-dfr1184": {
    "contacts": [
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Selectable UART TX output in UART mode. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": -10.054752,
        "y": -3.293303,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "C/R",
        "type": "input",
        "description": "I2C serial clock input. Selectable UART RX input in UART mode. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": -10.054752,
        "y": -1.059903,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": -10.054752,
        "y": 1.173497,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": -10.054752,
        "y": 3.406897,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "p2-3",
        "number": "P2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": 13.52094,
        "y": -5.080043,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "right"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "AIN2",
        "type": "input",
        "description": "0–10V analog voltage input channel 2, measured relative to the analog terminal ground. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": 13.52094,
        "y": -4.1e-05,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "right"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "AIN1",
        "type": "input",
        "description": "0–10V analog voltage input channel 1, measured relative to the analog terminal ground. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": 13.52094,
        "y": 5.079961,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "right"
      }
    ],
    "artwork": "<rect x=\"-17.304752\" y=\"-6.043303\" width=\"6.5\" height=\"12.200199999999999\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"-15.954752\" y=\"-4.543303\" width=\"1.4\" height=\"9.200199999999999\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"-14.054752\" y=\"7.006897\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C/UART</text><rect x=\"9.520940\" y=\"-7.580043\" width=\"8.0\" height=\"15.160004\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"15.620940\" y=\"-7.380043\" width=\"1.0\" height=\"14.760004\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.379998\" y=\"0.279997\" width=\"2.96\" height=\"2.96\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-7.427202\" y=\"-9.347203\" width=\"2.8544\" height=\"2.8544\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-2.753802\" y=\"-5.283803\" width=\"2.7076\" height=\"2.7076\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"13.4\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">ADS1115</text><rect x=\"-3.000000\" y=\"8.250000\" width=\"6\" height=\"5.5\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-2.200000\" y=\"9.350000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-2.150000\" y=\"9.750000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.500000\" y=\"9.350000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.450000\" y=\"9.750000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.200000\" y=\"9.350000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.250000\" y=\"9.750000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"7.5\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">A0 A1 A2</text><circle cx=\"-15.0\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"-12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"-12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1184</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_cad_1.0.zip",
      "cadSha256": "5112152f8deb4b88c5e99805bd756eb26dfdc20ef1d0d2dae0cffd58f87d3d9b",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_schematics_1.0.pdf",
      "schematicSha256": "358947d0f12e1b17ed63dda391847b673e24dc8aa011da7ec11a57c5b1e840c9",
      "photoURL": "https://dfimg.dfrobot.com/enshop/image/data/DFR1184/DFR1184_260212 (1).jpg",
      "photoSha256": "d05c68ab8a8874d95877f6c92475b406357818e41fed52263e413e22973f6956",
      "sourceBounds": [
        1575.166901689168,
        -2.460103078305664,
        1612.166901689168,
        29.53989692169439
      ],
      "componentEnvelopes": [
        {
          "x": 2.859998,
          "y": 1.759997,
          "width": 2.96,
          "height": 2.96,
          "layer": "细实线"
        },
        {
          "x": -6.000002,
          "y": -7.920003,
          "width": 2.8544,
          "height": 2.8544,
          "layer": "细实线"
        },
        {
          "x": -1.400002,
          "y": -3.930003,
          "width": 2.7076,
          "height": 2.7076,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1184",
        "url": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_stpfile_1.0.zip",
        "sha256": "78831a73092c360412a1d3abe92cafd27b71d42c3d2b7be44327cf0948f7ecb5",
        "stepFiles": [
          "DFR1184_2-ch-15bit-0-10v-adc_stpfile_1.0.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1184_2-ch-15bit-0-10v-adc_stpfile_1.0.stp",
            "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "bytes": 0,
            "format": "empty manufacturer file",
            "validStep": false
          }
        ],
        "validStep": false,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8600-dfr1229": {
    "contacts": [
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.278,
        "y": -9.216,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.278,
        "y": -7.218,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "C",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.278,
        "y": -5.22,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "D",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.278,
        "y": -3.222,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.443,
        "y": 5.88,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.443,
        "y": 7.872,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "D",
        "type": "input",
        "description": "PWM duty-cycle input for the documented converter channel. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 11.443,
        "y": 9.865,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT",
        "type": "output",
        "description": "Controlled analog voltage/current output. Observe the source range, load and control-mode requirements; this is not a host power input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -14.9,
        "y": -2.418332,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -14.9,
        "y": 2.418362,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"12.028000\" y=\"-11.966000\" width=\"6.5\" height=\"11.494\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"15.778000\" y=\"-10.466000\" width=\"1.4\" height=\"8.494\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"15.278\" y=\"0.37800000000000056\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"12.193000\" y=\"3.130000\" width=\"6.5\" height=\"9.485\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"15.943000\" y=\"4.630000\" width=\"1.4\" height=\"6.485\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"15.443\" y=\"13.465\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">PWM</text><rect x=\"-18.900000\" y=\"-4.918332\" width=\"8.0\" height=\"9.836694\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-18.000000\" y=\"-4.718332\" width=\"1.0\" height=\"9.436694\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-1.749500\" y=\"3.713200\" width=\"3.6323\" height=\"5.4\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-2.200000\" y=\"-6.825500\" width=\"4.4\" height=\"4.2\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><text x=\"0\" y=\"13.4\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8600</text><rect x=\"-3.000000\" y=\"-15.208000\" width=\"6\" height=\"5.5\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-2.200000\" y=\"-14.108000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-2.150000\" y=\"-13.708000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.500000\" y=\"-14.108000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.450000\" y=\"-13.708000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.200000\" y=\"-14.108000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.250000\" y=\"-13.708000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"-15.958\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">A0 A1 A2</text><circle cx=\"-15.5\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.5\" cy=\"-12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.5\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.5\" cy=\"12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1229</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_cad_V1.0.zip",
      "cadSha256": "bb5058e88fc4ec1f7d12fb727eaff57afc948b370228617d93406b6bba2aecc3",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_schematics_V1.0.pdf",
      "schematicSha256": "fad6a5afb071ec60fd187b1c5e445e3d3eec3af6f6a237f5c8eab58d59991235",
      "photoURL": "https://dfimg.dfrobot.com/enshop/image/data/DFR1229/DFR1229_Main_01.jpg",
      "photoSha256": "f9becd778924b84ae8d17a48929e7866a06f322611f869b0d2edc054ec5a15f9",
      "sourceBounds": [
        1574.6669,
        3.9158,
        1612.6669,
        35.9158
      ],
      "componentEnvelopes": [
        {
          "x": 0.06665,
          "y": 6.4132,
          "width": 3.6323,
          "height": 5.4,
          "layer": "细实线层"
        },
        {
          "x": 0.0,
          "y": -4.7255,
          "width": 4.4,
          "height": 4.2,
          "layer": "细实线层"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1229",
        "url": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_stpfile_V1.0.zip",
        "sha256": "cf99b82db79703537808bf580d61899cd5e93300afb620723f3aac773161678f",
        "stepFiles": [
          "DFR1229_3D_STP/DFR1229.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1229_3D_STP/DFR1229.stp",
            "sha256": "772ced2df8f88065dd47e8fea2bd3056832b61034674929b74dbc7f2490109e2",
            "bytes": 13460009,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  },
  "dfrobot-gravity-gp8630n-dfr1230": {
    "contacts": [
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 12.948,
        "y": -9.198,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 12.948,
        "y": -7.2,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "C",
        "type": "input",
        "description": "I2C serial clock input. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 12.948,
        "y": -5.202,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "D",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 12.948,
        "y": -3.204,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "-",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 13.112,
        "y": 5.897,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 13.112,
        "y": 7.89,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "D",
        "type": "input",
        "description": "PWM duty-cycle input for the documented converter channel. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 13.112,
        "y": 9.883,
        "size": [
          2.08,
          0.8
        ],
        "smd": true,
        "shape": "rect",
        "side": "right",
        "metalColor": "#b9b8a0"
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT",
        "type": "output",
        "description": "Controlled analog voltage/current output. Observe the source range, load and control-mode requirements; this is not a host power input. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -16.89,
        "y": -2.41893,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Anchor is the visible screw contact center. Native export uses selected reference lands at the wire termination, not hidden PCB solder tails.",
        "x": -16.89,
        "y": 2.408907,
        "size": [
          2.8,
          2.8
        ],
        "smd": true,
        "shape": "circle",
        "screwSlot": true,
        "metalColor": "#c6c9bd",
        "side": "left"
      }
    ],
    "artwork": "<rect x=\"13.698000\" y=\"-11.948000\" width=\"6.5\" height=\"11.494\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"17.448000\" y=\"-10.448000\" width=\"1.4\" height=\"8.494\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"16.948\" y=\"0.39599999999999946\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"13.862000\" y=\"3.147000\" width=\"6.5\" height=\"9.485999999999999\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"17.612000\" y=\"4.647000\" width=\"1.4\" height=\"6.485999999999999\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"17.112000000000002\" y=\"13.482999999999999\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">PWM</text><rect x=\"-20.890000\" y=\"-4.918930\" width=\"8.0\" height=\"9.827837\" rx=\"0.25\" fill=\"#3d9455\" stroke=\"#a2bf8d\" stroke-width=\".10\"/><rect x=\"-19.990000\" y=\"-4.718930\" width=\"1.0\" height=\"9.427837\" rx=\"0.1\" fill=\"#2b6e43\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-6.564100\" y=\"4.970500\" width=\"3.2831\" height=\"6.2831\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"3.449030\" y=\"-7.556661\" width=\"4.4\" height=\"4.2\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"2.372796\" y=\"4.298314\" width=\"3.465407\" height=\"3.465407\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-10.450995\" y=\"1.119754\" width=\"4.330613\" height=\"2.625023\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-10.546300\" y=\"-15.765200\" width=\"19.6052\" height=\"7.0282\" rx=\"0.1\" fill=\"#313944\" stroke=\"#4a555c\" stroke-width=\".10\"/><text x=\"0\" y=\"13.4\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">GP8630N</text><rect x=\"-10.000000\" y=\"-5.750000\" width=\"6\" height=\"5.5\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-9.200000\" y=\"-4.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-9.150000\" y=\"-4.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-7.500000\" y=\"-4.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-7.450000\" y=\"-4.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-5.800000\" y=\"-4.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-5.750000\" y=\"-4.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"-7\" y=\"-6.5\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">A0 A1 A2</text><circle cx=\"-17.5\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-17.5\" cy=\"-12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-17.5\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-17.5\" cy=\"12.5\" r=\"1.6\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR1230</text>",
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_cad_V1.0.zip",
      "cadSha256": "2f0362303d780ffdfeccb18daeb544811c946d0492b9f1e34631b3128d9947d9",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_schematics_V1.0.pdf",
      "schematicSha256": "54006b7ac29e377f93e12712b41dd811615e5dd8869e6e23234fe74ee58a324b",
      "photoURL": "https://dfimg.dfrobot.com/enshop/image/data/DFR1230/DFR1230_Main_01.jpg",
      "photoSha256": "f47e893704e2a040323418a019a7590e0114e011061e052471d7b449b3b2e99e",
      "sourceBounds": [
        1572.6669,
        1.5136,
        1614.6669,
        33.5136
      ],
      "componentEnvelopes": [
        {
          "x": -4.92255,
          "y": 8.11205,
          "width": 3.2831,
          "height": 6.2831,
          "layer": "细实线层"
        },
        {
          "x": 5.64903,
          "y": -5.456661,
          "width": 4.4,
          "height": 4.2,
          "layer": "细实线层"
        },
        {
          "x": 4.105499,
          "y": 6.031017,
          "width": 3.465407,
          "height": 3.465407,
          "layer": "细实线层"
        },
        {
          "x": -8.285688,
          "y": 2.432266,
          "width": 4.330613,
          "height": 2.625023,
          "layer": "细实线层"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR1230",
        "url": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_stpfile_V1.0.zip",
        "sha256": "d8a5530bc9b87dfce1c6de0c7e5be9b92468d07b9c69ccbf1fc749521ab4b868",
        "stepFiles": [
          "DFR1230_3D_STP/DFR1230.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR1230_3D_STP/DFR1230.stp",
            "sha256": "841573f69b85ac09eddbe920a3c14acfc5deecd772a1c188897d0210eba20f6e",
            "bytes": 16294114,
            "format": "ISO 10303-21 STEP",
            "validStep": true
          }
        ],
        "validStep": true,
        "scope": "Official exact-SKU archive inspected. External vendor CAD remains separate from the generated approximate WRL; current stock does not guarantee the cited source revision."
      },
      "geometryScope": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
      "outlineEndpointGridMm": 0.0001,
      "curveFlatteningErrorMm": 0.01,
      "contactReview": "Exact interface labels, connector reference numbers, signal functions and source-side orientation reconciled with the manufacturer pinout and schematic. Original simplified artwork; no source decorative logos or fonts copied."
    }
  }
};
