import { defineFamily } from "../registry.js";
import { sbcMoreFamily } from "../shared/sbc-board.js";

const boards = [
  {
    "id": "banana-pi-bpi-m2-berry",
    "name": "Banana Pi BPI M2 Berry",
    "shortName": "BPI M2 Berry",
    "manufacturer": "Banana Pi",
    "revision": "v1.0 (2017-05-08)",
    "soc": "Allwinner A40i",
    "size": [
      85,
      56
    ],
    "color": "#217b90",
    "source": "https://docs.banana-pi.org/en/BPI-M2_Berry/BananaPi_BPI-M2_Berry",
    "documentation": [
      "https://docs.banana-pi.org/en/BPI-M2_Berry/BananaPi_BPI-M2_Berry",
      "https://drive.google.com/uc?export=download&id=1U_v17Z-RXhSB5Supv4sdAl1O8eWw_pjn",
      "https://drive.google.com/file/d/1-blky8xrwuH51lCJytu_sEzHgjCxh6T7/view?usp=sharing"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON1",
        "pins": [
          {
            "signal": "VCC-3V3"
          },
          {
            "signal": "DCIN"
          },
          {
            "signal": "TWI2-SDA / PB21 / PWM5"
          },
          {
            "signal": "DCIN"
          },
          {
            "signal": "TWI2-SCK / PB20 / PWM4"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PB3 / PWM1"
          },
          {
            "signal": "UART2-TX / PI18 / SPI1_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "UART2-RX / PI19 / SPI1_MISO"
          },
          {
            "signal": "UART7-TX / PI20"
          },
          {
            "signal": "UART2-CTS / PI17 / SPI1_CLK"
          },
          {
            "signal": "UART7-RX / PI21 / PWM3"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH25 / CSI1-FIELD"
          },
          {
            "signal": "UART2-RTS / PI16 / SPI1_CS0"
          },
          {
            "signal": "VCC-3V3"
          },
          {
            "signal": "PH26 / CSI1-HSYNC"
          },
          {
            "signal": "SPI0_MOSI / PC0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "SPI0_MISO / PC1"
          },
          {
            "signal": "PH27 / CSI1-VSYNC"
          },
          {
            "signal": "SPI0_CLK / PC2"
          },
          {
            "signal": "SPI0_CS / PC23"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH24 / CSI1-PCLK"
          },
          {
            "signal": "TWI3-SDA / PI1"
          },
          {
            "signal": "TWI3-SCK / PI0"
          },
          {
            "signal": "PH0 / CSI1-D0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH1 / CSI1-D1"
          },
          {
            "signal": "PD20 / CSI1-MCLK"
          },
          {
            "signal": "PH2 / CSI1-D2"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH3 / CSI1-D3"
          },
          {
            "signal": "UART5-RX / PH7 / CSI1-D7"
          },
          {
            "signal": "UART4-TX / PH4 / CSI1-D4"
          },
          {
            "signal": "UART5-TX / PH6 / CSI1-D6"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "UART4-RX / PH5 / CSI1-D5"
          }
        ],
        "position": [
          8.370011,
          4.769993
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      },
      {
        "key": "debug",
        "ref": "CON2",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "UART0_RX",
            "type": "input",
            "note": "3.3 V serial-console input to board."
          },
          {
            "signal": "UART0_TX",
            "type": "output",
            "note": "3.3 V serial-console output from board."
          }
        ],
        "position": [
          66.00002,
          7.000011
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through",
        "reverse": true
      },
      {
        "key": "sata-power",
        "ref": "CN4",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "ACIN /5V",
            "type": "passive",
            "note": "5 V SATA power supply rail, not 12 V."
          }
        ],
        "position": [
          62.56401,
          46.776005
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "socket",
        "reverse": true
      }
    ],
    "parts": [
      [
        "usb2",
        69,
        -1,
        17,
        18,
        "USB2x2"
      ],
      [
        "usb2",
        69,
        19,
        17,
        18,
        "USB2x2"
      ],
      [
        "ethernet",
        64,
        36,
        22,
        21,
        "1G"
      ],
      [
        "usbc",
        7,
        50,
        8,
        7,
        "microUSB"
      ],
      [
        "hdmi",
        25,
        44,
        16,
        13,
        "HDMI"
      ],
      [
        "audio",
        48,
        45,
        7,
        12,
        "AUDIO"
      ],
      [
        "socket",
        48,
        35,
        17,
        5,
        "SATA"
      ],
      [
        "chip",
        39,
        11,
        18,
        20,
        "A40i"
      ],
      [
        "ram",
        23,
        12,
        13,
        10,
        "DDR3"
      ],
      [
        "ram",
        23,
        25,
        13,
        10,
        "DDR3"
      ],
      [
        "radio",
        6,
        10,
        12,
        12,
        "WiFi/BT"
      ],
      [
        "antenna",
        0,
        9,
        3,
        7,
        ""
      ],
      [
        "fpc",
        0,
        26,
        4,
        14,
        "CSI"
      ],
      [
        "fpc",
        43,
        31,
        4,
        22,
        "DSI"
      ],
      [
        "button",
        0,
        40,
        3,
        4,
        ""
      ],
      [
        "button",
        16,
        50,
        5,
        5,
        ""
      ]
    ],
    "description": "All 40 CON1 GPIO contacts, debug UART and two-contact 5 V SATA power. The official table misspells CON1-P39 as ON1-P39; its ground contact is retained. CSI/DSI, SATA data and microSD socket contacts are outside this scope. Main GPIO and console pin-one location/orientation were checked against the matching top-side manufacturer DXF.",
    "cad": {
      "label": "BPI M2 Berry v1.0 (2017-05-08) manufacturer DXF mechanical archive",
      "url": "https://drive.google.com/file/d/1-blky8xrwuH51lCJytu_sEzHgjCxh6T7/view?usp=sharing"
    },
    "holes": [
      [
        3,
        3
      ],
      [
        61,
        3
      ],
      [
        3,
        53
      ],
      [
        61,
        53
      ]
    ],
    "title": [
      29,
      37,
      2.6
    ]
  },
  {
    "id": "banana-pi-bpi-m2s",
    "name": "Banana Pi BPI M2S",
    "shortName": "BPI M2S",
    "manufacturer": "Banana Pi",
    "revision": "v1.0 (2022-12-13)",
    "soc": "Amlogic A311D",
    "size": [
      65,
      65
    ],
    "color": "#217b90",
    "source": "https://docs.banana-pi.org/en/BPI-M2_Super/BananaPi_BPI-M2_Super",
    "documentation": [
      "https://docs.banana-pi.org/en/BPI-M2_Super/BananaPi_BPI-M2_Super",
      "https://drive.google.com/uc?export=download&id=176LPTjQgcXXNNibSbRRXKqTYxZHQqLDu",
      "https://drive.google.com/file/d/1kZjWV91WUNK7rNJQw5HNUNMf5Lob2qsi/view?usp=sharing"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON2",
        "pins": [
          {
            "signal": "VCC-3V3"
          },
          {
            "signal": "DCIN"
          },
          {
            "signal": "GPIOX_17 / I2C_EE_M2_SDA / BT_EN"
          },
          {
            "signal": "DCIN"
          },
          {
            "signal": "GPIOX_18 / I2C_EE_M2_SCL / BT_WAKE_HOST"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_5 / PWM_C / WIFI_SD_CMD"
          },
          {
            "signal": "GPIOX_12 / UART_EE_A_TX"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_13 / UART_EE_A_RX"
          },
          {
            "signal": "GPIOX_3 / WIFI_SD_D3"
          },
          {
            "signal": "GPIOA_1 / I2SB_SCLK"
          },
          {
            "signal": "GPIOX_4 / WIFI_SD_CLK"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_7 / WIFI_WAKE_HOST"
          },
          {
            "signal": "GPIOX_0 / WIFI_SD_D0"
          },
          {
            "signal": "VCC-3V3"
          },
          {
            "signal": "GPIOX_1 / WIFI_SD_D1"
          },
          {
            "signal": "GPIOX_8 / SPI_A_MOSI / BTPCM_DIN"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_9 / SPI_A_MISO / BTPCM_DOUT"
          },
          {
            "signal": "GPIOX_2 / WIFI_SD_D2"
          },
          {
            "signal": "GPIOX_11 / SPI_A_CLK / BTPCM_CLK"
          },
          {
            "signal": "GPIOX_10 / SPI_A_CS / BTPCM_SYNC"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_16 / BT_32K"
          },
          {
            "signal": "GPIOH_5"
          },
          {
            "signal": "GPIOH_4"
          },
          {
            "signal": "GPIOX_14 / BTUART_A_CTS_N"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOX_15 / BTUART_A_RTS_N"
          },
          {
            "signal": "GPIOX_19 / HOST_WAKE_BT"
          },
          {
            "signal": "GPIOX_6 / WIFI_PWREN"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOA_2 / I2SB_LRCLK"
          },
          {
            "signal": "GPIOAO_5 / IR_IN"
          },
          {
            "signal": "GPIOA_0 / I2S_MCLK_0"
          },
          {
            "signal": "GPIOA_4 / I2SB_DOUT_DIN_1"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIOA_3 / I2SB_DOUT_DIN_0"
          }
        ],
        "position": [
          7.23138,
          4.309618
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      },
      {
        "key": "debug",
        "ref": "CON1",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "UART0_RX",
            "type": "input",
            "note": "3.3 V serial-console input to board."
          },
          {
            "signal": "UART0_TX",
            "type": "output",
            "note": "3.3 V serial-console output from board."
          }
        ],
        "position": [
          58.031634,
          8.739124
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      }
    ],
    "parts": [
      [
        "ethernet",
        31,
        43,
        17,
        23,
        "1G"
      ],
      [
        "ethernet",
        48,
        43,
        17,
        23,
        "1G"
      ],
      [
        "usb2",
        21,
        51,
        9,
        15,
        "USB2"
      ],
      [
        "hdmi",
        8,
        46,
        10,
        20,
        "HDMI"
      ],
      [
        "usbc",
        -1,
        50,
        7,
        15,
        "5V"
      ],
      [
        "chip",
        18,
        15,
        13,
        15,
        "A311D"
      ],
      [
        "ram",
        36,
        11,
        11,
        19,
        "LPDDR4"
      ],
      [
        "chip",
        51,
        15,
        12,
        9,
        "eMMC"
      ],
      [
        "chip",
        48,
        31,
        9,
        8,
        "RTL8211F"
      ],
      [
        "chip",
        51,
        41,
        8,
        6,
        "RTL8111H"
      ],
      [
        "fpc",
        0,
        8,
        3,
        13,
        "DSI"
      ],
      [
        "fpc",
        0,
        26,
        3,
        20,
        "CSI"
      ],
      [
        "button",
        58,
        29,
        5,
        4,
        ""
      ],
      [
        "button",
        58,
        36,
        5,
        4,
        ""
      ]
    ],
    "description": "All 40 GPIO header contacts and debug UART. A311D version selected; S922X variant lacks the NPU/MIPI features. The web page repeats CON2 for debug, while the exact schematic identifies console CON1; schematic references are used. Fan socket CN2 appears in the schematic but lacks a matching confirmed position on the published component-side photograph, so it is outside this physical-contact entry. Main GPIO and console pin-one location/orientation were checked against the matching top-side manufacturer DXF.",
    "cad": {
      "label": "BPI M2S v1.0 (2022-12-13) manufacturer DXF mechanical archive",
      "url": "https://drive.google.com/file/d/1kZjWV91WUNK7rNJQw5HNUNMf5Lob2qsi/view?usp=sharing"
    },
    "holes": [
      [
        3,
        3
      ],
      [
        62,
        3
      ],
      [
        3,
        44
      ],
      [
        62,
        44
      ]
    ],
    "title": [
      29,
      37,
      2.8
    ]
  },
  {
    "id": "banana-pi-bpi-m4-zero",
    "name": "Banana Pi BPI M4 Zero",
    "shortName": "BPI M4 Zero",
    "manufacturer": "Banana Pi",
    "revision": "v2.0 (2024-08-21)",
    "soc": "Allwinner H618",
    "size": [
      65,
      30
    ],
    "color": "#217b90",
    "source": "https://docs.banana-pi.org/en/BPI-M4_Zero/BananaPi_BPI-M4_Zero",
    "documentation": [
      "https://docs.banana-pi.org/en/BPI-M4_Zero/BananaPi_BPI-M4_Zero",
      "https://drive.google.com/uc?export=download&id=1AtKZROqmdPSz2XQzdeQLL4K6wCPerqeu"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON2",
        "pins": [
          {
            "signal": "3.3V"
          },
          {
            "signal": "5V"
          },
          {
            "signal": "TWI0_SDA / PI6_ENT6"
          },
          {
            "signal": "5V"
          },
          {
            "signal": "TWI0_SCL / PI5_ENT5"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PWM2 / PI12_EINT12"
          },
          {
            "signal": "UART4_TX / PI13_EINT13"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "UART4_RX / PI14_EINT14"
          },
          {
            "signal": "PH2 / UART5_TX"
          },
          {
            "signal": "H_IISO_BCLK / PI1 / DMIC_D0"
          },
          {
            "signal": "PH3 / UART5_RX"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PI11",
            "type": "bidirectional",
            "note": "3.3 V GPIO. The v2.0 schematic connects PI11; the web table PH11 is a transcription discrepancy."
          },
          {
            "signal": "UART4_RTS / PI15_EINT15"
          },
          {
            "signal": "3.3V"
          },
          {
            "signal": "UART4_CTS / PI16_EINT16"
          },
          {
            "signal": "PH7 / SPI_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH8 / SPI_MISO"
          },
          {
            "signal": "PC2_3V3",
            "type": "bidirectional",
            "note": "3.3 V level-shifted PC2 GPIO. The web table incorrectly describes this as a 3.3 V power contact."
          },
          {
            "signal": "PH6 / SPI_CLK"
          },
          {
            "signal": "PH5 / SPI_CS0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PH9 / SPI_CS1"
          },
          {
            "signal": "TWI1_SDA / PI8_ENT8"
          },
          {
            "signal": "TWI1_SCL / PI7_EINT7",
            "note": "Website TE1_SLC is a transcription typo; source schematic net is TWI1_SCK."
          },
          {
            "signal": "PI10"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PI9"
          },
          {
            "signal": "SPDIF_OUT"
          },
          {
            "signal": "IR_RX"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "H_IIS0_LRCLK / PI2 / DMIC_D1"
          },
          {
            "signal": "PC7_3V3",
            "type": "bidirectional",
            "note": "3.3 V level-shifted PC7 GPIO. The web table incorrectly describes this as a 3.3 V power contact."
          },
          {
            "signal": "H_IIS0_MCLK / PI0 / DMIC_CLK"
          },
          {
            "signal": "H_IIS0_DIN0 / PI4 / DMIC_D3"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "H_IIS0_DOUT0 / PI3 / DMIC_D2"
          }
        ],
        "position": [
          7.5,
          5.04
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      },
      {
        "key": "debug",
        "ref": "CON1",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "UART0_RX",
            "type": "input",
            "note": "3.3 V serial-console input to board."
          },
          {
            "signal": "UART0_TX",
            "type": "output",
            "note": "3.3 V serial-console output from board."
          }
        ],
        "position": [
          1.9,
          21.1
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      },
      {
        "key": "misc",
        "ref": "CN8",
        "pins": [
          {
            "signal": "AP_RESET",
            "type": "input",
            "note": "Application-processor reset input, active low."
          },
          {
            "signal": "GND"
          },
          {
            "signal": "EPHY_RXN",
            "type": "input",
            "note": "Ethernet PHY receive differential signal; not digital GPIO."
          },
          {
            "signal": "EPHY_RXP",
            "type": "input",
            "note": "Ethernet PHY receive differential signal; not digital GPIO."
          },
          {
            "signal": "EPHY_TXN",
            "type": "output",
            "note": "Ethernet PHY transmit differential signal; not digital GPIO."
          },
          {
            "signal": "EPHY_TXP",
            "type": "output",
            "note": "Ethernet PHY transmit differential signal; not digital GPIO."
          },
          {
            "signal": "GND"
          },
          {
            "signal": "1.8V"
          },
          {
            "signal": "1.8V"
          },
          {
            "signal": "1.8V"
          },
          {
            "signal": "1.8V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "HP_R",
            "type": "output",
            "note": "Analog audio/video output, not GPIO."
          },
          {
            "signal": "HP_L",
            "type": "output",
            "note": "Analog audio/video output, not GPIO."
          },
          {
            "signal": "GND"
          },
          {
            "signal": "TV_OUT",
            "type": "output",
            "note": "Analog audio/video output, not GPIO."
          },
          {
            "signal": "GND"
          },
          {
            "signal": "USB_DP"
          },
          {
            "signal": "USB1_DM"
          },
          {
            "signal": "5V"
          },
          {
            "signal": "5V"
          },
          {
            "signal": "USB2_DP"
          },
          {
            "signal": "USB2_DM"
          },
          {
            "signal": "GND"
          }
        ],
        "position": [
          61.5,
          23
        ],
        "rows": 1,
        "pitch": 0.5,
        "axis": "y",
        "kind": "fpc",
        "reverse": true,
        "padSize": [
          0.9,
          0.28
        ],
        "labelEvery": 6,
        "caption": [
          59,
          8,
          "end"
        ]
      }
    ],
    "parts": [
      [
        "hdmi",
        5,
        23,
        11,
        8,
        "miniHDMI"
      ],
      [
        "usbc",
        34,
        23,
        9,
        8,
        "USB"
      ],
      [
        "usbc",
        48,
        23,
        9,
        8,
        "5V"
      ],
      [
        "sd",
        0,
        6,
        13,
        10,
        "microSD"
      ],
      [
        "chip",
        27,
        10,
        12,
        12,
        "H618"
      ],
      [
        "ram",
        42,
        8,
        13,
        12,
        "LPDDR4"
      ],
      [
        "radio",
        9,
        10,
        12,
        11,
        "WiFi/BT"
      ],
      [
        "button",
        19,
        24,
        4,
        4,
        ""
      ],
      [
        "button",
        25,
        24,
        4,
        4,
        ""
      ]
    ],
    "description": "Main 40 GPIO contacts, three console and 24 CN8 miscellaneous FPC contacts. CN8 includes Ethernet PHY, analog audio/video, USB and power; it is not a camera-only connector or 24 digital GPIOs. FPC pin 24 is at the printed top end of the component-side photograph. The v2.0 H618 schematic is selected. Pins 15/22/36 follow the exact schematic (PI11/PC2_3V3/PC7_3V3), correcting older web-table labels; 22/36 are GPIO, not power rails.",
    "cad": {
      "label": "BPI M4 Zero v2.0 (2024-08-21) manufacturer schematic (PDF; reference carrier, no STEP verified)",
      "url": "https://drive.google.com/uc?export=download&id=1AtKZROqmdPSz2XQzdeQLL4K6wCPerqeu"
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
      32,
      8.9,
      1.8
    ],
    "titleRevision": false
  },
  {
    "id": "banana-pi-bpi-r3",
    "name": "Banana Pi BPI R3",
    "shortName": "BPI R3",
    "manufacturer": "Banana Pi",
    "revision": "v1.1 (2022-08-03)",
    "soc": "MediaTek MT7986A",
    "size": [
      148,
      100.5
    ],
    "color": "#217b90",
    "source": "https://docs.banana-pi.org/en/BPI-R3/BananaPi_BPI-R3",
    "documentation": [
      "https://docs.banana-pi.org/en/BPI-R3/BananaPi_BPI-R3",
      "https://drive.google.com/uc?export=download&id=1ED2z_e01Y0e6LDzMC_vLhCsTHEZTGwcg",
      "https://drive.google.com/file/d/1BE09wS1ca5xUdmd3DN2qyg5RYMTIC2l3/view?usp=sharing"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON1",
        "pins": [
          {
            "signal": "VDD33"
          },
          {
            "signal": "+5V"
          },
          {
            "signal": "GPIO4 / I2C_SDA"
          },
          {
            "signal": "+5V"
          },
          {
            "signal": "GPIO3 / I2C_SCL"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO22 / PWM1"
          },
          {
            "signal": "GPIO43 / UART1_TXD"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO42 / UART1_RXD"
          },
          {
            "signal": "GPIO30 / UART2_TXD"
          },
          {
            "signal": "GPIO64 / PCM_CLK"
          },
          {
            "signal": "GPIO29 / UART2_RXD"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO65 / PCM_FS"
          },
          {
            "signal": "GPIO45 / UART1_RTS"
          },
          {
            "signal": "VDD33"
          },
          {
            "signal": "GPIO44 / UART1_CTS"
          },
          {
            "signal": "GPIO12 / JTAG_JTDI / SPIC_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO13 / JTAG_JTMS / SPIC_MISO"
          },
          {
            "signal": "GPIO62 / PCM_DTX"
          },
          {
            "signal": "GPIO11 / JTAG_JTDO / SPIC_CLK"
          },
          {
            "signal": "GPIO14 / JTAG_JTCLK / SPIC_CS"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO63 / PCM_DRX"
          }
        ],
        "position": [
          30.5435,
          5.04698
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true
      },
      {
        "key": "debug",
        "ref": "CON2",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "UART0_RX",
            "type": "input",
            "note": "3.3 V serial-console input to board."
          },
          {
            "signal": "UART0_TX",
            "type": "output",
            "note": "3.3 V serial-console output from board."
          },
          {
            "signal": "VDD33",
            "type": "power_out",
            "note": "3.3 V console reference/supply."
          }
        ],
        "position": [
          1.524,
          42.39768
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "fan",
        "ref": "CN23",
        "pins": [
          {
            "signal": "+5V",
            "type": "power_out",
            "note": "Default5 V fan supply; schematic has an unpopulated 12 V alternative. Verify resistor population before use."
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "FAN_PWM",
            "type": "open_collector",
            "note": "Buffered open-drain PWM control with pull-up."
          }
        ],
        "position": [
          64.3128,
          83.439
        ],
        "rows": 1,
        "pitch": 2,
        "axis": "y",
        "kind": "socket",
        "caption": [
          61,
          81,
          "end"
        ]
      },
      {
        "key": "power",
        "ref": "CN34",
        "pins": [
          {
            "signal": "+12V",
            "type": "power_out",
            "note": "Switched SATA 12 V output."
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "+5V",
            "type": "power_out",
            "note": "Switched SATA 5 V output."
          }
        ],
        "position": [
          93.472,
          2.64668
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "socket",
        "caption": [
          95,
          6
        ],
        "reverse": true
      }
    ],
    "parts": [
      [
        "sfp",
        29,
        69,
        15,
        33,
        "SFP"
      ],
      [
        "sfp",
        46,
        69,
        15,
        33,
        "SFP"
      ],
      [
        "usb3",
        6,
        87,
        13,
        16,
        "USB3"
      ],
      [
        "ethernet",
        69,
        77,
        76,
        25,
        "WAN / LAN1..4"
      ],
      [
        "dc",
        137,
        88,
        10,
        14,
        "12V"
      ],
      [
        "chip",
        61,
        39,
        20,
        20,
        "MT7986A"
      ],
      [
        "ram",
        86,
        39,
        13,
        16,
        "DDR4"
      ],
      [
        "chip",
        105,
        36,
        12,
        12,
        "RADIO"
      ],
      [
        "chip",
        125,
        38,
        13,
        12,
        "RADIO"
      ],
      [
        "socket",
        7,
        17,
        28,
        6,
        "miniPCIe"
      ],
      [
        "socket",
        53,
        16,
        27,
        5,
        "M.2"
      ],
      [
        "chip",
        36,
        32,
        10,
        15,
        "eMMC"
      ],
      [
        "usbc",
        132,
        0,
        9,
        10,
        "PD"
      ],
      [
        "button",
        1,
        3,
        4,
        5,
        ""
      ],
      [
        "button",
        1,
        12,
        4,
        5,
        ""
      ]
    ],
    "description": "All 26 GPIO contacts, four-contact console, default 5 V three-contact PWM fan and switched 12 V/5 V power output. The console includes a fourth 3.3 V contact, visible in the source schematic. Optional unpopulated two-contact USB data headers and two-contact fan footprint are excluded; miniPCIe/M.2/high-speed port sockets are illustrated only. Main GPIO and console pin-one location/orientation were checked against the matching top-side manufacturer DXF.",
    "cad": {
      "label": "BPI R3 v1.1 (2022-08-03) manufacturer DXF mechanical archive",
      "url": "https://drive.google.com/file/d/1BE09wS1ca5xUdmd3DN2qyg5RYMTIC2l3/view?usp=sharing"
    },
    "holes": [
      [
        3,
        3
      ],
      [
        145,
        3
      ],
      [
        3,
        76
      ],
      [
        145,
        76
      ]
    ],
    "title": [
      79,
      65,
      3.7
    ]
  },
  {
    "id": "banana-pi-bpi-r4",
    "name": "Banana Pi BPI R4",
    "shortName": "BPI R4",
    "manufacturer": "Banana Pi",
    "revision": "v1.1 (2023-10-23)",
    "soc": "MediaTek MT7988A",
    "size": [
      148,
      100.5
    ],
    "color": "#217b90",
    "source": "https://docs.banana-pi.org/en/BPI-R4/BananaPi_BPI-R4",
    "documentation": [
      "https://docs.banana-pi.org/en/BPI-R4/BananaPi_BPI-R4",
      "https://drive.google.com/uc?export=download&id=1r-c2urU-DFVHpZ7cRk2qzKtVB8tg82mZ",
      "https://drive.google.com/file/d/1FMqHSZnug-IebvTIhkSwmWhDAPyWxr6A/view?usp=sharing"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON2",
        "pins": [
          {
            "signal": "3.3VD"
          },
          {
            "signal": "5VD"
          },
          {
            "signal": "GPIO18/I2C_1_SDA"
          },
          {
            "signal": "5VD"
          },
          {
            "signal": "GPIO17/I2C_1_SCL"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO62/JTAG_JTRST_N/PWM6"
          },
          {
            "signal": "GPIO59/JTAG_JTDO/UART1_TX/UART2_TX"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO58/JTAG_JTDI/UART1_RX/UART2_RX"
          },
          {
            "signal": "GPIO81/UART1_TXD"
          },
          {
            "signal": "GPIO51/PCM_CLK_I2S_BCLK"
          },
          {
            "signal": "GPIO80/UART1_RXD"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO50/PCM_FS_I2S_LRCK"
          },
          {
            "signal": "GPIO61/JTAG_JTCLK/UART1_RTS/UART2_RTS"
          },
          {
            "signal": "3.3VD"
          },
          {
            "signal": "GPIO60/JTAG_JTMS/UART1_CTS/UART2_CTS"
          },
          {
            "signal": "GPIO30/SPI1_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO29/SPI1_MISO"
          },
          {
            "signal": "GPIO53/PCM_DTX_I2S_DOUT"
          },
          {
            "signal": "GPIO31/SPI1_CLK"
          },
          {
            "signal": "GPIO28/SPI1_CSB"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO52/PCM_DRX_I2S_DIN"
          }
        ],
        "position": [
          143.4084,
          11.601196
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through",
        "acrossReverse": false
      },
      {
        "key": "debug",
        "ref": "CON1",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "UART0_RX",
            "type": "input",
            "note": "3.3 V serial-console input to board."
          },
          {
            "signal": "UART0_TX",
            "type": "output",
            "note": "3.3 V serial-console output from board."
          }
        ],
        "position": [
          4.191,
          83.991196
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through",
        "caption": [
          6,
          83,
          "start"
        ]
      },
      {
        "key": "fan",
        "ref": "CN1",
        "pins": [
          {
            "signal": "+5V",
            "type": "power_out",
            "note": "Default5 V fan supply; schematic has an unpopulated 12 V alternative. Verify resistor population before use."
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "FAN_PWM",
            "type": "open_collector",
            "note": "Buffered open-drain PWM control with pull-up."
          }
        ],
        "position": [
          69.309869,
          78.656307
        ],
        "rows": 1,
        "pitch": 2,
        "axis": "x",
        "kind": "socket",
        "reverse": true,
        "caption": [
          65,
          74
        ]
      },
      {
        "key": "rtc",
        "ref": "CN3",
        "pins": [
          {
            "signal": "BAT+",
            "type": "power_in",
            "note": "3 V RTC backup-battery positive input."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "RTC battery negative/ground."
          }
        ],
        "position": [
          4,
          62
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket"
      },
      {
        "key": "power",
        "ref": "CN19",
        "pins": [
          {
            "signal": "+12V",
            "type": "power_out",
            "note": "12 V auxiliary output; not a 5 V input."
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "GND",
            "type": "power_in"
          },
          {
            "signal": "+5V",
            "type": "power_out",
            "note": "5 V auxiliary output."
          }
        ],
        "position": [
          145.6436,
          67.48018
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "socket",
        "caption": [
          140,
          59,
          "end"
        ],
        "reverse": true
      }
    ],
    "parts": [
      [
        "sfp",
        15,
        57,
        15,
        45,
        "10G SFP"
      ],
      [
        "sfp",
        33,
        57,
        15,
        45,
        "10G SFP"
      ],
      [
        "ethernet",
        62,
        79,
        76,
        23,
        "LAN1..4"
      ],
      [
        "usb3",
        138,
        92,
        10,
        10,
        "USB3"
      ],
      [
        "dc",
        138,
        79,
        10,
        11,
        "12V"
      ],
      [
        "usbc",
        140,
        45,
        9,
        8,
        "PD"
      ],
      [
        "chip",
        87,
        47,
        20,
        20,
        "MT7988A"
      ],
      [
        "ram",
        110,
        48,
        15,
        11,
        "DDR4"
      ],
      [
        "chip",
        44,
        32,
        11,
        13,
        "eMMC"
      ],
      [
        "socket",
        6,
        14,
        6,
        27,
        "miniPCIe"
      ],
      [
        "socket",
        79,
        0,
        15,
        14,
        "M.2M"
      ],
      [
        "socket",
        100,
        0,
        15,
        14,
        "M.2B"
      ],
      [
        "socket",
        124,
        0,
        14,
        14,
        "miniPCIe"
      ],
      [
        "chip",
        32,
        51,
        12,
        6,
        "SPI NAND"
      ],
      [
        "button",
        7,
        0,
        5,
        4,
        ""
      ],
      [
        "button",
        17,
        0,
        5,
        4,
        ""
      ]
    ],
    "description": "All 26 GPIO contacts, three-contact console, default 5 V PWM fan, RTC battery and four-contact 12 V/5 V auxiliary output. Exact v1.1 schematic selected; later 2.5G/8GB variants are not silently substituted. The published v1.1 component-side photograph locates GPIO on the short right edge. M.2/miniPCIe, optional USB data pads and high-speed socket contacts are outside this wiring scope. Main GPIO and console pin-one location/orientation were checked against the matching top-side manufacturer DXF.",
    "cad": {
      "label": "BPI R4 v1.1 (2023-10-23) manufacturer DXF mechanical archive",
      "url": "https://drive.google.com/file/d/1FMqHSZnug-IebvTIhkSwmWhDAPyWxr6A/view?usp=sharing"
    },
    "holes": [
      [
        3,
        3
      ],
      [
        145,
        3
      ],
      [
        3,
        76
      ],
      [
        145,
        76
      ]
    ],
    "title": [
      92,
      72,
      3.8
    ]
  }
];

const family = sbcMoreFamily(boards);
const bananaPiMoreComponents = family.components;
const bananaPiMoreArt = family.art;
const bananaPiMoreFootprints = family.footprints;
const bananaPiMoreModels = family.models;

export default defineFamily("bananapi-more", (bananaPiMoreComponents).map(component => ({ component, render: (bananaPiMoreArt)[component.art], footprint: (bananaPiMoreFootprints)[component.id], model: bananaPiMoreModels[component.id] })));
