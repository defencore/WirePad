// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "mikroe-mikroe-6985-mcurrentsens": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "RST",
        "type": "input",
        "description": "ClickID analog-path selector control RST. The MCP3564 ADC has no reset pin on this node; ADC reset is by its serial command.",
        "x": -11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "bidirectional",
        "description": "MCP3564 ADC chip-select input in the selected SPI path, or bidirectional ClickID communication through the RST-controlled selector.",
        "x": -11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "IRQ",
        "type": "output",
        "description": "MCP3564 IRQ/MDAT multifunction output: interrupt or modulator-data function and output mode depend on the ADC register settings.",
        "x": 11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "CLK",
        "type": "input",
        "description": "MCP3564 master-clock input CLK, routed through the source level-shifting circuit.",
        "x": 11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "aux-j1-10",
        "number": "J1.10",
        "label": "GND",
        "type": "power_in",
        "description": "Current-measurement and host common ground. Source J1 pin 10. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": -11.5825,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-9",
        "number": "J1.9",
        "label": "C2",
        "type": "passive",
        "description": "Channel 2 CAL2 calibration node, resistor-coupled through 300 Ω R30 to common ground as a calibration load. This is not an independently driven output or an ideal ground short. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": -9.0425,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-8",
        "number": "J1.8",
        "label": "SH2−",
        "type": "passive",
        "description": "Channel 2 high-side current-path terminal SH2−, across the fitted 50 mΩ shunt R8. This is a measured current path, not ground or a regulated output. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": -6.5025,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-7",
        "number": "J1.7",
        "label": "SH2+",
        "type": "passive",
        "description": "Channel 2 high-side current-path terminal SH2+, across the fitted 50 mΩ shunt R8. This is a measured current path, not ground or a regulated output. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": -3.9625,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-6",
        "number": "J1.6",
        "label": "3V",
        "type": "power_out",
        "description": "3.0 V precision reference OUT_3V from MCP1501T-30, shared by J1 pins 1 and 6. This is distinct from both analog 3V3A and host 3.3 V. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": -1.4225,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-5",
        "number": "J1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Current-measurement and host common ground. Source J1 pin5. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": 1.1175,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-4",
        "number": "J1.4",
        "label": "C1",
        "type": "passive",
        "description": "Channel 1 CAL1 calibration node, resistor-coupled through 300 Ω R31 to common ground as a calibration load. This is not an independently driven output or an ideal ground short. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": 3.6575,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-3",
        "number": "J1.3",
        "label": "SH1−",
        "type": "passive",
        "description": "Channel 1 high-side current-path terminal SH1−, across the fitted 50 mΩ shunt R5. This is a measured current path, not ground or a regulated output. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": 6.1975,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-2",
        "number": "J1.2",
        "label": "SH1+",
        "type": "passive",
        "description": "Channel 1 high-side current-path terminal SH1+, across the fitted 50 mΩ shunt R5. This is a measured current path, not ground or a regulated output. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": 8.7375,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-j1-1",
        "number": "J1.1",
        "label": "3V",
        "type": "power_out",
        "description": "3.0 V precision reference OUT_3V from MCP1501T-30, shared by J1 pins 1 and 6. This is distinct from both analog 3V3A and host 3.3 V. Fitted connector solder tail shown in the mirrored underside. Copper/drill dimensions are reference values.",
        "x": 11.2775,
        "y": -24.9427,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "aux-tp1",
        "number": "TP1",
        "label": "3V3A",
        "type": "power_out",
        "description": "MIC5318 regulated 3.3 V analog-rail test point, fed from host +5 V. It is not the separate 3.0 V reference or an ideal short to host 3.3 V. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": 4.1083,
        "y": 8.9884,
        "size": [
          1,
          1
        ],
        "shape": "circle",
        "back": false,
        "smd": true,
        "caption": ""
      },
      {
        "id": "aux-tp2",
        "number": "TP2",
        "label": "GND",
        "type": "power_in",
        "description": "Analog/common ground test point. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": 10.8605,
        "y": 0.1401,
        "size": [
          1,
          1
        ],
        "shape": "circle",
        "back": false,
        "smd": true,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-10.607\" y=\"-11.727\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.248\" y=\"-11.727\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.248\" y=\"-10.229\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.607\" y=\"-10.229\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.277\" y=\"-5.123\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.918\" y=\"-5.123\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.519\" y=\"14.181\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.16\" y=\"14.181\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.578\" y=\"10.65\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.219\" y=\"10.65\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.276\" y=\"0.135\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.917\" y=\"0.135\" width=\"0.96\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.307\" y=\"-13.536\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.307\" y=\"-15.176\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.088\" y=\"10.983\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.088\" y=\"9.342\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.569\" y=\"-13.536\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.569\" y=\"-15.176\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.681\" y=\"-9.489\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.681\" y=\"-11.13\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.777\" y=\"-4.409\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.777\" y=\"-6.05\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.837\" y=\"3.795\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.837\" y=\"2.154\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.693\" y=\"3.693\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.693\" y=\"2.052\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.199\" y=\"-15.169\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.199\" y=\"-13.528\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.954\" y=\"-15.194\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.954\" y=\"-13.553\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.168\" y=\"1.839\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.168\" y=\"0.198\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.342\" y=\"-1.946\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.342\" y=\"-3.586\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.98\" y=\"-1.209\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.98\" y=\"-2.85\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.837\" y=\"5.1\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.837\" y=\"6.741\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.691\" y=\"4.912\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.691\" y=\"3.272\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.453\" y=\"19.365\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.453\" y=\"17.724\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.008\" y=\"17.724\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.008\" y=\"19.365\" width=\"1.102\" height=\"0.96\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.794\" y=\"-9.266\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.834\" y=\"-9.266\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.217\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.178\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.612\" y=\"-5.532\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.652\" y=\"-5.532\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.429\" y=\"13.111\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.469\" y=\"13.111\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.469\" y=\"12.146\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.429\" y=\"12.146\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.064\" y=\"3.841\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.104\" y=\"3.841\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.05\" y=\"-5.126\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.09\" y=\"-5.126\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.028\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.932\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.327\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.367\" y=\"21.722\" width=\"0.772\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.865\" y=\"8.868\" width=\"0.551\" height=\"0.551\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.697\" y=\"-0.047\" width=\"0.551\" height=\"0.551\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.513\" y=\"11.603\" width=\"1.204\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.513\" y=\"13.203\" width=\"1.204\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.04\" y=\"14.702\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.04\" y=\"13.203\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.04\" y=\"11.628\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.04\" y=\"10.13\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.174\" y=\"-7.015\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.174\" y=\"-5.517\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.168\" y=\"-7.244\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.168\" y=\"-8.743\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.707\" y=\"-8.148\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.707\" y=\"-6.647\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.938\" y=\"-13.678\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.938\" y=\"-15.176\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.323\" y=\"-13.678\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.323\" y=\"-15.176\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.482\" y=\"-1.351\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.482\" y=\"-2.85\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.671\" y=\"-9.174\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.021\" y=\"-9.174\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.371\" y=\"-9.174\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.371\" y=\"-7.254\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.021\" y=\"-7.254\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.671\" y=\"-7.254\" width=\"0.498\" height=\"1.29\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.588\" y=\"-18.146\" width=\"1.25\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.586\" y=\"-18.146\" width=\"1.25\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.296\" y=\"-18.146\" width=\"1.25\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.298\" y=\"-18.146\" width=\"1.25\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.548\" y=\"-4.412\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"8.047\" y=\"-4.412\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.063\" y=\"-10.864\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.561\" y=\"-10.864\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.081\" y=\"7.831\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.417\" y=\"7.831\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.081\" y=\"6.261\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.417\" y=\"6.261\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.228\" y=\"4.91\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.727\" y=\"4.91\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.495\" y=\"-3.218\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.993\" y=\"-3.218\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.269\" y=\"-5.875\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.269\" y=\"-6.835\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.996\" y=\"13.383\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.996\" y=\"14.343\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.996\" y=\"10.792\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.996\" y=\"11.753\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.417\" y=\"2.817\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.417\" y=\"3.777\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.35\" y=\"3.774\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.35\" y=\"2.814\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.745\" y=\"20.287\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.745\" y=\"19.327\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.745\" y=\"17.422\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.745\" y=\"18.382\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.647\" y=\"1.999\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.647\" y=\"1.039\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.856\" y=\"7.003\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.856\" y=\"6.043\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.091\" y=\"7.663\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.091\" y=\"6.703\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.507\" y=\"3.221\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.507\" y=\"2.261\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.247\" y=\"18.357\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.247\" y=\"17.396\" width=\"0.701\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.63\" y=\"10.952\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.63\" y=\"11.354\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.63\" y=\"11.753\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.63\" y=\"12.151\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.63\" y=\"12.553\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.541\" y=\"12.553\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.541\" y=\"12.151\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.541\" y=\"11.753\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.541\" y=\"11.354\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.541\" y=\"10.952\" width=\"0.869\" height=\"0.269\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.986\" y=\"12.908\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.387\" y=\"12.908\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.786\" y=\"12.908\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"12.908\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.586\" y=\"12.908\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.586\" y=\"9.997\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"9.997\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.786\" y=\"9.997\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.387\" y=\"9.997\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.986\" y=\"9.997\" width=\"0.269\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.561\" y=\"-6.995\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.561\" y=\"-7.945\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.561\" y=\"-8.895\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.04\" y=\"-8.895\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.04\" y=\"-7.945\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.04\" y=\"-6.995\" width=\"1.204\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.15\" y=\"3.891\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.1\" y=\"3.891\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.05\" y=\"3.891\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.05\" y=\"1.382\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.15\" y=\"1.382\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.923\" y=\"2.047\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.823\" y=\"2.047\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.823\" y=\"-0.462\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.873\" y=\"-0.462\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.923\" y=\"-0.462\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.694\" y=\"-0.818\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.896\" y=\"-0.818\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.694\" y=\"-2.845\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.896\" y=\"-2.845\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.946\" y=\"5.791\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.745\" y=\"5.791\" width=\"1.351\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.151\" y=\"17.826\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.151\" y=\"18.476\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.151\" y=\"19.126\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.151\" y=\"19.776\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.701\" y=\"19.776\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.701\" y=\"19.126\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.701\" y=\"18.476\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.701\" y=\"17.826\" width=\"1.549\" height=\"0.447\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.538\" y=\"14.859\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.537\" y=\"14.859\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.995\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.996\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.071\" y=\"22.314\" width=\"1.204\" height=\"1.6\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.869\" y=\"22.314\" width=\"1.204\" height=\"1.6\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.011\" y=\"22.829\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.011\" y=\"23.78\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.011\" y=\"24.73\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.615\" y=\"24.73\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.615\" y=\"23.78\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.615\" y=\"22.829\" width=\"0.605\" height=\"0.498\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.006\" y=\"24.587\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.006\" y=\"23.637\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.006\" y=\"22.687\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.231\" y=\"22.687\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.231\" y=\"23.637\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.231\" y=\"24.587\" width=\"1.092\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.231\" y=\"-5.408\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.581\" y=\"-5.408\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.93\" y=\"-5.408\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.28\" y=\"-5.408\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.28\" y=\"-9.715\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.93\" y=\"-9.715\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.581\" y=\"-9.715\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.231\" y=\"-9.715\" width=\"0.549\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.258\" y=\"-23.548\" width=\"1.3\" height=\"2.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.261\" y=\"-23.548\" width=\"1.3\" height=\"2.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.238\" y=\"-23.548\" width=\"1.3\" height=\"2.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.239\" y=\"-23.548\" width=\"1.3\" height=\"2.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.013\" y=\"-9.258\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.062\" y=\"-9.258\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.113\" y=\"-9.258\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.113\" y=\"-6.779\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.062\" y=\"-6.779\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.013\" y=\"-6.779\" width=\"0.701\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"9.061\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"16.681\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"21.761\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"19.221\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"14.141\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"24.301\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-11.894\" y=\"11.601\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"24.301\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"14.141\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"19.221\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"16.681\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"6.521\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"11.601\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"9.061\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.966\" y=\"21.761\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.966\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.426\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"8.274\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.886\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.814\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.654\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.734\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.194\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.506\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.046\" y=\"-25.406\" width=\"0.927\" height=\"0.927\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.963\" y=\"-8.817\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"2.413\" y=\"-7.197\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U10</text><rect x=\"-11.747\" y=\"-11.626\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.428\" y=\"-9.165\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.531\" y=\"-9.256\" width=\"3.1\" height=\"5\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-1.981\" y=\"-6.536\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U7</text><rect x=\"-7.927\" y=\"0.099\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-6.477\" y=\"1.719\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U6</text><rect x=\"-2.811\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.789\" y=\"-23.348\" width=\"3.2\" height=\"2.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.709\" y=\"-23.348\" width=\"3.2\" height=\"2.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.2\" y=\"17.525\" width=\"6.4\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"19.245\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U9</text><rect x=\"3.046\" y=\"1.942\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"4.496\" y=\"3.562\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U8</text><rect x=\"7.003\" y=\"-9.045\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"8.403\" y=\"-7.375\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U5</text><rect x=\"-3.201\" y=\"10.337\" width=\"3.1\" height=\"3.1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-1.651\" y=\"12.107\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><rect x=\"-8.822\" y=\"-8.719\" width=\"2.1\" height=\"2.3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-7.772\" y=\"-7.349\" font-family=\"Arial,sans-serif\" font-size=\"0.7\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"-6.908\" y=\"18.225\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.352\" y=\"18.225\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.59\" y=\"3.772\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.736\" y=\"5.601\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.879\" y=\"-2.349\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.416\" y=\"0.236\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.241\" y=\"-3.086\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.067\" y=\"0.699\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.206\" y=\"-14.676\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.189\" y=\"9.843\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.846\" y=\"19.693\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.846\" y=\"17.788\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.467\" y=\"-14.676\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.055\" y=\"-14.694\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.098\" y=\"-14.668\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.795\" y=\"2.553\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.718\" y=\"10.751\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.736\" y=\"2.654\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.66\" y=\"14.282\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"10.878\" y=\"-5.55\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.782\" y=\"-10.63\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.772\" y=\"-17.945\" width=\"3.2\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.747\" y=\"-10.127\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.417\" y=\"-5.022\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.112\" y=\"-17.945\" width=\"3.2\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-12.852\" y=\"-26.213\" width=\"25.4\" height=\"2.54\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.64\" y=\"12.179\" width=\"0.95\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.456\" y=\"-5.025\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.347\" y=\"17.763\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.521\" y=\"5.903\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.47\" y=\"-0.707\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.47\" y=\"-2.733\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.608\" y=\"2.627\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.99\" y=\"7.069\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.755\" y=\"6.409\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.33\" y=\"-2.349\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-8.992\" y=\"-3.067\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.698\" y=\"3.941\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.226\" y=\"5.061\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-9.546\" y=\"1.405\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.475\" y=\"-14.676\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.787\" y=\"-14.676\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.25\" y=\"3.18\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.063\" y=\"12.247\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.317\" y=\"3.183\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.419\" y=\"7.982\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.419\" y=\"6.414\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.063\" y=\"13.212\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"9.563\" y=\"-10.712\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.858\" y=\"-7.646\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.017\" y=\"-8.242\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.096\" y=\"13.749\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.096\" y=\"11.159\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.168\" y=\"-6.469\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.023\" y=\"-6.515\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.018\" y=\"-5.432\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.049\" y=\"-4.261\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.191\" y=\"13.704\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.191\" y=\"10.63\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.562\" y=\"22.489\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.572\" y=\"24.14\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.115\" y=\"14.97\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.38\" y=\"22.528\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"24.248\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-5.961\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.972\" y=\"22.578\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-4.572\" y=\"24.248\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><text x=\"-10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">RST</text><text x=\"-10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">IRQ</text><text x=\"10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">CLK</text><text x=\"4.108\" y=\"8.088\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">3V3A</text><text x=\"10.861\" y=\"-0.76\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text><text x=\"0\" y=\"27.475\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">mCurrent Sens</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"11.582\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"9.043\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">C2</text></g><g transform=\"scale(-1 1)\"><text x=\"6.503\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SH2−</text></g><g transform=\"scale(-1 1)\"><text x=\"3.962\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SH2+</text></g><g transform=\"scale(-1 1)\"><text x=\"1.423\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">3V</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.117\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-3.658\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">C1</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.197\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SH1−</text></g><g transform=\"scale(-1 1)\"><text x=\"-8.738\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SH1+</text></g><g transform=\"scale(-1 1)\"><text x=\"-11.277\" y=\"-26.193\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">3V</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4997-adc19": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.427,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.427,
        "y": -4.763,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.427,
        "y": -2.223,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.427,
        "y": 0.317,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.427,
        "y": 2.857,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.427,
        "y": 5.397,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.427,
        "y": 7.937,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.427,
        "y": 10.477,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.433,
        "y": 10.477,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.433,
        "y": 7.937,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 5.397,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 2.857,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 0.317,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": -2.223,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.433,
        "y": -4.763,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.433,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb2-in2",
        "number": "TB2.IN2",
        "label": "IN2",
        "type": "input",
        "description": "IN2 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.064,
        "y": -11.1253,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-gnd",
        "number": "TB2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.524,
        "y": -11.1253,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-gnd",
        "number": "TB1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.524,
        "y": -11.1253,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-in1",
        "number": "TB1.IN1",
        "label": "IN1",
        "type": "input",
        "description": "IN1 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.064,
        "y": -11.1253,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-2\" y=\"4.137\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.416\" y=\"-3.383\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.626\" y=\"9.852\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.024\" y=\"-14.225\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"1.52\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.67,-10.873 2.37,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"4.06\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"3.21,-10.873 4.91,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-5.564\" y=\"-14.225\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.06\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-4.91,-10.873 -3.21,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.52\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.37,-10.873 -0.67,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-5.381\" y=\"-3.383\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.5\" y=\"-4.636\" width=\"5\" height=\"3.1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-2.866\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.027\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.027\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.027\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.027\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.027\" y=\"8.237\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.027\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.033\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.033\" y=\"8.237\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.033\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 19</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.064\" y=\"-12.375\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN2</text></g><g transform=\"scale(-1 1)\"><text x=\"1.524\" y=\"-12.375\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.524\" y=\"-12.375\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.064\" y=\"-12.375\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN1</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4105-adc9": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.427,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.427,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.427,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.427,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.427,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.427,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.427,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.427,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.433,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS 5V contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "INT",
        "type": "output",
        "description": "Interrupt/Modulator Data from the module to the host.",
        "x": 11.433,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "MCK",
        "type": "input",
        "description": "MCP3564 master-clock input MCLK, connected to the contact printed MCK; use the documented external clock selection.",
        "x": 11.433,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-agnd",
        "number": "TB1.9",
        "label": "AGND",
        "type": "power_in",
        "description": "Source circuit ground reference.",
        "x": -10.75,
        "y": -13.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch7",
        "number": "TB1.8",
        "label": "CH7",
        "type": "input",
        "description": "CH7 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -8.25,
        "y": -8.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch6",
        "number": "TB1.7",
        "label": "CH6",
        "type": "input",
        "description": "CH6 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -5.75,
        "y": -13.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch5",
        "number": "TB1.6",
        "label": "CH5",
        "type": "input",
        "description": "CH5 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -3.25,
        "y": -8.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch4",
        "number": "TB1.5",
        "label": "CH4",
        "type": "input",
        "description": "CH4 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -0.75,
        "y": -13.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch3",
        "number": "TB1.4",
        "label": "CH3",
        "type": "input",
        "description": "CH3 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": 1.75,
        "y": -8.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch2",
        "number": "TB1.3",
        "label": "CH2",
        "type": "input",
        "description": "CH2 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": 4.25,
        "y": -13.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch1",
        "number": "TB1.2",
        "label": "CH1",
        "type": "input",
        "description": "CH1 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": 6.75,
        "y": -8.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-ch0",
        "number": "TB1.1",
        "label": "CH0",
        "type": "input",
        "description": "CH0 analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": 9.25,
        "y": -13.803,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-12\" y=\"-18.503\" width=\"24\" height=\"12\" rx=\"0.18\" fill=\"#e7e8df\" stroke=\"#647062\" stroke-width=\".05\"/><rect x=\"-11.5\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-11.45\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-9\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-8.95\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-6.5\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-6.45\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-4\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-3.95\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-1.5\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-1.45\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"1\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"1.05\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"3.5\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"3.55\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"6\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"6.05\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"8.5\" y=\"-15.863\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"8.55\" y=\"-10.823\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"2.167\" y=\"7.751\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"4.072\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"2.04\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.5\" y=\"6.1\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.673\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.895\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.117\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.339\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.439\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.217\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.995\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.925\" y=\"8.898\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.036\" y=\"8.898\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.536\" y=\"8.898\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.623\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.845\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.067\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.289\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"11.643\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1\" y=\"8.398\" width=\"2\" height=\"2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"9.618\" font-family=\"Arial,sans-serif\" font-size=\"0.667\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"5.823\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.045\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.121\" y=\"1.435\" width=\"4.243\" height=\"4.243\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"3.776\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"0.489\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.267\" y=\"-2.324\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.773\" y=\"-5.626\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.027\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.027\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.027\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.027\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.027\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.027\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.033\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.033\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.033\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">MCK</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 9</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"10.75\" y=\"-15.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AGND</text></g><g transform=\"scale(-1 1)\"><text x=\"8.25\" y=\"-10.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH7</text></g><g transform=\"scale(-1 1)\"><text x=\"5.75\" y=\"-15.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH6</text></g><g transform=\"scale(-1 1)\"><text x=\"3.25\" y=\"-10.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH5</text></g><g transform=\"scale(-1 1)\"><text x=\"0.75\" y=\"-15.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH4</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.75\" y=\"-10.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH3</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.25\" y=\"-15.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH2</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.75\" y=\"-10.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH1</text></g><g transform=\"scale(-1 1)\"><text x=\"-9.25\" y=\"-15.053\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CH0</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4111-analogmux": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "COM",
        "type": "bidirectional",
        "description": "CD74HC4067 COM bidirectional analog common terminal; channel selection and voltage limits follow the source schematic.",
        "x": -11.502,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "SO",
        "type": "input",
        "description": "Control pin 0 input to the module.",
        "x": -11.502,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "S3",
        "type": "input",
        "description": "Control pin 3 input to the module.",
        "x": -11.502,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.502,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.502,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.502,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.502,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.502,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.358,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.358,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.358,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.358,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.358,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.358,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "S2",
        "type": "input",
        "description": "Control pin 2 input to the module.",
        "x": 11.358,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "S1",
        "type": "input",
        "description": "Control pin 1 input to the module.",
        "x": 11.358,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-gnd",
        "number": "TB1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground reference.",
        "x": -10.8143,
        "y": -19.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an0",
        "number": "TB1.8",
        "label": "AN0",
        "type": "bidirectional",
        "description": "AN0 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -8.3143,
        "y": -14.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an1",
        "number": "TB1.7",
        "label": "AN1",
        "type": "bidirectional",
        "description": "AN1 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -5.8143,
        "y": -19.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an2",
        "number": "TB1.6",
        "label": "AN2",
        "type": "bidirectional",
        "description": "AN2 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -3.3143,
        "y": -14.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an3",
        "number": "TB1.5",
        "label": "AN3",
        "type": "bidirectional",
        "description": "AN3 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -0.8143,
        "y": -19.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an4",
        "number": "TB1.4",
        "label": "AN4",
        "type": "bidirectional",
        "description": "AN4 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 1.6857,
        "y": -14.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an5",
        "number": "TB1.3",
        "label": "AN5",
        "type": "bidirectional",
        "description": "AN5 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 4.1857,
        "y": -19.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an6",
        "number": "TB1.2",
        "label": "AN6",
        "type": "bidirectional",
        "description": "AN6 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 6.6857,
        "y": -14.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an7",
        "number": "TB1.1",
        "label": "AN7",
        "type": "bidirectional",
        "description": "AN7 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 9.1857,
        "y": -19.7197,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-gnd",
        "number": "TB2.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground reference.",
        "x": -10.8143,
        "y": -3.4636,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an8",
        "number": "TB2.8",
        "label": "AN8",
        "type": "bidirectional",
        "description": "AN8 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -8.3143,
        "y": 1.5364,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an9",
        "number": "TB2.7",
        "label": "AN9",
        "type": "bidirectional",
        "description": "AN9 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -5.8143,
        "y": -3.4636,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an10",
        "number": "TB2.6",
        "label": "AN10",
        "type": "bidirectional",
        "description": "AN10 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -3.3143,
        "y": 1.5364,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an11",
        "number": "TB2.5",
        "label": "AN11",
        "type": "bidirectional",
        "description": "AN11 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": -0.8143,
        "y": -3.4636,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an12",
        "number": "TB2.4",
        "label": "AN12",
        "type": "bidirectional",
        "description": "AN12 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 1.6857,
        "y": 1.5364,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an13",
        "number": "TB2.3",
        "label": "AN13",
        "type": "bidirectional",
        "description": "AN13 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 4.1857,
        "y": -3.4636,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an14",
        "number": "TB2.2",
        "label": "AN14",
        "type": "bidirectional",
        "description": "AN14 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 6.6857,
        "y": 1.5364,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-an15",
        "number": "TB2.1",
        "label": "AN15",
        "type": "bidirectional",
        "description": "AN15 bidirectional analog-switch channel of CD74HC4067. It connects to COM only when selected and enabled; it is not a permanent internal short.",
        "x": 9.1857,
        "y": -3.4636,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"4.807\" y=\"13.805\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"19.187\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"24.14\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"24.14\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-12.064\" y=\"-24.42\" width=\"24\" height=\"12\" rx=\"0.18\" fill=\"#e7e8df\" stroke=\"#647062\" stroke-width=\".05\"/><rect x=\"-11.56\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-11.51\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-9.06\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-9.01\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-6.56\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-6.51\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-4.06\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-4.01\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-1.56\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-1.51\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"0.94\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"0.99\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"3.44\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"3.49\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"5.94\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"5.99\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"8.44\" y=\"-21.78\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"8.49\" y=\"-16.74\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-12.064\" y=\"-8.164\" width=\"24\" height=\"12\" rx=\"0.18\" fill=\"#e7e8df\" stroke=\"#647062\" stroke-width=\".05\"/><rect x=\"-11.56\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-11.51\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-9.06\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-9.01\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-6.56\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-6.51\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-4.06\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-4.01\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-1.56\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-1.51\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"0.94\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"0.99\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"3.44\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"3.49\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"5.94\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"5.99\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"8.44\" y=\"-5.524\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"8.49\" y=\"-0.484\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-3.725\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.075\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.425\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.775\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.125\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.475\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.175\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.825\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.475\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.125\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.775\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.425\" y=\"7.784\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.725\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.075\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.425\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.775\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.125\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.475\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.175\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.825\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.475\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.125\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.775\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.425\" y=\"14.484\" width=\"0.3\" height=\"1.1\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.25\" y=\"8.884\" width=\"8.5\" height=\"5.6\" rx=\"0.1\" fill=\"#333333\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.102\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">COM</text><text x=\"-10.102\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SO</text><text x=\"-10.102\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">S3</text><text x=\"-10.102\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.102\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.102\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.102\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.102\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"9.958\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"9.958\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"9.958\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"9.958\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"9.958\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"9.958\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"9.958\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">S2</text><text x=\"9.958\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">S1</text><text x=\"0\" y=\"27.475\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Analog MUX</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"10.814\" y=\"-20.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"8.314\" y=\"-15.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN0</text></g><g transform=\"scale(-1 1)\"><text x=\"5.814\" y=\"-20.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN1</text></g><g transform=\"scale(-1 1)\"><text x=\"3.314\" y=\"-15.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN2</text></g><g transform=\"scale(-1 1)\"><text x=\"0.814\" y=\"-20.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN3</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.686\" y=\"-15.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN4</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.186\" y=\"-20.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN5</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.686\" y=\"-15.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN6</text></g><g transform=\"scale(-1 1)\"><text x=\"-9.186\" y=\"-20.97\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN7</text></g><g transform=\"scale(-1 1)\"><text x=\"10.814\" y=\"-4.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"8.314\" y=\"0.286\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN8</text></g><g transform=\"scale(-1 1)\"><text x=\"5.814\" y=\"-4.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN9</text></g><g transform=\"scale(-1 1)\"><text x=\"3.314\" y=\"0.286\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN10</text></g><g transform=\"scale(-1 1)\"><text x=\"0.814\" y=\"-4.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN11</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.686\" y=\"0.286\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN12</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.186\" y=\"-4.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN13</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.686\" y=\"0.286\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN14</text></g><g transform=\"scale(-1 1)\"><text x=\"-9.186\" y=\"-4.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN15</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4767-dac11": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.427,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.427,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.427,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.427,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.427,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.427,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.427,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.427,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.433,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.433,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-gnd",
        "number": "TB1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog/digital ground return.",
        "x": -10.8009,
        "y": -23.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-oute",
        "number": "TB1.8",
        "label": "OUTE",
        "type": "output",
        "description": "OUTE DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": -8.3009,
        "y": -18.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outf",
        "number": "TB1.7",
        "label": "OUTF",
        "type": "output",
        "description": "OUTF DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": -5.8009,
        "y": -23.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outg",
        "number": "TB1.6",
        "label": "OUTG",
        "type": "output",
        "description": "OUTG DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": -3.3009,
        "y": -18.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outh",
        "number": "TB1.5",
        "label": "OUTH",
        "type": "output",
        "description": "OUTH DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": -0.8009,
        "y": -23.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outd",
        "number": "TB1.4",
        "label": "OUTD",
        "type": "output",
        "description": "OUTD DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": 1.6991,
        "y": -18.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outc",
        "number": "TB1.3",
        "label": "OUTC",
        "type": "output",
        "description": "OUTC DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": 4.1991,
        "y": -23.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outb",
        "number": "TB1.2",
        "label": "OUTB",
        "type": "output",
        "description": "OUTB DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": 6.6991,
        "y": -18.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-outa",
        "number": "TB1.1",
        "label": "OUTA",
        "type": "output",
        "description": "OUTA DAC128S085 analog voltage output through its fitted zero-ohm channel link; observe selected reference/supply range.",
        "x": 9.1991,
        "y": -23.3789,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-2.07\" y=\"6.439\" width=\"4.14\" height=\"4.14\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"8.729\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-12.051\" y=\"-28.079\" width=\"24\" height=\"12\" rx=\"0.18\" fill=\"#e7e8df\" stroke=\"#647062\" stroke-width=\".05\"/><rect x=\"-11.55\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-11.5\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-9.05\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-9\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-6.55\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-6.5\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-4.05\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-4\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-1.55\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"-1.5\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"0.95\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"1\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"3.45\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"3.5\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"5.95\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"6\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"8.45\" y=\"-25.439\" width=\"1.5\" height=\"3.72\" rx=\"0.12\" fill=\"#505a54\" stroke=\"#7a8079\" stroke-width=\".05\"/><rect x=\"8.5\" y=\"-20.399\" width=\"1.4\" height=\"2.76\" rx=\"0.08\" fill=\"#c4cbc1\" stroke=\"#8a9388\" stroke-width=\".05\"/><rect x=\"-3.117\" y=\"-8.674\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.201\" y=\"-8.674\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.519\" y=\"-8.674\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"9.583\" y=\"-8.674\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.995\" y=\"-1.943\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.323\" y=\"-1.943\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.641\" y=\"-1.943\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-8.959\" y=\"-1.943\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.258\" y=\"12.073\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.274\" y=\"12.073\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.758\" y=\"12.073\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.774\" y=\"12.073\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"17.409\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.489\" y=\"3.645\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.289\" y=\"3.645\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"24.14\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"24.14\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.027\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.027\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.027\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.027\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.027\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.027\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.033\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.033\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.033\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"27.475\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">DAC 11</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"10.801\" y=\"-24.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"8.301\" y=\"-19.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTE</text></g><g transform=\"scale(-1 1)\"><text x=\"5.801\" y=\"-24.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTF</text></g><g transform=\"scale(-1 1)\"><text x=\"3.301\" y=\"-19.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTG</text></g><g transform=\"scale(-1 1)\"><text x=\"0.801\" y=\"-24.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTH</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.699\" y=\"-19.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTD</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.199\" y=\"-24.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTC</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.699\" y=\"-19.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTB</text></g><g transform=\"scale(-1 1)\"><text x=\"-9.199\" y=\"-24.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUTA</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4763-vcpmonitor4": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.427,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.427,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.427,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.427,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.427,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.427,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.427,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.427,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.433,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.433,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.433,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "ALR",
        "type": "output",
        "description": "Alert from the module to the host.",
        "x": 11.433,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.433,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-inplus",
        "number": "TB1.IN+",
        "label": "IN+",
        "type": "passive",
        "description": "INA239 measured-current path and differential shunt input. The two terminals are separated by the fitted shunt; neither is ground and they are not an ideal internal wire. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.27,
        "y": -18.1229,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-in-",
        "number": "TB1.IN-",
        "label": "IN-",
        "type": "passive",
        "description": "INA239 measured-current path and differential shunt input. The two terminals are separated by the fitted shunt; neither is ground and they are not an ideal internal wire. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.27,
        "y": -18.1229,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-2.77\" y=\"-21.223\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-1.27\" cy=\"-18.371\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.12,-17.871 -0.42,-18.871\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"1.27\" cy=\"-18.371\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.42,-17.871 2.12,-18.871\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"0.312\" y=\"-7.404\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.175\" y=\"-12.044\" width=\"6.35\" height=\"3.26\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.212\" y=\"-7.404\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.862\" y=\"-4.183\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.8\" y=\"-4.718\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.218\" y=\"-0.01\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.116\" y=\"-0.01\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"8.221\" y=\"-4.358\" width=\"2.1\" height=\"1.35\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"11.567\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.599\" y=\"-1.141\" width=\"3.1\" height=\"3.1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.049\" y=\"0.629\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.027\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.027\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.027\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.027\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.027\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.027\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.033\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.033\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.033\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">ALR</text><text x=\"10.033\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">VCP Monitor 4</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"1.27\" y=\"-19.373\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN+</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.27\" y=\"-19.373\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN-</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3115-adc7": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "DRL",
        "type": "output",
        "description": "Data Ready Indicator from the module to the host.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "PRE",
        "type": "input",
        "description": "Filter Preset Enable input to the module.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "Chip Select input to the module.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data-Out from the module to the host.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data In/Preset Sel input to the module.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "BSY",
        "type": "output",
        "description": "Busy Indicator from the module to the host.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "MCK",
        "type": "input",
        "description": "LTC2500 MCLK sampling/conversion trigger input, driven by the host. It is not a clock output generated by the ADC.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "aux-1",
        "number": "TB1.A+",
        "label": "IN+",
        "type": "input",
        "description": "Positive differential analog input A+ into the LTC2057 input buffer. The actual photo prints IN+ at the left terminal. Concealed fitted-terminal solder contact; shown in the mirrored underside. Native carrier lands are representative.",
        "x": -1.27,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "back": true,
        "caption": ""
      },
      {
        "id": "aux-2",
        "number": "TB1.A−",
        "label": "IN−",
        "type": "input",
        "description": "Negative differential analog input A− into the LTC2057 input buffer. The actual photo prints IN− at the right terminal; it is not ground. Concealed fitted-terminal solder contact; shown in the mirrored underside. Native carrier lands are representative.",
        "x": 1.27,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "back": true,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-1.37\" y=\"-3.519\" width=\"2.741\" height=\"6.53\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.709\" y=\"5.629\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.709\" y=\"3.729\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.01\" y=\"4.679\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.674\" y=\"-7.927\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.674\" y=\"-5.926\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.838\" y=\"10.991\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.838\" y=\"8.989\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.337\" y=\"8.989\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.337\" y=\"10.991\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.2\" y=\"-7.927\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.2\" y=\"-5.926\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.674\" y=\"-12.879\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.674\" y=\"-11.081\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.2\" y=\"-12.879\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.2\" y=\"-11.081\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"11.107\" y=\"-9.238\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"11.107\" y=\"-10.879\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.007\" y=\"-10.904\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.007\" y=\"-9.263\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.727\" y=\"-5.911\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.228\" y=\"-5.911\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.65\" y=\"-5.911\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.151\" y=\"-5.911\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.198\" y=\"4.58\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.3\" y=\"4.58\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.09\" y=\"16.256\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.091\" y=\"16.256\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.393\" y=\"0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.392\" y=\"0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.446\" y=\"0.316\" width=\"2.903\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.446\" y=\"-2.686\" width=\"2.903\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.963\" y=\"-3.124\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.164\" y=\"-3.124\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-3.241\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-2.741\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-2.24\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-1.74\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-1.24\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-0.739\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"-0.241\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"0.259\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"0.76\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"1.26\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"1.76\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.469\" y=\"2.261\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"2.261\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"1.76\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"1.26\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"0.76\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"0.259\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-0.241\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-0.739\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-1.24\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-1.74\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-2.24\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-2.741\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.463\" y=\"-3.241\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.008\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.738\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.198\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.198\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.738\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.008\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"8.306\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.766\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.036\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"8.306\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.576\" y=\"-15.037\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.576\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.036\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.766\" y=\"-9.449\" width=\"0.406\" height=\"1.829\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.289\" y=\"5.685\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.289\" y=\"4.735\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.289\" y=\"3.785\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.779\" y=\"3.785\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.779\" y=\"5.685\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.067\" y=\"16.242\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.268\" y=\"16.242\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"1.27\" cy=\"-18.136\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.27\" cy=\"-18.136\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-0.914\" cy=\"-3.2\" r=\"0.406\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.016\" cy=\"2.692\" r=\"0.406\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.041\" cy=\"2.692\" r=\"0.406\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-2.77\" y=\"-21.248\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-1.27\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.12,-17.896 -0.42,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"1.27\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.42,-17.896 2.12,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-6.632\" y=\"3.655\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-5.232\" y=\"5.325\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U5</text><rect x=\"4.74\" y=\"-3.013\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.245\" y=\"-2.108\" width=\"2.5\" height=\"3.2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-10.394\" y=\"-14.454\" width=\"5\" height=\"6.163\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-7.894\" y=\"-11.152\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-3.575\" y=\"16.418\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.667\" y=\"16.368\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.951\" y=\"-3.804\" width=\"4.001\" height=\"7\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0.049\" y=\"-0.084\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-4.562\" y=\"-12.303\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.312\" y=\"-12.303\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.226\" y=\"-5.76\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.652\" y=\"-5.759\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.562\" y=\"-7.35\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.312\" y=\"-7.35\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-11.905\" y=\"-10.401\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"11.209\" y=\"-10.376\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.225\" y=\"9.566\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.95\" y=\"9.566\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.379\" y=\"-14.454\" width=\"5\" height=\"6.163\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"7.879\" y=\"-11.152\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"4.34\" y=\"3.681\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"5.74\" y=\"5.351\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><rect x=\"-0.8\" y=\"4.731\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.969\" y=\"0.213\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">DRL</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">PRE</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">BSY</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">MCK</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 7</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"1.27\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN+</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.27\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN−</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4221-antopwm2": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS CS contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS 3.3V contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "INT",
        "type": "output",
        "description": "LTC6992 OUT PWM signal, routed to the header position printed INT. This is a PWM output, not an input or generic unverified interrupt.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "aux-1",
        "number": "TB1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Ground return, same circuit ground as mikroBUS p8/p9. Source photo prints GND left and VIN right. Concealed fitted-terminal solder contact is shown in the mirrored underside; native land dimensions are representative.",
        "x": -1.27,
        "y": -17.526,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "back": true,
        "caption": ""
      },
      {
        "id": "aux-2",
        "number": "TB1.VIN",
        "label": "VIN",
        "type": "input",
        "description": "Analog signal-voltage input into the AD8616 conditioning amplifier through R3=15 kOhm. VIN is the signal being converted to PWM, not the module power supply. Source photo prints GND left and VIN right. Concealed fitted-terminal solder contact is shown in the mirrored underside; native land dimensions are representative.",
        "x": 1.27,
        "y": -17.526,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "back": true,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-1.288\" y=\"5.432\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.637\" y=\"5.432\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.013\" y=\"5.432\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.663\" y=\"5.432\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.663\" y=\"3.1\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.013\" y=\"3.1\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.637\" y=\"3.1\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.288\" y=\"3.1\" width=\"0.625\" height=\"1.374\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.513\" y=\"-0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.514\" y=\"-0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.36\" y=\"-0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.361\" y=\"-0.102\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.582\" y=\"16.789\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.583\" y=\"16.789\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.11\" y=\"7.323\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.751\" y=\"7.323\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.996\" y=\"-9.568\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.637\" y=\"-9.568\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.637\" y=\"-7.536\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.996\" y=\"-7.536\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.11\" y=\"9.101\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.751\" y=\"9.101\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.599\" y=\"1.862\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.24\" y=\"1.862\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.996\" y=\"-11.473\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.637\" y=\"-11.473\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.031\" y=\"-11.473\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.672\" y=\"-11.473\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.031\" y=\"-9.568\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.672\" y=\"-9.568\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.714\" y=\"7.323\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.215\" y=\"7.323\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.135\" y=\"1.862\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.636\" y=\"1.862\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.989\" y=\"8.915\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.191\" y=\"8.915\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.427\" y=\"14.114\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.377\" y=\"11.812\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.523\" y=\"11.812\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.427\" y=\"-7.464\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.467\" y=\"-7.464\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.116\" y=\"13.787\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.116\" y=\"12.289\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.218\" y=\"13.787\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.218\" y=\"12.289\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.66\" y=\"16.725\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.862\" y=\"16.725\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.553\" y=\"-12.62\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.283\" y=\"-12.62\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.987\" y=\"-12.62\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.257\" y=\"-12.62\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.257\" y=\"-7.22\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.987\" y=\"-7.22\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.283\" y=\"-7.22\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.553\" y=\"-7.22\" width=\"0.805\" height=\"1.754\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.361\" y=\"0.218\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.411\" y=\"0.218\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.538\" y=\"0.218\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.361\" y=\"-2.403\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.411\" y=\"-2.403\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.538\" y=\"-2.403\" width=\"0.823\" height=\"1.422\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-1.27\" cy=\"-17.526\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.27\" cy=\"-17.526\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-1.45\" y=\"3.553\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"5.173\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"-4.937\" y=\"0.01\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.937\" y=\"0.01\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.613\" y=\"7.424\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.134\" y=\"-9.467\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.213\" y=\"7.474\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.413\" y=\"9.027\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.45\" y=\"-1.781\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-0.161\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-1.45\" y=\"12.189\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"13.809\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><rect x=\"-6.134\" y=\"-7.435\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.613\" y=\"9.202\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.737\" y=\"1.963\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.134\" y=\"-11.372\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.834\" y=\"-7.362\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.534\" y=\"-11.372\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.534\" y=\"-9.467\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.137\" y=\"2.013\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.267\" y=\"12.789\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.067\" y=\"12.789\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.159\" y=\"16.901\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.169\" y=\"16.901\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.77\" y=\"-20.639\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-1.27\" cy=\"-17.787\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.12,-17.287 -0.42,-18.287\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"1.27\" cy=\"-17.787\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.42,-17.287 2.12,-18.287\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2.399\" y=\"-12.043\" width=\"4.9\" height=\"6\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0.051\" y=\"-8.823\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN to PWM 2</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"1.27\" y=\"-18.776\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.27\" y=\"-18.776\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4966-adc17": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -4.762,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS CS contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -2.222,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 0.318,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.858,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 5.398,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 10.478,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 10.478,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS 5V contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 5.398,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 2.858,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 0.318,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -2.222,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -4.762,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.064,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-ain1",
        "number": "CN1.AIN1",
        "label": "AIN1",
        "type": "input",
        "description": "AIN1 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.524,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn2-ain0",
        "number": "CN2.AIN0",
        "label": "AIN0",
        "type": "input",
        "description": "AIN0 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.524,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn2-gnd",
        "number": "CN2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.064,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.593\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.592\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.25\" y=\"-1.212\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.25\" y=\"-2.71\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.354\" y=\"0.719\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.354\" y=\"2.217\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.878\" y=\"2.217\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.878\" y=\"0.719\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.752\" y=\"-1.072\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.752\" y=\"-2.713\" width=\"1.102\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.139\" y=\"6.116\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.499\" y=\"6.116\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.161\" y=\"6.116\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.523\" y=\"6.116\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.099\" y=\"1.641\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.551\" y=\"1.641\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.201\" y=\"1.641\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.852\" y=\"1.641\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.852\" y=\"-2.667\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.201\" y=\"-2.667\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.551\" y=\"-2.667\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.099\" y=\"-2.667\" width=\"0.483\" height=\"1.61\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.064\" cy=\"-11.113\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.524\" cy=\"-11.113\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.524\" cy=\"-11.113\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.064\" cy=\"-11.113\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.016\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"1.219\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.029\" y=\"1.219\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.099\" y=\"-2.21\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.564\" y=\"-14.225\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.06\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-4.91,-10.873 -3.21,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.52\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.37,-10.873 -0.67,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"0.024\" y=\"-14.225\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"1.52\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.67,-10.873 2.37,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"4.06\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"3.21,-10.873 4.91,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2.636\" y=\"6.217\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.025\" y=\"6.218\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.65\" y=\"-2.21\" width=\"0.9\" height=\"1.6\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.185\" y=\"-2.208\" width=\"3.1\" height=\"5\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.635\" y=\"0.512\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 17</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.064\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"1.524\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AIN1</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.524\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AIN0</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.064\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-1893-adc2": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -4.763,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.43,
        "y": -2.223,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 0.317,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.43,
        "y": 2.857,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 5.397,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 10.477,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 10.477,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 5.397,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 2.857,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 0.317,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -2.223,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -4.763,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "cn1-vin-",
        "number": "CN1.1",
        "label": "VIN-",
        "type": "input",
        "description": "VIN- analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -5.842,
        "y": -10.9855,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-vinplus",
        "number": "CN1.2",
        "label": "VIN+",
        "type": "input",
        "description": "VIN+ analog measurement input; observe the manufacturer common-mode and absolute voltage limits.",
        "x": -3.302,
        "y": -10.9855,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn2-vcc-out",
        "number": "CN2.1",
        "label": "VCC-OUT",
        "type": "power_out",
        "description": "Selected onboard VCC rail exposed for the measured peripheral; observe the fitted source-selection links, host supply and permitted load.",
        "x": 3.302,
        "y": -10.9855,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn2-gnd",
        "number": "CN2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common converter/host ground return.",
        "x": 5.842,
        "y": -10.9855,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"5.466\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.665\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.864\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.034\" y=\"-3.715\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.767\" y=\"-3.715\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.801\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.599\" y=\"8.096\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.744\" y=\"-1.937\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-1.937\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.744\" y=\"-0.159\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-0.159\" width=\"1.052\" height=\"0.953\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.572\" y=\"3.244\" width=\"0.953\" height=\"1.052\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.572\" y=\"1.443\" width=\"0.953\" height=\"1.052\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.007\" y=\"-6.323\" width=\"1.252\" height=\"1.852\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.295\" y=\"-6.323\" width=\"1.252\" height=\"1.852\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.665\" y=\"-1.139\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.395\" y=\"-1.139\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.395\" y=\"-6.539\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.665\" y=\"-6.539\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.125\" y=\"-1.139\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.855\" y=\"-1.139\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.125\" y=\"-6.539\" width=\"0.376\" height=\"1.776\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.043\" y=\"-6.727\" width=\"0.752\" height=\"2.151\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.041\" y=\"1.491\" width=\"0.965\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.041\" y=\"3.391\" width=\"0.965\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.245\" y=\"2.441\" width=\"0.965\" height=\"0.965\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"5.842\" cy=\"-10.986\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"3.302\" cy=\"-10.986\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-3.302\" cy=\"-10.986\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-5.842\" cy=\"-10.986\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.902\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.332\" y=\"-8.204\" width=\"1.803\" height=\"1.803\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.849\" y=\"1.432\" width=\"2.5\" height=\"3\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.032\" y=\"-6.034\" width=\"5\" height=\"6.2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-4.532\" y=\"-2.714\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-0.419\" y=\"-3.639\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.419\" y=\"-0.082\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.802\" y=\"-14.086\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"3.3\" cy=\"-11.234\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"2.45,-10.734 4.15,-11.734\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"5.84\" cy=\"-11.234\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"4.99,-10.734 6.69,-11.734\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-7.342\" y=\"-14.086\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-5.84\" cy=\"-11.234\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-6.69,-10.734 -4.99,-11.734\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-3.3\" cy=\"-11.234\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-4.15,-10.734 -2.45,-11.734\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"2.648\" y=\"2.058\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.33\" y=\"-6.197\" width=\"3.2\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.419\" y=\"-1.86\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.48\" y=\"8.172\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.985\" y=\"8.172\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 2</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"5.842\" y=\"-12.236\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN-</text></g><g transform=\"scale(-1 1)\"><text x=\"3.302\" y=\"-12.236\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN+</text></g><g transform=\"scale(-1 1)\"><text x=\"-3.302\" y=\"-12.236\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VCC-OUT</text></g><g transform=\"scale(-1 1)\"><text x=\"-5.842\" y=\"-12.236\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4732-dac10": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS CS contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "cn1-vout",
        "number": "CN1.VOUT",
        "label": "VOUT",
        "type": "output",
        "description": "DAC53401 analog output node. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -2.54,
        "y": -18.288,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-vfb",
        "number": "CN1.VFB",
        "label": "VFB",
        "type": "input",
        "description": "DAC53401 feedback input node; the published assembly fits R4=0 ohm between VFB and VOUT. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 0,
        "y": -18.288,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog/host ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 2.54,
        "y": -18.288,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"2.202\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.847\" y=\"-9.246\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.846\" y=\"-9.246\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.937\" y=\"-3.587\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.937\" y=\"-5.085\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.64\" y=\"1.862\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.999\" y=\"1.862\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.64\" y=\"4.402\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.999\" y=\"4.402\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.698\" y=\"-3.133\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.198\" y=\"-3.133\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.7\" y=\"-3.133\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.199\" y=\"-3.133\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.199\" y=\"-5.165\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.7\" y=\"-5.165\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.198\" y=\"-5.165\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.698\" y=\"-5.165\" width=\"0.373\" height=\"0.729\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.582\" y=\"-4.255\" width=\"1.641\" height=\"0.94\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.88\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.878\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.879\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.724\" y=\"9.206\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.726\" y=\"9.206\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.725\" y=\"9.206\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.853\" y=\"1.862\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.352\" y=\"1.862\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.564\" y=\"-6.825\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.937\" y=\"-6.825\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.352\" y=\"6.942\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.853\" y=\"6.942\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.278\" y=\"4.351\" width=\"1.153\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.879\" y=\"4.351\" width=\"1.153\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.475\" y=\"11.455\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.475\" y=\"7.457\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.475\" y=\"9.456\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-2.54\" cy=\"-18.288\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"0\" cy=\"-18.288\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.54\" cy=\"-18.288\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"0.895\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.062\" y=\"-6.674\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.352\" y=\"2.013\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.088\" y=\"-4.584\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.04\" y=\"-21.401\" width=\"8.08\" height=\"6.2\" rx=\"0.18\" fill=\"#84ad70\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-2.54\" cy=\"-18.549\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-3.39,-18.049 -1.69,-19.049\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"0\" cy=\"-18.549\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-0.85,-18.049 0.85,-19.049\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"2.54\" cy=\"-18.549\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"1.69,-18.049 3.39,-19.049\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-3.302\" y=\"4.478\" width=\"1.6\" height=\"0.95\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.302\" y=\"11.948\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.302\" y=\"9.408\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.502\" y=\"1.963\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.502\" y=\"4.503\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.27\" y=\"-9.134\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.762\" y=\"-4.785\" width=\"2\" height=\"2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.762\" y=\"-3.565\" font-family=\"Arial,sans-serif\" font-size=\"0.667\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-3.352\" y=\"7.093\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">DAC 10</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"2.54\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUT</text></g><g transform=\"scale(-1 1)\"><text x=\"-0\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VFB</text></g><g transform=\"scale(-1 1)\"><text x=\"-2.54\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-1918-dac2": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "CLR",
        "type": "input",
        "description": "Asynchronous Clear input to the module.",
        "x": -11.43,
        "y": -4.762,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.43,
        "y": -2.222,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 0.318,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.43,
        "y": 2.858,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.43,
        "y": 5.398,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 10.478,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 10.478,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 7.938,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 5.398,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 2.858,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 0.318,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -2.222,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -4.762,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -7.303,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "cn1-vout",
        "number": "CN1.VOUT",
        "label": "VOUT",
        "type": "output",
        "description": "LTC2601 analog voltage output relative to GND; observe selected VREF. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -0.8128,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog and host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.7272,
        "y": -11.1125,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-3.898\" y=\"-0.14\" width=\"1.75\" height=\"1.981\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.571\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.144\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.857\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.921\" y=\"3.899\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.636\" y=\"3.899\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.4\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.972\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.686\" y=\"7.226\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.207\" y=\"4.305\" width=\"1.118\" height=\"1.118\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.302\" y=\"4.305\" width=\"1.118\" height=\"1.118\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.267\" y=\"2.223\" width=\"1.118\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.902\" y=\"-2.565\" width=\"1.727\" height=\"3.378\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.092\" y=\"-2.565\" width=\"1.727\" height=\"3.378\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.152\" y=\"3.899\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.134\" y=\"3.899\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.743\" y=\"-2.756\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.724\" y=\"-2.756\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.99\" y=\"-0.386\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.99\" y=\"0.114\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.99\" y=\"0.615\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.99\" y=\"1.115\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.99\" y=\"1.615\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"1.615\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"1.115\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"0.615\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"0.114\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"-0.386\" width=\"0.993\" height=\"0.472\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"1.727\" cy=\"-11.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-0.813\" cy=\"-11.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.356\" y=\"2.624\" width=\"2.92\" height=\"2.34\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.388\" y=\"7.338\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.136\" y=\"-2.376\" width=\"3.5\" height=\"3\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.582\" y=\"-0.699\" width=\"3.12\" height=\"3.1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-3.022\" y=\"1.071\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-1.533\" y=\"4.011\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.172\" y=\"4.01\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.87\" y=\"7.338\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.313\" y=\"-14.225\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-0.81\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-1.66,-10.873 0.04,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"1.73\" cy=\"-11.373\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.88,-10.873 2.58,-11.873\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-4.124\" y=\"-2.644\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CLR</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">DAC 2</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"0.813\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUT</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.727\" y=\"-12.363\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5821-rmstodc2": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "AN",
        "type": "output",
        "description": "Analog Output from the module to the host.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "bidirectional",
        "description": "ID COMM. ClickID communication is bidirectional; the documented selection circuit determines shared SPI operation.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "vext-vext",
        "number": "VEXT.VEXT",
        "label": "VEXT",
        "type": "power_in",
        "description": "External AD8436 analog-circuit positive supply; separate from selected host VCC. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -5.08,
        "y": -18.0848,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "vext-gnd",
        "number": "VEXT.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common circuit and host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -2.54,
        "y": -18.0848,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "input-in",
        "number": "INPUT.IN",
        "label": "IN",
        "type": "input",
        "description": "IN analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 2.54,
        "y": -18.0848,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "input-gnd",
        "number": "INPUT.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 5.08,
        "y": -18.0848,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-0.8\" y=\"15.667\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.336\" y=\"-4.603\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.336\" y=\"-6.101\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.386\" y=\"-6.609\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.386\" y=\"-5.111\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.891\" y=\"-8.223\" width=\"2.004\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.891\" y=\"-5.221\" width=\"2.004\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.021\" y=\"-2.888\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.477\" y=\"-2.888\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.086\" y=\"-7.45\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.086\" y=\"-8.41\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.036\" y=\"6.622\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.036\" y=\"5.662\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.801\" y=\"-8.477\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.301\" y=\"-8.477\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.199\" y=\"-8.477\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.7\" y=\"-8.477\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.2\" y=\"-8.477\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.2\" y=\"-4.566\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.7\" y=\"-4.566\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.199\" y=\"-4.566\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.301\" y=\"-4.566\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.801\" y=\"-4.566\" width=\"0.399\" height=\"0.901\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.407\" y=\"-7.271\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.407\" y=\"-6.77\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.407\" y=\"-6.27\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.407\" y=\"-5.77\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.407\" y=\"-5.269\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"-5.269\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"-5.77\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"-6.27\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"-6.77\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.505\" y=\"-7.271\" width=\"0.902\" height=\"0.399\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.35\" y=\"-7.421\" width=\"2.7\" height=\"2.7\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.225\" y=\"-10.105\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.185\" y=\"-10.105\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.999\" y=\"-10.105\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.96\" y=\"-10.105\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.219\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.179\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.931\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.368\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.328\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.884\" y=\"11.688\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.924\" y=\"11.688\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.884\" y=\"10.215\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.924\" y=\"10.215\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.96\" y=\"-11.35\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.999\" y=\"-11.35\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"0.443\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"0.443\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"0.443\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"10.552\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"10.552\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"10.552\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"17.44\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"15.54\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.325\" y=\"16.49\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.249\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.25\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.325\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.123\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.554\" y=\"7.077\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.346\" y=\"7.077\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.346\" y=\"4.567\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.396\" y=\"4.567\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.554\" y=\"4.567\" width=\"0.792\" height=\"1.412\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-2.54\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-5.08\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.54\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"5.08\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-6.58\" y=\"-21.198\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.185\" y=\"-5.601\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.537\" y=\"-6.109\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.984\" y=\"-8.044\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.521\" y=\"-2.737\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.093\" y=\"-7.645\" width=\"1.6\" height=\"3.2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"0.645\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.592\" y=\"-10.004\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.38\" y=\"15.416\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-6.15\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.961\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.811\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.754\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.816\" y=\"15.377\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.826\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.291\" y=\"10.316\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.592\" y=\"-10.004\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.291\" y=\"11.79\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.04\" y=\"-21.198\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.45\" y=\"5.128\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"6.748\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><rect x=\"-1.994\" y=\"-8.065\" width=\"3.988\" height=\"3.988\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-5.851\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"2.138\" y=\"6.028\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">AN</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">RMS to DC 2</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"5.08\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VEXT</text></g><g transform=\"scale(-1 1)\"><text x=\"2.54\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-2.54\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IN</text></g><g transform=\"scale(-1 1)\"><text x=\"-5.08\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4222-vcpmonitor3": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "MISO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "MOSI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "ALR",
        "type": "output",
        "description": "Alert pin from the module to the host.",
        "x": 11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "IO",
        "type": "bidirectional",
        "description": "LTC2947 programmable general-purpose I/O; in output mode its driver is open drain. The source board fits a VCC pull-up and indicator circuit.",
        "x": 11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-im-conn",
        "number": "TB1.IM-CONN",
        "label": "IM-CONN",
        "type": "passive",
        "description": "LTC2947 measured-current path negative terminal. Not host ground and not an ideal short to IP-CONN. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -7.62,
        "y": -22.1996,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-vm",
        "number": "TB1.VM",
        "label": "VM",
        "type": "input",
        "description": "External negative voltage-sense terminal through R2=22 ohm to LTC2947 VM; distinct from IM-CONN and host ground. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -2.54,
        "y": -22.1996,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-vp",
        "number": "TB2.VP",
        "label": "VP",
        "type": "input",
        "description": "External positive voltage-sense terminal through R3=22 ohm to LTC2947 VP; distinct from IP-CONN. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 2.54,
        "y": -22.1996,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-ip-conn",
        "number": "TB2.IP-CONN",
        "label": "IP-CONN",
        "type": "passive",
        "description": "LTC2947 measured-current path positive terminal; the internal current-measuring path is not an ideal wire. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 7.62,
        "y": -22.1996,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-3.482\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"23.964\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"23.964\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.478\" y=\"0.164\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.279\" y=\"0.164\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.478\" y=\"2.399\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.279\" y=\"2.399\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.875\" y=\"-2.638\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.914\" y=\"-2.638\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.137\" y=\"4.5\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.177\" y=\"4.5\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.137\" y=\"2.976\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.177\" y=\"2.976\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.103\" y=\"-3.984\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.143\" y=\"-3.984\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.687\" y=\"-0.961\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.727\" y=\"-0.961\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.687\" y=\"4.449\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.727\" y=\"4.449\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.047\" y=\"6.633\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.008\" y=\"6.633\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.177\" y=\"1.452\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.137\" y=\"1.452\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.377\" y=\"-12.417\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.337\" y=\"-12.417\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.152\" y=\"-12.417\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.112\" y=\"-12.417\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.951\" y=\"-5.432\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.991\" y=\"-5.432\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.138\" y=\"-6.626\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.178\" y=\"-6.626\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.623\" y=\"-5.032\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.27\" y=\"-4.679\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.917\" y=\"-4.323\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.564\" y=\"-3.97\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.211\" y=\"-3.617\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.145\" y=\"-3.264\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.498\" y=\"-2.911\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.851\" y=\"-2.558\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.204\" y=\"-2.202\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.557\" y=\"-1.849\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.244\" y=\"-4.536\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.891\" y=\"-4.89\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.538\" y=\"-5.243\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.185\" y=\"-5.598\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.83\" y=\"-5.951\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.476\" y=\"-6.304\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.123\" y=\"-6.657\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.77\" y=\"-7.01\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.417\" y=\"-7.366\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.062\" y=\"-7.719\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.476\" y=\"-1.849\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.83\" y=\"-2.202\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.185\" y=\"-2.558\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.538\" y=\"-2.911\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.891\" y=\"-3.264\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.244\" y=\"-3.617\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.145\" y=\"-7.719\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.211\" y=\"-7.366\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.564\" y=\"-7.01\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.917\" y=\"-6.657\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.27\" y=\"-6.304\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.623\" y=\"-5.951\" width=\"0.869\" height=\"0.869\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.135\" y=\"-4.958\" width=\"3.338\" height=\"3.338\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.222\" y=\"-10.795\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.576\" y=\"-10.795\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.525\" y=\"6.119\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.525\" y=\"7.079\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.331\" y=\"6.119\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.331\" y=\"7.079\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.368\" y=\"-13.952\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.368\" y=\"-14.912\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.664\" y=\"-13.952\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.664\" y=\"-14.912\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.235\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.233\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.234\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.08\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.082\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.081\" y=\"18.858\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.233\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.235\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.234\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.08\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.082\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.081\" y=\"13.778\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.08\" y=\"16.318\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.082\" y=\"16.318\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.081\" y=\"16.318\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.08\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.082\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.081\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.233\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.235\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.234\" y=\"11.238\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.948\" y=\"-9.728\" width=\"0.897\" height=\"0.894\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.267\" y=\"-9.048\" width=\"0.897\" height=\"0.894\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.634\" y=\"-9.043\" width=\"0.897\" height=\"0.894\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.953\" y=\"-8.362\" width=\"0.897\" height=\"0.894\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.236\" y=\"-7.65\" width=\"0.897\" height=\"0.892\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.556\" y=\"-8.33\" width=\"0.897\" height=\"0.892\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-2.54\" cy=\"-22.2\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-7.62\" cy=\"-22.2\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"7.62\" cy=\"-22.2\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.54\" cy=\"-22.2\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"6.058\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"9.525\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.145\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"22.225\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"14.605\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"24.765\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.065\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"24.765\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"14.605\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.145\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"6.985\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.065\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"9.525\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"22.225\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-2.905\" y=\"24.14\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"24.14\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.974\" y=\"-8.07\" width=\"1.052\" height=\"1.052\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.685\" y=\"-9.467\" width=\"1.052\" height=\"1.052\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.371\" y=\"-8.781\" width=\"1.052\" height=\"1.052\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1\" y=\"-10.683\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.745\" y=\"-12.315\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.745\" y=\"-12.315\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.51\" y=\"-3.882\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.358\" y=\"-5.33\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.545\" y=\"-6.524\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.282\" y=\"-2.536\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.657\" y=\"19.06\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.658\" y=\"13.98\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.658\" y=\"16.52\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.658\" y=\"13.98\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.658\" y=\"11.44\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.658\" y=\"19.06\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.658\" y=\"11.44\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.971\" y=\"0.34\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.931\" y=\"2.525\" width=\"2.1\" height=\"1.35\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.266\" y=\"-14.546\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.766\" y=\"-14.546\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.77\" y=\"1.553\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.64\" y=\"6.735\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.77\" y=\"4.601\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.627\" y=\"6.485\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.77\" y=\"3.078\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.433\" y=\"6.485\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.095\" y=\"-0.86\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.095\" y=\"4.551\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-10.16\" y=\"-27.483\" width=\"10.73\" height=\"11.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-7.62\" cy=\"-22.331\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-8.47,-21.831 -6.77,-22.831\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-2.54\" cy=\"-22.331\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-3.39,-21.831 -1.69,-22.831\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"0\" y=\"-27.483\" width=\"10.73\" height=\"11.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"2.54\" cy=\"-22.331\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"1.69,-21.831 3.39,-22.831\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"7.62\" cy=\"-22.331\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"6.77,-21.831 8.47,-22.831\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"0.401\" y=\"-5.941\" width=\"2.934\" height=\"3.182\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.789\" y=\"-1.724\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.188\" y=\"-7.487\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.435\" y=\"-2.078\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.541\" y=\"-7.134\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.082\" y=\"-2.432\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.895\" y=\"-6.78\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.728\" y=\"-2.785\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.249\" y=\"-6.427\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.375\" y=\"-3.139\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.602\" y=\"-6.073\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.021\" y=\"-3.492\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.956\" y=\"-5.72\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.332\" y=\"-3.846\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.309\" y=\"-5.366\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.686\" y=\"-4.199\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.663\" y=\"-5.013\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.039\" y=\"-4.553\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.016\" y=\"-4.659\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.393\" y=\"-4.906\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.37\" y=\"-4.305\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.602\" y=\"-1.724\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.375\" y=\"-7.487\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.956\" y=\"-2.078\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.021\" y=\"-7.134\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.309\" y=\"-2.432\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.332\" y=\"-6.78\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.663\" y=\"-2.785\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.686\" y=\"-6.427\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.016\" y=\"-3.139\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.039\" y=\"-6.073\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.37\" y=\"-3.492\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.393\" y=\"-5.72\" width=\"0.513\" height=\"0.513\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.862\" y=\"-7.956\" width=\"7.212\" height=\"7.212\" rx=\"0.1\" fill=\"#333333\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">MISO</text><text x=\"-10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">MOSI</text><text x=\"-10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">ALR</text><text x=\"10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">IO</text><text x=\"0\" y=\"27.475\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">VCP Monitor 3</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"7.62\" y=\"-23.45\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IM-CONN</text></g><g transform=\"scale(-1 1)\"><text x=\"2.54\" y=\"-23.45\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VM</text></g><g transform=\"scale(-1 1)\"><text x=\"-2.54\" y=\"-23.45\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VP</text></g><g transform=\"scale(-1 1)\"><text x=\"-7.62\" y=\"-23.45\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">IP-CONN</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-6101-vcpmonitor6": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "bidirectional",
        "description": "ID COMM. ClickID communication is bidirectional; the documented selection circuit determines shared SPI operation.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "ALR",
        "type": "output",
        "description": "Alert Interrupt from the module to the host.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "load-vout",
        "number": "LOAD.VOUT",
        "label": "VOUT",
        "type": "power_out",
        "description": "Load-side positive terminal after the INA780 internal measurement shunt. This is a monitored supply path, not a regulated converter output or an ideal short to VIN. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -7.5946,
        "y": -16.0274,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "load-gnd",
        "number": "LOAD.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common load/input/host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -2.5146,
        "y": -16.0274,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "vin-gnd",
        "number": "VIN.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common input/load/host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 2.5654,
        "y": -16.0274,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "vin-vin",
        "number": "VIN.VIN",
        "label": "VIN",
        "type": "power_in",
        "description": "Monitored input positive supply before the INA780 current-measuring shunt; observe the documented bus limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 7.6454,
        "y": -16.0274,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-0.8\" y=\"15.667\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"17.44\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"15.54\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.325\" y=\"16.49\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.368\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.328\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.219\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.179\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.931\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.351\" y=\"10.342\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.39\" y=\"10.342\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.351\" y=\"11.561\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.39\" y=\"11.561\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"-0.657\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.989\" y=\"-0.657\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"0.303\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.989\" y=\"0.303\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"10.563\" y=\"-2.892\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"11.523\" y=\"-2.892\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.249\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.25\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"10.298\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"10.298\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"10.298\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"5.117\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"5.117\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"5.117\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"3.11\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"3.11\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"3.11\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.617\" y=\"1.067\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.617\" y=\"2.027\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.325\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.123\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.112\" y=\"-4.406\" width=\"0.226\" height=\"0.226\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.886\" y=\"-4.406\" width=\"0.226\" height=\"0.226\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.148\" y=\"-1.843\" width=\"0.505\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.653\" y=\"-1.843\" width=\"0.505\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.653\" y=\"-7.543\" width=\"0.505\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.148\" y=\"-7.543\" width=\"0.505\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.748\" y=\"-1.843\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.149\" y=\"-1.843\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.502\" y=\"-1.843\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.652\" y=\"-1.843\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.652\" y=\"-7.543\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.053\" y=\"-7.543\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.451\" y=\"-7.543\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.149\" y=\"-7.543\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.449\" y=\"-7.543\" width=\"0.404\" height=\"0.8\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.741\" y=\"-3.117\" width=\"1.105\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.239\" y=\"-3.117\" width=\"1.105\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-2.515\" cy=\"-16.027\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-7.595\" cy=\"-16.027\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"7.645\" cy=\"-16.027\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.565\" cy=\"-16.027\" r=\"1.499\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-3\" y=\"-7.293\" width=\"6\" height=\"6\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-4.073\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-1.38\" y=\"15.416\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-6.15\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.719\" y=\"1.433\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.811\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.5\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.816\" y=\"15.377\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.826\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.961\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.622\" y=\"0.405\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.622\" y=\"-0.555\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"5.319\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"3.312\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-10.134\" y=\"-21.311\" width=\"10.73\" height=\"11.2\" rx=\"0.1\" fill=\"#666e66\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.758\" y=\"10.443\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.758\" y=\"11.663\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.026\" y=\"-21.311\" width=\"10.73\" height=\"11.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"2.57\" cy=\"-16.159\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"1.72,-15.659 3.42,-16.659\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"7.65\" cy=\"-16.159\" r=\"1.55\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"6.8,-15.659 8.5,-16.659\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"8.232\" y=\"-2.94\" width=\"1.62\" height=\"0.8\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"10.93\" y=\"-2.79\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">ALR</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">VCP Monitor 6</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"7.595\" y=\"-17.277\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUT</text></g><g transform=\"scale(-1 1)\"><text x=\"2.515\" y=\"-17.277\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-2.565\" y=\"-17.277\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-7.645\" y=\"-17.277\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3394-adc8": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS CS contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "INT",
        "type": "output",
        "description": "Alert/Data Ready from the module to the host.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "cn1-an0",
        "number": "CN1.AN0",
        "label": "AN0",
        "type": "input",
        "description": "AN0 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.953,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-an1",
        "number": "CN1.AN1",
        "label": "AN1",
        "type": "input",
        "description": "AN1 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -2.413,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "cn1-an2",
        "number": "CN1.AN2",
        "label": "AN2",
        "type": "input",
        "description": "AN2 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 0.127,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-an3",
        "number": "TB1.AN3",
        "label": "AN3",
        "type": "input",
        "description": "AN3 analog measurement input; observe the manufacturer common-mode and absolute voltage limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 3.1242,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-gnd",
        "number": "TB1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Source circuit ground reference. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 5.6642,
        "y": -18.1356,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"1.312\" y=\"-8.735\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.312\" y=\"-8.235\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.312\" y=\"-7.734\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.312\" y=\"-7.234\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.312\" y=\"-6.734\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-6.734\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-7.234\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-7.734\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-8.235\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-8.735\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"10.908\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"10.908\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"10.908\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.601\" y=\"3.415\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.397\" y=\"3.415\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.602\" y=\"3.415\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"3.665\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"5.664\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"1.666\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.234\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.875\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.303\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.269\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.91\" y=\"-3.396\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.199\" y=\"-7.356\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.199\" y=\"-8.857\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.869\" y=\"16.217\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.071\" y=\"16.217\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.148\" y=\"16.281\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.149\" y=\"16.281\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"0.127\" cy=\"-18.136\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-2.413\" cy=\"-18.136\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.953\" cy=\"-18.136\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"5.664\" cy=\"-18.136\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"3.124\" cy=\"-18.136\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.527\" y=\"-9.017\" width=\"5.055\" height=\"3.048\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-7.273\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"4.35\" y=\"-8.355\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"11.11\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.562\" y=\"16.393\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.772\" y=\"-3.295\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.8\" y=\"-3.295\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.372\" y=\"-3.295\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.572\" y=\"16.393\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.453\" y=\"-21.248\" width=\"8.08\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.95\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-5.8,-17.896 -4.1,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-2.41\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-3.26,-17.896 -1.56,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"0.13\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-0.72,-17.896 0.98,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-0.625\" y=\"4.242\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.624\" y=\"-21.248\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"3.12\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"2.27,-17.896 3.97,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"5.66\" cy=\"-18.396\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"4.81,-17.896 6.51,-18.896\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">ADC 8</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.953\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN0</text></g><g transform=\"scale(-1 1)\"><text x=\"2.413\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN1</text></g><g transform=\"scale(-1 1)\"><text x=\"-0.127\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN2</text></g><g transform=\"scale(-1 1)\"><text x=\"-3.124\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">AN3</text></g><g transform=\"scale(-1 1)\"><text x=\"-5.664\" y=\"-19.386\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5525-dac14": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "RST",
        "type": "input",
        "description": "ID SEL input to the module.",
        "x": -11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "bidirectional",
        "description": "SPI Select / ID COMM. ClickID communication is bidirectional; the documented selection circuit determines shared SPI operation.",
        "x": -11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
        "x": -11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "3.3V",
        "type": "power_in",
        "description": "3.3 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": -11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 24.765,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 22.225,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
        "x": 11.43,
        "y": 19.685,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
        "x": 11.43,
        "y": 17.145,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 14.605,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 12.065,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "GP",
        "type": "bidirectional",
        "description": "General Purpose I/O; observe the onboard device configuration and logic limits.",
        "x": 11.43,
        "y": 9.525,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 6.985,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "tb1-out0",
        "number": "TB1.OUT0",
        "label": "OUT0",
        "type": "output",
        "description": "DAC53202 analog channel0 output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.318,
        "y": -24.9682,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb1-gnd",
        "number": "TB1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog/host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.778,
        "y": -24.9682,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-gnd",
        "number": "TB2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog/host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.778,
        "y": -24.9682,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tb2-out1",
        "number": "TB2.OUT1",
        "label": "OUT1",
        "type": "output",
        "description": "DAC53202 analog channel1 output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.318,
        "y": -24.9682,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "tp-gpio-sdo",
        "number": "TP.GPIO/SDO",
        "label": "GPIO/SDO",
        "type": "bidirectional",
        "description": "DAC53202 multifunction digital GPIO/SDO source node before JP1 selection. Direction depends on device configuration; it is distinct from the selected GP/SDO host contact. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 0,
        "y": 9.0932,
        "size": [
          1.4,
          1.4
        ],
        "shape": "circle",
        "back": false,
        "smd": true,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"0.521\" y=\"22.779\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"0.57\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"0.57\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"0.57\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"8.266\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"8.266\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"-5.018\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"-5.018\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"-5.018\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"-7.812\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"-7.812\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"-7.812\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"-2.224\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"-2.224\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"-2.224\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"15.886\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"15.886\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"15.886\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.014\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.054\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.443\" y=\"9.173\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.483\" y=\"9.173\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.483\" y=\"16.793\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.443\" y=\"16.793\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.483\" y=\"19.333\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.443\" y=\"19.333\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.565\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.525\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.176\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.215\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.822\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.782\" y=\"21.721\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"24.587\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"23.637\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"22.687\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"22.687\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"23.637\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"24.587\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"8.266\" width=\"1.653\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"6.518\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.827\" y=\"10.516\" width=\"1.653\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.911\" y=\"-13.487\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.911\" y=\"-12.987\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.911\" y=\"-12.489\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.911\" y=\"-11.989\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.05\" y=\"-11.989\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.05\" y=\"-12.489\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.05\" y=\"-12.987\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.05\" y=\"-13.487\" width=\"0.861\" height=\"0.381\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.94\" y=\"-11.497\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.439\" y=\"-11.497\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.058\" y=\"-11.497\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.559\" y=\"-11.497\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.559\" y=\"-14.459\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.058\" y=\"-14.459\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.439\" y=\"-14.459\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.94\" y=\"-14.459\" width=\"0.381\" height=\"0.861\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.9\" y=\"-13.448\" width=\"1.801\" height=\"1.801\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.576\" y=\"-18.466\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.222\" y=\"-18.466\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.52\" y=\"-15.73\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.52\" y=\"-16.69\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.58\" y=\"-15.73\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.58\" y=\"-16.69\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.731\" y=\"22.313\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.53\" y=\"22.313\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.657\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.655\" y=\"24.028\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.556\" y=\"23.602\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.636\" y=\"22.652\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.636\" y=\"24.552\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"22.828\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"23.778\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"24.728\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"24.728\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"23.778\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"22.828\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.253\" y=\"-18.306\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.894\" y=\"-18.306\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.808\" y=\"-18.306\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.167\" y=\"-18.306\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-1.778\" cy=\"-24.968\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.318\" cy=\"-24.968\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.318\" cy=\"-24.968\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.778\" cy=\"-24.968\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"22.225\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"9.525\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.065\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"6.985\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.145\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"14.605\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"24.765\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.065\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"24.765\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"14.605\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"22.225\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.145\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"9.525\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"6.058\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.76\" y=\"22.578\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-5.36\" y=\"24.248\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"-6.647\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.625\" y=\"9.093\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.278\" y=\"-28.081\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"1.78\" cy=\"-25.229\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.93,-24.729 2.63,-25.729\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"4.32\" cy=\"-25.229\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"3.47,-24.729 5.17,-25.729\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-5.818\" y=\"-28.081\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.32\" cy=\"-25.229\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-5.17,-24.729 -3.47,-25.729\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.78\" cy=\"-25.229\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.63,-24.729 -0.93,-25.729\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-1.5\" y=\"-14.048\" width=\"3\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-12.328\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"5.85\" y=\"16.895\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.418\" y=\"-16.324\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.85\" y=\"19.435\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"-2.022\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"-4.816\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"0.772\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0\" y=\"-7.61\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1\" y=\"-18.354\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.232\" y=\"24.14\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.222\" y=\"22.489\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"16.088\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.414\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.583\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.158\" y=\"21.823\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.381\" y=\"22.578\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.059\" y=\"22.528\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"1.321\" y=\"24.248\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-0.479\" y=\"-16.324\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.756\" y=\"-18.205\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.305\" y=\"-18.205\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.85\" y=\"9.275\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">RST</text><text x=\"-10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"25.065\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"22.525\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"19.985\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"17.445\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"14.905\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"12.365\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"9.825\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GP</text><text x=\"10.03\" y=\"7.285\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"7.993\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GPIO/SDO</text><text x=\"0\" y=\"27.475\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">DAC 14</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.318\" y=\"-26.218\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUT0</text></g><g transform=\"scale(-1 1)\"><text x=\"1.778\" y=\"-26.218\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.778\" y=\"-26.218\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.318\" y=\"-26.218\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">OUT1</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3886-dac7": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "rect",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p2",
        "number": "2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RST contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p3",
        "number": "3",
        "label": "CS",
        "type": "input",
        "description": "SPI Chip Select input to the module.",
        "x": -11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p4",
        "number": "4",
        "label": "SCK",
        "type": "input",
        "description": "SPI Clock input to the module.",
        "x": -11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p5",
        "number": "5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p6",
        "number": "6",
        "label": "SDI",
        "type": "input",
        "description": "SPI Data IN input to the module.",
        "x": -11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p7",
        "number": "7",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS 3.3V contact; retained as a physical terminal.",
        "x": -11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p8",
        "number": "8",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": -11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "left",
        "caption": ""
      },
      {
        "back": false,
        "id": "p9",
        "number": "9",
        "label": "GND",
        "type": "power_in",
        "description": "Ground reference and supply return.",
        "x": 11.43,
        "y": 17.653,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p10",
        "number": "10",
        "label": "5V",
        "type": "power_in",
        "description": "5 V supply contact. Follow the documented supply selection; separate supply inputs are not implicitly joined.",
        "x": 11.43,
        "y": 15.113,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p11",
        "number": "11",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SDA contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 12.573,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p12",
        "number": "12",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCL contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 10.033,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p13",
        "number": "13",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS TX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 7.493,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p14",
        "number": "14",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS RX contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 4.953,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p15",
        "number": "15",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS INT contact; retained as a physical terminal.",
        "x": 11.43,
        "y": 2.413,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "back": false,
        "id": "p16",
        "number": "16",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS PWM contact; retained as a physical terminal.",
        "x": 11.43,
        "y": -0.127,
        "size": [
          1.7,
          1.7
        ],
        "drill": 1,
        "shape": "circle",
        "side": "right",
        "caption": ""
      },
      {
        "id": "ch0-vouta",
        "number": "CH0.VOUTA",
        "label": "VOUTA",
        "type": "output",
        "description": "AD5624R analog voltage output; observe the selected reference and supply limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -5.715,
        "y": -17.78,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "ch0-voutb",
        "number": "CH0.VOUTB",
        "label": "VOUTB",
        "type": "output",
        "description": "AD5624R analog voltage output; observe the selected reference and supply limits. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -3.175,
        "y": -17.78,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "ch1-voutc",
        "number": "CH1.VOUTC",
        "label": "VOUTC",
        "type": "output",
        "description": "AD5624R channelC analog output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 0.254,
        "y": -17.78,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "ch1-voutd",
        "number": "CH1.VOUTD",
        "label": "VOUTD",
        "type": "output",
        "description": "AD5624R channelD analog output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 2.794,
        "y": -17.78,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      },
      {
        "id": "ch1-gnd",
        "number": "CH1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common analog/host ground return. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 5.334,
        "y": -17.78,
        "size": [
          1.7,
          1.7
        ],
        "shape": "circle",
        "back": true,
        "drill": 1,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"0.767\" y=\"-8.39\" width=\"1.499\" height=\"2.286\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.525\" y=\"-8.39\" width=\"1.499\" height=\"2.286\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.899\" y=\"-5.055\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.1\" y=\"-5.055\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.279\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.278\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.607\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.405\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"10.222\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"10.222\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"10.222\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.427\" y=\"3.176\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.523\" y=\"5.478\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.377\" y=\"5.478\" width=\"0.853\" height=\"1.252\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.243\" y=\"3.653\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.243\" y=\"5.151\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.406\" y=\"-4.67\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.366\" y=\"-4.67\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.892\" y=\"4.087\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.892\" y=\"5.047\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.682\" y=\"-6.487\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.682\" y=\"-6.987\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.682\" y=\"-7.488\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.682\" y=\"-7.988\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.682\" y=\"-8.489\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.616\" y=\"-8.489\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.616\" y=\"-7.988\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.616\" y=\"-7.488\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.616\" y=\"-6.987\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.616\" y=\"-6.487\" width=\"1.674\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"0.254\" cy=\"-17.78\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.794\" cy=\"-17.78\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"5.334\" cy=\"-17.78\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-3.175\" cy=\"-17.78\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-5.715\" cy=\"-17.78\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.394\" y=\"-19.393\" width=\"0.8\" height=\"4.15\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.934\" y=\"-19.393\" width=\"0.8\" height=\"4.15\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.146\" y=\"-19.393\" width=\"0.8\" height=\"4.15\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.394\" y=\"-19.393\" width=\"0.8\" height=\"4.15\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.794\" y=\"-19.393\" width=\"2\" height=\"3\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.334\" y=\"-19.393\" width=\"2\" height=\"3\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.746\" y=\"-19.393\" width=\"2\" height=\"3\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.794\" y=\"-19.393\" width=\"2\" height=\"3\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.844\" y=\"-18.743\" width=\"1.9\" height=\"1.9\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.384\" y=\"-18.743\" width=\"1.9\" height=\"1.9\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.696\" y=\"-18.743\" width=\"1.9\" height=\"1.9\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.844\" y=\"-18.743\" width=\"1.9\" height=\"1.9\" rx=\"0.1\" fill=\"#aab2c4\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.294\" y=\"-20.893\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.246\" y=\"-20.893\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#80ff80\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.215\" y=\"-20.893\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.676\" y=\"-4.943\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.702\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.098\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.394\" y=\"4.153\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.424\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.45\" y=\"3.553\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"5.173\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-1.999\" y=\"-4.568\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.79\" y=\"4.453\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.08\" y=\"-8.747\" width=\"4.9\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.63\" y=\"-7.027\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">DAC 7</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"5.715\" y=\"-19.03\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUTA</text></g><g transform=\"scale(-1 1)\"><text x=\"3.175\" y=\"-19.03\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUTB</text></g><g transform=\"scale(-1 1)\"><text x=\"-0.254\" y=\"-19.03\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUTC</text></g><g transform=\"scale(-1 1)\"><text x=\"-2.794\" y=\"-19.03\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VOUTD</text></g><g transform=\"scale(-1 1)\"><text x=\"-5.334\" y=\"-19.03\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  }
};
