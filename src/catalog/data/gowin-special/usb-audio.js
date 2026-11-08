import contacts from "./usb-audio-contacts.js";

// Verified board records and original manufacturer attribution.
export default [
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
    "headers": contacts["gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1"]["headers"],
    "ports": contacts["gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1"]["ports"],
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
    "headers": contacts["gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0"]["headers"],
    "ports": contacts["gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0"]["ports"],
    "aspect": "square",
    "extra": "dual"
  }
];
