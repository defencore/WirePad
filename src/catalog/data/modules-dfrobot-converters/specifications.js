import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-gravity-gp8403-dfr0971",
    "sku": "DFR0971",
    "name": "Gravity: 2-Channel I2C DAC Module (0-10V)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V0.0.1",
    "source": "https://wiki.dfrobot.com/dfr0971/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2613.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_schematics_V1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_cad_V1.0.zip"
      }
    ],
    "description": "Two independently controlled 12-bit voltage outputs, selectable through the manufacturer software for 0–5V or 0–10V. The onboard boost converter generates the analog output supply. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8403",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2613.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 627,
      "usWarehouse": 0,
      "sku": "DFR0971"
    },
    "board": {
      "width": 35.0,
      "height": 27.0,
      "color": "#272d31",
      "outline": "M-17.500001 10.0L-17.482874 10.345932L-17.432128 10.686005L-17.348713 11.017924L-17.233579 11.339393L-17.087678 11.648117L-16.91196 11.941803L-16.707375 12.218153L-16.474874 12.474875L-16.218153 12.707375L-15.941802 12.91196L-15.648117 13.087678L-15.339392 13.233579L-15.017923 13.348713L-14.686005 13.432128L-14.345932 13.482874L-14.0 13.500001L14.0 13.500001L14.345932 13.482874L14.686005 13.432128L15.017923 13.348713L15.339392 13.233579L15.648117 13.087678L15.941802 12.91196L16.218153 12.707375L16.474874 12.474875L16.707375 12.218153L16.91196 11.941803L17.087678 11.648117L17.233579 11.339393L17.348713 11.017924L17.432128 10.686005L17.482874 10.345932L17.500001 10.0L17.500001 -10.0L17.482874 -10.345932L17.432128 -10.686005L17.348713 -11.017924L17.233579 -11.339393L17.087678 -11.648117L16.91196 -11.941803L16.707375 -12.218153L16.474874 -12.474875L16.218153 -12.707375L15.941802 -12.91196L15.648117 -13.087678L15.339392 -13.233579L15.017923 -13.348713L14.686005 -13.432128L14.345932 -13.482874L14.0 -13.500001L-14.0 -13.500001L-14.345932 -13.482874L-14.686005 -13.432128L-15.017923 -13.348713L-15.339392 -13.233579L-15.648117 -13.087678L-15.941802 -12.91196L-16.218153 -12.707375L-16.474874 -12.474875L-16.707375 -12.218153L-16.91196 -11.941803L-17.087678 -11.648117L-17.233579 -11.339393L-17.348713 -11.017924L-17.432128 -10.686005L-17.482874 -10.345932L-17.500001 -10.0L-17.500001 10.0Z"
    },
    "contacts": assets["dfrobot-gravity-gp8403-dfr0971"]["contacts"],
    "holes": [
      {
        "x": 14.0,
        "y": -10.0,
        "drill": 3.1
      },
      {
        "x": 14.0,
        "y": 10.0,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8403-dfr0971"]["artwork"],
    "artworkBounds": [
      -18.7,
      -13.5,
      18.7,
      13.5
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/19365/DFR0971_gp8403-dac-module_stpfile_V1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8403-dfr0971"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p2-3",
        "p1-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8302-dfr0972",
    "sku": "DFR0972",
    "name": "Gravity: I2C 4-20mA DAC Module (Arduino Compatible)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr0972/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2625.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_schematics_V1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_cad_V1.0.zip"
      }
    ],
    "description": "GP8302 current-output module. The reverse-polarity-protected VIN power input requires 18–24V; the separate VCC connector supplies the I2C pull-up reference. VOUT is the regulated current terminal, intended for 4–20mA signaling and programmable over the documented 0–25mA range. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8302",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2625.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 324,
      "usWarehouse": 18,
      "sku": "DFR0972"
    },
    "board": {
      "width": 35.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M-17.5 -12.5L-17.4829 -12.8459L-17.4321 -13.186L-17.3487 -13.5179L-17.2336 -13.8394L-17.0877 -14.1481L-16.912 -14.4418L-16.7074 -14.7181L-16.4749 -14.9748L-16.2182 -15.2074L-15.9418 -15.4119L-15.6481 -15.5877L-15.3394 -15.7336L-15.0179 -15.8487L-14.686 -15.9321L-14.3459 -15.9828L-14.0 -16.0L14.0 -16.0L14.3579 -15.9819L14.7054 -15.9289L15.0408 -15.8426L15.3624 -15.7249L15.6683 -15.5775L15.9569 -15.4022L16.2263 -15.2007L16.4749 -14.9748L16.7008 -14.7263L16.9023 -14.4569L17.0776 -14.1683L17.225 -13.8623L17.3426 -13.5408L17.4289 -13.2053L17.4819 -12.8578L17.5 -12.5L17.5 12.5L17.4819 12.8579L17.4289 13.2054L17.3426 13.5408L17.225 13.8624L17.0776 14.1683L16.9023 14.4569L16.7008 14.7263L16.4749 14.9749L16.2263 15.2008L15.9569 15.4023L15.6683 15.5776L15.3624 15.725L15.0408 15.8427L14.7054 15.9289L14.3579 15.982L14.0 16.0L-14.0 16.0L-14.3459 15.9829L-14.686 15.9322L-15.0179 15.8487L-15.3394 15.7336L-15.6481 15.5877L-15.9418 15.412L-16.2182 15.2074L-16.4749 14.9749L-16.7074 14.7182L-16.912 14.4418L-17.0877 14.1481L-17.2336 13.8394L-17.3487 13.5179L-17.4321 13.186L-17.4829 12.846L-17.5 12.5L-17.5 -12.5Z"
    },
    "contacts": assets["dfrobot-gravity-gp8302-dfr0972"]["contacts"],
    "holes": [
      {
        "x": 14.0,
        "y": -12.5,
        "drill": 3.1
      },
      {
        "x": 14.0,
        "y": 12.5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8302-dfr0972"]["artwork"],
    "artworkBounds": [
      -18.7,
      -16.0,
      18.7,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/19371/DFR0972_gp8302-dac-module_stpfile_V1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8302-dfr0972"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p1-3",
        "j2-2",
        "j1-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8512-dfr1035",
    "sku": "DFR1035",
    "name": "Gravity: GP8512 1-Channel 15-Bit I2C DAC Module (0-2.5V/VCC)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr1035/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2753.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_schematics_1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_cad_1.0.zip"
      }
    ],
    "description": "Single-channel 15-bit I2C DAC. The physical slide switch selects a 0–2.5V or 0–VCC analog output range. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8512",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2753.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 222,
      "usWarehouse": 0,
      "sku": "DFR1035"
    },
    "board": {
      "width": 35.0,
      "height": 27.0,
      "color": "#272d31",
      "outline": "M17.5 -10.0L17.5 10.0L17.482 10.3578L17.4289 10.7054L17.3427 11.0408L17.225 11.3623L17.0776 11.6683L16.9023 11.9569L16.7008 12.2263L16.4749 12.4749L16.2264 12.7008L15.9569 12.9022L15.6683 13.0776L15.3624 13.2249L15.0408 13.3426L14.7054 13.4289L14.3579 13.4819L14.0001 13.5L-14.0 13.5L-14.3578 13.4819L-14.7053 13.4289L-15.0408 13.3426L-15.3623 13.2249L-15.6683 13.0776L-15.9568 12.9022L-16.2263 12.7008L-16.4748 12.4749L-16.7007 12.2263L-16.9022 11.9569L-17.0775 11.6683L-17.2249 11.3623L-17.3426 11.0408L-17.4289 10.7054L-17.4819 10.3578L-17.5 10.0L-17.5 -10.0L-17.4819 -10.3579L-17.4289 -10.7054L-17.3426 -11.0408L-17.2249 -11.3624L-17.0775 -11.6683L-16.9022 -11.9569L-16.7007 -12.2263L-16.4748 -12.4749L-16.2263 -12.7008L-15.9568 -12.9023L-15.6683 -13.0776L-15.3623 -13.225L-15.0408 -13.3427L-14.7053 -13.4289L-14.3578 -13.482L-14.0 -13.5L14.0001 -13.5L14.3579 -13.482L14.7054 -13.4289L15.0408 -13.3427L15.3624 -13.225L15.6683 -13.0776L15.9569 -12.9023L16.2264 -12.7008L16.4749 -12.4749L16.7008 -12.2263L16.9023 -11.9569L17.0776 -11.6683L17.225 -11.3624L17.3427 -11.0408L17.4289 -10.7054L17.482 -10.3579L17.5 -10.0Z"
    },
    "contacts": assets["dfrobot-gravity-gp8512-dfr1035"]["contacts"],
    "holes": [
      {
        "x": -14.01,
        "y": -10.0,
        "drill": 3.1
      },
      {
        "x": -14.01,
        "y": 10.0,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8512-dfr1035"]["artwork"],
    "artworkBounds": [
      -18.7,
      -13.5,
      18.7,
      13.5
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18634/DFR1035_gp8512-dac_stpfile_1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8512-dfr1035"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p1-3",
        "p2-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8101s-dfr1036",
    "sku": "DFR1036",
    "name": "Gravity: GP8101S 1-Channel PWM to 0-5V/10V DAC Module",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr1036/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2752.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_schematics_1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_cad_1.0.zip"
      }
    ],
    "description": "Single-channel PWM-to-voltage converter. The slide switch selects a 0–5V or 0–10V output; the onboard boost stage generates the required analog supply. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8101S",
      "gravity",
      "pwm",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2752.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 553,
      "usWarehouse": 0,
      "sku": "DFR1036"
    },
    "board": {
      "width": 35.0,
      "height": 27.0,
      "color": "#272d31",
      "outline": "M-17.5 10.0L-17.5 -10.0L-17.482 -10.3579L-17.4289 -10.7054L-17.3427 -11.0408L-17.225 -11.3624L-17.0776 -11.6683L-16.9023 -11.9569L-16.7008 -12.2264L-16.4749 -12.4749L-16.2264 -12.7008L-15.9569 -12.9023L-15.6684 -13.0776L-15.3624 -13.225L-15.0408 -13.3427L-14.7054 -13.4289L-14.3579 -13.482L-14.0 -13.5L14.0 -13.5L14.3578 -13.482L14.7053 -13.4289L15.0408 -13.3427L15.3623 -13.225L15.6683 -13.0776L15.9568 -12.9023L16.2263 -12.7008L16.4748 -12.4749L16.7007 -12.2264L16.9022 -11.9569L17.0775 -11.6683L17.2249 -11.3624L17.3426 -11.0408L17.4288 -10.7054L17.4819 -10.3579L17.5 -10.0L17.5 -5.0L17.5 0.0L17.5 5.0L17.5 10.0L17.4819 10.3578L17.4288 10.7053L17.3426 11.0408L17.2249 11.3623L17.0775 11.6683L16.9022 11.9569L16.7007 12.2263L16.4748 12.4749L16.2263 12.7008L15.9568 12.9022L15.6683 13.0776L15.3623 13.2249L15.0408 13.3426L14.7053 13.4289L14.3578 13.4819L14.0 13.5L-14.0 13.5L-14.3579 13.4819L-14.7054 13.4289L-15.0408 13.3426L-15.3624 13.2249L-15.6684 13.0776L-15.9569 12.9022L-16.2264 12.7008L-16.4749 12.4749L-16.7008 12.2263L-16.9023 11.9569L-17.0776 11.6683L-17.225 11.3623L-17.3427 11.0408L-17.4289 10.7053L-17.482 10.3578L-17.5 10.0Z"
    },
    "contacts": assets["dfrobot-gravity-gp8101s-dfr1036"]["contacts"],
    "holes": [
      {
        "x": -14.01,
        "y": 10.0,
        "drill": 3.1
      },
      {
        "x": -14.01,
        "y": -10.0,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8101s-dfr1036"]["artwork"],
    "artworkBounds": [
      -18.7,
      -13.5,
      18.7,
      13.5
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18622/DFR1036_gp8101s-dac_stpfile_1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8101s-dfr1036"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p1-3",
        "p2-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8501-dfr1037",
    "sku": "DFR1037",
    "name": "Gravity: GP8501 2-Channel PWM to 0-2.5V/VCC DAC Module",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr1037/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2755.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_schematics_1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_cad_1.0.zip"
      }
    ],
    "description": "Two PWM-controlled voltage channels with a physical 0–2.5V / 0–VCC range switch. The upper signal port is PWM1 and the lower is PWM0. Output terminal P2.1 is VOUT1; P2.3 is VOUT0. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8501",
      "gravity",
      "pwm",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2755.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 120,
      "usWarehouse": 20,
      "sku": "DFR1037"
    },
    "board": {
      "width": 35.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M17.5 12.5L17.4819 12.8578L17.4289 13.2053L17.3426 13.5408L17.2249 13.8623L17.0775 14.1683L16.9022 14.4568L16.7007 14.7263L16.4748 14.9748L16.2263 15.2007L15.9568 15.4022L15.6683 15.5775L15.3623 15.7249L15.0407 15.8426L14.7053 15.9289L14.3578 15.9819L13.9999 16.0L-14.0001 16.0L-14.3579 15.9819L-14.7054 15.9289L-15.0408 15.8426L-15.3624 15.7249L-15.6684 15.5775L-15.9569 15.4022L-16.2264 15.2007L-16.4749 14.9748L-16.7008 14.7263L-16.9023 14.4568L-17.0776 14.1683L-17.225 13.8623L-17.3427 13.5408L-17.4289 13.2053L-17.482 12.8578L-17.5 12.5L-17.5 -12.5L-17.482 -12.8579L-17.4289 -13.2054L-17.3427 -13.5408L-17.225 -13.8624L-17.0776 -14.1683L-16.9023 -14.4569L-16.7008 -14.7264L-16.4749 -14.9749L-16.2264 -15.2008L-15.9569 -15.4023L-15.6684 -15.5776L-15.3624 -15.725L-15.0408 -15.8427L-14.7054 -15.9289L-14.3579 -15.982L-14.0001 -16.0L13.9999 -16.0L14.3578 -15.982L14.7053 -15.9289L15.0407 -15.8427L15.3623 -15.725L15.6683 -15.5776L15.9568 -15.4023L16.2263 -15.2008L16.4748 -14.9749L16.7007 -14.7264L16.9022 -14.4569L17.0775 -14.1683L17.2249 -13.8624L17.3426 -13.5408L17.4289 -13.2054L17.4819 -12.8579L17.5 -12.5L17.5 12.5Z"
    },
    "contacts": assets["dfrobot-gravity-gp8501-dfr1037"]["contacts"],
    "holes": [
      {
        "x": -14.01,
        "y": 12.5,
        "drill": 3.1
      },
      {
        "x": -14.01,
        "y": -12.5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8501-dfr1037"]["artwork"],
    "artworkBounds": [
      -18.7,
      -16.0,
      18.7,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18676/DFR1037_gp8501-2-channel-dac_stpfile_1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8501-dfr1037"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p3-3",
        "p1-3",
        "p2-2"
      ],
      [
        "p3-2",
        "p1-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8211s-dfr1071",
    "sku": "DFR1071",
    "name": "Gravity: GP8211 I2C 15-bit DAC Module (0-5V/10V)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0",
    "source": "https://wiki.dfrobot.com/dfr1071/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2757.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_schematics_1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_cad_1.0.zip"
      }
    ],
    "description": "Single-channel 15-bit I2C-to-voltage converter with manufacturer-selected 0–5V / 0–10V output ranges and onboard analog-supply boost converter. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8211S",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2757.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 258,
      "usWarehouse": 7,
      "sku": "DFR1071"
    },
    "board": {
      "width": 35.0,
      "height": 27.0,
      "color": "#272d31",
      "outline": "M-14.0001 -13.5L13.9999 -13.5L14.3578 -13.4819L14.7053 -13.4289L15.0407 -13.3427L15.3623 -13.225L15.6683 -13.0776L15.9568 -12.9023L16.2263 -12.7008L16.4748 -12.4749L16.7007 -12.2263L16.9022 -11.9569L17.0775 -11.6683L17.2249 -11.3624L17.3426 -11.0408L17.4289 -10.7054L17.4819 -10.3579L17.5 -10.0L17.5 -5.0L17.5 0.0L17.5 5.0L17.5 10.0L17.4819 10.3579L17.4289 10.7054L17.3426 11.0408L17.2249 11.3624L17.0775 11.6683L16.9022 11.9569L16.7007 12.2263L16.4748 12.4749L16.2263 12.7008L15.9568 12.9023L15.6683 13.0776L15.3623 13.225L15.0407 13.3427L14.7053 13.4289L14.3578 13.4819L13.9999 13.5L-14.0001 13.5L-14.3579 13.4819L-14.7054 13.4289L-15.0408 13.3427L-15.3624 13.225L-15.6684 13.0776L-15.9569 12.9023L-16.2264 12.7008L-16.4749 12.4749L-16.7008 12.2263L-16.9023 11.9569L-17.0776 11.6683L-17.225 11.3624L-17.3427 11.0408L-17.4289 10.7054L-17.482 10.3579L-17.5 10.0L-17.5 -10.0L-17.482 -10.3579L-17.4289 -10.7054L-17.3427 -11.0408L-17.225 -11.3624L-17.0776 -11.6683L-16.9023 -11.9569L-16.7008 -12.2263L-16.4749 -12.4749L-16.2264 -12.7008L-15.9569 -12.9023L-15.6684 -13.0776L-15.3624 -13.225L-15.0408 -13.3427L-14.7054 -13.4289L-14.3579 -13.4819L-14.0001 -13.5Z"
    },
    "contacts": assets["dfrobot-gravity-gp8211s-dfr1071"]["contacts"],
    "holes": [
      {
        "x": -14.01,
        "y": -10.0,
        "drill": 3.1
      },
      {
        "x": -14.01,
        "y": 10.0,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8211s-dfr1071"]["artwork"],
    "artworkBounds": [
      -18.7,
      -13.5,
      18.7,
      13.5
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18632/DFR1071_gp8211s-dac_stpfile_1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8211s-dfr1071"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p1-3",
        "p2-2"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-ads1115-0-10v-dfr1184",
    "sku": "DFR1184",
    "name": "Gravity: 0-10V 15-Bit Dual-Channel High-Precision ADC Module for Arduino / Raspberry Pi / ESP32",
    "manufacturer": "DFRobot",
    "category": "ADC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0.0",
    "source": "https://wiki.dfrobot.com/dfr1184/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-2917.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_schematics_1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_cad_1.0.zip"
      }
    ],
    "description": "Two 0–10V analog input channels with ADS1115 and an onboard CS32L010 controller. D/T selects I2C SDA or UART TX; C/R selects I2C SCL or UART RX. The DIP controls communication mode and I2C address. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "ADS1115",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2917.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 478,
      "usWarehouse": 7,
      "sku": "DFR1184"
    },
    "board": {
      "width": 37.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M-15.0 16.0L-15.345934 15.98288L-15.68601 15.932139L-16.017931 15.848727L-16.339403 15.733597L-16.64813 15.587698L-16.941818 15.41198L-17.218171 15.207396L-17.474894 14.974894L-17.707396 14.718171L-17.91198 14.441818L-18.087698 14.14813L-18.233597 13.839403L-18.348727 13.517931L-18.432139 13.18601L-18.48288 12.845934L-18.5 12.5L-18.5 -12.5L-18.481927 -12.857853L-18.428888 -13.20537L-18.342641 -13.540789L-18.224945 -13.862353L-18.077561 -14.168302L-17.902246 -14.456876L-17.700762 -14.726317L-17.474866 -14.974866L-17.226317 -15.200762L-16.956876 -15.402246L-16.668302 -15.577561L-16.362353 -15.724945L-16.040789 -15.842641L-15.70537 -15.928888L-15.357853 -15.981927L-15.0 -16.0L15.0 -16.0L15.357852 -15.981924L15.705366 -15.928881L16.040784 -15.842632L16.362346 -15.724935L16.668294 -15.577549L16.956867 -15.402235L17.226307 -15.20075L17.474854 -14.974854L17.70075 -14.726307L17.902235 -14.456867L18.077549 -14.168294L18.224935 -13.862346L18.342632 -13.540784L18.428881 -13.205366L18.481924 -12.857852L18.5 -12.5L18.5 12.5L18.482876 12.845933L18.432132 13.186007L18.348718 13.517926L18.233586 13.839396L18.087685 14.148122L17.911968 14.441808L17.707383 14.71816L17.474882 14.974882L17.21816 15.207383L16.941808 15.411968L16.648122 15.587685L16.339396 15.733586L16.017926 15.848718L15.686007 15.932132L15.345933 15.982876L15.0 16.0L-15.0 16.0Z"
    },
    "contacts": assets["dfrobot-gravity-ads1115-0-10v-dfr1184"]["contacts"],
    "holes": [
      {
        "x": -15.0,
        "y": 12.5,
        "drill": 3.2
      },
      {
        "x": -15.0,
        "y": -12.5,
        "drill": 3.2
      },
      {
        "x": 15.0,
        "y": 12.5,
        "drill": 3.2
      },
      {
        "x": 15.0,
        "y": -12.5,
        "drill": 3.2
      }
    ],
    "artwork": assets["dfrobot-gravity-ads1115-0-10v-dfr1184"]["artwork"],
    "artworkBounds": [
      -19.7,
      -16.0,
      19.7,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer mechanical CAD reference (DXF)",
      "url": "https://dfimg.dfrobot.com/wiki/19341/DFR1184_2-ch-15bit-0-10v-adc_cad_1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-ads1115-0-10v-dfr1184"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "p1-3",
        "p2-3"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8600-dfr1229",
    "sku": "DFR1229",
    "name": "Gravity: GP8600 1-Channel I2C & PWM to 0-5V / 0-10V / 4-20mA DAC Module (16-bit)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0.1",
    "source": "https://wiki.dfrobot.com/dfr1229/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-3073.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_schematics_V1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_cad_V1.0.zip"
      }
    ],
    "description": "GP8600 voltage/current DAC supporting I2C and PWM control. I2C mode supports 16-bit values; PWM mode has the documented 8/10-bit ranges. The DIP meanings depend on control mode; in PWM mode A0 must remain zero as specified by the manufacturer. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8600",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3073.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 104,
      "usWarehouse": 0,
      "sku": "DFR1229"
    },
    "board": {
      "width": 38.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M15.5 16.0L-15.5 16.0L-15.8459 15.9829L-16.186 15.9321L-16.5179 15.8487L-16.8394 15.7336L-17.1481 15.5877L-17.4418 15.412L-17.7182 15.2074L-17.9749 14.9749L-18.2074 14.7182L-18.412 14.4418L-18.5877 14.1481L-18.7336 13.8394L-18.8487 13.5179L-18.9321 13.186L-18.9829 12.8459L-19.0 12.5L-19.0 -12.5L-18.9829 -12.8459L-18.9321 -13.186L-18.8487 -13.5179L-18.7336 -13.8394L-18.5877 -14.1481L-18.412 -14.4418L-18.2074 -14.7181L-17.9749 -14.9749L-17.7182 -15.2074L-17.4418 -15.412L-17.1481 -15.5877L-16.8394 -15.7336L-16.5179 -15.8487L-16.186 -15.9321L-15.8459 -15.9829L-15.5 -16.0L15.5 -16.0L15.8459 -15.9829L16.186 -15.9321L16.5179 -15.8487L16.8394 -15.7336L17.1481 -15.5877L17.4418 -15.412L17.7182 -15.2074L17.9749 -14.9749L18.2074 -14.7181L18.412 -14.4418L18.5877 -14.1481L18.7336 -13.8394L18.8487 -13.5179L18.9321 -13.186L18.9829 -12.8459L19.0 -12.5L19.0 12.5091L18.9811 12.8663L18.9273 13.2131L18.8405 13.5478L18.7223 13.8686L18.5746 14.1737L18.3991 14.4616L18.1975 14.7303L17.9716 14.9781L17.7232 15.2033L17.454 15.4042L17.1657 15.579L16.8601 15.7259L16.539 15.8432L16.2041 15.9291L15.8572 15.982L15.5 16.0Z"
    },
    "contacts": assets["dfrobot-gravity-gp8600-dfr1229"]["contacts"],
    "holes": [
      {
        "x": -15.5,
        "y": -12.5,
        "drill": 3.2
      },
      {
        "x": -15.5,
        "y": 12.5,
        "drill": 3.2
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8600-dfr1229"]["artwork"],
    "artworkBounds": [
      -20.2,
      -16.0,
      20.2,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23289/DFR1229_gp8600-dac-module_stpfile_V1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8600-dfr1229"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "j3-3",
        "j2-3",
        "j1-2"
      ],
      [
        "j3-4",
        "j2-2"
      ],
      [
        "j3-1",
        "j2-1"
      ]
    ]
  },
  {
    "id": "dfrobot-gravity-gp8630n-dfr1230",
    "sku": "DFR1230",
    "name": "Gravity: GP8630N I2C/PWM to ±10V / 4-20mA DAC Module (16-bit)",
    "manufacturer": "DFRobot",
    "category": "DAC",
    "revision": "manufacturer mechanical CAD v1.0; schematic V1.0.1",
    "source": "https://wiki.dfrobot.com/dfr1230/",
    "references": [
      {
        "label": "Manufacturer product / stock",
        "url": "https://www.dfrobot.com/product-3074.html"
      },
      {
        "label": "Manufacturer schematic",
        "url": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_schematics_V1.0.pdf"
      },
      {
        "label": "Manufacturer mechanical CAD",
        "url": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_cad_V1.0.zip"
      }
    ],
    "description": "GP8630N bipolar voltage/current DAC with I2C or PWM control. Output ranges depend on configuration and include bipolar voltage and 4–20mA operation; follow the exact manufacturer control-mode and calibration tables rather than inferring a range from the product title. This component-side view exposes the actual visible wire-termination contacts; unlocated internal manufacturing test nodes are outside the modeled interface.",
    "tags": [
      "GP8630N",
      "gravity",
      "i2c",
      "module",
      "wire-termination reference"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3074.html",
      "status": "Official manufacturer feed explicitly permits sale and reports positive warehouse stock.",
      "localWarehouse": 58,
      "usWarehouse": 10,
      "sku": "DFR1230"
    },
    "board": {
      "width": 42.0,
      "height": 32.0,
      "color": "#272d31",
      "outline": "M-21.0 12.5L-21.0 -12.5L-20.9829 -12.8459L-20.9321 -13.186L-20.8487 -13.5179L-20.7336 -13.8394L-20.5877 -14.1481L-20.412 -14.4418L-20.2074 -14.7181L-19.9749 -14.9749L-19.7182 -15.2074L-19.4418 -15.4119L-19.1481 -15.5877L-18.8394 -15.7336L-18.5179 -15.8487L-18.186 -15.9321L-17.8459 -15.9829L-17.5 -16.0L17.5 -16.0L17.8459 -15.9829L18.186 -15.9321L18.5179 -15.8487L18.8394 -15.7336L19.1481 -15.5877L19.4418 -15.4119L19.7182 -15.2074L19.9749 -14.9749L20.2074 -14.7181L20.412 -14.4418L20.5877 -14.1481L20.7336 -13.8394L20.8487 -13.5179L20.9321 -13.186L20.9829 -12.8459L21.0 -12.5L21.0 12.5L20.9829 12.8459L20.9321 13.186L20.8487 13.5179L20.7336 13.8394L20.5877 14.1481L20.412 14.4418L20.2074 14.7181L19.9749 14.9749L19.7182 15.2074L19.4418 15.412L19.1481 15.5877L18.8394 15.7336L18.5179 15.8487L18.186 15.9321L17.8459 15.9829L17.5 16.0L-17.5 16.0L-17.8459 15.9829L-18.186 15.9321L-18.5179 15.8487L-18.8394 15.7336L-19.1481 15.5877L-19.4418 15.412L-19.7182 15.2074L-19.9749 14.9749L-20.2074 14.7182L-20.412 14.4418L-20.5877 14.1481L-20.7336 13.8394L-20.8487 13.5179L-20.9321 13.186L-20.9829 12.846L-21.0 12.5Z"
    },
    "contacts": assets["dfrobot-gravity-gp8630n-dfr1230"]["contacts"],
    "holes": [
      {
        "x": -17.5,
        "y": -12.5,
        "drill": 3.2
      },
      {
        "x": -17.5,
        "y": 12.5,
        "drill": 3.2
      }
    ],
    "artwork": assets["dfrobot-gravity-gp8630n-dfr1230"]["artwork"],
    "artworkBounds": [
      -22.2,
      -16.0,
      22.2,
      16.0
    ],
    "footprintMode": "reference",
    "footprintNote": "Off-board wire-termination reference. Screw contacts are located at visible screw-head centers and connector contacts at visible lead centers in the component-side manufacturer mechanical view. They are not PCB solder-tail or mating-footprint coordinates. Copper marker sizes are selected reference values; mounting holes, manufacturing test nodes, connector retention and complete production layers are excluded.",
    "cad": {
      "label": "Manufacturer STP / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23286/DFR1230_gp8630n-dac-module_stpfile_V1.0.zip"
    },
    "provenance": assets["dfrobot-gravity-gp8630n-dfr1230"]["provenance"],
    "viewLabel": "COMPONENT SIDE · VISIBLE CONNECTOR / SCREW CONTACTS",
    "modelHeight": 13,
    "internalConnections": [
      [
        "j3-3",
        "j2-3",
        "j1-2"
      ],
      [
        "j3-4",
        "j2-2"
      ],
      [
        "j3-1",
        "j2-1"
      ]
    ]
  },
];
