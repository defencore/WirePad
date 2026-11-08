import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";

// Physical package maps checked against the manufacturer references retained per part.
const specifications = [
  {
    "id": "max485esa",
    "name": "MAX485ESA+ RS-485 transceiver",
    "part": "MAX485ESA+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX1487-MAX491.pdf",
    "packageName": "SOIC-8 (S8)",
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "RS-485 transceiver",
    "description": "Half-duplex 2.5 Mbps RS-485/RS-422 physical-layer transceiver.",
    "pins": [
      [
        "RO",
        "output",
        "Receiver logic output; high for non-inverting A above B."
      ],
      [
        "RE#",
        "input",
        "Active-low receiver enable."
      ],
      [
        "DE",
        "input",
        "Active-high driver enable."
      ],
      [
        "DI",
        "input",
        "Driver logic data input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "A",
        "bidirectional",
        "Non-inverting differential bus input/output."
      ],
      [
        "B",
        "bidirectional",
        "Inverting differential bus input/output."
      ],
      [
        "VCC",
        "power_in",
        "Supply 4.75–5.25 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "rs-485 transceiver"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/MAX485ESA/1495323",
      "status": "DigiKey exact Analog Devices MAX485ESA+ listing showed 10,927 in stock."
    }
  },
  {
    "id": "max3485esa",
    "name": "MAX3485ESA+ 3.3 V RS-485 transceiver",
    "part": "MAX3485ESA+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3483-MAX3491.pdf",
    "packageName": "SOIC-8 (S8)",
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "3.3 V RS-485 transceiver",
    "description": "Half-duplex 10 Mbps RS-485/RS-422 transceiver with a 3.3 V logic supply.",
    "pins": [
      [
        "RO",
        "output",
        "Receiver logic output; high for non-inverting A above B."
      ],
      [
        "RE#",
        "input",
        "Active-low receiver enable."
      ],
      [
        "DE",
        "input",
        "Active-high driver enable."
      ],
      [
        "DI",
        "input",
        "Driver logic data input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "A",
        "bidirectional",
        "Non-inverting differential bus input/output."
      ],
      [
        "B",
        "bidirectional",
        "Inverting differential bus input/output."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.0–3.6 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "3.3 v rs-485 transceiver"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/MAX3485ESA/1702240",
      "status": "DigiKey exact Analog Devices MAX3485ESA+ listing showed 4,462 in stock."
    }
  },
  {
    "id": "max3232ese",
    "name": "MAX3232ESE+ RS-232 transceiver",
    "part": "MAX3232ESE+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3222-MAX3241.pdf",
    "packageName": "SOIC-16 (S16)",
    "kind": "soic",
    "body": [
      3.9,
      9.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "RS-232 transceiver",
    "description": "Two-driver/two-receiver RS-232 transceiver with external charge-pump capacitors.",
    "pins": [
      [
        "C1+",
        "passive",
        "Positive terminal of charge-pump flying capacitor C1."
      ],
      [
        "V+",
        "passive",
        "Positive generated charge-pump reservoir node; bypass as specified."
      ],
      [
        "C1−",
        "passive",
        "Negative terminal of charge-pump flying capacitor C1."
      ],
      [
        "C2+",
        "passive",
        "Positive terminal of charge-pump flying capacitor C2."
      ],
      [
        "C2−",
        "passive",
        "Negative terminal of charge-pump flying capacitor C2."
      ],
      [
        "V−",
        "passive",
        "Negative generated charge-pump reservoir node; bypass as specified."
      ],
      [
        "T2OUT",
        "output",
        "RS-232 driver 2 line output."
      ],
      [
        "R2IN",
        "input",
        "RS-232 receiver 2 line input."
      ],
      [
        "R2OUT",
        "output",
        "Logic-level receiver 2 output."
      ],
      [
        "T2IN",
        "input",
        "Logic-level transmitter 2 input."
      ],
      [
        "T1IN",
        "input",
        "Logic-level transmitter 1 input."
      ],
      [
        "R1OUT",
        "output",
        "Logic-level receiver 1 output."
      ],
      [
        "R1IN",
        "input",
        "RS-232 receiver 1 line input."
      ],
      [
        "T1OUT",
        "output",
        "RS-232 driver 1 line output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.0–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "rs-232 transceiver"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/MAX3232ESE/1512677",
      "status": "DigiKey exact Analog Devices MAX3232ESE+ listing showed 1,682 in stock."
    }
  },
  {
    "id": "mcp2562-e-p",
    "name": "MCP2562-E/P CAN transceiver",
    "part": "MCP2562-E/P",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/20005167C.pdf",
    "packageName": "PDIP-8 (P)",
    "kind": "dip",
    "body": [
      6.35,
      9.53
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "CAN transceiver",
    "description": "High-speed CAN physical-layer transceiver with a separate logic I/O rail.",
    "pins": [
      [
        "TXD",
        "input",
        "CAN controller transmit data input, low drives dominant."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 4.5–5.5 V."
      ],
      [
        "RXD",
        "output",
        "CAN receiver logic output."
      ],
      [
        "VIO",
        "power_in",
        "Supply 1.8–5.5 V digital I/O supply."
      ],
      [
        "CANL",
        "bidirectional",
        "Low-side differential CAN bus."
      ],
      [
        "CANH",
        "bidirectional",
        "High-side differential CAN bus."
      ],
      [
        "STBY",
        "input",
        "High selects low-power standby; low selects normal mode."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "can transceiver"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/microchip/mcp2562-e-p/can-interf-can-transceiver-1mbps/dp/12X8699",
      "status": "Newark listed 856 in stock."
    }
  },
  {
    "id": "sn65hvd230dr",
    "name": "SN65HVD230DR 3.3 V CAN transceiver",
    "part": "SN65HVD230DR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/sn65hvd230.pdf",
    "packageName": "SOIC-8 (D)",
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "3.3 V CAN transceiver",
    "description": "1 Mbps CAN transceiver with slope-control/standby selection and a reference output.",
    "pins": [
      [
        "D",
        "input",
        "Logic transmit data input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.0–3.6 V."
      ],
      [
        "R",
        "output",
        "Logic receive data output."
      ],
      [
        "Vref",
        "output",
        "VCC/2 analog reference output; observe specified loading."
      ],
      [
        "CANL",
        "bidirectional",
        "CAN low bus terminal."
      ],
      [
        "CANH",
        "bidirectional",
        "CAN high bus terminal."
      ],
      [
        "RS",
        "input",
        "Ground for high speed, resistor to ground for slope control, high for standby."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "3.3 v can transceiver"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/SN65HVD230DR/404367",
      "status": "DigiKey exact Texas Instruments SN65HVD230DR listing showed 100,149 in stock."
    }
  },
  {
    "id": "mcp2515-i-p",
    "name": "MCP2515-I/P SPI CAN controller",
    "part": "MCP2515-I/P",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/MCP2515-Stand-Alone-CAN-Controller-with-SPI-20001801J.pdf",
    "packageName": "PDIP-18 (P)",
    "kind": "dip",
    "body": [
      6.35,
      22.86
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "SPI CAN controller",
    "description": "Stand-alone CAN 2.0B controller; requires an external CAN physical-layer transceiver.",
    "pins": [
      [
        "TXCAN",
        "output",
        "Logic transmit data to external CAN transceiver."
      ],
      [
        "RXCAN",
        "input",
        "Logic receive data from external CAN transceiver."
      ],
      [
        "CLKOUT/SOF",
        "output",
        "Programmable clock or start-of-frame output."
      ],
      [
        "TX0RTS#",
        "input",
        "Active-low request-to-send buffer 0 or digital input."
      ],
      [
        "TX1RTS#",
        "input",
        "Active-low request-to-send buffer 1 or digital input."
      ],
      [
        "TX2RTS#",
        "input",
        "Active-low request-to-send buffer 2 or digital input."
      ],
      [
        "OSC2",
        "output",
        "Crystal oscillator output."
      ],
      [
        "OSC1",
        "input",
        "Crystal oscillator or external clock input."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "RX1BF#",
        "output",
        "Receive buffer 1 interrupt or general-purpose output."
      ],
      [
        "RX0BF#",
        "output",
        "Receive buffer 0 interrupt or general-purpose output."
      ],
      [
        "INT#",
        "output",
        "Active-low interrupt output."
      ],
      [
        "SCK",
        "input",
        "SPI clock input."
      ],
      [
        "SI",
        "input",
        "SPI serial data input."
      ],
      [
        "SO",
        "output",
        "SPI serial data output."
      ],
      [
        "CS#",
        "input",
        "Active-low SPI chip select."
      ],
      [
        "RESET#",
        "input",
        "Active-low hardware reset."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.7–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "spi can controller"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://canada.newark.com/microchip/mcp2515-i-p/controller-can-spi-pdip18-2515/dp/58M8895",
      "status": "Newark listed 2,280 in stock."
    }
  },
  {
    "id": "sc16is752ipw",
    "name": "SC16IS752IPW,128 Dual UART bridge",
    "part": "SC16IS752IPW,128",
    "manufacturer": "NXP Semiconductors",
    "source": "https://www.nxp.com/docs/en/data-sheet/SC16IS752_SC16IS762.pdf",
    "packageName": "TSSOP-28 (SOT361-1)",
    "kind": "tssop",
    "body": [
      4.4,
      9.7
    ],
    "rowSpacing": 5.8,
    "pitch": 0.65,
    "subtitle": "Dual UART bridge",
    "description": "Dual UART with I2C or SPI host interface, 64-byte FIFOs and eight configurable modem/GPIO contacts.",
    "pins": [
      [
        "RTSA#",
        "output",
        "RTSA# digital output."
      ],
      [
        "CTSA#",
        "input",
        "CTSA# digital input."
      ],
      [
        "TXA",
        "output",
        "TXA digital output."
      ],
      [
        "RXA",
        "input",
        "RXA digital input."
      ],
      [
        "RESET#",
        "input",
        "Active-low hardware reset."
      ],
      [
        "XTAL1",
        "input",
        "Crystal/external-clock input."
      ],
      [
        "XTAL2",
        "output",
        "Crystal oscillator output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.5 V or 3.3 V nominal; see electrical conditions."
      ],
      [
        "I2C/SPI#",
        "input",
        "High selects I2C; low selects SPI."
      ],
      [
        "CS#/A0",
        "input",
        "SPI chip select or I2C address select."
      ],
      [
        "SI/A1",
        "input",
        "SPI data input or I2C address select."
      ],
      [
        "SO",
        "output",
        "SPI data output; leave unconnected in I2C mode."
      ],
      [
        "SCL/SCLK",
        "input",
        "I2C or SPI clock input."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C open-drain data; tie to VSS in SPI mode."
      ],
      [
        "IRQ#",
        "open_collector",
        "Active-low open-drain interrupt output; requires pull-up."
      ],
      [
        "CTSB#",
        "input",
        "CTSB# digital input."
      ],
      [
        "RTSB#",
        "output",
        "RTSB# digital output."
      ],
      [
        "GPIO0/DSRB#",
        "bidirectional",
        "GPIO 0/DSRB# programmable digital input/output."
      ],
      [
        "GPIO1/DTRB#",
        "bidirectional",
        "GPIO 1/DTRB# programmable digital input/output."
      ],
      [
        "GPIO2/CDB#",
        "bidirectional",
        "GPIO 2/CDB# programmable digital input/output."
      ],
      [
        "GPIO3/RIB#",
        "bidirectional",
        "GPIO 3/RIB# programmable digital input/output."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "TXB",
        "output",
        "TXB digital output."
      ],
      [
        "RXB",
        "input",
        "RXB digital input."
      ],
      [
        "GPIO4/DSRA#",
        "bidirectional",
        "GPIO 4/DSRA# programmable digital input/output."
      ],
      [
        "GPIO5/DTRA#",
        "bidirectional",
        "GPIO 5/DTRA# programmable digital input/output."
      ],
      [
        "GPIO6/CDA#",
        "bidirectional",
        "GPIO 6/CDA# programmable digital input/output."
      ],
      [
        "GPIO7/RIA#",
        "bidirectional",
        "GPIO 7/RIA# programmable digital input/output."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "dual uart bridge"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/nxp/sc16is752ipw-128/uart-5mbps-40-to-95deg-c/dp/31AC6922",
      "status": "Newark listed 6,129 in-stock cut-tape/re-reel units."
    }
  },
  {
    "id": "max3100eee",
    "name": "MAX3100EEE+ SPI UART bridge",
    "part": "MAX3100EEE+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3100.pdf",
    "packageName": "QSOP-16 (E16)",
    "kind": "tssop",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 0.635,
    "subtitle": "SPI UART bridge",
    "description": "SPI/MICROWIRE UART with 8-word receive FIFO, IrDA timing mode and hardware handshaking.",
    "pins": [
      [
        "DIN",
        "input",
        "SPI serial data input."
      ],
      [
        "DOUT",
        "output",
        "SPI serial data output; high impedance when CS is high."
      ],
      [
        "SCLK",
        "input",
        "SCLK digital input."
      ],
      [
        "CS#",
        "input",
        "CS# digital input."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "IRQ#",
        "open_collector",
        "Active-low open-drain interrupt output."
      ],
      [
        "SHDN#",
        "input",
        "Low selects hardware shutdown."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "X2",
        "output",
        "Crystal oscillator output; leave open with external clock."
      ],
      [
        "X1",
        "input",
        "Crystal oscillator/external-clock input."
      ],
      [
        "CTS#",
        "input",
        "CTS# digital input."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "RTS#",
        "output",
        "RTS# digital output."
      ],
      [
        "RX",
        "input",
        "Asynchronous serial receiver input."
      ],
      [
        "TX",
        "output",
        "Asynchronous serial transmitter output."
      ],
      [
        "VCC",
        "power_in",
        "Supply 2.7–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "spi uart bridge"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/MAX3100EEE/947882",
      "status": "DigiKey exact Analog Devices MAX3100EEE+ listing showed 298 in stock."
    }
  },
  {
    "id": "mcp23008-e-p",
    "name": "MCP23008-E/P I2C 8-bit GPIO expander",
    "part": "MCP23008-E/P",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/21919e.pdf",
    "packageName": "PDIP-18 (P)",
    "kind": "dip",
    "body": [
      6.35,
      22.86
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "I2C 8-bit GPIO expander",
    "description": "Eight independently configurable GPIO contacts with external reset and interrupt-on-change.",
    "pins": [
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C serial data; external pull-up required."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "RESET#",
        "input",
        "RESET# digital input."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "INT",
        "output",
        "Configurable active-low/high or open-drain interrupt."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "GP0",
        "bidirectional",
        "GP0 programmable digital input/output."
      ],
      [
        "GP1",
        "bidirectional",
        "GP1 programmable digital input/output."
      ],
      [
        "GP2",
        "bidirectional",
        "GP2 programmable digital input/output."
      ],
      [
        "GP3",
        "bidirectional",
        "GP3 programmable digital input/output."
      ],
      [
        "GP4",
        "bidirectional",
        "GP4 programmable digital input/output."
      ],
      [
        "GP5",
        "bidirectional",
        "GP5 programmable digital input/output."
      ],
      [
        "GP6",
        "bidirectional",
        "GP6 programmable digital input/output."
      ],
      [
        "GP7",
        "bidirectional",
        "GP7 programmable digital input/output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V at −40 to +85 °C; 4.5–5.5 V at +125 °C."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "i2c 8-bit gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP23008-E-P/735951",
      "status": "DigiKey exact Microchip Technology MCP23008-E/P listing showed 4,730 in stock."
    }
  },
  {
    "id": "mcp23s08-e-p",
    "name": "MCP23S08-E/P SPI 8-bit GPIO expander",
    "part": "MCP23S08-E/P",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/21919e.pdf",
    "packageName": "PDIP-18 (P)",
    "kind": "dip",
    "body": [
      6.35,
      22.86
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "SPI 8-bit GPIO expander",
    "description": "Eight independently configurable GPIO contacts with external reset and interrupt-on-change.",
    "pins": [
      [
        "SCK",
        "input",
        "SCK digital input."
      ],
      [
        "SI",
        "input",
        "SI digital input."
      ],
      [
        "SO",
        "output",
        "SO digital output."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "RESET#",
        "input",
        "RESET# digital input."
      ],
      [
        "CS#",
        "input",
        "CS# digital input."
      ],
      [
        "INT",
        "output",
        "Configurable active-low/high or open-drain interrupt."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "GP0",
        "bidirectional",
        "GP0 programmable digital input/output."
      ],
      [
        "GP1",
        "bidirectional",
        "GP1 programmable digital input/output."
      ],
      [
        "GP2",
        "bidirectional",
        "GP2 programmable digital input/output."
      ],
      [
        "GP3",
        "bidirectional",
        "GP3 programmable digital input/output."
      ],
      [
        "GP4",
        "bidirectional",
        "GP4 programmable digital input/output."
      ],
      [
        "GP5",
        "bidirectional",
        "GP5 programmable digital input/output."
      ],
      [
        "GP6",
        "bidirectional",
        "GP6 programmable digital input/output."
      ],
      [
        "GP7",
        "bidirectional",
        "GP7 programmable digital input/output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V at −40 to +85 °C; 4.5–5.5 V at +125 °C."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "spi 8-bit gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://canada.newark.com/microchip/mcp23s08-e-p/8bit-expander-i-o-spi-i-f-dip18/dp/34M7436",
      "status": "Newark listed 515 in stock."
    }
  },
  {
    "id": "mcp23017-e-sp",
    "name": "MCP23017-E/SP I2C 16-bit GPIO expander",
    "part": "MCP23017-E/SP",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf",
    "packageName": "SPDIP-28 (SP)",
    "kind": "dip",
    "body": [
      6.35,
      34.8
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "I2C 16-bit GPIO expander",
    "description": "Two independently configurable 8-bit GPIO ports with reset and per-port interrupts.",
    "pins": [
      [
        "GPB0",
        "bidirectional",
        "GPB0 programmable digital input/output."
      ],
      [
        "GPB1",
        "bidirectional",
        "GPB1 programmable digital input/output."
      ],
      [
        "GPB2",
        "bidirectional",
        "GPB2 programmable digital input/output."
      ],
      [
        "GPB3",
        "bidirectional",
        "GPB3 programmable digital input/output."
      ],
      [
        "GPB4",
        "bidirectional",
        "GPB4 programmable digital input/output."
      ],
      [
        "GPB5",
        "bidirectional",
        "GPB5 programmable digital input/output."
      ],
      [
        "GPB6",
        "bidirectional",
        "GPB6 programmable digital input/output."
      ],
      [
        "GPB7",
        "bidirectional",
        "GPB7 programmable digital input/output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V at −40 to +85 °C; 4.5–5.5 V at +125 °C."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C data; external pull-up required."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "RESET#",
        "input",
        "RESET# digital input."
      ],
      [
        "INTB",
        "output",
        "Port B configurable interrupt output."
      ],
      [
        "INTA",
        "output",
        "Port A configurable interrupt output."
      ],
      [
        "GPA0",
        "bidirectional",
        "GPA0 programmable digital input/output."
      ],
      [
        "GPA1",
        "bidirectional",
        "GPA1 programmable digital input/output."
      ],
      [
        "GPA2",
        "bidirectional",
        "GPA2 programmable digital input/output."
      ],
      [
        "GPA3",
        "bidirectional",
        "GPA3 programmable digital input/output."
      ],
      [
        "GPA4",
        "bidirectional",
        "GPA4 programmable digital input/output."
      ],
      [
        "GPA5",
        "bidirectional",
        "GPA5 programmable digital input/output."
      ],
      [
        "GPA6",
        "bidirectional",
        "GPA6 programmable digital input/output."
      ],
      [
        "GPA7",
        "bidirectional",
        "GPA7 programmable digital input/output."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "i2c 16-bit gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/MCP23017-E%2FSP/MCP23017-E%2FSP-ND/894272",
      "status": "DigiKey exact Microchip Technology MCP23017-E/SP listing showed 8,830 in stock."
    }
  },
  {
    "id": "mcp23s17-e-sp",
    "name": "MCP23S17-E/SP SPI 16-bit GPIO expander",
    "part": "MCP23S17-E/SP",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf",
    "packageName": "SPDIP-28 (SP)",
    "kind": "dip",
    "body": [
      6.35,
      34.8
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "subtitle": "SPI 16-bit GPIO expander",
    "description": "Two independently configurable 8-bit GPIO ports with reset and per-port interrupts.",
    "pins": [
      [
        "GPB0",
        "bidirectional",
        "GPB0 programmable digital input/output."
      ],
      [
        "GPB1",
        "bidirectional",
        "GPB1 programmable digital input/output."
      ],
      [
        "GPB2",
        "bidirectional",
        "GPB2 programmable digital input/output."
      ],
      [
        "GPB3",
        "bidirectional",
        "GPB3 programmable digital input/output."
      ],
      [
        "GPB4",
        "bidirectional",
        "GPB4 programmable digital input/output."
      ],
      [
        "GPB5",
        "bidirectional",
        "GPB5 programmable digital input/output."
      ],
      [
        "GPB6",
        "bidirectional",
        "GPB6 programmable digital input/output."
      ],
      [
        "GPB7",
        "bidirectional",
        "GPB7 programmable digital input/output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V at −40 to +85 °C; 4.5–5.5 V at +125 °C."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "CS#",
        "input",
        "CS# digital input."
      ],
      [
        "SCK",
        "input",
        "SCK digital input."
      ],
      [
        "SI",
        "input",
        "SI digital input."
      ],
      [
        "SO",
        "output",
        "SO digital output."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "RESET#",
        "input",
        "RESET# digital input."
      ],
      [
        "INTB",
        "output",
        "Port B configurable interrupt output."
      ],
      [
        "INTA",
        "output",
        "Port A configurable interrupt output."
      ],
      [
        "GPA0",
        "bidirectional",
        "GPA0 programmable digital input/output."
      ],
      [
        "GPA1",
        "bidirectional",
        "GPA1 programmable digital input/output."
      ],
      [
        "GPA2",
        "bidirectional",
        "GPA2 programmable digital input/output."
      ],
      [
        "GPA3",
        "bidirectional",
        "GPA3 programmable digital input/output."
      ],
      [
        "GPA4",
        "bidirectional",
        "GPA4 programmable digital input/output."
      ],
      [
        "GPA5",
        "bidirectional",
        "GPA5 programmable digital input/output."
      ],
      [
        "GPA6",
        "bidirectional",
        "GPA6 programmable digital input/output."
      ],
      [
        "GPA7",
        "bidirectional",
        "GPA7 programmable digital input/output."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "spi 16-bit gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/microchip/mcp23s17-e-sp/i-o-expander-16-bit-10mhz-dip/dp/31K2951",
      "status": "Newark listed 1,244 in stock."
    }
  },
  {
    "id": "pcf8574t",
    "name": "PCF8574T/3,518 Quasi-bidirectional I2C expander",
    "part": "PCF8574T/3,518",
    "manufacturer": "NXP Semiconductors",
    "source": "https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf",
    "packageName": "SO-16 (SOT162-1)",
    "kind": "soic",
    "body": [
      7.5,
      10.3
    ],
    "rowSpacing": 9.4,
    "pitch": 1.27,
    "subtitle": "Quasi-bidirectional I2C expander",
    "description": "Eight quasi-bidirectional ports and a 100 kHz I2C interface.",
    "pins": [
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "P0",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P1",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P2",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P3",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "P4",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P5",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P6",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "P7",
        "bidirectional",
        "Quasi-bidirectional port with weak high current source; write high before reading."
      ],
      [
        "INT#",
        "open_collector",
        "Active-low open-drain input-change interrupt; external pull-up required."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C serial data; external pull-up required."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.5–6 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "quasi-bidirectional i2c expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://fat.lcsc.com/product-detail/C7605.html",
      "status": "LCSC listed 1,524 in stock; not recommended for new designs."
    }
  },
  {
    "id": "pcf8575dbr",
    "name": "PCF8575DBR 16-bit quasi-bidirectional I2C expander",
    "part": "PCF8575DBR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/pcf8575.pdf",
    "packageName": "SSOP-24 (DB)",
    "kind": "tssop",
    "body": [
      5.3,
      8.2
    ],
    "rowSpacing": 6.6,
    "pitch": 0.65,
    "subtitle": "16-bit quasi-bidirectional I2C expander",
    "description": "Sixteen quasi-bidirectional contacts in two 8-bit ports with a shared interrupt.",
    "pins": [
      [
        "INT#",
        "open_collector",
        "Active-low open-drain interrupt."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "P00",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P01",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P02",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P03",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P04",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P05",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P06",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P07",
        "bidirectional",
        "Port 0 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "P10",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P11",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P12",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P13",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P14",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P15",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P16",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "P17",
        "bidirectional",
        "Port 1 quasi-bidirectional I/O; write high before reading."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA programmable digital input/output."
      ],
      [
        "VCC",
        "power_in",
        "Supply 2.5–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "16-bit quasi-bidirectional i2c expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/PCF8575DBR/754551",
      "status": "DigiKey exact Texas Instruments PCF8575DBR listing showed 1,454 in stock."
    }
  },
  {
    "id": "pca9536d",
    "name": "PCA9536D,118 4-bit I2C GPIO expander",
    "part": "PCA9536D,118",
    "manufacturer": "NXP Semiconductors",
    "source": "https://www.nxp.com/docs/en/data-sheet/PCA9536.pdf",
    "packageName": "SO-8 (SOT96-1)",
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "4-bit I2C GPIO expander",
    "description": "Four configurable parallel GPIOs at a fixed I2C address.",
    "pins": [
      [
        "IO0",
        "bidirectional",
        "IO 0 programmable digital input/output."
      ],
      [
        "IO1",
        "bidirectional",
        "IO 1 programmable digital input/output."
      ],
      [
        "IO2",
        "bidirectional",
        "IO 2 programmable digital input/output."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "IO3",
        "bidirectional",
        "IO 3 programmable digital input/output."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA programmable digital input/output."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.3–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "4-bit i2c gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/nxp-usa-inc/PCA9536D-118/789924",
      "status": "DigiKey exact NXP Semiconductors PCA9536D,118 listing showed 5,973 in stock. Not for new designs."
    }
  },
  {
    "id": "tca9554dwr",
    "name": "TCA9554DWR 8-bit I2C GPIO expander",
    "part": "TCA9554DWR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/tca9554.pdf",
    "packageName": "SOIC-16 (DW)",
    "kind": "soic",
    "body": [
      7.5,
      10.3
    ],
    "rowSpacing": 9.4,
    "pitch": 1.27,
    "subtitle": "8-bit I2C GPIO expander",
    "description": "Low-voltage 400 kHz I2C/SMBus expander with independent GPIO direction registers.",
    "pins": [
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "P0",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P1",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P2",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P3",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "P4",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P5",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P6",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "P7",
        "bidirectional",
        "Configurable push-pull GPIO, input after power-on reset."
      ],
      [
        "INT#",
        "open_collector",
        "Active-low open-drain input-change interrupt; external pull-up required."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "Open-drain I2C serial data; external pull-up required."
      ],
      [
        "VCC",
        "power_in",
        "Supply 1.65–5.5 V."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "8-bit i2c gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.ca/en/products/detail/texas-instruments/TCA9554DWR/9745995",
      "status": "DigiKey exact Texas Instruments TCA9554DWR listing showed 822 in stock."
    }
  },
  {
    "id": "ds2482s-100",
    "name": "DS2482S-100+ I2C to 1-Wire master",
    "part": "DS2482S-100+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/DS2482-100.pdf",
    "packageName": "SOIC-8 (150 mil)",
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "I2C to 1-Wire master",
    "description": "Single-channel self-timed 1-Wire master with strong pull-up support.",
    "pins": [
      [
        "VCC",
        "power_in",
        "Supply 2.9–5.5 V."
      ],
      [
        "IO",
        "bidirectional",
        "1-Wire bus driver with active/strong pull-up modes."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA programmable digital input/output."
      ],
      [
        "PCTLZ",
        "output",
        "Active-low external p-channel MOSFET control output."
      ],
      [
        "AD1",
        "input",
        "AD1 digital input."
      ],
      [
        "AD0",
        "input",
        "AD0 digital input."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "i2c to 1-wire master"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.ca/en/products/detail/analog-devices-inc-maxim-integrated/DS2482S-100/1197435",
      "status": "DigiKey exact Analog Devices DS2482S-100+ listing showed 8,740 in stock."
    }
  },
  {
    "id": "ds2482s-800",
    "name": "DS2482S-800+ Eight-channel I2C to 1-Wire master",
    "part": "DS2482S-800+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/DS2482-800.pdf",
    "packageName": "SOIC-16 (150 mil)",
    "kind": "soic",
    "body": [
      3.9,
      9.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "Eight-channel I2C to 1-Wire master",
    "description": "Eight selectable independent 1-Wire buses behind one self-timed I2C master interface.",
    "pins": [
      [
        "IO3",
        "bidirectional",
        "1-Wire channel 3 bus."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA programmable digital input/output."
      ],
      [
        "VCC",
        "power_in",
        "Supply 2.9–5.5 V."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "AD2",
        "input",
        "AD2 digital input."
      ],
      [
        "AD1",
        "input",
        "AD1 digital input."
      ],
      [
        "AD0",
        "input",
        "AD0 digital input."
      ],
      [
        "IO7",
        "bidirectional",
        "IO 7 programmable digital input/output."
      ],
      [
        "IO6",
        "bidirectional",
        "IO 6 programmable digital input/output."
      ],
      [
        "IO5",
        "bidirectional",
        "IO 5 programmable digital input/output."
      ],
      [
        "IO4",
        "bidirectional",
        "IO 4 programmable digital input/output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "IO0",
        "bidirectional",
        "IO 0 programmable digital input/output."
      ],
      [
        "IO1",
        "bidirectional",
        "IO 1 programmable digital input/output."
      ],
      [
        "IO2",
        "bidirectional",
        "IO 2 programmable digital input/output."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "eight-channel i2c to 1-wire master"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/ds2482s-800/interface-bridge-i2c-to-1wire/dp/81Y9078",
      "status": "Newark listed 263 in stock."
    }
  },
  {
    "id": "ds2408s",
    "name": "DS2408S+ 1-Wire 8-bit GPIO expander",
    "part": "DS2408S+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/DS2408.pdf",
    "packageName": "SOIC-16 (150 mil)",
    "kind": "soic",
    "body": [
      3.9,
      9.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "1-Wire 8-bit GPIO expander",
    "description": "Eight addressable open-drain ports with activity latches and optional parasitic supply.",
    "pins": [
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "P0",
        "bidirectional",
        "Logic input/open-drain output channel 0."
      ],
      [
        "VCC",
        "power_in",
        "Supply 2.8–5.25 V optional; tie to GND when parasitically powered."
      ],
      [
        "I/O",
        "bidirectional",
        "Open-drain 1-Wire interface; external pull-up required."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "P7",
        "bidirectional",
        "P7 programmable digital input/output."
      ],
      [
        "P6",
        "bidirectional",
        "P6 programmable digital input/output."
      ],
      [
        "P5",
        "bidirectional",
        "P5 programmable digital input/output."
      ],
      [
        "RSTZ",
        "bidirectional",
        "Configurable active-low reset input or open-drain strobe output; reset input at power-on."
      ],
      [
        "P4",
        "bidirectional",
        "P4 programmable digital input/output."
      ],
      [
        "P3",
        "bidirectional",
        "P3 programmable digital input/output."
      ],
      [
        "P2",
        "bidirectional",
        "P2 programmable digital input/output."
      ],
      [
        "P1",
        "bidirectional",
        "P1 programmable digital input/output."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; leave unconnected."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "1-wire 8-bit gpio expander"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/DS2408S/1197414",
      "status": "DigiKey exact Analog Devices DS2408S+ listing showed 6,128 in stock."
    }
  },
  {
    "id": "ch340g-ic",
    "name": "CH340G USB UART bridge",
    "part": "CH340G",
    "manufacturer": "WCH",
    "source": "https://www.wch-ic.com/downloads/CH340DS1_PDF.html",
    "packageName": "SOP-16",
    "kind": "soic",
    "body": [
      3.9,
      9.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "subtitle": "USB UART bridge",
    "description": "Full-speed USB to asynchronous serial bridge requiring a 12 MHz crystal.",
    "pins": [
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "TXD",
        "output",
        "TXD digital output."
      ],
      [
        "RXD",
        "input",
        "RXD digital input."
      ],
      [
        "V3",
        "passive",
        "Internal 3.3 V node: bypass to ground at 5 V VCC; tie to VCC for 3.3 V operation. Do not use as a general supply output."
      ],
      [
        "UD+",
        "bidirectional",
        "USB D+ transceiver terminal."
      ],
      [
        "UD−",
        "bidirectional",
        "USB D− transceiver terminal."
      ],
      [
        "XI",
        "input",
        "12 MHz crystal oscillator input."
      ],
      [
        "XO",
        "output",
        "12 MHz crystal oscillator output."
      ],
      [
        "CTS#",
        "input",
        "CTS# digital input."
      ],
      [
        "DSR#",
        "input",
        "DSR# digital input."
      ],
      [
        "RI#",
        "input",
        "RI# digital input."
      ],
      [
        "DCD#",
        "input",
        "DCD# digital input."
      ],
      [
        "DTR#",
        "output",
        "DTR# digital output."
      ],
      [
        "RTS#",
        "output",
        "RTS# digital output."
      ],
      [
        "R232",
        "input",
        "High enables auxiliary RS-232 mode; see datasheet application."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.3 V or 5 V nominal; obey V 3 wiring for selected mode."
      ]
    ],
    "tags": [
      "communication",
      "serial interface",
      "usb uart bridge"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/USB_CH340G_C14267.html",
      "status": "LCSC listed 32,744 in stock."
    }
  }
];

export default defineFamily("market-communications", specifications.map(spec => marketPackage(spec, { breadboard: spec.kind === 'dip' })));
