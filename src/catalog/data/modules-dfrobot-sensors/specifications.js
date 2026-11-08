import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-bmp280-sen0372",
    "sku": "SEN0372",
    "name": "DFRobot Fermion: BMP280 Digital Pressure Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0372/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/18558/SEN0372_bmp280-barometric-pressure-sensor_cad_1.0.zip",
      "https://dfimg.dfrobot.com/nobody/wiki/6bd1eb42a4dc950f676c37c52fd27ff4.jpg",
      "https://dfimg.dfrobot.com/wiki/18558/SEN0372_bmp280-barometric-pressure-sensor_schematics_1.0.pdf"
    ],
    "description": "BMP280 digital pressure/temperature breakout with a four-contact I2C header. The address bridge is shown in the mirrored underside; its split copper is a configuration feature, not an invented extra GPIO interface. Module supply: 3.3–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmp280",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2140.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 16.5,
      "height": 12.5,
      "outline": "M-8.25 4.75L-8.25 4.6016L-8.25 4.4531L-8.25 4.3047L-8.25 4.1563L-8.25 4.0078L-8.25 3.8594L-8.25 3.711L-8.25 3.5625L-8.25 3.4141L-8.25 3.2656L-8.25 3.1172L-8.25 2.9688L-8.25 2.8203L-8.25 2.6719L-8.25 2.5235L-8.25 2.375L-8.25 2.2266L-8.25 2.0781L-8.25 1.9297L-8.25 1.7813L-8.25 1.6328L-8.25 1.4844L-8.25 1.336L-8.25 1.1875L-8.25 1.0391L-8.25 0.8906L-8.25 0.7422L-8.25 0.5938L-8.25 0.4453L-8.25 0.2969L-8.25 0.1484L-8.25 0.0L-8.25 -0.1484L-8.25 -0.2969L-8.25 -0.4453L-8.25 -0.5937L-8.25 -0.7422L-8.25 -0.8906L-8.25 -1.0391L-8.25 -1.1875L-8.25 -1.3359L-8.25 -1.4844L-8.25 -1.6328L-8.25 -1.7812L-8.25 -1.9297L-8.25 -2.0781L-8.25 -2.2266L-8.25 -2.375L-8.25 -2.5234L-8.25 -2.6719L-8.25 -2.8203L-8.25 -2.9687L-8.25 -3.1172L-8.25 -3.2656L-8.25 -3.4141L-8.25 -3.5625L-8.25 -3.7109L-8.25 -3.8594L-8.25 -4.0078L-8.25 -4.1562L-8.25 -4.3047L-8.25 -4.4531L-8.25 -4.6016L-8.25 -4.75L-8.2209 -5.044L-8.1358 -5.324L-7.9979 -5.5822L-7.8106 -5.8106L-7.5822 -5.998L-7.324 -6.1358L-7.044 -6.2209L-6.75 -6.25L-6.539 -6.25L-6.3281 -6.25L-6.1171 -6.25L-5.9062 -6.25L-5.6953 -6.25L-5.4843 -6.25L-5.2734 -6.25L-5.0625 -6.25L-4.8515 -6.25L-4.6406 -6.25L-4.4296 -6.25L-4.2187 -6.25L-4.0078 -6.25L-3.7968 -6.25L-3.5859 -6.25L-3.375 -6.25L-3.164 -6.25L-2.9531 -6.25L-2.7421 -6.25L-2.5312 -6.25L-2.3203 -6.25L-2.1093 -6.25L-1.8984 -6.25L-1.6875 -6.25L-1.4765 -6.25L-1.2656 -6.25L-1.0546 -6.25L-0.8437 -6.25L-0.6328 -6.25L-0.4218 -6.25L-0.2109 -6.25L0.0 -6.25L0.211 -6.25L0.4219 -6.25L0.6329 -6.25L0.8438 -6.25L1.0547 -6.25L1.2657 -6.25L1.4766 -6.25L1.6875 -6.25L1.8985 -6.25L2.1094 -6.25L2.3204 -6.25L2.5313 -6.25L2.7422 -6.25L2.9532 -6.25L3.1641 -6.25L3.375 -6.25L3.586 -6.25L3.7969 -6.25L4.0079 -6.25L4.2188 -6.25L4.4297 -6.25L4.6407 -6.25L4.8516 -6.25L5.0625 -6.25L5.2735 -6.25L5.4844 -6.25L5.6954 -6.25L5.9063 -6.25L6.1172 -6.25L6.3282 -6.25L6.5391 -6.25L6.75 -6.25L7.044 -6.2209L7.3241 -6.1358L7.5822 -5.998L7.8107 -5.8106L7.998 -5.5822L8.1359 -5.324L8.221 -5.044L8.25 -4.75L8.25 -4.6016L8.25 -4.4531L8.25 -4.3047L8.25 -4.1562L8.25 -4.0078L8.25 -3.8594L8.25 -3.7109L8.25 -3.5625L8.25 -3.4141L8.25 -3.2656L8.25 -3.1172L8.25 -2.9687L8.25 -2.8203L8.25 -2.6719L8.25 -2.5234L8.25 -2.375L8.25 -2.2266L8.25 -2.0781L8.25 -1.9297L8.25 -1.7812L8.25 -1.6328L8.25 -1.4844L8.25 -1.3359L8.25 -1.1875L8.25 -1.0391L8.25 -0.8906L8.25 -0.7422L8.25 -0.5937L8.25 -0.4453L8.25 -0.2969L8.25 -0.1484L8.25 0.0L8.25 0.1484L8.25 0.2969L8.25 0.4453L8.25 0.5938L8.25 0.7422L8.25 0.8906L8.25 1.0391L8.25 1.1875L8.25 1.336L8.25 1.4844L8.25 1.6328L8.25 1.7813L8.25 1.9297L8.25 2.0781L8.25 2.2266L8.25 2.375L8.25 2.5235L8.25 2.6719L8.25 2.8203L8.25 2.9688L8.25 3.1172L8.25 3.2656L8.25 3.4141L8.25 3.5625L8.25 3.711L8.25 3.8594L8.25 4.0078L8.25 4.1563L8.25 4.3047L8.25 4.4531L8.25 4.6016L8.25 4.75L8.221 5.044L8.1359 5.324L7.998 5.5822L7.8107 5.8107L7.5822 5.998L7.3241 6.1358L7.044 6.2209L6.75 6.25L6.5391 6.25L6.3282 6.25L6.1172 6.25L5.9063 6.25L5.6954 6.25L5.4844 6.25L5.2735 6.25L5.0625 6.25L4.8516 6.25L4.6407 6.25L4.4297 6.25L4.2188 6.25L4.0079 6.25L3.7969 6.25L3.586 6.25L3.375 6.25L3.1641 6.25L2.9532 6.25L2.7422 6.25L2.5313 6.25L2.3204 6.25L2.1094 6.25L1.8985 6.25L1.6875 6.25L1.4766 6.25L1.2657 6.25L1.0547 6.25L0.8438 6.25L0.6329 6.25L0.4219 6.25L0.211 6.25L0.0 6.25L-0.2109 6.25L-0.4218 6.25L-0.6328 6.25L-0.8437 6.25L-1.0546 6.25L-1.2656 6.25L-1.4765 6.25L-1.6875 6.25L-1.8984 6.25L-2.1093 6.25L-2.3203 6.25L-2.5312 6.25L-2.7421 6.25L-2.9531 6.25L-3.164 6.25L-3.375 6.25L-3.5859 6.25L-3.7968 6.25L-4.0078 6.25L-4.2187 6.25L-4.4296 6.25L-4.6406 6.25L-4.8515 6.25L-5.0625 6.25L-5.2734 6.25L-5.4843 6.25L-5.6953 6.25L-5.9062 6.25L-6.1171 6.25L-6.3281 6.25L-6.539 6.25L-6.75 6.25L-7.044 6.2209L-7.324 6.1358L-7.5822 5.998L-7.8106 5.8107L-7.9979 5.5822L-8.1358 5.324L-8.2209 5.044L-8.25 4.75Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmp280-sen0372"]["contacts"],
    "artwork": assets["dfrobot-bmp280-sen0372"]["artwork"],
    "backArtwork": assets["dfrobot-bmp280-sen0372"]["backArtwork"],
    "holes": [
      {
        "x": -5.749952,
        "y": -3.749988,
        "drill": 2.000002
      },
      {
        "x": -5.749952,
        "y": 3.750012,
        "drill": 2.000002
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18558/SEN0372_bmp280-barometric-pressure-sensor_cad_1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION / MIRRORED REAR",
    "internalConnections": [],
    "provenance": assets["dfrobot-bmp280-sen0372"]["provenance"]
  },
  {
    "id": "dfrobot-ens160-sen0515",
    "sku": "SEN0515",
    "name": "DFRobot Fermion: ENS160 Smart Air Quality Sensor - TVOC/eCO2/AQI Monitor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0515/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/20573/SEN0515_ens160-smart-air-quality-sensor_cad_V.zip",
      "https://dfimg.dfrobot.com/nobody/wiki/4c2e4277edadd04b0d01686d89e244fa.png",
      "https://dfimg.dfrobot.com/wiki/20573/SEN0515_ens160-smart-air-quality-sensor_dimension_V.pdf",
      "https://dfimg.dfrobot.com/wiki/20573/SEN0515_ens160-smart-air-quality-sensor_schematics_1.pdf"
    ],
    "description": "ENS160 air-quality breakout with a seven-contact SPI header and a separate four-contact I2C header. All eleven physical header terminals are represented; the wiki function summary combines repeated power/clock/data functions. Module supply: 3.3 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "ens160",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2523.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 20.000001,
      "height": 15.000298,
      "outline": "M-10.0 5.999852L-10.0 -6.000149L-9.970912 -6.294151L-9.885821 -6.574175L-9.747984 -6.832351L-9.560662 -7.06081L-9.332202 -7.248132L-9.074026 -7.385969L-8.794003 -7.471061L-8.500001 -7.500149L8.500001 -7.500149L8.794003 -7.471061L9.074026 -7.385969L9.332202 -7.248132L9.560662 -7.06081L9.747984 -6.832351L9.885821 -6.574175L9.970912 -6.294151L10.0 -6.000149L10.0 5.999852L9.969493 6.302156L9.882075 6.583727L9.743774 6.838537L9.560618 7.060556L9.338635 7.243756L9.083853 7.382108L8.802299 7.469582L8.500001 7.500149L-8.500001 7.499852L-8.794003 7.470764L-9.074026 7.385672L-9.332202 7.247835L-9.560662 7.060513L-9.747984 6.832053L-9.885821 6.573878L-9.970912 6.293854L-10.0 5.999852Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-ens160-sen0515"]["contacts"],
    "artwork": assets["dfrobot-ens160-sen0515"]["artwork"],
    "backArtwork": assets["dfrobot-ens160-sen0515"]["backArtwork"],
    "holes": [
      {
        "x": -7.504844,
        "y": 4.995427,
        "drill": 2.000001
      },
      {
        "x": 7.504843,
        "y": 4.995427,
        "drill": 2.000001
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/20573/SEN0515_ens160-smart-air-quality-sensor_cad_V.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [
      [
        "t1",
        "b1"
      ],
      [
        "t2",
        "b2"
      ]
    ],
    "provenance": assets["dfrobot-ens160-sen0515"]["provenance"]
  },
  {
    "id": "dfrobot-aht20-fermion-sen0527",
    "sku": "SEN0527",
    "name": "DFRobot Fermion: AHT20 Temperature and Humidity Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0527/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/18666/SEN0527_fermion-aht20-temperature-and-humidity-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/nobody/wiki/b9285ae0ca3393d36d6d9320cfc597ff.png",
      "https://dfimg.dfrobot.com/wiki/18666/SEN0527_fermion-aht20-temperature-and-humidity-sensor_dimension_V1.0.pdf"
    ],
    "description": "AHT20 Fermion temperature/humidity breakout with a four-contact I2C header. The part-specific DXF and dimension PDF establish 22 × 13.5 mm; the wiki summary repeats a different 30 × 20.5 mm dimension. Module supply: 2–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "aht20-fermion",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2603.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 21.999999,
      "height": 13.500334,
      "outline": "M-11.0 -5.250167L-11.0 5.249835L-10.970912 5.543837L-10.88582 5.82386L-10.747983 6.082036L-10.560661 6.310495L-10.332201 6.497818L-10.074026 6.635654L-9.794002 6.720746L-9.5 6.749834L9.5 6.750167L9.802297 6.719588L10.08385 6.632106L10.338631 6.493748L10.560612 6.310544L10.743767 6.088522L10.882068 5.833711L10.969488 5.552139L11.0 5.249835L11.0 -5.250167L10.970912 -5.544169L10.88582 -5.824193L10.747983 -6.082369L10.560661 -6.310828L10.332201 -6.49815L10.074026 -6.635987L9.794002 -6.721079L9.5 -6.750167L-9.5 -6.750167L-9.794002 -6.721079L-10.074026 -6.635987L-10.332201 -6.49815L-10.560661 -6.310828L-10.747983 -6.082369L-10.88582 -5.824193L-10.970912 -5.544169L-11.0 -5.250167Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-aht20-fermion-sen0527"]["contacts"],
    "artwork": assets["dfrobot-aht20-fermion-sen0527"]["artwork"],
    "backArtwork": assets["dfrobot-aht20-fermion-sen0527"]["backArtwork"],
    "holes": [
      {
        "x": -8.5,
        "y": 4.249834,
        "drill": 2.000001
      },
      {
        "x": 8.5,
        "y": 4.249834,
        "drill": 2.000001
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/18666/SEN0527_fermion-aht20-temperature-and-humidity-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [],
    "provenance": assets["dfrobot-aht20-fermion-sen0527"]["provenance"]
  },
  {
    "id": "dfrobot-aht20-gravity-sen0528",
    "sku": "SEN0528",
    "name": "DFRobot Gravity: AHT20 Temperature and Humidity Sensor",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0528/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/19331/SEN0528_aht20_cad_1.0.zip",
      "https://dfimg.dfrobot.com/nobody/wiki/d15b67dad57b09d38f8c38f2385353ca.png",
      "https://dfimg.dfrobot.com/wiki/19331/SEN0528_aht20_dimension_1.0.pdf"
    ],
    "description": "Gravity AHT20 temperature/humidity module. The source CAD is shown in its landscape orientation, with the Gravity contact projections along the bottom in SDA, SCL, GND, VCC order. The part-specific drawing establishes 22 × 20 mm; the wiki summary repeats 30 × 20.5 mm. Module supply: 2–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "aht20-gravity",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2604.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 22.000002,
      "height": 20.000001,
      "outline": "M7.5 -10.0L-7.5 -10.0L-7.845932 -9.982874L-8.186005 -9.932128L-8.517924 -9.848712L-8.839393 -9.733579L-9.148117 -9.587678L-9.441803 -9.411959L-9.718153 -9.207375L-9.974875 -8.974874L-10.207375 -8.718153L-10.41196 -8.441802L-10.587678 -8.148117L-10.733579 -7.839392L-10.848713 -7.517923L-10.932128 -7.186005L-10.982874 -6.845932L-11.000001 -6.5L-11.000001 6.5L-10.982874 6.845932L-10.932128 7.186005L-10.848713 7.517923L-10.733579 7.839392L-10.587678 8.148117L-10.41196 8.441802L-10.207375 8.718153L-9.974875 8.974874L-9.718153 9.207375L-9.441803 9.411959L-9.148117 9.587678L-8.839393 9.733579L-8.517924 9.848712L-8.186005 9.932128L-7.845932 9.982874L-7.5 10.0L7.5 10.0L7.845932 9.982874L8.186005 9.932128L8.517924 9.848712L8.839393 9.733579L9.148117 9.587678L9.441803 9.411959L9.718153 9.207375L9.974875 8.974874L10.207375 8.718153L10.41196 8.441802L10.587678 8.148117L10.733579 7.839392L10.848713 7.517923L10.932128 7.186005L10.982874 6.845932L11.000001 6.5L11.000001 -6.5L10.982874 -6.845932L10.932128 -7.186005L10.848713 -7.517923L10.733579 -7.839392L10.587678 -8.148117L10.41196 -8.441802L10.207375 -8.718153L9.974875 -8.974874L9.718153 -9.207375L9.441803 -9.411959L9.148117 -9.587678L8.839393 -9.733579L8.517924 -9.848712L8.186005 -9.932128L7.845932 -9.982874L7.5 -10.0Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-aht20-gravity-sen0528"]["contacts"],
    "artwork": assets["dfrobot-aht20-gravity-sen0528"]["artwork"],
    "backArtwork": assets["dfrobot-aht20-gravity-sen0528"]["backArtwork"],
    "holes": [
      {
        "x": -7.039134,
        "y": -6.5,
        "drill": 3.099998
      },
      {
        "x": 7.960866,
        "y": -6.5,
        "drill": 3.099998
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/19331/SEN0528_aht20_cad_1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [],
    "provenance": assets["dfrobot-aht20-gravity-sen0528"]["provenance"]
  },
  {
    "id": "dfrobot-ltr390-sen0540",
    "sku": "SEN0540",
    "name": "DFRobot Gravity: LTR390 UV Light Sensor (280nm-430nm, UVA, UVB)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0540/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/20171/SEN0540_ltr390-ultraviolet-seneor_cad_v1.0.zip",
      "https://dfimg.dfrobot.com/nobody/wiki/fd693361b387fd4ad8631816b0a68531.png",
      "https://dfimg.dfrobot.com/wiki/20171/SEN0540_ltr390-ultraviolet-seneor_dimension_v1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20171/SEN0540_ltr390-ultraviolet-seneor_schematics_v1.0.pdf"
    ],
    "description": "LTR390 ultraviolet/ambient-light module with selectable I2C/UART operation. The Gravity D/T signal is SDA or module TX; C/R is SCL or module RX. Module supply: 3.3–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "ltr390",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2650.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.000002,
      "outline": "M-16.0 -10.0L-15.982873 -10.345932L-15.932127 -10.686005L-15.848712 -11.017924L-15.733578 -11.339393L-15.587677 -11.648117L-15.411959 -11.941803L-15.207374 -12.218153L-14.974874 -12.474875L-14.718152 -12.707375L-14.441801 -12.91196L-14.148116 -13.087678L-13.839392 -13.233579L-13.517922 -13.348713L-13.186004 -13.432128L-12.845931 -13.482874L-12.499999 -13.500001L12.499999 -13.500001L12.845931 -13.482874L13.186004 -13.432128L13.517922 -13.348713L13.839392 -13.233579L14.148116 -13.087678L14.441801 -12.91196L14.718152 -12.707375L14.974874 -12.474875L15.207374 -12.218153L15.411959 -11.941803L15.587677 -11.648117L15.733578 -11.339393L15.848712 -11.017924L15.932127 -10.686005L15.982873 -10.345932L16.0 -10.0L16.0 10.0L15.982873 10.345932L15.932127 10.686005L15.848712 11.017924L15.733578 11.339393L15.587677 11.648117L15.411959 11.941803L15.207374 12.218153L14.974874 12.474875L14.718152 12.707375L14.441801 12.91196L14.148116 13.087678L13.839392 13.233579L13.517922 13.348713L13.186004 13.432128L12.845931 13.482874L12.499999 13.500001L-12.499999 13.500001L-12.845931 13.482874L-13.186004 13.432128L-13.517922 13.348713L-13.839392 13.233579L-14.148116 13.087678L-14.441801 12.91196L-14.718152 12.707375L-14.974874 12.474875L-15.207374 12.218153L-15.411959 11.941803L-15.587677 11.648117L-15.733578 11.339393L-15.848712 11.017924L-15.932127 10.686005L-15.982873 10.345932L-16.0 10.0L-16.0 -10.0Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-ltr390-sen0540"]["contacts"],
    "artwork": assets["dfrobot-ltr390-sen0540"]["artwork"],
    "backArtwork": assets["dfrobot-ltr390-sen0540"]["backArtwork"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": 10,
        "drill": 3.2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/20171/SEN0540_ltr390-ultraviolet-seneor_cad_v1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [],
    "provenance": assets["dfrobot-ltr390-sen0540"]["provenance"]
  },
  {
    "id": "dfrobot-bmp585-gravity-sen0664",
    "sku": "SEN0664",
    "name": "DFRobot Gravity: BMP585 High-Precision Barometric Pressure & Temperature Sensor (I2C / UART)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0664/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/23445/SEN0664_bmp585-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/8116b3fb111c496b92a0efac795320fc/wikien/b9c79a47a13151d3199424de61bb3375.png",
      "https://dfimg.dfrobot.com/wiki/23445/SEN0664_bmp585-sensor_dimension_V1.0.png",
      "https://dfimg.dfrobot.com/wiki/23445/SEN0664_bmp585-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23445/SEN0664_bmp585-sensor_layout_V1.0.pdf"
    ],
    "description": "Gravity BMP585 pressure/temperature module with selectable I2C/UART operation, a four-contact Gravity socket and a five-contact auxiliary header including INT. Module supply: 3.3–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmp585-gravity",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3068.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.00002,
      "outline": "M-16.0 -9.99999L-15.982873 -10.345922L-15.932127 -10.685995L-15.848712 -11.017913L-15.733579 -11.339382L-15.587677 -11.648107L-15.411959 -11.941792L-15.207374 -12.218143L-14.974874 -12.474864L-14.718153 -12.707364L-14.441802 -12.911949L-14.148117 -13.087667L-13.839392 -13.233569L-13.517923 -13.348702L-13.186005 -13.432117L-12.845932 -13.482863L-12.5 -13.49999L12.5 -13.50001L12.845932 -13.482883L13.186005 -13.432137L13.517923 -13.348722L13.839392 -13.233589L14.148117 -13.087687L14.441802 -12.911969L14.718153 -12.707384L14.974874 -12.474884L15.207374 -12.218163L15.411959 -11.941812L15.587677 -11.648127L15.733579 -11.339402L15.848712 -11.017933L15.932127 -10.686015L15.982873 -10.345942L16.0 -10.00001L16.0 9.99999L15.982875 10.345922L15.932129 10.685994L15.848715 11.017913L15.733582 11.339381L15.587681 11.648106L15.411963 11.94179L15.207378 12.218141L14.974877 12.474861L14.718155 12.707361L14.441804 12.911944L14.148118 13.08766L13.839393 13.23356L13.517923 13.348691L13.186005 13.432103L12.845932 13.482847L12.5 13.49997L-12.5 13.50001L-12.845932 13.482883L-13.186005 13.432137L-13.517923 13.348722L-13.839392 13.233589L-14.148117 13.087687L-14.441802 12.911969L-14.718153 12.707384L-14.974874 12.474884L-15.207374 12.218163L-15.411959 11.941812L-15.587677 11.648127L-15.733579 11.339402L-15.848712 11.017933L-15.932127 10.686015L-15.982873 10.345942L-16.0 10.00001L-16.0 -9.99999Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmp585-gravity-sen0664"]["contacts"],
    "artwork": assets["dfrobot-bmp585-gravity-sen0664"]["artwork"],
    "backArtwork": assets["dfrobot-bmp585-gravity-sen0664"]["backArtwork"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": 10,
        "drill": 3.2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23445/SEN0664_bmp585-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [
      [
        "p3",
        "h2"
      ],
      [
        "p4",
        "h1"
      ]
    ],
    "provenance": assets["dfrobot-bmp585-gravity-sen0664"]["provenance"]
  },
  {
    "id": "dfrobot-bmp581-gravity-sen0665",
    "sku": "SEN0665",
    "name": "DFRobot Gravity: BMP581 Barometric Pressure Sensor (±0.3hPa High Accuracy, I2C / UART)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0665/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/23429/SEN0665_bmp581-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/0cbdedf75e335cca582b3ef3a667dfa8.png",
      "https://dfimg.dfrobot.com/wiki/23429/SEN0665_bmp581-sensor_dimension_V1.0.png",
      "https://dfimg.dfrobot.com/wiki/23429/SEN0665_bmp581-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23429/SEN0665_bmp581-sensor_layout_V1.0.pdf"
    ],
    "description": "Gravity BMP581 pressure/temperature module with selectable I2C/UART operation, a four-contact Gravity socket and a five-contact auxiliary header including INT. Module supply: 3.3–5 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmp581-gravity",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3070.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.0001,
      "outline": "M-16.0 -9.99995L-15.9829 -10.34595L-15.9322 -10.68605L-15.8488 -11.01795L-15.7336 -11.33935L-15.5877 -11.64815L-15.412 -11.94185L-15.2074 -12.21815L-14.9749 -12.47485L-14.7182 -12.70735L-14.4418 -12.91195L-14.1482 -13.08765L-13.8394 -13.23355L-13.518 -13.34875L-13.1861 -13.43215L-12.846 -13.48285L-12.5 -13.49995L12.5 -13.50005L12.8459 -13.48285L13.186 -13.43215L13.5179 -13.34875L13.8393 -13.23355L14.1481 -13.08765L14.4418 -12.91195L14.7181 -12.70735L14.9748 -12.47485L15.2073 -12.21815L15.4119 -11.94185L15.5876 -11.64815L15.7335 -11.33945L15.8487 -11.01795L15.9321 -10.68605L15.9828 -10.34595L16.0 -10.00005L16.0 9.99995L15.9828 10.34595L15.9321 10.68595L15.8487 11.01795L15.7335 11.33935L15.5876 11.64805L15.4119 11.94175L15.2073 12.21815L14.9748 12.47485L14.7181 12.70735L14.4418 12.91195L14.1481 13.08765L13.8393 13.23355L13.5179 13.34865L13.186 13.43205L12.8459 13.48285L12.5 13.49995L-12.5 13.50005L-12.846 13.48285L-13.1861 13.43215L-13.518 13.34875L-13.8394 13.23355L-14.1482 13.08765L-14.4418 12.91195L-14.7182 12.70735L-14.9749 12.47485L-15.2074 12.21815L-15.412 11.94185L-15.5877 11.64815L-15.7336 11.33935L-15.8488 11.01795L-15.9322 10.68605L-15.9829 10.34595L-16.0 10.00005L-16.0 -9.99995Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmp581-gravity-sen0665"]["contacts"],
    "artwork": assets["dfrobot-bmp581-gravity-sen0665"]["artwork"],
    "backArtwork": assets["dfrobot-bmp581-gravity-sen0665"]["backArtwork"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": -10,
        "drill": 3.2
      },
      {
        "x": 12.5,
        "y": 10,
        "drill": 3.2
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23429/SEN0665_bmp581-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [
      [
        "p3",
        "h2"
      ],
      [
        "p4",
        "h1"
      ]
    ],
    "provenance": assets["dfrobot-bmp581-gravity-sen0665"]["provenance"]
  },
  {
    "id": "dfrobot-bmp585-fermion-sen0666",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j1-7"],
      "source": {"label": "DFRobot SEN0666: V1.0 / cited manufacturer dimensional CAD header geometry", "url": "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_cad_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer DXF and physical pin map. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 7}]
      },
      "bodyRegions": [
        {"x": -9.5, "y": -8.0, "width": 19, "height": 16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0666",
    "name": "DFRobot Fermion: BMP585 High-Precision Barometric Pressure & Temperature Sensor (±0.3 hPa, I2C / SPI / I3C)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0666/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/4dfa67056d305e3007d72ad5457affd5.png",
      "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_dimension_V1.0.png",
      "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_layout_V1.0.pdf"
    ],
    "description": "Fermion BMP585 pressure/temperature breakout with seven physical terminals for supply, shared serial interface, chip select and interrupt. The header order follows the manufacturer J1 schematic. Module supply: 3.3 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmp585-fermion",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3071.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19.0,
      "height": 16.0,
      "outline": "M9.5 6.5L9.5 -6.5L9.469514 -6.802296L9.382105 -7.083856L9.243803 -7.338648L9.060641 -7.560641L8.838648 -7.743803L8.583856 -7.882105L8.302296 -7.969514L8.0 -8.0L-8.0 -8.0L-8.3023 -7.969521L-8.583863 -7.882115L-8.838657 -7.743815L-9.060652 -7.560652L-9.243815 -7.338657L-9.382115 -7.083863L-9.469521 -6.8023L-9.5 -6.5L-9.5 6.5L-9.469525 6.802302L-9.382122 7.083867L-9.243823 7.338664L-9.06066 7.56066L-8.838664 7.743823L-8.583867 7.882122L-8.302302 7.969525L-8.0 8.0L8.0 8.0L8.302299 7.969518L8.58386 7.882112L8.838654 7.743811L9.060648 7.560648L9.243811 7.338654L9.382112 7.08386L9.469518 6.802299L9.5 6.5Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmp585-fermion-sen0666"]["contacts"],
    "artwork": assets["dfrobot-bmp585-fermion-sen0666"]["artwork"],
    "backArtwork": assets["dfrobot-bmp585-fermion-sen0666"]["backArtwork"],
    "holes": [
      {
        "x": -7,
        "y": -5.5,
        "drill": 2.0
      },
      {
        "x": 7,
        "y": -5.5,
        "drill": 2.0
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23288/SEN0666_bmp585-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [],
    "provenance": assets["dfrobot-bmp585-fermion-sen0666"]["provenance"]
  },
  {
    "id": "dfrobot-bmp581-fermion-sen0667",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j1-7"],
      "source": {"label": "DFRobot SEN0667: V1.0 / cited manufacturer dimensional CAD header geometry", "url": "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_cad_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer DXF and physical pin map. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 7}]
      },
      "bodyRegions": [
        {"x": -9.5, "y": -8.0, "width": 19, "height": 16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0667",
    "name": "DFRobot Fermion: BMP581 High-Precision Barometric Pressure & Temperature Sensor (Breakout, I2C/I3C/SPI, ±0.3hPa)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0667/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/502f4e6e3a0bdc9c18f95d77b702683f.png",
      "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_dimension_V1.0.png",
      "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_layout_V1.0.pdf"
    ],
    "description": "Fermion BMP581 pressure/temperature breakout with seven physical terminals for supply, shared serial interface, chip select and interrupt. The header order follows the manufacturer J1 schematic. Module supply: 3.3 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmp581-fermion",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3072.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19.0,
      "height": 16.0,
      "outline": "M9.5 6.5L9.5 -6.5L9.469514 -6.802296L9.382105 -7.083856L9.243803 -7.338648L9.060641 -7.560641L8.838648 -7.743803L8.583856 -7.882105L8.302296 -7.969514L8.0 -8.0L-8.0 -8.0L-8.3023 -7.969521L-8.583863 -7.882115L-8.838657 -7.743815L-9.060652 -7.560652L-9.243815 -7.338657L-9.382115 -7.083863L-9.469521 -6.8023L-9.5 -6.5L-9.5 6.5L-9.469525 6.802302L-9.382122 7.083867L-9.243823 7.338664L-9.06066 7.56066L-8.838664 7.743823L-8.583867 7.882122L-8.302302 7.969525L-8.0 8.0L8.0 8.0L8.302299 7.969518L8.58386 7.882112L8.838654 7.743811L9.060648 7.560648L9.243811 7.338654L9.382112 7.08386L9.469518 6.802299L9.5 6.5Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmp581-fermion-sen0667"]["contacts"],
    "artwork": assets["dfrobot-bmp581-fermion-sen0667"]["artwork"],
    "backArtwork": assets["dfrobot-bmp581-fermion-sen0667"]["backArtwork"],
    "holes": [
      {
        "x": -7,
        "y": -5.5,
        "drill": 2.0
      },
      {
        "x": 7,
        "y": -5.5,
        "drill": 2.0
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23291/SEN0667_bmp581-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [],
    "provenance": assets["dfrobot-bmp581-fermion-sen0667"]["provenance"]
  },
  {
    "id": "dfrobot-bmi323-fermion-sen0693",
    "sku": "SEN0693",
    "name": "DFRobot Fermion: Compact Low-Power 6DOF IMU Sensor for Embedded Motion Sensing (16x16mm, I2C, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer dimensional CAD",
    "source": "https://wiki.dfrobot.com/sen0693/",
    "references": [
      "https://dfimg.dfrobot.com/wiki/23754/SEN0693_bmi323-6-dof-imu-sensor_cad_V1.0.zip",
      "https://dfimg.dfrobot.com/8116b3fb111c496b92a0efac795320fc/wikien/741726f5085b2013eab20634c1490fba.png",
      "https://dfimg.dfrobot.com/wiki/23754/SEN0693_bmi323-6-dof-imu-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23754/SEN0693_bmi323-6-dof-imu-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23754/SEN0693_bmi323-6-dof-imu-sensor_layout_V1.0.pdf"
    ],
    "description": "BMI323 six-axis IMU breakout with a six-contact header and a five-contact SH1.0 socket. The component-side header runs INT1, INT2, SDA, SCL, GND, 3V3 left to right; the manufacturer underside picture reverses that row. The SH socket exposes supply, I2C and a documented NC contact. Module supply: 3.3 V. Contact numbers identify physical positions; they do not copy the wiki combined-function enumeration.",
    "tags": [
      "sensor",
      "bmi323-fermion",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3122.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 16.0,
      "height": 16.0,
      "outline": "M6.5 -8.0L6.8023 -7.9695L7.0838 -7.8821L7.3386 -7.7438L7.5606 -7.5607L7.7438 -7.3387L7.8821 -7.0839L7.9695 -6.8023L8.0 -6.5L8.0 6.5L7.9695 6.8023L7.8821 7.0838L7.7438 7.3386L7.5606 7.5606L7.3386 7.7438L7.0838 7.8821L6.8023 7.9695L6.5 8.0L-6.5 8.0L-6.8024 7.9695L-7.0839 7.8821L-7.3387 7.7438L-7.5607 7.5606L-7.7439 7.3386L-7.8822 7.0838L-7.9696 6.8023L-8.0 6.5L-8.0 -6.5L-7.9696 -6.8023L-7.8822 -7.0839L-7.7439 -7.3387L-7.5607 -7.5607L-7.3387 -7.7438L-7.0839 -7.8821L-6.8024 -7.9696L-6.5 -8.0L6.5 -8.0Z",
      "color": "#292e2b"
    },
    "contacts": assets["dfrobot-bmi323-fermion-sen0693"]["contacts"],
    "artwork": assets["dfrobot-bmi323-fermion-sen0693"]["artwork"],
    "backArtwork": assets["dfrobot-bmi323-fermion-sen0693"]["backArtwork"],
    "holes": [
      {
        "x": -5.50005,
        "y": -5.500023,
        "drill": 1.95
      },
      {
        "x": 5.49995,
        "y": -5.500023,
        "drill": 1.95
      }
    ],
    "footprintMode": "reference",
    "footprintNote": "Mechanical source CAD fixes the module frame and selected contact/metal-lead centers. Copper, pad stack, connector contact projection, original pad side and omitted configuration/mounting features are reference approximations; verify the exact module before fabrication.",
    "cad": {
      "label": "Manufacturer 2D CAD / mechanical reference",
      "url": "https://dfimg.dfrobot.com/wiki/23754/SEN0693_bmi323-6-dof-imu-sensor_cad_V1.0.zip"
    },
    "numericLabels": true,
    "viewLabel": "COMPONENT-SIDE CONTACT PROJECTION",
    "internalConnections": [
      [
        "h5",
        "sh-2"
      ],
      [
        "h6",
        "sh-1"
      ]
    ],
    "provenance": assets["dfrobot-bmi323-fermion-sen0693"]["provenance"]
  },
];
