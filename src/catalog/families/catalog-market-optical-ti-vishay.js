import { withRemainingMarketMounting } from '../shared/remaining-market-mounting.js';
import { defineFamily } from "../registry.js";
import { marketSensorPackage } from "../shared/market-sensor-packages.js";
import { circle, label, line, rect } from "../shared/svg.js";
import { escapeText } from "../../shared/text.js";

// Optical faces and physical contact coordinates follow each cited package view.
// Revealed underside contacts are transparent overlays, never a solder-side mirror.
function opticalPackage(spec) {
  const entry = marketSensorPackage(spec);
  entry.render = (part, showLabels = true) => {
    const scale = spec.scale, cx = part.width / 2, cy = part.height / 2;
    const x = cx - spec.body[0] * scale / 2, y = cy - spec.body[1] * scale / 2;
    const body = rect(x, y, spec.body[0] * scale, spec.body[1] * scale, 3, spec.bodyColor, '#6c7e7d') +
      rect(x + 3, y + 3, spec.body[0] * scale - 6, spec.body[1] * scale - 6, 2, 'rgba(225,233,220,.32)', '#b5c3bc');
    const frames = spec.dip ? part.pins.map(p => line(p.x, p.y, cx + Math.sign(p.x - cx) * scale, p.y, '#b6b6a6', 3)).join('') : '';
    const windows = spec.windows.map(w => {
      const wx = cx + w.x * scale, wy = cy + w.y * scale;
      const face = w.round ? circle(wx, wy, w.w * scale / 2, w.color, '#9faba6') : rect(wx - w.w * scale / 2, wy - w.h * scale / 2, w.w * scale, w.h * scale, 1, w.color, '#a8b1a3');
      const filters = w.rgb ? ['#762f39','#55734b','#384a79','#aaa58a','#544254'].map((c,i) => rect(wx - w.w * scale * .42 + i * w.w * scale * .17, wy - w.h * scale * .3, w.w * scale * .13, w.h * scale * .6, 0, c, 'none')).join('') : '';
      return face + filters;
    }).join('');
    const pads = part.pins.map((p,i) => {
      const contact=spec.pads[i], [w,h]=contact.size;
      const horizontal = contact.edge === 'left' || contact.edge === 'right';
      const tx = horizontal ? p.x + (contact.edge === 'left' ? -8 : 8) : p.x;
      const ty = horizontal ? p.y : p.y + (contact.edge === 'top' ? -9 : 10);
      const anchor = contact.edge === 'left' ? 'end' : contact.edge === 'right' ? 'start' : 'middle';
      return `<g data-contact="${escapeText(p.id)}"><title>${escapeText(p.number+' '+p.label+': '+p.description)}</title>` +
        rect(p.x-w*scale/2,p.y-h*scale/2,w*scale,h*scale,.5,p.number==='EP'?'rgba(183,192,196,.38)':'#b9beb5','#e2e6d4') +
        (showLabels ? label(tx,ty,p.number,7,'#344e5a',anchor) : '') + '</g>';
    }).join('');
    return body + frames + windows + pads + circle(x + 5, y + 5, 1.6, '#444f4c') +
      label(cx,15,spec.part,7,'#425e69') + label(cx,part.height-9,spec.caption ?? 'TRANSPARENT OPTICAL TOP VIEW',6,'#425e69');
  };
  return entry;
}

const specifications = [
  {
    "id": "opt3001dnpr-ic",
    "name": "OPT3001DNPR Ambient light sensor",
    "part": "OPT3001DNPR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/opt3001.pdf",
    "packageName": "Clear USON-6 with thermal pad (DNP)",
    "body": [
      2,
      2
    ],
    "pitch": 0.65,
    "pins": [
      [
        "VDD",
        "power_in",
        "Device supply, 1.6–3.6 V."
      ],
      [
        "ADDR",
        "input",
        "I2C address selection; connect to GND, VDD, SDA or SCL as specified."
      ],
      [
        "GND",
        "power_in",
        "Signal ground reference."
      ],
      [
        "SCL",
        "input",
        "I2C clock input; external pull-up may use 1.6–5.5 V."
      ],
      [
        "INT",
        "open_collector",
        "Open-drain programmable interrupt; external pull-up required."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C data; external pull-up may use 1.6–5.5 V."
      ],
      [
        "EP",
        "passive",
        "Exposed thermal pad: solder to PCB; TI recommends external grounding. No internal ground short is asserted."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.95,
        "y": -0.65,
        "edge": "left",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": 2,
        "x": -0.95,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": 3,
        "x": -0.95,
        "y": 0.65,
        "edge": "left",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": 4,
        "x": 0.95,
        "y": 0.65,
        "edge": "right",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": 5,
        "x": 0.95,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": 6,
        "x": 0.95,
        "y": -0.65,
        "edge": "right",
        "size": [
          0.5,
          0.25
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          0.65,
          1.35
        ],
        "edge": "bottom"
      }
    ],
    "subtitle": "Ambient light sensor",
    "description": "Photopic ambient-light sensor with automatic range selection, infrared rejection and I2C readout.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/brand/1256-100.html",
      "status": "LCSC TI-branded OPT3001DNPR C90462 listing showed 1,925 in stock. DigiKey/Mouser zero-stock pages were excluded."
    },
    "tags": [
      "optical sensor",
      "market expansion",
      "ambient light sensor"
    ],
    "kind": "optical",
    "scale": 32,
    "numericLabels": true,
    "modelHeight": 0.65,
    "windows": [
      {
        "x": 0,
        "y": -0.09,
        "w": 0.39,
        "h": 0.49,
        "color": "#5c4e83"
      }
    ],
    "bodyColor": "#c7c8be"
  },
  {
    "id": "opt101p-ic",
    "name": "OPT101P Photodiode with transimpedance amplifier",
    "part": "OPT101P",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/opt101.pdf",
    "packageName": "Clear PDIP-8 (NTC)",
    "body": [
      6.52,
      9.53
    ],
    "pitch": 2.54,
    "pins": [
      [
        "VS",
        "power_in",
        "Positive supply; 2.7–36 V relative to −V."
      ],
      [
        "−IN",
        "input",
        "Op-amp inverting input and photodiode cathode; leave open or use for an external feedback network."
      ],
      [
        "−V",
        "power_in",
        "Most negative supply; ground or a negative rail within source conditions."
      ],
      [
        "1MΩ FB",
        "input",
        "Internal feedback resistor terminal; normally wire externally to output pin 5."
      ],
      [
        "OUT",
        "output",
        "Transimpedance amplifier analog voltage output."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "COMMON",
        "input",
        "Photodiode anode; normally connect externally to ground."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -3.81,
        "y": -3.81,
        "edge": "left",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 2,
        "x": -3.81,
        "y": -1.27,
        "edge": "left",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 3,
        "x": -3.81,
        "y": 1.27,
        "edge": "left",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 4,
        "x": -3.81,
        "y": 3.81,
        "edge": "left",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 5,
        "x": 3.81,
        "y": 3.81,
        "edge": "right",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 6,
        "x": 3.81,
        "y": 1.27,
        "edge": "right",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 7,
        "x": 3.81,
        "y": -1.27,
        "edge": "right",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      },
      {
        "number": 8,
        "x": 3.81,
        "y": -3.81,
        "edge": "right",
        "size": [
          1.7,
          1.7
        ],
        "drill": 0.9
      }
    ],
    "subtitle": "Photodiode with transimpedance amplifier",
    "description": "Integrated silicon photodiode and analog transimpedance amplifier with a 1 MΩ feedback resistor in a clear plastic DIP.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/OPT101P/251177",
      "status": "DigiKey listed 1,938 exact Texas Instruments OPT101P in stock."
    },
    "tags": [
      "optical sensor",
      "market expansion",
      "photodiode with transimpedance amplifier"
    ],
    "kind": "optical",
    "scale": 14,
    "numericLabels": true,
    "modelHeight": 3.05,
    "windows": [
      {
        "x": 0,
        "y": 0,
        "w": 2.29,
        "h": 2.29,
        "color": "#523f5a"
      }
    ],
    "bodyColor": "#d3c6a8",
    "dip": true
  },
  {
    "id": "veml7700-tt-ic",
    "name": "VEML7700-TT Ambient light sensor",
    "part": "VEML7700-TT",
    "manufacturer": "Vishay Semiconductors",
    "source": "https://www.vishay.com/docs/84286/veml7700.pdf",
    "packageName": "Clear SMD-4, TT optical-face-up mount",
    "body": [
      6.8,
      3
    ],
    "pitch": 1.27,
    "pins": [
      [
        "SCL",
        "input",
        "I2C clock input; external bus pull-up supply 1.7–3.6 V."
      ],
      [
        "VDD",
        "power_in",
        "Device supply, 2.5–3.6 V."
      ],
      [
        "GND",
        "power_in",
        "Signal ground reference."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C data; external bus pull-up supply 1.7–3.6 V."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.905,
        "y": 1.4,
        "size": [
          0.5,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": -0.635,
        "y": 1.4,
        "size": [
          0.5,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 0.635,
        "y": 1.4,
        "size": [
          0.5,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 4,
        "x": 1.905,
        "y": 1.4,
        "size": [
          0.5,
          0.3
        ],
        "edge": "bottom"
      }
    ],
    "subtitle": "Ambient light sensor",
    "description": "16-bit I2C ambient-light sensor in a clear package. The TT tape orientation supports an optical-face-up top mount; the TR orientation supports side mounting.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/vishay/veml7700-tt/ambient-light-sensor-i2c-3-6v/dp/96Y6767",
      "status": "Newark listed 1,062 exact Vishay VEML7700-TT units in stock; its SMD-8 catalog text is contradicted by the four-contact manufacturer drawing."
    },
    "tags": [
      "optical sensor",
      "market expansion",
      "ambient light sensor"
    ],
    "kind": "optical",
    "scale": 22,
    "numericLabels": true,
    "modelHeight": 2.35,
    "windows": [
      {
        "x": 0,
        "y": -0.45,
        "w": 1.2,
        "h": 1.1,
        "color": "#5e4e89"
      }
    ],
    "bodyColor": "#c8d0ca",
    "caption": "OPTICAL FACE / TT TOP MOUNT",
    "view": "Optical-face-up TT mounting view, contacts left to right along the lower edge. No solder-side mirror is applied.",
    "footprintNote": "The TT flat mounting orientation places the 6.8 × 3 mm optical face in the PCB plane; height is approximately 2.35 mm. Selected carrier contact Y and copper sizes require production verification."
  },
  {
    "id": "veml3328-ic",
    "name": "VEML3328 RGBCIR color sensor",
    "part": "VEML3328",
    "manufacturer": "Vishay Semiconductors",
    "source": "https://www.vishay.com/docs/84968/veml3328.pdf",
    "packageName": "Clear OPLGA-4",
    "body": [
      2,
      1.25
    ],
    "pitch": 0.7,
    "pins": [
      [
        "GND",
        "power_in",
        "Signal ground reference."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C serial data; 1.7–3.6 V bus pull-up supply."
      ],
      [
        "SCL",
        "input",
        "I2C clock input; 1.7–3.6 V bus pull-up supply."
      ],
      [
        "VDD",
        "power_in",
        "Device supply, 2.6–3.6 V."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.7875,
        "y": -0.35,
        "size": [
          0.35,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -0.7375,
        "y": 0.4,
        "size": [
          0.35,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": 0.7875,
        "y": 0.4,
        "size": [
          0.35,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 4,
        "x": 0.7875,
        "y": -0.35,
        "size": [
          0.35,
          0.25
        ],
        "edge": "right"
      }
    ],
    "subtitle": "RGBCIR color sensor",
    "description": "Five-channel red, green, blue, clear and infrared light sensor with 16-bit I2C output.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.co.uk/en/products/detail/vishay-semiconductor-opto-division/VEML3328/10673129",
      "status": "DigiKey listed 3,855 exact Vishay VEML3328 in stock."
    },
    "tags": [
      "optical sensor",
      "market expansion",
      "rgbcir color sensor"
    ],
    "kind": "optical",
    "scale": 44,
    "numericLabels": true,
    "modelHeight": 1,
    "windows": [
      {
        "x": 0,
        "y": 0,
        "w": 0.36,
        "h": 0.29,
        "color": "#414254",
        "rgb": true
      }
    ],
    "bodyColor": "#c7cbbd",
    "footprintNote": "Contact points are selected within the metal terminal areas shown in Figure 8. The smaller reference copper rectangles differ from the larger asymmetric land pattern in Figure 9."
  },
  {
    "id": "vcnl4040m3oe-ic",
    "name": "VCNL4040M3OE Proximity and ambient light sensor",
    "part": "VCNL4040M3OE",
    "manufacturer": "Vishay Semiconductors",
    "source": "https://www.vishay.com/docs/84274/vcnl4040.pdf",
    "packageName": "SMD-8 proximity/ALS optical module",
    "body": [
      2,
      4
    ],
    "pitch": 1.075,
    "pins": [
      [
        "GND",
        "power_in",
        "Signal ground reference."
      ],
      [
        "CATHODE_S",
        "passive",
        "Sensor LED-driver cathode terminal; wire externally to LED cathode pin 5 as required."
      ],
      [
        "VDD",
        "power_in",
        "Sensor supply, 2.5–3.6 V."
      ],
      [
        "ANODE",
        "passive",
        "Integrated IRED anode; connect to the LED supply with the recommended local decoupling."
      ],
      [
        "CATHODE_L",
        "passive",
        "Integrated IRED cathode; wire externally to sensor cathode pin 2. No internal connection is asserted."
      ],
      [
        "INT",
        "open_collector",
        "Active-low interrupt or proximity-logic output; external pull-up required."
      ],
      [
        "SDAT",
        "bidirectional",
        "Open-drain I2C data; external pull-up supply 1.8–3.6 V."
      ],
      [
        "SCLK",
        "input",
        "I2C clock input; external pull-up supply 1.8–3.6 V."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.7,
        "y": -1.6124999999999998,
        "edge": "left",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 2,
        "x": -0.7,
        "y": -0.5375,
        "edge": "left",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 3,
        "x": -0.7,
        "y": 0.5375,
        "edge": "left",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 4,
        "x": -0.7,
        "y": 1.6124999999999998,
        "edge": "left",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 5,
        "x": 0.7,
        "y": 1.6124999999999998,
        "edge": "right",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 6,
        "x": 0.7,
        "y": 0.5375,
        "edge": "right",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 7,
        "x": 0.7,
        "y": -0.5375,
        "edge": "right",
        "size": [
          0.7,
          0.7
        ]
      },
      {
        "number": 8,
        "x": 0.7,
        "y": -1.6124999999999998,
        "edge": "right",
        "size": [
          0.7,
          0.7
        ]
      }
    ],
    "subtitle": "Proximity and ambient light sensor",
    "description": "Integrated infrared LED, proximity receiver and ambient-light sensor with I2C readout and programmable interrupt.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/vishay-semiconductor-opto-division/VCNL4040M3OE/5171283",
      "status": "DigiKey listed 47,245 exact Vishay VCNL4040M3OE in stock."
    },
    "tags": [
      "optical sensor",
      "market expansion",
      "proximity and ambient light sensor"
    ],
    "kind": "optical",
    "scale": 30,
    "numericLabels": true,
    "modelHeight": 1.1,
    "windows": [
      {
        "x": 0,
        "y": -0.6,
        "w": 1.1,
        "h": 1.1,
        "color": "#3e444c",
        "round": true
      },
      {
        "x": 0,
        "y": 1.15,
        "w": 1.2,
        "h": 1.2,
        "color": "#67556f",
        "round": true
      }
    ],
    "bodyColor": "#323b3d"
  }
];

export default defineFamily("market-optical-ti-vishay", specifications.map(spec => withRemainingMarketMounting(opticalPackage(spec))));
