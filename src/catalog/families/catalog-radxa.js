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
    "id": "radxa-rock-5a",
    "name": "Radxa ROCK 5A",
    "shortName": "ROCK 5A",
    "revision": "1.1",
    "soc": "RK3588S",
    "size": [
      85,
      56
    ],
    "source": "https://docs.radxa.com/en/rock5/rock5a/hardware-design/hardware-interface",
    "color": "#287953",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "+3.3V",
          "+5.0V",
          "GPIO1_D7 / I2C8_SDA_M2 / PWM15_IR_M3",
          "+5.0V",
          "GPIO1_D6 / I2C8_SCL_M2 / PWM14_M2",
          "GND",
          "GPIO1_B3 / UART4_TX_M2",
          "GPIO0_B5 / UART2_TX_M0 / I2C1_SCL_M0 / I2S1_MCLK_M1",
          "GND",
          "GPIO0_B6 / UART2_RX_M0 / I2C1_SDA_M0 / I2S1_SCLK_M1",
          "GPIO4_B3 / UART8_CTSN_M0 / I2C7_SDA_M3 / PWM15_IR_M1 / I2S1_SDO2_M0",
          "GPIO4_A1 / I2S1_SCLK_M0 / SPI0_MOSI_M1",
          "GPIO4_B2 / UART8_RTSN_M0 / I2C7_SCL_M3 / PWM14_M1 / I2S1_SDO1_M0 / SPI0_CS0_M1",
          "GND",
          "GPIO4_B4 / PWM11_IR_M1 / SPDIF0_TX_M1 / I2S1_SDO3_M0",
          "GPIO1_A5 / SPI2_MOSI_M0",
          "+3.3V",
          "GPIO1_B0 / SPI2_CS1_M0",
          "GPIO1_A1 / UART6_TX_M1 / I2C2_SCL_M4 / SPI4_MOSI_M2",
          "GND",
          "GPIO1_A0 / UART6_RX_M1 / I2C2_SDA_M4 / SPI4_MISO_M2",
          "GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2",
          "GPIO1_A2 / UART6_RTSN_M1 / I2C4_SDA_M3 / PWM0_M2 / SPI4_CLK_M2",
          "GPIO1_A3 / UART6_CTSN_M1 / I2C4_SCL_M3 / PWM1_M2 / SPI4_CS0_M2",
          "GND",
          "GPIO1_A4 / SPI2_MISO_M0",
          "GPIO0_C7 / I2C6_SDA_M0 / PWM6_M0 / I2S1_SDI2_M1 / SPI0_MISO_M0",
          "GPIO0_D0 / I2C6_SCL_M0 / PWM7_IR_M0 / I2S1_SDI3_M1 / SPI3_MISO_M2",
          "GPIO1_B2 / UART4_RX_M2 / SPI0_MOSI_M2",
          "GND",
          "GPIO1_B1 / SPI0_MISO_M2",
          "GPIO4_B0 / UART8_TX_M0 / I2C6_SDA_M3 / I2S1_SDI3_M0 / SPI2_CS1_M1",
          "GPIO1_B4 / UART7_RX_M2 / SPI0_CS0_M2",
          "GND",
          "GPIO4_A0 / I2S1_MCLK_M0 / SPI0_MISO_M1",
          "GPIO4_A2 / I2S1_LRCK_M0 / SPI0_CLK_M1",
          "SARADC_VIN2",
          "GPIO4_A5 / I2C3_SDA_M2 / I2S1_SDI0_M0",
          "GND",
          "GPIO4_B1 / UART8_RX_M0 / I2C6_SCL_M3 / SPDIF1_TX_M1 / I2S1_SDO0_M0 / SPI0_CS1_M1"
        ],
        "position": [
          6,
          51
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "GPIO",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false
      },
      {
        "key": "fan",
        "title": "FAN",
        "signals": [
          "FAN−",
          "5V"
        ],
        "position": [
          7,
          61
        ],
        "rows": 1,
        "kind": "aux",
        "number": "U12",
        "pitch": 2.54,
        "types": {
          "1": "power_out",
          "2": "power_out"
        },
        "notes": {
          "1": "Low-side switched fan return; not a permanent ground. Socket contact pitch is 1.25 mm."
        },
        "landing": true,
        "visual": [
          72,
          1
        ]
      }
    ],
    "parts": [
      [
        "usb2",
        -2,
        1,
        18,
        14,
        "USB2"
      ],
      [
        "usb3",
        -2,
        19,
        18,
        14,
        "USB3"
      ],
      [
        "ethernet",
        -2,
        36,
        22,
        17,
        "1G"
      ],
      [
        "usbc",
        20,
        -1,
        9,
        7,
        "PWR"
      ],
      [
        "hdmi",
        34,
        -2,
        15,
        12,
        "HDMI"
      ],
      [
        "soc-dark",
        29,
        20,
        17,
        17,
        "RK3588S"
      ],
      [
        "chip",
        50,
        18,
        11,
        17,
        "LPDDR4X"
      ],
      [
        "ribbon",
        75,
        29,
        7,
        17,
        "MIPI"
      ],
      [
        "socket",
        62,
        7,
        20,
        4,
        "M.2 E"
      ],
      [
        "switch",
        66,
        1,
        4,
        4,
        ""
      ],
      [
        "switch",
        73,
        1,
        4,
        4,
        ""
      ]
    ],
    "cad": {
      "label": "ROCK 5A manufacturer CAD archive (revision 1.1)",
      "url": "https://dl.radxa.com/rock5/5a/docs/hw/rock_5a_3d_pcba.rar"
    },
    "extra": "40-pin GPIO and two fan contacts. GPIO is 3.3 V; GPIO pin 37 SARADC_VIN2 is a 1.8 V input. Console UART is on GPIO pins 8 and 10.",
    "title": [
      59,
      43,
      3.2,
      true
    ]
  },
  {
    "id": "radxa-rock-5b",
    "name": "Radxa ROCK 5B",
    "shortName": "ROCK 5B",
    "revision": "1.423",
    "soc": "RK3588",
    "size": [
      100,
      72
    ],
    "source": "https://docs.radxa.com/en/rock5/rock5b/hardware-design/hardware-interface",
    "color": "#287953",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "+3.3V",
          "+5.0V",
          "GPIO4_B3 / PWM15_IR_M1 / UART8_CTSN_M0 / I2C7_SDA_M3 / I2S1_SDO2_M0",
          "+5.0V",
          "GPIO4_B2 / PWM14_M1 / UART8_RTSN_M0 / I2C7_SCL_M3 / I2S1_SDO1_M0",
          "GND",
          "GPIO3_C3 / PWM15_IR_M0 / UART7_CTSN_M1 / I2C8_SDA_M4 / SPI1_CS1_M1",
          "GPIO0_B5 / UART2_TX_M0 / I2C1_SCL_M0 / I2S1_MCLK_M1",
          "GND",
          "GPIO0_B6 / UART2_RX_M0 / I2C1_SDA_M0 / I2S1_SCLK_M1",
          "GPIO3_C1 / UART7_RX_M1 / SPI1_CLK_M1",
          "GPIO3_B5 / PWM12_M0 / UART3_TX_M1 / I2S2_SCLK_M1",
          "GPIO3_B7 / I2C3_SCL_M1 / SPI1_MOSI_M1",
          "GND",
          "GPIO3_C0 / UART7_TX_M1 / I2C3_SDA_M1 / SPI1_MISO_M1",
          "GPIO3_A4",
          "+3.3V",
          "GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0",
          "GPIO1_B2 / UART4_RX_M2 / SPI0_MOSI_M2",
          "GND",
          "GPIO1_B1 / SPI0_MISO_M2",
          "SARADC_IN4",
          "GPIO1_B3 / UART4_TX_M2 / SPI0_CLK_M2",
          "GPIO1_B4 / UART7_RX_M2 / SPI0_CS0_M2",
          "GND",
          "GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2",
          "GPIO4_C6 / PWM7_IR_M3 / I2C0_SDA_M1 / SPI3_CLK_M0",
          "GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 / SPI3_MOSI_M0",
          "GPIO1_D7 / PWM15_IR_M3 / UART1_CTSN_M1",
          "GND",
          "GPIO1_B7 / PWM13_M2 / UART1_RX_M1 / SPDIF_TX_M0",
          "GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1",
          "GPIO3_A7 / PWM8_M0",
          "GND",
          "GPIO3_B6 / PWM13_M0 / UART3_RX_M1 / I2S2_LRCK_M1",
          "GPIO3_B1 / PWM2_M1 / UART2_TX_M2",
          "NC",
          "GPIO3_B2 / PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1",
          "GND",
          "GPIO3_B3 / UART2_RTSN / I2S2_SDO_M1"
        ],
        "position": [
          7,
          3.5
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "CON1",
        "pitch": 2.54,
        "types": {},
        "notes": {
          "37": "Physical contact 37 is unconnected on schematic v1.423: series resistor R95134 is not fitted. GPIO0_A0 requires hardware rework."
        },
        "landing": false,
        "surfaceAcrossReverse": true
      },
      {
        "key": "fan",
        "title": "FAN",
        "signals": [
          "FAN−",
          "5V"
        ],
        "position": [
          7,
          77
        ],
        "rows": 1,
        "kind": "aux",
        "number": "U90087",
        "pitch": 2.54,
        "types": {
          "1": "power_out",
          "2": "power_out"
        },
        "notes": {
          "1": "Low-side switched fan return; not a permanent ground. Socket contact pitch is 1.25 mm."
        },
        "landing": true,
        "visual": [
          4,
          9
        ]
      },
      {
        "key": "rtc",
        "title": "RTC",
        "signals": [
          "BAT+",
          "GND"
        ],
        "position": [
          31,
          77
        ],
        "rows": 1,
        "kind": "aux",
        "number": "J2",
        "pitch": 2.54,
        "types": {
          "1": "power_in"
        },
        "notes": {
          "1": "3 V RTC backup battery input. Physical J2 is a 1.25 mm socket."
        },
        "landing": true,
        "visual": [
          75,
          9
        ]
      }
    ],
    "parts": [
      [
        "soc",
        32,
        27,
        24,
        24,
        "RK3588"
      ],
      [
        "chip",
        12,
        31,
        12,
        18,
        "LPDDR4X"
      ],
      [
        "usb3",
        83,
        34,
        19,
        14,
        "USB3"
      ],
      [
        "usb2",
        83,
        52,
        19,
        14,
        "USB2"
      ],
      [
        "ethernet",
        80,
        14,
        22,
        17,
        "2.5G"
      ],
      [
        "usbc",
        4,
        65,
        9,
        9,
        "PWR"
      ],
      [
        "hdmi",
        27,
        61,
        16,
        13,
        "HDMI"
      ],
      [
        "hdmi",
        51,
        61,
        16,
        13,
        "HDMI"
      ],
      [
        "hdmi",
        69,
        -1,
        10,
        10,
        "HDMI IN"
      ],
      [
        "jack",
        70,
        58,
        7,
        16,
        "AUDIO"
      ],
      [
        "socket",
        59,
        20,
        21,
        4,
        "M.2 E"
      ],
      [
        "switch",
        58,
        1,
        4,
        4,
        ""
      ]
    ],
    "cad": {
      "label": "ROCK 5B manufacturer CAD archive (revision 1.42)",
      "url": "https://dl.radxa.com/rock5/5b/docs/hw/ROCK5B_v1.42_3D.step.zip"
    },
    "extra": "40-pin GPIO, fan and RTC battery contacts for v1.423. GPIO pin 22 SARADC_IN4 is a 1.8 V input. Contact 37 is NC with the documented factory R95134 population. Console UART is on GPIO pins 8 and 10.",
    "title": [
      49,
      55.5,
      3.3,
      true
    ]
  },
  {
    "id": "radxa-rock-3a",
    "name": "Radxa ROCK 3A",
    "shortName": "ROCK 3A",
    "revision": "1.31",
    "soc": "RK3568",
    "size": [
      85,
      56
    ],
    "source": "https://docs.radxa.com/en/rock3/rock3a/hardware-design/hardware-interface",
    "color": "#287953",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "+3.3V",
          "+5.0V",
          "GPIO1_A0 / I2C3_SDA_M0 / UART3_RX_M0 / CAN1_RX_M0",
          "+5.0V",
          "GPIO1_A1 / I2C3_SCL_M0 / UART3_TX_M0 / CAN1_TX_M0",
          "GND",
          "GPIO0_B5 / I2C2_SCL_M0 / PWM1_M1",
          "GPIO0_D1 / UART2_TX_M0",
          "GND",
          "GPIO0_D0 / UART2_RX_M0",
          "GPIO3_C4 / PWM14_M0 / UART7_TX_M1",
          "GPIO3_A3",
          "GPIO3_C5 / PWM15_IR_M0 / UART7_RX_M1",
          "GND",
          "GPIO0_C0 / PWM1_M0 / UART0_RX",
          "GPIO0_B6 / I2C2_SDA_M0 / PWM2_M1",
          "+3.3V",
          "GPIO3_B2 / UART4_TX_M1 / PWM9_M0",
          "GPIO4_C3 / PWM15_IR_M1 / SPI3_MOSI_M1 / CAN1_TX_M1",
          "GND",
          "GPIO4_C5 / PWM12_M1 / SPI3_MISO_M1 / UART9_TX_M1",
          "GPIO0_C1 / PWM2_M0 / UART0_TX",
          "GPIO4_C2 / PWM14_M1 / SPI3_CLK_M1 / CAN1_RX_M1",
          "GPIO4_C6 / PWM13_M1 / SPI3_CS0_M1 / UART9_RX_M1",
          "GND",
          "GPIO4_D1 / SPI3_CS1_M1",
          "GPIO0_B4 / I2C1_SDA / CAN0_RX_M0 / USB_DP",
          "GPIO0_B3 / I2C1_SCL / CAN0_TX_M0 / USB_DM",
          "GPIO2_D7 / UART8_TX_M1",
          "GND",
          "GPIO3_A0 / UART8_RX_M1",
          "GPIO3_C2 / UART5_TX_M1",
          "GPIO3_C3 / SPI1_CLK_M1 / UART5_RX_M1",
          "GND",
          "GPIO3_A4",
          "GPIO3_A2",
          "SARADC_VIN5",
          "GPIO3_A6",
          "GND",
          "GPIO3_A5"
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
        "key": "fan",
        "title": "FAN",
        "signals": [
          "GND",
          "PWM_FAN",
          "5V"
        ],
        "position": [
          7,
          61
        ],
        "rows": 1,
        "kind": "aux",
        "number": "U90010",
        "pitch": 2.54,
        "types": {
          "2": "output"
        },
        "notes": {
          "2": "3.3 V fan PWM-control output. Physical connector order is GND, PWM, +5 V at 1.25 mm pitch."
        },
        "landing": true,
        "visual": [
          58,
          43
        ]
      },
      {
        "key": "rtc",
        "title": "RTC",
        "signals": [
          "GND",
          "BAT+"
        ],
        "position": [
          33,
          61
        ],
        "rows": 1,
        "kind": "aux",
        "number": "U5",
        "pitch": 2.54,
        "types": {
          "2": "power_in"
        },
        "notes": {
          "2": "3 V RTC backup battery input. Physical RTC socket is 1.25 mm pitch."
        },
        "landing": true,
        "visual": [
          48,
          46
        ]
      }
    ],
    "parts": [
      [
        "soc",
        29,
        14,
        19,
        19,
        "RK3568",
        45
      ],
      [
        "chip",
        10,
        14,
        12,
        17,
        "LPDDR4X"
      ],
      [
        "usb2",
        69,
        1,
        18,
        14,
        "USB2"
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
        "PWR"
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
        "ribbon",
        0,
        18,
        5,
        20,
        "MIPI"
      ],
      [
        "ribbon",
        20,
        45,
        4,
        11,
        "CSI"
      ],
      [
        "socket",
        49,
        34,
        18,
        4,
        "M.2 E"
      ]
    ],
    "cad": {
      "label": "ROCK 3A manufacturer CAD archive (revision 1.31)",
      "url": "https://dl.radxa.com/rock3/docs/hw/3a/radxa_rock_3a_v1310_3d.zip"
    },
    "extra": "40-pin GPIO, three fan contacts and two RTC battery contacts. GPIO pin 37 SARADC_VIN5 is a 1.8 V input. GPIO pins 27/28 require resistor rework for their USB alternate function. Console UART is on GPIO pins 8 and 10.",
    "title": [
      40,
      40.5,
      3.2,
      true
    ]
  },
  {
    "id": "radxa-zero-3w",
    "name": "Radxa ZERO 3W",
    "shortName": "ZERO 3W",
    "revision": "1.11",
    "soc": "RK3566",
    "size": [
      30,
      65
    ],
    "source": "https://docs.radxa.com/en/zero/zero3/hardware-design/hardware-interface",
    "color": "#287953",
    "headers": [
      {
        "key": "gpio",
        "title": "GPIO",
        "signals": [
          "+3.3V",
          "+5.0V",
          "GPIO1_A0 / UART3_RX_M0",
          "+5.0V",
          "GPIO1_A1 / UART3_TX_M0",
          "GND",
          "GPIO3_C4 / PWM14_M0",
          "GPIO0_D1 / UART2_TX_M0",
          "GND",
          "GPIO0_D0 / UART2_RX_M0",
          "GPIO3_A1",
          "GPIO3_A3 / I2S3_SCLK_M0",
          "GPIO3_A2 / I2S3_MCLK_M0",
          "GND",
          "GPIO3_B0",
          "GPIO3_B1 / UART4_RX_M1 / PWM8_M0",
          "+3.3V",
          "GPIO3_B2 / UART4_TX_M1 / PWM9_M0",
          "GPIO4_C3 / SPI3_MOSI_M1 / I2S3_SCLK_M1 / PWM15_IR_M1",
          "GND",
          "GPIO4_C5 / SPI3_MISO_M1 / I2S3_SDO_M1 / PWM12_M1 / UART9_TX_M1",
          "GPIO3_C1 / I2S1_SDO2_M2",
          "GPIO4_C2 / SPI3_CLK_M1 / I2S3_MCLK_M1 / PWM14_M1",
          "GPIO4_C6 / SPI3_CS0_M1 / PWM13_M1 / UART9_RX_M1 / I2S3_SDI_M1",
          "GND",
          "NC",
          "GPIO4_B2 / I2S2_SDI_M1 / I2C4_SDA_M0",
          "GPIO4_B3 / I2C4_SCL_M0 / I2S2_SDO_M1",
          "GPIO3_B3 / I2C5_SCL_M0",
          "GND",
          "GPIO3_B4 / I2C5_SDA_M0",
          "GPIO3_C2 / UART5_TX_M1 / I2S1_SDO3_M2",
          "GPIO3_C3 / I2S1_SCLK_RX_M2 / UART5_RX_M1",
          "GND",
          "GPIO3_A4 / I2S3_LRCK_M0",
          "GPIO3_A7",
          "GPIO1_A4 / I2S1_SCLK_RX_M0",
          "GPIO3_A6 / I2S3_SDI_M0",
          "GND",
          "GPIO3_A5 / I2S3_SDO_M0"
        ],
        "position": [
          2.5,
          7
        ],
        "rows": 2,
        "kind": "gpio",
        "number": "GPIO",
        "pitch": 2.54,
        "types": {},
        "notes": {},
        "landing": false,
        "axis": "y"
      }
    ],
    "parts": [
      [
        "usbc",
        23,
        6,
        9,
        8,
        "USB2"
      ],
      [
        "usbc",
        23,
        22,
        9,
        8,
        "USB3"
      ],
      [
        "hdmi",
        23,
        48,
        9,
        8,
        "HDMI"
      ],
      [
        "soc-dark",
        7,
        29,
        15,
        15,
        "RK3566"
      ],
      [
        "chip",
        9,
        17,
        12,
        7,
        "LPDDR4"
      ],
      [
        "shield",
        9,
        47,
        12,
        12,
        "WiFi"
      ],
      [
        "ribbon",
        9,
        61,
        18,
        4,
        "CSI"
      ],
      [
        "antenna",
        8,
        60,
        4,
        3,
        ""
      ]
    ],
    "cad": {
      "label": "ZERO 3W manufacturer CAD archive (revision 1.11)",
      "url": "https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_3d_stp.zip"
    },
    "extra": "40-pin GPIO for the wireless ZERO 3W, with NC at physical pin 26. GPIO is 3.3 V. The 1.5 Mbaud debug console uses GPIO pins 8 (TX) and 10 (RX). ZERO 3E is a separate Ethernet board and is not represented by this entry.",
    "title": [
      15,
      11,
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
    manufacturer: "Radxa", category: "Single-board computers",
    subtitle: `${board.soc} / rev ${board.revision}`,
    description: `Board revision ${board.revision}. ${board.extra} The drawing is a component-side reference. High-speed sockets are illustrated but their individual contacts are outside this wiring entry.`,
    source: board.source, referencePrefix: "U", contactLayout: "physical", width, height, pins,
    tags: ["radxa", "rock", "sbc", "linux", "gpio", board.soc.toLowerCase(), board.shortName.toLowerCase()],
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

const radxaComponents = boards.map(component);
const radxaArt = Object.fromEntries(boards.map(board => [board.id, (component, showLabels) => boardArt(board, component, showLabels)]));
const radxaFootprints = Object.fromEntries(boards.map((board, index) => [board.id, referenceFootprint(board, radxaComponents[index])]));
const radxaModels = Object.fromEntries(boards.filter(board => board.cad).map(board => [board.id, {
  label: board.cad.label, url: board.cad.url,
  note: "Manufacturer CAD reference. Match the exact board revision; the WirePad carrier geometry is approximate.",
}]));

export default defineFamily("radxa", (radxaComponents).map(component => ({ component, render: (radxaArt)[component.art], footprint: (radxaFootprints)[component.id], model: radxaModels[component.id] })));
