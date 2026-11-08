import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-txs0108e-dfr0844",
    "sku": "DFR0844",
    "name": "DFRobot Fermion: TXS0108E 8-Bit Level Translator (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Interfaces",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/dfr0844/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/DFR0844/DFR0844_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17484/DFR0844_8-channel-logic-level-conversion_dimension_1.0.jpg",
      "https://dfimg.dfrobot.com/wiki/17484/DFR0844_8-channel-logic-level-conversion_schematics_1.0.pdf"
    ],
    "description": "TXS0108E eight-channel bidirectional level translator. The actual 22 physical contacts comprise two ten-pin rows plus two additional side ground contacts. VA and VB are separate supply domains; no A/B signal pair is a direct copper connection.",
    "tags": [
      "module",
      "txs0108e",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2286.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 26,
      "height": 15.5,
      "color": "#272d29",
      "outline": "M-11.7 -7.75H11.7A1.3 1.3 0 0 1 13.0 -6.45V6.45A1.3 1.3 0 0 1 11.7 7.75H-11.7A1.3 1.3 0 0 1 -13.0 6.45V-6.45A1.3 1.3 0 0 1 -11.7 -7.75Z"
    },
    "contacts": assets["dfrobot-txs0108e-dfr0844"]["contacts"],
    "artwork": assets["dfrobot-txs0108e-dfr0844"]["artwork"],
    "holes": [
      {
        "x": -11,
        "y": 0,
        "drill": 2
      },
      {
        "x": 11,
        "y": 0,
        "drill": 2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-txs0108e-dfr0844"]["provenance"],
    "numericLabels": true,
    "internalConnections": [
      [
        "p2",
        "p21",
        "p22"
      ]
    ]
  },
  {
    "id": "dfrobot-ltc4316-dfr1185",
    "sku": "DFR1185",
    "name": "DFRobot Fermion: LTC4316 I2C Address Shifter Module",
    "manufacturer": "DFRobot",
    "category": "Interfaces",
    "revision": "V1.0.0 / manufacturer mechanical and layout PDFs dated 2024-08-30",
    "source": "https://wiki.dfrobot.com/dfr1185/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/DFR1185/DFR1185_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20503/DFR1185_fermion-i2c-address-shifter-module_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20503/DFR1185_fermion-i2c-address-shifter-module_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20503/DFR1185_fermion-i2c-address-shifter-module_schematics_V1.0.pdf"
    ],
    "description": "LTC4316 I2C address shifter V1.0.0. The four-contact sensor row is on the left and the five-contact controller row, including RDY, is on the right. A4/A5 switches invert selected address bits. Both clock and data are buffered I2C paths; corresponding SCL/SDA labels are not declared directly connected.",
    "tags": [
      "module",
      "ltc4316",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2894.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19,
      "height": 19,
      "color": "#272d29",
      "outline": "M-8.2 -9.5H8.2A1.3 1.3 0 0 1 9.5 -8.2V8.2A1.3 1.3 0 0 1 8.2 9.5H-8.2A1.3 1.3 0 0 1 -9.5 8.2V-8.2A1.3 1.3 0 0 1 -8.2 -9.5Z"
    },
    "contacts": assets["dfrobot-ltc4316-dfr1185"]["contacts"],
    "artwork": assets["dfrobot-ltc4316-dfr1185"]["artwork"],
    "holes": [
      {
        "x": -7,
        "y": -7,
        "drill": 2
      },
      {
        "x": 7,
        "y": -7,
        "drill": 2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-ltc4316-dfr1185"]["provenance"],
    "numericLabels": false,
    "internalConnections": [
      [
        "p1",
        "p5"
      ],
      [
        "p2",
        "p6"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/20503/DFR1185_fermion-i2c-address-shifter-module_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-ec11-sen0235",
    "sku": "SEN0235",
    "name": "DFRobot Fermion: EC11 Rotary Encoder Module (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Inputs",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0235/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0235/SEN0235_261008 (1).jpg",
      "https://dfimg.dfrobot.com/wiki/17574/SEN0235_ec11_dimension_v1.pdf",
      "https://dfimg.dfrobot.com/wiki/17574/SEN0235_ec11_schematics_v1.pdf"
    ],
    "description": "EC11 rotary encoder breakout with push button, 47 kΩ pull-ups and the source two-ear PCB outline. A and B provide quadrature contact signals. C is the printed push-button signal, called D on the source schematic.",
    "tags": [
      "module",
      "ec11",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-1611.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 33.1,
      "height": 27.43,
      "color": "#272d29",
      "outline": "M-9.205 -13.715H9.205V-3.85H12.7A3.85 3.85 0 0 1 12.7 3.85H9.205V13.715H-9.205V3.85H-12.7A3.85 3.85 0 0 1 -12.7 -3.85H-9.205Z"
    },
    "contacts": assets["dfrobot-ec11-sen0235"]["contacts"],
    "artwork": assets["dfrobot-ec11-sen0235"]["artwork"],
    "holes": [
      {
        "x": -12.7,
        "y": 0,
        "drill": 3.1
      },
      {
        "x": 12.7,
        "y": 0,
        "drill": 3.1
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-ec11-sen0235"]["provenance"],
    "numericLabels": false
  },
  {
    "id": "dfrobot-max30102-v2-sen0344",
    "sku": "SEN0344",
    "name": "DFRobot Fermion: MAX30102 PPG Heart Rate and Oximeter Sensor V2.0 (Breakout, I2C / UART)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V2.0 / cited dedicated manufacturer pinmap and dimension drawing",
    "source": "https://wiki.dfrobot.com/sen0344/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0344/SEN0344_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20168/SEN0344_fermion-max30102-heart-rate-and-oximeter-sensor_dimension_ V2.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20168/SEN0344_fermion-max30102-heart-rate-and-oximeter-sensor_schematics_ V2.0.pdf"
    ],
    "description": "MAX30102 PPG/heart-rate/oximeter module V2.0, with the full twelve-terminal I2C/UART interface. Contact layout and MCU-side view follow the dedicated V2.0 pinmap and mechanical PDF; the optical sensor is on the reverse side. Supply is 3.3 V only. The current offer does not guarantee the warehouse PCB controller-package revision.",
    "tags": [
      "module",
      "max30102-v2",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2164.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 18,
      "height": 22,
      "color": "#272d29",
      "outline": "M-7.7 -11.0H7.7A1.3 1.3 0 0 1 9.0 -9.7V9.7A1.3 1.3 0 0 1 7.7 11.0H-7.7A1.3 1.3 0 0 1 -9.0 9.7V-9.7A1.3 1.3 0 0 1 -7.7 -11.0Z"
    },
    "contacts": assets["dfrobot-max30102-v2-sen0344"]["contacts"],
    "artwork": assets["dfrobot-max30102-v2-sen0344"]["artwork"],
    "holes": [
      {
        "x": -7.6,
        "y": 9.7,
        "drill": 1.4
      },
      {
        "x": 7.6,
        "y": 9.7,
        "drill": 1.4
      },
      {
        "x": 7.6,
        "y": -9.7,
        "drill": 1.4
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "MCU-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-max30102-v2-sen0344"]["provenance"],
    "numericLabels": false,
    "internalConnections": [
      [
        "p1",
        "p7"
      ],
      [
        "p2",
        "p8"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/20168/SEN0344_fermion-max30102-heart-rate-and-oximeter-sensor_stpfile_ V2.0.zip"
    }
  },
  {
    "id": "dfrobot-bno055-sen0374",
    "sku": "SEN0374",
    "name": "DFRobot Fermion: BNO055 Intelligent 9-axis Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0374/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0374/SEN0374_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21796/SEN0374_bno055-intelligent-9-axis-sensor_schematics_v1.pdf",
      "https://dfimg.dfrobot.com/nobody/wiki/c2fae671ab89d9a767f168b002b20ad8.jpg"
    ],
    "description": "BNO055 nine-axis fusion sensor breakout with I2C and UART protocol modes. The copied specification says SPI, but the actual protocol table and Bosch device support I2C/UART. All ten physical headers are modeled. ADDR is the illustrated rear configuration jumper; it is not an eleventh header terminal. Only I2C bus pins are level-shifted; other signals use 3.3 V.",
    "tags": [
      "module",
      "bno055",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2142.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19,
      "height": 21,
      "color": "#272d29",
      "outline": "M-8.2 -10.5H8.2A1.3 1.3 0 0 1 9.5 -9.2V9.2A1.3 1.3 0 0 1 8.2 10.5H-8.2A1.3 1.3 0 0 1 -9.5 9.2V-9.2A1.3 1.3 0 0 1 -8.2 -10.5Z"
    },
    "contacts": assets["dfrobot-bno055-sen0374"]["contacts"],
    "artwork": assets["dfrobot-bno055-sen0374"]["artwork"],
    "holes": [
      {
        "x": -7.5,
        "y": -8,
        "drill": 2
      },
      {
        "x": -7.5,
        "y": 8,
        "drill": 2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-bno055-sen0374"]["provenance"],
    "numericLabels": false,
    "backArtwork": assets["dfrobot-bno055-sen0374"]["backArtwork"]
  },
  {
    "id": "dfrobot-mcp4725-dfr0552",
    "sku": "DFR0552",
    "name": "DFRobot Gravity: I2C 12-Bit DAC Module",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/dfr0552/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/DFR0552/DFR0552_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21133/DFR0552_gravity-mcp4725-12-bit-i2c-dac-module_dimension_V.pdf",
      "https://dfimg.dfrobot.com/wiki/21133/DFR0552_gravity-mcp4725-12-bit-i2c-dac-module_layout_V.pdf",
      "https://dfimg.dfrobot.com/wiki/21133/DFR0552_gravity-mcp4725-12-bit-i2c-dac-module_schematics_V.pdf"
    ],
    "description": "MCP4725 12-bit I2C DAC module. All three exposed interfaces are included: Gravity lead contacts, the parallel four-pin I2C header, and VOUT/GND output header. The six-pin address switch is a fitted component, not a separate user header.",
    "tags": [
      "module",
      "mcp4725",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-1721.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 27,
      "height": 22,
      "color": "#272d29",
      "outline": "M-12.2 -11.0H12.2A1.3 1.3 0 0 1 13.5 -9.7V9.7A1.3 1.3 0 0 1 12.2 11.0H-12.2A1.3 1.3 0 0 1 -13.5 9.7V-9.7A1.3 1.3 0 0 1 -12.2 -11.0Z"
    },
    "contacts": assets["dfrobot-mcp4725-dfr0552"]["contacts"],
    "artwork": assets["dfrobot-mcp4725-dfr0552"]["artwork"],
    "holes": [
      {
        "x": 1.5,
        "y": -7.5,
        "drill": 3
      },
      {
        "x": 1.5,
        "y": 7.5,
        "drill": 3
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-mcp4725-dfr0552"]["provenance"],
    "numericLabels": false,
    "internalConnections": [
      [
        "p1",
        "p8"
      ],
      [
        "p2",
        "p7",
        "p10"
      ],
      [
        "p3",
        "p6"
      ],
      [
        "p4",
        "p5"
      ]
    ]
  },
  {
    "id": "dfrobot-adum1250-isolator-dfr0565",
    "sku": "DFR0565",
    "name": "DFRobot Gravity: Digital I2C Signal Isolator",
    "manufacturer": "DFRobot",
    "category": "Interfaces",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/dfr0565/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/DFR0565/DFR0565_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/18553/DFR0565_gravity-i2c-digital-signal-isolator-module_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/18553/DFR0565_gravity-i2c-digital-signal-isolator-module_layout_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/18553/DFR0565_gravity-i2c-digital-signal-isolator-module_schematics_V1.0.pdf"
    ],
    "description": "ADuM1250 digital I2C isolator with isolated 5 V power. The left module side and right controller side each expose a Gravity connector and a parallel four-pin header. The two sides have independent supply returns and buffered data/clock nets; no cross-isolation internal connection is declared.",
    "tags": [
      "module",
      "adum1250-isolator",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-1778.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 42,
      "height": 32,
      "color": "#272d29",
      "outline": "M-19.7 -16.0H19.7A1.3 1.3 0 0 1 21.0 -14.7V14.7A1.3 1.3 0 0 1 19.7 16.0H-19.7A1.3 1.3 0 0 1 -21.0 14.7V-14.7A1.3 1.3 0 0 1 -19.7 -16.0Z"
    },
    "contacts": assets["dfrobot-adum1250-isolator-dfr0565"]["contacts"],
    "artwork": assets["dfrobot-adum1250-isolator-dfr0565"]["artwork"],
    "holes": [
      {
        "x": -17,
        "y": -12,
        "drill": 3
      },
      {
        "x": 17,
        "y": -12,
        "drill": 3
      },
      {
        "x": -17,
        "y": 12,
        "drill": 3
      },
      {
        "x": 17,
        "y": 12,
        "drill": 3
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-adum1250-isolator-dfr0565"]["provenance"],
    "numericLabels": true,
    "internalConnections": [
      [
        "p1",
        "p5"
      ],
      [
        "p2",
        "p6"
      ],
      [
        "p3",
        "p7"
      ],
      [
        "p4",
        "p8"
      ],
      [
        "p9",
        "p13"
      ],
      [
        "p10",
        "p14"
      ],
      [
        "p11",
        "p15"
      ],
      [
        "p12",
        "p16"
      ]
    ]
  },
  {
    "id": "dfrobot-isolated-rs485-uart-dfr0845",
    "sku": "DFR0845",
    "name": "DFRobot Gravity: Active Isolated RS485 to UART Signal Adapter Module",
    "manufacturer": "DFRobot",
    "category": "Interfaces",
    "revision": "V1.0 / cited manufacturer pinmap and schematic",
    "source": "https://wiki.dfrobot.com/dfr0845/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/DFR0845/DFR0845_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17659/DFR0845_gravity-activate-isolated-rs485-to-uart-module_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/17659/DFR0845_gravity-activate-isolated-rs485-to-uart-module_schematics_V1.0.pdf"
    ],
    "description": "Active isolated RS485/UART adapter with automatic bus direction, 120 Ω termination switch and auxiliary 12 V supply terminals. T is the module transmit-data input from host TX; R is its received-data output to host RX. The two 12 V connectors share source net 12V_1/PGND. Their ground is isolated from the Gravity UART controller ground.",
    "tags": [
      "module",
      "isolated-rs485-uart",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2392.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 37,
      "height": 47,
      "color": "#272d29",
      "outline": "M-17.2 -23.5H17.2A1.3 1.3 0 0 1 18.5 -22.2V22.2A1.3 1.3 0 0 1 17.2 23.5H-17.2A1.3 1.3 0 0 1 -18.5 22.2V-22.2A1.3 1.3 0 0 1 -17.2 -23.5Z"
    },
    "contacts": assets["dfrobot-isolated-rs485-uart-dfr0845"]["contacts"],
    "artwork": assets["dfrobot-isolated-rs485-uart-dfr0845"]["artwork"],
    "holes": [
      {
        "x": -15,
        "y": -20,
        "drill": 3.1
      },
      {
        "x": 15,
        "y": -20,
        "drill": 3.1
      },
      {
        "x": -15,
        "y": 20,
        "drill": 3.1
      },
      {
        "x": 15,
        "y": 20,
        "drill": 3.1
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": assets["dfrobot-isolated-rs485-uart-dfr0845"]["provenance"],
    "numericLabels": false,
    "internalConnections": [
      [
        "p1",
        "p5"
      ],
      [
        "p2",
        "p6"
      ]
    ]
  },
  {
    "id": "dfrobot-in100-beacon-tel0168",
    "sku": "TEL0168",
    "name": "DFRobot Fermion: BLE Sensor Beacon Pack (5PCS)",
    "manufacturer": "DFRobot",
    "category": "Wireless",
    "revision": "V1.0.0 / manufacturer layout dated 2023-07-24 and schematic V1.0",
    "source": "https://wiki.dfrobot.com/tel0168/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/TEL0168/TEL0168_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21801/TEL0168_fermion-in100-ble-sensor-beacon_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/21801/TEL0168_fermion-in100-ble-sensor-beacon_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/21801/TEL0168_fermion-in100-ble-sensor-beacon_schematics_V1.0.pdf"
    ],
    "description": "One IN100 BLE sensor-beacon module from the five-piece TEL0168 pack. All sixteen edge terminals, both contacts of each of the five optional pull-up jumpers, and both coin-cell holder terminals are included. The battery is removed to expose its mating contacts. VBAT, programming VCC/VDDQ and switched sensor output SW0 are separate power functions.",
    "tags": [
      "module",
      "in100-beacon",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2765.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 35,
      "height": 42,
      "color": "#272d29",
      "outline": "M-16.2 -21.0H16.2A1.3 1.3 0 0 1 17.5 -19.7V19.7A1.3 1.3 0 0 1 16.2 21.0H-16.2A1.3 1.3 0 0 1 -17.5 19.7V-19.7A1.3 1.3 0 0 1 -16.2 -21.0Z"
    },
    "contacts": assets["dfrobot-in100-beacon-tel0168"]["contacts"],
    "artwork": assets["dfrobot-in100-beacon-tel0168"]["artwork"],
    "holes": [
      {
        "x": -15,
        "y": -19,
        "drill": 2
      },
      {
        "x": 15,
        "y": -19,
        "drill": 2
      },
      {
        "x": -15,
        "y": 19,
        "drill": 2
      },
      {
        "x": 15,
        "y": 19,
        "drill": 2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier with source-reviewed physical contact positions. Copper, drill and wire/mating-contact lands are selected representative geometry; this is not the original board production land pattern or an asserted mating footprint. Unnumbered source labels are used as terminal identifiers where a connector number is not published.",
    "viewLabel": "COMPONENT SIDE · BATTERY REMOVED",
    "provenance": assets["dfrobot-in100-beacon-tel0168"]["provenance"],
    "numericLabels": true,
    "footprintPads": assets["dfrobot-in100-beacon-tel0168"]["footprintPads"],
    "internalConnections": [
      [
        "p3",
        "p8",
        "p11",
        "p16",
        "p28"
      ],
      [
        "p4",
        "p27"
      ],
      [
        "p14",
        "p18"
      ],
      [
        "p10",
        "p20"
      ],
      [
        "p9",
        "p22"
      ],
      [
        "p2",
        "p24"
      ],
      [
        "p1",
        "p26"
      ]
    ]
  },
];
