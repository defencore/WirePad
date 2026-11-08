import assets from "./environmental-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-6063-airquality11",
    "sku": "MIKROE-6063",
    "name": "Air Quality 11 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/air-quality-11-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air-quality-11-click/air_quality_11_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality11/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_11_Click_2d_3d_files.zip"
      }
    ],
    "description": "Air Quality 11 Click add-on module for environmental, gas applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental, gas",
      "i2c, spi",
      "ens161"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-11-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6063",
      "price": "32.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6063-airquality11"]["contacts"],
    "artwork": assets["mikroe-mikroe-6063-airquality11"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_11_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6063-airquality11"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-2467-environment",
    "sku": "MIKROE-2467",
    "name": "Environment Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/environment-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/enviroment/enviroment-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/environment/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Environment_click_2d_3d_files_v100ID.zip"
      }
    ],
    "description": "Environment Click add-on module for environmental applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "i2c, spi",
      "bme680"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/environment-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2467",
      "price": "34.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M2.54,-14.287 2.667,-14.287 2.794,-14.237 2.896,-14.186 2.997,-14.11 3.073,-14.008 3.124,-13.906 3.175,-13.779 3.175,-13.652 3.175,-9.97 3.175,-9.843 3.226,-9.716 3.277,-9.614 3.353,-9.512 3.454,-9.436 3.556,-9.385 3.683,-9.335 3.81,-9.335 3.937,-9.335 4.064,-9.385 4.166,-9.436 4.267,-9.512 4.343,-9.614 4.394,-9.716 4.445,-9.843 4.445,-9.97 4.445,-13.652 4.445,-13.779 4.496,-13.906 4.547,-14.008 4.623,-14.11 4.724,-14.186 4.826,-14.237 4.953,-14.287 5.08,-14.287 10.414,-14.287 10.871,-14.237 11.278,-14.11 11.684,-13.906 12.04,-13.627 12.319,-13.272 12.522,-12.865 12.649,-12.459 12.7,-12.002 12.7,11.747 10.16,14.287 -12.7,14.287 -12.7,-12.002 -12.649,-12.459 -12.522,-12.865 -12.319,-13.272 -12.04,-13.627 -11.684,-13.906 -11.278,-14.11 -10.871,-14.237 -10.414,-14.287 -5.08,-14.287 -5.004,-14.287 -4.953,-14.287 -4.826,-14.237 -4.724,-14.186 -4.623,-14.11 -4.547,-14.008 -4.496,-13.906 -4.445,-13.779 -4.445,-13.652 -4.445,-9.97 -4.445,-9.843 -4.394,-9.716 -4.343,-9.614 -4.267,-9.512 -4.166,-9.436 -4.064,-9.385 -3.937,-9.335 -3.81,-9.335 -3.683,-9.335 -3.556,-9.385 -3.454,-9.436 -3.353,-9.512 -3.277,-9.614 -3.226,-9.716 -3.175,-9.843 -3.175,-9.97 -3.175,-13.652 -3.175,-13.779 -3.124,-13.906 -3.073,-14.008 -2.997,-14.11 -2.896,-14.186 -2.794,-14.237 -2.667,-14.287 -2.54,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2467-environment"]["contacts"],
    "artwork": assets["mikroe-mikroe-2467-environment"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Environment_click_2d_3d_files_v100ID.zip"
    },
    "provenance": assets["mikroe-mikroe-2467-environment"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-6418-airquality12",
    "sku": "MIKROE-6418",
    "name": "Air Quality 12 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/air-quality-12-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air-quality-12-click/air-quality-12-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality12/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_12_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "Air Quality 12 Click add-on module for environmental applications. Host interface: I2C, UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "i2c, uart",
      "rrh46410"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-12-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6418",
      "price": "29.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6418-airquality12"]["contacts"],
    "artwork": assets["mikroe-mikroe-6418-airquality12"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_12_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6418-airquality12"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-3056-airquality5",
    "sku": "MIKROE-3056",
    "name": "Air quality 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/air-quality-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air-quality-5/Air_Quality_5_Click_v102_Schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_quality_5_click_2d_3d_files_v102.zip"
      }
    ],
    "description": "Air quality 5 Click add-on module for gas applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "gas",
      "i2c",
      "mics-6814"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3056",
      "price": "45.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3056-airquality5"]["contacts"],
    "artwork": assets["mikroe-mikroe-3056-airquality5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_quality_5_click_2d_3d_files_v102.zip"
    },
    "provenance": assets["mikroe-mikroe-3056-airquality5"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4904-airquality8",
    "sku": "MIKROE-4904",
    "name": "Air Quality 8 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/air-quality-8-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air_quality_8_click/Air_Quality_8_click_v101_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality8/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_8_Click_2d_3d_files.zip"
      }
    ],
    "description": "Air Quality 8 Click add-on module for air quality, gas applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "air quality, gas",
      "i2c",
      "zmod4510"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-8-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4904",
      "price": "23.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4904-airquality8"]["contacts"],
    "artwork": assets["mikroe-mikroe-4904-airquality8"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_8_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4904-airquality8"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-5060-airquality9",
    "sku": "MIKROE-5060",
    "name": "Air quality 9 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/air-quality-9-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air_quality_9_click/Air_Quality_9_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality9/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_9_Click_2d_3d_files.zip"
      }
    ],
    "description": "Air quality 9 Click add-on module for air quality, environmental, gas applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "air quality, environmental, gas",
      "i2c, spi",
      "ens160"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-9-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5060",
      "price": "38.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5060-airquality9"]["contacts"],
    "artwork": assets["mikroe-mikroe-5060-airquality9"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_9_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5060-airquality9"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-4558-environment2",
    "sku": "MIKROE-4558",
    "name": "Environment 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/environment-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/environment_2_click/environment-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/environment2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/environment_2_click_2d_3d_files.zip"
      }
    ],
    "description": "Environment 2 Click add-on module for environmental applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "i2c",
      "sht40"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/environment-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4558",
      "price": "23.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M2.532,-13.231 2.351,-13.173 2.188,-13.084 2.047,-12.969 1.929,-12.83 1.839,-12.673 1.778,-12.501 1.749,-12.318 1.755,-12.128 1.797,-11.942 1.871,-11.772 1.974,-11.621 2.102,-11.492 2.25,-11.388 2.416,-11.312 2.596,-11.268 2.786,-11.255 3.754,-11.252 10.414,-11.252 10.862,-11.208 11.289,-11.078 11.682,-10.868 12.03,-10.583 12.316,-10.234 12.526,-9.841 12.656,-9.414 12.7,-8.966 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-8.966 -12.656,-9.414 -12.526,-9.841 -12.316,-10.234 -12.03,-10.583 -11.682,-10.868 -11.289,-11.078 -10.862,-11.208 -10.414,-11.252 -3.759,-11.252 -2.794,-11.255 -2.604,-11.268 -2.425,-11.313 -2.259,-11.389 -2.111,-11.493 -1.983,-11.622 -1.881,-11.773 -1.807,-11.943 -1.765,-12.128 -1.759,-12.318 -1.787,-12.501 -1.848,-12.673 -1.939,-12.83 -2.056,-12.968 -2.197,-13.084 -2.359,-13.172 -2.54,-13.231 -3.716,-13.231 -3.716,-21.463 3.708,-21.463 3.708,-13.231Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4558-environment2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4558-environment2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/environment_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4558-environment2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3098-no2",
    "sku": "MIKROE-3098",
    "name": "NO2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/no2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/no2/no2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/no2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/no2-click-2d-and-3d-files-v101.zip"
      }
    ],
    "description": "NO2 Click add-on module for gas, no2 applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "gas, no2",
      "analog, i2c",
      "lmp9100sd"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/no2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3098",
      "price": "86.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575ZM-6.858,-26.797 -6.858,-22.67 -8.255,-21.273 -8.255,-15.812 -6.858,-14.415 -6.858,-10.287 6.858,-10.287 6.858,-14.415 8.255,-15.812 8.255,-21.273 6.858,-22.67 6.858,-26.797Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3098-no2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3098-no2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/no2-click-2d-and-3d-files-v101.zip"
    },
    "provenance": assets["mikroe-mikroe-3098-no2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-3700-no22",
    "sku": "MIKROE-3700",
    "name": "NO2 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v2",
    "source": "https://www.mikroe.com/no2-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/no2_2_click/NO2-2-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/no22/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/no2_2_click_2D_and_3D_files.zip"
      }
    ],
    "description": "NO2 2 Click add-on module for gas, no2 applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "gas, no2",
      "spi",
      "mics-2714"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/no2-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3700",
      "price": "47.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3700-no22"]["contacts"],
    "artwork": assets["mikroe-mikroe-3700-no22"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v2 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/no2_2_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3700-no22"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-3097-alcohol2",
    "sku": "MIKROE-3097",
    "name": "Alcohol 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/alcohol-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/alcohol-2/alcohol-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/alcohol2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/alcohol-2-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "Alcohol 2 Click add-on module for alcohol, gas applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. ",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "alcohol, gas",
      "analog, i2c",
      "lmp9100sd"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/alcohol-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3097",
      "price": "80.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575ZM-6.858,-26.797 -6.858,-22.67 -8.255,-21.273 -8.255,-15.812 -6.858,-14.415 -6.858,-10.287 6.858,-10.287 6.858,-14.415 8.255,-15.812 8.255,-21.273 6.858,-22.67 6.858,-26.797Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3097-alcohol2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3097-alcohol2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/alcohol-2-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-3097-alcohol2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4654-ozone3",
    "sku": "MIKROE-4654",
    "name": "Ozone 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ozone-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ozone_3_click/Ozone_3_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ozone3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ozone_3_click_2d_3d_files.zip"
      }
    ],
    "description": "Ozone 3 Click add-on module for gas, ozone applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "gas, ozone",
      "analog, i2c",
      "3sp-o3-20"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ozone-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4654",
      "price": "95.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4654-ozone3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4654-ozone3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ozone_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4654-ozone3"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-2516-pollution",
    "sku": "MIKROE-2516",
    "name": "Pollution Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/pollution-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/pollution/pollution-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/pollution/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Pollution_click_2d_3d_files.zip"
      }
    ],
    "description": "Pollution Click add-on module for air quality, gas applications. Host interface: Analog, GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "air quality, gas",
      "analog, gpio",
      "wsp2110"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/pollution-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2516",
      "price": "59.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.528,
      "height": 43.441,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2516-pollution"]["contacts"],
    "artwork": assets["mikroe-mikroe-2516-pollution"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Pollution_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2516-pollution"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.764,
      -21.7205,
      12.764,
      21.7205
    ]
  },
  {
    "id": "mikroe-mikroe-4036-radiation",
    "sku": "MIKROE-4036",
    "name": "Radiation Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/radiation-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/radiation_click/radiation-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/radiation/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/radiation_click-master_2d_3d_files.zip"
      }
    ],
    "description": "Radiation Click add-on module for environmental applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "gpio",
      "bg51"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/radiation-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4036",
      "price": "399.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4036-radiation"]["contacts"],
    "artwork": assets["mikroe-mikroe-4036-radiation"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/radiation_click-master_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4036-radiation"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-1444-thunder",
    "sku": "MIKROE-1444",
    "name": "Thunder Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/thunder-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thunder/Thunder_click_v101_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thunder/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Thunder_Click_2d_3d_files.zip"
      }
    ],
    "description": "Thunder Click add-on module for miscellaneous applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "miscellaneous",
      "gpio, spi",
      "as3935"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thunder-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1444",
      "price": "42.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 41.681,
      "outline": "M10.16,20.84 -12.7,20.84 -12.7,-3.695 -6.325,-10.071 -6.325,-20.84 6.325,-20.84 6.325,-10.045 12.7,-3.67 12.7,18.3Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1444-thunder"]["contacts"],
    "artwork": assets["mikroe-mikroe-1444-thunder"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Thunder_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1444-thunder"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.990090526065353,
      -20.8405,
      12.989894875104351,
      20.8405
    ]
  },
  {
    "id": "mikroe-mikroe-2767-ozone2",
    "sku": "MIKROE-2767",
    "name": "Ozone 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ozone-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ozone-2/ozone-2-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ozone2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ozone-2-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "Ozone 2 Click add-on module for gas, ozone applications. Host interface: Analog, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "gas, ozone",
      "analog, spi",
      "mq131"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ozone-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2767",
      "price": "83.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.149,
      "outline": "M-8.999,-12.965 -10.252,-16.42 -10.242,-19.981 -9.033,-23.33 -6.685,-26.141 -3.508,-27.966 0,-28.574 3.508,-27.966 6.685,-26.141 9.033,-23.33 10.242,-19.981 10.252,-16.42 8.999,-12.965 12.7,-9.246 12.7,4.978 12.7,26.034 10.16,28.574 -12.7,28.574 -12.7,4.978 -12.7,-9.246Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2767-ozone2"]["contacts"],
    "artwork": assets["mikroe-mikroe-2767-ozone2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ozone-2-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-2767-ozone2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.5745,
      12.7,
      28.5745
    ]
  },
  {
    "id": "mikroe-mikroe-5820-waterdetect2",
    "sku": "MIKROE-5820",
    "name": "Water Detect 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/water-detect-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/water-detect-2-click/Water_detect_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/waterdetect2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/water_detect_2_click_2d_3d_files.zip"
      }
    ],
    "description": "Water Detect 2 Click add-on module for miscellaneous applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. ",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "miscellaneous",
      "gpio",
      "opb350l250"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/water-detect-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5820",
      "price": "63.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5820-waterdetect2"]["contacts"],
    "artwork": assets["mikroe-mikroe-5820-waterdetect2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/water_detect_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5820-waterdetect2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-2529-airquality2",
    "sku": "MIKROE-2529",
    "name": "Air quality 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/air-quality-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air-qualitty-2/air-quality2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airquality2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "Air quality 2 Click add-on module for air quality, gas applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "air quality, gas",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-quality-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2529",
      "price": "49.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,21.463 -12.7,-21.463 12.7,-21.463 12.7,18.923 10.16,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2529-airquality2"]["contacts"],
    "artwork": assets["mikroe-mikroe-2529-airquality2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air_Quality_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2529-airquality2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
