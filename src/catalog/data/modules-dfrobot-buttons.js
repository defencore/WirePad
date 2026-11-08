// Reviewed manufacturer mechanical references; native assets are off-board contact carriers.
export default [
  {
    "id": "dfrobot-gravity-rgb-button-dfr0991",
    "sku": "DFR0991",
    "name": "Gravity: I2C RGB LED Colorful Button Module",
    "manufacturer": "DFRobot",
    "category": "Inputs",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr0991/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2634.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_schematics_V1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_cad_V1.0.zip"
      }
    ],
    "description": "RGB illuminated momentary pushbutton with an onboard PIC controller, I2C and a dedicated high-when-pressed interrupt output. Includes both the four-contact Gravity port and the five-contact 2.54mm header. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "PIC16F15245",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2634.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 373,
      "usWarehouse": 8,
      "sku": "DFR0991"
    },
    "board": {
      "width": 37.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M18.5 12.5L18.4829 12.8459L18.4321 13.186L18.3487 13.5179L18.2336 13.8394L18.0877 14.1481L17.912 14.4418L17.7074 14.7182L17.4749 14.9749L17.2181 15.2074L16.9418 15.412L16.6481 15.5877L16.3394 15.7336L16.0179 15.8487L15.686 15.9321L15.3459 15.9829L15.0 16.0L-15.0 16.0L-15.3459 15.9829L-15.686 15.9321L-16.0179 15.8487L-16.3394 15.7336L-16.6481 15.5877L-16.9418 15.412L-17.2182 15.2074L-17.4749 14.9749L-17.7074 14.7182L-17.912 14.4418L-18.0877 14.1481L-18.2336 13.8394L-18.3487 13.5179L-18.4321 13.186L-18.4829 12.8459L-18.5 12.5L-18.5 -12.5L-18.4829 -12.8459L-18.4321 -13.186L-18.3487 -13.5179L-18.2336 -13.8394L-18.0877 -14.1481L-17.912 -14.4418L-17.7074 -14.7181L-17.4749 -14.9749L-17.2182 -15.2074L-16.9418 -15.412L-16.6481 -15.5877L-16.3394 -15.7336L-16.0179 -15.8487L-15.686 -15.9321L-15.3459 -15.9829L-15.0 -16.0L15.0 -16.0L15.3459 -15.9829L15.686 -15.9321L16.0179 -15.8487L16.3394 -15.7336L16.6481 -15.5877L16.9418 -15.412L17.2181 -15.2074L17.4749 -14.9749L17.7074 -14.7181L17.912 -14.4418L18.0877 -14.1481L18.2336 -13.8394L18.3487 -13.5179L18.4321 -13.186L18.4829 -12.8459L18.5 -12.5L18.5 12.5Z"
    },
    "contacts": [
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "+",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible connector lead in the cited component-side mechanical view; native export is an off-board contact reference.",
        "x": 10.053,
        "y": -3.073,
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
        "x": 10.053,
        "y": -1.073,
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
        "x": 10.053,
        "y": 0.927,
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
        "x": 10.053,
        "y": 2.927,
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
        "id": "p2-5",
        "number": "P2.5",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5V host supply/reference input. Use the manufacturer operating range and power-path diagram. Visible 2.54mm header lead; native carrier is not the PCB solder-tail pattern.",
        "x": -12.7917,
        "y": -5.10565,
        "size": [
          6.8042,
          0.6781
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#bbb9a4"
      },
      {
        "id": "p2-4",
        "number": "P2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground and supply return; the connector ground nets join in the cited schematic. Visible 2.54mm header lead; native carrier is not the PCB solder-tail pattern.",
        "x": -12.7917,
        "y": -2.56565,
        "size": [
          6.8042,
          0.6781
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#bbb9a4"
      },
      {
        "id": "p2-3",
        "number": "P2.3",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input. Visible 2.54mm header lead; native carrier is not the PCB solder-tail pattern.",
        "x": -12.7917,
        "y": -0.02565,
        "size": [
          6.8042,
          0.6781
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#bbb9a4"
      },
      {
        "id": "p2-2",
        "number": "P2.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data, with pull-ups to the documented host supply. Visible 2.54mm header lead; native carrier is not the PCB solder-tail pattern.",
        "x": -12.7917,
        "y": 2.51435,
        "size": [
          6.8042,
          0.6781
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#bbb9a4"
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "INT",
        "type": "output",
        "description": "Dedicated digital interrupt output; the manufacturer specifies a high level while the button is pressed. Visible 2.54mm header lead; native carrier is not the PCB solder-tail pattern.",
        "x": -12.7917,
        "y": 5.05435,
        "size": [
          6.8042,
          0.6781
        ],
        "smd": true,
        "shape": "rect",
        "side": "left",
        "metalColor": "#bbb9a4"
      }
    ],
    "holes": [
      {
        "x": 15.0,
        "y": -12.5,
        "drill": 3.1
      },
      {
        "x": 15.0,
        "y": 12.5,
        "drill": 3.1
      },
      {
        "x": -15.0,
        "y": 12.5,
        "drill": 3.1
      },
      {
        "x": -15.0,
        "y": -12.5,
        "drill": 3.1
      }
    ],
    "artwork": "<rect x=\"10.803000\" y=\"-5.823000\" width=\"6.5\" height=\"11.5\" rx=\"0.2\" fill=\"#e2e3d7\" stroke=\"#a3aca1\" stroke-width=\".10\"/><rect x=\"14.553000\" y=\"-4.323000\" width=\"1.4\" height=\"8.5\" rx=\"0.1\" fill=\"#c3c9bc\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"14.053\" y=\"6.527\" fill=\"#e6e8d9\" font-size=\"0.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">I2C</text><rect x=\"-11.041700\" y=\"-6.355650\" width=\"2.5\" height=\"12.66\" rx=\"0.1\" fill=\"#171d24\" stroke=\"#555e65\" stroke-width=\".10\"/><rect x=\"0.250500\" y=\"9.059900\" width=\"3.0\" height=\"3.0\" rx=\"0.1\" fill=\"#3b454b\" stroke=\"#8b938c\" stroke-width=\".10\"/><rect x=\"-7.879400\" y=\"-7.879400\" width=\"15.7588\" height=\"15.7588\" rx=\"0.6\" fill=\"#707c7d\" stroke=\"#c4cbcb\" stroke-width=\".10\"/><circle cx=\"0\" cy=\"0\" r=\"7.65\" fill=\"#d1dde0\" stroke=\"#969f9f\" stroke-width=\".10\"/><text x=\"0\" y=\"0\" fill=\"#e6e8d9\" font-size=\"2\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">RGB</text><rect x=\"-3.000000\" y=\"-14.750000\" width=\"6\" height=\"5.5\" rx=\"0.2\" fill=\"#737d7d\" stroke=\"#c1c4c0\" stroke-width=\".10\"/><rect x=\"-2.200000\" y=\"-13.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-2.150000\" y=\"-13.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.500000\" y=\"-13.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"-0.450000\" y=\"-13.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.200000\" y=\"-13.650000\" width=\"1.0\" height=\"3.3\" rx=\"0.1\" fill=\"#242c31\" stroke=\"#59626a\" stroke-width=\".10\"/><rect x=\"1.250000\" y=\"-13.250000\" width=\"0.9\" height=\"1.3\" rx=\"0.1\" fill=\"#e5e6db\" stroke=\"#59626a\" stroke-width=\".10\"/><text x=\"0\" y=\"-15.5\" fill=\"#e6e8d9\" font-size=\"0.65\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">A0 A1 A2</text><circle cx=\"15.0\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"-12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"15.0\" cy=\"12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"-12.5\" r=\"3\" fill=\"#cab563\" stroke=\"#687071\" stroke-width=\".10\"/><circle cx=\"-15.0\" cy=\"-12.5\" r=\"1.55\" fill=\"#edf1ea\" stroke=\"#687071\" stroke-width=\".10\"/><text x=\"0\" y=\"14.8\" fill=\"#e6e8d9\" font-size=\"0.85\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"sans-serif\">DFR0991</text>",
    "artworkBounds": [
      -19.7,
      -16.0,
      19.7,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_stpfile_V1.0.zip"
    },
    "provenance": {
      "format": "Manufacturer DXF mechanical assembly plus PDF schematic",
      "cadURL": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_cad_V1.0.zip",
      "cadSha256": "8e2bd22850a9a5df33aacabd7dd0120b23b9ed4cde649eff4fc40b33fba7422a",
      "schematicURL": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_schematics_V1.0.pdf",
      "schematicSha256": "278cf87faa6d41a060ce7682366addae9217c488b57397ba661c812e16629042",
      "photoURL": "https://dfimg.dfrobot.com/enshop/DFR0991/DFR0991_Main_01.jpg",
      "photoSha256": "834a1f094c7703ea75db8e9303023f6c5953e2c6ad954e15e267167b9bb84ee9",
      "sourceBounds": [
        18.6402,
        -2.9372,
        55.6402,
        29.0628
      ],
      "componentEnvelopes": [
        {
          "x": 1.7505,
          "y": 10.5599,
          "width": 3.0,
          "height": 3.0,
          "layer": "细实线"
        }
      ],
      "verifiedManufacturerStep": {
        "sku": "DFR0991",
        "url": "https://dfimg.dfrobot.com/wiki/21082/DFR0991_rgb-button-module_stpfile_V1.0.zip",
        "sha256": "fcd7b9e22c6c03677f56835c97f35332c2c681cc023dbc5f77084c3070ee9352",
        "stepFiles": [
          "DFR0991_3D_3DM.stp"
        ],
        "verifiedFiles": [
          {
            "file": "DFR0991_3D_3DM.stp",
            "sha256": "4b13690eedba024840b96d1e66e05cb9f24b07c65ce3451b14ffb07a7bddb687",
            "bytes": 10411890,
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
    },
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 19.5,
    "internalConnections": [
      [
        "p1-3",
        "p2-4"
      ],
      [
        "p1-4",
        "p2-5"
      ],
      [
        "p1-2",
        "p2-3"
      ],
      [
        "p1-1",
        "p2-2"
      ]
    ]
  }
];
