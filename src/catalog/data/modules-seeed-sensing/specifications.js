import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-grove-bme280-101020193",
    "mountingReview": {
      "contactIds": ["spi-1", "spi-2", "spi-3", "spi-4", "spi-5", "spi-6"],
      "source": {"label": "Seeed Studio 101020193: v1.0 / 2016-03-15 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "SPI", "count": 6, "package": "H6-2.54-C65D35MIL"}],
        "boardSha256": "19c9b2219daf04f98681dc225cb90a3287cfa1d6dbb44229641aa12257937dd6"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -20.1, "y": -10.25, "width": 40.2, "height": 20.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020193",
    "name": "Seeed Grove - Barometer Sensor(BME280)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BME280/",
    "revision": "v1.0 / 2016-03-15",
    "description": "BME280 pressure, temperature and humidity module with level-shifted Grove I2C, 3.3 V SPI contacts and interface/address straps. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2016-03-15",
      "url": "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip",
      "https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "bme280",
      "arduino"
    ],
    "provenance": assets["seeed-grove-bme280-101020193"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-bme280-101020193"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-bme280-101020193"]["artwork"],
    "backArtwork": assets["seeed-grove-bme280-101020193"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "spi-1",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "spi-3",
        "gnd-t",
        "addr-11"
      ],
      [
        "spi-4",
        "addr-mm"
      ],
      [
        "spi-6",
        "interface-1"
      ],
      [
        "interface-2",
        "addr-00"
      ]
    ]
  },
  {
    "id": "seeed-grove-bme680-101020513",
    "mountingReview": {
      "contactIds": ["spi-1", "spi-2", "spi-3", "spi-4", "spi-5", "spi-6"],
      "source": {"label": "Seeed Studio 101020513: v1.0 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "SPI", "count": 6, "package": "H6-2.54-C65D35MIL"}],
        "boardSha256": "34e9f2c1f4b5aa02986dd6406d7cdad6a6f68e9b10861d1eeb27933acdd85cdb"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -20.1, "y": -10.25, "width": 40.2, "height": 20.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020513",
    "name": "Seeed Grove - Temperature Humidity Pressure Gas Sensor(BME680)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/",
    "revision": "v1.0",
    "description": "BME680 temperature, humidity, pressure and gas-resistance module with Grove I2C, 3.3 V SPI contacts and interface/address straps. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip",
      "https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "bme680",
      "arduino"
    ],
    "provenance": assets["seeed-grove-bme680-101020513"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-bme680-101020513"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-bme680-101020513"]["artwork"],
    "backArtwork": assets["seeed-grove-bme680-101020513"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "spi-1",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "spi-3",
        "j3-11",
        "gnd-t"
      ],
      [
        "spi-4",
        "j3-mm"
      ],
      [
        "spi-6",
        "j2-1"
      ],
      [
        "j2-2",
        "j3-00"
      ]
    ]
  },
  {
    "id": "seeed-grove-bmp280-101020192",
    "mountingReview": {
      "contactIds": ["spi-1", "spi-2", "spi-3", "spi-4", "spi-5", "spi-6"],
      "source": {"label": "Seeed Studio 101020192: v1.0 / 2016-03-15 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "SPI", "count": 6, "package": "H6-2.54-C65D35MIL"}],
        "boardSha256": "f5348ea11ab7de30aa6ae84f05ff7f2f96b134700c28019712079aeb7ed9d47c"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -20.1, "y": -10.25, "width": 40.2, "height": 20.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020192",
    "name": "Seeed Grove - Barometer Sensor (BMP280)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP280/",
    "revision": "v1.0 / 2016-03-15",
    "description": "BMP280 pressure and temperature module with level-shifted Grove I2C, 3.3 V SPI contacts and interface/address straps. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2016-03-15",
      "url": "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip",
      "https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "bmp280",
      "arduino"
    ],
    "provenance": assets["seeed-grove-bmp280-101020192"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-bmp280-101020192"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-bmp280-101020192"]["artwork"],
    "backArtwork": assets["seeed-grove-bmp280-101020192"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "spi-1",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "spi-3",
        "gnd-t",
        "addr-00"
      ],
      [
        "spi-4",
        "addr-mm"
      ],
      [
        "spi-6",
        "interface-1"
      ],
      [
        "interface-2",
        "addr-11"
      ]
    ]
  },
  {
    "id": "seeed-grove-digital-ir-temperature-101020077",
    "sku": "101020077",
    "name": "Seeed Grove - Digital Infrared Temperature Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Digital_Infrared_Temperature_Sensor/",
    "revision": "v1.0",
    "description": "MLX90615SSG digital infrared temperature module with a Grove I2C interface. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip",
      "https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "digital-ir-temperature",
      "arduino"
    ],
    "provenance": assets["seeed-grove-digital-ir-temperature-101020077"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-digital-ir-temperature-101020077"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-digital-ir-temperature-101020077"]["artwork"],
    "backArtwork": assets["seeed-grove-digital-ir-temperature-101020077"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-hp206c-101020068",
    "sku": "101020068",
    "name": "Seeed Grove - Barometer (High-Accuracy)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Barometer-High-Accuracy/",
    "revision": "v1.0",
    "description": "HP206C high-accuracy barometer module with level-shifted I2C and a separate interrupt contact. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip",
      "https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "hp206c",
      "arduino"
    ],
    "provenance": assets["seeed-grove-hp206c-101020068"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.099996 -2.65A0.299998 0.299998 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.099996 9.25A0.799998 0.799998 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.900004 2.15A0.199998 0.199998 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.900004 -9.15A0.800002 0.800002 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-hp206c-101020068"]["contacts"],
    "holes": [
      {
        "x": 20.034994,
        "y": -5.03,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": -7.5065,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": -6.681,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": -5.8555,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": 7.67,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": 5.1935,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": 6.019,
        "drill": 0.5
      },
      {
        "x": 20.034994,
        "y": 6.8445,
        "drill": 0.5
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-hp206c-101020068"]["artwork"],
    "backArtwork": assets["seeed-grove-hp206c-101020068"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "scl-t"
      ],
      [
        "j1-2",
        "sda-t"
      ],
      [
        "j1-3",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "gnd-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-scd30-101020634",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4"],
      "source": {"label": "Seeed Studio 101020634: v1.0 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J2", "count": 4, "package": "H4-2.54"}],
        "boardSha256": "c15a75faba1c6faccbab195501e0e763fc3d6c28c5c8cf295220853ec05d0389"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -32.1, "y": -22.1, "width": 64.2, "height": 44.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020634",
    "name": "Seeed Grove - CO2 & Temperature & Humidity Sensor (SCD30)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-CO2_Temperature_Humidity_Sensor-SCD30/",
    "revision": "v1.0",
    "description": "SCD30 nondispersive infrared CO2, temperature and humidity module with Grove I2C and an auxiliary four-contact header. Module supply: 3.3 V or 5 V. The SCD30 sensor cover is a representative illustration matched to the manufacturer photograph; the underlying carrier contact geometry comes from the cited CAD.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip",
      "https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "scd30",
      "arduino"
    ],
    "provenance": assets["seeed-grove-scd30-101020634"]["provenance"],
    "board": {
      "width": 64.2,
      "height": 44.2,
      "color": "#245c81",
      "outline": "M-30.0 19.2A0.8 0.8 0 0 0 -29.2 20.0L-22.2 20.0A0.1 0.1 0 0 1 -22.1 20.1A2.0 2.0 0 0 0 -20.1 22.1L-19.9 22.1A2.0 2.0 0 0 0 -17.9 20.1A0.111325 0.111325 0 0 1 -17.8 20.0L-2.2 20.0A0.1 0.1 0 0 0 -2.1 19.9A2.0 2.0 0 0 1 -0.1 17.9L0.1 17.9A2.0 2.0 0 0 1 2.1 19.9A0.1 0.1 0 0 0 2.2 20.0L17.8 20.0A0.1 0.1 0 0 1 17.9 20.1A2.0 2.0 0 0 0 19.9 22.1L20.1 22.1A2.0 2.0 0 0 0 22.1 20.1A0.111325 0.111325 0 0 1 22.2 20.0L29.2 20.0A0.8 0.8 0 0 0 30.0 19.2L30.0 12.2A0.110889 0.110889 0 0 0 29.9 12.1A2.0 2.0 0 0 1 27.9 10.1L27.9 10.0A2.002381 2.002381 0 0 1 29.9 7.9A0.1 0.1 0 0 0 30.0 7.8L30.0 -7.8A0.1 0.1 0 0 1 30.1 -7.9A2.0 2.0 0 0 0 32.1 -9.9L32.1 -10.1A2.0 2.0 0 0 0 30.1 -12.1A0.111325 0.111325 0 0 1 30.0 -12.2L30.0 -19.2A0.8 0.8 0 0 0 29.2 -20.0L22.2 -20.0A0.110889 0.110889 0 0 0 22.1 -19.9A2.0 2.0 0 0 1 20.1 -17.9L20.0 -17.9A2.002381 2.002381 0 0 1 17.9 -19.9A0.1 0.1 0 0 0 17.8 -20.0L2.2 -20.0A0.1 0.1 0 0 1 2.1 -20.1A2.0 2.0 0 0 0 0.1 -22.1L-0.1 -22.1A2.0 2.0 0 0 0 -2.1 -20.1A0.1 0.1 0 0 1 -2.2 -20.0L-17.8 -20.0A0.110889 0.110889 0 0 0 -17.9 -19.9A2.0 2.0 0 0 1 -19.9 -17.9L-20.0 -17.9A2.002381 2.002381 0 0 1 -22.1 -19.9A0.1 0.1 0 0 0 -22.2 -20.0L-29.2 -20.0A0.8 0.8 0 0 0 -30.0 -19.2L-30.0 -12.2A0.1 0.1 0 0 1 -30.1 -12.1A2.0 2.0 0 0 0 -32.1 -10.1L-32.1 -9.9A2.0 2.0 0 0 0 -30.1 -7.9A0.1 0.1 0 0 1 -30.0 -7.8L-30.0 7.8A0.1 0.1 0 0 0 -29.9 7.9A2.0 2.0 0 0 1 -27.9 9.9L-27.9 10.1A2.0 2.0 0 0 1 -29.9 12.1A0.1 0.1 0 0 0 -30.0 12.2L-30.0 19.2Z"
    },
    "contacts": assets["seeed-grove-scd30-101020634"]["contacts"],
    "holes": [
      {
        "x": 26.6728,
        "y": -0.1744,
        "drill": 2.1
      },
      {
        "x": -14.4244,
        "y": -0.1744,
        "drill": 2.1
      },
      {
        "x": -0.017,
        "y": -20.015,
        "drill": 2.2
      },
      {
        "x": -30.005,
        "y": -10.02,
        "drill": 2.2
      },
      {
        "x": 29.985,
        "y": -9.983,
        "drill": 2.2
      },
      {
        "x": 19.98,
        "y": 20.005,
        "drill": 2.2
      },
      {
        "x": -19.983,
        "y": 20.015,
        "drill": 2.2
      },
      {
        "x": -30.005,
        "y": -10.02,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-scd30-101020634"]["artwork"],
    "backArtwork": assets["seeed-grove-scd30-101020634"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "j2-3",
        "tp1-t"
      ],
      [
        "j1-2",
        "j2-4",
        "tp2-t"
      ],
      [
        "j1-3",
        "j2-1",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "j2-2",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-scd41-101020952",
    "mountingReview": {
      "contactIds": ["j2-p-1", "j2-p-2", "j2-p-3", "j2-p-4"],
      "source": {"label": "Seeed Studio 101020952: V1.01 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J2", "count": 4, "package": "HEADER-4P"}],
        "boardSha256": "26345baf1fdb8a15ff17cf57250a010657b27aca90b387d51f865cfafc9cdcef"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -10.0, "y": -12.1, "width": 20, "height": 24.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020952",
    "name": "Seeed Grove - CO2 & Temperature & Humidity Sensor (SCD41)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41/",
    "revision": "V1.01",
    "description": "SCD41 photoacoustic CO2, temperature and humidity module with an underside Grove socket and a separate four-contact header. Module supply: 2.4–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — V1.01",
      "url": "https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip",
      "https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "scd41",
      "arduino"
    ],
    "provenance": assets["seeed-grove-scd41-101020952"]["provenance"],
    "board": {
      "width": 20,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M2.2 -10.0A0.1 0.1 0 0 1 2.1 -10.1A2.0 2.0 0 0 0 0.1 -12.1L-0.1 -12.1A2.0 2.0 0 0 0 -2.1 -10.1A0.1 0.1 0 0 1 -2.2 -10.0L-9.2 -10.0A0.8 0.8 0 0 0 -10.0 -9.2L-10.0 -2.2A0.1 0.1 0 0 0 -9.9 -2.1A2.0 2.0 0 0 1 -7.9 -0.1L-7.9 0.1A2.0 2.0 0 0 1 -9.9 2.1A0.1 0.1 0 0 0 -10.0 2.2L-10.0 9.2A0.8 0.8 0 0 0 -9.2 10.0L-2.2 10.0A0.1 0.1 0 0 1 -2.1 10.1A2.0 2.0 0 0 0 -0.1 12.1L0.1 12.1A2.0 2.0 0 0 0 2.1 10.1A0.1 0.1 0 0 1 2.2 10.0L9.2 10.0A0.8 0.8 0 0 0 10.0 9.2L10.0 2.2A0.1 0.1 0 0 0 9.9 2.1A2.0 2.0 0 0 1 7.9 0.1L7.9 -0.1A2.0 2.0 0 0 1 9.9 -2.1A0.1 0.1 0 0 0 10.0 -2.2L10.0 -9.2A0.8 0.8 0 0 0 9.2 -10.0L2.2 -10.0Z"
    },
    "contacts": assets["seeed-grove-scd41-101020952"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-scd41-101020952"]["artwork"],
    "backArtwork": assets["seeed-grove-scd41-101020952"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "j2-p-4"
      ],
      [
        "j1-2",
        "j2-p-3"
      ],
      [
        "j1-3",
        "j2-p-2"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "j2-p-1"
      ]
    ]
  },
  {
    "id": "seeed-grove-fsr402-101020553",
    "sku": "101020553",
    "name": "Seeed Grove - Round Force Sensor FSR402",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Round_Force_Sensor_FSR402/",
    "revision": "v1.0",
    "description": "FSR402 force-sensor interface with a two-terminal probe connector and amplified analog output. The external flexible force probe connects between the bias and VIN terminals. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip",
      "https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "fsr402",
      "arduino"
    ],
    "provenance": assets["seeed-grove-fsr402-101020553"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-fsr402-101020553"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-fsr402-101020553"]["artwork"],
    "backArtwork": assets["seeed-grove-fsr402-101020553"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j2-1",
        "tp1-t"
      ],
      [
        "j2-3",
        "tp3-t"
      ],
      [
        "j2-4",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-vl53l0x-101020532",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2"],
      "source": {"label": "Seeed Studio 101020532: v1.0 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J1", "count": 2, "package": "H2-2.54"}],
        "boardSha256": "b600d662eef779a401b84056d2ec5cb6f01bba1d9b0c337853a9a6508f142783"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -10.0, "y": -10.25, "width": 20, "height": 20.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020532",
    "name": "Seeed Grove - Time of Flight Distance Sensor VL53L0X",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/",
    "revision": "v1.0",
    "description": "VL53L0X time-of-flight ranging module with level-shifted Grove I2C and separate shutdown/interrupt pads at sensor-side voltage. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip",
      "https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "vl53l0x",
      "arduino"
    ],
    "provenance": assets["seeed-grove-vl53l0x-101020532"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-vl53l0x-101020532"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-vl53l0x-101020532"]["artwork"],
    "backArtwork": assets["seeed-grove-vl53l0x-101020532"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j3-1",
        "tp1-t"
      ],
      [
        "j3-2",
        "tp2-t"
      ],
      [
        "j3-3",
        "tp3-t"
      ],
      [
        "j3-4",
        "j3-ss1",
        "j3-ss2",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-as5600-101020692",
    "sku": "101020692",
    "name": "Seeed Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/",
    "revision": "v1.0",
    "description": "AS5600 magnetic rotary-position module with Grove I2C, analog/PWM output, programming and direction contacts. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip",
      "https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "as5600",
      "arduino"
    ],
    "provenance": assets["seeed-grove-as5600-101020692"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-as5600-101020692"]["contacts"],
    "holes": [
      {
        "x": -4.037,
        "y": 6.654,
        "drill": 1
      },
      {
        "x": -4.037,
        "y": 3.606,
        "drill": 1
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-as5600-101020692"]["artwork"],
    "backArtwork": assets["seeed-grove-as5600-101020692"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "jp1-00",
        "tp4-t",
        "tp11-1"
      ]
    ]
  },
  {
    "id": "seeed-grove-digital-pir-101020793",
    "sku": "101020793",
    "name": "Seeed Grove - Digital PIR Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Digital-PIR-Sensor/",
    "revision": "v1.0 / 2019-10-09",
    "description": "Digital PIR motion module with a sensor lens and a digital motion indication on SIG. Module supply: 3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2019-10-09",
      "url": "https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip"
    },
    "references": [
      "https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip",
      "https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "digital-pir",
      "arduino"
    ],
    "provenance": assets["seeed-grove-digital-pir-101020793"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-digital-pir-101020793"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-digital-pir-101020793"]["artwork"],
    "backArtwork": assets["seeed-grove-digital-pir-101020793"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-amg8833-101020557",
    "sku": "101020557",
    "name": "Seeed Grove - Infrared Temperature Sensor Array(AMG8833)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Infrared_Temperature_Sensor_Array-AMG8833/",
    "revision": "v1.0",
    "description": "AMG8833 8×8 infrared temperature-array module with level-shifted Grove I2C, an address strap and interrupt test pad. Source reference designators on several fixture pads differ from their actual connected net; labels follow the net and schematic function. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip",
      "https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "amg8833",
      "arduino"
    ],
    "provenance": assets["seeed-grove-amg8833-101020557"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-amg8833-101020557"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-amg8833-101020557"]["artwork"],
    "backArtwork": assets["seeed-grove-amg8833-101020557"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j5-1",
        "gnd4-t"
      ],
      [
        "j5-2",
        "vcc1-t"
      ],
      [
        "j5-3",
        "sda4-t"
      ],
      [
        "j5-4",
        "j5-ss1",
        "j5-ss2",
        "jp1-11",
        "scl-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-compass-v2-101020492",
    "sku": "101020492",
    "name": "Seeed Grove - 3-Axis Digitial Compass v2.0",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-3-Axis_Digitial_Compass_v2.0/",
    "revision": "v2.0",
    "description": "BMM150 three-axis digital compass module with Grove I2C, data-ready and interrupt contacts. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v2.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip",
      "https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "compass-v2",
      "arduino"
    ],
    "provenance": assets["seeed-grove-compass-v2-101020492"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-compass-v2-101020492"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-compass-v2-101020492"]["artwork"],
    "backArtwork": assets["seeed-grove-compass-v2-101020492"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j2-1",
        "tp1-t"
      ],
      [
        "j2-2",
        "tp2-t"
      ],
      [
        "j2-3",
        "tp3-t"
      ],
      [
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "j1-00",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-adxl335-101020051",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6"],
      "source": {"label": "Seeed Studio 101020051: v1.1 header geometry", "url": "https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 6, "package": "6P-2.54-60/35MIL"}],
        "boardSha256": "8773404528a2219c39caa5023ba85a91911fba617857fcf339cb0d82e229e013"
      },
      "bodyRegions": [
        {"x": -10.0, "y": -12.1, "width": 20, "height": 24.2}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101020051",
    "name": "Seeed Grove - 3-Axis Analog Accelerometer",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-3-Axis_Analog_Accelerometer/",
    "revision": "v1.1",
    "description": "ADXL335 three-axis analog accelerometer breakout with X/Y/Z voltage outputs and self-test input. Six supplementary SMD lands belong to the same six external header terminals and are preserved as repeated native pads. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.1",
      "url": "https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip",
      "https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "adxl335",
      "arduino"
    ],
    "provenance": assets["seeed-grove-adxl335-101020051"]["provenance"],
    "board": {
      "width": 20,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M-10.0 -9.2A0.8 0.8 0 0 1 -9.2 -10.0L-2.2 -10.0A0.1 0.1 0 0 0 -2.1 -10.1A2.0 2.0 0 0 1 -0.1 -12.1L0.1 -12.1A2.0 2.0 0 0 1 2.1 -10.1A0.1 0.1 0 0 0 2.2 -10.0L9.2 -10.0A0.8 0.8 0 0 1 10.0 -9.2L10.0 -2.2A0.1 0.1 0 0 1 9.9 -2.1A2.002381 2.002381 0 0 0 7.9 0.0L7.9 0.1A2.0 2.0 0 0 0 9.9 2.1A0.110889 0.110889 0 0 1 10.0 2.2L10.0 9.2A0.8 0.8 0 0 1 9.2 10.0L2.2 10.0A0.111325 0.111325 0 0 0 2.1 10.1A2.0 2.0 0 0 1 0.1 12.1L-0.1 12.1A2.0 2.0 0 0 1 -2.1 10.1A0.1 0.1 0 0 0 -2.2 10.0L-9.2 10.0A0.8 0.8 0 0 1 -10.0 9.2L-10.0 2.2A0.1 0.1 0 0 1 -9.9 2.1A2.0 2.0 0 0 0 -7.9 0.1L-7.9 -0.1A2.0 2.0 0 0 0 -9.9 -2.1A0.1 0.1 0 0 1 -10.0 -2.2L-10.0 -9.2Z"
    },
    "contacts": assets["seeed-grove-adxl335-101020051"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-adxl335-101020051"]["artwork"],
    "backArtwork": assets["seeed-grove-adxl335-101020051"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CONTACT VIEW",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "footprintPads": assets["seeed-grove-adxl335-101020051"]["footprintPads"],
    "internalConnections": []
  },
  {
    "id": "seeed-grove-d7s-101021096",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j1-7"],
      "source": {"label": "Seeed Studio 101021096: V1.0 physical insertion headers", "url": "https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J1", "count": 7, "package": "H7-2.54"}],
        "boardSha256": "1819e0a32c15a22927f8e760aba2fe22b6a4c8a3efb265357b763085924183da"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -20.1, "y": -10.25, "width": 40.2, "height": 20.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "101021096",
    "name": "Seeed Grove - D7S Vibration Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/grove-d7s-vibration-sensor/",
    "revision": "V1.0",
    "description": "Omron D7S seismic vibration sensor module with Grove I2C and a seven-contact auxiliary header for interrupts and setting control. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — V1.0",
      "url": "https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar",
      "https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "d7s",
      "arduino"
    ],
    "provenance": assets["seeed-grove-d7s-101021096"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-d7s-101021096"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-d7s-101021096"]["artwork"],
    "backArtwork": assets["seeed-grove-d7s-101021096"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j3-1",
        "j1-4",
        "tp1-t"
      ],
      [
        "j3-2",
        "j1-3",
        "tp2-t"
      ],
      [
        "j3-3",
        "j1-7",
        "tp3-t"
      ],
      [
        "j3-4",
        "j3-ss1",
        "j3-ss2",
        "j1-6",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-gesture-paj7620-101020083",
    "sku": "101020083",
    "name": "Seeed Grove - Gesture V1.0",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Gesture_v1.0/",
    "revision": "v1.0 / 2015-03-13",
    "description": "PAJ7620U2 infrared gesture-recognition module with an underside Grove socket and a separate interrupt pad. Module supply: 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2015-03-13",
      "url": "https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip",
      "https://www.seeedstudio.com/Grove-Gesture-p-2463.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Gesture-p-2463.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "gesture-paj7620",
      "arduino"
    ],
    "provenance": assets["seeed-grove-gesture-paj7620-101020083"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-gesture-paj7620-101020083"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-gesture-paj7620-101020083"]["artwork"],
    "backArtwork": assets["seeed-grove-gesture-paj7620-101020083"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2"
      ]
    ]
  },
  {
    "id": "seeed-grove-gsr-101020052",
    "sku": "101020052",
    "name": "Seeed Grove - GSR Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-GSR_Sensor/",
    "revision": "v1.0",
    "description": "Galvanic skin-response interface with analog output, adjustment trimmer and a two-contact electrode lead connector. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip",
      "https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "gsr",
      "arduino"
    ],
    "provenance": assets["seeed-grove-gsr-101020052"]["provenance"],
    "board": {
      "width": 20,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M-2.2 10.0A0.1 0.1 0 0 1 -2.1 10.1A2.0 2.0 0 0 0 -0.1 12.1L0.1 12.1A2.0 2.0 0 0 0 2.1 10.1A0.1 0.1 0 0 1 2.2 10.0L9.2 10.0A0.8 0.8 0 0 0 10.0 9.2L10.0 2.2A0.1 0.1 0 0 0 9.9 2.1A2.0 2.0 0 0 1 7.9 0.1L7.9 -0.1A2.0 2.0 0 0 1 9.9 -2.1A0.1 0.1 0 0 0 10.0 -2.2L10.0 -9.2A0.8 0.8 0 0 0 9.2 -10.0L2.2 -10.0A0.1 0.1 0 0 1 2.1 -10.1A2.0 2.0 0 0 0 0.1 -12.1L-0.1 -12.1A2.0 2.0 0 0 0 -2.1 -10.1A0.1 0.1 0 0 1 -2.2 -10.0L-9.2 -10.0A0.8 0.8 0 0 0 -10.0 -9.2L-10.0 -2.2A0.1 0.1 0 0 0 -9.9 -2.1A2.0 2.0 0 0 1 -7.9 -0.1L-7.9 0.1A2.0 2.0 0 0 1 -9.9 2.1A0.1 0.1 0 0 0 -10.0 2.2L-10.0 9.2A0.8 0.8 0 0 0 -9.2 10.0L-2.2 10.0Z"
    },
    "contacts": assets["seeed-grove-gsr-101020052"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -10,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": 10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-gsr-101020052"]["artwork"],
    "backArtwork": assets["seeed-grove-gsr-101020052"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CONTACT VIEW",
    "footprintMode": "source",
    "footprintNote": "Exact selected electrical lands, drills and native contact centers from the cited source board. This is an off-board source contact reference, not a production mating footprint; review source copper, fitted board revision and connector mechanics before making a carrier.",
    "internalConnections": [
      [
        "j1-2",
        "j2-4"
      ]
    ]
  },
];
