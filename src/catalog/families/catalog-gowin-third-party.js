import { defineFamily } from "../registry.js";
import { miniComputingMounting } from "../shared/mini-computing-mounting.js";
import { trenzMounting } from "../shared/trenz-mounting.js";
import { circle, label, line, rect } from "../shared/svg.js";

// Contact tables retain each published connector identity; representative scopes are explicit.
const boards = [
  {
    "id": "brisbane-silicon-epm11",
    "name": "Brisbane Silicon EPM11",
    "short": "EPM11",
    "manufacturer": "Brisbane Silicon",
    "source": "https://brisbanesilicon.com.au/epm11/",
    "size": [
      70,
      26
    ],
    "color": "#23282a",
    "representative": true,
    "subtitle": "RP2350 + GW1NR-9 / representative signal map",
    "description": "Representative product-level entry from the published EPM11 pinout edition and maker repositories. PCB revision is not verified. Only the source-backed J5 signal contacts 1\u201314 and J6 logical FPGA IO1\u201316 are wired. The component-side signal row positions are representative, with electrical identity verified from the maker sources. The separate power/ground pads and USB-C contacts are excluded because their terminal numbering and geometry could not be verified. EPM11 IO3 has conflicting FPGA package locations: LOC47 in the pinout PDF and LOC69 in the current CST; no package location is asserted for that contact.",
    "headers": [
      {
        "name": "J5",
        "pins": [
          {
            "label": "GPIO25",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "ADC_VREF",
            "type": "passive",
            "note": "ADC reference node. Inspect the maker schematic before driving an external reference.",
            "number": null
          },
          {
            "label": "ADC3",
            "type": "input",
            "note": "RP2350 GPIO29 / ADC3; analog range follows ADC_VREF.",
            "number": null
          },
          {
            "label": "ADC2",
            "type": "input",
            "note": "RP2350 GPIO28 / ADC2; analog range follows ADC_VREF.",
            "number": null
          },
          {
            "label": "ADC1",
            "type": "input",
            "note": "RP2350 GPIO27 / ADC1; analog range follows ADC_VREF.",
            "number": null
          },
          {
            "label": "ADC0",
            "type": "input",
            "note": "RP2350 GPIO26 / ADC0; analog range follows ADC_VREF.",
            "number": null
          },
          {
            "label": "GPIO24",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GPIO20",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GPIO17",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GPIO19",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GPIO18",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GPIO23",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "RUN",
            "type": "input",
            "note": "RP2350 active-low reset/run input.",
            "number": null
          },
          {
            "label": "GPIO16",
            "type": "bidirectional",
            "note": "",
            "number": null
          }
        ]
      },
      {
        "name": "J6",
        "pins": [
          {
            "label": "FPGA_IO1",
            "type": "bidirectional",
            "note": "Maker CST package LOC20. 3.3 V logical FPGA I/O.",
            "number": "IO1"
          },
          {
            "label": "FPGA_IO2",
            "type": "bidirectional",
            "note": "Maker CST package LOC77. 3.3 V logical FPGA I/O.",
            "number": "IO2"
          },
          {
            "label": "FPGA_IO3",
            "type": "bidirectional",
            "note": "Maker pinout PDF reports FPGA package LOC47, while the current maker CST reports LOC69. The PCB revision and package location are unresolved; only the published logical IO3 identity is represented. 3.3 V logical FPGA I/O.",
            "number": "IO3"
          },
          {
            "label": "FPGA_IO4",
            "type": "bidirectional",
            "note": "Maker CST package LOC19. 3.3 V logical FPGA I/O.",
            "number": "IO4"
          },
          {
            "label": "FPGA_IO5",
            "type": "bidirectional",
            "note": "Maker CST package LOC76. 3.3 V logical FPGA I/O.",
            "number": "IO5"
          },
          {
            "label": "FPGA_IO6",
            "type": "bidirectional",
            "note": "Maker CST package LOC75. 3.3 V logical FPGA I/O.",
            "number": "IO6"
          },
          {
            "label": "FPGA_IO7",
            "type": "bidirectional",
            "note": "Maker CST package LOC74. 3.3 V logical FPGA I/O.",
            "number": "IO7"
          },
          {
            "label": "FPGA_IO8",
            "type": "bidirectional",
            "note": "Maker CST package LOC72. 3.3 V logical FPGA I/O.",
            "number": "IO8"
          },
          {
            "label": "FPGA_IO9",
            "type": "bidirectional",
            "note": "Maker CST package LOC73. 3.3 V logical FPGA I/O.",
            "number": "IO9"
          },
          {
            "label": "FPGA_IO10",
            "type": "bidirectional",
            "note": "Maker CST package LOC71. 3.3 V logical FPGA I/O.",
            "number": "IO10"
          },
          {
            "label": "FPGA_IO11",
            "type": "bidirectional",
            "note": "Maker CST package LOC70. 3.3 V logical FPGA I/O.",
            "number": "IO11"
          },
          {
            "label": "FPGA_IO12",
            "type": "bidirectional",
            "note": "Maker CST package LOC63. 3.3 V logical FPGA I/O.",
            "number": "IO12"
          },
          {
            "label": "FPGA_IO13",
            "type": "bidirectional",
            "note": "Maker CST package LOC59. 3.3 V logical FPGA I/O.",
            "number": "IO13"
          },
          {
            "label": "FPGA_IO14",
            "type": "bidirectional",
            "note": "Maker CST package LOC60. 3.3 V logical FPGA I/O.",
            "number": "IO14"
          },
          {
            "label": "FPGA_IO15",
            "type": "bidirectional",
            "note": "Maker CST package LOC61. 3.3 V logical FPGA I/O.",
            "number": "IO15"
          },
          {
            "label": "FPGA_IO16",
            "type": "bidirectional",
            "note": "Maker CST package LOC62. 3.3 V logical FPGA I/O.",
            "number": "IO16"
          }
        ]
      }
    ],
    "cad": {
      "label": "Maker EPM11 published dimension drawing (PDF; unverified geometry)",
      "url": "https://brisbanesilicon.com.au/docs/EPM11_Board_Dimensions.pdf"
    }
  },
  {
    "id": "brisbane-silicon-brs-100-gw1nr9",
    "name": "Brisbane Silicon BRS-100-GW1NR9",
    "short": "BRS-100-GW1NR9",
    "manufacturer": "Brisbane Silicon",
    "source": "https://brisbanesilicon.com.au/brs-100-gw1nr9/",
    "size": [
      70,
      30
    ],
    "color": "#1767ad",
    "representative": true,
    "subtitle": "GW1NR-9 / representative 32-GPIO pinout edition",
    "description": "Representative product-level entry for the maker current 32-GPIO pinout edition; physical PCB revision is not verified. The older Gowin-hosted summary and setup guide say 16 GPIO, so that edition is not silently treated as the same physical revision. Only J5 logical GPIO1\u201316 and J6 logical GPIO17\u201332 are wired. Separate power/ground pads, UART bridge contacts and USB-C contacts are excluded because their physical terminal numbering and placement were not verified. Canvas contacts follow the source-identified signal rows; the separate exported carrier uses off-board logical cable terminations and does not claim physical mating geometry.",
    "headers": [
      {
        "name": "J5",
        "pins": [
          {
            "label": "GPIO1",
            "type": "bidirectional",
            "note": "Maker current CST package LOC25. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO1"
          },
          {
            "label": "GPIO2",
            "type": "bidirectional",
            "note": "Maker current CST package LOC26. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO2"
          },
          {
            "label": "GPIO3",
            "type": "bidirectional",
            "note": "Maker current CST package LOC27. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO3"
          },
          {
            "label": "GPIO4",
            "type": "bidirectional",
            "note": "Maker current CST package LOC28. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO4"
          },
          {
            "label": "GPIO5",
            "type": "bidirectional",
            "note": "Maker current CST package LOC29. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO5"
          },
          {
            "label": "GPIO6",
            "type": "bidirectional",
            "note": "Maker current CST package LOC30. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO6"
          },
          {
            "label": "GPIO7",
            "type": "bidirectional",
            "note": "Maker current CST package LOC33. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO7"
          },
          {
            "label": "GPIO8",
            "type": "bidirectional",
            "note": "Maker current CST package LOC34. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO8"
          },
          {
            "label": "GPIO9",
            "type": "bidirectional",
            "note": "Maker current CST package LOC35. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO9"
          },
          {
            "label": "GPIO10",
            "type": "bidirectional",
            "note": "Maker current CST package LOC36. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO10"
          },
          {
            "label": "GPIO11",
            "type": "bidirectional",
            "note": "Maker current CST package LOC37. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO11"
          },
          {
            "label": "GPIO12",
            "type": "bidirectional",
            "note": "Maker current CST package LOC38. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO12"
          },
          {
            "label": "GPIO13",
            "type": "bidirectional",
            "note": "Maker current CST package LOC39. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO13"
          },
          {
            "label": "GPIO14",
            "type": "bidirectional",
            "note": "Maker current CST package LOC40. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO14"
          },
          {
            "label": "GPIO15",
            "type": "bidirectional",
            "note": "Maker current CST package LOC41. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO15"
          },
          {
            "label": "GPIO16",
            "type": "bidirectional",
            "note": "Maker current CST package LOC42. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO16"
          }
        ]
      },
      {
        "name": "J6",
        "pins": [
          {
            "label": "GPIO17",
            "type": "bidirectional",
            "note": "Maker current CST package LOC77. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO17"
          },
          {
            "label": "GPIO18",
            "type": "bidirectional",
            "note": "Maker current CST package LOC76. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO18"
          },
          {
            "label": "GPIO19",
            "type": "bidirectional",
            "note": "Maker current CST package LOC75. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO19"
          },
          {
            "label": "GPIO20",
            "type": "bidirectional",
            "note": "Maker current CST package LOC74. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO20"
          },
          {
            "label": "GPIO21",
            "type": "bidirectional",
            "note": "Maker current CST package LOC73. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO21"
          },
          {
            "label": "GPIO22",
            "type": "bidirectional",
            "note": "Maker current CST package LOC72. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO22"
          },
          {
            "label": "GPIO23",
            "type": "bidirectional",
            "note": "Maker current CST package LOC71. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO23"
          },
          {
            "label": "GPIO24",
            "type": "bidirectional",
            "note": "Maker current CST package LOC70. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO24"
          },
          {
            "label": "GPIO25",
            "type": "bidirectional",
            "note": "Maker current CST package LOC69. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO25"
          },
          {
            "label": "GPIO26",
            "type": "bidirectional",
            "note": "Maker current CST package LOC68. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO26"
          },
          {
            "label": "GPIO27",
            "type": "bidirectional",
            "note": "Maker current CST package LOC57. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO27"
          },
          {
            "label": "GPIO28",
            "type": "bidirectional",
            "note": "Maker current CST package LOC56. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO28"
          },
          {
            "label": "GPIO29",
            "type": "bidirectional",
            "note": "Maker current CST package LOC55. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO29"
          },
          {
            "label": "GPIO30",
            "type": "bidirectional",
            "note": "Maker current CST package LOC54. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO30"
          },
          {
            "label": "GPIO31",
            "type": "bidirectional",
            "note": "Maker current CST package LOC53. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO31"
          },
          {
            "label": "GPIO32",
            "type": "bidirectional",
            "note": "Maker current CST package LOC51. 3.3 V logical FPGA I/O. The IO identifier is the published logical contact label, not an asserted connector cavity number.",
            "number": "IO32"
          }
        ]
      }
    ],
    "cad": {
      "label": "Maker BRS-100 published dimension drawing (PDF; unverified geometry)",
      "url": "https://brisbanesilicon.com.au/docs/BRS-100-GW1NR9_Board_Dimensions.pdf"
    }
  },
  {
    "id": "onekiwi-kiwi-1p5",
    "name": "OneKiwi KIWI 1P5 (QN48X)",
    "short": "KIWI 1P5",
    "manufacturer": "OneKiwi",
    "source": "https://www.gowinsemi.com/en/support/devkits_detail/71/",
    "size": [
      70,
      26
    ],
    "color": "#252c29",
    "representative": false,
    "subtitle": "GW1N-UV1P5QN48X / 48 header contacts",
    "description": "Legacy QN48X board, illustrated PCB v1.0 with manufacturer reference schematic v1.1 dated 2024-11-05. Both 24-contact headers are exposed, including power, configuration pins and the separate GWU2U UART. All I/O is 3.3 V. JTDI/JTMS/JTCK are programmer outputs and JTDO is a programmer input; these are not general GPIO. The newer QN48XF variant is not assumed to share this map. The 70 \u00d7 26 mm outline and 22.86 mm row spacing follow the mechanical drawing; the summary table instead says 70 \u00d7 22 mm.",
    "headers": [
      {
        "name": "J1",
        "pins": [
          {
            "label": "IOL4A",
            "type": "bidirectional",
            "note": "FPGA package contact 2. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL4B",
            "type": "bidirectional",
            "note": "FPGA package contact 3. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL6B",
            "type": "bidirectional",
            "note": "FPGA package contact 5. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL11A",
            "type": "bidirectional",
            "note": "FPGA package contact 7. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL11B",
            "type": "bidirectional",
            "note": "FPGA package contact 8. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL12A",
            "type": "bidirectional",
            "note": "FPGA package contact 9. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL12B",
            "type": "bidirectional",
            "note": "FPGA package contact 10. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL17A",
            "type": "bidirectional",
            "note": "FPGA package contact 11. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOL17B",
            "type": "bidirectional",
            "note": "FPGA package contact 12. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB2A",
            "type": "bidirectional",
            "note": "FPGA package contact 14. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB2B",
            "type": "bidirectional",
            "note": "FPGA package contact 15. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB7A",
            "type": "bidirectional",
            "note": "FPGA package contact 18. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB7B",
            "type": "bidirectional",
            "note": "FPGA package contact 19. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB9A",
            "type": "bidirectional",
            "note": "FPGA package contact 20. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOB9B",
            "type": "bidirectional",
            "note": "FPGA package contact 21. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "IOR17B",
            "type": "bidirectional",
            "note": "FPGA package contact 26. 3.3 V I/O.",
            "number": null
          },
          {
            "label": "MSPI_CS",
            "type": "bidirectional",
            "note": "FPGA package contact 23. 3.3 V I/O. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "MSPI_MOSI",
            "type": "bidirectional",
            "note": "FPGA package contact 24. 3.3 V I/O. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "MSPI_MISO",
            "type": "bidirectional",
            "note": "FPGA package contact 17. 3.3 V I/O. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "MSPI_CLK",
            "type": "bidirectional",
            "note": "FPGA package contact 16. 3.3 V I/O. The guide table incorrectly prints 26 for this MSPI_CLK package location; the schematic and pinout drawing show 16. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "IOT14A/SCL",
            "type": "bidirectional",
            "note": "FPGA package contact 43. 3.3 V I/O. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "IOT14B/SDA",
            "type": "bidirectional",
            "note": "FPGA package contact 42. 3.3 V I/O. Special configuration interface; general I/O requires the documented remapping.",
            "number": null
          },
          {
            "label": "IOR17A",
            "type": "bidirectional",
            "note": "FPGA package contact 27. 3.3 V I/O. Shares a user LED.",
            "number": null
          },
          {
            "label": "IOR15B",
            "type": "bidirectional",
            "note": "FPGA package contact 28. 3.3 V I/O. Shares a user LED.",
            "number": null
          }
        ]
      },
      {
        "name": "J2",
        "pins": [
          {
            "label": "NC",
            "type": "no_connect",
            "note": "",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "P3V3",
            "type": "power_out",
            "note": "",
            "number": null
          },
          {
            "label": "JTDI",
            "type": "output",
            "note": "GWU2X data output to an external FPGA; isolate the onboard FPGA with SW1 as documented.",
            "number": null
          },
          {
            "label": "JTMS",
            "type": "output",
            "note": "GWU2X mode output; not a general-purpose GPIO.",
            "number": null
          },
          {
            "label": "JTCK",
            "type": "output",
            "note": "GWU2X clock output; not a general-purpose GPIO.",
            "number": null
          },
          {
            "label": "JTDO",
            "type": "input",
            "note": "JTAG return data into the GWU2X programmer.",
            "number": null
          },
          {
            "label": "READY",
            "type": "output",
            "note": "FPGA configuration READY output, package 38.",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "JTAGSEL_N",
            "type": "input",
            "note": "FPGA package 41 / IOT15A; configuration-select contact.",
            "number": null
          },
          {
            "label": "RECONFIG_N",
            "type": "input",
            "note": "FPGA package 40 / IOT15B; active-low reconfiguration input.",
            "number": null
          },
          {
            "label": "IOR15A",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "IOR13B",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "IOR1B",
            "type": "bidirectional",
            "note": "Shares KEY1 pushbutton.",
            "number": null
          },
          {
            "label": "IOR11A",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "IOR11B",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "IOR13A",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "P5V0",
            "type": "passive",
            "note": "Shared 5 V system rail.",
            "number": null
          },
          {
            "label": "IOR1A",
            "type": "bidirectional",
            "note": "Shares KEY2 pushbutton.",
            "number": null
          },
          {
            "label": "DONE",
            "type": "output",
            "note": "FPGA configuration DONE output, package 37.",
            "number": null
          },
          {
            "label": "U2U_RXD",
            "type": "input",
            "note": "Serial data into the GWU2U USB-UART receiver, 3.3 V logic.",
            "number": null
          },
          {
            "label": "U2U_TXD",
            "type": "output",
            "note": "Serial data from the GWU2U USB-UART transmitter, 3.3 V logic.",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "P3V3",
            "type": "power_out",
            "note": "",
            "number": null
          }
        ]
      }
    ],
    "cad": {
      "label": "OneKiwi v1.1 reference schematic (PDF)",
      "url": "https://www.gowinsemi.com/upload/database_doc/3225/document/686f5c000196d.pdf"
    }
  },
  {
    "id": "trenz-tec0117-01",
    "name": "Trenz Electronic TEC0117-01",
    "short": "TEC0117-01",
    "manufacturer": "Trenz Electronic",
    "source": "https://wiki.trenz-electronic.de/display/PD/TEC0117+TRM",
    "size": [
      61.5,
      25
    ],
    "color": "#247b53",
    "representative": false,
    "subtitle": "GW1NR-9 / MKR-style + Pmod + JTAG",
    "description": "Board revision 01, schematic dated 2018-05-25. Both 14-contact MKR-style rows, Pmod 12 and JTAG 6 are exposed. The AREF/AIN names are printed FPGA digital I/O labels; this module does not provide an ADC. The 6-pin JTAG bank shares FT2232H; its alternate user-I/O function requires the FT2232H to be unpopulated. Default schematic marks the connector bodies unfitted, so the artwork shows accessible plated holes. Main power is nominal 5 V. Trenz published a TEC0117 EOL notice in 2026.",
    "headers": [
      {
        "name": "J1",
        "pins": [
          {
            "label": "AREF",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN0",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN1",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN2",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN3",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN4",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN5",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "AIN6",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D0",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D1",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D2",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D3",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D4",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          },
          {
            "label": "D5",
            "type": "bidirectional",
            "note": "MKR-style printed label; this is 3.3 V FPGA digital I/O, not an ADC or analog reference circuit.",
            "number": null
          }
        ]
      },
      {
        "name": "J2",
        "pins": [
          {
            "label": "D6",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D7",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D8",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D9",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D10",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D11",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D12",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D13",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "D14",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "RESET",
            "type": "input",
            "note": "Active-low board reset.",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "3V3",
            "type": "power_out",
            "note": "",
            "number": null
          },
          {
            "label": "VIN",
            "type": "power_in",
            "note": "Nominal 5 V external board supply through the power-selection circuit.",
            "number": null
          },
          {
            "label": "5V",
            "type": "passive",
            "note": "Shared 5 V system rail.",
            "number": null
          }
        ]
      },
      {
        "name": "J4",
        "pins": [
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "JTAGEN",
            "type": "input",
            "note": "JTAG mode/configuration input; shares the onboard programming circuit.",
            "number": null
          },
          {
            "label": "TCK",
            "type": "input",
            "note": "FPGA JTAG clock; shares FT2232H.",
            "number": null
          },
          {
            "label": "TDO",
            "type": "output",
            "note": "FPGA JTAG output; shares FT2232H.",
            "number": null
          },
          {
            "label": "TDI",
            "type": "input",
            "note": "FPGA JTAG input; shares FT2232H.",
            "number": null
          },
          {
            "label": "TMS",
            "type": "input",
            "note": "FPGA JTAG mode; shares FT2232H.",
            "number": null
          }
        ]
      },
      {
        "name": "J6",
        "pins": [
          {
            "label": "PIO_01",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_02",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_03",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_04",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "3V3",
            "type": "power_out",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_05",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_06",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_07",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "PIO_08",
            "type": "bidirectional",
            "note": "",
            "number": null
          },
          {
            "label": "GND",
            "type": "power_in",
            "note": "",
            "number": null
          },
          {
            "label": "3V3",
            "type": "power_out",
            "note": "",
            "number": null
          }
        ]
      }
    ],
    "cad": {
      "label": "Trenz TEC0117-01 verified manufacturer STEP archive",
      "url": "https://www.trenz-electronic.de/trenzdownloads/Trenz_Electronic/Modules_and_Module_Carriers/2.5x6.15/TEC0117/REV01/HW_Design/STP-TEC0117-01.zip"
    }
  }
];

const copper = "#c8ad69", ink = "#344b52", silk = "#e8eddc", dark = "#242c32";

const visualScale=5, visualMargin=20;
function physicalPosition(board,header,index) {
  const [w,h]=board.size;
  if(board.representative) return [7+index*(w-14)/17,header.name==="J5"?1.5:h-1.5];
  if(board.id.includes("onekiwi")) return [5.79+index*2.54,header.name==="J1"?h-1.57:1.57];
  if(header.name==="J1") return [18+index*2.54,h-2.5];
  if(header.name==="J2") return [18+(13-index)*2.54,2.5];
  if(header.name==="J4") return [54,6.15+index*2.54];
  return [58+Math.floor(index/6)*2.54,6.15+index%6*2.54];
}
function makeComponent(board) {
  const width=board.size[0]*visualScale+visualMargin*2,height=board.size[1]*visualScale+visualMargin*2;
  const pins=board.headers.flatMap(header=>header.pins.map((pin,index)=>{
    const [x,y]=physicalPosition(board,header,index);
    return {id:`${header.name.toLowerCase()}-${pin.number ?? index+1}`.toLowerCase(),number:`${header.name}.${pin.number ?? index+1}`,label:pin.label,type:pin.type,surface:true,
      x:visualMargin+x*visualScale,y:visualMargin+y*visualScale,
      description:`${header.name} ${pin.number ?? index+1}: ${pin.label}. ${pin.note || (pin.type==="bidirectional"?"3.3 V digital I/O.":pin.type==="power_in"?"Power/signal return.":pin.type==="power_out"?"Regulated 3.3 V board rail.":pin.type==="no_connect"?"Unconnected contact.":"See the manufacturer connector circuit.")}`};
  }));
  return {id:board.id,art:board.id,name:board.name,shortName:board.short,manufacturer:board.manufacturer,category:"FPGA boards",referencePrefix:"U",subtitle:board.subtitle,description:board.description,
    source:board.source,width,height,pins,contactLayout:"physical",tags:["gowin","fpga","development board",board.short.toLowerCase(),...(board.representative?["representative","partial signal map"]:[])]};
}

function hole(x,y,first=false) {
  return (first ? rect(x-0.9,y-0.9,1.8,1.8,0.1,copper) : circle(x,y,0.9,copper))+circle(x,y,0.5,"#253d3b");
}
function chip(x,y,w,h,name,leads=false) {
  let result=rect(x,y,w,h,0.4,dark,"#60736f")+circle(x+0.7,y+0.7,0.25,"#a7afa0");
  if(leads) for(let n=0;n<8;n++) result+=line(x-0.7,y+1+n*(h-2)/7,x,y+1+n*(h-2)/7,"#b2b8ae",0.35)+line(x+w,y+1+n*(h-2)/7,x+w+0.7,y+1+n*(h-2)/7,"#b2b8ae",0.35)+line(x+1+n*(w-2)/7,y-0.7,x+1+n*(w-2)/7,y,"#b2b8ae",0.35)+line(x+1+n*(w-2)/7,y+h,x+1+n*(w-2)/7,y+h+0.7,"#b2b8ae",0.35);
  return result+label(x+w/2,y+h/2,name,1.25,silk);
}
function usb(x,y,w=8,h=8) {
  return rect(x,y,w,h,0.9,"#b5bfc1","#d8ddce")+rect(x+0.5,y+1,w-1,h-2,0.8,"#5c7077")+rect(x+1,y+1.8,w-2,h-3.6,0.5,dark);
}
function button(x,y) { return rect(x,y,4,3,0.5,"#c1c6b6")+circle(x+2,y+1.5,0.85,"#4c5c59"); }

function bodyArt(board) {
  const [w,h]=board.size;
  let body=rect(0,0,w,h,2.2,board.color,"#79968a");
  const mounts=board.id.endsWith("epm11") ? [[w-2.3,2.3],[w-2.3,h-2.3]] : board.id.includes("brisbane") ? [] : [[2.3,2.3],[w-2.3,2.3],[2.3,h-2.3],[w-2.3,h-2.3]];
  for(const [x,y] of mounts) body+=circle(x,y,1.3,copper)+circle(x,y,0.88,"#263b3e");
  for(let i=0;i<30;i++){
    const x=8+(i*6.1)%(w-17),y=5+(i*4.7)%(h-10);
    body+=rect(x,y,1.7,0.65,0.1,"#b0b7a4")+rect(x+0.4,y,0.9,0.65,0,"#777861");
  }
  if(board.id.includes("brisbane")) {
    for(let i=0;i<18;i++)body+=hole(7+i*(w-14)/17,1.5,i===0)+hole(7+i*(w-14)/17,h-1.5,i===0);
    body+=usb(-2,h/2-4,9,8)+button(1,4)+button(1,h-7);
    body+=chip(10,6,5,5,"HUB")+chip(13,h-12,6,6,"FTDI")+chip(w-23,7,10,12,"GW1NR-9",true)+chip(w-10,h/2-3,5,6,"FLASH",true);
    if(board.id.endsWith("epm11"))body+=chip(37,8,8,8,"RP2350")+chip(20,5,4,4,"USB");
    else body+=label(43,4,"BrisbaneSilicon",2,silk);
    if(board.id.endsWith("epm11")) body+=`<g transform="translate(${w-3} ${h/2}) rotate(-90)">${label(0,0,"BrisbaneSilicon",1.9,silk)}</g>`;
  } else if(board.id.includes("onekiwi")) {
    for(let i=0;i<24;i++)body+=hole(5.79+i*2.54,1.57,i===0)+hole(5.79+i*2.54,h-1.57,i===0);
    body+=usb(-1,h/2-4,8,8)+usb(w-7,h/2-4,8,8)+chip(12,8,8,9,"GWU2X")+chip(34,7,11,11,"GW1N-1P5")+chip(51,9,7,8,"GWU2U");
    body+=rect(24,5,6,10,0.5,"#807a22","#d9c55a");
    for(let n=0;n<4;n++)body+=rect(24.7,5.8+n*2.1,4.6,1.3,0.15,"#d0c991")+rect(27.3,6+n*2.1,1.2,0.8,0.1,dark);
    body+=button(47,4)+button(47,20)+label(17,4.2,"ONEKIWI",2.4,silk)+label(35,21.3,"KIWI FPGA 1P5",2.2,silk)+label(63,21,"v1.0",1.7,silk);
  } else {
    // Rotate the manufacturer component-side layout so the USB socket is left.
    body+=usb(-1,h/2-3.5,6,7)+button(2,3)+button(2,h-6)+chip(11,7,11,11,"FT2232H",true)+chip(35,7,11,11,"GW1NR-9",true)+chip(47,10,5,5,"FLASH",true);
    for(let i=0;i<14;i++)body+=hole(18+i*2.54,2.5)+hole(18+i*2.54,h-2.5);
    for(let i=0;i<6;i++)body+=hole(54,6.15+i*2.54,i===0)+hole(58,6.15+i*2.54,i===0)+hole(60.54,6.15+i*2.54);
    for(let i=0;i<8;i++)body+=rect(10+i*1.6,3.8,1.1,1.8,0.15,"#d9d89b");
    body+=label(28,12,"GOWIN",3.1,silk)+label(42,20.1,"LittleBee",2.1,silk)+label(8,20.5,"01",1.5,silk);
  }
  return body;
}

function draw(board,component,labels) {
  let body=bodyArt(board);
  for(const header of board.headers) {
    const vertical=board.id.includes("trenz") && ["J4","J6"].includes(header.name);
    for(let index=0;index<header.pins.length;index++) {
      const [x,y]=physicalPosition(board,header,index),pin=header.pins[index];
      body+=hole(x,y,index===0);
      if(labels) {
        const side=vertical ? (header.name==="J4" || index<6 ? -1 : 1) : y<board.size[1]/2 ? -1 : 1;
        const caption=String(pin.number ?? index+1);
        const color=vertical ? x+side*1.5>board.size[0]?ink:silk : y+side*2<0||y+side*2>board.size[1]?ink:silk;
        body+=vertical ? label(x+side*1.5,y,caption,1.35,color,side<0?"end":"start") : label(x,y+side*2,caption,1.35,color);
      }
    }
    if(labels) {
      const [x,y]=physicalPosition(board,header,0);
      body+=vertical ? label(x-1.5,y-3,header.name,1.6,silk,"end") : label((x+physicalPosition(board,header,header.pins.length-1)[0])/2,y+(y<board.size[1]/2?4:-4),header.name,1.6,silk,"start");
    }
  }
  return `<g transform="translate(${visualMargin} ${visualMargin}) scale(${visualScale})">${body}</g>`;
}

function footprint(board) {
  const [w,h]=board.size,pads=[];
  board.headers.forEach((header,index)=>header.pins.forEach((pin,n)=>{
    let x,y;
    if(board.representative) {x=-20+n*2.54;y=24+index*8;}
    else if(board.id.includes("onekiwi")) {x=-29.21+n*2.54;y=index===0?11.43:-11.43;}
    else if(index<2) {const point=physicalPosition(board,header,n);x=point[0]-w/2;y=point[1]-h/2;}
    else {x=-12.7+n%6*2.54;y=22+(index-2)*8+Math.floor(n/6)*2.54;}
    pads.push({id:`${header.name.toLowerCase()}-${pin.number??n+1}`.toLowerCase(),x:+x.toFixed(3),y:+y.toFixed(3),size:1.6,drill:0.9,square:n===0});
  }));
  return {body:board.size,color:board.color,pads,
    note:board.representative ? "Representative off-board cable termination for the verified logical signal scope only. Header bank geometry, power-pad locations and PCB revision were not verified; the outline is a photo-proportion reference, not measured board geometry or a physical mating footprint. No unverified power contacts are invented." : board.id.includes("onekiwi") ? "Component-side reference carrier for the published QN48X board: 70 × 26 mm outline, 2.54 mm contact pitch and 22.86 mm header-row spacing from the mechanical drawing. Confirm the pin-1 side and exact PCB revision before fabrication; mounting holes, USB sockets and component heights are outside this reference footprint." : "Reference carrier for TEC0117-01. Main row pitch is 2.54 mm and body is 61.5 × 25 mm; header offsets are approximate. JTAG/Pmod contacts outside the outline are reference cable landings, not the physical mating/socket land pattern. Vendor STEP is linked for mechanical checking; verify all offsets and orientation before adapter fabrication.",
    details:[[-10,0,8,8,1.5,dark],[10,0,10,10,1.5,dark],[-w/2,0,7,8,3,silverColor]],
  };
}
const silverColor="#b5bfc1";
const gowinThirdPartyComponents=boards.map(makeComponent);
const gowinThirdPartyArt=Object.fromEntries(boards.map(board=>[board.id,(component,labels)=>draw(board,component,labels)]));
const gowinThirdPartyFootprints=Object.fromEntries(boards.map(board=>[board.id,footprint(board)]));
const gowinThirdPartyModels=Object.fromEntries(boards.map(board=>[board.id,board.cad]));

const kiwiBoard = boards.find(board => board.id === 'onekiwi-kiwi-1p5');
const kiwiComponent = gowinThirdPartyComponents.find(component => component.id === kiwiBoard.id);
const kiwiInsertion = miniComputingMounting(kiwiComponent, {
  size: [70, 26], labelAxis: 'y', source: kiwiBoard.cad.url,
  contacts: kiwiComponent.pins.map(pin => pin.id),
  pins: Object.fromEntries(kiwiComponent.pins.map(pin => [pin.id, {
    x: 5.79 + (Number(pin.number.split('.').at(-1)) - 1) * 2.54,
    y: pin.id.startsWith('j1-') ? 24.43 : 1.57,
  }])),
  evidence: 'The manufacturer QN48X schematic/mechanical drawing gives a 70 x 26 mm board, both complete 24-pin rows, 2.54 mm pitch and 22.86 mm row separation. The existing component-side J1/J2 pin-number orientation is retained. Header centres are taken from that reviewed drawing, independently of the native reference-carrier footprint.',
  note: 'Populate all 48 J1/J2 contacts with straight downward male headers. USB sockets remain cable interfaces. Use a breadboard with enough independent cells for the full row separation.',
  regions: [{ x: 0, y: 0, width: 70, height: 26 },
    { x: -1, y: 9, width: 8, height: 8 }, { x: 63, y: 9, width: 8, height: 8 }],
  renderHardware: () => bodyArt(kiwiBoard),
});
const trenzComponent = gowinThirdPartyComponents.find(component => component.id === 'trenz-tec0117-01');
const insertionProfiles = { [kiwiComponent.id]: kiwiInsertion, [trenzComponent.id]: trenzMounting(trenzComponent) };
export default defineFamily("gowin-third-party", (gowinThirdPartyComponents).map(component => ({ component, render: (gowinThirdPartyArt)[component.art], footprint: (gowinThirdPartyFootprints)[component.id], model: gowinThirdPartyModels[component.id], ...(insertionProfiles[component.id] ? { mounting: insertionProfiles[component.id] } : {}) })));
