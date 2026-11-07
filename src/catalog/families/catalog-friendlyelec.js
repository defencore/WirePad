import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";

const copper = "#c9b06f";
const silk = "#e6efdc";
const dark = "#242d31";
const metal = "#b9c3c7";
const scale = 5;
const margin = 20;

const boards = [
  {
    "id": "friendlyelec-nanopi-m6",
    "name": "FriendlyElec NanoPi M6",
    "shortName": "NanoPi M6",
    "revision": "2405",
    "soc": "RK3588S",
    "size": [
      90,
      62
    ],
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_M6",
    "color": "#216197",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "VCC_3V3_S3",
          "VCC_5V0",
          "I2C8_SDA_M2",
          "VCC_5V0",
          "I2C8_SCL_M2",
          "GND",
          "GPIO4_B0/UART8_TX_M0",
          "GPIO3_C4/UART5_TX_M1",
          "GND",
          "GPIO3_C5/UART5_RX_M1",
          "GPIO4_B1/UART8_RX_M0",
          "GPIO4_B3/UART8_CTSN_M0_PWM15_M1",
          "GPIO4_A3/UART0_RX_M0",
          "GND",
          "GPIO4_A4/UART0_TX_M0",
          "GPIO0_D4/I2C1_SCL_M2/PWM3_IR_M0",
          "VCC_3V3_S3",
          "GPIO0_D5/I2C1_SDA_M2",
          "GPIO1_B2/SPI0_MOSI_M2/UART4_RX_M2",
          "GND",
          "GPIO1_B1/SPI0_MISO_M2",
          "GPIO4_B2/UART8_RTSN_M0_PWM14_M1",
          "GPIO1_B3/SPI0_CLK_M2/UART4_TX_M2",
          "GPIO1_B4/SPI0_CS0_M2/UART7_RX_M2",
          "GND",
          "GPIO1_B5/SPI0_CS1_M2/UART7_TX_M2",
          "GPIO0_C4/PWM2_M0",
          "GPIO1_A0/UART6_RX_M1",
          "GPIO1_A1/UART6_TX_M1",
          "GND"
        ],
        "position": [
          5,
          56.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "CON4",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false
      },
      {
        "key": "debug",
        "title": "DBG",
        "signals": [
          "GND",
          "UART2_TX_M0",
          "UART2_RX_M0"
        ],
        "position": [
          8,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "DBG",
        "pitch": 2.54,
        "types": {
          "1": "power_in",
          "2": "output",
          "3": "input"
        },
        "notes": {
          "2": "3.3 V serial console TX; default baud rate 1500000.",
          "3": "3.3 V serial console RX; default baud rate 1500000."
        },
        "landing": true,
        "visual": [
          17,
          3
        ],
        "surfacePitch": 2.54
      },
      {
        "key": "rtc",
        "title": "RTC",
        "signals": [
          "BAT+",
          "GND"
        ],
        "position": [
          30,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "RTC_BAT1",
        "pitch": 2.54,
        "types": {
          "1": "power_in",
          "2": "power_in"
        },
        "notes": {
          "1": "3 V RTC backup battery positive input. The 53398-0271 socket has 1.25 mm contact pitch."
        },
        "landing": true,
        "visual": [
          83,
          39
        ]
      },
      {
        "key": "fan",
        "title": "FAN",
        "signals": [
          "GND",
          "FAN+"
        ],
        "position": [
          47,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "CON18",
        "pitch": 2.54,
        "types": {
          "1": "power_in",
          "2": "power_out"
        },
        "notes": {
          "2": "Switched +5 V fan supply; physical socket is 1.5 mm pitch."
        },
        "landing": true,
        "visual": [
          83,
          49
        ]
      },
      {
        "key": "mic",
        "title": "MIC",
        "signals": [
          "GND",
          "MIC_IN"
        ],
        "position": [
          65,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "MIC1",
        "pitch": 2.54,
        "types": {
          "2": "input"
        },
        "notes": {
          "2": "Analog microphone input with microphone bias. Physical MIC1 is a 2.0 mm PH-2A socket."
        },
        "landing": true,
        "visual": [
          80,
          11
        ],
        "surfacePitch": 2
      }
    ],
    "parts": [
      [
        "hdmi",
        0,
        -2,
        13,
        12,
        "HDMI OUT"
      ],
      [
        "usb3",
        20,
        -2,
        13,
        17,
        "USB3"
      ],
      [
        "ethernet",
        36,
        -3,
        16,
        20,
        "1G"
      ],
      [
        "usb2",
        57,
        -2,
        13,
        17,
        "USB2"
      ],
      [
        "usbc",
        76,
        -1,
        9,
        7,
        "PWR"
      ],
      [
        "soc",
        30,
        24,
        22,
        22,
        "RK3588S",
        45
      ],
      [
        "chip",
        58,
        27,
        11,
        17,
        "LPDDR5"
      ],
      [
        "socket",
        5,
        24,
        18,
        4,
        "M.2"
      ],
      [
        "sd",
        77,
        21,
        13,
        17,
        "microSD"
      ],
      [
        "switch",
        47,
        57,
        4,
        4,
        ""
      ],
      [
        "switch",
        57,
        57,
        4,
        4,
        ""
      ],
      [
        "jack",
        69,
        -1,
        7,
        12,
        "AUDIO"
      ]
    ],
    "cad": {
      "label": "NanoPi M6 2405 manufacturer DXF mechanical drawing",
      "url": "https://wiki.friendlyelec.com/wiki/images/f/f7/NanoPi_M6_2405_2D_CAD_DXF.zip"
    },
    "extra": "30-pin GPIO, debug UART, RTC battery fan and microphone contacts. GPIO is 3.3 V; 3.3 V output is rated up to 500 mA and the 5 V output up to 1 A.",
    "title": [
      64,
      51,
      3.3,
      true
    ]
  },
  {
    "id": "friendlyelec-nanopi-neo",
    "name": "FriendlyElec NanoPi NEO",
    "shortName": "NanoPi NEO",
    "revision": "1.4 / 1801",
    "soc": "H3",
    "size": [
      40,
      40
    ],
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_NEO",
    "color": "#14609a",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO1",
        "signals": [
          "SYS_3.3V",
          "VDD_5V",
          "I2C0_SDA",
          "VDD_5V",
          "I2C0_SCL",
          "GND",
          "GPIOG11",
          "UART1_TX/GPIOG6",
          "GND",
          "UART1_RX/GPIOG7",
          "UART2_TX/GPIOA0",
          "GPIOA6",
          "UART2_RTS/GPIOA2",
          "GND",
          "UART2_CTS/GPIOA3",
          "UART1_RTS/GPIOG8",
          "SYS_3.3V",
          "UART1_CTS/GPIOG9",
          "SPI0_MOSI/GPIOC0",
          "GND",
          "SPI0_MISO/GPIOC1",
          "UART2_RX/GPIOA1",
          "SPI0_CLK/GPIOC2",
          "SPI0_CS/GPIOC3"
        ],
        "position": [
          34.5,
          7.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "CON1",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "axis": "y"
      },
      {
        "key": "exp",
        "title": "GPIO2",
        "signals": [
          "VDD_5V",
          "USB-DP1",
          "USB-DM1",
          "USB-DP2",
          "USB-DM2",
          "GPIOL11/IR-RX",
          "SPDIF-OUT/GPIOA17",
          "PCM0_SYNC/I2S0_LRC",
          "PCM0_CLK/I2S0_BCK",
          "PCM0_DOUT/I2S0_SDOUT",
          "PCM0_DIN/I2S0_SDIN",
          "GND"
        ],
        "position": [
          3,
          7.5
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON2",
        "pitch": 2.54,
        "types": {
          "2": "bidirectional",
          "3": "bidirectional",
          "4": "bidirectional",
          "5": "bidirectional",
          "8": "output",
          "9": "output",
          "10": "output",
          "11": "input"
        },
        "notes": {
          "2": "USB1 D+ differential bus contact.",
          "3": "USB1 D− differential bus contact.",
          "4": "USB2 D+ differential bus contact.",
          "5": "USB2 D− differential bus contact."
        },
        "landing": false,
        "axis": "y"
      },
      {
        "key": "audio",
        "reverse": true,
        "title": "AUDIO",
        "signals": [
          "LINEOUTL",
          "LINEOUTR",
          "MICIN1N",
          "MICIN1P"
        ],
        "position": [
          7,
          23
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON8",
        "pitch": 2,
        "types": {
          "1": "output",
          "2": "output",
          "3": "input",
          "4": "input"
        },
        "notes": {
          "1": "Analog line-level left output.",
          "2": "Analog line-level right output.",
          "3": "Analog differential microphone negative input.",
          "4": "Analog differential microphone positive input."
        },
        "landing": false,
        "axis": "y",
        "numbers": [
          5,
          6,
          7,
          8
        ],
        "hideSurfaceTitle": true
      },
      {
        "key": "debug",
        "reverse": true,
        "title": "DBG",
        "signals": [
          "GND",
          "VDD_5V",
          "UART_TXD0",
          "UART_RXD0"
        ],
        "position": [
          7,
          34.62
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON8",
        "pitch": 2.54,
        "types": {
          "3": "output",
          "4": "input"
        },
        "notes": {},
        "landing": false,
        "axis": "y",
        "surfaceContactPoints": [
          [
            7,
            31
          ],
          [
            7,
            29
          ],
          [
            7,
            27
          ],
          [
            7,
            25
          ]
        ],
        "hideSurfaceTitle": true
      },
      {
        "key": "cvbs",
        "title": "CVBS",
        "signals": [
          "GND",
          "CVBS"
        ],
        "position": [
          3,
          38
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CVBS",
        "pitch": 2.54,
        "types": {
          "2": "output"
        },
        "notes": {
          "2": "Analog composite-video output, not a GPIO logic signal. The schematic numbers ground as contact 1 and TV_OUT as contact 2."
        },
        "landing": false,
        "surfaceContactPoints": [
          [
            6.3,
            34.2
          ],
          [
            8.84,
            34.2
          ]
        ]
      }
    ],
    "parts": [
      [
        "sd",
        7,
        -1,
        17,
        14,
        "microSD"
      ],
      [
        "microusb",
        26,
        -1,
        8,
        6,
        "PWR"
      ],
      [
        "usb2",
        10,
        31,
        9,
        12,
        "USB2"
      ],
      [
        "ethernet",
        21,
        27,
        17,
        16,
        "100M"
      ]
    ],
    "cad": {
      "label": "NanoPi NEO v1.1 manufacturer mechanical DXF; reference dimensions only for v1.4",
      "url": "https://wiki.friendlyelec.com/wiki/images/b/bf/NanoPi-NEO-V1.1-1608-dimensions%28dxf%29.zip"
    },
    "extra": "24-pin GPIO1, 12-pin USB/I²S/IR GPIO2, four audio contacts, four debug contacts and CVBS. The component-side drawing shows the microSD and Ethernet face; the H3 SoC is on the reverse. GPIO is 3.3 V. The physical eight-position CON8 combines debug contacts 1–4 and audio contacts 5–8; the wiki audio table uses local 1–4 numbering.",
    "title": [
      20,
      21.5,
      2.3,
      true
    ]
  },
  {
    "id": "friendlyelec-nanopi-neo2",
    "name": "FriendlyElec NanoPi NEO2",
    "shortName": "NanoPi NEO2",
    "revision": "1.1 / 1711",
    "soc": "H5",
    "size": [
      40,
      40
    ],
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_NEO2",
    "color": "#14609a",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO1",
        "signals": [
          "SYS_3.3V",
          "VDD_5V",
          "I2C0_SDA/GPIOA12",
          "VDD_5V",
          "I2C0_SCL/GPIOA11",
          "GND",
          "GPIOG11",
          "UART1_TX/GPIOG6",
          "GND",
          "UART1_RX/GPIOG7",
          "UART2_TX/GPIOA0",
          "GPIOA6",
          "UART2_RTS/GPIOA2",
          "GND",
          "UART2_CTS/GPIOA3",
          "UART1_RTS/GPIOG8",
          "SYS_3.3V",
          "UART1_CTS/GPIOG9",
          "SPI0_MOSI/GPIOC0",
          "GND",
          "SPI0_MISO/GPIOC1",
          "UART2_RX/GPIOA1",
          "SPI0_CLK/GPIOC2",
          "SPI0_CS/GPIOC3"
        ],
        "position": [
          34.5,
          7.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "CON1",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "axis": "y"
      },
      {
        "key": "exp",
        "title": "GPIO2",
        "signals": [
          "VDD_5V",
          "USB-DP1",
          "USB-DM1",
          "USB-DP2",
          "USB-DM2",
          "GPIOL11/IR-RX",
          "SPDIF-OUT/GPIOA17",
          "PCM0_SYNC/I2S0_LRC",
          "PCM0_CLK/I2S0_BCK",
          "PCM0_DOUT/I2S0_SDOUT",
          "PCM0_DIN/I2S0_SDIN",
          "GND"
        ],
        "position": [
          3,
          7.5
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON2",
        "pitch": 2.54,
        "types": {
          "2": "bidirectional",
          "3": "bidirectional",
          "4": "bidirectional",
          "5": "bidirectional",
          "8": "output",
          "9": "output",
          "10": "output",
          "11": "input"
        },
        "notes": {
          "2": "USB1 D+ differential bus contact.",
          "3": "USB1 D− differential bus contact.",
          "4": "USB2 D+ differential bus contact.",
          "5": "USB2 D− differential bus contact."
        },
        "landing": false,
        "axis": "y"
      },
      {
        "key": "audio",
        "title": "AUDIO",
        "signals": [
          "MP",
          "MN",
          "LR",
          "LL"
        ],
        "position": [
          7,
          17
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON8",
        "pitch": 2,
        "types": {
          "1": "input",
          "2": "input",
          "3": "output",
          "4": "output"
        },
        "notes": {
          "1": "Analog differential microphone positive input.",
          "2": "Analog differential microphone negative input.",
          "3": "Analog line-level right output.",
          "4": "Analog line-level left output."
        },
        "landing": false,
        "axis": "y",
        "numbers": [
          8,
          7,
          6,
          5
        ],
        "hideSurfaceTitle": true
      },
      {
        "key": "debug",
        "reverse": true,
        "title": "DBG",
        "signals": [
          "GND",
          "VDD_5V",
          "UART_TXD0",
          "UART_RXD0"
        ],
        "position": [
          7,
          34.62
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CON8",
        "pitch": 2.54,
        "types": {
          "3": "output",
          "4": "input"
        },
        "notes": {},
        "landing": false,
        "axis": "y",
        "surfaceContactPoints": [
          [
            7,
            31
          ],
          [
            7,
            29
          ],
          [
            7,
            27
          ],
          [
            7,
            25
          ]
        ],
        "hideSurfaceTitle": true
      },
      {
        "key": "cvbs",
        "title": "CVBS",
        "signals": [
          "GND",
          "CVBS"
        ],
        "position": [
          3,
          38
        ],
        "rows": 1,
        "kind": "gpio",
        "number": "CVBS",
        "pitch": 2.54,
        "types": {
          "2": "output"
        },
        "notes": {
          "2": "Analog composite-video output, not a GPIO logic signal. The schematic numbers ground as contact 1 and TV_OUT as contact 2."
        },
        "landing": false,
        "surfaceContactPoints": [
          [
            6.3,
            34.2
          ],
          [
            8.84,
            34.2
          ]
        ]
      }
    ],
    "parts": [
      [
        "sd",
        7,
        -1,
        17,
        14,
        "microSD"
      ],
      [
        "microusb",
        26,
        -1,
        8,
        6,
        "PWR"
      ],
      [
        "usb2",
        10,
        31,
        9,
        12,
        "USB2"
      ],
      [
        "ethernet",
        21,
        27,
        17,
        16,
        "1G"
      ]
    ],
    "cad": null,
    "extra": "24-pin GPIO1, 12-pin USB/I²S/IR GPIO2, four audio contacts, four debug contacts and CVBS. The component-side drawing shows the microSD and Ethernet face; the H5 SoC is on the reverse. GPIO is 3.3 V. The physical eight-position CON8 combines debug contacts 1–4 and audio contacts 5–8; the wiki audio table uses local 1–4 numbering.",
    "title": [
      20,
      21.5,
      2.3,
      true
    ]
  }
];

// Carrier landings and component-side surface contacts deliberately use separate coordinates.
function contactPosition(header, index) {
  const pitch = header.pitch * (header.reverse ? -1 : 1);
  const axis = header.axis ?? "x";
  const [x, y] = header.position;
  if (header.rows === 1) return axis === "y" ? [x, y + index * pitch] : [x + index * pitch, y];
  return axis === "y"
    ? [x + index % 2 * pitch, y + Math.floor(index / 2) * pitch]
    : [x + Math.floor(index / 2) * pitch, y + index % 2 * pitch];
}

function surfaceContactPosition(header,index) {
  if(header.surfaceContactPoints) return header.surfaceContactPoints[index];
  if(header.landing) {
    const [x,y]=header.visual;
    const pitch=header.surfacePitch ?? 1.25;
    return header.surfaceAxis==="y" ? [x+1.75,y+1+index*pitch] : [x+1.1+index*pitch,y+1.75];
  }
  if(header.surfaceAcrossReverse && header.rows===2) {
    const [x,y]=header.position,pitch=header.pitch;
    return header.axis==="y" ? [x+(1-index%2)*pitch,y+Math.floor(index/2)*pitch] : [x+Math.floor(index/2)*pitch,y+(1-index%2)*pitch];
  }
  return contactPosition(header,index);
}

function signalSpec(signal) {
  if (signal === "NC") return ["NC", "no_connect", "Not connected."];
  if (/GND/.test(signal)) return [signal === "HPGND" ? "HPGND" : "GND", "power_in", "Power and signal ground."];
  if (/3V3|3\.3V/.test(signal)) return ["3V3", "power_out", "Regulated 3.3 V output rail."];
  if (/5V|5\.0V/.test(signal)) return ["5V", "passive", "Shared 5 V board rail. Verify the board power-input arrangement before supplying power through a header."];
  if (/SARADC/.test(signal)) return [signal, "input", "Analog ADC input; nominal input range 0–1.8 V."];
  const gpio = signal.match(/\bGPIO[0-9A-Z_]+\b|\bP[A-Z]\d+\b/)?.[0];
  return [gpio ?? signal.split(/\s*\/\s*/)[0], "bidirectional", `3.3 V signal. Available functions: ${signal}. Select the required pin multiplexing in software.`];
}

function component(board) {
  const width = Math.ceil(board.size[0] * scale + 2 * margin);
  const height = Math.ceil(board.size[1] * scale + 2 * margin);
  const pins = board.headers.flatMap(header => header.signals.map((signal, index) => {
    const [caption, defaultType, description] = signalSpec(signal);
    const number = String(index + 1);
    const [x,y]=surfaceContactPosition(header,index);
    return {surface:true,x:margin+x*scale,y:margin+y*scale,
      id: `${header.key}-${number}`, number: `${header.number}.${header.numbers?.[index] ?? number}`, label: caption,
      type: header.types[number] ?? defaultType,
      description: `${header.title} contact ${number}: ${header.notes[number] ?? description}${header.kind === "aux" && !header.notes[number] ? ` Signal: ${signal}.` : ""}`,
    };
  }));
  return {
    id: board.id, art: board.id, name: board.name, shortName: board.shortName,
    manufacturer: "FriendlyElec", category: "Single-board computers",
    subtitle: `${board.soc} / rev ${board.revision}`,
    description: `Board revision ${board.revision}. ${board.extra} The drawing is a component-side reference. High-speed sockets are illustrated but their individual contacts are outside this wiring entry.`,
    source: board.source, referencePrefix: "U", contactLayout: "physical", width, height, pins,
    tags: ["friendlyelec", "friendlyarm", "nanopi", "sbc", "linux", "gpio", board.soc.toLowerCase(), board.shortName.toLowerCase()],
  };
}

function partArt([kind, x, y, w, h, caption, rotation = 0]) {
  let result = "";
  if (kind === "soc") {
    result = rect(x, y, w, h, 0.8, metal, "#e3e6df") + rect(x + 1, y + 1, w - 2, h - 2, 0.4, "#9faeaf");
  } else if (kind === "soc-dark" || kind === "chip") {
    result = rect(x, y, w, h, 0.6, dark, "#5e706e") + circle(x + 1.1, y + 1.1, 0.35, "#a2aaa0");
  } else if (kind === "shield") {
    result = rect(x, y, w, h, 0.7, "#b8c1bd", "#e3e4da") + rect(x + 0.7, y + 0.7, w - 1.4, h - 1.4, 0.2, "#cdd0c8");
  } else if (kind === "ribbon" || kind === "socket") {
    result = rect(x, y, w, h, 0.3, "#d9d8bc", "#828b75") + rect(x + 0.5, y + h - 1.3, w - 1, 1, 0, dark);
    for (let i = 1; i < 12; i++) result += line(x + w * i / 12, y + 0.2, x + w * i / 12, y + Math.min(h - 0.5, 1.7), copper, 0.22);
  } else if (kind === "switch") {
    result = rect(x, y, w, h, 0.5, metal) + circle(x + w / 2, y + h / 2, Math.min(w, h) * 0.3, dark);
  } else if (kind === "jack") {
    result = rect(x, y, w, h, 0.6, dark, "#65746a") + rect(x + 1, y + h - 2, w - 2, 2, 0.5, "#111c22");
  } else if (kind === "antenna") {
    result = path(`M${x} ${y + h}V${y}H${x + w}V${y + h / 2}H${x + w / 2}V${y + h}`, "none", copper, 0.6);
  } else {
    const fill = kind === "usb3" ? "#a8bdc7" : metal;
    result = rect(x, y, w, h, 0.6, fill, "#e2e5dc");
    if (kind === "sd") result += rect(x + 1, y + 1, w - 2, h - 2, 0.2, "#a1aca9") + line(x + 2, y + 2, x + 2, y + h - 1, "#e9ece1", 0.6);
    else if (kind === "ethernet") result += rect(x + 1, y + h - 3, w - 2, 2.5, 0.3, "#34494a") + rect(x + 1.5, y + h - 1.8, 2, 0.9, 0, "#d2d657");
    else result += rect(x + 1, y + h - 2.5, w - 2, 1.7, 0.4, kind === "usb3" ? "#2e7493" : "#344145");
  }
  if (caption) result += label(x + w / 2, y + h / 2, caption, kind.startsWith("soc") ? 2.1 : 1.5, kind.startsWith("soc") && kind !== "soc-dark" || kind === "shield" ? "#3f5352" : silk);
  if(rotation) {
    const angle=rotation*Math.PI/180,cx=x+w/2,cy=y+h/2;
    const points=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([px,py])=>[cx+(px-cx)*Math.cos(angle)-(py-cy)*Math.sin(angle),cy+(px-cx)*Math.sin(angle)+(py-cy)*Math.cos(angle)]);
    return path(`M${points.map(p=>p.join(" ")).join("L")}Z`,metal,"#e3e6df")+label(cx,cy,caption,2.1,"#3f5352");
  }
  return result;
}

function boardArt(board, component, showLabels) {
  const [w, h] = board.size;
  const top = margin;
  const holes = [[3, 3], [w - 3, 3], [3, h - 3], [w - 3, h - 3]].map(([x, y]) => circle(x, y, 1.7, copper) + circle(x, y, 1.05, "#263d3e")).join("");
  let body = rect(0, 0, w, h, 2.2, board.color, "#86a39b") + holes;
  for (let i = 0; i < 17; i++) {
    const x = 10 + (i * 7.3) % Math.max(w - 18, 2);
    const y = 9 + (i * 4.7) % Math.max(h - 16, 2);
    body += rect(x, y, 1.7, 0.8, 0.1, "#a9b6a0") + rect(x + 0.4, y, 0.9, 0.8, 0, "#7c8162");
  }
  body += board.parts.map(partArt).join("");
  for(const header of board.headers.filter(h=>h.landing && h.key!=="debug")) {
    const [x,y]=header.visual;
    const vertical=header.surfaceAxis==="y";
    body+=rect(x,y,vertical?3.5:6.5,vertical?6.5:3.5,0.4,"#e0dfca","#8d9781");
  }
  const [titleX, titleY, titleSize, showRevision] = board.title;
  body += label(titleX, titleY, board.shortName, titleSize, silk) + (showRevision ? label(titleX, titleY + 3.1, `rev ${board.revision}`, 1.7, silk) : "");
  for(const header of board.headers) {
    const points=header.signals.map((_,index)=>surfaceContactPosition(header,index));
    const axis=header.surfaceAxis ?? header.axis ?? "x";
    const across=points.map(p=>axis==="y"?p[0]:p[1]);
    const middle=(Math.min(...across)+Math.max(...across))/2;
    for(let index=0;index<points.length;index++) {
      const [x,y]=points[index],radius=header.landing ? 0.6 : 1;
      body+=(index===0 ? rect(x-radius,y-radius,radius*2,radius*2,.1,copper) : circle(x,y,radius,copper))+circle(x,y,radius*.5,"#213a38");
      if(showLabels) {
        const side=(axis==="y"?x:y)<=middle?-1:1;
        const number=String(header.numbers?.[index] ?? index+1);
        const color=axis==="y" && (side<0 ? x-5<0 : x+5>w) ? "#344b52" : silk;
        body+=axis==="y" ? label(x+side*2.1,y,number,1.6,color,side<0?"end":"start") : label(x,y+side*2.2,number,1.6,color);
      }
    }
    if(showLabels && !header.hideSurfaceTitle) {
      const [x]=points[0],y=Math.min(...points.map(p=>p[1]))-(axis==="y" && points.length>10 ? 9 : 5.2);
      body+=label(x,y,header.title,1.7,y<1?"#344b52":silk,"start");
    }
  }
  return `<g transform="translate(${margin} ${top}) scale(${scale})">${body}</g>`;

}

function referenceFootprint(board, component) {
  const [w, h] = board.size;
  const pads = board.headers.flatMap(header => header.signals.map((signal, index) => {
    const [x, y] = header.landing ? contactPosition(header, index) : surfaceContactPosition(header, index);
    return { id: `${header.key}-${index + 1}`, x: +(x - w / 2).toFixed(3), y: +(y - h / 2).toFixed(3), size: header.pitch === 2 ? 1.35 : 1.7, drill: header.pitch === 2 ? 0.8 : 1, square: index === 0 };
  }));
  return {
    body: board.size, color: board.color, pads,
    note: `Reference wiring carrier for ${board.name} revision ${board.revision}, component-side view. Main header pitch and contact order follow manufacturer documentation; header offsets, outline and component heights are approximate. Auxiliary contacts outside the outline are 2.54 mm cable landing rows, not physical board socket land patterns. These rows do not establish cable polarity from a mating-face view. High-speed sockets, test points, switch pads and mechanical holes are not fabrication pads. Verify the actual board and vendor CAD before making an adapter.`,
    details: board.parts.map(([kind, x, y, width, height]) => [x + width / 2 - w / 2, y + height / 2 - h / 2, width, height, kind === "ethernet" || kind.startsWith("usb") ? 9 : 2, kind.startsWith("soc") || kind === "chip" ? dark : metal]),
  };
}

const friendlyelecComponents = boards.map(component);
const friendlyelecArt = Object.fromEntries(boards.map(board => [board.id, (component, showLabels) => boardArt(board, component, showLabels)]));
const friendlyelecFootprints = Object.fromEntries(boards.map((board, index) => [board.id, referenceFootprint(board, friendlyelecComponents[index])]));
const friendlyelecModels = Object.fromEntries(boards.filter(board => board.cad).map(board => [board.id, {
  label: board.cad.label, url: board.cad.url,
  note: "Manufacturer CAD reference. Match the exact board revision; the WirePad carrier geometry is approximate.",
}]));

export default defineFamily("friendlyelec", (friendlyelecComponents).map(component => ({ component, render: (friendlyelecArt)[component.art], footprint: (friendlyelecFootprints)[component.id], model: friendlyelecModels[component.id] })));
