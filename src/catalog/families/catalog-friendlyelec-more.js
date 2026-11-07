import { defineFamily } from "../registry.js";
import { sbcMoreFamily } from "../shared/sbc-board.js";

const boards = [
  {
    "id": "friendlyelec-nanopi-r2s",
    "name": "FriendlyElec NanoPi R2S",
    "shortName": "NanoPi R2S",
    "manufacturer": "FriendlyElec",
    "revision": "v1.1 /2009",
    "soc": "RK3328",
    "size": [
      55.6,
      52
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R2S",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R2S",
      "https://wiki.friendlyelec.com/wiki/images/0/0f/NanoPi-R2S-V1.1-2009-Schematic.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "GPIO1",
        "pins": [
          {
            "signal": "SYS_3.3V"
          },
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "I2C0_SDA / GPIO2_D1"
          },
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "I2C0_SCL / GPIO2_D0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO2_A2 / IR_RX"
          },
          {
            "signal": "UART1_TX / GPIO3_A4"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "UART1_RX / GPIO3_A6",
            "note": "Wiki spells GPIOG3_A6; RK3328 schematic identifies GPIO3_A6."
          }
        ],
        "position": [
          1.7,
          1.5
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "debug",
        "ref": "DBG_UART",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "UART2_TX",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART2_RX",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          48.5,
          39
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      },
      {
        "key": "fan",
        "ref": "FAN",
        "pins": [
          {
            "signal": "FAN+",
            "type": "power_out",
            "note": "Controlled positive fan supply, up to 5 V. The return is board ground."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Fan return."
          }
        ],
        "position": [
          46,
          46
        ],
        "rows": 1,
        "pitch": 1.5,
        "axis": "x",
        "kind": "socket"
      }
    ],
    "parts": [
      [
        "ethernet",
        35.5,
        0,
        20,
        17,
        "WAN1G"
      ],
      [
        "ethernet",
        35.5,
        21,
        20,
        17,
        "LAN1G"
      ],
      [
        "usb2",
        33,
        40,
        9,
        14,
        "USB2"
      ],
      [
        "usbc",
        48,
        43,
        8,
        9,
        "5V"
      ],
      [
        "sd",
        0,
        35,
        13,
        16,
        "microSD"
      ],
      [
        "chip",
        8,
        17,
        15,
        15,
        "RK3328"
      ],
      [
        "ram",
        14,
        35,
        10,
        14,
        "DDR4"
      ],
      [
        "chip",
        25,
        36,
        7,
        10,
        "PMIC"
      ]
    ],
    "description": "GPIO1 ten-contact header, serial console and two-contact fan socket. USB-C board revision is selected; some unchanged schematic sheets retain 1912 labels. Ethernet and USB socket cable contacts are outside this entry.",
    "holes": [
      [
        8.5,
        3.2,
        1
      ],
      [
        31.5,
        48,
        1
      ]
    ],
    "title": [
      17,
      33.8,
      2.6
    ],
    "cad": {
      "label": "NanoPi R2S v1.1/2009 manufacturer schematic (PDF; no STEP verified)",
      "url": "https://wiki.friendlyelec.com/wiki/images/0/0f/NanoPi-R2S-V1.1-2009-Schematic.pdf"
    }
  },
  {
    "id": "friendlyelec-nanopi-r4s",
    "name": "FriendlyElec NanoPi R4S",
    "shortName": "NanoPi R4S",
    "manufacturer": "FriendlyElec",
    "revision": "2008 (4GB PCB)",
    "soc": "RK3399",
    "size": [
      66,
      66
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R4S",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R4S",
      "https://wiki.friendlyelec.com/wiki/images/c/c2/NanoPi-R4S-4GB-2008-Schematic.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON6",
        "pins": [
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "VDD_3.3V"
          },
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "GPIO4_C0/I2C3_SDA(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_C1/I2C3_SCL(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_B1/SPI1_CLK"
          },
          {
            "signal": "GPIO1_B0/SPI1_TXD/UART4-TX"
          },
          {
            "signal": "GPIO1_B2/SPI1_CSn"
          },
          {
            "signal": "GPIO1_A7/SPI1_RXD/UART4-RX"
          }
        ],
        "position": [
          17.7,
          62
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through",
        "reverse": true,
        "acrossReverse": true,
        "voltage": "3.0 V"
      },
      {
        "key": "usb",
        "ref": "CON8",
        "pins": [
          {
            "signal": "5V",
            "type": "passive",
            "note": "Shared 5 V header supply."
          },
          {
            "signal": "USB_DM",
            "type": "bidirectional",
            "note": "USB2 differential D\u2212, not GPIO."
          },
          {
            "signal": "USB_DP",
            "type": "bidirectional",
            "note": "USB2 differential D+, not GPIO."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "USB return."
          }
        ],
        "position": [
          9.5,
          2.5
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "debug",
        "ref": "DBG1",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "UART2DBG_TX",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART2DBG_RX",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          1.5,
          11.5
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      },
      {
        "key": "fan",
        "ref": "CON5",
        "pins": [
          {
            "signal": "FAN+",
            "type": "power_out",
            "note": "Controlled positive fan supply, up to 5 V. The return is board ground."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Fan return."
          }
        ],
        "position": [
          16,
          8.5
        ],
        "rows": 1,
        "pitch": 1.5,
        "axis": "y",
        "kind": "socket"
      },
      {
        "key": "rtc",
        "ref": "RTC_BAT1",
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
          56,
          61.5
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "x",
        "kind": "socket"
      }
    ],
    "parts": [
      [
        "usbc",
        -1,
        1,
        8,
        9,
        "5V"
      ],
      [
        "ethernet",
        -1,
        13,
        22,
        18,
        "WAN1G"
      ],
      [
        "ethernet",
        -1,
        35,
        22,
        18,
        "LAN1G"
      ],
      [
        "usb3",
        53,
        23,
        14,
        14,
        "USB3"
      ],
      [
        "usb3",
        53,
        44,
        14,
        14,
        "USB3"
      ],
      [
        "sd",
        52,
        6,
        14,
        15,
        "microSD"
      ],
      [
        "soc",
        28,
        15,
        20,
        20,
        "RK3399",
        45
      ],
      [
        "ram",
        29,
        46,
        18,
        15,
        "LPDDR4"
      ],
      [
        "button",
        1,
        54,
        5,
        6,
        ""
      ]
    ],
    "description": "Ten-contact SPI/I2C/GPIO, four USB2 header contacts, debug UART, controlled fan and RTC battery. GPIO and console logic are 3.0 V, as shown by this exact schematic; the 3.3 V header rail is separate. The 4GB PCB is illustrated; RAM-only variants are not separate catalog cards.",
    "gpioVoltage": "3.0 V",
    "holes": [
      [
        3,
        3
      ],
      [
        63,
        3
      ],
      [
        3,
        63
      ],
      [
        63,
        63
      ],
      [
        24,
        3,
        1.1
      ],
      [
        24,
        63,
        1.1
      ]
    ],
    "title": [
      34,
      40,
      2.7
    ],
    "cad": {
      "label": "NanoPi R4S 4GB2008 manufacturer DXF mechanical archive",
      "url": "https://wiki.friendlyelec.com/wiki/images/1/18/NanoPi_R4S_4GB_2008_dxf.zip"
    }
  },
  {
    "id": "friendlyelec-nanopi-r5s",
    "name": "FriendlyElec NanoPi R5S",
    "shortName": "NanoPi R5S",
    "manufacturer": "FriendlyElec",
    "revision": "2204",
    "soc": "RK3568B2",
    "size": [
      90,
      62
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R5S",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R5S",
      "https://wiki.friendlyelec.com/wiki/images/0/0f/NanoPi_R5S_2204_SCH.PDF"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON9",
        "pins": [
          {
            "signal": "VCC3V3_SYS",
            "note": "3.3V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "VCC3V3_SYS",
            "note": "3.3V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C3 / SPI1_CLK_M1 / UART5_RX_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C2 / SPI1_MISOI_M1 / UART5_TX_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_A1 / SPI1_CS0_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C1 / SPI1_MOSI_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO4_C5 / UART9_TX_M1 / PWM12_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO4_C6 / UART9_RX_M1 / PWM13_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C4 / UART7_TX_M1 / PWM14_M0",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C5 / UART7_RX_M1 / PWM15_IR_M0",
            "note": "3.3V level",
            "voltage": "3.3 V"
          }
        ],
        "position": [
          0,
          0
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "fpc",
        "points": [
          [
            79.770427,
            42.610042
          ],
          [
            79.270428,
            45.010038
          ],
          [
            78.770427,
            42.610042
          ],
          [
            78.270428,
            45.010038
          ],
          [
            77.770427,
            42.610042
          ],
          [
            77.270428,
            45.010038
          ],
          [
            76.770427,
            42.610042
          ],
          [
            76.270428,
            45.010038
          ],
          [
            75.770427,
            42.610042
          ],
          [
            75.270428,
            45.010038
          ],
          [
            74.770427,
            42.610042
          ],
          [
            74.270428,
            45.010038
          ]
        ],
        "padSize": [
          0.4064,
          1.524
        ],
        "labelEvery": 4,
        "note": "Source 0.5 mm FPC solder tails alternate between two rows. Positive 3.3 V is switched by EXT_EN.",
        "caption": [
          75,
          38
        ]
      },
      {
        "key": "sdio",
        "ref": "CON11",
        "pins": [
          {
            "signal": "VCC5V0_SYS",
            "note": "5V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "VCC5V0_SYS",
            "note": "5V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C6 / SDMMC2_D0_M0 / I2S1_MCLK_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GPIO3_C7 / SDMMC2_D1_M0 / I2S1_SCLK_TX_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_D0 / SDMMC2_D2_M0 / I2S1_LRCK_TX_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GPIO3_D3 / SDMMC2_CLK_M0 / I2S1_SDI1_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_D1 / SDMMC2_D3_M0 / I2S1_SDO0_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GPIO3_D2 / SDMMC2_CMD_M0 / I2S1_SDI0_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_D5 / SDMMC2_PWREN_M0 / I2S1_SDI3_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          },
          {
            "signal": "GPIO3_D4 / SDMMC2_DET_M0 / I2S1_SDI2_M1",
            "note": "1.8V level",
            "voltage": "1.8 V"
          }
        ],
        "position": [
          0,
          0
        ],
        "rows": 2,
        "pitch": 1.27,
        "axis": "y",
        "kind": "socket",
        "points": [
          [
            2.035785,
            21.539319999999996
          ],
          [
            6.127775,
            21.539319999999996
          ],
          [
            2.035785,
            22.80932
          ],
          [
            6.127775,
            22.80932
          ],
          [
            2.035785,
            24.079319999999996
          ],
          [
            6.127775,
            24.079319999999996
          ],
          [
            2.035785,
            25.34932
          ],
          [
            6.127775,
            25.34932
          ],
          [
            2.035785,
            26.619319999999995
          ],
          [
            6.127775,
            26.619319999999995
          ],
          [
            2.035785,
            27.889319999999998
          ],
          [
            6.127775,
            27.889319999999998
          ],
          [
            2.035785,
            29.159319999999997
          ],
          [
            6.127775,
            29.159319999999997
          ],
          [
            2.035785,
            30.429319999999997
          ],
          [
            6.127775,
            30.429319999999997
          ]
        ],
        "padSize": [
          2.3876,
          0.6096
        ],
        "rowPitch": 4.092,
        "labelEvery": 2,
        "voltage": "1.8 V",
        "note": "1.8 V SDIO/I2S signals; 5 V supply contacts are separate. Manufacturer 1.27 mm connector, source-DXF solder-tail centers."
      },
      {
        "key": "debug",
        "ref": "J9510",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "UART2_TX_M0_DEBUG",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART2_RX_M0_DEBUG",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          74.4855,
          8.4761
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "rtc",
        "ref": "RTC_BAT",
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
          2,
          44
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket"
      },
      {
        "key": "fan",
        "ref": "CON5",
        "pins": [
          {
            "signal": "FAN+",
            "type": "power_out",
            "note": "Controlled positive fan supply, up to 5 V. The return is board ground."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Fan return."
          }
        ],
        "position": [
          86,
          45.7
        ],
        "rows": 1,
        "pitch": 1.5,
        "axis": "y",
        "kind": "socket"
      }
    ],
    "parts": [
      [
        "hdmi",
        8,
        -1,
        7,
        21,
        "HDMI"
      ],
      [
        "ethernet",
        18,
        0,
        19,
        22,
        "WAN1G"
      ],
      [
        "ethernet",
        38,
        0,
        19,
        22,
        "LAN2.5G"
      ],
      [
        "ethernet",
        59,
        0,
        19,
        22,
        "LAN2.5G"
      ],
      [
        "usbc",
        78,
        -1,
        9,
        9,
        "PD"
      ],
      [
        "usb3",
        55,
        49,
        13,
        14,
        "USB3"
      ],
      [
        "usb3",
        75,
        49,
        13,
        14,
        "USB3/OTG"
      ],
      [
        "sd",
        76,
        26,
        14,
        17,
        "microSD"
      ],
      [
        "chip",
        25,
        34,
        21,
        21,
        "RK3568B2",
        45
      ],
      [
        "ram",
        12,
        35,
        14,
        14,
        "LPDDR4"
      ],
      [
        "chip",
        58,
        34,
        12,
        11,
        "RTL8125"
      ],
      [
        "button",
        1,
        10,
        4,
        5,
        ""
      ]
    ],
    "description": "Twelve-contact GPIO FPC, sixteen-contact SDIO/I2S header, debug UART, fan and RTC. The SDIO/I2S signals are 1.8 V; the GPIO FPC is 3.3 V. Both small header pad locations and CON9 pin1 side were checked against the 2204 DXF. R5S LTS 2308 is a separate revision, not silently aliased.",
    "holes": [
      [
        3,
        3
      ],
      [
        87,
        3
      ],
      [
        3,
        59
      ],
      [
        87,
        59
      ]
    ],
    "title": [
      36,
      27.5,
      2.6
    ],
    "cad": {
      "label": "NanoPi R5S2204 manufacturer DXF with header pad geometry",
      "url": "https://wiki.friendlyelec.com/wiki/images/a/a6/NanoPi_R5S_2204_DXF.zip"
    }
  },
  {
    "id": "friendlyelec-nanopi-r6s",
    "name": "FriendlyElec NanoPi R6S",
    "shortName": "NanoPi R6S",
    "manufacturer": "FriendlyElec",
    "revision": "2208",
    "soc": "RK3588S",
    "size": [
      90,
      62
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R6S",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R6S",
      "https://wiki.friendlyelec.com/wiki/images/2/2f/NanoPi_R6S_2208_SCH.PDF"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON9",
        "pins": [
          {
            "signal": "VCC3V3_SYS_S3",
            "note": "3.3V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "VCC3V3_SYS_S3",
            "note": "3.3V power output",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B3 / SPI0_CLK_M2 / UART4_TX_M2",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B1 / SPI0_MISO_M2",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B4 / SPI0_CS0_M2",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B2 / SPI0_MOSI_M2 / UART4_RX_M2",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GND",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B7 / UART1_RX_M1 / I2C5_SDA_M3 / SPDIF1_TX_M0",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO1_B6 / UART1_TX_M1 / I2C5_SCL_M3 / SPDIF0_TX_M0",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C4 / UART5_TX_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          },
          {
            "signal": "GPIO3_C5 / UART5_RX_M1",
            "note": "3.3V level",
            "voltage": "3.3 V"
          }
        ],
        "position": [
          0,
          0
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "fpc",
        "points": [
          [
            79.770427,
            42.610042
          ],
          [
            79.270428,
            45.010038
          ],
          [
            78.770427,
            42.610042
          ],
          [
            78.270428,
            45.010038
          ],
          [
            77.770427,
            42.610042
          ],
          [
            77.270428,
            45.010038
          ],
          [
            76.770427,
            42.610042
          ],
          [
            76.270428,
            45.010038
          ],
          [
            75.770427,
            42.610042
          ],
          [
            75.270428,
            45.010038
          ],
          [
            74.770427,
            42.610042
          ],
          [
            74.270428,
            45.010038
          ]
        ],
        "padSize": [
          0.4064,
          1.524
        ],
        "labelEvery": 4,
        "caption": [
          75,
          38
        ],
        "note": "0.5 mm FPC staggered solder-tail positions and pin1 side from the exact 2208 DXF."
      },
      {
        "key": "debug",
        "ref": "J9510",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "UART2_TX_M0_DEBUG",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART2_RX_M0_DEBUG",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          74.5,
          8.5
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "rtc",
        "ref": "RTC_BAT",
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
          2,
          26
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket"
      }
    ],
    "parts": [
      [
        "ethernet",
        8,
        0,
        19,
        22,
        "WAN2.5G"
      ],
      [
        "ethernet",
        28,
        0,
        19,
        22,
        "LAN2.5G"
      ],
      [
        "ethernet",
        48,
        0,
        19,
        22,
        "LAN1G"
      ],
      [
        "hdmi",
        67,
        -1,
        7,
        24,
        "HDMI"
      ],
      [
        "usbc",
        78,
        -1,
        9,
        9,
        "PD"
      ],
      [
        "usb2",
        54,
        49,
        14,
        14,
        "USB2"
      ],
      [
        "usb3",
        75,
        49,
        14,
        14,
        "USB3"
      ],
      [
        "sd",
        76,
        25,
        14,
        17,
        "microSD"
      ],
      [
        "chip",
        20,
        29,
        18,
        18,
        "RK3588S",
        45
      ],
      [
        "ram",
        11,
        44,
        15,
        12,
        "LPDDR4X",
        45
      ],
      [
        "ram",
        30,
        44,
        15,
        12,
        "LPDDR4X",
        45
      ],
      [
        "button",
        1,
        8,
        4,
        5,
        ""
      ]
    ],
    "description": "Twelve-contact 3.3 V GPIO FPC, serial console and RTC battery. The source board has no fan socket; none is invented. CON9 physical solder-tail geometry and pin1 side were measured from the 2208 DXF. USB, Ethernet, HDMI and microSD cable contacts are outside the wiring scope.",
    "holes": [
      [
        3,
        3
      ],
      [
        87,
        3
      ],
      [
        3,
        59
      ],
      [
        87,
        59
      ]
    ],
    "title": [
      47,
      27,
      2.7
    ],
    "cad": {
      "label": "NanoPi R6S2208 manufacturer DXF with CON9 pad geometry",
      "url": "https://wiki.friendlyelec.com/wiki/images/9/96/NanoPi_R6S_2208_2D_DXF.zip"
    }
  },
  {
    "id": "friendlyelec-nanopi-m4",
    "name": "FriendlyElec NanoPi M4",
    "shortName": "NanoPi M4",
    "manufacturer": "FriendlyElec",
    "revision": "1807 (4GB PCB)",
    "soc": "RK3399",
    "size": [
      85,
      56
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_M4",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_M4",
      "https://wiki.friendlyelec.com/wiki/images/7/7a/NanoPi-M4-4GB-1807-Schematic.pdf"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "GPIO1",
        "pins": [
          {
            "signal": "VCC3V3_SYS"
          },
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "I2C2_SDA(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "VDD_5V"
          },
          {
            "signal": "I2C2_SCL(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_A0(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO4_C1/I2C3_SCL(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_C0/I2C3_SDA(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_A1(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_C2(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_A3(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO1_A4(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_C6(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "VCC3V3_SYS"
          },
          {
            "signal": "GPIO1_C7(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "SPI1_TXD/UART4_TX(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "SPI1_RXD/UART4_RX(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GPIO1_D0(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "SPI1_CLK(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "SPI1_CSn0(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_C5/SPDIF_TX(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "I2C2_SDA(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2C2_SCL(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S0_LRCK_RX(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "I2S0_LRCK_TX(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S_CLK(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S0_SCLK(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "I2S0_SDI0(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S0_SDO0(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S0_SDI1SDO3(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "I2S0_SDI2SDO2(1.8V)",
            "voltage": "1.8 V"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "I2S0_SDI3SDO1(1.8V)",
            "voltage": "1.8 V"
          }
        ],
        "position": [
          8.3,
          10.3
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true,
        "voltage": "3.0 V"
      },
      {
        "key": "exp",
        "ref": "GPIO2",
        "pins": [
          {
            "signal": "VCC5V0_SYS"
          },
          {
            "signal": "VCC5V0_SYS"
          },
          {
            "signal": "PCIE_RX1_P"
          },
          {
            "signal": "PCIE_TX1P"
          },
          {
            "signal": "PCIE_RX1_N"
          },
          {
            "signal": "PCIE_TX1N"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PCIE_RX0_P"
          },
          {
            "signal": "PCIE_TX0P"
          },
          {
            "signal": "PCIE_RX0_N"
          },
          {
            "signal": "PCIE_TX0N"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PCIE_REF_CLKP"
          },
          {
            "signal": "HOST0_DM"
          },
          {
            "signal": "PCIE_REF_CLKN"
          },
          {
            "signal": "HOST0_DP"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "PWR_KEY",
            "type": "input",
            "note": "PMIC power-key input; active low. Use a momentary contact to ground."
          },
          {
            "signal": "HOST1_DM"
          },
          {
            "signal": "GPIO4_C6/PWM1(3V)",
            "voltage": "3.0 V"
          },
          {
            "signal": "HOST1_DP"
          }
        ],
        "position": [
          8.3,
          5.2
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through",
        "acrossReverse": true,
        "voltage": "3.0 V",
        "note": "Expansion header combines PCIe differential signals, USB2 pairs, power-key and GPIO. These protocols are not all TTL GPIO."
      },
      {
        "key": "debug",
        "ref": "DBG_UART",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "5V",
            "type": "passive",
            "note": "Shared 5 V supply rail."
          },
          {
            "signal": "UART2DBG_TX",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART2DBG_RX",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          68.5,
          17
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      },
      {
        "key": "rtc",
        "ref": "RTC_BAT1",
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
          61.5,
          41
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "x",
        "kind": "socket"
      },
      {
        "key": "mic",
        "ref": "MIC1",
        "pins": [
          {
            "signal": "MIC_IN2P",
            "type": "input",
            "note": "Analog microphone positive/bias contact."
          },
          {
            "signal": "MIC_IN2N",
            "type": "input",
            "note": "Analog differential microphone negative input; not a direct ground terminal."
          }
        ],
        "position": [
          58,
          49
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      }
    ],
    "parts": [
      [
        "usb3",
        69,
        -1,
        17,
        18,
        "USB3x2"
      ],
      [
        "usb3",
        69,
        19,
        17,
        18,
        "USB3x2"
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
        6,
        49,
        9,
        8,
        "PWR/DATA"
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
        49,
        45,
        7,
        12,
        "AUDIO"
      ],
      [
        "socket",
        41,
        39,
        7,
        15,
        "eMMC"
      ],
      [
        "radio",
        3,
        32,
        16,
        13,
        "WiFi/BT"
      ],
      [
        "ram",
        43,
        13,
        14,
        13,
        "LPDDR3"
      ],
      [
        "ram",
        43,
        28,
        14,
        13,
        "LPDDR3"
      ],
      [
        "chip",
        57,
        15,
        9,
        11,
        "USBHUB"
      ],
      [
        "fpc",
        0,
        16,
        4,
        12,
        "CSI"
      ],
      [
        "fpc",
        0,
        28,
        4,
        11,
        "CSI/DSI"
      ]
    ],
    "description": "All 40 GPIO1 contacts and 24 GPIO2 PCIe/USB expansion contacts, four console contacts, RTC and differential microphone. GPIO1 contains 3.0 V and 1.8 V domains; the latter are explicitly marked per contact. RK3399 is on the reverse side, so the illustrated component face shows the two RAM packages. Camera/eMMC sockets are outside the wiring scope.",
    "gpioVoltage": "3.0 V",
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
      26,
      29,
      2.8
    ],
    "cad": {
      "label": "NanoPi M41807 manufacturer mechanical DXF archive",
      "url": "https://wiki.friendlyelec.com/wiki/images/e/e4/NanoPi-M4-1807_Drawing%28dxf%29.zip"
    }
  },
  {
    "id": "friendlyelec-nanopi-m5",
    "name": "FriendlyElec NanoPi M5",
    "shortName": "NanoPi M5",
    "manufacturer": "FriendlyElec",
    "revision": "2411 (LPDDR4X PCB)",
    "soc": "RK3576",
    "size": [
      90,
      62
    ],
    "color": "#21649a",
    "source": "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_M5",
    "documentation": [
      "https://wiki.friendlyelec.com/wiki/index.php/NanoPi_M5",
      "https://wiki.friendlyelec.com/wiki/images/1/10/NanoPi_M5_LP4X_2411_SCH.PDF"
    ],
    "headers": [
      {
        "key": "gpio",
        "ref": "CON4",
        "pins": [
          {
            "signal": "VCC_3V3_S3"
          },
          {
            "signal": "VCC5V0_SYS_S5"
          },
          {
            "signal": "GPIO0_C2_I2C0_SDA"
          },
          {
            "signal": "VCC5V0_SYS_S5"
          },
          {
            "signal": "GPIO0_C1_I2C0_SCL"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_A5"
          },
          {
            "signal": "GPIO4_B5_UART2_TX_I2C3_SCL"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_B4_UART2_RX_I2C3_SDA"
          },
          {
            "signal": "GPIO2_A6_UART8_TX"
          },
          {
            "signal": "GPIO0_B5_PWM1_CH1_M0"
          },
          {
            "signal": "GPIO2_A7_UART8_RX"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_A2_PWM2_CH5"
          },
          {
            "signal": "GPIO3_A0_UART3_TX_I2C7_SCL"
          },
          {
            "signal": "VCC_3V3_S3"
          },
          {
            "signal": "GPIO3_A1_UART3_RX_I2C7_SDA"
          },
          {
            "signal": "GPIO4_B1_SPI4_MOSI"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_B2_SPI4_MISO"
          },
          {
            "signal": "GPIO0_C4_PWM0_CH0_M0"
          },
          {
            "signal": "GPIO4_B0_SPI4_CLK"
          },
          {
            "signal": "GPIO4_B3_SPI4_CSN0"
          },
          {
            "signal": "GND"
          },
          {
            "signal": "GPIO4_A6_SPI3_MISO_UART6_RX"
          },
          {
            "signal": "GPIO4_A7_SPI3_CLK"
          },
          {
            "signal": "GPIO4_A4_SPI3_MOSI_UART6_TX"
          },
          {
            "signal": "GPIO4_A3_SPI3_CSN0"
          },
          {
            "signal": "GND"
          }
        ],
        "position": [
          5.5,
          56
        ],
        "rows": 2,
        "pitch": 2.54,
        "axis": "x",
        "kind": "through"
      },
      {
        "key": "debug",
        "ref": "J1",
        "pins": [
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Serial-console ground."
          },
          {
            "signal": "UART0_TX_M0_DEBUG",
            "type": "output",
            "note": "Debug-console transmit from this board; default 1500000 baud. Not RS232 levels."
          },
          {
            "signal": "UART0_RX_M0_DEBUG",
            "type": "input",
            "note": "Debug-console receive into this board; default 1500000 baud. Not RS232 levels."
          }
        ],
        "position": [
          79.2,
          5.6
        ],
        "rows": 1,
        "pitch": 2.54,
        "axis": "y",
        "kind": "through"
      },
      {
        "key": "rtc",
        "ref": "RTC_BAT",
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
          88.5,
          31
        ],
        "rows": 1,
        "pitch": 1.25,
        "axis": "y",
        "kind": "socket"
      },
      {
        "key": "fan",
        "ref": "CON18",
        "pins": [
          {
            "signal": "FAN+",
            "type": "power_out",
            "note": "Controlled positive fan supply, up to 5 V. The return is board ground."
          },
          {
            "signal": "GND",
            "type": "power_in",
            "note": "Fan return."
          }
        ],
        "position": [
          1.4,
          26
        ],
        "rows": 1,
        "pitch": 1.5,
        "axis": "y",
        "kind": "socket"
      },
      {
        "key": "mic",
        "ref": "MIC1",
        "pins": [
          {
            "signal": "GND_AUDIO",
            "type": "power_in",
            "note": "Analog microphone return."
          },
          {
            "signal": "MIC_IN",
            "type": "input",
            "note": "AC-coupled microphone input with microphone bias."
          }
        ],
        "position": [
          82.5,
          17.5
        ],
        "rows": 1,
        "pitch": 2,
        "axis": "x",
        "kind": "socket"
      }
    ],
    "parts": [
      [
        "usbc",
        1,
        -1,
        8,
        8,
        "PD/DC"
      ],
      [
        "ethernet",
        11,
        0,
        17,
        22,
        "1G"
      ],
      [
        "ethernet",
        30,
        0,
        17,
        22,
        "1G"
      ],
      [
        "usb3",
        51,
        -1,
        16,
        22,
        "USB3x2"
      ],
      [
        "hdmi",
        71,
        -1,
        7,
        22,
        "HDMI"
      ],
      [
        "audio",
        81,
        -1,
        7,
        13,
        "AUDIO"
      ],
      [
        "sd",
        76,
        40,
        14,
        16,
        "microSD"
      ],
      [
        "socket",
        49,
        25,
        28,
        5,
        "M.2E SDIO"
      ],
      [
        "chip",
        28,
        34,
        17,
        20,
        "RK3576"
      ],
      [
        "ram",
        10,
        34,
        11,
        17,
        "LPDDR4X"
      ],
      [
        "chip",
        49,
        40,
        9,
        12,
        "PMIC"
      ],
      [
        "button",
        0,
        41,
        3,
        4,
        ""
      ],
      [
        "button",
        0,
        51,
        3,
        4,
        ""
      ],
      [
        "button",
        69,
        58,
        3,
        3,
        ""
      ],
      [
        "button",
        80,
        58,
        3,
        3,
        ""
      ]
    ],
    "description": "Current RK3576 NanoPi M5 with 30 GPIO contacts, debug UART, fan, RTC and microphone. This is not an Amlogic 40-pin board. The LPDDR4X 2411 PCB is selected; LPDDR5 and RAM-size choices are not duplicated as separate entries. M.2, UFS and camera/display sockets are outside this low-speed wiring scope.",
    "holes": [
      [
        3,
        19
      ],
      [
        87,
        19
      ],
      [
        3,
        59
      ],
      [
        87,
        59
      ]
    ],
    "title": [
      65,
      53,
      2.6
    ],
    "cad": {
      "label": "NanoPi M52411 manufacturer DXF mechanical archive",
      "url": "https://wiki.friendlyelec.com/wiki/images/e/e1/NanoPi_M5_2411_DXF.zip"
    }
  }
];

const family = sbcMoreFamily(boards);
const friendlyelecMoreComponents = family.components;
const friendlyelecMoreArt = family.art;
const friendlyelecMoreFootprints = family.footprints;
const friendlyelecMoreModels = family.models;

export default defineFamily("friendlyelec-more", (friendlyelecMoreComponents).map(component => ({ component, render: (friendlyelecMoreArt)[component.art], footprint: (friendlyelecMoreFootprints)[component.id], model: friendlyelecMoreModels[component.id] })));
