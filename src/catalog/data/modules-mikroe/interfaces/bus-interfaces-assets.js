// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "mikroe-mikroe-3743-i2ctospi": {
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
        "label": "RST",
        "type": "input",
        "description": "Active-low hardware reset of the SC18IS602B bridge.",
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
        "type": "bidirectional",
        "description": "SC18IS602B SS0 active-low SPI select output, or programmable GPIO0 when not used as slave select. The generic product-table A0 suffix does not match the v100 schematic routing.",
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
        "type": "output",
        "description": "SPI master clock output from the SC18IS602B to downstream SPI peripherals.",
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
        "type": "input",
        "description": "SPI MISO data input to the bridge. The PCB legend is SDO, but this module operates as SPI master.",
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
        "label": "SDI",
        "type": "output",
        "description": "SPI MOSI data output from the bridge to downstream peripherals. The PCB legend is SDI.",
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
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input; the bridge may stretch the clock low while completing internal operations.",
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
        "label": "INT",
        "type": "open_collector",
        "description": "Active-low open-drain interrupt output; observe the schematic pull-up arrangement.",
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
      }
    ],
    "artwork": "<rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.347\" y=\"-9.748\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.347\" y=\"-10.709\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.569\" y=\"-4.768\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.569\" y=\"-3.808\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.352\" y=\"-4.74\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.352\" y=\"-3.78\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.273\" y=\"-4.74\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.273\" y=\"-3.78\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"4.444\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"4.444\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"4.444\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"1.777\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"1.777\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"1.777\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"-0.89\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"-0.89\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"-0.89\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-12.268\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-11.618\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-10.968\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-10.317\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-9.667\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-9.017\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-8.367\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.984\" y=\"-7.717\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-7.717\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-8.367\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-9.017\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-9.667\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-10.317\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-10.968\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-11.618\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.757\" y=\"-12.268\" width=\"1.773\" height=\"0.554\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.2\" y=\"-12.216\" width=\"6.4\" height=\"5\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-9.496\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-3.171\" y=\"-4.373\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.25\" y=\"-4.373\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"-4.401\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"-0.689\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"1.978\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"4.645\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.449\" y=\"-10.343\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">RST</text><text x=\"-10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">I2C to SPI</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-2583-spiisolator": {
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
        "label": "SDO",
        "type": "output",
        "description": "SPI Data OUT from the module to the host.",
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
        "id": "tb1-vcc_iso",
        "number": "TB1.VCC_ISO",
        "label": "VCC_ISO",
        "type": "power_in",
        "description": "Separate ADuM4154 remote-side supply input, not host VCC. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -6.858,
        "y": -18.161,
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
        "id": "tb1-gnd_iso",
        "number": "TB1.GND_ISO",
        "label": "GND_ISO",
        "type": "power_in",
        "description": "Separate isolated-side return, not host ground. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.318,
        "y": -18.161,
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
        "id": "tb2-sclk",
        "number": "TB2.SCLK",
        "label": "SCLK",
        "type": "output",
        "description": "ADuM4154 remote SPI clock output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.27,
        "y": -18.161,
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
        "id": "tb2-so",
        "number": "TB2.SO",
        "label": "SO",
        "type": "input",
        "description": "Remote slave-output data input to ADuM4154 SI pin17, returned to host MI. The board SO legend describes the connected slave output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.27,
        "y": -18.161,
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
        "id": "tb3-si",
        "number": "TB3.SI",
        "label": "SI",
        "type": "output",
        "description": "ADuM4154 SO pin16 output to the remote slave input; source legend SI uses the connected-slave perspective. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.318,
        "y": -18.161,
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
        "id": "tb3-sss",
        "number": "TB3.SSS",
        "label": "SSS",
        "type": "output",
        "description": "ADuM4154 SS0 remote slave-select output. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 6.858,
        "y": -18.161,
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
    "artwork": "<rect x=\"-6.234\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.964\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.694\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.424\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.154\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.116\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.386\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.656\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.926\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.196\" y=\"-10.742\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.196\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.926\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.656\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.386\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.116\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.154\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.424\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.694\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.964\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.234\" y=\"-1.191\" width=\"0.785\" height=\"1.773\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.44\" y=\"14.54\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.561\" y=\"14.54\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.912\" y=\"14.54\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.91\" y=\"14.54\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.911\" y=\"14.54\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.647\" y=\"14.566\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.849\" y=\"14.566\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.985\" y=\"1.459\" width=\"1.354\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.783\" y=\"1.459\" width=\"1.354\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-9.831\" y=\"-11.342\" width=\"1.354\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.033\" y=\"-11.342\" width=\"1.354\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.318\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"6.858\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.27\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.27\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-6.858\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.318\" cy=\"-18.161\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-6.207\" y=\"1.661\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-9.255\" y=\"-11.141\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.34\" y=\"14.742\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.016\" y=\"14.742\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-8.358\" y=\"-21.274\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-6.86\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-7.71,-17.922 -6.01,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-4.32\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-5.17,-17.922 -3.47,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2.77\" y=\"-21.274\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-1.27\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.12,-17.922 -0.42,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"1.27\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.42,-17.922 2.12,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"2.818\" y=\"-21.274\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"4.32\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"3.47,-17.922 5.17,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"6.86\" cy=\"-18.422\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"6.01,-17.922 7.71,-18.922\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-7.777\" y=\"-8.83\" width=\"15.3\" height=\"7.5\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.127\" y=\"-4.86\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-7.334\" y=\"14.742\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">SPI Isolator</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"6.858\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VCC_ISO</text></g><g transform=\"scale(-1 1)\"><text x=\"4.318\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND_ISO</text></g><g transform=\"scale(-1 1)\"><text x=\"1.27\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SCLK</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.27\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SO</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.318\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SI</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.858\" y=\"-19.411\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SSS</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4675-i2cisolator4": {
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
        "type": "bidirectional",
        "description": "Host-side I2C SCL allows the documented bidirectional clock-stretching path through this isolator; its pull-up belongs to the host VCC domain.",
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
        "id": "vin-gnd_iso",
        "number": "VIN.GND_ISO",
        "label": "GND",
        "type": "power_in",
        "description": "Separate isolated-side return. The source uses a triangle ground symbol, distinct from host earth-ground symbol; it is not an internal host-ground bond. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.064,
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
        "id": "vin-vin",
        "number": "VIN.VIN",
        "label": "VIN",
        "type": "power_in",
        "description": "Isolated-side supply input; separate from the host VCC supply. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.524,
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
        "id": "i2c-sda",
        "number": "I2C.SDA",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.524,
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
        "id": "i2c-scl",
        "number": "I2C.SCL",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.064,
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
    "artwork": "<rect x=\"-2.075\" y=\"-7.333\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.576\" y=\"-7.333\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.075\" y=\"-9.619\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.576\" y=\"-9.619\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.996\" y=\"10.752\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.497\" y=\"10.752\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.456\" y=\"8.212\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.957\" y=\"8.212\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"11.746\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.831\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.561\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.291\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.021\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.249\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.519\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.789\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.059\" y=\"-4.634\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.059\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.789\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.519\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.249\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.021\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.291\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.561\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.831\" y=\"4.667\" width=\"0.772\" height=\"2.253\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.682\" y=\"-7.333\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.041\" y=\"-7.333\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.041\" y=\"-9.619\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.682\" y=\"-9.619\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.962\" y=\"10.752\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.603\" y=\"10.752\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"8.212\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.063\" y=\"8.212\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"16.852\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.064\" cy=\"-18.288\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.524\" cy=\"-18.288\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.524\" cy=\"-18.288\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.064\" cy=\"-18.288\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-5.564\" y=\"-21.401\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.06\" cy=\"-18.549\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-4.91,-18.049 -3.21,-19.049\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.52\" cy=\"-18.549\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.37,-18.049 -0.67,-19.049\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2\" y=\"11.948\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.69\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.42\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.15\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.88\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.39\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.66\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.93\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.2\" y=\"-4.182\" width=\"0.49\" height=\"10.65\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.69\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.42\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.15\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.88\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.39\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.66\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.93\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.2\" y=\"-2.921\" width=\"0.49\" height=\"8.128\" rx=\"0.1\" fill=\"#e0e0e0\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.5\" y=\"-2.657\" width=\"13\" height=\"7.6\" rx=\"0.1\" fill=\"#303030\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.544\" y=\"-7.232\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.544\" y=\"-9.518\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.465\" y=\"10.853\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.925\" y=\"8.313\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.024\" y=\"-21.401\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.074\" y=\"-7.182\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.074\" y=\"-9.468\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.995\" y=\"10.903\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.455\" y=\"8.363\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">I2C Isolator 4</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.064\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"1.524\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.524\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SDA</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.064\" y=\"-19.538\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SCL</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5603-i2cisolator6": {
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
        "type": "bidirectional",
        "description": "Host-side I2C SCL allows the documented bidirectional clock-stretching path through this isolator; its pull-up belongs to the host VCC domain.",
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
        "id": "vin-gnd_iso",
        "number": "VIN.GND_ISO",
        "label": "GND",
        "type": "power_in",
        "description": "Separate isolated-side return. The source uses a triangle ground symbol, distinct from host earth-ground symbol; it is not an internal host-ground bond. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.3434,
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
        "id": "vin-vin",
        "number": "VIN.VIN",
        "label": "VIN",
        "type": "power_in",
        "description": "Isolated-side supply input; separate from the host VCC supply. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.8034,
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
        "id": "i2c-sda",
        "number": "I2C.SDA",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.8034,
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
        "id": "i2c-scl",
        "number": "I2C.SCL",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.3434,
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
    "artwork": "<rect x=\"-0.8\" y=\"15.667\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.872\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.602\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.332\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.062\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.208\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.478\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.748\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.018\" y=\"-7.475\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.018\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.748\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.478\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.208\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.062\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.332\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.602\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.872\" y=\"2.075\" width=\"0.853\" height=\"2.454\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.245\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.715\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.52\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.48\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.042\" y=\"6.887\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.082\" y=\"6.887\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.52\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.48\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.042\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.082\" y=\"-9.013\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.042\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.082\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.245\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.715\" y=\"5.338\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.931\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.179\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.219\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.328\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.368\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.325\" y=\"16.49\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"15.54\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"17.44\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.325\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.123\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"9.867\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"9.867\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"9.867\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.249\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.25\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-1.803\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-4.343\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.343\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.803\" cy=\"-18.085\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.348\" y=\"-8.911\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.888\" y=\"-8.911\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.675\" y=\"6.989\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.843\" y=\"-21.198\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.34\" cy=\"-18.346\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-5.19,-17.846 -3.49,-18.846\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.8\" cy=\"-18.346\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.65,-17.846 -0.95,-18.846\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"1.888\" y=\"5.44\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.15\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.303\" y=\"-21.198\" width=\"5.54\" height=\"6.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.675\" y=\"-8.911\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.675\" y=\"5.44\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.961\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.826\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.816\" y=\"15.377\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.068\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.811\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.348\" y=\"5.44\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.38\" y=\"15.416\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"4.24\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.97\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.7\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.43\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.84\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.11\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.38\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.65\" y=\"2.277\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.24\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.97\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.7\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.43\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.84\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.11\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.38\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.65\" y=\"-6.623\" width=\"0.41\" height=\"1.4\" rx=\"0.1\" fill=\"#cccccc\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.15\" y=\"-5.223\" width=\"10.3\" height=\"7.5\" rx=\"0.1\" fill=\"#333333\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">I2C Isolator 6</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.343\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"1.803\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.803\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SDA</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.343\" y=\"-19.335\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SCL</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5943-i2cisolator7": {
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
        "type": "bidirectional",
        "description": "Host-side I2C SCL allows the documented bidirectional clock-stretching path through this isolator; its pull-up belongs to the host VCC domain.",
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
        "id": "vin-vin",
        "number": "VIN.VIN",
        "label": "VIN",
        "type": "power_in",
        "description": "Isolated-side supply input; separate from the host VCC supply. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -4.064,
        "y": -17.8562,
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
        "id": "vin-gnd_iso",
        "number": "VIN.GND_ISO",
        "label": "GND",
        "type": "power_in",
        "description": "Separate isolated-side return. The source uses a triangle ground symbol, distinct from host earth-ground symbol; it is not an internal host-ground bond. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": -1.524,
        "y": -17.8562,
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
        "id": "i2c-sda",
        "number": "I2C.SDA",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 1.524,
        "y": -17.8562,
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
        "id": "i2c-scl",
        "number": "I2C.SCL",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Isolated-side bidirectional I2C signal. Its pull-up and input limits are relative to isolated VIN/GND; do not merge it with the host-side net. The source does not publish a numeric terminal designator; this native identifier records the connector reference and signal.",
        "x": 4.064,
        "y": -17.8562,
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
    "artwork": "<rect x=\"-0.8\" y=\"15.667\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.252\" y=\"-5.762\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.292\" y=\"-5.762\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.252\" y=\"-6.905\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.292\" y=\"-6.905\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.258\" y=\"4.525\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.297\" y=\"4.525\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.255\" y=\"3.255\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.295\" y=\"3.255\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.036\" y=\"10.342\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.076\" y=\"10.342\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.036\" y=\"11.561\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.076\" y=\"11.561\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.931\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.179\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.219\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.328\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.368\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.758\" y=\"-9.467\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.118\" y=\"-9.467\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.793\" y=\"-9.467\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.152\" y=\"-9.467\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.256\" y=\"-4.371\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.986\" y=\"-4.371\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.285\" y=\"-4.371\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.554\" y=\"-4.371\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.554\" y=\"0.541\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.285\" y=\"0.541\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.986\" y=\"0.541\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.256\" y=\"0.541\" width=\"0.701\" height=\"2.002\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.53\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.731\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"8.038\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"8.038\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"8.038\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.657\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.655\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.325\" y=\"16.49\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"15.54\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"17.44\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.618\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.008\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-4.064\" cy=\"-17.856\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.524\" cy=\"-17.856\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.524\" cy=\"-17.856\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"4.064\" cy=\"-17.856\" r=\"1.002\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-5.564\" y=\"-20.969\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"-4.06\" cy=\"-18.117\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-4.91,-17.617 -3.21,-18.617\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"-1.52\" cy=\"-18.117\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"-2.37,-17.617 -0.67,-18.617\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2.45\" y=\"-3.914\" width=\"4.9\" height=\"6\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-0.694\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"5.444\" y=\"10.443\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.444\" y=\"11.663\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.024\" y=\"-20.969\" width=\"5.54\" height=\"6.2\" rx=\"0.18\" fill=\"#eaa331\" stroke=\"#647062\" stroke-width=\".05\"/><circle cx=\"1.52\" cy=\"-18.117\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"0.67,-17.617 2.37,-18.617\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"4.06\" cy=\"-18.117\" r=\"1.016\" fill=\"#bfc5bd\" stroke=\"#626c63\" stroke-width=\"0.1\"/><polyline points=\"3.21,-17.617 4.91,-18.617\" fill=\"none\" stroke=\"#555f57\" stroke-width=\"0.21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"-2.885\" y=\"-5.66\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.885\" y=\"-6.803\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.89\" y=\"4.627\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.888\" y=\"3.357\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.961\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.232\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.222\" y=\"15.377\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"8.24\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.811\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.15\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.38\" y=\"15.416\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">I2C Isolator 7</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"4.064\" y=\"-19.106\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VIN</text></g><g transform=\"scale(-1 1)\"><text x=\"1.524\" y=\"-19.106\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.524\" y=\"-19.106\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SDA</text></g><g transform=\"scale(-1 1)\"><text x=\"-4.064\" y=\"-19.106\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SCL</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3298-llcspi": {
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
        "description": "Bidirectional MOSFET level-translation channel on the host side; the board is not an SPI controller.",
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
        "type": "bidirectional",
        "description": "Bidirectional MOSFET level-translation channel on the host side; the board is not an SPI controller.",
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
        "type": "bidirectional",
        "description": "Bidirectional MOSFET level-translation channel on the host side; the board is not an SPI controller.",
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
        "type": "bidirectional",
        "description": "Bidirectional MOSFET level-translation channel on the host side; the board is not an SPI controller.",
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
        "label": "3V3",
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
        "id": "j1-gnd",
        "number": "J1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common reference ground shared by both level-shifter sides.",
        "x": -6.35,
        "y": -19.685,
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
        "id": "j1-vsl",
        "number": "J1.5",
        "label": "VSL",
        "type": "power_in",
        "description": "Low-side logic reference supply VSL; observe the selected VCC/VSL translation arrangement.",
        "x": -3.81,
        "y": -19.685,
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
        "id": "j1-cs",
        "number": "J1.4",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional FET level-translation channel CS; SPI role follows the attached master/peripheral arrangement rather than an onboard bus controller.",
        "x": -1.27,
        "y": -19.685,
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
        "id": "j1-sck",
        "number": "J1.3",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional FET level-translation channel SCK; SPI role follows the attached master/peripheral arrangement rather than an onboard bus controller.",
        "x": 1.27,
        "y": -19.685,
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
        "id": "j1-sdo",
        "number": "J1.2",
        "label": "SDO",
        "type": "bidirectional",
        "description": "Bidirectional FET level-translation channel SDO; SPI role follows the attached master/peripheral arrangement rather than an onboard bus controller.",
        "x": 3.81,
        "y": -19.685,
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
        "id": "j1-sdi",
        "number": "J1.1",
        "label": "SDI",
        "type": "bidirectional",
        "description": "Bidirectional FET level-translation channel SDI; SPI role follows the attached master/peripheral arrangement rather than an onboard bus controller.",
        "x": 6.35,
        "y": -19.685,
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
    "artwork": "<rect x=\"3.472\" y=\"15.582\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.674\" y=\"15.582\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.624\" y=\"15.646\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.625\" y=\"15.646\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.308\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.307\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.731\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.732\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.843\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.842\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.418\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"7.417\" y=\"0.889\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.533\" y=\"-9.947\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-10.533\" y=\"-8.047\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-8.232\" y=\"-8.997\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.717\" y=\"-9.947\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.717\" y=\"-8.047\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.416\" y=\"-8.997\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.1\" y=\"-9.947\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.1\" y=\"-8.047\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.401\" y=\"-8.997\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.927\" y=\"-9.937\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.927\" y=\"-8.037\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"9.228\" y=\"-8.986\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-15.039\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-13.038\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.896\" y=\"-15.039\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.896\" y=\"-13.038\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.676\" y=\"-15.039\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.676\" y=\"-13.038\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.248\" y=\"-15.039\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.248\" y=\"-13.038\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-5.387\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.468\" y=\"-3.386\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.896\" y=\"-5.413\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.896\" y=\"-3.411\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.687\" y=\"-5.413\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.687\" y=\"-3.411\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.259\" y=\"-5.413\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.259\" y=\"-3.411\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"10.476\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"10.476\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"10.476\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"3.81\" cy=\"-19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-6.35\" cy=\"-19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-3.81\" cy=\"-19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"1.27\" cy=\"-19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-1.27\" cy=\"-19.685\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"5.423\" y=\"-20.612\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.369\" y=\"-4.835\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.797\" y=\"-4.835\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.784\" y=\"-4.835\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.356\" y=\"-4.81\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.36\" y=\"-14.462\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.994\" y=\"1.001\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.788\" y=\"-14.462\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.419\" y=\"1.001\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.784\" y=\"-14.462\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.156\" y=\"1.001\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.356\" y=\"-14.462\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.731\" y=\"1.001\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.048\" y=\"15.758\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"7.305\" y=\"-10.01\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.477\" y=\"-10.02\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.339\" y=\"-10.02\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-10.156\" y=\"-10.02\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.165\" y=\"15.758\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.678\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.62\" y=\"-21.145\" width=\"15.24\" height=\"2.92\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3V3</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">LLC SPI</text>",
    "backArtwork": "<g transform=\"scale(-1 1)\"><text x=\"6.35\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text></g><g transform=\"scale(-1 1)\"><text x=\"3.81\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">VSL</text></g><g transform=\"scale(-1 1)\"><text x=\"1.27\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">CS</text></g><g transform=\"scale(-1 1)\"><text x=\"-1.27\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SCK</text></g><g transform=\"scale(-1 1)\"><text x=\"-3.81\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SDO</text></g><g transform=\"scale(-1 1)\"><text x=\"-6.35\" y=\"-20.935\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">SDI</text></g>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  }
};
