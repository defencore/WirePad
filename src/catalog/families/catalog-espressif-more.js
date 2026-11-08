import { defineFamily } from "../registry.js";
import { chip, circle, label, path, rect, smd, tactile } from "../shared/svg.js";
import { breadboardHeaderMounting } from "../shared/breadboard-mounting.js";

// Header order and terminal numbers are from the linked Espressif guides and drawings.
const boards = [
  {
    "id": "esp32-devkitc-v4-wroom-32e",
    "name": "ESP32-DevKitC V4",
    "module": "ESP32-WROOM-32E",
    "subtitle": "V4 / Wi-Fi + BLE",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/esp32-devkitc/user_guide.html",
    "body": [
      27.94,
      48.26
    ],
    "row": 25.4,
    "first": 1.27,
    "moduleWidth": 18,
    "antenna": 6.04,
    "style": "classic",
    "model": "https://dl.espressif.com/dl/schematics/esp32_devkitc_v4_dimensions.dxf",
    "banks": [
      [
        [
          "j2-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J2.1"
        ],
        [
          "j2-2",
          "EN",
          "CHIP_PU, Reset.",
          "input",
          "J2.2"
        ],
        [
          "j2-3",
          "VP",
          "GPIO36, ADC1_CH0, S_VP.",
          "input",
          "J2.3"
        ],
        [
          "j2-4",
          "VN",
          "GPIO39, ADC1_CH3, S_VN.",
          "input",
          "J2.4"
        ],
        [
          "j2-5",
          "IO34",
          "GPIO34, ADC1_CH6, VDET_1.",
          "input",
          "J2.5"
        ],
        [
          "j2-6",
          "IO35",
          "GPIO35, ADC1_CH7, VDET_2.",
          "input",
          "J2.6"
        ],
        [
          "j2-7",
          "IO32",
          "3.3 V logic; GPIO32, ADC1_CH4, TOUCH_CH9, XTAL_32K_P.",
          "bidirectional",
          "J2.7"
        ],
        [
          "j2-8",
          "IO33",
          "3.3 V logic; GPIO33, ADC1_CH5, TOUCH_CH8, XTAL_32K_N.",
          "bidirectional",
          "J2.8"
        ],
        [
          "j2-9",
          "IO25",
          "3.3 V logic; GPIO25, ADC2_CH8, DAC_1.",
          "bidirectional",
          "J2.9"
        ],
        [
          "j2-10",
          "IO26",
          "3.3 V logic; GPIO26, ADC2_CH9, DAC_2.",
          "bidirectional",
          "J2.10"
        ],
        [
          "j2-11",
          "IO27",
          "3.3 V logic; GPIO27, ADC2_CH7, TOUCH_CH7.",
          "bidirectional",
          "J2.11"
        ],
        [
          "j2-12",
          "IO14",
          "3.3 V logic; GPIO14, ADC2_CH6, TOUCH_CH6, MTMS.",
          "bidirectional",
          "J2.12"
        ],
        [
          "j2-13",
          "IO12",
          "3.3 V logic; GPIO12, ADC2_CH5, TOUCH_CH5, MTDI; boot strapping pin.",
          "bidirectional",
          "J2.13"
        ],
        [
          "j2-14",
          "GND",
          "Ground.",
          "power_in",
          "J2.14"
        ],
        [
          "j2-15",
          "IO13",
          "3.3 V logic; GPIO13, ADC2_CH4, TOUCH_CH4, MTCK.",
          "bidirectional",
          "J2.15"
        ],
        [
          "j2-16",
          "D2",
          "GPIO9, D2; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J2.16"
        ],
        [
          "j2-17",
          "D3",
          "GPIO10, D3; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J2.17"
        ],
        [
          "j2-18",
          "CMD",
          "GPIO11, CMD; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J2.18"
        ],
        [
          "j2-19",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J2.19"
        ]
      ],
      [
        [
          "j3-1",
          "GND",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "IO23",
          "3.3 V logic; GPIO23.",
          "bidirectional",
          "J3.2"
        ],
        [
          "j3-3",
          "IO22",
          "3.3 V logic; GPIO22.",
          "bidirectional",
          "J3.3"
        ],
        [
          "j3-4",
          "TX",
          "3.3 V logic; GPIO1, U0TXD.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "RX",
          "3.3 V logic; GPIO3, U0RXD.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "IO21",
          "3.3 V logic; GPIO21.",
          "bidirectional",
          "J3.6"
        ],
        [
          "j3-7",
          "GND",
          "Ground.",
          "power_in",
          "J3.7"
        ],
        [
          "j3-8",
          "IO19",
          "3.3 V logic; GPIO19.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "IO18",
          "3.3 V logic; GPIO18.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "IO5",
          "3.3 V logic; GPIO5; boot strapping pin.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "IO17",
          "3.3 V logic; GPIO17.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "IO16",
          "3.3 V logic; GPIO16.",
          "bidirectional",
          "J3.12"
        ],
        [
          "j3-13",
          "IO4",
          "3.3 V logic; GPIO4, ADC2_CH0, TOUCH_CH0.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "IO0",
          "3.3 V logic; GPIO0, ADC2_CH1, TOUCH_CH1, Boot; boot strapping pin.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "IO2",
          "3.3 V logic; GPIO2, ADC2_CH2, TOUCH_CH2; boot strapping pin.",
          "bidirectional",
          "J3.15"
        ],
        [
          "j3-16",
          "IO15",
          "3.3 V logic; GPIO15, ADC2_CH3, TOUCH_CH3, MTDO; boot strapping pin.",
          "bidirectional",
          "J3.16"
        ],
        [
          "j3-17",
          "D1",
          "GPIO8, D1; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J3.17"
        ],
        [
          "j3-18",
          "D0",
          "GPIO7, D0; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J3.18"
        ],
        [
          "j3-19",
          "CLK",
          "GPIO6, CLK; reserved for internal SPI flash, do not use as GPIO.",
          "passive",
          "J3.19"
        ]
      ]
    ],
    "note": "WROOM-32E PCB-antenna assembly. GPIO6–11 are reserved for the module flash. GPIO34–39 are input-only."
  },
  {
    "id": "esp32-c3-devkitc-02",
    "name": "ESP32-C3-DevKitC-02",
    "module": "ESP32-C3-WROOM-02",
    "subtitle": "V1.1 / Wi-Fi + BLE",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c3/esp32-c3-devkitc-02/user_guide.html",
    "body": [
      25.4,
      38.91
    ],
    "row": 22.86,
    "first": 1.675,
    "moduleWidth": 18,
    "antenna": 6,
    "style": "classic",
    "model": "https://dl.espressif.com/dl/schematics/DXF_ESP32-C3-DevKitC-02_V1_1_20210121AA.dxf",
    "banks": [
      [
        [
          "j1-1",
          "G",
          "Ground.",
          "power_in",
          "J1.1"
        ],
        [
          "j1-2",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.2"
        ],
        [
          "j1-3",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.3"
        ],
        [
          "j1-4",
          "RST",
          "CHIP_PU.",
          "input",
          "J1.4"
        ],
        [
          "j1-5",
          "G",
          "Ground.",
          "power_in",
          "J1.5"
        ],
        [
          "j1-6",
          "4",
          "3.3 V logic; GPIO4, ADC1_CH4, FSPIHD, MTMS.",
          "bidirectional",
          "J1.6"
        ],
        [
          "j1-7",
          "5",
          "3.3 V logic; GPIO5, ADC2_CH0, FSPIWP, MTDI.",
          "bidirectional",
          "J1.7"
        ],
        [
          "j1-8",
          "6",
          "3.3 V logic; GPIO6, FSPICLK, MTCK.",
          "bidirectional",
          "J1.8"
        ],
        [
          "j1-9",
          "7",
          "3.3 V logic; GPIO7, FSPID, MTDO.",
          "bidirectional",
          "J1.9"
        ],
        [
          "j1-10",
          "G",
          "Ground.",
          "power_in",
          "J1.10"
        ],
        [
          "j1-11",
          "8",
          "3.3 V logic; GPIO8, RGB LED; boot strapping pin.",
          "bidirectional",
          "J1.11"
        ],
        [
          "j1-12",
          "9",
          "3.3 V logic; GPIO9; boot strapping pin.",
          "bidirectional",
          "J1.12"
        ],
        [
          "j1-13",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.13"
        ],
        [
          "j1-14",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.14"
        ],
        [
          "j1-15",
          "G",
          "Ground.",
          "power_in",
          "J1.15"
        ]
      ],
      [
        [
          "j3-1",
          "G",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "0",
          "3.3 V logic; GPIO0, ADC1_CH0, XTAL_32K_P.",
          "bidirectional",
          "J3.2"
        ],
        [
          "j3-3",
          "1",
          "3.3 V logic; GPIO1, ADC1_CH1, XTAL_32K_N.",
          "bidirectional",
          "J3.3"
        ],
        [
          "j3-4",
          "2",
          "3.3 V logic; GPIO2, ADC1_CH2, FSPIQ; boot strapping pin.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "3",
          "3.3 V logic; GPIO3, ADC1_CH3.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "G",
          "Ground.",
          "power_in",
          "J3.6"
        ],
        [
          "j3-7",
          "10",
          "3.3 V logic; GPIO10, FSPICS0.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "G",
          "Ground.",
          "power_in",
          "J3.8"
        ],
        [
          "j3-9",
          "RX",
          "3.3 V logic; GPIO20, U0RXD.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "TX",
          "3.3 V logic; GPIO21, U0TXD.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "G",
          "Ground.",
          "power_in",
          "J3.11"
        ],
        [
          "j3-12",
          "18",
          "3.3 V logic; GPIO18, USB_D-.",
          "bidirectional",
          "J3.12"
        ],
        [
          "j3-13",
          "19",
          "3.3 V logic; GPIO19, USB_D+.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "G",
          "Ground.",
          "power_in",
          "J3.14"
        ],
        [
          "j3-15",
          "G",
          "Ground.",
          "power_in",
          "J3.15"
        ]
      ]
    ],
    "note": "WROOM-02 PCB-antenna assembly with 4 MB flash, Micro-B USB-UART bridge and GPIO8 RGB LED."
  },
  {
    "id": "esp32-c6-devkitm-1",
    "name": "ESP32-C6-DevKitM-1",
    "module": "ESP32-C6-MINI-1",
    "subtitle": "V1 / Wi-Fi 6 + 802.15.4",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitm-1/user_guide.html",
    "body": [
      25.4,
      48.26
    ],
    "row": 22.86,
    "first": 1.575,
    "moduleWidth": 13.2,
    "antenna": 5.37,
    "style": "dual",
    "model": "https://dl.espressif.com/dl/schematics/esp32-c6-devkitm-1-dimensions.dxf",
    "banks": [
      [
        [
          "j1-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.1"
        ],
        [
          "j1-2",
          "RST",
          "High: Power up; Low: Power down.",
          "input",
          "J1.2"
        ],
        [
          "j1-3",
          "2",
          "3.3 V logic; GPIO2, LP_GPIO2, LP_UART_RTSN, ADC1_CH2, FSPIQ.",
          "bidirectional",
          "J1.3"
        ],
        [
          "j1-4",
          "3",
          "3.3 V logic; GPIO3, LP_GPIO3, LP_UART_CTSN, ADC1_CH3.",
          "bidirectional",
          "J1.4"
        ],
        [
          "j1-5",
          "4",
          "3.3 V logic; MTMS, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH4, FSPIHD; boot strapping pin.",
          "bidirectional",
          "J1.5"
        ],
        [
          "j1-6",
          "5",
          "3.3 V logic; MTDI, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH5, FSPIWP; boot strapping pin.",
          "bidirectional",
          "J1.6"
        ],
        [
          "j1-7",
          "0/N",
          "3.3 V logic; GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN, ADC1_CH0; GPIO route depends on the 32 kHz crystal population.",
          "bidirectional",
          "J1.7"
        ],
        [
          "j1-8",
          "1/N",
          "3.3 V logic; GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH1; GPIO route depends on the 32 kHz crystal population.",
          "bidirectional",
          "J1.8"
        ],
        [
          "j1-9",
          "8",
          "3.3 V logic; GPIO8; boot strapping pin.",
          "bidirectional",
          "J1.9"
        ],
        [
          "j1-10",
          "6",
          "3.3 V logic; MTCK, GPIO6, LP_GPIO6, LP_I2C_SDA, ADC1_CH6, FSPICLK.",
          "bidirectional",
          "J1.10"
        ],
        [
          "j1-11",
          "7",
          "3.3 V logic; MTDO, GPIO7, LP_GPIO7, LP_I2C_SCL, FSPID.",
          "bidirectional",
          "J1.11"
        ],
        [
          "j1-12",
          "14",
          "3.3 V logic; GPIO14.",
          "bidirectional",
          "J1.12"
        ],
        [
          "j1-13",
          "G",
          "Ground.",
          "power_in",
          "J1.13"
        ],
        [
          "j1-14",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.14"
        ],
        [
          "j1-15",
          "G",
          "Ground.",
          "power_in",
          "J1.15"
        ]
      ],
      [
        [
          "j3-1",
          "G",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "TX",
          "3.3 V logic; U0TXD, GPIO16, FSPICS0.",
          "bidirectional",
          "J3.2"
        ],
        [
          "j3-3",
          "RX",
          "3.3 V logic; U0RXD, GPIO17, FSPICS1.",
          "bidirectional",
          "J3.3"
        ],
        [
          "j3-4",
          "23",
          "3.3 V logic; GPIO23, SDIO_DATA3.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "22",
          "3.3 V logic; GPIO22, SDIO_DATA2.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "21",
          "3.3 V logic; GPIO21, SDIO_DATA1, FSPICS5.",
          "bidirectional",
          "J3.6"
        ],
        [
          "j3-7",
          "20",
          "3.3 V logic; GPIO20, SDIO_DATA0, FSPICS4.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "19",
          "3.3 V logic; GPIO19, SDIO_CLK, FSPICS3.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "18",
          "3.3 V logic; GPIO18, SDIO_CMD, FSPICS2.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "15",
          "3.3 V logic; GPIO15; boot strapping pin.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "9",
          "3.3 V logic; GPIO9; boot strapping pin.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "G",
          "Ground.",
          "power_in",
          "J3.12"
        ],
        [
          "j3-13",
          "13",
          "3.3 V logic; GPIO13, USB_D+.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "12",
          "3.3 V logic; GPIO12, USB_D-.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "G",
          "Ground.",
          "power_in",
          "J3.15"
        ]
      ]
    ],
    "jumper": [
      4.8,
      19.5
    ],
    "note": "MINI-1-N4 PCB-antenna assembly with 4 MB flash, two USB-C ports and GPIO8 RGB LED. GPIO0/1 routes depend on the optional 32 kHz oscillator population."
  },
  {
    "id": "esp32-s2-saola-1-v1-2",
    "name": "ESP32-S2-Saola-1",
    "module": "ESP32-S2-WROVER",
    "subtitle": "V1.2 / 4 MB flash + 2 MB PSRAM",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s2/esp32-s2-saola-1/user_guide_v1.2.html",
    "body": [
      27.9,
      53.9
    ],
    "row": 25.4,
    "first": 1.55,
    "moduleWidth": 18,
    "antenna": 6.3,
    "style": "s2",
    "model": "https://dl.espressif.com/dl/schematics/ESP32-S2-Saola-1_V1.2_Dimensions.pdf",
    "banks": [
      [
        [
          "j2-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J2.1"
        ],
        [
          "j2-2",
          "IO0",
          "3.3 V logic; GPIO0, Boot; boot strapping pin.",
          "bidirectional",
          "J2.2"
        ],
        [
          "j2-3",
          "IO1",
          "3.3 V logic; GPIO1, ADC1_CH0, TOUCH_CH1.",
          "bidirectional",
          "J2.3"
        ],
        [
          "j2-4",
          "IO2",
          "3.3 V logic; GPIO2, ADC1_CH1, TOUCH_CH2.",
          "bidirectional",
          "J2.4"
        ],
        [
          "j2-5",
          "IO3",
          "3.3 V logic; GPIO3, ADC1_CH2, TOUCH_CH3.",
          "bidirectional",
          "J2.5"
        ],
        [
          "j2-6",
          "IO4",
          "3.3 V logic; GPIO4, ADC1_CH3, TOUCH_CH4.",
          "bidirectional",
          "J2.6"
        ],
        [
          "j2-7",
          "IO5",
          "3.3 V logic; GPIO5, ADC1_CH4, TOUCH_CH5.",
          "bidirectional",
          "J2.7"
        ],
        [
          "j2-8",
          "IO6",
          "3.3 V logic; GPIO6, ADC1_CH5, TOUCH_CH6.",
          "bidirectional",
          "J2.8"
        ],
        [
          "j2-9",
          "IO7",
          "3.3 V logic; GPIO7, ADC1_CH6, TOUCH_CH7.",
          "bidirectional",
          "J2.9"
        ],
        [
          "j2-10",
          "IO8",
          "3.3 V logic; GPIO8, ADC1_CH7, TOUCH_CH8.",
          "bidirectional",
          "J2.10"
        ],
        [
          "j2-11",
          "IO9",
          "3.3 V logic; GPIO9, ADC1_CH8, TOUCH_CH9.",
          "bidirectional",
          "J2.11"
        ],
        [
          "j2-12",
          "IO10",
          "3.3 V logic; GPIO10, ADC1_CH9, TOUCH_CH10.",
          "bidirectional",
          "J2.12"
        ],
        [
          "j2-13",
          "IO11",
          "3.3 V logic; GPIO11, ADC2_CH0, TOUCH_CH11.",
          "bidirectional",
          "J2.13"
        ],
        [
          "j2-14",
          "IO12",
          "3.3 V logic; GPIO12, ADC2_CH1, TOUCH_CH12.",
          "bidirectional",
          "J2.14"
        ],
        [
          "j2-15",
          "IO13",
          "3.3 V logic; GPIO13, ADC2_CH2, TOUCH_CH13.",
          "bidirectional",
          "J2.15"
        ],
        [
          "j2-16",
          "IO14",
          "3.3 V logic; GPIO14, ADC2_CH3, TOUCH_CH14.",
          "bidirectional",
          "J2.16"
        ],
        [
          "j2-17",
          "IO15",
          "3.3 V logic; GPIO15, ADC2_CH4, XTAL_32K_P.",
          "bidirectional",
          "J2.17"
        ],
        [
          "j2-18",
          "IO16",
          "3.3 V logic; GPIO16, ADC2_CH5, XTAL_32K_N.",
          "bidirectional",
          "J2.18"
        ],
        [
          "j2-19",
          "IO17",
          "3.3 V logic; GPIO17, ADC2_CH6, DAC_1.",
          "bidirectional",
          "J2.19"
        ],
        [
          "j2-20",
          "5V0",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J2.20"
        ],
        [
          "j2-21",
          "GND",
          "Ground.",
          "power_in",
          "J2.21"
        ]
      ],
      [
        [
          "j3-1",
          "GND",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "RST",
          "CHIP_PU, Reset.",
          "input",
          "J3.2"
        ],
        [
          "j3-3",
          "IO46",
          "GPIO46; boot strapping pin.",
          "input",
          "J3.3"
        ],
        [
          "j3-4",
          "IO45",
          "3.3 V logic; GPIO45; boot strapping pin.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "IO44",
          "3.3 V logic; GPIO44, U0RXD.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "IO43",
          "3.3 V logic; GPIO43, U0TXD.",
          "bidirectional",
          "J3.6"
        ],
        [
          "j3-7",
          "IO42",
          "3.3 V logic; GPIO42, MTMS.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "IO41",
          "3.3 V logic; GPIO41, MTDI.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "IO40",
          "3.3 V logic; GPIO40, MTDO.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "IO39",
          "3.3 V logic; GPIO39, MTCK.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "IO38",
          "3.3 V logic; GPIO38.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "IO37",
          "3.3 V logic; GPIO37.",
          "bidirectional",
          "J3.12"
        ],
        [
          "j3-13",
          "IO36",
          "3.3 V logic; GPIO36.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "IO35",
          "3.3 V logic; GPIO35.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "IO34",
          "3.3 V logic; GPIO34.",
          "bidirectional",
          "J3.15"
        ],
        [
          "j3-16",
          "IO33",
          "3.3 V logic; GPIO33.",
          "bidirectional",
          "J3.16"
        ],
        [
          "j3-17",
          "IO26",
          "3.3 V logic; GPIO26.",
          "bidirectional",
          "J3.17"
        ],
        [
          "j3-18",
          "IO21",
          "3.3 V logic; GPIO21.",
          "bidirectional",
          "J3.18"
        ],
        [
          "j3-19",
          "IO20",
          "3.3 V logic; GPIO20, ADC2_CH9, USB_D+.",
          "bidirectional",
          "J3.19"
        ],
        [
          "j3-20",
          "IO19",
          "3.3 V logic; GPIO19, ADC2_CH8, USB_D-.",
          "bidirectional",
          "J3.20"
        ],
        [
          "j3-21",
          "IO18",
          "3.3 V logic; GPIO18, ADC2_CH7, DAC_2, RGB LED.",
          "bidirectional",
          "J3.21"
        ]
      ]
    ],
    "note": "V1.2 WROVER assembly with 4 MB flash and 2 MB PSRAM. GPIO18 drives the RGB LED. J3.15/16/17 follow the schematic and physical drawing, correcting duplicated terminal numbers in the HTML table."
  },
  {
    "id": "esp32-s2-devkitm-1",
    "name": "ESP32-S2-DevKitM-1",
    "module": "ESP32-S2-MINI-1",
    "subtitle": "V1 / Wi-Fi + native USB",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s2/esp32-s2-devkitm-1/user_guide.html",
    "body": [
      25.4,
      54
    ],
    "row": 22.86,
    "first": 1.6,
    "moduleWidth": 15.4,
    "antenna": 4.6,
    "style": "s2mini",
    "model": "https://dl.espressif.com/dl/schematics/ESP32-S2-DevKitM-1_V1_Dimensions.pdf",
    "banks": [
      [
        [
          "j1-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.1"
        ],
        [
          "j1-2",
          "0",
          "3.3 V logic; RTC_GPIO0, GPIO0; boot strapping pin.",
          "bidirectional",
          "J1.2"
        ],
        [
          "j1-3",
          "1",
          "3.3 V logic; RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0.",
          "bidirectional",
          "J1.3"
        ],
        [
          "j1-4",
          "2",
          "3.3 V logic; RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1.",
          "bidirectional",
          "J1.4"
        ],
        [
          "j1-5",
          "3",
          "3.3 V logic; RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2.",
          "bidirectional",
          "J1.5"
        ],
        [
          "j1-6",
          "4",
          "3.3 V logic; RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3.",
          "bidirectional",
          "J1.6"
        ],
        [
          "j1-7",
          "5",
          "3.3 V logic; RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4.",
          "bidirectional",
          "J1.7"
        ],
        [
          "j1-8",
          "6",
          "3.3 V logic; RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5.",
          "bidirectional",
          "J1.8"
        ],
        [
          "j1-9",
          "7",
          "3.3 V logic; RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6.",
          "bidirectional",
          "J1.9"
        ],
        [
          "j1-10",
          "8",
          "3.3 V logic; RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7.",
          "bidirectional",
          "J1.10"
        ],
        [
          "j1-11",
          "9",
          "3.3 V logic; RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD.",
          "bidirectional",
          "J1.11"
        ],
        [
          "j1-12",
          "10",
          "3.3 V logic; RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICS0, FSPIIO4.",
          "bidirectional",
          "J1.12"
        ],
        [
          "j1-13",
          "11",
          "3.3 V logic; RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPIIO5.",
          "bidirectional",
          "J1.13"
        ],
        [
          "j1-14",
          "12",
          "3.3 V logic; RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6.",
          "bidirectional",
          "J1.14"
        ],
        [
          "j1-15",
          "13",
          "3.3 V logic; RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7.",
          "bidirectional",
          "J1.15"
        ],
        [
          "j1-16",
          "14",
          "3.3 V logic; RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS.",
          "bidirectional",
          "J1.16"
        ],
        [
          "j1-17",
          "15",
          "3.3 V logic; RTC_GPIO15, GPIO15, U0RTS, ADC2_CH4, XTAL_32K_P.",
          "bidirectional",
          "J1.17"
        ],
        [
          "j1-18",
          "16",
          "3.3 V logic; RTC_GPIO16, GPIO16, U0CTS, ADC2_CH5, XTAL_32K_N.",
          "bidirectional",
          "J1.18"
        ],
        [
          "j1-19",
          "17",
          "3.3 V logic; RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1.",
          "bidirectional",
          "J1.19"
        ],
        [
          "j1-20",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.20"
        ],
        [
          "j1-21",
          "G",
          "Ground.",
          "power_in",
          "J1.21"
        ]
      ],
      [
        [
          "j3-1",
          "G",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "RST",
          "CHIP_PU.",
          "input",
          "J3.2"
        ],
        [
          "j3-3",
          "46",
          "GPIO46; boot strapping pin.",
          "input",
          "J3.3"
        ],
        [
          "j3-4",
          "45",
          "3.3 V logic; GPIO45; boot strapping pin.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "RX",
          "3.3 V logic; U0RXD, GPIO44, CLK_OUT2.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "TX",
          "3.3 V logic; U0TXD, GPIO43, CLK_OUT1.",
          "bidirectional",
          "J3.6"
        ],
        [
          "j3-7",
          "42",
          "3.3 V logic; MTMS, GPIO42.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "41",
          "3.3 V logic; MTDI, GPIO41, CLK_OUT1.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "40",
          "3.3 V logic; MTDO, GPIO40, CLK_OUT2.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "39",
          "3.3 V logic; MTCK, GPIO39, CLK_OUT3.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "38",
          "3.3 V logic; GPIO38, FSPIWP.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "37",
          "3.3 V logic; SPIDQS, GPIO37, FSPIQ.",
          "bidirectional",
          "J3.12"
        ],
        [
          "j3-13",
          "36",
          "3.3 V logic; SPIIO7, GPIO36, FSPICLK.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "35",
          "3.3 V logic; SPIIO6, GPIO35, FSPID.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "34",
          "3.3 V logic; SPIIO5, GPIO34, FSPICS0.",
          "bidirectional",
          "J3.15"
        ],
        [
          "j3-16",
          "33",
          "3.3 V logic; SPIIO4, GPIO33, FSPIHD.",
          "bidirectional",
          "J3.16"
        ],
        [
          "j3-17",
          "26",
          "3.3 V logic; SPICS1, GPIO26.",
          "bidirectional",
          "J3.17"
        ],
        [
          "j3-18",
          "21",
          "3.3 V logic; RTC_GPIO21, GPIO21.",
          "bidirectional",
          "J3.18"
        ],
        [
          "j3-19",
          "20",
          "3.3 V logic; RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+.",
          "bidirectional",
          "J3.19"
        ],
        [
          "j3-20",
          "19",
          "3.3 V logic; RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-.",
          "bidirectional",
          "J3.20"
        ],
        [
          "j3-21",
          "18",
          "3.3 V logic; RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3, RGB LED.",
          "bidirectional",
          "J3.21"
        ]
      ]
    ],
    "note": "V1 MINI-1 PCB-antenna assembly. GPIO18 drives the RGB LED. Micro-B uses the UART bridge; GPIO19/20 expose native USB. GPIO46 is input-only."
  },
  {
    "id": "esp32-c5-devkitc-1-v1-2",
    "name": "ESP32-C5-DevKitC-1",
    "module": "ESP32-C5-WROOM-1",
    "subtitle": "V1.2 / dual-band Wi-Fi 6",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c5/esp32-c5-devkitc-1/user_guide.html",
    "body": [
      25.4,
      53.6
    ],
    "row": 22.86,
    "first": 1.575,
    "moduleWidth": 18,
    "antenna": 6.5,
    "style": "dual",
    "model": "https://dl.espressif.com/dl/schematics/Dimension_esp32-c5-devkitc-1_v1.2_20250509.dxf",
    "banks": [
      [
        [
          "j1-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.1"
        ],
        [
          "j1-2",
          "RST",
          "High: enables the chip; Low: disables the chip.",
          "input",
          "J1.2"
        ],
        [
          "j1-3",
          "2",
          "3.3 V logic; MTMS, GPIO2, LP_GPIO2, LP_UART_RTSN, LP_I2C_SDA, ADC1_CH1, FSPIQ; boot strapping pin.",
          "bidirectional",
          "J1.3"
        ],
        [
          "j1-4",
          "3",
          "3.3 V logic; MTDI, GPIO3, LP_GPIO3, LP_UART_CTSN, LP_I2C_SCL, ADC1_CH2; boot strapping pin.",
          "bidirectional",
          "J1.4"
        ],
        [
          "j1-5",
          "0",
          "3.3 V logic; GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN.",
          "bidirectional",
          "J1.5"
        ],
        [
          "j1-6",
          "1",
          "3.3 V logic; GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH0.",
          "bidirectional",
          "J1.6"
        ],
        [
          "j1-7",
          "6",
          "3.3 V logic; GPIO6, LP_GPIO6, ADC1_CH5, FSPICLK.",
          "bidirectional",
          "J1.7"
        ],
        [
          "j1-8",
          "7",
          "3.3 V logic; GPIO7, FSPID, SDIO_DATA1; boot strapping pin.",
          "bidirectional",
          "J1.8"
        ],
        [
          "j1-9",
          "8",
          "3.3 V logic; GPIO8, PAD_COMP0, SDIO_DATA0.",
          "bidirectional",
          "J1.9"
        ],
        [
          "j1-10",
          "9",
          "3.3 V logic; GPIO9, PAD_COMP1, SDIO_CLK.",
          "bidirectional",
          "J1.10"
        ],
        [
          "j1-11",
          "10",
          "3.3 V logic; GPIO10, FSPICS0, SDIO_CMD.",
          "bidirectional",
          "J1.11"
        ],
        [
          "j1-12",
          "26",
          "3.3 V logic; GPIO26; boot strapping pin.",
          "bidirectional",
          "J1.12"
        ],
        [
          "j1-13",
          "25",
          "3.3 V logic; GPIO25; boot strapping pin.",
          "bidirectional",
          "J1.13"
        ],
        [
          "j1-14",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.14"
        ],
        [
          "j1-15",
          "G",
          "Ground.",
          "power_in",
          "J1.15"
        ],
        [
          "j1-16",
          "NC",
          "No connection.",
          "no_connect",
          "J1.16"
        ]
      ],
      [
        [
          "j3-1",
          "G",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "TX",
          "3.3 V logic; U0TXD, GPIO11.",
          "bidirectional",
          "J3.2"
        ],
        [
          "j3-3",
          "RX",
          "3.3 V logic; U0RXD, GPIO12.",
          "bidirectional",
          "J3.3"
        ],
        [
          "j3-4",
          "24",
          "3.3 V logic; GPIO24.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "23",
          "3.3 V logic; GPIO23.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "NC/15",
          "Reserved for the fitted PSRAM assembly. Do not use as GPIO.",
          "no_connect",
          "J3.6"
        ],
        [
          "j3-7",
          "27",
          "3.3 V logic; GPIO27; boot strapping pin.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "4",
          "3.3 V logic; MTCK, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH3, FSPIHD.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "5",
          "3.3 V logic; MTDO, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH4, FSPIWP.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "NC",
          "No connection.",
          "no_connect",
          "J3.10"
        ],
        [
          "j3-11",
          "28",
          "3.3 V logic; GPIO28; boot strapping pin.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "G",
          "Ground.",
          "power_in",
          "J3.12"
        ],
        [
          "j3-13",
          "14",
          "3.3 V logic; GPIO14, USB_D+, SDIO_DATA2.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "13",
          "3.3 V logic; GPIO13, USB_D-, SDIO_DATA3.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "G",
          "Ground.",
          "power_in",
          "J3.15"
        ],
        [
          "j3-16",
          "NC",
          "No connection.",
          "no_connect",
          "J3.16"
        ]
      ]
    ],
    "jumper": [
      4.8,
      24.7
    ],
    "note": "V1.2 N8R8 assembly with 8 MB flash and 8 MB PSRAM, DC-DC supply and GPIO27 RGB LED. J3.6 is reserved for PSRAM, not available GPIO15."
  },
  {
    "id": "esp32-c61-devkitc-1-v2",
    "name": "ESP32-C61-DevKitC-1",
    "module": "ESP32-C61-WROOM-1",
    "subtitle": "V2.0 / Wi-Fi 6 + BLE",
    "source": "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c61/esp32-c61-devkitc-1/user_guide.html",
    "body": [
      27.94,
      51.8
    ],
    "row": 25.4,
    "first": 1.575,
    "moduleWidth": 18,
    "antenna": 6.35,
    "style": "dual",
    "model": "https://dl.espressif.com/dl/schematics/ESP32-C61-DevKitC-1-dimensions_v2.0.dxf",
    "banks": [
      [
        [
          "j1-1",
          "3V3",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.1"
        ],
        [
          "j1-2",
          "RST",
          "High: enables the chip; Low: disables the chip.",
          "input",
          "J1.2"
        ],
        [
          "j1-3",
          "4",
          "3.3 V logic; MTDI, GPIO4, LP_GPIO4, ADC1_CH2, FSPIWP.",
          "bidirectional",
          "J1.3"
        ],
        [
          "j1-4",
          "5",
          "3.3 V logic; MTCK, GPIO5, LP_GPIO5, ADC1_CH3.",
          "bidirectional",
          "J1.4"
        ],
        [
          "j1-5",
          "6",
          "3.3 V logic; MTDO, GPIO6, LP_GPIO6, FSPICLK.",
          "bidirectional",
          "J1.5"
        ],
        [
          "j1-6",
          "7",
          "3.3 V logic; GPIO7, FSPID; boot strapping pin.",
          "bidirectional",
          "J1.6"
        ],
        [
          "j1-7",
          "0",
          "3.3 V logic; GPIO0, XTAL_32K_P, LP_GPIO0.",
          "bidirectional",
          "J1.7"
        ],
        [
          "j1-8",
          "1",
          "3.3 V logic; GPIO1, XTAL_32K_N, LP_GPIO1, ADC1_CH0.",
          "bidirectional",
          "J1.8"
        ],
        [
          "j1-9",
          "8",
          "3.3 V logic; GPIO8, ZCD0, FSPICS0; boot strapping pin.",
          "bidirectional",
          "J1.9"
        ],
        [
          "j1-10",
          "29",
          "3.3 V logic; GPIO29.",
          "bidirectional",
          "J1.10"
        ],
        [
          "j1-11",
          "NC/14",
          "Reserved for the fitted PSRAM assembly. Do not use as GPIO.",
          "no_connect",
          "J1.11"
        ],
        [
          "j1-12",
          "2",
          "3.3 V logic; GPIO2, LP_GPIO2, FSPIQ.",
          "bidirectional",
          "J1.12"
        ],
        [
          "j1-13",
          "3",
          "3.3 V logic; MTMS, GPIO3, LP_GPIO3, ADC1_CH1, FSPIHD.",
          "bidirectional",
          "J1.13"
        ],
        [
          "j1-14",
          "5V",
          "Supply rail. Power from USB, 5V/GND, or 3V3/GND; use one supply path at a time.",
          "passive",
          "J1.14"
        ],
        [
          "j1-15",
          "G",
          "Ground.",
          "power_in",
          "J1.15"
        ],
        [
          "j1-16",
          "NC",
          "No connection.",
          "no_connect",
          "J1.16"
        ]
      ],
      [
        [
          "j3-1",
          "G",
          "Ground.",
          "power_in",
          "J3.1"
        ],
        [
          "j3-2",
          "TX",
          "3.3 V logic; U0TXD, GPIO11.",
          "bidirectional",
          "J3.2"
        ],
        [
          "j3-3",
          "RX",
          "3.3 V logic; U0RXD, GPIO10.",
          "bidirectional",
          "J3.3"
        ],
        [
          "j3-4",
          "24",
          "3.3 V logic; GPIO24.",
          "bidirectional",
          "J3.4"
        ],
        [
          "j3-5",
          "23",
          "3.3 V logic; GPIO23, SDIO_DATA3.",
          "bidirectional",
          "J3.5"
        ],
        [
          "j3-6",
          "22",
          "3.3 V logic; GPIO22, SDIO_DATA2.",
          "bidirectional",
          "J3.6"
        ],
        [
          "j3-7",
          "28",
          "3.3 V logic; GPIO28, SDIO_DATA1.",
          "bidirectional",
          "J3.7"
        ],
        [
          "j3-8",
          "27",
          "3.3 V logic; GPIO27, SDIO_DATA0.",
          "bidirectional",
          "J3.8"
        ],
        [
          "j3-9",
          "26",
          "3.3 V logic; GPIO26, SDIO_CLK.",
          "bidirectional",
          "J3.9"
        ],
        [
          "j3-10",
          "25",
          "3.3 V logic; GPIO25, SDIO_CMD.",
          "bidirectional",
          "J3.10"
        ],
        [
          "j3-11",
          "9",
          "3.3 V logic; GPIO9, ZCD1; boot strapping pin.",
          "bidirectional",
          "J3.11"
        ],
        [
          "j3-12",
          "G",
          "Ground.",
          "power_in",
          "J3.12"
        ],
        [
          "j3-13",
          "13",
          "3.3 V logic; GPIO13, USB_D+.",
          "bidirectional",
          "J3.13"
        ],
        [
          "j3-14",
          "12",
          "3.3 V logic; GPIO12, USB_D-.",
          "bidirectional",
          "J3.14"
        ],
        [
          "j3-15",
          "G",
          "Ground.",
          "power_in",
          "J3.15"
        ],
        [
          "j3-16",
          "NC",
          "No connection.",
          "no_connect",
          "J3.16"
        ]
      ]
    ],
    "jumper": [
      5.4,
      23.1
    ],
    "note": "V2.0 N8R2 assembly with 8 MB flash and 2 MB PSRAM. GPIO8 drives the RGB LED. J1.11 is reserved for PSRAM, not available GPIO14."
  }
];

const scale = 8;
const margin = 62;

function makeBoard(spec) {
  const [bw, bh] = spec.body;
  const width = margin * 2 + bw * scale;
  const pcbTop = 20 + spec.antenna * scale;
  const height = pcbTop + bh * scale + 18;
  const leftX = margin + (bw - spec.row) / 2 * scale;
  const rightX = leftX + spec.row * scale;
  const pins = spec.banks.flatMap((bank, side) => bank.map(([id, caption, description, type, number], i) => ({
    id, label: caption, description, type, number, surface: true,
    x: side ? rightX : leftX, y: pcbTop + (spec.first + i * 2.54) * scale,
  })));
  if (spec.jumper) {
    // The square contact is terminal 1, on the right in the component-side drawing.
    [2, 1].forEach((n, i) => pins.push({
      id: `j5-${n}`, label: `J5.${n}`, number: `J5.${n}`, type: "passive", surface: true,
      description: "Module-current measurement link. Remove the shunt and insert an ammeter across J5; refit the shunt for normal operation.",
      x: margin + (spec.jumper[0] + i * 2.54) * scale, y: pcbTop + spec.jumper[1] * scale,
    }));
  }
  const component = {
    id: spec.id, name: spec.name, shortName: spec.name.replace("ESP32-", ""), subtitle: spec.subtitle,
    manufacturer: "Espressif Systems", category: "Microcontrollers", referencePrefix: "U", art: spec.id,
    width, height, pins, contactLayout: "physical", source: spec.source,
    description: `${spec.note} GPIO and reset use 3.3 V logic. Component-side view, antenna at the top and USB at the bottom. Contact anchors coincide with the header holes.`,
    tags: ["espressif", "development board", "wifi", spec.module, spec.name, spec.subtitle],
  };
  const art = (_, labels) => {
    const cx = width / 2;
    const bottom = pcbTop + bh * scale;
    const moduleW = spec.moduleWidth * scale;
    const moduleH = moduleHMM(spec) * scale;
    const moduleBottom = pcbTop + moduleH;
    const antennaTop = pcbTop - spec.antenna * scale;
    const dual = spec.style === "dual";
    const usbY = bottom - 6 * scale;
    const buttonY = dual ? bottom - 12.8 * scale : bottom - 5.3 * scale;
    const captionMM = spec.style === "s2mini" ? 32 : spec.module === "ESP32-C6-MINI-1" ? 23 : spec.module === "ESP32-C61-WROOM-1" ? 28 : moduleHMM(spec) + 9;
    const captionY = pcbTop + captionMM * scale;
    let drawing = rect(margin, pcbTop, bw * scale, bh * scale, 5, "#292e30", "#647575") +
      rect(cx - moduleW / 2, antennaTop, moduleW, moduleH + spec.antenna * scale, 1, "#383e38", "#788579") +
      path(`M${cx - moduleW / 2 + 8} ${pcbTop - 6}v-${spec.antenna * scale - 12}h18v18h18v-18h18v18h18v-18h18`, "none", "#7e8970", 2) +
      rect(cx - moduleW / 2 + 2, pcbTop, moduleW - 4, moduleH, 2, "#bfc5be", "#e1e7e1") +
      label(cx, pcbTop + 16, "ESPRESSIF", 8, "#4e5c54") +
      label(cx, pcbTop + 32, spec.module.replace("ESP32-", ""), 8, "#4e5c54") +
      label(cx, pcbTop + moduleH - 16, spec.subtitle.split(" / ")[0], 7, "#647268");
    for (let y = pcbTop + 10; y < moduleBottom - 5; y += 9) {
      drawing += rect(cx - moduleW / 2 - 3, y, 4, 5, 0, "#c9ad64") + rect(cx + moduleW / 2 - 1, y, 4, 5, 0, "#c9ad64");
    }
    const regulatorY = moduleBottom + (spec.module === "ESP32-C6-MINI-1" ? 4 : 1.5) * scale;
    drawing += rect(cx + 7, regulatorY, 35, 30, 1, "#29322c", "#9da9a2") +
      rect(cx + 3, regulatorY + 4, 6, 22, 0, "#b3beb7") +
      [0, 1, 2].map(i => rect(cx + 42, regulatorY + i * 11, 10, 5, 0, "#bcc5be")).join("") +
      chip(cx + (dual ? 12 : -15), bottom - (dual ? 22 : 13) * scale, 27, 29, "UART", 5) +
      tactile(cx - 52, buttonY) + tactile(cx + 36, buttonY) +
      label(cx - 44, buttonY - 7, dual ? "RESET" : "BOOT", 6) + label(cx + 44, buttonY - 7, dual ? "BOOT" : "RST", 6) +
      label(cx, captionY, spec.name.replace("ESP32-", ""), 7, "#dce7df");
    const ledX = dual ? cx - 35 : cx - 40;
    const ledY = dual ? bottom - 22 * scale : spec.style === "s2" ? pcbTop + 40 * scale : spec.style === "s2mini" ? pcbTop + 28 * scale : moduleBottom + 24;
    drawing += spec.id === "esp32-devkitc-v4-wroom-32e"
      ? rect(cx + 45, pcbTop + 34 * scale, 8, 5, 1, "#b1513b")
      : rect(ledX - 6, ledY - 6, 12, 12, 1, "#edf0e3", "#91a093") + circle(ledX, ledY, 2, "#a4b387");
    [[cx - 25, regulatorY + 9], [cx - 25, regulatorY + 22], [cx + 30, bottom - 9 * scale]].forEach(([x, y]) => { drawing += smd(x, y); });
    const usb = (x, w) => rect(x, usbY, w, 6.5 * scale, dual ? 5 : 2, "#bec9c8", "#edf2ee") +
      rect(x + 4, bottom - 5, w - 8, 7, 2, "#263941", "#d7dfda");
    drawing += dual ? usb(cx - 10.4 * scale, 8.5 * scale) + usb(cx + 1.9 * scale, 8.5 * scale) +
      label(cx - 6.2 * scale, usbY - 7, "UART", 6) + label(cx + 6.2 * scale, usbY - 7, "USB", 6)
      : usb(cx - 3.8 * scale, 7.6 * scale);
    if (spec.jumper) {
      const jp = pins.filter(p => p.id.startsWith("j5-"));
      drawing += rect(jp[0].x - 8, jp[0].y - 8, 2.54 * scale + 16, 16, 1, "#172222", "#c7d1ca") +
        label((jp[0].x + jp[1].x) / 2, jp[0].y - 15, "J5", 7);
    }
    drawing += pins.map(pin => {
      const jumper = pin.id.startsWith("j5-");
      const left = pin.x < cx;
      const first = pin.number.endsWith(".1");
      const hole = (first ? rect(pin.x - 4.8, pin.y - 4.8, 9.6, 9.6, 0, "#e6bd6e") : circle(pin.x, pin.y, 4.8, "#d8b46c")) +
        circle(pin.x, pin.y, 2.5, "#171e21");
      const text = jumper ? label(pin.x, pin.y + 15, pin.number.slice(-1), 6) :
        label(pin.x + (left ? -10 : 10), pin.y, pin.label, 8, "#324a55", left ? "end" : "start");
      return hole + (labels ? text : "");
    }).join("");
    return drawing;
  };
  const footprint = {
    body: spec.body, color: "#292e30",
    groups: spec.banks.map((bank, side) => ({ ids: bank.map(p => p[0]), x: (side ? 1 : -1) * spec.row / 2, y: spec.first - bh / 2, axis: "y", pitch: 2.54 })),
    details: [[0, -bh / 2 + moduleHMM(spec) / 2, spec.moduleWidth, moduleHMM(spec), 2.8, "#bfc5be"]],
    note: `Reference carrier based on the linked Espressif mechanical drawing; ${spec.row} mm header spacing and 2.54 mm pitch. The antenna and USB overhang require clearance.${spec.jumper ? " Auxiliary J5 coordinates are approximate." : ""} Use the vendor CAD for manufacturing.`,
  };
  if (spec.jumper) footprint.groups.push({ ids: ["j5-2", "j5-1"], x: spec.jumper[0] - bw / 2, y: spec.jumper[1] - bh / 2, pitch: 2.54 });
  const bottom = pcbTop + bh * scale, cx = width / 2;
  // Physical material only: the PCB, its narrower antenna projection and the
  // USB shells. Pin captions and the outer canvas margins reserve no holes.
  const bodyRegions = [
    { x: margin, y: pcbTop, width: bw * scale, height: bh * scale },
    { x: cx - spec.moduleWidth * scale / 2, y: 20, width: spec.moduleWidth * scale, height: spec.antenna * scale },
    ...(spec.style === "dual" ? [-10.4, 1.9].map(x => ({ x: cx + x * scale, y: bottom - 6 * scale, width: 8.5 * scale, height: 6.5 * scale }))
      : [{ x: cx - 3.8 * scale, y: bottom - 6 * scale, width: 7.6 * scale, height: 6.5 * scale }]),
  ];
  return { component, art, footprint, bodyRegions, model: { label: "Espressif mechanical drawing / CAD", url: spec.model } };
}

function moduleHMM(spec) {
  return ({ "ESP32-WROOM-32E": 19.46, "ESP32-C3-WROOM-02": 14,
    "ESP32-C6-MINI-1": 11.23, "ESP32-S2-WROVER": 24.5,
    "ESP32-S2-MINI-1": 15.9, "ESP32-C5-WROOM-1": 21, "ESP32-C61-WROOM-1": 21 })[spec.module];
}

const entries = boards.map(makeBoard);
const espressifMoreComponents = entries.map(e => e.component);
const espressifMoreArt = Object.fromEntries(entries.map(e => [e.component.id, e.art]));
const espressifMoreFootprints = Object.fromEntries(entries.map(e => [e.component.id, e.footprint]));
const espressifMoreModels = Object.fromEntries(entries.map(e => [e.component.id, e.model]));

const reviewedInsertionDrawings = {
  "esp32-devkitc-v4-wroom-32e": "https://dl.espressif.com/dl/schematics/esp32_devkitc_v4_dimensions.pdf",
  "esp32-c3-devkitc-02": "https://dl.espressif.com/dl/schematics/DXF_ESP32-C3-DevKitC-02_V1_1_20210121AA.pdf",
  "esp32-c6-devkitm-1": "https://dl.espressif.com/dl/schematics/esp32-c6-devkitm-1-dimensions.pdf",
  "esp32-s2-devkitm-1": "https://dl.espressif.com/dl/schematics/ESP32-S2-DevKitM-1_V1_Dimensions.pdf",
  "esp32-s2-saola-1-v1-2": boards.find(board => board.id === "esp32-s2-saola-1-v1-2").model,
  "esp32-c5-devkitc-1-v1-2": boards.find(board => board.id === "esp32-c5-devkitc-1-v1-2").model,
  "esp32-c61-devkitc-1-v2": boards.find(board => board.id === "esp32-c61-devkitc-1-v2").model,
};
const espressifMoreMountings = Object.fromEntries(entries.filter(entry => reviewedInsertionDrawings[entry.component.id]).map(entry => [
  entry.component.id,
  breadboardHeaderMounting({ url: reviewedInsertionDrawings[entry.component.id], label: `Espressif ${entry.component.name} manufacturer mechanical drawing` },
    entry.footprint.groups.slice(0, 2),
    "Component side, antenna above. The two long edge headers use the drawing's insertion-hole centers. Auxiliary current-measurement jumpers and fitted USB connectors are not breadboard leads. Allow antenna and USB cable clearance.",
    { regions: entry.bodyRegions, evidence: "Canonical PCB rectangle, narrower antenna projection and USB-shell rectangles use makeBoard's exact rendering parameters. Outer label margins, caption space and decorative shadow are excluded." }),
]));

export default defineFamily("espressif-more", (espressifMoreComponents).map(component => ({ component, render: (espressifMoreArt)[component.art], footprint: (espressifMoreFootprints)[component.id], model: espressifMoreModels[component.id], mounting: espressifMoreMountings[component.id] })));
