import contacts from "./gw5-starter-contacts.js";

// Verified board records and original manufacturer attribution.
export default [
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
    "headers": contacts["gowin-dk-start-gw5ast-lv138fpg676a-v2-1"]["headers"],
    "ports": contacts["gowin-dk-start-gw5ast-lv138fpg676a-v2-1"]["ports"],
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
    "headers": contacts["gowin-dk-start-gw5ast-lv138fpg676a-v1-0"]["headers"],
    "ports": contacts["gowin-dk-start-gw5ast-lv138fpg676a-v1-0"]["ports"],
    "aspect": "landscape",
    "extra": "sma-grid"
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
    "headers": contacts["gowin-dk-start-gw5a-lv25ug324-v2-0"]["headers"],
    "ports": contacts["gowin-dk-start-gw5a-lv25ug324-v2-0"]["ports"],
    "aspect": "landscape",
    "extra": "25k"
  }
];
