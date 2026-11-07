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
    "id": "banana-pi-bpi-m2-zero",
    "name": "Banana Pi BPI-M2 Zero",
    "shortName": "BPI-M2 Zero",
    "revision": "1.0 (H3 variant)",
    "soc": "Allwinner H3",
    "size": [
      65,
      30
    ],
    "source": "https://docs.banana-pi.org/en/BPI-M2_Zero/BananaPi_BPI-M2_Zero",
    "color": "#11668d",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "VCC-3V3",
          "VCC-5V",
          "TWI0-SDA / PA12-EINT12",
          "VCC-5V",
          "TWI0-SCK / PA11-EINT11",
          "GND",
          "PWM1 / PA6-EINT6",
          "UART3-TX / PA13-EINT13 / SPI1-CS",
          "GND",
          "UART3-RX / PA14-EINT14 / SPI1-CLK",
          "UART2-RX / PA1-EINT1",
          "UART3-CTS / PA16-EINT16 / SPI1-MISO",
          "UART2-TX / PA0-EINT0",
          "GND",
          "UART2-CTS / PA3-EINT3",
          "UART3-RTS / PA15-EINT15 / SPI1-MOSI",
          "VCC-3V3",
          "PC4 / PC4",
          "SPI0-MOSI / PC0",
          "GND",
          "SPI0-MISO / PC1",
          "UART2-RTS / PA2-EINT2",
          "SPI0-CLK / PC2",
          "SPI0-CS / PC3",
          "GND",
          "PC7 / PC7",
          "TWI1-SDA / PA19-EINT19",
          "TWI1-SCK / PA18-EINT18",
          "PA7-EINT7 / PA7-EINT7",
          "GND",
          "PA8-EINT8 / PA8-EINT8",
          "PL2-S-EINT2 / PL2-S-EINT2",
          "PA9-EINT9 / PA9-EINT9",
          "GND",
          "PA10-EINT10 / PA10-EINT10",
          "PL4-S-EINT4 / PL4-S-EINT4",
          "PA17-EINT17 / PA17-EINT17 / SPDIF-OUT",
          "PA21-EINT21 / PA21-EINT21",
          "GND",
          "PA20-EINT20 / PA20-EINT20"
        ],
        "position": [
          8.5,
          3.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "CON2",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "surfaceAcrossReverse": true
      },
      {
        "key": "debug",
        "title": "DBG",
        "signals": [
          "GND",
          "UART0-RXD",
          "UART0-TXD"
        ],
        "position": [
          3,
          35
        ],
        "rows": 1,
        "kind": "aux",
        "number": "CON3",
        "pitch": 2.54,
        "types": {
          "2": "input",
          "3": "output"
        },
        "notes": {},
        "landing": true,
        "visual": [
          0,
          22
        ],
        "surfacePitch": 2.54,
        "surfaceAxis": "y",
        "surfaceContactPoints": [
          [
            1.5,
            20
          ],
          [
            1.5,
            22.54
          ],
          [
            1.5,
            25.08
          ]
        ]
      }
    ],
    "parts": [
      [
        "soc-dark",
        30,
        9,
        14,
        14,
        "H3"
      ],
      [
        "chip",
        45,
        9,
        9,
        14,
        "DDR3"
      ],
      [
        "shield",
        14,
        10,
        12,
        12,
        "AP6212"
      ],
      [
        "sd",
        0,
        9,
        11,
        14,
        "microSD"
      ],
      [
        "ribbon",
        59,
        9,
        5,
        16,
        "CSI"
      ],
      [
        "hdmi",
        6,
        24,
        12,
        8,
        "mini HDMI"
      ],
      [
        "microusb",
        32,
        25,
        8,
        6,
        "OTG"
      ],
      [
        "microusb",
        47,
        25,
        8,
        6,
        "PWR"
      ],
      [
        "switch",
        25,
        25,
        4,
        4,
        ""
      ]
    ],
    "cad": {
      "label": "BPI-M2 Zero manufacturer DXF download",
      "url": "https://drive.google.com/file/d/0B4PAo2nW2KfnZGcycVk2bWhmWjA/view?usp=sharing&resourcekey=0-zvIaAuL9V8RA9dXB9OoRIg"
    },
    "extra": "Documented v1.0 H3 board, with 40 GPIO contacts and the three-pin serial console. The H2+ shipping variant is not separately modeled. GPIO is 3.3 V.",
    "title": [
      32,
      8,
      1.7,
      false
    ]
  },
  {
    "id": "banana-pi-bpi-m5",
    "name": "Banana Pi BPI-M5",
    "shortName": "BPI-M5",
    "revision": "1.0",
    "soc": "S905X3",
    "size": [
      85,
      56
    ],
    "source": "https://docs.banana-pi.org/en/BPI-M5/BananaPi_BPI-M5",
    "color": "#17628a",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "VCC-3V3",
          "VCC5V",
          "GPIOX_17 / I2C_M2_SDA",
          "VCC5V",
          "GPIOX_18 / I2C_M2_SCL",
          "GND",
          "GPIOX_5 / SDIO_CMD",
          "GPIOX_12 / UART_A_TX",
          "GND",
          "GPIOX_13 / UART_A_RX",
          "GPIOX_3 / SDIO_D3",
          "GPIOAO_8 / TDMB_SCLK",
          "GPIOX_4 / SDIO_CLK",
          "GND",
          "GPIOX_7 / PWM_F",
          "GPIOX_0 / SDIO_D0",
          "VCC-3V3",
          "GPIOX_1 / SDIO_D1",
          "GPIOX_8 / PCM_DIN",
          "GND",
          "GPIOX_9 / PCM_DOUT",
          "GPIOX_2 / SDIO_D2",
          "GPIOX_11 / PCM_CLK",
          "GPIOX_10 / PCM_SYNC",
          "GND",
          "GPIOX_16 / PWM_E",
          "GPIOA_14 / I2C_M3_SDA",
          "GPIOA_15 / I2C_M3_SCL",
          "GPIOX_14 / UART_A_CTS",
          "GND",
          "GPIOX_15 / UART_A_RTS",
          "GPIOX_19 / PWM_B",
          "GPIOX_6 / PWM_A",
          "GND",
          "GPIOAO_7 / TDMB_FS",
          "GPIOH_5 / SPDIF_IN",
          "GPIOAO_9 / I2S_MCLK",
          "GPIOAO_10 / TDMB_DIN",
          "GND",
          "GPIOAO_4 / TDMB_DOUT"
        ],
        "position": [
          7,
          3.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "GPIO",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "surfaceAcrossReverse": true
      },
      {
        "key": "debug",
        "title": "DBG",
        "signals": [
          "GND",
          "UART0-RX",
          "UART0-TX"
        ],
        "position": [
          60,
          61
        ],
        "rows": 1,
        "kind": "aux",
        "number": "DBG",
        "pitch": 2.54,
        "types": {
          "2": "input",
          "3": "output"
        },
        "notes": {},
        "landing": true,
        "visual": [
          60,
          2
        ],
        "surfacePitch": 2.54
      }
    ],
    "parts": [
      [
        "soc-dark",
        31,
        18,
        15,
        15,
        "S905X3"
      ],
      [
        "chip",
        31,
        7,
        15,
        8,
        "LPDDR4"
      ],
      [
        "chip",
        12,
        18,
        13,
        11,
        "eMMC"
      ],
      [
        "chip",
        51,
        18,
        9,
        9,
        "HUB"
      ],
      [
        "usb3",
        69,
        1,
        18,
        14,
        "USB3"
      ],
      [
        "usb3",
        69,
        19,
        18,
        14,
        "USB3"
      ],
      [
        "ethernet",
        66,
        37,
        21,
        17,
        "1G"
      ],
      [
        "usbc",
        2,
        51,
        10,
        7,
        "5V"
      ],
      [
        "hdmi",
        29,
        46,
        15,
        12,
        "HDMI"
      ],
      [
        "jack",
        51,
        45,
        8,
        13,
        "AUDIO"
      ],
      [
        "switch",
        18,
        49,
        4,
        4,
        ""
      ],
      [
        "switch",
        24,
        49,
        4,
        4,
        ""
      ]
    ],
    "cad": {
      "label": "BPI-M5 v1.0 manufacturer PCB DXF download",
      "url": "https://download.banana-pi.dev/d/3ebbfa04265d4dddb81b/files/?p=%2FDocuments%2FBPI-M5%2FBPI-M5-PCB-V10-DXF.rar"
    },
    "extra": "40-pin 3.3 V GPIO header and separate three-pin serial console. The wiki calls the main header CON1 and the debug header CON2; the v1.0 schematic swaps these designators, so this entry identifies them as GPIO and DBG. The Amlogic GPIOX/GPIOAO/GPIOA names and alternate functions are specific to this S905X3 board.",
    "title": [
      33,
      40,
      3.2,
      true
    ]
  },
  {
    "id": "banana-pi-bpi-m7",
    "name": "Banana Pi BPI-M7",
    "shortName": "BPI-M7",
    "revision": "1.1 / 2023-12-13",
    "soc": "RK3588",
    "size": [
      92,
      62
    ],
    "source": "https://docs.banana-pi.org/en/BPI-M7/BananaPi_BPI-M7",
    "color": "#272d2e",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "+3.3V",
          "+5.0V",
          "I2S1_SDO2_M0 / I2C7_SDA_M3 / UART8_CTSN_M0 / PWM15_IR_M1 / CAN1_TX_M1 / GPIO4_B3",
          "+5.0V",
          "I2S1_SDO1_M0 / I2C7_SCL_M3 / UART8_RTSN_M0 / PWM14_M1 / CAN1_RX_M1 / GPIO4_B2",
          "GND",
          "SPI1_CS1_M1 / I2C8_SDA_M4 / UART7_CTSN_M1 / PWM15_IR_M0 / GPIO3_C3",
          "GPIO0_B5 / UART2_TX_M0/ I2C1_SCL_M0 / I2S1_MCLK_M1 / JTAG_TCK_M2",
          "GND",
          "GPIO0_B6 /UART2_RX_M0/ I2C1_SDA_M0 / I2S1_SCLK_M1 / JTAG_TMS_M2",
          "SPI1_CLK_M1 / UART7_RX_M1 / GPIO3_C1",
          "GPIO3_B5 / CAN1_RX_M0 / PWM12_M0 /UART3_TX_M1 / I2S2_SCLK_M1",
          "SPI1_MOSI_M1 / I2C3_SCL_M1 / GPIO3_B7",
          "GND",
          "SPI1_MISO_M1 / I2C3_SDA_M1 / UART7_TX_M1 / GPIO3_C0",
          "GPIO3_A4 / SPI4_CS1_M1 / I2S3_SDI / UART8_RTSN_M1",
          "+3.3V",
          "GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0",
          "SPI0_MOSI_M2 / UART4_RX_M2 / GPIO1_B2",
          "GND",
          "SPI0_MISO_M2 / GPIO1_B1",
          "SARADC_IN4",
          "SPI0_CLK_M2 / UART4_TX_M2 / GPIO1_B3",
          "GPIO1_B4 / UART7_RX_M2 /SPI0_CS0_M2",
          "GND",
          "GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2",
          "SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6",
          "GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1",
          "UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7",
          "GND",
          "SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7",
          "GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1",
          "PWM8_M0 / GPIO3_A7",
          "GND",
          "I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6",
          "GPIO3_B1 / PWM2_M1 / UART2_TX_M2",
          "REFCLK_OUT / GPIO0_A0",
          "GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1",
          "GND",
          "GPIO3_B3 / UART2_RTSN / I2S2_SDO_M1"
        ],
        "position": [
          5,
          57
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "J4",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "surfaceContactPoints": [
          [
            32,
            56
          ],
          [
            32,
            58.54
          ],
          [
            34.54,
            56
          ],
          [
            34.54,
            58.54
          ],
          [
            37.08,
            56
          ],
          [
            37.08,
            58.54
          ],
          [
            39.62,
            56
          ],
          [
            39.62,
            58.54
          ],
          [
            42.16,
            56
          ],
          [
            42.16,
            58.54
          ],
          [
            44.7,
            56
          ],
          [
            44.7,
            58.54
          ],
          [
            47.24,
            56
          ],
          [
            47.24,
            58.54
          ],
          [
            49.78,
            56
          ],
          [
            49.78,
            58.54
          ],
          [
            52.32,
            56
          ],
          [
            52.32,
            58.54
          ],
          [
            54.86,
            56
          ],
          [
            54.86,
            58.54
          ],
          [
            57.4,
            56
          ],
          [
            57.4,
            58.54
          ],
          [
            59.94,
            56
          ],
          [
            59.94,
            58.54
          ],
          [
            62.480000000000004,
            56
          ],
          [
            62.480000000000004,
            58.54
          ],
          [
            65.02000000000001,
            56
          ],
          [
            65.02000000000001,
            58.54
          ],
          [
            67.56,
            56
          ],
          [
            67.56,
            58.54
          ],
          [
            70.1,
            56
          ],
          [
            70.1,
            58.54
          ],
          [
            72.64,
            56
          ],
          [
            72.64,
            58.54
          ],
          [
            75.18,
            56
          ],
          [
            75.18,
            58.54
          ],
          [
            77.72,
            56
          ],
          [
            77.72,
            58.54
          ],
          [
            80.25999999999999,
            56
          ],
          [
            80.25999999999999,
            58.54
          ]
        ]
      },
      {
        "key": "fan",
        "title": "FAN",
        "signals": [
          "VCC_5V0",
          "GND",
          "PWM"
        ],
        "position": [
          7,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "CN32",
        "pitch": 2.54,
        "types": {
          "1": "power_out",
          "3": "output"
        },
        "notes": {
          "3": "PWM fan-control output; 0.8 mm board socket on v1.1."
        },
        "landing": true,
        "visual": [
          0,
          32
        ],
        "surfaceAxis": "y",
        "surfacePitch": 1.25
      },
      {
        "key": "rtc",
        "title": "RTC",
        "signals": [
          "BAT+",
          "GND"
        ],
        "position": [
          33,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "J2",
        "pitch": 2.54,
        "types": {
          "1": "power_in"
        },
        "notes": {
          "1": "3 V RTC backup battery positive input; 0.8 mm board socket on v1.1."
        },
        "landing": true,
        "visual": [
          0,
          42
        ],
        "surfaceAxis": "y",
        "surfacePitch": 2
      },
      {
        "key": "audio",
        "title": "AUDIO",
        "signals": [
          "HPR",
          "HPL",
          "HPGND"
        ],
        "position": [
          50,
          67
        ],
        "rows": 1,
        "kind": "aux",
        "number": "CN2",
        "pitch": 2.54,
        "types": {
          "1": "output",
          "2": "output",
          "3": "power_in"
        },
        "notes": {
          "1": "Analog headphone right output; 0.8 mm audio socket.",
          "2": "Analog headphone left output."
        },
        "landing": true,
        "visual": [
          0,
          22
        ],
        "surfaceAxis": "y",
        "surfacePitch": 2
      }
    ],
    "parts": [
      [
        "usb3",
        0,
        -1,
        13,
        17,
        "USB3"
      ],
      [
        "usb2",
        17,
        -1,
        13,
        17,
        "USB2"
      ],
      [
        "hdmi",
        34,
        -2,
        15,
        13,
        "HDMI OUT"
      ],
      [
        "ethernet",
        55,
        -2,
        16,
        21,
        "2.5G"
      ],
      [
        "ethernet",
        75,
        -2,
        16,
        21,
        "2.5G"
      ],
      [
        "soc",
        25,
        17,
        23,
        23,
        "RK3588"
      ],
      [
        "chip",
        55,
        30,
        12,
        17,
        "LPDDR4X"
      ],
      [
        "shield",
        75,
        43,
        10,
        10,
        "WiFi"
      ],
      [
        "usbc",
        3,
        51,
        9,
        11,
        "OTG"
      ],
      [
        "usbc",
        19,
        52,
        9,
        10,
        "PWR"
      ],
      [
        "ribbon",
        75,
        31,
        15,
        4,
        "MIPI"
      ],
      [
        "switch",
        87,
        23,
        4,
        4,
        ""
      ]
    ],
    "cad": {
      "label": "BPI-M7 manufacturer 3D CAD folder",
      "url": "https://drive.google.com/drive/folders/1jMrzK29BGL-MvSF8JiTV1ekhT6T5UK_O"
    },
    "extra": "40-pin GPIO, three fan contacts, two RTC battery contacts and three analog headphone contacts. GPIO is 3.3 V; GPIO pin 22 is a 1.8 V SARADC input. Console UART is available on GPIO pins 8 and 10.",
    "title": [
      78,
      23,
      3.1,
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
    manufacturer: "Banana Pi", category: "Single-board computers",
    subtitle: `${board.soc} / rev ${board.revision}`,
    description: `Board revision ${board.revision}. ${board.extra} The drawing is a component-side reference. High-speed sockets are illustrated but their individual contacts are outside this wiring entry.`,
    source: board.source, referencePrefix: "U", contactLayout: "physical", width, height, pins,
    tags: ["banana pi", "bananapi", "bpi", "sbc", "linux", "gpio", board.soc.toLowerCase(), board.shortName.toLowerCase()],
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

const bananaPiComponents = boards.map(component);
const bananaPiArt = Object.fromEntries(boards.map(board => [board.id, (component, showLabels) => boardArt(board, component, showLabels)]));
const bananaPiFootprints = Object.fromEntries(boards.map((board, index) => [board.id, referenceFootprint(board, bananaPiComponents[index])]));
const bananaPiModels = Object.fromEntries(boards.filter(board => board.cad).map(board => [board.id, {
  label: board.cad.label, url: board.cad.url,
  note: "Manufacturer CAD reference. Match the exact board revision; the WirePad carrier geometry is approximate.",
}]));

export default defineFamily("bananapi", (bananaPiComponents).map(component => ({ component, render: (bananaPiArt)[component.art], footprint: (bananaPiFootprints)[component.id], model: bananaPiModels[component.id] })));
