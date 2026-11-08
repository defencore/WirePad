// Manufacturer connector and package-coordinate tables; references stay in each board record.
export default {
  "gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1": {
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
        "note": "Complete 2×5 JTAG socket, schematic physical contact order.",
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
    ]
  },
  "gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0": {
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
        "note": "Complete 2×5 JTAG socket, schematic physical contact order.",
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
        "note": "Complete 2×5 JTAG socket, schematic physical contact order.",
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
    ]
  }
};
