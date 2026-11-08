// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "mikroe-mikroe-6465-lightranger12": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "SNC",
        "type": "bidirectional",
        "description": "Synchronization / GPIO; observe the onboard device configuration and logic limits.",
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
        "label": "RST",
        "type": "input",
        "description": "ID SEL input to the module.",
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
        "description": "SPI Select / ID COMM. ClickID communication is bidirectional; the documented selection circuit determines shared SPI operation.",
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
        "description": "Interrupt from the module to the host.",
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
        "label": "LP",
        "type": "input",
        "description": "Low Power I2C Enable input to the module.",
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
      }
    ],
    "artwork": "<rect x=\"0.521\" y=\"15.667\" width=\"1.6\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.626\" y=\"-6.891\" width=\"3.15\" height=\"2.149\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.506\" y=\"5.103\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.506\" y=\"6.063\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.465\" y=\"5.103\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.465\" y=\"6.063\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.41\" y=\"-15.573\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.41\" y=\"-14.613\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.352\" y=\"-20.147\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.352\" y=\"-21.107\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.832\" y=\"-15.573\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.832\" y=\"-14.613\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.357\" y=\"-6.947\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.357\" y=\"-7.907\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.357\" y=\"-4.498\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.357\" y=\"-5.458\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.791\" y=\"6.063\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.791\" y=\"5.103\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.791\" y=\"2.725\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.791\" y=\"3.686\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.959\" y=\"-1.069\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.959\" y=\"-0.109\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.94\" y=\"-1.069\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.94\" y=\"-0.109\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.079\" y=\"-1.069\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.079\" y=\"-0.109\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.012\" y=\"-1.069\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.012\" y=\"-0.109\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.183\" y=\"6.971\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.182\" y=\"6.971\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"6.971\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"4.66\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.182\" y=\"4.66\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.183\" y=\"4.66\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.183\" y=\"2.348\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.182\" y=\"2.348\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"2.348\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.157\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.158\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.156\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.183\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.182\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.184\" y=\"9.282\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.054\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.014\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.822\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.782\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.215\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.176\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.525\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.565\" y=\"14.609\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.426\" y=\"-9.343\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.386\" y=\"-9.343\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.426\" y=\"-10.301\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.386\" y=\"-10.301\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"-11.993\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.631\" y=\"-11.993\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"-9.089\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.631\" y=\"-9.089\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"-11.038\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.631\" y=\"-11.038\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.671\" y=\"-10.057\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.631\" y=\"-10.057\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.386\" y=\"-11.274\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.426\" y=\"-11.274\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.655\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.657\" y=\"16.916\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.53\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.731\" y=\"15.201\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.636\" y=\"17.44\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.636\" y=\"15.54\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.556\" y=\"16.49\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.329\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"17.616\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"16.666\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.297\" y=\"15.716\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"17.475\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"16.525\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.794\" y=\"15.575\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"15.575\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"16.525\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.019\" y=\"17.475\" width=\"1.095\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.9\" y=\"-16.698\" width=\"0.701\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.2\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.448\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.301\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.05\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.802\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.551\" y=\"-16.698\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.949\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.2\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.448\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.301\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.05\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.802\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.551\" y=\"-18.816\" width=\"0.602\" height=\"0.615\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.348\" y=\"-17.75\" width=\"0.637\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.986\" y=\"-17.75\" width=\"0.637\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.209\" y=\"-18.1\" width=\"2.418\" height=\"1.3\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.128\" y=\"2.807\" width=\"0.803\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.029\" y=\"2.807\" width=\"0.803\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.029\" y=\"5.555\" width=\"0.803\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.079\" y=\"5.555\" width=\"0.803\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.128\" y=\"5.555\" width=\"0.803\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.622\" y=\"-6.797\" width=\"1.064\" height=\"0.462\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.622\" y=\"-5.298\" width=\"1.064\" height=\"0.462\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.788\" y=\"-5.298\" width=\"1.064\" height=\"0.462\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.788\" y=\"-6.797\" width=\"1.064\" height=\"0.462\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.467\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.967\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.466\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.034\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.532\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.032\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.533\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.033\" y=\"-4.644\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.033\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.533\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.032\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.532\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.034\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.466\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.967\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.467\" y=\"-8.053\" width=\"0.465\" height=\"1.064\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"6.608\" y=\"5.469\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.567\" y=\"5.469\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.734\" y=\"9.484\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.647\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.232\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.222\" y=\"15.377\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.414\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.583\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.158\" y=\"14.711\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.381\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.059\" y=\"15.416\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"1.321\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-6.76\" y=\"15.466\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-5.36\" y=\"17.136\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"0.512\" y=\"-15.207\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.25\" y=\"-20.741\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.73\" y=\"-15.207\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.459\" y=\"-7.542\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.459\" y=\"-5.092\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.893\" y=\"5.469\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.893\" y=\"3.093\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.607\" y=\"2.55\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.607\" y=\"7.173\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.607\" y=\"9.484\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.607\" y=\"4.861\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.019\" y=\"-9.242\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.019\" y=\"-10.198\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.038\" y=\"-11.892\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.038\" y=\"-8.988\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.038\" y=\"-10.935\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.038\" y=\"-9.956\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.857\" y=\"-0.703\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.018\" y=\"-11.172\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.838\" y=\"-0.703\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.977\" y=\"-0.703\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.91\" y=\"-0.703\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.2\" y=\"-18.965\" width=\"6.4\" height=\"3.03\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-17.23\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"1.955\" y=\"3.283\" width=\"3.05\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"3.48\" y=\"5.003\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><rect x=\"-2.456\" y=\"-7.722\" width=\"4.81\" height=\"3.81\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.051\" y=\"-5.597\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U5</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SNC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">RST</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SCK</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDO</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">SDI</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">LP</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">LightRanger 12</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4592-lightranger5": {
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
        "label": "IO0",
        "type": "bidirectional",
        "description": "General Purpose I/0; observe the onboard device configuration and logic limits.",
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
        "label": "EN",
        "type": "input",
        "description": "Enable/Shutdown input to the module.",
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
        "label": "INT",
        "type": "output",
        "description": "Interrupt from the module to the host.",
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
        "label": "IO1",
        "type": "bidirectional",
        "description": "General Purpose I/0; observe the onboard device configuration and logic limits.",
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
    "artwork": "<rect x=\"-3.56\" y=\"-8.873\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.6\" y=\"-8.873\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.56\" y=\"-7.807\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.6\" y=\"-7.807\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.56\" y=\"-9.991\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.6\" y=\"-9.991\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.56\" y=\"-11.109\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.6\" y=\"-11.109\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.785\" y=\"-9.991\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.825\" y=\"-9.991\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.785\" y=\"-11.109\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.825\" y=\"-11.109\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.56\" y=\"-12.226\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.6\" y=\"-12.226\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.785\" y=\"-12.226\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.825\" y=\"-12.226\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.811\" y=\"-8.873\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.85\" y=\"-8.873\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.811\" y=\"-7.756\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.85\" y=\"-7.756\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-11.777\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-11.175\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-10.575\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-9.976\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-9.376\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.422\" y=\"-8.774\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-8.774\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-9.376\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-9.976\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-10.575\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-11.175\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.057\" y=\"-11.777\" width=\"0.635\" height=\"0.409\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-3.192\" y=\"-8.772\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.192\" y=\"-7.705\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.192\" y=\"-9.889\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.192\" y=\"-11.007\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.192\" y=\"-9.889\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.192\" y=\"-11.007\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.218\" y=\"-7.654\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.218\" y=\"-8.772\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.192\" y=\"-12.124\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.192\" y=\"-12.125\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.125\" y=\"-11.871\" width=\"2.249\" height=\"3.599\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-9.851\" font-family=\"Arial,sans-serif\" font-size=\"0.75\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">IO0</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">EN</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">IO1</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">LightRanger 5</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4492-lightranger8": {
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
        "label": "EN",
        "type": "input",
        "description": "Shutdown Control input to the module.",
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
        "label": "INT",
        "type": "output",
        "description": "Interrupt from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.782\" y=\"-10.738\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.782\" y=\"-12.536\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.547\" y=\"-10.738\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.547\" y=\"-12.536\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.073\" y=\"-12.563\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.073\" y=\"-10.561\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.073\" y=\"-4.338\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.073\" y=\"-6.34\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.547\" y=\"-4.338\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.547\" y=\"-6.34\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"-4.364\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"-6.365\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.9\" y=\"-11.26\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.3\" y=\"-11.26\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.9\" y=\"-10.46\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.1\" y=\"-10.46\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.3\" y=\"-10.46\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.5\" y=\"-10.46\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.3\" y=\"-10.46\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.3\" y=\"-12.06\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.5\" y=\"-12.06\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.3\" y=\"-12.06\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.1\" y=\"-12.06\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.9\" y=\"-12.06\" width=\"0.599\" height=\"0.599\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.67\" y=\"-11.96\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.435\" y=\"-11.96\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.185\" y=\"-11.986\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.185\" y=\"-5.762\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.435\" y=\"-5.762\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.625\" y=\"-5.788\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.43\" y=\"-12.19\" width=\"4.9\" height=\"2.5\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0.02\" y=\"-10.72\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">EN</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">LightRanger 8</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3689-proximity11": {
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS CS contact; retained as a physical terminal.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
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
        "description": "I2C serial clock input.",
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
        "type": "output",
        "description": "Interrupt output from the module to the host.",
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
    "artwork": "<rect x=\"-4.293\" y=\"-10.382\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.293\" y=\"-12.181\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.118\" y=\"-11.821\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.043\" y=\"-11.821\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.031\" y=\"-11.821\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.106\" y=\"-11.821\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.118\" y=\"-10.422\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.043\" y=\"-10.422\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.031\" y=\"-10.422\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.106\" y=\"-10.422\" width=\"0.93\" height=\"0.904\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.436\" y=\"3.947\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.436\" y=\"5.949\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"3.947\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"5.949\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.962\" y=\"3.947\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.962\" y=\"5.949\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-4.181\" y=\"-11.604\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.074\" y=\"4.525\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.625\" y=\"4.525\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.324\" y=\"4.525\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.029\" y=\"-11.685\" width=\"4\" height=\"2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.029\" y=\"-10.465\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.777\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.697\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.157\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.617\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.923\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.463\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 11</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4822-proximity15": {
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
        "label": "XSH",
        "type": "input",
        "description": "Xshutdown (reset) input to the module.",
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
        "label": "INT",
        "type": "output",
        "description": "Interrupt from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.987\" y=\"-3.216\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.987\" y=\"-2.256\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.283\" y=\"-3.216\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.283\" y=\"-2.256\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.257\" y=\"-2.256\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.257\" y=\"-3.216\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.426\" y=\"-2.256\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.426\" y=\"-3.216\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.35\" y=\"-8.974\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.45\" y=\"-12.174\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.35\" y=\"-12.174\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.45\" y=\"-8.974\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.45\" y=\"-9.774\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.45\" y=\"-10.574\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.45\" y=\"-11.374\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.151\" y=\"-12.174\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.151\" y=\"-11.374\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.151\" y=\"-10.574\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.151\" y=\"-9.774\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.151\" y=\"-8.974\" width=\"0.701\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.313\" y=\"-5.58\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.313\" y=\"-7.079\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.211\" y=\"-5.58\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.211\" y=\"-7.079\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.362\" y=\"-6.579\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.162\" y=\"-6.579\" width=\"0.8\" height=\"1.6\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.385\" y=\"-2.85\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.885\" y=\"-2.85\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.528\" y=\"-2.849\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.155\" y=\"-2.849\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">XSH</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 15</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5286-proximity16": {
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
        "description": "I2C Interface Reset input to the module.",
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
        "label": "INT",
        "type": "output",
        "description": "Interrupt from the module to the host.",
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
        "label": "LP",
        "type": "input",
        "description": "Low Power I2C Enable input to the module.",
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
    "artwork": "<rect x=\"0.093\" y=\"-12.48\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.867\" y=\"-12.48\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.867\" y=\"-4.403\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.093\" y=\"-4.403\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.217\" y=\"-8.366\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.257\" y=\"-8.366\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.057\" y=\"-10.067\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.017\" y=\"-10.067\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.217\" y=\"-10.728\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.257\" y=\"-10.728\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.257\" y=\"-7.146\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.217\" y=\"-7.146\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.257\" y=\"-9.547\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.217\" y=\"-9.547\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.452\" y=\"2.303\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.492\" y=\"2.303\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.492\" y=\"5.427\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.452\" y=\"5.427\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-10.655\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-9.906\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-9.154\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-8.405\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-7.656\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-6.904\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.364\" y=\"-6.154\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-6.154\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-6.904\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-7.656\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-8.405\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-9.154\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-9.906\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.734\" y=\"-10.655\" width=\"0.63\" height=\"0.63\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.325\" y=\"-11.064\" width=\"0.65\" height=\"0.65\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.325\" y=\"-5.766\" width=\"0.65\" height=\"0.65\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.651\" y=\"-9.313\" width=\"1.303\" height=\"2.446\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.624\" y=\"-9.445\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.624\" y=\"-7.045\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.65\" y=\"-9.965\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.859\" y=\"2.404\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.624\" y=\"-8.264\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.5\" y=\"-12.378\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.5\" y=\"-4.301\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.859\" y=\"5.528\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.624\" y=\"-10.626\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.499\" y=\"-11.29\" width=\"2.997\" height=\"6.401\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-7.87\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">RST</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">LP</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 16</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5084-proximity17": {
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
        "label": "INT",
        "type": "output",
        "description": "Interrupt from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"-0.24\" y=\"-12.004\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.967\" y=\"-12.004\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.967\" y=\"-12.603\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.24\" y=\"-12.603\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.484\" y=\"-12.004\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.484\" y=\"-12.603\" width=\"0.5\" height=\"0.35\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.202\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.404\" y=\"9.676\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.608\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.609\" y=\"9.741\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.963\" y=\"-9.454\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.464\" y=\"-9.454\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.963\" y=\"-3.739\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.464\" y=\"-3.739\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.275\" y=\"1.773\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.224\" y=\"1.773\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.198\" y=\"-2.24\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.3\" y=\"-2.24\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.092\" y=\"-3.739\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.593\" y=\"-3.739\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.208\" y=\"-7.823\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.293\" y=\"-7.823\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.464\" y=\"-13.95\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.963\" y=\"-13.95\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.526\" y=\"-12.451\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.028\" y=\"-12.451\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.961\" y=\"-10.953\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.602\" y=\"-10.953\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.293\" y=\"-10.953\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.348\" y=\"-10.953\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.293\" y=\"-9.454\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.348\" y=\"-9.454\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.453\" y=\"-2.24\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.094\" y=\"-2.24\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.129\" y=\"-2.24\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.488\" y=\"-2.24\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.129\" y=\"1.773\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.488\" y=\"1.773\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.129\" y=\"4.846\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.488\" y=\"4.846\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.862\" y=\"-5.395\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.912\" y=\"-5.395\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.962\" y=\"-5.395\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.962\" y=\"-7.874\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.912\" y=\"-7.874\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.862\" y=\"-7.874\" width=\"0.704\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.535\" y=\"0.718\" width=\"1.12\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.535\" y=\"-0.583\" width=\"1.12\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.415\" y=\"-0.583\" width=\"1.12\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.415\" y=\"0.067\" width=\"1.12\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.415\" y=\"0.718\" width=\"1.12\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"4.571\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"4.571\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"4.571\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.643\" y=\"-7.687\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.141\" y=\"-7.687\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.143\" y=\"-7.687\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.641\" y=\"-7.687\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.641\" y=\"-4.588\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.143\" y=\"-4.588\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.141\" y=\"-4.588\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.643\" y=\"-4.588\" width=\"0.333\" height=\"0.831\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.396\" y=\"-12.252\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.357\" y=\"-12.252\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-8.23\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.477\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.397\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.857\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.303\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.223\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.763\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-0.991\" y=\"-12.629\" width=\"2\" height=\"1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"9.853\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.032\" y=\"9.853\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.775\" y=\"1.924\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.8\" y=\"-2.089\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.465\" y=\"-13.798\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.026\" y=\"-12.301\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.791\" y=\"-7.672\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.591\" y=\"-3.588\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.465\" y=\"-9.303\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.465\" y=\"-3.588\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"4.772\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.991\" y=\"-2.139\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.991\" y=\"1.874\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.991\" y=\"4.948\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.765\" y=\"-12.151\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.79\" y=\"-10.851\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.79\" y=\"-9.353\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.591\" y=\"-2.139\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.465\" y=\"-10.851\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.15\" y=\"-0.732\" width=\"2.3\" height=\"2.1\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"0.538\" font-family=\"Arial,sans-serif\" font-size=\"0.767\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-4.426\" y=\"-7.323\" width=\"2.4\" height=\"3.2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-3.226\" y=\"-5.503\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"1.815\" y=\"-7.432\" width=\"2.9\" height=\"2.8\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"3.265\" y=\"-5.812\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><text x=\"-10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-7.003\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 17</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3330-proximity7": {
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
        "description": "Interrupt output from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"-1.866\" y=\"-16.21\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.895\" y=\"-16.21\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.075\" y=\"-16.21\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.045\" y=\"-17.612\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.045\" y=\"-16.21\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.075\" y=\"-17.612\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.895\" y=\"-17.612\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.866\" y=\"-17.612\" width=\"0.82\" height=\"0.701\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"9.841\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"9.841\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"9.841\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.695\" y=\"-14.834\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.496\" y=\"-14.834\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.048\" y=\"-14.834\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.849\" y=\"-14.834\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.838\" y=\"15.81\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.04\" y=\"15.81\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.836\" y=\"15.875\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.837\" y=\"15.875\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.867\" y=\"-10.766\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.093\" y=\"-10.766\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.055\" y=\"4.112\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.055\" y=\"6.114\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"6.139\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.737\" y=\"4.138\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.581\" y=\"6.139\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.581\" y=\"4.138\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-2\" y=\"-17.741\" width=\"4\" height=\"2.36\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-16.341\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-3.272\" y=\"-14.722\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.272\" y=\"-14.722\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2\" y=\"10.043\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.347\" y=\"15.987\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.413\" y=\"15.987\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.943\" y=\"4.69\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.625\" y=\"4.715\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.693\" y=\"4.715\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.5\" y=\"-10.664\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">PROXIMITY 7</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3439-proximity8": {
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS 5V contact; retained as a physical terminal.",
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
        "description": "Interrupt output from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"-1.584\" y=\"-19.026\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.809\" y=\"-19.026\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.034\" y=\"-19.026\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.74\" y=\"-19.026\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.74\" y=\"-17.674\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.034\" y=\"-17.674\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.809\" y=\"-17.674\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.584\" y=\"-17.674\" width=\"0.831\" height=\"0.804\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.091\" y=\"8.776\" width=\"0.505\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.091\" y=\"9.276\" width=\"0.505\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.091\" y=\"9.776\" width=\"0.505\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.509\" y=\"9.776\" width=\"0.505\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.509\" y=\"8.776\" width=\"0.505\" height=\"0.483\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.596\" y=\"8.915\" width=\"1.115\" height=\"1.204\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.184\" y=\"10.001\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.184\" y=\"8.203\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.785\" y=\"8.203\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.785\" y=\"10.001\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.753\" y=\"-16.181\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.753\" y=\"-14.383\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.279\" y=\"-16.181\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.279\" y=\"-14.383\" width=\"1.473\" height=\"1.354\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.692\" y=\"1.852\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.692\" y=\"3.853\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.864\" y=\"1.852\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.864\" y=\"3.853\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.42\" y=\"1.852\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.42\" y=\"3.853\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.624\" y=\"14.376\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.625\" y=\"14.376\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.218\" y=\"14.312\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.42\" y=\"14.312\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-1.531\" y=\"-18.947\" width=\"3.05\" height=\"2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.006\" y=\"-17.727\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"0.391\" y=\"-15.605\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.641\" y=\"-15.605\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.673\" y=\"8.779\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.296\" y=\"8.779\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.911\" y=\"14.488\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.048\" y=\"14.488\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.308\" y=\"2.429\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.752\" y=\"2.429\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.804\" y=\"2.429\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.958\" y=\"8.697\" width=\"1.79\" height=\"1.65\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0.063\" y=\"9.742\" font-family=\"Arial,sans-serif\" font-size=\"0.597\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 8</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3194-irgrid2": {
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
      }
    ],
    "artwork": "<rect x=\"-4.742\" y=\"10.679\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.741\" y=\"10.679\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.743\" y=\"10.679\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.611\" y=\"-7.714\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.11\" y=\"-7.714\" width=\"1.102\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.406\" y=\"16.623\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.608\" y=\"16.623\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.607\" y=\"16.688\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.609\" y=\"16.688\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.889\" y=\"-7.366\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.889\" y=\"-5.867\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.889\" y=\"-6.866\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.889\" y=\"-6.368\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.21\" y=\"-6.368\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.21\" y=\"-6.866\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.21\" y=\"-5.867\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.21\" y=\"-7.366\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.156\" y=\"11.194\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.156\" y=\"9.192\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.591\" y=\"11.194\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.591\" y=\"9.192\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.385\" y=\"-7.729\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.385\" y=\"-9.731\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.823\" y=\"-7.729\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.823\" y=\"-9.731\" width=\"1.473\" height=\"1.153\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.194\" y=\"-3.425\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.766\" y=\"-3.425\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.896\" y=\"11.6\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.896\" y=\"10.64\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.846\" y=\"-16.386\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.846\" y=\"-15.425\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-2.083\" cy=\"-13.919\" r=\"0.852\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-2.921\" cy=\"-16.002\" r=\"0.852\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.921\" cy=\"-16.002\" r=\"0.852\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"2.057\" cy=\"-18.059\" r=\"0.852\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-6.166\" y=\"10.881\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.111\" y=\"-7.563\" width=\"1.6\" height=\"0.8\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.915\" y=\"16.799\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.185\" y=\"16.799\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.268\" y=\"9.77\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.702\" y=\"9.77\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.273\" y=\"-9.153\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.712\" y=\"-9.153\" width=\"1.25\" height=\"2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.398\" y=\"-3.323\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.524\" y=\"-7.652\" width=\"3.2\" height=\"2.4\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0.076\" y=\"-6.232\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-4.64\" y=\"-20.642\" width=\"9.28\" height=\"9.28\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><circle cx=\"0\" cy=\"-16.002\" r=\"4.547\" fill=\"#353935\" stroke=\"#959a90\" stroke-width=\"0.18\"/><circle cx=\"0\" cy=\"-16.002\" r=\"2.877\" fill=\"#171c1c\" stroke=\"#70796e\" stroke-width=\"0.1\"/><circle cx=\"0\" cy=\"-16.002\" r=\"1.485\" fill=\"#343c47\" stroke=\"#827f6e\" stroke-width=\"0.1\"/><text x=\"0\" y=\"-15.782\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"5.948\" y=\"-16.019\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.794\" y=\"11.006\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">IR Grid 2</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-5237-lightranger9": {
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
        "label": "IO0",
        "type": "bidirectional",
        "description": "TMF8828 GPIO0 general-purpose input/output; direction and function follow sensor configuration and the source VCC pull-up.",
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
        "label": "EN",
        "type": "input",
        "description": "Enable input to the module.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS SCK contact; retained as a physical terminal.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MISO contact; retained as a physical terminal.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS MOSI contact; retained as a physical terminal.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "I2C serial data; observe the schematic pull-up and supply arrangement.",
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
        "label": "SCL",
        "type": "input",
        "description": "I2C serial clock input.",
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
        "description": "Interrupt from the module to the host.",
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
        "label": "IO1",
        "type": "bidirectional",
        "description": "TMF8828 GPIO1 general-purpose input/output; direction and function follow sensor configuration and the source VCC pull-up.",
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
      }
    ],
    "artwork": "<rect x=\"-2.3\" y=\"-12.812\" width=\"4.6\" height=\"2.002\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-11.591\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"-10.102\" y=\"-15.362\" width=\"20\" height=\"7\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"17.028\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.895\" y=\"17.028\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.354\" y=\"-13.585\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.1\" y=\"-13.585\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.126\" y=\"-10.562\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.818\" y=\"-6.549\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.872\" y=\"-16.785\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.872\" y=\"-16.785\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.024\" y=\"-6.549\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.024\" y=\"-6.549\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.818\" y=\"-6.549\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-10.027\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">IO0</text><text x=\"-10.027\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">EN</text><text x=\"-10.027\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.027\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.027\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.033\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.033\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.033\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.033\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.033\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.033\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">IO1</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">LightRanger 9</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-3048-proximity6": {
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
        "label": "+3V3",
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
        "label": "+5V",
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
        "description": "Interrupt output from the module to the host.",
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
      }
    ],
    "artwork": "<rect x=\"-0.994\" y=\"-12.275\" width=\"1.989\" height=\"1.689\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.504\" y=\"-12.929\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.503\" y=\"-12.929\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.529\" y=\"-12.929\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.53\" y=\"-12.929\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.15\" y=\"14.376\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.151\" y=\"14.376\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.701\" y=\"-2.134\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.699\" y=\"-2.134\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.701\" y=\"-4.42\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.699\" y=\"-4.42\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"5.867\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"5.867\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"7.899\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"7.899\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.481\" y=\"9.931\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.482\" y=\"9.931\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.726\" y=\"-6.706\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.725\" y=\"-6.706\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.58\" y=\"14.312\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.782\" y=\"14.312\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.768\" y=\"14.286\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.767\" y=\"14.286\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.769\" y=\"14.286\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.074\" y=\"5.211\" width=\"0.826\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.165\" y=\"5.211\" width=\"0.826\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.935\" y=\"-11.02\" width=\"0.826\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.025\" y=\"-11.02\" width=\"0.826\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.222\" y=\"-9.754\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.576\" y=\"-9.754\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.254\" y=\"9.931\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.456\" y=\"9.931\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.506\" y=\"-6.706\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.708\" y=\"-6.706\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.731\" y=\"-10.643\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.529\" y=\"-10.643\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.222\" y=\"-15.723\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.576\" y=\"-15.723\" width=\"1.354\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.874\" y=\"-19.639\" width=\"1.554\" height=\"2.703\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.428\" y=\"-19.639\" width=\"1.554\" height=\"2.703\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.956\" y=\"-12.332\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.956\" y=\"-11.882\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.956\" y=\"-11.43\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.956\" y=\"-10.98\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.092\" y=\"-10.98\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.092\" y=\"-11.43\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.092\" y=\"-11.882\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.092\" y=\"-12.332\" width=\"0.864\" height=\"0.452\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.03\" y=\"3.165\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.03\" y=\"2.215\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.03\" y=\"1.265\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.449\" y=\"1.265\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.449\" y=\"2.215\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.449\" y=\"3.165\" width=\"1.435\" height=\"0.782\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.071\" y=\"8.428\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.071\" y=\"6.528\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.581\" y=\"6.528\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.581\" y=\"7.478\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"2.581\" y=\"8.428\" width=\"1.412\" height=\"0.792\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.895\" y=\"-3.607\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.895\" y=\"-2.108\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.895\" y=\"-3.106\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.895\" y=\"-2.609\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.796\" y=\"-2.609\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.796\" y=\"-3.106\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.796\" y=\"-2.108\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.796\" y=\"-3.607\" width=\"0.831\" height=\"0.33\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.149\" y=\"1.674\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.149\" y=\"2.634\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.4\" y=\"1.674\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.4\" y=\"2.634\" width=\"0.704\" height=\"0.772\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-1.054\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"17.653\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"7.493\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"12.573\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.033\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-0.127\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"4.953\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.413\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"15.113\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-3.53\" y=\"-3.892\" width=\"3.2\" height=\"2.4\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-1.93\" y=\"-2.472\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U2</text><rect x=\"-1\" y=\"-9.642\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.953\" y=\"-10.531\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1\" y=\"-15.611\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"5.393\" y=\"-10.918\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.532\" y=\"5.312\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"1.032\" y=\"10.043\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.93\" y=\"-6.594\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.65\" y=\"-19.463\" width=\"3.3\" height=\"2.35\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.191\" y=\"14.488\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#6a6e6b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.273\" y=\"14.488\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.727\" y=\"14.488\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.08\" y=\"-12.817\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.953\" y=\"-12.817\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.252\" y=\"2.04\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-3.298\" y=\"2.04\" width=\"0.5\" height=\"1\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.302\" y=\"-6.594\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.277\" y=\"-4.308\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"2.277\" y=\"-2.022\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"10.043\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"8.011\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.905\" y=\"5.979\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.5\" y=\"-12.43\" width=\"3\" height=\"2\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"-11.21\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><rect x=\"0.632\" y=\"6.424\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"2.032\" y=\"8.094\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U3</text><rect x=\"-0.892\" y=\"1.156\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0.508\" y=\"2.826\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U4</text><text x=\"-10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">+3V3</text><text x=\"-10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"17.953\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"15.413\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">+5V</text><text x=\"10.03\" y=\"12.873\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"10.333\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"7.793\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"5.253\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"2.713\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"0.173\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"20.363\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity 6</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-4974-tfmini": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -7.302,
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
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional ClickID single-wire communication through the on-board DS28E36 interface.",
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
        "type": "bidirectional",
        "description": "Passive, switch-selected I2C clock path between the host and external sensor; there is no active clock-direction buffer.",
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
        "label": "RX",
        "type": "input",
        "description": "Module RX contact accepting host UART transmit data, switched to the external sensor RX node in UART mode.",
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
        "label": "TX",
        "type": "output",
        "description": "Module TX contact carrying the external sensor UART transmit data to the host receiver in UART mode.",
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
        "y": -7.302,
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
        "id": "aux-j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "TFmini sensor ground; pin 4 is the leftmost exposed SMT tail in this component-side view. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": -1.8745,
        "y": -9.1668,
        "size": [
          0.65,
          1.4
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "artLabel": "4",
        "caption": ""
      },
      {
        "id": "aux-j2-3",
        "number": "J2.3",
        "label": "SDA/RX",
        "type": "bidirectional",
        "description": "Sensor-side interface node: bidirectional I2C SDA, or UART RX input of the external TFmini (driven by host data), according to SW1. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": -0.6248,
        "y": -9.1668,
        "size": [
          0.65,
          1.4
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "artLabel": "3",
        "caption": ""
      },
      {
        "id": "aux-j2-2",
        "number": "J2.2",
        "label": "SCL/TX",
        "type": "bidirectional",
        "description": "Sensor-side interface node: I2C master clock routed from the host, or UART TX output of the external TFmini routed back to the host, according to SW1. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": 0.6248,
        "y": -9.1668,
        "size": [
          0.65,
          1.4
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "artLabel": "2",
        "caption": ""
      },
      {
        "id": "aux-j2-1",
        "number": "J2.1",
        "label": "5V",
        "type": "power_out",
        "description": "TFmini sensor supply directly on the host +5 V rail; pin 1 is the rightmost exposed SMT tail in this component-side orientation. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": 1.8745,
        "y": -9.1668,
        "size": [
          0.65,
          1.4
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "artLabel": "1",
        "caption": ""
      },
      {
        "id": "aux-j2-sh-l",
        "number": "J2.SH-L",
        "label": "GND",
        "type": "power_in",
        "description": "Left connector metal hold-down/solder retainer, explicitly grounded by the source schematic. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": -4.4247,
        "y": -12.0674,
        "size": [
          1.8,
          2.5
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "caption": ""
      },
      {
        "id": "aux-j2-sh-r",
        "number": "J2.SH-R",
        "label": "GND",
        "type": "power_in",
        "description": "Right connector metal hold-down/solder retainer, explicitly grounded by the source schematic. Exposed component-side contact. Copper/drill dimensions are reference values.",
        "x": 4.4247,
        "y": -12.0674,
        "size": [
          1.8,
          2.5
        ],
        "shape": "rect",
        "back": false,
        "smd": true,
        "caption": ""
      }
    ],
    "artwork": "<rect x=\"-0.775\" y=\"8.453\" width=\"1.549\" height=\"2.499\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.123\" y=\"7.987\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.325\" y=\"7.987\" width=\"1.204\" height=\"1.603\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.422\" y=\"3.39\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.576\" y=\"3.39\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.577\" y=\"3.39\" width=\"1.153\" height=\"1.653\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.078\" y=\"3.31\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.437\" y=\"3.31\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.078\" y=\"0.77\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"4.437\" y=\"0.77\" width=\"0.965\" height=\"1.102\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.352\" y=\"-0.908\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.602\" y=\"-0.908\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.148\" y=\"-0.908\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.352\" y=\"-4.606\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.602\" y=\"-4.606\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.148\" y=\"-4.606\" width=\"1.204\" height=\"1.806\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.577\" y=\"-13.669\" width=\"2.304\" height=\"3.203\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.273\" y=\"-13.669\" width=\"2.304\" height=\"3.203\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.376\" y=\"-10.069\" width=\"1.003\" height=\"1.803\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.126\" y=\"-10.069\" width=\"1.003\" height=\"1.803\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.373\" y=\"-10.069\" width=\"1.003\" height=\"1.803\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.123\" y=\"-10.069\" width=\"1.003\" height=\"1.803\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.249\" y=\"9.703\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"5.25\" y=\"9.703\" width=\"1.153\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.931\" y=\"7.395\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.029\" y=\"7.395\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.179\" y=\"7.37\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.219\" y=\"7.37\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.368\" y=\"7.395\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.328\" y=\"7.395\" width=\"0.775\" height=\"0.704\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"10.226\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.404\" y=\"8.326\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-6.325\" y=\"9.276\" width=\"1.255\" height=\"0.853\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.547\" y=\"8.503\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.547\" y=\"9.453\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.547\" y=\"10.403\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.945\" y=\"10.403\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.945\" y=\"9.453\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.945\" y=\"8.503\" width=\"0.61\" height=\"0.5\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.762\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-2.222\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-7.302\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"2.858\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.398\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.478\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-2.222\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.478\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.318\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.398\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"7.938\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"2.858\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-4.762\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-12.357\" y=\"-8.229\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2\" y=\"3.591\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.7\" y=\"-3.954\" width=\"5.4\" height=\"4.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.94\" y=\"3.411\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.94\" y=\"0.871\" width=\"1.6\" height=\"0.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.075\" y=\"-14.171\" width=\"10.15\" height=\"5.2\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.826\" y=\"9.815\" width=\"2\" height=\"1.25\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"3.816\" y=\"8.163\" width=\"2.02\" height=\"1.25\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.338\" y=\"7.497\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.15\" y=\"8.253\" width=\"2.8\" height=\"2.9\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-2.811\" y=\"7.472\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-5.961\" y=\"7.497\" width=\"1\" height=\"0.5\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.38\" y=\"8.203\" width=\"2.76\" height=\"3\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"-0\" y=\"9.923\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-7.002\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">CS</text><text x=\"-10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"10.778\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.238\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"5.698\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.158\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"0.618\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">RX</text><text x=\"10.03\" y=\"-1.922\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">TX</text><text x=\"10.03\" y=\"-4.462\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-7.002\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"-1.875\" y=\"-10.267\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">4</text><text x=\"-0.625\" y=\"-10.267\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">3</text><text x=\"0.625\" y=\"-10.267\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">2</text><text x=\"1.875\" y=\"-10.267\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">1</text><text x=\"-4.425\" y=\"-13.717\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text><text x=\"4.425\" y=\"-13.717\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">GND</text><text x=\"0\" y=\"13.188\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">TFmini</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  },
  "mikroe-mikroe-1445-proximity": {
    "contacts": [
      {
        "back": false,
        "id": "p1",
        "number": "1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected mikroBUS AN contact; retained as a physical terminal.",
        "x": -11.43,
        "y": -6.871,
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
        "y": -4.331,
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
        "y": -1.79,
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
        "y": 0.749,
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
        "y": 3.289,
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
        "y": 5.829,
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
        "y": 8.369,
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
        "y": 10.909,
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
        "y": 10.909,
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
        "y": 8.369,
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
        "y": 5.829,
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
        "y": 3.289,
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
        "y": 0.749,
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
        "y": -1.79,
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
        "description": "Interrupt from the module to the host.",
        "x": 11.43,
        "y": -4.331,
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
        "y": -6.871,
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
    "artwork": "<rect x=\"6.375\" y=\"-7.937\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.375\" y=\"-5.956\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.884\" y=\"-7.937\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.884\" y=\"-5.956\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.08\" y=\"0.013\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.08\" y=\"-1.968\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.375\" y=\"2.477\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.375\" y=\"4.458\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.884\" y=\"2.477\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.884\" y=\"4.458\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.849\" y=\"0.013\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.849\" y=\"-1.968\" width=\"1.473\" height=\"1.219\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"6.614\" y=\"7.018\" width=\"1.504\" height=\"2.703\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"3.82\" y=\"7.018\" width=\"1.504\" height=\"2.703\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.432\" y=\"7.633\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.549\" y=\"7.633\" width=\"1.219\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.112\" y=\"7.633\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.683\" y=\"7.633\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-5.397\" y=\"7.633\" width=\"1.346\" height=\"1.473\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.722\" y=\"-8.306\" width=\"1.727\" height=\"3.378\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-3.912\" y=\"-8.306\" width=\"1.727\" height=\"3.378\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-4.42\" y=\"2.578\" width=\"1.727\" height=\"2.743\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-7.722\" y=\"2.578\" width=\"1.727\" height=\"2.743\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.026\" y=\"-3.412\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.778\" y=\"-3.412\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.277\" y=\"-3.412\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.472\" y=\"-3.412\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.224\" y=\"-3.412\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.224\" y=\"0.144\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"0.472\" y=\"0.144\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-0.277\" y=\"0.144\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.778\" y=\"0.144\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-1.026\" y=\"0.144\" width=\"0.554\" height=\"1.008\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.269\" y=\"-0.821\" width=\"1.008\" height=\"0.602\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"1.269\" y=\"-1.622\" width=\"1.008\" height=\"0.602\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-2.277\" y=\"-1.253\" width=\"1.008\" height=\"0.602\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><rect x=\"-12.357\" y=\"-7.798\" width=\"1.854\" height=\"1.854\" rx=\"0.04\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\".05\"/><circle cx=\"-11.43\" cy=\"-4.33\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"3.289\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"8.37\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"5.83\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"0.75\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"10.909\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"-11.43\" cy=\"-1.79\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"10.909\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"0.75\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"5.83\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"3.289\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-6.87\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-1.79\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"-4.33\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><circle cx=\"11.43\" cy=\"8.37\" r=\"0.927\" fill=\"#b7ad81\" stroke=\"#b7ad81\" stroke-width=\"0.01\"/><rect x=\"-7.585\" y=\"7.729\" width=\"3.429\" height=\"1.27\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.807\" y=\"2.7\" width=\"3.2\" height=\"2.5\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-4.978\" y=\"-1.876\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.986\" y=\"-7.836\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#c8ad76\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-6.699\" y=\"-8.016\" width=\"3.492\" height=\"2.8\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"4.219\" y=\"6.97\" width=\"3.5\" height=\"2.8\" rx=\"0.1\" fill=\"#e9efe1\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-0.33\" y=\"7.734\" width=\"3.007\" height=\"1.27\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.477\" y=\"2.578\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"0.986\" y=\"2.578\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-7.747\" y=\"-1.876\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"6.477\" y=\"-7.836\" width=\"1.27\" height=\"3.007\" rx=\"0.1\" fill=\"#393e3b\" stroke=\"#173e36\" stroke-width=\".05\"/><rect x=\"-1.975\" y=\"-3.106\" width=\"3.95\" height=\"3.95\" rx=\"0.1\" fill=\"#292f30\" stroke=\"#173e36\" stroke-width=\".05\"/><text x=\"0\" y=\"-0.911\" font-family=\"Arial,sans-serif\" font-size=\"0.8\" fill=\"#f2f0e8\" text-anchor=\"middle\">U1</text><text x=\"-10.03\" y=\"-6.571\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-4.031\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"-1.49\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"1.049\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"3.589\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"6.129\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">NC</text><text x=\"-10.03\" y=\"8.669\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">3.3V</text><text x=\"-10.03\" y=\"11.209\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"start\">GND</text><text x=\"10.03\" y=\"11.209\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">GND</text><text x=\"10.03\" y=\"8.669\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">5V</text><text x=\"10.03\" y=\"6.129\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SDA</text><text x=\"10.03\" y=\"3.589\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">SCL</text><text x=\"10.03\" y=\"1.049\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-1.49\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"10.03\" y=\"-4.031\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">INT</text><text x=\"10.03\" y=\"-6.571\" font-family=\"Arial,sans-serif\" font-size=\"0.78\" fill=\"#f2f0e8\" text-anchor=\"end\">NC</text><text x=\"0\" y=\"13.62\" font-family=\"Arial,sans-serif\" font-size=\"1.05\" fill=\"#f2f0e8\" text-anchor=\"middle\">Proximity</text>",
    "provenance": {
      "checked": "2026-11-08",
      "manufacturer": "MikroElektronika",
      "contactMap": "Official manufacturer product pinout table and cited extra-contact evidence where present",
      "geometry": "Physical header centers and board dimensions from manufacturer CAD; STEP assembly BRep vertex placements",
      "artwork": "Original simplified SVG primitives at factual CAD positions; vendor decorative artwork omitted"
    }
  }
};
