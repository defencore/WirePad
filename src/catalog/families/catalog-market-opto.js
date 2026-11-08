import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import { marketDiscrete } from "../shared/market-discretes.js";

const parts = [
  {
    "id": "market-ltv-817",
    "name": "Lite-On LTV-817",
    "part": "LTV-817",
    "manufacturer": "Lite-On",
    "description": "Single-channel phototransistor optocoupler, 35 V collector-emitter rating and 50% minimum CTR at 5 mA. Standard 7.62 mm row-spacing DIP-4, not the wide-lead M option.",
    "source": "https://www.mouser.com/datasheet/2/272/LTV_8X7_series_201610_-2487105.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "E",
        "passive",
        "Phototransistor emitter."
      ],
      [
        "C",
        "open_collector",
        "Phototransistor collector."
      ]
    ],
    "body": [
      6.5,
      4.6
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/liteon/LTV-817/385836",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.mouser.com/datasheet/2/272/LTV_8X7_series_201610_-2487105.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/liteon/LTV-817/385836"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "Single-channel phototransistor optocoupler, 35 V collector-emitter rating and 50% minimum CTR at 5 mA",
    "kind": "dip",
    "packageName": "DIP-4",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-4n35m",
    "name": "onsemi 4N35M",
    "part": "4N35M",
    "manufacturer": "onsemi",
    "description": "General-purpose phototransistor optocoupler with accessible base; 100% minimum CTR at 10 mA and 30 V output transistor.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/4n37m-d.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "E",
        "passive",
        "Phototransistor emitter."
      ],
      [
        "C",
        "open_collector",
        "Phototransistor collector."
      ],
      [
        "B",
        "passive",
        "Phototransistor base connection for an optional external bias resistor."
      ]
    ],
    "body": [
      6.35,
      8.51
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/onsemi/4N35M?qs=or4AE2qAS%252BfciOgBAl81Hw%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/4n37m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/onsemi/4N35M?qs=or4AE2qAS%252BfciOgBAl81Hw%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "General-purpose phototransistor optocoupler with accessible base; 100% minimum CTR at 10 mA and 30 V output transistor",
    "kind": "dip",
    "packageName": "DIP-6",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-h11aa1m",
    "name": "onsemi H11AA1M",
    "part": "H11AA1M",
    "manufacturer": "onsemi",
    "description": "AC-input phototransistor optocoupler with antiparallel input LEDs, suitable for polarity-independent sensing.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/h11aa4m-d.pdf",
    "pins": [
      [
        "AC1",
        "passive",
        "First antiparallel LED input terminal; limit current externally."
      ],
      [
        "AC2",
        "passive",
        "Second antiparallel LED input terminal."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "E",
        "passive",
        "Phototransistor emitter."
      ],
      [
        "C",
        "open_collector",
        "Phototransistor collector."
      ],
      [
        "B",
        "passive",
        "Phototransistor base connection."
      ]
    ],
    "body": [
      6.35,
      8.51
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/onsemi/H11AA1M/1053602",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/h11aa4m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/onsemi/H11AA1M/1053602"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "AC-input phototransistor optocoupler with antiparallel input LEDs, suitable for polarity-independent sensing",
    "kind": "dip",
    "packageName": "DIP-6",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-h11l1m",
    "name": "onsemi H11L1M",
    "part": "H11L1M",
    "manufacturer": "onsemi",
    "description": "Schmitt-trigger optocoupler with an inverting open-collector output and 3\u201315 V output-side operating supply. Maximum LED turn-on threshold is 1.6 mA.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/h11l3m-d.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "OUT",
        "open_collector",
        "Inverting open-collector output; an external pull-up is required."
      ],
      [
        "GND",
        "power_in",
        "Output-side supply ground, isolated from the input LED."
      ],
      [
        "VCC",
        "power_in",
        "Output-side supply input; add the bypass capacitor specified in the datasheet."
      ]
    ],
    "body": [
      6.35,
      8.51
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/onsemi/H11L1M?qs=P36CEcFBmYxn5ViwkIckpw%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/h11l3m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/onsemi/H11L1M?qs=P36CEcFBmYxn5ViwkIckpw%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "Schmitt-trigger optocoupler with an inverting open-collector output and 3\u201315 V output-side operating supply",
    "kind": "dip",
    "packageName": "DIP-6",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-6n137m",
    "name": "onsemi 6N137M",
    "part": "6N137M",
    "manufacturer": "onsemi",
    "description": "10 Mbit/s logic optocoupler, 4.5\u20135.5 V output-side supply and active-high enable. Output is open collector; NC terminals are included physically.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/hcpl2631m-d.pdf",
    "pins": [
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "GND",
        "power_in",
        "Output-side supply ground, isolated from the input LED."
      ],
      [
        "OUT",
        "open_collector",
        "Inverting open-collector output; an external pull-up is required."
      ],
      [
        "EN",
        "input",
        "Enable input: HIGH enables data transfer; LOW forces the open collector off. Internal pull-up is provided."
      ],
      [
        "VCC",
        "power_in",
        "Output-side supply input; add the bypass capacitor specified in the datasheet."
      ]
    ],
    "body": [
      6.6,
      9.655
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/onsemi/6N137M?qs=ZnztrWCQEtF%2FqBuEeyTlOA%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/hcpl2631m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/onsemi/6N137M?qs=ZnztrWCQEtF%2FqBuEeyTlOA%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "10 Mbit/s logic optocoupler, 4",
    "kind": "dip",
    "packageName": "DIP-8",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-6n138m",
    "name": "onsemi 6N138M",
    "part": "6N138M",
    "manufacturer": "onsemi",
    "description": "High-gain split-Darlington optocoupler for low input-current interfaces, with accessible output transistor base and separate output-side supply.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/hcpl2731m-d.pdf",
    "pins": [
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "GND",
        "power_in",
        "Output-side supply ground, isolated from the input LED."
      ],
      [
        "OUT",
        "open_collector",
        "Inverting open-collector output; an external pull-up is required."
      ],
      [
        "VB",
        "passive",
        "Darlington output-stage base; optional resistor to ground improves turn-off speed."
      ],
      [
        "VCC",
        "power_in",
        "Output-side supply input; add the bypass capacitor specified in the datasheet."
      ]
    ],
    "body": [
      6.6,
      9.655
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/onsemi/6N138M/2507013",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/hcpl2731m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/onsemi/6N138M/2507013"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "High-gain split-Darlington optocoupler for low input-current interfaces, with accessible output transistor base and separate output-side supply",
    "kind": "dip",
    "packageName": "DIP-8",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-moc3021m",
    "name": "onsemi MOC3021M",
    "part": "MOC3021M",
    "manufacturer": "onsemi",
    "description": "400 V random-phase optotriac driver, 15 mA maximum LED trigger current. Terminals 4 and 6 drive an external power-triac gate circuit; this is not a direct high-current relay.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/moc3023m-d.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "MT1",
        "passive",
        "First bilateral output main terminal, physical terminal 4."
      ],
      [
        "NC",
        "no_connect",
        "Do not connect: substrate/internal connection, not a user signal."
      ],
      [
        "MT2",
        "passive",
        "Second bilateral output main terminal, physical terminal 6."
      ]
    ],
    "body": [
      6.35,
      8.51
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/onsemi/MOC3021M?qs=zGDcupr4zwOSCOCSW%2FThBg%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/moc3023m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/onsemi/MOC3021M?qs=zGDcupr4zwOSCOCSW%2FThBg%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "400 V random-phase optotriac driver, 15 mA maximum LED trigger current",
    "kind": "dip",
    "packageName": "DIP-6",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-moc3063m",
    "name": "onsemi MOC3063M",
    "part": "MOC3063M",
    "manufacturer": "onsemi",
    "description": "600 V zero-cross optotriac driver, 5 mA maximum LED trigger current. Its zero-cross circuit suits whole-cycle AC switching rather than arbitrary phase-angle firing.",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/moc3163m-d.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; leave open."
      ],
      [
        "MT1",
        "passive",
        "First bilateral output main terminal, physical terminal 4."
      ],
      [
        "NC",
        "no_connect",
        "Do not connect: substrate/internal connection, not a user signal."
      ],
      [
        "MT2",
        "passive",
        "Second bilateral output main terminal, physical terminal 6."
      ]
    ],
    "body": [
      6.35,
      8.51
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/onsemi/MOC3063M?qs=xG1VSrP1u4oaFC8KImlHjw%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.onsemi.com/download/data-sheet/pdf/moc3163m-d.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/onsemi/MOC3063M?qs=xG1VSrP1u4oaFC8KImlHjw%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "600 V zero-cross optotriac driver, 5 mA maximum LED trigger current",
    "kind": "dip",
    "packageName": "DIP-6",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-tlp241a-f",
    "name": "Toshiba TLP241A(F",
    "part": "TLP241A(F",
    "manufacturer": "Toshiba",
    "description": "40 V, 2 A normally-open MOSFET photorelay. The exact ordering suffix is written TLP241A(F by the distributor; this is the standard through-hole 7.62 mm pitch TLP241A, not the 10.16 mm TLP241AF variant.",
    "source": "https://toshiba.semicon-storage.com/info/docget.jsp?did=14237&prodName=TLP241A",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "D1",
        "passive",
        "First isolated MOSFET load terminal; bidirectional AC/DC output."
      ],
      [
        "D2",
        "passive",
        "Second isolated MOSFET load terminal; bidirectional AC/DC output."
      ]
    ],
    "body": [
      6.4,
      4.58
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/Toshiba/TLP241AF?qs=bUPhaerQQeE1lWx5mm8O0Q%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://toshiba.semicon-storage.com/info/docget.jsp?did=14237&prodName=TLP241A"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/Toshiba/TLP241AF?qs=bUPhaerQQeE1lWx5mm8O0Q%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "40 V, 2 A normally-open MOSFET photorelay",
    "kind": "dip",
    "packageName": "DIP-4",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-aqy214eh",
    "name": "Panasonic AQY214EH",
    "part": "AQY214EH",
    "manufacturer": "Panasonic",
    "description": "400 V, 120 mA normally-open PhotoMOS relay with isolated bidirectional AC/DC output. Standard through-hole tube-packed DIP-4 variant.",
    "source": "https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/263464",
    "pins": [
      [
        "A",
        "passive",
        "Input LED anode; use external current limiting."
      ],
      [
        "K",
        "passive",
        "Input LED cathode."
      ],
      [
        "LOAD1",
        "passive",
        "First isolated bidirectional load terminal."
      ],
      [
        "LOAD2",
        "passive",
        "Second isolated bidirectional load terminal."
      ]
    ],
    "body": [
      6.4,
      4.78
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/Panasonic-Industry/AQY214EH?qs=QdPAKMqHa0mLCYT9Wpkm9w%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/263464"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/Panasonic-Industry/AQY214EH?qs=QdPAKMqHa0mLCYT9Wpkm9w%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "400 V, 120 mA normally-open PhotoMOS relay with isolated bidirectional AC/DC output",
    "kind": "dip",
    "packageName": "DIP-4",
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "builder": "marketPackage"
  },
  {
    "id": "market-bta16-600brg",
    "name": "STMicroelectronics BTA16-600BRG",
    "part": "BTA16-600BRG",
    "manufacturer": "STMicroelectronics",
    "description": "16 A, 600 V standard triac with 50 mA gate-trigger class and electrically insulated mounting tab.",
    "source": "https://www.st.com/resource/en/datasheet/bta16.pdf",
    "pins": [
      [
        "A1",
        "passive",
        "Main terminal A1; gate reference."
      ],
      [
        "A2",
        "passive",
        "Main terminal A2."
      ],
      [
        "G",
        "input",
        "Gate trigger input, referenced to A1."
      ]
    ],
    "shape": "to220",
    "packageName": "TO-220AB Ins.",
    "insulatedTab": true,
    "marking": "BTA16",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://br.mouser.com/en/c/circuit-protection/thyristors/triacs/?series=BTA16",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.st.com/resource/en/datasheet/bta16.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://br.mouser.com/en/c/circuit-protection/thyristors/triacs/?series=BTA16"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "16 A, 600 V standard triac with 50 mA gate-trigger class and electrically insulated mounting tab",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-bta06-600trg",
    "name": "STMicroelectronics BTA06-600TRG",
    "part": "BTA06-600TRG",
    "manufacturer": "STMicroelectronics",
    "description": "6 A, 600 V sensitive-gate triac, 5 mA gate-trigger class and electrically insulated mounting tab.",
    "source": "https://www.st.com/resource/en/datasheet/bta06.pdf",
    "pins": [
      [
        "A1",
        "passive",
        "Main terminal A1; gate reference."
      ],
      [
        "A2",
        "passive",
        "Main terminal A2."
      ],
      [
        "G",
        "input",
        "Gate trigger input, referenced to A1."
      ]
    ],
    "shape": "to220",
    "packageName": "TO-220AB Ins.",
    "insulatedTab": true,
    "marking": "BTA06",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/BTA06-600TRG/654427",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.st.com/resource/en/datasheet/bta06.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/BTA06-600TRG/654427"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "6 A, 600 V sensitive-gate triac, 5 mA gate-trigger class and electrically insulated mounting tab",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-t405-600t",
    "name": "STMicroelectronics T405-600T",
    "part": "T405-600T",
    "manufacturer": "STMicroelectronics",
    "description": "4 A, 600 V three-quadrant logic-level triac, 5 mA gate-trigger class. The exposed tab is A2.",
    "source": "https://www.st.com/resource/en/datasheet/t405.pdf",
    "pins": [
      [
        "A1",
        "passive",
        "Main terminal A1; gate reference."
      ],
      [
        "A2",
        "passive",
        "Main terminal A2."
      ],
      [
        "G",
        "input",
        "Gate trigger input, referenced to A1."
      ]
    ],
    "shape": "to220",
    "packageName": "TO-220AB",
    "insulatedTab": false,
    "marking": "T405",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/T405-600T/1039854",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.st.com/resource/en/datasheet/t405.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/T405-600T/1039854"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "4 A, 600 V three-quadrant logic-level triac, 5 mA gate-trigger class",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-tn1215-600b",
    "name": "STMicroelectronics TN1215-600B",
    "part": "TN1215-600B",
    "manufacturer": "STMicroelectronics",
    "description": "12 A RMS, 600 V standard SCR, 15 mA gate-trigger class. The anode is the large tab; only cathode and gate have projecting leads.",
    "source": "https://www.st.com/resource/en/datasheet/tn1215.pdf",
    "pins": [
      [
        "K",
        "passive",
        "Cathode terminal."
      ],
      [
        "A",
        "passive",
        "Anode terminal."
      ],
      [
        "G",
        "input",
        "Gate trigger input, referenced to cathode."
      ]
    ],
    "shape": "dpak",
    "padSizes": [[1.7, 2], [5.7, 5.5], [1.7, 2]],
    "packageName": "DPAK",
    "insulatedTab": false,
    "marking": "TN1215",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/TN1215-600B/1040007",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.st.com/resource/en/datasheet/tn1215.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/TN1215-600B/1040007"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "12 A RMS, 600 V standard SCR, 15 mA gate-trigger class",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-ts420-600t",
    "name": "STMicroelectronics TS420-600T",
    "part": "TS420-600T",
    "manufacturer": "STMicroelectronics",
    "description": "4 A, 600 V sensitive-gate SCR with 0.2 mA maximum gate-trigger current. Exposed tab is anode terminal 2.",
    "source": "https://www.st.com/resource/en/datasheet/ts420.pdf",
    "pins": [
      [
        "K",
        "passive",
        "Cathode terminal."
      ],
      [
        "A",
        "passive",
        "Anode terminal."
      ],
      [
        "G",
        "input",
        "Gate trigger input, referenced to cathode."
      ]
    ],
    "shape": "to220",
    "packageName": "TO-220AB",
    "insulatedTab": false,
    "marking": "TS420",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/TS420-600T/1040214",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.st.com/resource/en/datasheet/ts420.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/TS420-600T/1040214"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "4 A, 600 V sensitive-gate SCR with 0",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-bt169d-116",
    "name": "WeEn Semiconductors BT169D,116",
    "part": "BT169D,116",
    "manufacturer": "WeEn Semiconductors",
    "description": "400 V, 0.8 A RMS sensitive-gate SCR, 200 \u00b5A maximum trigger current. Current WeEn pin drawing shows front lead order K-G-A numbered 3-2-1; these are manufacturer terminal numbers.",
    "source": "https://www.ween-semi.com/datasheet/BT169D.pdf",
    "pins": [
      [
        "K",
        "passive",
        "Cathode, manufacturer terminal 3."
      ],
      [
        "G",
        "input",
        "Gate, manufacturer terminal 2; trigger with respect to cathode."
      ],
      [
        "A",
        "passive",
        "Anode, manufacturer terminal 1."
      ]
    ],
    "shape": "to92",
    "packageName": "TO-92 (SOT54)",
    "numbers": [
      3,
      2,
      1
    ],
    "marking": "BT169D",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C581424.html",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.ween-semi.com/datasheet/BT169D.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.lcsc.com/product-detail/C581424.html"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "thyristor"
    ],
    "subtitle": "400 V, 0",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-bpw34",
    "name": "Vishay BPW34",
    "part": "BPW34",
    "manufacturer": "Vishay",
    "description": "60 V silicon PIN photodiode with 7.5 mm\u00b2 sensitive area and visible/near-IR response. Optical top view follows the package drawing: anode at the top and cathode at the bottom.",
    "source": "https://www.vishay.com/docs/81521/bpw34.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Photodiode anode, upper lead in the optical-face view."
      ],
      [
        "K",
        "passive",
        "Photodiode cathode, lower lead adjacent to the cathode marking."
      ]
    ],
    "shape": "photoFlat",
    "packageName": "Flat optical through-hole",
    "numbers": [
      "A",
      "K"
    ],
    "viewNote": "Optical-face top view; this is not a mirrored bottom view.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mouser.com/en/ProductDetail/Vishay-Semiconductors/BPW34?qs=5N7VPDfziMSKXPRYeLTZOQ%3D%3D",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.vishay.com/docs/81521/bpw34.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.mouser.com/en/ProductDetail/Vishay-Semiconductors/BPW34?qs=5N7VPDfziMSKXPRYeLTZOQ%3D%3D"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "60 V silicon PIN photodiode with 7",
    "builder": "marketDiscrete",
    "referencePrefix": "D"
  },
  {
    "id": "market-tept4400",
    "name": "Vishay TEPT4400",
    "part": "TEPT4400",
    "manufacturer": "Vishay",
    "description": "3 mm ambient-light phototransistor with human-eye-like spectral response and 570 nm peak sensitivity. Front lead order emitter left, collector right follows the cited package drawing.",
    "source": "https://www.vishay.com/docs/81341/tept4400.pdf",
    "pins": [
      [
        "E",
        "passive",
        "Phototransistor emitter, left lead in the illustrated front view."
      ],
      [
        "C",
        "open_collector",
        "Phototransistor collector; 6 V collector-emitter maximum."
      ]
    ],
    "shape": "led3",
    "packageName": "3 mm T-1",
    "numbers": [
      "E",
      "C"
    ],
    "color": "#d5d8bc",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.in/en/products/detail/vishay-semiconductor-opto-division/TEPT4400/1681191",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.vishay.com/docs/81341/tept4400.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.in/en/products/detail/vishay-semiconductor-opto-division/TEPT4400/1681191"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "3 mm ambient-light phototransistor with human-eye-like spectral response and 570 nm peak sensitivity",
    "builder": "marketDiscrete",
    "referencePrefix": "Q"
  },
  {
    "id": "market-tsal6200",
    "name": "Vishay TSAL6200",
    "part": "TSAL6200",
    "manufacturer": "Vishay",
    "description": "940 nm high-power infrared emitter, 5 mm blue-gray package and \u00b117\u00b0 half-intensity angle. Front lead order is anode left and cathode right.",
    "source": "https://www.vishay.com/docs/81010/tsal6200.pdf",
    "pins": [
      [
        "A",
        "passive",
        "Infrared LED anode; limit forward current externally."
      ],
      [
        "K",
        "passive",
        "Infrared LED cathode, right/shorter lead in the cited view."
      ]
    ],
    "shape": "led5",
    "packageName": "5 mm T-1 3/4",
    "numbers": [
      "A",
      "K"
    ],
    "color": "#8b9aa6",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.co.uk/en/products/detail/vishay-semiconductor-opto-division/TSAL6200/1681339",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.vishay.com/docs/81010/tsal6200.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.digikey.co.uk/en/products/detail/vishay-semiconductor-opto-division/TSAL6200/1681339"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "940 nm high-power infrared emitter, 5 mm blue-gray package and \u00b117\u00b0 half-intensity angle",
    "builder": "marketDiscrete",
    "referencePrefix": "D"
  },
  {
    "id": "market-tlcr5800",
    "name": "Vishay TLCR5800",
    "part": "TLCR5800",
    "manufacturer": "Vishay",
    "description": "Ultrabright 616 nm red indicator LED with clear untinted 5 mm parabolic lens. Its cited front drawing puts cathode left and anode right, opposite the TSAL6200 orientation.",
    "source": "https://www.vishay.com/docs/83178/tlcr5800.pdf",
    "pins": [
      [
        "K",
        "passive",
        "Red LED cathode, left/shorter lead in the cited view."
      ],
      [
        "A",
        "passive",
        "Red LED anode; limit forward current externally."
      ]
    ],
    "shape": "led5",
    "packageName": "5 mm T-1 3/4",
    "numbers": [
      "K",
      "A"
    ],
    "color": "#d2d7c9",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/vishay/tlcr5800/led-red-t-1-3-4-5mm-35cd-616nm/dp/22H1217",
      "status": "Exact manufacturer and ordering code offered in stock by the linked commercial listing; stock is time-dependent."
    },
    "references": [
      {
        "label": "Manufacturer-authored datasheet",
        "url": "https://www.vishay.com/docs/83178/tlcr5800.pdf"
      },
      {
        "label": "Commercial offer checked 2026-11-08",
        "url": "https://www.newark.com/vishay/tlcr5800/led-red-t-1-3-4-5mm-35cd-616nm/dp/22H1217"
      }
    ],
    "tags": [
      "diy",
      "starter kit",
      "arduino",
      "optoelectronics"
    ],
    "subtitle": "Ultrabright 616 nm red indicator LED with clear untinted 5 mm parabolic lens",
    "builder": "marketDiscrete",
    "referencePrefix": "D"
  }
];

export default defineFamily("market-opto", parts.map(({ builder, ...spec }) => builder === "marketPackage" ? marketPackage(spec) : marketDiscrete(spec)));
