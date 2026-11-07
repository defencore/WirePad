// GOWIN special development-board records, with manufacturer reference URLs.
// Exact published connector tables are kept with each development board. Cable ports use explicitly scoped cable contacts.
const boards = [
  {
    "index": 26,
    "name": "DK_START_GW5AST-LV138FPG676A_V2.1",
    "id": "gowin-dk-start-gw5ast-lv138fpg676a-v2-1",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/70/",
    "image": "https://www.gowinsemi.com/img/?hash=bbbf8a7be76eb7e0f243284bffad02ff.png",
    "manual": "https://www.gowinsemi.com/upload/database_doc/3106/document/69b881d9d5083.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/3107/document/68c54424b76a1.pdf",
    "short": "GW5AST138 V2.1",
    "chip": "GW5AST-138",
    "scope": "All80 MIPI, both18-contact LVDS,20 GPIO,8 ADC and4 I2C contacts are exposed, along with the SFP control jumpers and17 rail measurement posts. USB-JTAG and USB-UART use their fitted converter sockets. Complete PCIe, SFP, HDMI, USB, Ethernet, SDI and DC cable ports are represented. Dedicated data ports retain their external electrical interfaces; FPGA bank voltages describe direct logic headers only.",
    "headers": [
      {
        "name": "J9",
        "pitch": 0.5,
        "rows": 1,
        "note": "All 80 AXK580147 YG contacts; dedicated dual MIPI D-PHY plus control and power. Source DBUG1275 table3-7.",
        "visual": null,
        "pins": [
          [
            "M0_D0N",
            "W1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D0P",
            "V1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D1N",
            "AA2",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D1P",
            "Y2",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_CKN",
            "AA3",
            "MIPI",
            "-",
            "MIPI clock signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_CKP",
            "Y3",
            "MIPI",
            "-",
            "MIPI clock signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D2N",
            "W3",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "M0_D2P",
            "V3",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D3N",
            "W4",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M0_D3P",
            "V4",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "M1_D0N",
            "AC1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_D0P",
            "AB1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_D1N",
            "AE1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_D1P",
            "AD1",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_CKN",
            "AF2",
            "MIPI",
            "-",
            "MIPI clock signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_CKP",
            "AE2",
            "MIPI",
            "-",
            "MIPI clock signal"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "M1_D2N",
            "AF3",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "M1_D2P",
            "AE3",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "CSI_RST",
            "G17",
            "5",
            "3.3V",
            "Reset signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "CSI_CLK",
            "J23",
            "4",
            "3.3V",
            "Clock signal"
          ],
          [
            "M1_D3N",
            "AF5",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "CSI_SCL",
            "H23",
            "4",
            "3.3V",
            "I2C clock signal"
          ],
          [
            "M1_D3P",
            "AE5",
            "MIPI",
            "-",
            "MIPI data signal"
          ],
          [
            "CSI_SDA",
            "H24",
            "4",
            "3.3V",
            "I2C data signal"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "3.3V",
            "Power"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "3.3V",
            "Power"
          ],
          [
            "NC",
            "-",
            "-",
            "-",
            "Floating"
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "3.3V",
            "Power"
          ]
        ]
      },
      {
        "name": "J247",
        "pitch": 2,
        "rows": 2,
        "note": "Complete 18-contact LVDS TX,2.5  V.",
        "visual": [
          20,
          172,
          "x"
        ],
        "pins": [
          [
            "LT_2P5_1p",
            "Y22",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LT_2P5_1n",
            "Y23",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LT_2P5_2p",
            "T20",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LT_2P5_2n",
            "U20",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LT_2P5_CLKp",
            "U21",
            "2",
            "2.5V",
            "LVDS Clock"
          ],
          [
            "LT_2P5_CLKn",
            "V21",
            "2",
            "2.5V",
            "LVDS Clock"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LT_2P5_3p",
            "W20",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LT_2P5_3n",
            "Y20",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LT_2P5_4p",
            "T19",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LT_2P5_4n",
            "U19",
            "2",
            "2.5V",
            "LVDS data"
          ]
        ]
      },
      {
        "name": "J7",
        "pitch": 2,
        "rows": 2,
        "note": "Complete 18-contact LVDS RX,2.5  V.",
        "visual": [
          20,
          188,
          "x"
        ],
        "pins": [
          [
            "LR_2P5_1p",
            "AA24",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LR_2P5_1n",
            "AB25",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LR_2P5_2p",
            "V23",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LR_2P5_2n",
            "W23",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LR_2P5_CLK",
            "2",
            "2.5V",
            "LVDS Clock",
            ""
          ],
          [
            "LR_2P5_CLK",
            "2",
            "2.5V",
            "LVDS Clock",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LR_2P5_3p",
            "AB24",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LR_2P5_3n",
            "AC24",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "LR_2P5_4p",
            "AA22",
            "2",
            "2.5V",
            "LVDS data"
          ],
          [
            "LR_2P5_4n",
            "AA23",
            "2",
            "2.5V",
            "LVDS data"
          ]
        ]
      },
      {
        "name": "J254",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact GPIO,2.5  V including both supply contacts and returns.",
        "visual": [
          151,
          185,
          "x"
        ],
        "pins": [
          [
            "VCCIO2+",
            "-",
            "-",
            "2.5V",
            "Power"
          ],
          [
            "VCCIO2+",
            "-",
            "-",
            "2.5V",
            "Power"
          ],
          [
            "HGPIO1",
            "W21",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO2",
            "Y21",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO3",
            "V19",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO4",
            "W24",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO5",
            "AC26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO6",
            "V18",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO7",
            "AB26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO8",
            "AA25",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO9",
            "Y26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO10",
            "Y25",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO11",
            "W26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO12",
            "W25",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO13",
            "V26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO14",
            "V24",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO15",
            "U26",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "HGPIO16",
            "U25",
            "2",
            "2.5V",
            "GPIO"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "GND"
          ]
        ]
      },
      {
        "name": "J2",
        "pitch": 2.54,
        "rows": 2,
        "note": "ADC analog inputs through anti-alias filters. Even-number contacts are grounded in schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "ADCTP_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCTN_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCVN_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCVP_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J5",
        "pitch": 2.54,
        "rows": 2,
        "note": "Four-contact INA3221 host-monitoring I2 C interface.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "GND",
            "",
            ""
          ],
          [
            "VCCIO345",
            "3.3V",
            "Power",
            "",
            ""
          ],
          [
            "INA3221_SDA",
            "3.3V",
            "Serial bus data line",
            "",
            ""
          ],
          [
            "INA3221_SCL",
            "3.3V",
            "Serial bus clock line",
            "",
            ""
          ]
        ]
      },
      {
        "name": "P1",
        "pitch": 1,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Complete PCIe x4 edge A/B sides, following the board schematic. TX/RX names are board-relative. Reserved/unused management contacts are NC.",
        "visual": null,
        "pins": [
          [
            "PRSNT1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PERST",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "REFCLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "REFCLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX3+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX3-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3_AUX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "WAKE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PRSNT_X1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX3+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX3-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PRSNT_X4",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "A9",
          "A10",
          "A11",
          "A12",
          "A13",
          "A14",
          "A15",
          "A16",
          "A17",
          "A18",
          "A19",
          "A20",
          "A21",
          "A22",
          "A23",
          "A24",
          "A25",
          "A26",
          "A27",
          "A28",
          "A29",
          "A30",
          "A31",
          "A32",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",
          "B7",
          "B8",
          "B9",
          "B10",
          "B11",
          "B12",
          "B13",
          "B14",
          "B15",
          "B16",
          "B17",
          "B18",
          "B19",
          "B20",
          "B21",
          "B22",
          "B23",
          "B24",
          "B25",
          "B26",
          "B27",
          "B28",
          "B29",
          "B30",
          "B31",
          "B32"
        ]
      },
      {
        "name": "P3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SFP/SFP+20-contact module interface; use the transceiver electrical specification.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_FAULT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MOD_ABS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX_LOS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCR",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "P4",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SFP/SFP+20-contact module interface; use the transceiver electrical specification.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_FAULT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MOD_ABS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX_LOS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCR",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "HDMI_TX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "HDMI_RX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "RJ45",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Ethernet PHY-side RJ45 cable pairs, not FPGA GPIO.",
        "visual": null,
        "pins": [
          [
            "MDI0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI3+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MDI3-",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J26-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC12V_IN",
            "-",
            "-",
            "12V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "SDI0_IN",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. External SDI interface through onboard transceiver.",
        "visual": null,
        "pins": [
          [
            "SDI0_RX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "SDI0_OUT",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. External SDI interface through onboard transceiver.",
        "visual": null,
        "pins": [
          [
            "SDI0_TX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "SDI1_IN",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. External SDI interface through onboard transceiver.",
        "visual": null,
        "pins": [
          [
            "SDI1_RX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "SDI1_OUT",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. External SDI interface through onboard transceiver.",
        "visual": null,
        "pins": [
          [
            "SDI1_TX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "J13",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J14",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J246",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J262",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J263",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J264",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_MOD_DETECT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J6",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J259",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_RS0_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J260",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_RS1_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J261",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_MOD_DETECT_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J210",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both contacts of the SFP control jumper, schematic sheet8. The signal is pulled high by default; fit jumper to force low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_DISABLE_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J230",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "V_GEN_2P1",
            "-",
            "-",
            "2.1V",
            ""
          ]
        ]
      },
      {
        "name": "J229",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "V_GEN_1P2",
            "-",
            "-",
            "1.2V",
            ""
          ]
        ]
      },
      {
        "name": "J236",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "V_GEN_3P6",
            "-",
            "-",
            "3.6V",
            ""
          ]
        ]
      },
      {
        "name": "J231",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCC_REG",
            "-",
            "-",
            "1.2V",
            ""
          ]
        ]
      },
      {
        "name": "J241",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "3.3V",
            ""
          ]
        ]
      },
      {
        "name": "J223",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCC_CORE_0P95",
            "-",
            "-",
            "0.95V",
            ""
          ]
        ]
      },
      {
        "name": "J224",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "M_VDD_0P95",
            "-",
            "-",
            "0.95V",
            ""
          ]
        ]
      },
      {
        "name": "J225",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "Q_VDD_0P95",
            "-",
            "-",
            "0.95V",
            ""
          ]
        ]
      },
      {
        "name": "J227",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "Q_VDDT_0P95",
            "-",
            "-",
            "0.95V",
            ""
          ]
        ]
      },
      {
        "name": "J245",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "HDMI_1P8",
            "-",
            "-",
            "1.8V",
            ""
          ]
        ]
      },
      {
        "name": "J232",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCCX_1P8",
            "-",
            "-",
            "1.8V",
            ""
          ]
        ]
      },
      {
        "name": "J233",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "M_VDDX_1P8",
            "-",
            "-",
            "1.8V",
            ""
          ]
        ]
      },
      {
        "name": "J234",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "Q_VDDHA_1P8",
            "-",
            "-",
            "1.8V",
            ""
          ]
        ]
      },
      {
        "name": "J242",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCCIO2",
            "-",
            "-",
            "2.5V",
            ""
          ]
        ]
      },
      {
        "name": "J243",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCCIO67",
            "-",
            "-",
            "1.5V",
            ""
          ]
        ]
      },
      {
        "name": "J239",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCCIO345",
            "-",
            "-",
            "3.3V",
            ""
          ]
        ]
      },
      {
        "name": "J240",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply measurement contact, schematic power sheets20\u201324. Measurement/monitoring connection; not an alternative board power input.",
        "visual": null,
        "pins": [
          [
            "VCCIO10",
            "-",
            "-",
            "3.3V",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "usb",
        -2,
        12,
        18,
        12,
        "DBG"
      ],
      [
        "ethernet",
        -2,
        35,
        30,
        31,
        "ETH"
      ],
      [
        "socket",
        53,
        -2,
        23,
        43,
        "SFP1"
      ],
      [
        "socket",
        80,
        -2,
        23,
        43,
        "SFP2"
      ],
      [
        "socket",
        185,
        -3,
        18,
        25,
        "SDI"
      ],
      [
        "socket",
        230,
        -3,
        18,
        25,
        "SDI"
      ],
      [
        "socket",
        278,
        47,
        24,
        19,
        "SDI"
      ],
      [
        "socket",
        278,
        75,
        24,
        19,
        "SDI"
      ],
      [
        "usb",
        282,
        112,
        20,
        16,
        "USB"
      ],
      [
        "socket",
        278,
        146,
        24,
        20,
        "12V"
      ],
      [
        "ribbon",
        57,
        198,
        58,
        8,
        "MIPI"
      ],
      [
        "socket",
        276,
        178,
        26,
        18,
        "HDMI"
      ]
    ],
    "aspect": "landscape",
    "extra": "pcie"
  },
  {
    "index": 27,
    "name": "DK_START_GW5AST-LV138FPG676A_V1.0",
    "id": "gowin-dk-start-gw5ast-lv138fpg676a-v1-0",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/58/",
    "image": "https://www.gowinsemi.com/img/?hash=646eab4d6a3105d9e5062d5d1ae2a509.jpg",
    "manual": "https://www.gowinsemi.com/upload/database_doc/2993/document/66a34c503020c.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/2994/document/66a34c697b595.pdf",
    "short": "GW5AST138 V1.0",
    "chip": "GW5AST-138",
    "scope": "Main V1.0 board with all400 FMC HPC contacts, MIPI80, complete configuration, ADC and three JTAG headers, twenty coaxial ports, PCIe x4, both SFP ports, USB and DC power. Optional daughterboards have their own manufacturer guide and are not fitted to this board. MIPI follows schematic sheet5, which differs from the guide pin table.",
    "headers": [
      {
        "name": "J30",
        "pitch": 1.27,
        "rows": 10,
        "note": "All 400 Samtec ASP_134486_01 HPC contacts; external FMC signal levels and VADJ follow the schematic. NC marks physically present but unrouted positions. Internal FPGA ball columns in the guide differ from the schematic; this entry preserves the physical FMC contact/function and omits those conflicting ball annotations.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_DP1_M2C_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_DP1_M2C_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP2_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP2_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP3_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP3_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP4_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP4_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP5_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP5_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_DP1_C2M_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_DP1_C2M_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP2_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP2_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP3_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP3_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP4_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP4_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP5_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP5_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted CLK_DIR position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP9_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP9_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP8_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP8_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP7_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP7_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP6_M2C_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP6_M2C_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_GBTCLK1_M2C_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_GBTCLK1_M2C_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP9_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP9_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP8_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP8_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP7_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP7_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP6_C2M_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted DP6_C2M_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3_AUX",
            "-",
            "-",
            "3.3V",
            "RES0 contact tied to AlwaysOn_3.3V in schematic sheet11."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_DP0_C2M_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_DP0_C2M_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_DP0_M2C_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_DP0_M2C_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA06_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA06_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA10_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA10_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA14_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA14_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA18_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA18_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA27_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA27_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_IIC_SCL",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_IIC_SDA",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "VCC12_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "GA1 is strapped to ground in schematic sheet11."
          ],
          [
            "VCC12_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PG_C2M",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_GBTCLK0_M2C_P",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_GBTCLK0_M2C_N",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA01_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA01_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA05_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA05_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA09_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA09_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA13_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA13_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA17_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA17_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA23_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA23_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA26_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA26_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_TCK",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_TDI",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_TDO",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_TMS",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted TRST_L position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted GA1 position in the V1.0 schematic."
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA01_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA01_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA05_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA05_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA09_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA09_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA13_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA13_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA16_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA16_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA20_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA20_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB03_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB03_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB05_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB05_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB09_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB09_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB13_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB13_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB19_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB19_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB21_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB21_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO_ADJ",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_PG_M2C",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA00_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA00_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA04_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA04_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA08_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA08_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA12_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA12_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA15_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA15_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA19_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA19_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB02_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB02_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB04_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB04_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB08_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB08_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB12_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB12_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB16_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB06_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB20_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB20_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO_ADJ",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_CLK1_M2C_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_CLK1_M2C_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA00_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA00_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA03_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA03_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA08_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA08_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA12_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA12_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA16_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA16_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA20_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA20_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA22_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA22_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA25_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA25_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA29_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA29_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA31_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA31_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA33_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA33_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO_ADJ",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted VREF_A_M2C position in the V1.0 schematic."
          ],
          [
            "FMC1_HPC_PRSNT_M2C_B",
            "-",
            "-",
            "3.3V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_CLK0_M2C_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_CLK0_M2C_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA02_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA02_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA04_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA04_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA07_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA07_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA11_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA11_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA15_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA15_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA19_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA19_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA21_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA21_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA24_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA24_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA28_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA28_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA30_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA30_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_LA32_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_LA32_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO_ADJ",
            "-",
            "-",
            "-",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted CLK3_BIDIR_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted CLK3_BIDIR_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA03_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA03_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA07_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA07_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA11_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA11_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA14_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA14_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA18_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA18_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA22_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA22_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB01_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB01_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB07_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB07_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB11_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB11_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB15_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB15_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB18_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB18_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted VIO_B_M2C_1 position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted VREF_B_M2C position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted CLK2_BIDIR_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted CLK2_BIDIR_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA02_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA02_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA06_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA06_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA10_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA10_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA17_CC_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA17_CC_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA21_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA21_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "FMC1_HPC_HA23_P",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "FMC1_HPC_HA23_N",
            "-",
            "-",
            "2.5V",
            "FMC direct contact from DBUG1271 table3-17, cross-checked against the schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB00_P_CC position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB00_N_CC position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB06_P_CC position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB06_N_CC position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB10_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB10_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB14_P position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB14_N position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB17_P_CC position in the V1.0 schematic."
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted HB17_N_CC position in the V1.0 schematic."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            "Unrouted VIO_B_M2C_2 position in the V1.0 schematic."
          ]
        ],
        "numbers": [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "A9",
          "A10",
          "A11",
          "A12",
          "A13",
          "A14",
          "A15",
          "A16",
          "A17",
          "A18",
          "A19",
          "A20",
          "A21",
          "A22",
          "A23",
          "A24",
          "A25",
          "A26",
          "A27",
          "A28",
          "A29",
          "A30",
          "A31",
          "A32",
          "A33",
          "A34",
          "A35",
          "A36",
          "A37",
          "A38",
          "A39",
          "A40",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",
          "B7",
          "B8",
          "B9",
          "B10",
          "B11",
          "B12",
          "B13",
          "B14",
          "B15",
          "B16",
          "B17",
          "B18",
          "B19",
          "B20",
          "B21",
          "B22",
          "B23",
          "B24",
          "B25",
          "B26",
          "B27",
          "B28",
          "B29",
          "B30",
          "B31",
          "B32",
          "B33",
          "B34",
          "B35",
          "B36",
          "B37",
          "B38",
          "B39",
          "B40",
          "C1",
          "C2",
          "C3",
          "C4",
          "C5",
          "C6",
          "C7",
          "C8",
          "C9",
          "C10",
          "C11",
          "C12",
          "C13",
          "C14",
          "C15",
          "C16",
          "C17",
          "C18",
          "C19",
          "C20",
          "C21",
          "C22",
          "C23",
          "C24",
          "C25",
          "C26",
          "C27",
          "C28",
          "C29",
          "C30",
          "C31",
          "C32",
          "C33",
          "C34",
          "C35",
          "C36",
          "C37",
          "C38",
          "C39",
          "C40",
          "D1",
          "D2",
          "D3",
          "D4",
          "D5",
          "D6",
          "D7",
          "D8",
          "D9",
          "D10",
          "D11",
          "D12",
          "D13",
          "D14",
          "D15",
          "D16",
          "D17",
          "D18",
          "D19",
          "D20",
          "D21",
          "D22",
          "D23",
          "D24",
          "D25",
          "D26",
          "D27",
          "D28",
          "D29",
          "D30",
          "D31",
          "D32",
          "D33",
          "D34",
          "D35",
          "D36",
          "D37",
          "D38",
          "D39",
          "D40",
          "E1",
          "E2",
          "E3",
          "E4",
          "E5",
          "E6",
          "E7",
          "E8",
          "E9",
          "E10",
          "E11",
          "E12",
          "E13",
          "E14",
          "E15",
          "E16",
          "E17",
          "E18",
          "E19",
          "E20",
          "E21",
          "E22",
          "E23",
          "E24",
          "E25",
          "E26",
          "E27",
          "E28",
          "E29",
          "E30",
          "E31",
          "E32",
          "E33",
          "E34",
          "E35",
          "E36",
          "E37",
          "E38",
          "E39",
          "E40",
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
          "F13",
          "F14",
          "F15",
          "F16",
          "F17",
          "F18",
          "F19",
          "F20",
          "F21",
          "F22",
          "F23",
          "F24",
          "F25",
          "F26",
          "F27",
          "F28",
          "F29",
          "F30",
          "F31",
          "F32",
          "F33",
          "F34",
          "F35",
          "F36",
          "F37",
          "F38",
          "F39",
          "F40",
          "G1",
          "G2",
          "G3",
          "G4",
          "G5",
          "G6",
          "G7",
          "G8",
          "G9",
          "G10",
          "G11",
          "G12",
          "G13",
          "G14",
          "G15",
          "G16",
          "G17",
          "G18",
          "G19",
          "G20",
          "G21",
          "G22",
          "G23",
          "G24",
          "G25",
          "G26",
          "G27",
          "G28",
          "G29",
          "G30",
          "G31",
          "G32",
          "G33",
          "G34",
          "G35",
          "G36",
          "G37",
          "G38",
          "G39",
          "G40",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "H7",
          "H8",
          "H9",
          "H10",
          "H11",
          "H12",
          "H13",
          "H14",
          "H15",
          "H16",
          "H17",
          "H18",
          "H19",
          "H20",
          "H21",
          "H22",
          "H23",
          "H24",
          "H25",
          "H26",
          "H27",
          "H28",
          "H29",
          "H30",
          "H31",
          "H32",
          "H33",
          "H34",
          "H35",
          "H36",
          "H37",
          "H38",
          "H39",
          "H40",
          "J1",
          "J2",
          "J3",
          "J4",
          "J5",
          "J6",
          "J7",
          "J8",
          "J9",
          "J10",
          "J11",
          "J12",
          "J13",
          "J14",
          "J15",
          "J16",
          "J17",
          "J18",
          "J19",
          "J20",
          "J21",
          "J22",
          "J23",
          "J24",
          "J25",
          "J26",
          "J27",
          "J28",
          "J29",
          "J30",
          "J31",
          "J32",
          "J33",
          "J34",
          "J35",
          "J36",
          "J37",
          "J38",
          "J39",
          "J40",
          "K1",
          "K2",
          "K3",
          "K4",
          "K5",
          "K6",
          "K7",
          "K8",
          "K9",
          "K10",
          "K11",
          "K12",
          "K13",
          "K14",
          "K15",
          "K16",
          "K17",
          "K18",
          "K19",
          "K20",
          "K21",
          "K22",
          "K23",
          "K24",
          "K25",
          "K26",
          "K27",
          "K28",
          "K29",
          "K30",
          "K31",
          "K32",
          "K33",
          "K34",
          "K35",
          "K36",
          "K37",
          "K38",
          "K39",
          "K40"
        ]
      },
      {
        "name": "J9",
        "pitch": 0.5,
        "rows": 1,
        "note": "All 80 AXK580137 YG contacts from schematic sheet5. DBUG1271 table3-19 has a different MIPI lane order; schematic wiring takes precedence.",
        "visual": null,
        "pins": [
          [
            "M0_D0N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "U24",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D0P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "T25",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "T23",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D1N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "R26",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D1P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "P25",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_CKN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "T22",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_CKP",
            "-",
            "-",
            "",
            ""
          ],
          [
            "R22",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "R21",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D2N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D2P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "A25",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "B25",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D3N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "A24",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M0_D3P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "C23",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D0N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "A23",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D0P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "L15",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M19",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D1N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "J16",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D1P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "K15",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_CKN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "J23",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_CKP",
            "-",
            "-",
            "",
            ""
          ],
          [
            "H23",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "R20",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D2N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D2P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "U17",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "J26",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D3N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "J25",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M1_D3P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "K16",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "K17",
            "-",
            "-",
            "",
            ""
          ],
          [
            "L20",
            "-",
            "-",
            "",
            ""
          ],
          [
            "M15",
            "-",
            "-",
            "",
            ""
          ],
          [
            "L19",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "K18",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "E22",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC1V2",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "C22",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "C26",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "B26",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "J15",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J2",
        "pitch": 2.54,
        "rows": 2,
        "note": "All 8 ADC contacts, sheet3 anti-alias filter.",
        "visual": null,
        "pins": [
          [
            "ADCTP_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCTN_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCVN_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "ADCVP_C",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J1",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "H12",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "H10",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "J10",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "H11",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J8",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J24",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "-",
            "-",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J3",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 8-contact SSPI header, schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "SSPI_HOLDN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SSPI_SO",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SSPI_CLK",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SSPI_WPN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SSPI_SI",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SSPI_CSN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J4",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 10-contact CPU data header, schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "CPU_D00",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D04",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D01",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D05",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D02",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D06",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D03",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_D07",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J222",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete 4-contact CPU control header, schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_CLK",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_RDWR",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CPU_CSI_B",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J5",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete 4-contact I2 C configuration header, schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "IIC_SDA_MAIN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "IIC_SCL_MAIN",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J60",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete 4-contact SERIAL configuration header, schematic sheet3.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DOUT_CSO_B",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DIN",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "P1",
        "pitch": 1,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Complete PCIe x4 edge A/B sides, following the board schematic. TX/RX names are board-relative. Reserved/unused management contacts are NC.",
        "visual": null,
        "pins": [
          [
            "PRSNT1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PERST",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "REFCLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "REFCLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX3+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX3-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "12V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3V3_AUX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "WAKE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PRSNT_X1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX3+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX3-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "PRSNT_X4",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "A9",
          "A10",
          "A11",
          "A12",
          "A13",
          "A14",
          "A15",
          "A16",
          "A17",
          "A18",
          "A19",
          "A20",
          "A21",
          "A22",
          "A23",
          "A24",
          "A25",
          "A26",
          "A27",
          "A28",
          "A29",
          "A30",
          "A31",
          "A32",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",
          "B7",
          "B8",
          "B9",
          "B10",
          "B11",
          "B12",
          "B13",
          "B14",
          "B15",
          "B16",
          "B17",
          "B18",
          "B19",
          "B20",
          "B21",
          "B22",
          "B23",
          "B24",
          "B25",
          "B26",
          "B27",
          "B28",
          "B29",
          "B30",
          "B31",
          "B32"
        ]
      },
      {
        "name": "P3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SFP/SFP+20-contact module interface; use the transceiver electrical specification.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_FAULT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MOD_ABS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX_LOS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCR",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "U24",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SFP/SFP+20-contact module interface; use the transceiver electrical specification.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_FAULT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MOD_ABS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RX_LOS",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCR",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCCT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TD-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J10",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "DC12-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC12V_IN",
            "-",
            "-",
            "12V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN1",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "SMA_MGT_TX_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN2",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "SMA_MGT_TX_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "SMA_MGT_RX_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN4",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "SMA_MGT_RX_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN5",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "D23_IOB38A",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN6",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "D24_IOB38B",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN7",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "C24_IOB40A",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN8",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "B24_IOB40B",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN9",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q1_REFCLK0_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN10",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q1_REFCLK1_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN11",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q1_REFCLK0_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN12",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q1_REFCLK1_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN13",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q0_REFCLK1_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN14",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "Q0_REFCLK1_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN15",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_SMA_CLOCK_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN16",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_CLOCK_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN17",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_CLOCK_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN18",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_SMA_CLOCK_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN19",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_SMA_GPIO_P",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "CN20",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. SMA/BNC coaxial center and shell. Coaxial MGT, clock or user I/O connection; select the documented termination and fitted resistor path.",
        "visual": null,
        "pins": [
          [
            "USER_SMA_GPIO_N",
            "-",
            "-",
            "",
            "Exact center-signal name/purpose from schematic sheets8,13,14. Clock paths depend on fitted0-ohm/NS resistors."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "J28",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete24-contact external power-enable sequencing header,3.3 V control domain, schematic sheet17. Use the documented15-rail power-up sequence.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_BUCK2",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO10",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_BUCK1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO2",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_ADJ",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_Q_VDDT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO4",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_BUCK3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO5",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_3V3",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO6",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_M_VDD",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCIO7",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VDDX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_Q_VDD",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_Q_VDDHA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCC_REG",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "RUN_VCCX",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J6",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_DISABLE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J39",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SFP_RS0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J38",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SFP_RS1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J22",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_FAULT",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J21",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_MOD_DETECT",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J20",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_LOS",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J210",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_DISABLE_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J23",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SFP_RS0_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J220",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "AlwaysOn_3.3V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SFP_RS1_1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J18",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_TX_FAULT_1",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J19",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_MOD_DETECT_1",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J200",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete SFP status/rate-control jumper or test contact, schematic sheets8/9. Three-position straps select3.3 V/high or ground/low.",
        "visual": null,
        "pins": [
          [
            "SFP_LOS_1",
            "-",
            "-",
            "",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "socket",
        58,
        8,
        142,
        31,
        "FMC HPC400"
      ],
      [
        "socket",
        -2,
        18,
        28,
        35,
        "SFP1"
      ],
      [
        "socket",
        -2,
        59,
        28,
        35,
        "SFP2"
      ],
      [
        "usb",
        -2,
        115,
        19,
        12,
        "USB"
      ],
      [
        "ribbon",
        28,
        192,
        51,
        8,
        "MIPI"
      ],
      [
        "socket",
        278,
        160,
        24,
        19,
        "12V"
      ]
    ],
    "aspect": "landscape",
    "extra": "sma-grid"
  },
  {
    "index": 28,
    "name": "DK_UAC2_GW1N-LV9LQ144C7I6_V2.1",
    "id": "gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/55/",
    "image": "https://www.gowinsemi.com/img/?hash=ee15ba75ea252d46c304a694bbb5bbd2.png",
    "manual": "https://www.gowinsemi.com/upload/database_doc/2618/document/696a8bd703bc0.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/2619/document/67f8e4bbc4ccc.pdf",
    "short": "GW1N9 UAC2 V2.1",
    "chip": "GW1N-9",
    "scope": "All GPIO, JTAG, USB, 5 V adapter and rail test contacts are represented, together with SPDIF, RCA and amplified speaker cable terminals. Audio contacts are external converter outputs/inputs, not raw FPGA GPIO.",
    "headers": [
      {
        "name": "J13",
        "pitch": 2.54,
        "rows": 2,
        "note": "All 10 GPIO header contacts, GPIO1..8 route to FPGA pins133..126 at3.3  V.",
        "visual": [
          45,
          20,
          "x"
        ],
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "F_GPIO1",
            "133",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO2",
            "132",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO3",
            "131",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO4",
            "130",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO5",
            "129",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO6",
            "128",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO7",
            "127",
            "0",
            "3.3V",
            ""
          ],
          [
            "F_GPIO8",
            "126",
            "0",
            "3.3V",
            ""
          ]
        ]
      },
      {
        "name": "J11",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "14",
            "3",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "16",
            "3",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "18",
            "3",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "13",
            "3",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J2",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J1-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC5V_IN",
            "-",
            "-",
            "5V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "J10",
        "pitch": 2.54,
        "rows": 1,
        "note": "Class-D speaker output, differential amplified audio; neither contact is ground.",
        "visual": null,
        "pins": [
          [
            "HORN_OUTN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HORN_OUTP",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J14",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Coaxial SPDIF receiver input via CS8416.",
        "visual": null,
        "pins": [
          [
            "SPDIF_IN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J15",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Coaxial SPDIF transmitter output via CS8406.",
        "visual": null,
        "pins": [
          [
            "SPDIF_OUT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J8",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Right analog audio RCA output via CS4344.",
        "visual": null,
        "pins": [
          [
            "R_OUT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J9",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. Left analog audio RCA output via CS4344.",
        "visual": null,
        "pins": [
          [
            "L_OUT",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP1",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "VCC5",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP2",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP4",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "VCC1P2",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP5",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP6",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP7",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "DGND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP8",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed power/ground test contact, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "MGND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J16",
        "pitch": 2.54,
        "rows": 1,
        "visual": null,
        "note": "Optional USB download connector shown in the manufacturer V2.1 board photograph. Cable contacts only; populated programmer assembly depends on the production lot.",
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            ""
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "usb",
        -2,
        40,
        18,
        12,
        "USB1"
      ],
      [
        "usb",
        -2,
        72,
        18,
        12,
        "USB2"
      ],
      [
        "socket",
        276,
        20,
        25,
        20,
        "5V"
      ],
      [
        "socket",
        115,
        -2,
        18,
        19,
        "SPK"
      ],
      [
        "socket",
        146,
        -2,
        18,
        19,
        "R"
      ],
      [
        "socket",
        176,
        -2,
        18,
        19,
        "L"
      ],
      [
        "socket",
        207,
        -2,
        18,
        19,
        "IN"
      ],
      [
        "socket",
        237,
        -2,
        18,
        19,
        "OUT"
      ],
      [
        "dip",
        55,
        15,
        32,
        11,
        "MODE"
      ],
      [
        "usb",
        -2,
        104,
        18,
        12,
        "DBG"
      ]
    ],
    "aspect": "square",
    "extra": "audio"
  },
  {
    "index": 29,
    "name": "DK_USB2.0_GW2AR-LV18QN88PC8I7_GW1NSR-LV4CMG64PC7I6_V3.0",
    "id": "gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/45/",
    "image": "https://www.gowinsemi.com/img/?hash=53111e00e2c7037fde4823e60828c643.png",
    "manual": "https://www.gowinsemi.com/upload/database_doc/2319/document/681e1954a291e.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/2359/document/630868658eacc.pdf",
    "short": "GW2AR18 + GW1NSR4 USB",
    "chip": "GW2AR18 / GW1NSR4",
    "scope": "Both20-contact GPIO rows, both10-contact programming headers, USB2.0 cable ports, 5 V adapter and all 7 power test points. GW2AR JTAG reference is 1.8 V; GW1NSR JTAG and expansion GPIO use 3.3 V. This is the dual-FPGA V3.0 board.",
    "headers": [
      {
        "name": "J7",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact GPIO row. Printed signal numbers select the corresponding FPGA; supply rails are3.3  V.",
        "visual": [
          70,
          18,
          "x"
        ],
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "VCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "1N_GPIO0",
            "A1",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO1",
            "B1",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO2",
            "A2",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO3",
            "B2",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO4",
            "B3",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO5",
            "A3",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO6",
            "B4",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO7",
            "A4",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO8",
            "B6",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO9",
            "A6",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO10",
            "B7",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO11",
            "A7",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO12",
            "A8",
            "1",
            "3.3V",
            ""
          ],
          [
            "1N_GPIO13",
            "B8",
            "1",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J9",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact GPIO row. Printed signal numbers select the corresponding FPGA; supply rails are3.3  V.",
        "visual": [
          70,
          193,
          "x"
        ],
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "VCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "2A_GPIO0",
            "42",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO1",
            "41",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO2",
            "40",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO3",
            "39",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO4",
            "38",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO5",
            "37",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO6",
            "33",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO7",
            "32",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO8",
            "31",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO9",
            "30",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO10",
            "29",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO11",
            "26",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO12",
            "27",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "2A_GPIO13",
            "28",
            "4/5",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J6",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "D3",
            "0",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "E2",
            "0",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "E3",
            "0",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "10",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "D2",
            "0",
            "3.3V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "10",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J8",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 2\u00d75 JTAG socket, schematic physical contact order.",
        "visual": null,
        "pins": [
          [
            "TCK",
            "6",
            "2",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDI",
            "7",
            "2",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TDO",
            "8",
            "2",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "VCC_REF",
            "-",
            "-",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "NC",
            "-",
            "-",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "TMS",
            "5",
            "2",
            "1.8V",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            "JTAG reference supply is a voltage reference; do not back-power the board."
          ]
        ]
      },
      {
        "name": "J4",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J5",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J1-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC5V_IN",
            "-",
            "-",
            "5V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "TP1",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "VCC1P0",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP2",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "VCC1P2",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP3",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "VCC1P8",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP4",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "VCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP5",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "VCC5",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP6",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "TP7",
        "pitch": 2.54,
        "rows": 1,
        "note": "Single exposed supply/ground test contact.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "usb",
        -2,
        65,
        18,
        13,
        "USB1"
      ],
      [
        "usb",
        -2,
        110,
        18,
        13,
        "USB2"
      ],
      [
        "socket",
        276,
        45,
        25,
        19,
        "5V"
      ],
      [
        "dip",
        15,
        17,
        27,
        11,
        "MODE1"
      ],
      [
        "dip",
        15,
        184,
        27,
        11,
        "MODE2"
      ]
    ],
    "aspect": "square",
    "extra": "dual"
  },
  {
    "index": 30,
    "name": "DK_VIDEO_GW2A-LV18PG484C8I7_V1.2",
    "id": "gowin-dk-video-gw2a-lv18pg484c8i7-v1-2",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/21/",
    "image": "https://www.gowinsemi.com/img/?hash=2d2c4f28ab8092eb6e08e3bbbabc134f.png",
    "manual": "https://www.gowinsemi.com/upload/database_doc/1139/document/61161c537a457.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/1463/document/6144507ade965.pdf",
    "short": "GW2A18 Video V1.2",
    "chip": "GW2A-18",
    "scope": "Complete MIPI camera/display FPCs and alternate headers, LVDS RX30/TX40, backlight10, UART3, USB programmer and 12 V power cable contacts. Four HDMI cable ports retain their external TMDS interfaces. MIPI control signals are level shifted; alternate digital reuse requires 2.5 V bank supply.",
    "headers": [
      {
        "name": "J7",
        "pitch": 1,
        "rows": 1,
        "note": "Complete 15-contact camera FPC. Camera controls are level shifted to3.3  V from the2.5  V FPGA bank; MIPI data contacts use the dedicated interface.",
        "visual": null,
        "pins": [
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D0n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D0p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_RESET",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_CLK",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J6",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact alternate CSI header, not a3.3  V-only GPIO port.",
        "visual": [
          20,
          105,
          "y"
        ],
        "pins": [
          [
            "CSI_D0p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D0n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_D1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CSI_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J3",
        "pitch": 0.5,
        "rows": 1,
        "note": "Complete 30-contact TXD550 display FPC. Includes boosted backlight and positive/negative display rails; these are not ordinary GPIO.",
        "visual": null,
        "pins": [
          [
            "DSI_LED+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_LED+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_LED-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_LED-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_-5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_+5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC1P8",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_RSTn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_CABC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_TE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D3p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D3n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D2p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D2n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D0p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D0n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J4",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact alternate DSI header. Reuse as GPIO requires documented2.5  V bank configuration.",
        "visual": [
          40,
          105,
          "y"
        ],
        "pins": [
          [
            "DSI_D0p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D0n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D2p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D2n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D3p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DSI_D3n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J14",
        "pitch": 0.5,
        "rows": 1,
        "note": "Complete 30-contact LVDS RX FPC, including floating positions1..4.",
        "visual": null,
        "pins": [
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A10_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A10_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A9_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A9_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A8_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A8_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A7_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A7_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A6_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A6_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A5_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A5_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A4_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A4_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A3_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A3_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A2_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A2_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A1_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_A1_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J13",
        "pitch": 0.5,
        "rows": 1,
        "note": "Complete 40-contact LVDS TX FPC.5  V supply is present on positions28..30; GPIO reuse follows the2.5  V bank configuration.",
        "visual": null,
        "pins": [
          [
            "LVDS_B1_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B1_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B2_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B2_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B3_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B3_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B4_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B4_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B5_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B5_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B6_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B6_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B7_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B7_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B8_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B8_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B9_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B9_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B10_N",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LVDS_B10_P",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5P0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5P0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5P0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J12",
        "pitch": 2,
        "rows": 1,
        "note": "Complete 10-contact LCD backlight/temperature connector, including12  V rails. TEMP is connected to the onboard NTC.",
        "visual": null,
        "pins": [
          [
            "VCC12P0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC12P0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LCD_BL_EN",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LCD_PWM",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "TEMP",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J17",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete 3-contact3.3  V UART header, schematic sheet9.",
        "visual": null,
        "pins": [
          [
            "UART_RX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "UART_TX",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J11",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J2-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC12V_IN",
            "-",
            "-",
            "12V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "HDMI1_RX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "HDMI2_TX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "HDMI3_RX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "HDMI4_TX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "ribbon",
        22,
        -2,
        55,
        10,
        "DSI"
      ],
      [
        "ribbon",
        102,
        -2,
        40,
        10,
        "CSI"
      ],
      [
        "ribbon",
        18,
        208,
        75,
        10,
        "LVDS RX"
      ],
      [
        "ribbon",
        106,
        208,
        84,
        10,
        "LVDS TX"
      ],
      [
        "usb",
        -2,
        165,
        18,
        13,
        "USB"
      ],
      [
        "socket",
        277,
        21,
        25,
        19,
        "12V"
      ],
      [
        "socket",
        277,
        55,
        25,
        20,
        "HDMI1"
      ],
      [
        "socket",
        277,
        91,
        25,
        20,
        "HDMI2"
      ],
      [
        "socket",
        277,
        127,
        25,
        20,
        "HDMI3"
      ],
      [
        "socket",
        277,
        163,
        25,
        20,
        "HDMI4"
      ]
    ],
    "aspect": "landscape",
    "extra": "video"
  },
  {
    "index": 34,
    "name": "DK_START_GW5A-LV25UG324_V2.0",
    "id": "gowin-dk-start-gw5a-lv25ug324-v2-0",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/57/",
    "image": "https://www.gowinsemi.com/img/?hash=7cf6785e253c9ce7e0b4a356b7852212.jpeg",
    "manual": "https://www.gowinsemi.com/upload/database_doc/2818/document/67c85fa5ccb85.pdf",
    "schematic": "https://www.gowinsemi.com/upload/database_doc/2822/document/65ee974537931.pdf",
    "short": "GW5A25 V2.0",
    "chip": "GW5A-25",
    "scope": "Complete GPIO20, LVDS18+18, MIPI80, ADC2 and configuration/status strap contacts, plus HDMI, USB programmer/FPGA cable ports and 12 V adapter. The18 direct GPIOs and MIPI control GPIOs use 2.5 V; the ADC bank uses 1.5 V.",
    "headers": [
      {
        "name": "J2",
        "pitch": 2.54,
        "rows": 2,
        "note": "Complete 20-contact GPIO.18 signals at2.5  V; pin19 DVCC3 P3, pin20 GND, confirmed from schematic sheet6.",
        "visual": [
          115,
          184,
          "x"
        ],
        "pins": [
          [
            "HGPIO1",
            "P1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO10",
            "P2",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO2",
            "N1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO11",
            "N2",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO3",
            "L2",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO12",
            "M1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO4",
            "K2",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO13",
            "L1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO5",
            "J1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO14",
            "K1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO6",
            "H2",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO15",
            "H1",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO7",
            "L3",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO16",
            "M3",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO8",
            "K3",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO17",
            "L4",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO9",
            "J7",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "HGPIO18",
            "K4",
            "6/7",
            "2.5V",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J6",
        "pitch": 2,
        "rows": 2,
        "note": "Complete 18-contact2.0 mm LVDS TX header,2.5  V.",
        "visual": [
          18,
          174,
          "x"
        ],
        "pins": [
          [
            "LT_2P5_1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_2p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_2n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_3p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_3n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_4p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LT_2P5_4n",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J7",
        "pitch": 2,
        "rows": 2,
        "note": "Complete 18-contact2.0 mm LVDS RX header,2.5  V.",
        "visual": [
          18,
          190,
          "x"
        ],
        "pins": [
          [
            "LR_2P5_1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_2p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_2n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_3p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_3n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_4p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "LR_2P5_4n",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J5",
        "pitch": 0.5,
        "rows": 1,
        "note": "All 80 stacked MIPI connector contacts. Single-ended GPIO1..4 use2.5  V; dedicated MIPI contacts are not ordinary GPIO. Unused contacts are NC.",
        "visual": null,
        "pins": [
          [
            "MIPI_RX_D0n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D0p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D1n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D1p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_CLKn",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_CLKp",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D2n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D2p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D3n",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "MIPI_RX_D3p",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GPIO1",
            "-",
            "-",
            "2.5V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GPIO2",
            "-",
            "-",
            "2.5V",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GPIO3",
            "-",
            "-",
            "2.5V",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GPIO4",
            "-",
            "-",
            "2.5V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "3.3V",
            ""
          ]
        ]
      },
      {
        "name": "J15",
        "pitch": 2.54,
        "rows": 1,
        "note": "Both ADC contacts through49.9 ohm anti-alias filter,1.5  V bank.",
        "visual": null,
        "pins": [
          [
            "H_ADC_1P",
            "B16",
            "1",
            "1.5V",
            ""
          ],
          [
            "H_ADC_1N",
            "A16",
            "1",
            "1.5V",
            ""
          ]
        ]
      },
      {
        "name": "HDMI_TX",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint. HDMI Type A interface, including shield-return conductors; data uses TMDS levels.",
        "visual": null,
        "pins": [
          [
            "D2+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D2-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D1-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "D0-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CLK-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "CEC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SCL",
            "-",
            "-",
            "",
            ""
          ],
          [
            "SDA",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ],
          [
            "VCC5V",
            "-",
            "-",
            "",
            ""
          ],
          [
            "HPD",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J9",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J13",
        "pitch": 2.54,
        "rows": 1,
        "note": "Complete cable contacts in cable numbering; reference cable lands do not reproduce the connector mating footprint.",
        "visual": null,
        "pins": [
          [
            "VBUS",
            "-",
            "-",
            "5V",
            "USB cable5 V bus; follow the board power-source configuration."
          ],
          [
            "USB_D-",
            "-",
            "-",
            "",
            ""
          ],
          [
            "USB_D+",
            "-",
            "-",
            "",
            ""
          ],
          [
            "NC",
            "-",
            "-",
            "",
            ""
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J8-CABLE",
        "pitch": 2.54,
        "rows": 1,
        "note": "Off-board DC barrel cable termination: C center positive, S return shell. This is a cable landing, not the manufacturer barrel-socket footprint.",
        "visual": null,
        "pins": [
          [
            "DC12V_IN",
            "-",
            "-",
            "12V",
            "DC adapter positive contact."
          ],
          [
            "GND",
            "-",
            "-",
            "",
            ""
          ]
        ],
        "numbers": [
          "C",
          "S"
        ]
      },
      {
        "name": "J19",
        "pitch": 2.54,
        "rows": 1,
        "note": "Two-contact status/mode strap, schematic sheet5. Observe the fitted1 k resistor.",
        "visual": null,
        "pins": [
          [
            "DONE",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J20",
        "pitch": 2.54,
        "rows": 1,
        "note": "Two-contact status/mode strap, schematic sheet5. Observe the fitted1 k resistor.",
        "visual": null,
        "pins": [
          [
            "MODE0",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J21",
        "pitch": 2.54,
        "rows": 1,
        "note": "Two-contact status/mode strap, schematic sheet5. Observe the fitted1 k resistor.",
        "visual": null,
        "pins": [
          [
            "READY",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      },
      {
        "name": "J22",
        "pitch": 2.54,
        "rows": 1,
        "note": "Two-contact status/mode strap, schematic sheet5. Observe the fitted1 k resistor.",
        "visual": null,
        "pins": [
          [
            "MODE1",
            "-",
            "-",
            "",
            ""
          ],
          [
            "DVCC3P3",
            "-",
            "-",
            "",
            ""
          ]
        ]
      }
    ],
    "ports": [
      [
        "usb",
        -2,
        42,
        18,
        12,
        "USB"
      ],
      [
        "usb",
        -2,
        75,
        18,
        12,
        "DBG"
      ],
      [
        "socket",
        277,
        54,
        25,
        19,
        "12V"
      ],
      [
        "socket",
        277,
        115,
        25,
        18,
        "HDMI"
      ],
      [
        "ribbon",
        105,
        -1,
        65,
        9,
        "MIPI"
      ],
      [
        "socket",
        20,
        16,
        42,
        12,
        "MODE"
      ]
    ],
    "aspect": "landscape",
    "extra": "25k"
  }
];

export default boards;
