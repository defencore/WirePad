import { defineFamily } from "../registry.js";
import { sbcMoreFamily } from "../shared/sbc-board.js";

const boards = [
  {
    "id": "radxa-zero",
    "name": "Radxa ZERO",
    "shortName": "ZERO",
    "manufacturer": "Radxa",
    "revision": "v1.51",
    "soc": "Amlogic S905Y2",
    "size": [
      65,
      30
    ],
    "color": "#237557",
    "source": "https://docs.radxa.com/en/zero/zero/hardware-design/hardware-interface",
    "documentation": [
      "https://docs.radxa.com/en/zero/zero/hardware-design/hardware-interface",
      "https://dl.radxa.com/zero/docs/hw/v1510/radxa_zero_v1.51_schematic.pdf",
      "https://dl.radxa.com/zero/docs/hw/v1510/radxa_zero_v1.51_components_placement_map.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON8601",
        "pins": [
          {
            "signal": "+3.3V"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIOA_14 / I2C_EE_M3_SDA"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIOA_15 / I2C_EE_M3_SCL"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOAO_3 / I2C_AO_M0_SDA / UART_AO_B_RX / I2C_AO_S0_SDA"
          },
          {
            "signal": "GPIOAO_0 / UART_AO_A_TXD"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOAO_1 / UART_AO_A_RXD"
          },
          {
            "signal": "GPIOAO_2 / I2C_AO_M0_SCL / UART_AO_B_TX / I2C_AO_S0_SCL"
          },
          {
            "signal": "GPIOX_9 / SPI_A_MISO / TDMA_D0"
          },
          {
            "signal": "GPIOX_11 / SPI_A_SCLK / I2C_EE_M1_SCL / TDMA_SCLK"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "SARADC_CH1"
          },
          {
            "signal": "GPIOX_10 / SPI_A_SS0 / I2C_EE_M1_SDA / TDMA_FS"
          },
          {
            "signal": "+3.3V"
          },
          {
            "signal": "GPIOX_8 / SPI_A_MOSI / PWM_C / TDMA_D1"
          },
          {
            "signal": "GPIOH_4 / UART_EE_C_RTS / SPI_B_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOH_5 / UART_EE_C_CTS / SPI_B_MISO / PWM_F"
          },
          {
            "signal": "GPIOC_7"
          },
          {
            "signal": "GPIOH_7 / UART_EE_C_TX / SPI_B_SCLK / I2C_EE_M1_SCL"
          },
          {
            "signal": "GPIOH_6 / UART_EE_C_RX / SPI_B_SS0 / I2C_EE_M1_SDA"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "SARADC_CH2"
          },
          {
            "signal": "GPIOAO_3 / I2C_AO_M0_SDA / UART_AO_B_RX / I2C_AO_S0_SDA"
          },
          {
            "signal": "GPIOAO_2 / I2C_AO_M0_SCL / UART_AO_B_TX / I2C_AO_S0_SCL"
          },
          {
            "signal": "NC"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "NC"
          },
          {
            "signal": "GPIOAO_4 / PWMAO_C"
          },
          {
            "signal": "NC"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOAO_8 / UART_AO_B_TX"
          },
          {
            "signal": "GPIOH_8"
          },
          {
            "signal": "GPIOAO_9 / UART_AO_B_RX"
          },
          {
            "signal": "GPIOAO_10 / PWMAO_D"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOAO_11 / PWMAO_A"
          }
        ],
        "position": [
          7.5,
          5.1
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      }
    ],
    "parts": [
      [
        "hdmi",
        8,
        23,
        9,
        8,
        "microHDMI"
      ],
      [
        "usbc",
        36,
        23,
        9,
        8,
        "USB3"
      ],
      [
        "usbc",
        49,
        23,
        9,
        8,
        "OTG/5V"
      ],
      [
        "chip",
        19,
        9,
        12,
        13,
        "S905Y2"
      ],
      [
        "ram",
        33,
        8,
        11,
        14,
        "LPDDR4"
      ],
      [
        "radio",
        47,
        9,
        12,
        12,
        "WiFi/BT"
      ],
      [
        "antenna",
        60,
        11,
        4,
        12,
        ""
      ]
    ],
    "description": "Original Amlogic ZERO, all 40 GPIO contacts. This is distinct from ZERO2 Pro and ZERO3 families. Exact v1.51 schematic and placement map selected; maker overview photograph is v1.4 with the same visible connector arrangement. microSD/eMMC and USB/HDMI socket cable contacts are outside this scope.",
    "cad": {
      "label": "Radxa ZERO v1.51 manufacturer DXF mechanical archive",
      "url": "https://dl.radxa.com/zero/docs/hw/v1510/radxa_zero_v1.51_2d_dxf.zip"
    },
    "holes": [
      [
        3.5,
        3.5
      ],
      [
        61.5,
        3.5
      ],
      [
        3.5,
        26.5
      ],
      [
        61.5,
        26.5
      ]
    ],
    "title": [
      23,
      25,
      2
    ]
  },
  {
    "id": "radxa-rock4se",
    "name": "Radxa ROCK4SE",
    "shortName": "ROCK4SE",
    "manufacturer": "Radxa",
    "revision": "v1.53",
    "soc": "RK3399-T",
    "size": [
      85,
      56
    ],
    "color": "#237557",
    "source": "https://docs.radxa.com/en/rock4/rock4ab-se/hardware-design/hardware-interface",
    "documentation": [
      "https://docs.radxa.com/en/rock4/rock4ab-se/hardware-design/hardware-interface",
      "https://dl.radxa.com/rockpi4/docs/hw/rockpi4/ROCK-4-SE-V1.53-SCH.pdf",
      "https://dl.radxa.com/rockpi4/docs/hw/rockpi4/ROCK-4-SE-V1.53-SMD.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON8601",
        "pins": [
          {
            "signal": "+3.3V",
            "voltage": "3.0 V"
          },
          {
            "signal": "+5.0V",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_A7 / I2C7_SDA",
            "voltage": "3.0 V"
          },
          {
            "signal": "+5.0V",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_B0 / I2C7_SCL",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_B3 / SPI2_CLK",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C4 / UART2_TXD",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C3 / UART2_RXD",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C2 / PWM0",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_A3 / I2S1_SCLK",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C6 / PWM1",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C5 / SPDIF_TX",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_D2",
            "voltage": "3.0 V"
          },
          {
            "signal": "+3.3V",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_D4",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_B0 / SPI1_TXD / UART4_TXD",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_A7 / SPI1_RXD / UART4_RXD",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_D5",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_B1 / SPI1_CLK",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_B2 / SPI1_CSn",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "ADC_IN0",
            "voltage": "3.0 V",
            "type": "input",
            "note": "ADC_IN0 is an analog input with 1.8 V maximum. Not a 3.0 V digital GPIO."
          },
          {
            "signal": "GPIO2_A0 / I2C2_SDA",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_A1 / I2C2_CLK",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_B2 / SPI2_TXD / I2C6_SCL",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO2_B1 / SPI2_RXD / I2C6_SDA",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO3_C0 / SPDIF_TX / UART3_CTSn",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO2_B4 / SPI2_CSn",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_A5 / I2S1_LRCK_TX",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_A4 / I2S1_LRCK_RX",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_D6",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_A6 / I2S1_SDI",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_A7 / I2S1_SDO",
            "voltage": "3.0 V"
          }
        ],
        "position": [
          77.5,
          50.8
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "reverse": true
      }
    ],
    "parts": [
      [
        "ethernet",
        -1,
        0,
        22,
        17,
        "1G"
      ],
      [
        "usb3",
        -1,
        20,
        17,
        15,
        "USB3x2"
      ],
      [
        "usb2",
        -1,
        39,
        17,
        16,
        "USB2x2"
      ],
      [
        "audio",
        32,
        -1,
        7,
        13,
        "AUDIO"
      ],
      [
        "fpc",
        40,
        0,
        4,
        23,
        "CSI"
      ],
      [
        "hdmi",
        48,
        -1,
        16,
        12,
        "HDMI"
      ],
      [
        "usbc",
        71,
        -1,
        9,
        8,
        "PD"
      ],
      [
        "ram",
        61,
        19,
        11,
        16,
        "LPDDR4"
      ],
      [
        "radio",
        64,
        38,
        12,
        10,
        "WiFi/BT"
      ],
      [
        "antenna",
        81,
        42,
        3,
        6,
        ""
      ],
      [
        "fpc",
        80,
        17,
        4,
        20,
        "DSI"
      ]
    ],
    "description": "All 40 CON8601 contacts. Most digital signals are 3.0 V; pin 32 GPIO3_C0 is 3.3 V and pin 26 ADC_IN0 accepts up to 1.8 V. The component-side photograph places RK3399-T on the reverse, so no front-face SoC package is invented. Reverse-side RTC and high-speed/eMMC sockets are excluded from the front-contact scope. The shared ROCK4B STEP file is not presented as an exact 4SE model.",
    "cad": {
      "label": "ROCK4SE v1.53 exact manufacturer schematic (PDF; shared 4B STEP not substituted)",
      "url": "https://dl.radxa.com/rockpi4/docs/hw/rockpi4/ROCK-4-SE-V1.53-SCH.pdf"
    },
    "gpioVoltage": "3.0 V",
    "holes": [
      [
        27,
        3
      ],
      [
        81.5,
        3
      ],
      [
        27,
        52.5
      ],
      [
        81.5,
        52.5
      ]
    ],
    "title": [
      47,
      32,
      2.7
    ]
  },
  {
    "id": "radxa-rock5c",
    "name": "Radxa ROCK5C",
    "shortName": "ROCK5C",
    "manufacturer": "Radxa",
    "revision": "v2.10",
    "soc": "RK3588S2",
    "size": [
      56,
      85
    ],
    "color": "#237557",
    "source": "https://docs.radxa.com/en/rock5/rock5c/hardware-design/hardware-interface",
    "documentation": [
      "https://docs.radxa.com/en/rock5/rock5c/hardware-design/hardware-interface",
      "https://dl.radxa.com/rock5/5c/docs/radxa_rock_5c_schematic_v2.10.pdf",
      "https://dl.radxa.com/rock5/5c/docs/radxa_rock_5c_components_placement_map_v2.10.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "J8",
        "pins": [
          {
            "signal": "+3.3V"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO1_D7 / UART1_CTSN_M1 / I2C8_SDA_M2 / PWM15_IR_M3"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO1_D6 / UART1_RTSN_M1 / I2C8_SCL_M2 / PWM14_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_B3 / UART4_TX_M2 / SPI0_CLK_M2"
          },
          {
            "signal": "GPIO0_B5 / UART2_TX_M0 / I2C1_SCL_M0 / I2S1_MCLK_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO0_B6 / UART2_RX_M0 / I2C1_SDA_M0 / I2S1_SCLK_M1"
          },
          {
            "signal": "GPIO4_B3 / UART8_CTSN_M0 / PWM15_IR_M1 / I2S1_SDO2_M0"
          },
          {
            "signal": "GPIO4_A1 / UART9_CTSN_M1 / I2S1_SCLK_M0 / SPI0_MOSI_M1"
          },
          {
            "signal": "GPIO4_B2 / UART8_RTSN_M0 / PWM14_M1 / I2S1_SDO1_M0 / SPI0_CS0_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_B4 / UART9_TX_M1 / PWM11_IR_M1 / SPDIF0_TX_M1 / I2S1_SDO3_M0"
          },
          {
            "signal": "GPIO1_A5 / SPI2_MOSI_M0"
          },
          {
            "signal": "+3.3V"
          },
          {
            "signal": "GPIO1_B0 / SPI2_CS1_M0"
          },
          {
            "signal": "GPIO1_A1 / UART6_TX_M1 / I2C2_SCL_M4 / SPI4_MOSI_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_A0 / UART6_RX_M1 / I2C2_SDA_M4 / SPI4_MISO_M2"
          },
          {
            "signal": "GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2"
          },
          {
            "signal": "GPIO1_A2 / UART6_RTSN_M1 / I2C4_SDA_M3 / PWM0_M2 / SPI4_CLK_M2"
          },
          {
            "signal": "GPIO1_A3 / UART6_CTSN_M1 / I2C4_SCL_M3 / PWM1_M2 / SPI4_CS0_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_A4 / SPI2_MISO_M0"
          },
          {
            "signal": "GPIO0_C7 / UART1_RTSN_M2 / I2C6_SDA_M0 / PWM6_M0 / I2S1_SDI2_M1 / SPI0_MISO_M0"
          },
          {
            "signal": "GPIO0_D0 / UART1_CTSN_M2 / I2C6_SCL_M0 / PWM7_IR_M0 / I2S1_SDI3_M1 / SPI3_MISO_M2"
          },
          {
            "signal": "GPIO1_B2 / UART4_RX_M2 / SPI0_MOSI_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_B1 / SPI0_MISO_M2"
          },
          {
            "signal": "GPIO4_B0 / UART8_TX_M0 / I2C6_SDA_M3 / I2S1_SDI3_M0 / SPI2_CS1_M1"
          },
          {
            "signal": "GPIO1_B4 / UART7_RX_M2 / SPI0_CS0_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_A0 / UART9_RTSN_M1 / I2S1_MCLK_M0 / SPI0_MISO_M1"
          },
          {
            "signal": "GPIO4_A2 / I2S1_LRCK_M0 / SPI0_CLK_M1"
          },
          {
            "signal": "SARADC_VIN2",
            "note": "Analog input through the schematic 4.7k/5.6k divider to SARADC_VIN2. This contact is not a digital GPIO."
          },
          {
            "signal": "GPIO4_A5 / UART3_TX_M2 / I2C3_SDA_M2 / I2S1_SDI0_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_B1 / UART8_RX_M0 / I2C6_SCL_M3 / SPDIF1_TX_M1 / I2S1_SDO0_M0 / SPI0_CS1_M1"
          }
        ],
        "position": [
          51,
          9.5
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "fan",
        "ref": "J13",
        "pins": [
          {
            "signal": "FAN- / PWM switched return",
            "type": "open_collector",
            "note": "Low-side controlled fan return. This is not a push-pull GPIO output."
          },
          {
            "signal": "VCC_5V0",
            "type": "power_out",
            "note": "5 V positive fan supply."
          }
        ],
        "position": [
          10.5,
          67.5
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket",
        "reverse": true,
        "caption": [
          5.5,
          63.8
        ]
      }
    ],
    "parts": [
      [
        "usbc",
        -1,
        6,
        8,
        12,
        "5V"
      ],
      [
        "hdmi",
        -1,
        25,
        12,
        15,
        "HDMI"
      ],
      [
        "audio",
        -1,
        49,
        13,
        7,
        "AUDIO"
      ],
      [
        "usb2",
        3,
        72,
        13,
        14,
        "USB2x2"
      ],
      [
        "usb3",
        20,
        72,
        16,
        16,
        "USB3x2"
      ],
      [
        "ethernet",
        38,
        68,
        17,
        20,
        "1G"
      ],
      [
        "fpc",
        40,
        0,
        10,
        4,
        "DSI"
      ],
      [
        "socket",
        21,
        0,
        13,
        5,
        "M.2E"
      ],
      [
        "chip",
        16,
        26,
        18,
        18,
        "RK3588S2"
      ],
      [
        "ram",
        35,
        28,
        12,
        15,
        "LPDDR5X"
      ],
      [
        "radio",
        20,
        8,
        12,
        12,
        "WiFi6"
      ],
      [
        "chip",
        28,
        47,
        11,
        12,
        "PMIC"
      ],
      [
        "button",
        9,
        0,
        5,
        5,
        ""
      ],
      [
        "socket",
        43,
        59,
        5,
        7,
        "PoE"
      ]
    ],
    "description": "All 40 GPIO contacts and two fan cable contacts. Illustration follows the v2.10 assembly placement, not the older v1.1 overview: GPIO occupies the long right edge. Fan pin 1 is the low-side switched return, pin 2 is +5 V; schematic mounting tabs 3/4 are ground but are not cable contacts. Reverse-side RTC, PoE and high-speed expansion sockets are outside the declared wiring scope.",
    "cad": {
      "label": "ROCK5C v2.10 exact manufacturer STEP assembly archive",
      "url": "https://dl.radxa.com/rock5/5c/docs/radxa_rock_5c_3d_stp_v2.10.stp.zip"
    },
    "holes": [
      [
        8,
        4.5
      ],
      [
        52,
        4.5
      ],
      [
        8,
        42
      ],
      [
        35,
        80
      ]
    ],
    "title": [
      25,
      23,
      2.5
    ]
  },
  {
    "id": "radxa-rock5t",
    "name": "Radxa ROCK5T",
    "shortName": "ROCK5T",
    "manufacturer": "Radxa",
    "revision": "v1.24 (standard)",
    "soc": "RK3588",
    "size": [
      110,
      80
    ],
    "color": "#237557",
    "source": "https://docs.radxa.com/en/rock5/rock5t/hardware-design/hardware-interface",
    "documentation": [
      "https://docs.radxa.com/en/rock5/rock5t/hardware-design/hardware-interface",
      "https://dl.radxa.com/rock5/5t/docs/hw/radxa_rock_5t_schematic_v1.24.pdf",
      "https://dl.radxa.com/rock5/5t/docs/hw/radxa_rock_5t_components_placement_map_v1.24.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON1",
        "pins": [
          {
            "signal": "+3.3V"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO4_B3 / CAN1_TX_M1 / PWM15_IR_M1 / UART8_CTSN_M0 / I2S1_SDO2_M0 / I2C7_SDA_M3"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO4_B2 / CAN1_RX_M1 / PWM14_M1 / UART8_RTSN_M0 / I2S1_SDO1_M0 / I2C7_SCL_M3"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_C3 / PWM15_IR_M0 / I2C8_SDA_M4 / SPI1_CS1_M1"
          },
          {
            "signal": "GPIO0_B5 / UART2_TX_M0 / I2C1_SCL_M0 / I2S1_MCLK_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO0_B6 / UART2_RX_M0 / I2C1_SDA_M0 / I2S1_SCLK_M1"
          },
          {
            "signal": "GPIO3_C1 / SPI1_CLK_M1"
          },
          {
            "signal": "GPIO3_B5 / CAN1_RX_M0 / PWM12_M0 / UART3_TX_M1 / I2S2_SCLK_M1"
          },
          {
            "signal": "GPIO3_B7 / I2C3_SCL_M1 / SPI1_MOSI_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_C0 / I2C3_SDA_M1 / SPI1_MISO_M1"
          },
          {
            "signal": "GPIO3_A4 / UART8_RTSn_M1_BT"
          },
          {
            "signal": "+3.3V"
          },
          {
            "signal": "GPIO4_C4 / PWM5_M2"
          },
          {
            "signal": "GPIO1_B2 / UART4_RX_M2 / SPI0_MOSI_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_B1 / SPI0_MISO_M2"
          },
          {
            "signal": "SARADC_IN4",
            "note": "Analog SARADC_IN4 input, not a digital GPIO. Follow the 1.8 V ADC input limit."
          },
          {
            "signal": "GPIO1_B3 / UART4_TX_M2 / SPI0_CLK_M2"
          },
          {
            "signal": "GPIO1_B4 / SPI0_CS0_M2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_B5 / SPI0_CS1_M2"
          },
          {
            "signal": "GPIO4_C6",
            "type": "bidirectional",
            "note": "3.3 V v1.24 GPIO via R95157=0 ohm. Older v1.2 web table lists GPIO2_B3/I2C3_SDA_M3; that older routing is not used here."
          },
          {
            "signal": "GPIO4_C5",
            "type": "bidirectional",
            "note": "3.3 V v1.24 GPIO via R95159=0 ohm. USB4_DM link R95160 is unpopulated. Older v1.2 web table lists GPIO2_B2/I2C3_SCL_M3; that older routing is not used here."
          },
          {
            "signal": "GPIO1_A3 / PWM1_M2 / I2C4_SCL_M3"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_A2 / PWM0_M2 / I2C4_SDA_M3"
          },
          {
            "signal": "GPIO3_C2 / PWM14_M0 / I2C8_SCL_M4 / SPI1_CS0_M1"
          },
          {
            "signal": "GPIO3_A7 / PWM8_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_B6 / CAN1_TX_M0 / PWM13_M0 / UART3_RX_M1 / I2S2_LRCK_M1"
          },
          {
            "signal": "GPIO3_B1 / PWM2_M1 / UART2_TX_M2 / I2S2_LRCK_RX_M1"
          },
          {
            "signal": "GPIO1_A7"
          },
          {
            "signal": "GPIO3_B2 / PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_B3 / UART2_RTSN / I2S2_SDO_M1"
          }
        ],
        "position": [
          8.5,
          5.1
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      }
    ],
    "parts": [
      [
        "usbc",
        72,
        -1,
        8,
        10,
        "DP/USB3"
      ],
      [
        "audio",
        87,
        -1,
        7,
        13,
        "AUDIO"
      ],
      [
        "button",
        98,
        0,
        4,
        4,
        ""
      ],
      [
        "chip",
        43,
        29,
        22,
        24,
        "RK3588"
      ],
      [
        "ram",
        43,
        11,
        20,
        13,
        "LPDDR5"
      ],
      [
        "ram",
        14,
        31,
        20,
        17,
        "LPDDR5"
      ],
      [
        "radio",
        90,
        20,
        13,
        16,
        "WiFi6"
      ],
      [
        "chip",
        73,
        14,
        12,
        14,
        "eMMC"
      ],
      [
        "socket",
        1,
        9,
        29,
        5,
        "M.2B"
      ],
      [
        "fpc",
        106,
        9,
        4,
        12,
        "PDM"
      ],
      [
        "fpc",
        106,
        25,
        4,
        16,
        "DSI"
      ],
      [
        "fpc",
        106,
        45,
        4,
        12,
        "CSI"
      ],
      [
        "fpc",
        106,
        59,
        4,
        10,
        "CSI"
      ],
      [
        "hdmi",
        -1,
        34,
        10,
        16,
        "HDMI IN"
      ],
      [
        "dc",
        -1,
        67,
        10,
        14,
        "9-20V"
      ],
      [
        "usb3",
        11,
        64,
        14,
        18,
        "USB3x2"
      ],
      [
        "usb2",
        29,
        64,
        14,
        18,
        "USB2x2"
      ],
      [
        "hdmi",
        49,
        62,
        7,
        20,
        "HDMI"
      ],
      [
        "hdmi",
        64,
        62,
        7,
        20,
        "HDMI"
      ],
      [
        "ethernet",
        78,
        61,
        16,
        21,
        "2.5G"
      ],
      [
        "ethernet",
        95,
        61,
        16,
        21,
        "2.5G"
      ],
      [
        "button",
        0,
        27,
        3,
        4,
        ""
      ],
      [
        "button",
        0,
        59,
        3,
        4,
        ""
      ]
    ],
    "description": "All 40 GPIO contacts, using the published v1.2 header-function table and exact v1.24 standard-board schematic. Physical top-side layout was checked against the v1.24 assembly drawing; industrial v2.01 is not substituted. The maker publishes STEP v1.2 but no exact v1.24 STEP was verified, so the model link is the exact schematic. Fan, rear RTC, PoE, M.2 and high-speed sockets are outside this GPIO-focused scope. Pins 27/28 follow the exact v1.24 schematic: GPIO4_C6/GPIO4_C5 through fitted zero-ohm links, replacing the older web-table GPIO2_B3/GPIO2_B2 functions.",
    "cad": {
      "label": "ROCK5T standard v1.24 exact schematic (PDF; v1.2 STEP revision differs)",
      "url": "https://dl.radxa.com/rock5/5t/docs/hw/radxa_rock_5t_schematic_v1.24.pdf"
    },
    "holes": [
      [
        3.5,
        3.5
      ],
      [
        61,
        3.5
      ],
      [
        106.5,
        3.5
      ],
      [
        3.5,
        55
      ],
      [
        106.5,
        55
      ]
    ],
    "title": [
      78,
      53,
      3
    ]
  },
  {
    "id": "radxa-rock3c",
    "name": "Radxa ROCK3C",
    "shortName": "ROCK3C",
    "manufacturer": "Radxa",
    "revision": "v1.4",
    "soc": "RK3566",
    "size": [
      85,
      56
    ],
    "color": "#237557",
    "source": "https://docs.radxa.com/en/rock3/rock3c/hardware-design/hardware-interface",
    "documentation": [
      "https://docs.radxa.com/en/rock3/rock3c/hardware-design/hardware-interface",
      "https://dl.radxa.com/rock3/docs/hw/3c/v1400/radxa_rock_3c_v1400_schematic.pdf",
      "https://dl.radxa.com/rock3/docs/hw/3c/v1400/radxa_rock_3c_v1400_component_placement_map.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON1",
        "pins": [
          {
            "signal": "+3.3V"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO1_A0 / UART3_RX_M0 / I2C3_SDA_M0"
          },
          {
            "signal": "+5.0V"
          },
          {
            "signal": "GPIO1_A1 / UART3_TX_M0 / I2C3_SCL_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_C4 / PWM14_M0"
          },
          {
            "signal": "GPIO0_D1 / UART2_TX_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO0_D0 / UART2_RX_M0"
          },
          {
            "signal": "GPIO3_A1"
          },
          {
            "signal": "GPIO3_A3 / I2S3_SCLK_M0"
          },
          {
            "signal": "GPIO3_A2 / I2S3_MCLK_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_B0"
          },
          {
            "signal": "GPIO3_B1 / UART4_RX_M1 / PWM8_M0"
          },
          {
            "signal": "+3.3V"
          },
          {
            "signal": "GPIO3_B2 / UART4_TX_M1 / PWM9_M0"
          },
          {
            "signal": "GPIO4_C3 / SPI3_MOSI_M1 / I2S3_SCLK_M1 / PWM15_IR_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_C5 / SPI3_MISO_M1 / I2S3_SDO_M1 / PWM12_M1 / UART9_TX_M1"
          },
          {
            "signal": "GPIO3_C1 / I2S1_SDO2_M2"
          },
          {
            "signal": "GPIO4_C2 / SPI3_CLK_M1 / I2S3_MCLK_M1 / PWM14_M1"
          },
          {
            "signal": "GPIO4_C6 / SPI3_CS0_M1 / PWM13_M1 / UART9_RX_M1 / I2S3_SDI_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_D1 / SPI3_CS1_M1"
          },
          {
            "signal": "GPIO4_B2 / I2S2_SDI_M1 / I2C4_SDA_M0"
          },
          {
            "signal": "GPIO4_B3 / I2C4_SCL_M0 / I2S2_SDO_M1"
          },
          {
            "signal": "GPIO3_B3 / I2C5_SCL_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_B4 / I2C5_SCD_M0"
          },
          {
            "signal": "GPIO3_C2 / UART5_TX_M1 / I2S1_SDO3_M2"
          },
          {
            "signal": "GPIO3_C3 / I2S1_SCLK_RX_M2 / UART5_RX_M1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_A4 / I2S3_LRCK_M0"
          },
          {
            "signal": "GPIO3_A7"
          },
          {
            "signal": "GPIO1_A4 / I2S1_SCLK_RX_M0"
          },
          {
            "signal": "GPIO3_A6 / I2S3_SDI_M0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO3_A5 / I2S3_SDO_M0"
          }
        ],
        "position": [
          7.5,
          5.1
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      },
      {
        "key": "fan",
        "ref": "U23",
        "pins": [
          {
            "signal": "FAN- / PWM switched return",
            "type": "open_collector",
            "note": "Low-side switched fan return, driven by PWM15_IR_M0. Not a separate logic-level GPIO output."
          },
          {
            "signal": "VCC5V0_SYS",
            "type": "power_out",
            "note": "5 V fan positive supply."
          }
        ],
        "position": [
          63,
          42
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket",
        "reverse": true,
        "caption": [
          60,
          37,
          "end"
        ]
      }
    ],
    "parts": [
      [
        "usb2",
        69,
        -1,
        17,
        17,
        "USB2x2"
      ],
      [
        "usb3",
        69,
        19,
        17,
        17,
        "USB2/3"
      ],
      [
        "ethernet",
        65,
        38,
        21,
        19,
        "1G"
      ],
      [
        "usbc",
        7,
        49,
        9,
        8,
        "PD"
      ],
      [
        "hdmi",
        25,
        46,
        16,
        11,
        "HDMI"
      ],
      [
        "audio",
        51,
        46,
        7,
        11,
        "AUDIO"
      ],
      [
        "fpc",
        0,
        16,
        3,
        21,
        "DSI"
      ],
      [
        "fpc",
        44,
        35,
        4,
        20,
        "CSI"
      ],
      [
        "socket",
        6,
        35,
        20,
        6,
        "M.2M"
      ],
      [
        "radio",
        11,
        14,
        12,
        12,
        "WiFi6"
      ],
      [
        "antenna",
        0,
        10,
        4,
        7,
        ""
      ],
      [
        "ram",
        29,
        14,
        11,
        16,
        "LPDDR4"
      ],
      [
        "chip",
        45,
        12,
        18,
        18,
        "RK3566",
        45
      ],
      [
        "socket",
        66,
        0,
        4,
        5,
        "PoE"
      ]
    ],
    "description": "All 40 GPIO contacts and two fan cable contacts. U23 pin 1 is the low-side switched return and pin 2 is +5 V; ground shell tabs 3/4 are not cable contacts. The v1.4 component-side source is used. Reverse RTC battery pads, PoE and eMMC/M.2/CSI/DSI socket contacts are outside this scope.",
    "cad": {
      "label": "ROCK3C v1.4 manufacturer DXF mechanical archive",
      "url": "https://dl.radxa.com/rock3/docs/hw/3c/v1400/radxa_rock_3c_v1400_2d_dxf.zip"
    },
    "holes": [
      [
        3.5,
        3.5
      ],
      [
        61.5,
        3.5
      ],
      [
        3.5,
        52.5
      ],
      [
        61.5,
        52.5
      ]
    ],
    "title": [
      32,
      33,
      2.7
    ]
  }
];

const family = sbcMoreFamily(boards);
const radxaMoreComponents = family.components;
const radxaMoreArt = family.art;
const radxaMoreFootprints = family.footprints;
const radxaMoreModels = family.models;

export default defineFamily("radxa-more", (radxaMoreComponents).map(component => ({ component, render: (radxaMoreArt)[component.art], footprint: (radxaMoreFootprints)[component.id], model: radxaMoreModels[component.id] })));
