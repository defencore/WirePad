import { defineFamily } from "../registry.js";
import { marketSensorPackage } from "../shared/market-sensor-packages.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { escapeText } from "../../shared/text.js";

const specifications = [
  {
    "id": "market-bh1750fvi-tr",
    "part": "BH1750FVI-TR",
    "name": "ROHM BH1750FVI-TR",
    "manufacturer": "ROHM",
    "packageName": "WSOF6I",
    "body": [
      1.6,
      2.6
    ],
    "source": "https://www.mouser.com/datasheet/2/348/bh1750fvi-e-186247.pdf",
    "description": "Digital 16-bit ambient-light sensor with I\u00b2C address 0x23 or 0x5C. VCC 2.4\u20133.6 V; DVI is the serial-interface reference and asynchronous reset input. Source: ROHM No.11046EDT01, Rev. D, 2011-11, terminal table p.13 and outline p.14. Component-side view follows the top outline: bottom 1\u20132\u20133 left to right, top 6\u20135\u20134 left to right. Molded body is 1.6 \u00d7 2.6 mm; total lead span is 3.0 mm.",
    "pins": [
      [
        "VCC",
        "power_in",
        "Sensor supply input, 2.4\u20133.6 V."
      ],
      [
        "ADDR",
        "input",
        "Address selection: LOW gives 7-bit address 0x23, HIGH gives 0x5C; follow the source supply-sequencing requirements."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I\u00b2C serial data; use a pull-up to the permitted DVI reference voltage."
      ],
      [
        "DVI",
        "power_in",
        "SDA/SCL reference and asynchronous reset input. Hold below 0.4 V for at least 1 \u00b5s after VCC is applied, then follow the cited supply circuit."
      ],
      [
        "SCL",
        "input",
        "I\u00b2C serial clock input, up to 400 kHz."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.5,
        "y": 1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0,
        "y": 1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 0.5,
        "y": 1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 4,
        "x": 0.5,
        "y": -1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "top"
      },
      {
        "number": 5,
        "x": 0,
        "y": -1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "top"
      },
      {
        "number": 6,
        "x": -0.5,
        "y": -1.4,
        "size": [
          0.27,
          0.3
        ],
        "edge": "top"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C78960.html",
      "status": "Exact manufacturer and ordering-code commercial listing reported in stock; availability is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored source",
        "url": "https://www.mouser.com/datasheet/2/348/bh1750fvi-e-186247.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.lcsc.com/product-detail/C78960.html"
      }
    ],
    "scale": 62,
    "numericLabels": true,
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optical sensor"
    ],
    "subtitle": "16-bit I\u00b2C ambient light",
    "style": "bh1750",
    "view": "Component-side top view with all six functional leads. Underside metal details without assigned terminal numbers are not promoted to extra signal pins."
  },
  {
    "id": "market-as7341-dlgm",
    "part": "AS7341-DLGM",
    "name": "ams OSRAM AS7341-DLGM",
    "manufacturer": "ams OSRAM",
    "packageName": "OLGA8",
    "body": [
      3.1,
      2.0
    ],
    "source": "https://look.ams-osram.com/m/24266a3e584de4db/original/AS7341-DS000504.pdf",
    "description": "Eleven-channel spectral sensor with eight visible bands plus clear, near-IR and flicker measurement. Requires 1.8 V supply (1.7\u20132.0 V); I\u00b2C address 0x39. DS000504 v3-00, 2020-06-25, pin table p.6 and OLGA8 outline p.62. The bottom view shows pin 1 at the lower-right chamfered contact, 1\u20134 running right to left along the bottom and 5\u20138 left to right along the top. The optical aperture is on the hidden upper face.",
    "pins": [
      [
        "VDD",
        "power_in",
        "Positive supply input, 1.7\u20132.0 V; nominal 1.8 V."
      ],
      [
        "SCL",
        "input",
        "I\u00b2C serial clock input; use the permitted 1.8 V logic interface."
      ],
      [
        "GND",
        "power_in",
        "Sensor ground reference."
      ],
      [
        "LDR",
        "open_collector",
        "Programmable external LED current-sink connection; this is a sink, not a voltage source."
      ],
      [
        "PGND",
        "power_in",
        "LED-driver/power ground; connect to system ground as shown in the application circuit."
      ],
      [
        "GPIO",
        "bidirectional",
        "Multipurpose digital input/output; source pin table identifies the digital input use and device modes assign its function."
      ],
      [
        "INT",
        "open_collector",
        "Active-low open-drain interrupt output; external pull-up to 1.8 V."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I\u00b2C serial data; external pull-up to 1.8 V."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": 1.2,
        "y": 0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0.4,
        "y": 0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": -0.4,
        "y": 0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "bottom"
      },
      {
        "number": 4,
        "x": -1.2,
        "y": 0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "bottom"
      },
      {
        "number": 5,
        "x": -1.2,
        "y": -0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "top"
      },
      {
        "number": 6,
        "x": -0.4,
        "y": -0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "top"
      },
      {
        "number": 7,
        "x": 0.4,
        "y": -0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "top"
      },
      {
        "number": 8,
        "x": 1.2,
        "y": -0.6375,
        "size": [
          0.488,
          0.575
        ],
        "edge": "top"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/ams-osram-usa-inc/AS7341-DLGM/9996230",
      "status": "Exact manufacturer and ordering-code commercial listing reported in stock; availability is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored source",
        "url": "https://look.ams-osram.com/m/24266a3e584de4db/original/AS7341-DS000504.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/ams-osram-usa-inc/AS7341-DLGM/9996230"
      }
    ],
    "scale": 62,
    "numericLabels": true,
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optical sensor"
    ],
    "subtitle": "11-channel spectral / flicker sensor",
    "style": "as7341-bottom",
    "bottom": true,
    "view": "Explicit manufacturer bottom contact view. The native footprint mirrors X to component-side coordinates; no bottom-view coordinates are silently reused as a top-view pattern."
  },
  {
    "id": "market-ltr-390uv-01",
    "part": "LTR-390UV-01",
    "name": "Lite-On LTR-390UV-01",
    "manufacturer": "Lite-On",
    "packageName": "6-pin ChipLED",
    "body": [
      2,
      2
    ],
    "source": "https://www.mouser.com/datasheet/2/239/LTR_390UV_Final__DS_V1_1-1145336.pdf",
    "description": "Combined UV and ambient-light sensor with 13\u201320 bit conversion, I\u00b2C address 0x53, 1.7\u20133.6 V operating supply and a programmable interrupt. Author-original source DS86-2015-0004, mechanical outline pp.1\u20132 and I/O table p.4; the retained Mouser PDF mirror contains the same six-terminal function map and outline. Component-side view: bottom VDD1/NC2/GND3 left to right; top SDA6/INT5/SCL4 left to right.",
    "pins": [
      [
        "VDD",
        "power_in",
        "Operating supply input, 1.7\u20133.6 V."
      ],
      [
        "NC",
        "no_connect",
        "No connection; leave this physical pad open."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground."
      ],
      [
        "SCL",
        "input",
        "Open-drain I\u00b2C clock input; use an external pull-up."
      ],
      [
        "INT",
        "open_collector",
        "Open-drain programmable level interrupt output; use an external pull-up."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I\u00b2C serial data; use an external pull-up."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.65,
        "y": 0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0,
        "y": 0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 0.65,
        "y": 0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "bottom"
      },
      {
        "number": 4,
        "x": 0.65,
        "y": -0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "top"
      },
      {
        "number": 5,
        "x": 0,
        "y": -0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "top"
      },
      {
        "number": 6,
        "x": -0.65,
        "y": -0.775,
        "size": [
          0.3,
          0.4
        ],
        "edge": "top"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C492374.html",
      "status": "Exact manufacturer and ordering-code commercial listing reported in stock; availability is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored source",
        "url": "https://optoelectronics.liteon.com/upload/download/DS86-2015-0004/LTR-390UV-01_Final_%20DS_V1.7.PDF"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.lcsc.com/product-detail/C492374.html"
      }
    ],
    "scale": 62,
    "numericLabels": true,
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optical sensor"
    ],
    "subtitle": "UV index / ambient light / I\u00b2C",
    "style": "ltr390",
    "view": "Component-side top view. The source bottom contact drawing is mirrored in X to match the marked top-view pin-1 corner."
  },
  {
    "id": "market-tsl25911fn",
    "part": "TSL25911FN",
    "name": "ams OSRAM TSL25911FN",
    "manufacturer": "ams OSRAM",
    "packageName": "ODFN-6 (FN)",
    "body": [
      2,
      2.4
    ],
    "source": "https://look.ams-osram.com/m/c901de8e97608f8/original/TSL2591-DS000338.pdf",
    "description": "High-dynamic-range dual-channel ambient-light sensor with broadband and IR channels, programmable integration/gain and I\u00b2C address 0x29. Supply 2.7\u20133.6 V; this 11 variant uses I\u00b2C bus levels referenced to VDD. DS000338 v3-00, 2023-02-08, top pin map p.4 and clear FN package drawing p.24. Component-side left column 1 SCL / 2 INT / 3 GND; right column 6 SDA / 5 VDD / 4 NC, top to bottom.",
    "pins": [
      [
        "SCL",
        "input",
        "I\u00b2C serial clock input; use a pull-up to the allowed VDD bus voltage."
      ],
      [
        "INT",
        "open_collector",
        "Active-low open-drain interrupt output; external pull-up required."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground."
      ],
      [
        "NC",
        "no_connect",
        "Do not connect this physical pad."
      ],
      [
        "VDD",
        "power_in",
        "Operating supply input, 2.7\u20133.6 V."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I\u00b2C serial data; external pull-up required."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.625,
        "y": -0.65,
        "size": [
          0.75,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -0.625,
        "y": 0,
        "size": [
          0.75,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -0.625,
        "y": 0.65,
        "size": [
          0.75,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": 0.625,
        "y": 0.65,
        "size": [
          0.75,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 5,
        "x": 0.625,
        "y": 0,
        "size": [
          0.75,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 6,
        "x": 0.625,
        "y": -0.65,
        "size": [
          0.75,
          0.3
        ],
        "edge": "right"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/ams-osram-usa-inc/TSL25911FN/4162547",
      "status": "Exact manufacturer and ordering-code commercial listing reported in stock; availability is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored source",
        "url": "https://look.ams-osram.com/m/c901de8e97608f8/original/TSL2591-DS000338.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/ams-osram-usa-inc/TSL25911FN/4162547"
      }
    ],
    "scale": 62,
    "numericLabels": true,
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optical sensor"
    ],
    "subtitle": "high dynamic range / visible + IR / I\u00b2C",
    "style": "tsl2591",
    "view": "Transparent optical component-side top view, following the explicit TOP VIEW pin map. The package bottom view is not used directly as a native top-view pattern."
  },
  {
    "id": "market-vl53l0cxv0dh-1",
    "part": "VL53L0CXV0DH/1",
    "name": "STMicroelectronics VL53L0CXV0DH/1",
    "manufacturer": "STMicroelectronics",
    "packageName": "Optical LGA12 with liner",
    "body": [
      2.4,
      4.4
    ],
    "source": "https://www.st.com/resource/en/datasheet/vl53l0x.pdf",
    "description": "Time-of-Flight laser ranging sensor for distances up to 2 m, with I\u00b2C address 0x29, active-low shutdown and open-drain interrupt. Supply 2.6\u20133.5 V; follow the selected I/O-voltage mode. This is the current C ordering code with protective liner, covered by DS11555 Rev.6. Manufacturer bottom view, p.4 and drawing p.25: right column 1\u20135 bottom to top, top-center 6, left column 7\u201311 top to bottom and bottom-center 12. The two optical apertures are on the hidden top face.",
    "pins": [
      [
        "AVDDVCSEL",
        "power_in",
        "VCSEL supply input; connect to the main 2.6\u20133.5 V rail with the recommended local bypassing."
      ],
      [
        "AVSSVCSEL",
        "power_in",
        "VCSEL ground; connect to main ground."
      ],
      [
        "GND",
        "power_in",
        "Main ground."
      ],
      [
        "GND2",
        "power_in",
        "Mandatory ground-domain connection; tie to main ground as shown in the source application circuit."
      ],
      [
        "XSHUT",
        "input",
        "Active-low hardware shutdown. This pin must always be driven or pulled to a valid state."
      ],
      [
        "GND3",
        "power_in",
        "Mandatory ground-domain connection; tie to main ground."
      ],
      [
        "GPIO1",
        "open_collector",
        "Open-drain interrupt output; external pull-up required."
      ],
      [
        "DNC",
        "no_connect",
        "Do not connect; must be left floating."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I\u00b2C serial data; comply with the configured I/O-voltage mode."
      ],
      [
        "SCL",
        "input",
        "I\u00b2C serial clock input; comply with the configured I/O-voltage mode."
      ],
      [
        "AVDD",
        "power_in",
        "Main supply input; connect to the same main rail as AVDDVCSEL."
      ],
      [
        "GND4",
        "power_in",
        "Mandatory ground-domain connection; tie to main ground."
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": 0.8,
        "y": 1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "right"
      },
      {
        "number": 2,
        "x": 0.8,
        "y": 0.8,
        "size": [
          0.5,
          0.5
        ],
        "edge": "right"
      },
      {
        "number": 3,
        "x": 0.8,
        "y": 0,
        "size": [
          0.5,
          0.5
        ],
        "edge": "right"
      },
      {
        "number": 4,
        "x": 0.8,
        "y": -0.8,
        "size": [
          0.5,
          0.5
        ],
        "edge": "right"
      },
      {
        "number": 5,
        "x": 0.8,
        "y": -1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "right"
      },
      {
        "number": 6,
        "x": 0,
        "y": -1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "top"
      },
      {
        "number": 7,
        "x": -0.8,
        "y": -1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "left"
      },
      {
        "number": 8,
        "x": -0.8,
        "y": -0.8,
        "size": [
          0.5,
          0.5
        ],
        "edge": "left"
      },
      {
        "number": 9,
        "x": -0.8,
        "y": 0,
        "size": [
          0.5,
          0.5
        ],
        "edge": "left"
      },
      {
        "number": 10,
        "x": -0.8,
        "y": 0.8,
        "size": [
          0.5,
          0.5
        ],
        "edge": "left"
      },
      {
        "number": 11,
        "x": -0.8,
        "y": 1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "left"
      },
      {
        "number": 12,
        "x": 0,
        "y": 1.6,
        "size": [
          0.5,
          0.5
        ],
        "edge": "bottom"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.co.uk/en/products/detail/stmicroelectronics/VL53L0CXV0DH-1/6023691",
      "status": "Exact manufacturer and ordering-code commercial listing reported in stock; availability is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored source",
        "url": "https://www.st.com/resource/en/datasheet/vl53l0x.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.co.uk/en/products/detail/stmicroelectronics/VL53L0CXV0DH-1/6023691"
      }
    ],
    "scale": 62,
    "numericLabels": true,
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optical sensor"
    ],
    "subtitle": "2 m ToF laser ranging / I\u00b2C",
    "style": "vl53-bottom",
    "bottom": true,
    "bodyColor": "#355f35",
    "view": "Explicit bottom contact view from the manufacturer. The native component-side carrier mirrors X relative to this drawing. The top-face optical apertures are hidden in this view."
  }
];

// All connection anchors are copied from the same contact coordinates used below.
// Bottom-facing artwork is mirrored only for the native component-side carrier.
function opticalPart(spec) {
  const entry = marketSensorPackage(spec);
  const c = entry.component, scale = spec.scale;
  c.height += 26;
  c.pins.forEach(pin => { pin.y += 13; });
  const cx = c.width / 2, cy = c.height / 2;
  if (spec.bottom) {
    entry.footprint.pads = entry.footprint.pads.map(pad => ({ ...pad, x: -pad.x }));
    entry.footprint.note += " Artwork is a bottom view; native contact X coordinates are explicitly mirrored. The selected lands remain FP:R.";
  }
  entry.render = (part, showLabels = true) => {
    const left = cx - spec.body[0] * scale / 2, top = cy - spec.body[1] * scale / 2;
    const mmRect = (x, y, w, h, color, stroke = "#8b9587") => rect(cx + (x-w/2)*scale, cy+(y-h/2)*scale,w*scale,h*scale,1,color,stroke);
    const bottom = spec.bottom === true;
    let art = rect(left, top, spec.body[0]*scale, spec.body[1]*scale, 2, bottom ? spec.bodyColor ?? "#344637" : "#c4c6b8", "#69796c");
    if (spec.style === "bh1750") art += mmRect(0,0,1.35,2.25,"#dddaca") + mmRect(0,0,.25,.3,"#343735");
    if (spec.style === "ltr390") art += mmRect(-.2,0,1.2,1.2,"#343c36") + mmRect(-.39,0,.28,.28,"#9daba1");
    if (spec.style === "tsl2591") art += mmRect(0,.37,.802,.716,"#5b6062") + line(cx,cy+.02*scale,cx,cy+.72*scale,"#92978f",.7);
    if (bottom) art += mmRect(0,0,spec.body[0]*.45,spec.body[1]*.4,spec.style === "vl53-bottom" ? "#426d39" : "#293a2e");
    art += part.pins.map((pin,i) => {
      const contact=spec.pads[i], [w,h]=contact.size, x=pin.x, y=pin.y;
      const shape=spec.style === "as7341-bottom" && i===0 ? path(`M${x-w*scale/2} ${y-h*scale/2+5}L${x-w*scale/2+5} ${y-h*scale/2}H${x+w*scale/2}V${y+h*scale/2}H${x-w*scale/2}Z`,"#cdbb78","#f0dfab") : rect(x-w*scale/2,y-h*scale/2,w*scale,h*scale,.4,"#cdbb78","#f0dfab");
      const side=contact.edge;
      const textX=side === "left" ? Math.min(x-w*scale/2-8,left-8) : side === "right" ? Math.max(x+w*scale/2+8,left+spec.body[0]*scale+8) : x;
      const textY=side === "top" ? Math.min(y-h*scale/2-7,top-8) : side === "bottom" ? Math.max(y+h*scale/2+10,top+spec.body[1]*scale+10) : y+2;
      return `<g data-contact="${pin.id}"><title>${escapeText(pin.number+" "+pin.label+": "+pin.description)}</title>${shape}${showLabels?label(textX,textY,pin.number,7,"#2d4e4a",side==="left"?"end":side==="right"?"start":"middle"):""}</g>`;
    }).join("");
    return art + label(cx,c.height-7,bottom?"BOTTOM · native X mirrored":"OPTICAL TOP VIEW",6,"#425e69");
  };
  return entry;
}

export default defineFamily("market-optical-sensing", specifications.map(opticalPart));
