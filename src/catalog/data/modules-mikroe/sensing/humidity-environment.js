import assets from "./humidity-environment-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-2818-dht222",
    "sku": "MIKROE-2818",
    "name": "DHT22 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/dht22-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dht22-2/dht22-2-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dht222/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/DHT22_2_click_2d_3d_files.zip"
      }
    ],
    "description": "DHT22 2 Click add-on module for temperature & humidity applications. Host interface: 1-Wire, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "1-wire, i2c",
      "cm2322"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dht22-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2818",
      "price": "26.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.874,-21.414 11.302,-21.28 11.689,-21.069 12.027,-20.79 12.306,-20.452 12.517,-20.065 12.651,-19.637 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.651,-19.637 -12.517,-20.065 -12.306,-20.452 -12.027,-20.79 -11.689,-21.069 -11.302,-21.28 -10.874,-21.414 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2818-dht222"]["contacts"],
    "artwork": assets["mikroe-mikroe-2818-dht222"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/DHT22_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2818-dht222"]["provenance"],
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
    "id": "mikroe-mikroe-2101-sht",
    "sku": "MIKROE-2101",
    "name": "SHT Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/sht-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/sht/sht-click-board-schematic-v100.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/sht/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/SHT_Click_2d_3d_files.zip"
      }
    ],
    "description": "SHT Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "sht31-dis"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/sht-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2101",
      "price": "31.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.362,
      "height": 28.57,
      "outline": "M-4.459,-4.892 -4.427,-4.922 -4.443,-4.946 -4.459,-4.957 -4.497,-14.28 4.459,-14.28 4.447,-4.911 2.645,-4.897 2.314,-4.792 2.046,-4.587 1.859,-4.305 1.777,-3.968 1.814,-3.623 1.96,-3.318 2.199,-3.08 2.513,-2.922 4.849,-2.92 5.453,-3.153 5.945,-3.549 6.291,-4.077 6.458,-4.702 6.458,-14.28 12.676,-14.285 12.681,11.745 10.141,14.285 -12.681,14.285 -12.649,14.255 -12.665,14.231 -12.681,14.22 -12.681,-14.215 -12.665,-14.226 -12.649,-14.25 -12.681,-14.28 -6.496,-14.28 -6.496,-4.872 -6.458,-4.488 -6.347,-4.123 -6.167,-3.787 -5.923,-3.489 -5.625,-3.245 -5.289,-3.065 -4.924,-2.954 -4.54,-2.916 -2.894,-2.916 -2.576,-2.97 -2.265,-3.145 -2.035,-3.417 -1.914,-3.765 -1.927,-4.133 -2.066,-4.461 -2.311,-4.72 -2.664,-4.886Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2101-sht"]["contacts"],
    "artwork": assets["mikroe-mikroe-2101-sht"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/SHT_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2101-sht"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.681,
      -14.285,
      12.681,
      14.285
    ]
  },
  {
    "id": "mikroe-mikroe-3436-temphum12",
    "sku": "MIKROE-3436",
    "name": "TempHum 12 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-12-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp-hum-12/temp-hum-12-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum12/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_12_click_v100_CAD.zip"
      }
    ],
    "description": "TempHum 12 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "hdc2080"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-12-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3436",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-3436-temphum12"]["contacts"],
    "artwork": assets["mikroe-mikroe-3436-temphum12"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_12_click_v100_CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3436-temphum12"]["provenance"],
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
    "id": "mikroe-mikroe-3635-temphum13",
    "sku": "MIKROE-3635",
    "name": "TempHum 13 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-13-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26hum_13_click/temp-hum-13-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum13/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp%26Hum%2013%20click_2D_and_3D_files.zip"
      }
    ],
    "description": "TempHum 13 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "htu21df"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-13-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3635",
      "price": "14.00",
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
    "contacts": assets["mikroe-mikroe-3635-temphum13"]["contacts"],
    "artwork": assets["mikroe-mikroe-3635-temphum13"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp%26Hum%2013%20click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3635-temphum13"]["provenance"],
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
    "id": "mikroe-mikroe-4306-temphum14",
    "sku": "MIKROE-4306",
    "name": "TempHum 14 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-14-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26hum_14_click/tem%26hum-14-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum14/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp%26hum_14_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 14 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-14-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4306",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-4306-temphum14"]["contacts"],
    "artwork": assets["mikroe-mikroe-4306-temphum14"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp%26hum_14_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4306-temphum14"]["provenance"],
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
    "id": "mikroe-mikroe-4733-temphum16",
    "sku": "MIKROE-4733",
    "name": "TempHum 16 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-16-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26hum_16_click/temp-hum-16-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum16/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp%26hum_16_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 16 Click add-on module for temperature & humidity applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c, spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-16-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4733",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-4733-temphum16"]["contacts"],
    "artwork": assets["mikroe-mikroe-4733-temphum16"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp%26hum_16_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4733-temphum16"]["provenance"],
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
    "id": "mikroe-mikroe-4892-temphum18",
    "sku": "MIKROE-4892",
    "name": "TempHum 18 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-18-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26hum_18_click/Temp%26Hum_18_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum18/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_18_Click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 18 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "hs3003"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-18-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4892",
      "price": "16.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288ZM4.115,-5.854 4.1,-5.705 4.057,-5.563 3.987,-5.431 3.892,-5.315 3.776,-5.22 3.644,-5.15 3.502,-5.107 3.353,-5.092 -3.353,-5.092 -3.502,-5.107 -3.644,-5.15 -3.776,-5.22 -3.892,-5.315 -3.987,-5.431 -4.057,-5.563 -4.1,-5.705 -4.115,-5.854 -4.115,-11.569 -4.13,-11.719 -4.173,-11.861 -4.243,-11.992 -4.338,-12.108 -4.454,-12.204 -4.585,-12.274 -4.727,-12.316 -4.877,-12.332 -4.953,-12.332 -5.102,-12.316 -5.245,-12.274 -5.376,-12.204 -5.492,-12.108 -5.587,-11.992 -5.657,-11.861 -5.7,-11.719 -5.715,-11.569 -5.715,-6.484 -5.715,-4.254 -5.7,-4.105 -5.657,-3.962 -5.587,-3.831 -5.492,-3.715 -5.376,-3.62 -5.245,-3.55 -5.102,-3.507 -4.953,-3.492 4.953,-3.492 5.102,-3.507 5.245,-3.55 5.376,-3.62 5.492,-3.715 5.587,-3.831 5.657,-3.962 5.7,-4.105 5.715,-4.254 5.715,-6.484 5.715,-11.569 5.7,-11.719 5.657,-11.861 5.587,-11.992 5.492,-12.108 5.376,-12.204 5.245,-12.274 5.102,-12.316 4.953,-12.332 4.877,-12.332 4.727,-12.316 4.585,-12.274 4.454,-12.204 4.338,-12.108 4.243,-11.992 4.173,-11.861 4.13,-11.719 4.115,-11.569Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4892-temphum18"]["contacts"],
    "artwork": assets["mikroe-mikroe-4892-temphum18"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_18_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4892-temphum18"]["provenance"],
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
    "id": "mikroe-mikroe-4922-temphum19",
    "sku": "MIKROE-4922",
    "name": "TempHum 19 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-19-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temphum-19-click/Temp%26Hum_19_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum19/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_19_Click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 19 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "bps240"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-19-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4922",
      "price": "22.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M3.712,-12.903 3.731,-12.746 3.774,-12.604 3.844,-12.473 3.939,-12.357 4.055,-12.262 4.186,-12.192 4.329,-12.148 4.478,-12.134 4.953,-12.134 5.102,-12.148 5.245,-12.192 5.376,-12.262 5.492,-12.357 5.587,-12.473 5.657,-12.604 5.7,-12.746 5.715,-12.896 5.715,-13.525 5.73,-13.675 5.773,-13.817 5.843,-13.948 5.938,-14.064 6.054,-14.159 6.185,-14.229 6.328,-14.273 6.477,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.113 11.682,-13.903 12.03,-13.618 12.316,-13.27 12.526,-12.876 12.656,-12.45 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.45 -12.526,-12.876 -12.316,-13.27 -12.03,-13.618 -11.682,-13.903 -11.289,-14.113 -10.862,-14.243 -10.414,-14.287 -6.477,-14.287 -6.328,-14.273 -6.185,-14.229 -6.054,-14.159 -5.938,-14.064 -5.843,-13.948 -5.773,-13.817 -5.73,-13.675 -5.715,-13.525 -5.715,-12.896 -5.7,-12.746 -5.657,-12.604 -5.587,-12.473 -5.492,-12.357 -5.376,-12.262 -5.245,-12.192 -5.102,-12.148 -4.953,-12.134 -4.478,-12.134 -4.329,-12.148 -4.186,-12.192 -4.055,-12.262 -3.939,-12.357 -3.844,-12.473 -3.774,-12.604 -3.731,-12.746 -3.716,-12.896 -3.716,-13.525 -3.701,-13.675 -3.658,-13.817 -3.588,-13.948 -3.493,-14.064 -3.377,-14.159 -3.246,-14.229 -3.103,-14.273 -2.954,-14.287 2.946,-14.287 3.096,-14.273 3.238,-14.229 3.369,-14.159 3.485,-14.064 3.58,-13.948 3.65,-13.817 3.694,-13.675 3.708,-13.525ZM3.712,-12.903 3.709,-12.906 3.71,-12.902 3.712,-12.898ZM-3.716,-9.025 -3.731,-9.174 -3.774,-9.316 -3.844,-9.447 -3.939,-9.563 -4.055,-9.659 -4.186,-9.729 -4.329,-9.772 -4.478,-9.787 -4.953,-9.787 -5.102,-9.772 -5.245,-9.729 -5.376,-9.659 -5.492,-9.563 -5.587,-9.447 -5.657,-9.316 -5.7,-9.174 -5.715,-9.025 -5.715,-6.794 -5.7,-6.645 -5.657,-6.503 -5.587,-6.372 -5.492,-6.256 -5.376,-6.161 -5.245,-6.091 -5.102,-6.047 -4.953,-6.033 4.953,-6.033 5.102,-6.047 5.245,-6.091 5.376,-6.161 5.492,-6.256 5.587,-6.372 5.657,-6.503 5.7,-6.645 5.715,-6.794 5.715,-9.025 5.7,-9.174 5.657,-9.316 5.587,-9.447 5.492,-9.563 5.376,-9.659 5.245,-9.729 5.102,-9.772 4.953,-9.787 4.478,-9.787 4.329,-9.772 4.186,-9.729 4.055,-9.659 3.939,-9.563 3.844,-9.447 3.774,-9.316 3.731,-9.174 3.716,-9.025 3.716,-8.395 3.701,-8.245 3.658,-8.103 3.588,-7.972 3.493,-7.856 3.377,-7.761 3.246,-7.691 3.103,-7.647 2.954,-7.633 -2.954,-7.633 -3.103,-7.647 -3.246,-7.691 -3.377,-7.761 -3.493,-7.856 -3.588,-7.972 -3.658,-8.103 -3.701,-8.245 -3.716,-8.395Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4922-temphum19"]["contacts"],
    "artwork": assets["mikroe-mikroe-4922-temphum19"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Hum_19_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4922-temphum19"]["provenance"],
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
    "id": "mikroe-mikroe-3085-temphum2",
    "sku": "MIKROE-3085",
    "name": "TempHum 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temp-hum-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp-hum-2/temp-and-hum-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp-hum-2-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "TempHum 2 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "si7034"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temp-hum-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3085",
      "price": "19.00",
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
    "contacts": assets["mikroe-mikroe-3085-temphum2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3085-temphum2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp-hum-2-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-3085-temphum2"]["provenance"],
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
    "id": "mikroe-mikroe-4907-temphum20",
    "sku": "MIKROE-4907",
    "name": "TempHum 20 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/temphum-20-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/Temp%26Hum_20_click/Temp%26Hum_20_click_v101_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum20/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp-hum_20_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 20 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "cc2d23"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-20-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4907",
      "price": "32.00",
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
    "contacts": assets["mikroe-mikroe-4907-temphum20"]["contacts"],
    "artwork": assets["mikroe-mikroe-4907-temphum20"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp-hum_20_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4907-temphum20"]["provenance"],
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
    "id": "mikroe-mikroe-5310-temphum22",
    "sku": "MIKROE-5310",
    "name": "TempHum 22 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-22-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/Temp%26Hum_22_click/Temp%26Hum_22_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum22/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp_and_hum_22_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 22 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "sht41a"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-22-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5310",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-2.794,-5.328 -2.604,-5.34 -2.425,-5.385 -2.259,-5.461 -2.111,-5.565 -1.983,-5.694 -1.881,-5.844 -1.807,-6.014 -1.765,-6.2 -1.759,-6.39 -1.787,-6.573 -1.848,-6.744 -1.939,-6.901 -2.056,-7.04 -2.197,-7.155 -2.359,-7.244 -2.54,-7.303 -3.716,-7.303 -3.716,-14.287 3.708,-14.287 3.708,-7.303 2.532,-7.303 2.351,-7.244 2.188,-7.156 2.047,-7.04 1.929,-6.902 1.839,-6.745 1.778,-6.573 1.749,-6.39 1.755,-6.199 1.797,-6.014 1.871,-5.844 1.974,-5.693 2.102,-5.564 2.25,-5.46 2.416,-5.384 2.596,-5.339 2.786,-5.328 3.754,-5.326 4.148,-5.366 4.514,-5.48 4.846,-5.66 5.135,-5.899 5.373,-6.188 5.554,-6.52 5.667,-6.886 5.707,-7.291 5.707,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.113 11.682,-13.903 12.03,-13.618 12.316,-13.27 12.526,-12.876 12.656,-12.45 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.45 -12.526,-12.876 -12.316,-13.27 -12.03,-13.618 -11.682,-13.903 -11.289,-14.113 -10.862,-14.243 -10.414,-14.287 -5.715,-14.287 -5.715,-7.291 -5.677,-6.897 -5.566,-6.532 -5.386,-6.195 -5.142,-5.898 -4.844,-5.654 -4.507,-5.475 -4.142,-5.364 -3.759,-5.326Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5310-temphum22"]["contacts"],
    "artwork": assets["mikroe-mikroe-5310-temphum22"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp_and_hum_22_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5310-temphum22"]["provenance"],
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
    "id": "mikroe-mikroe-5301-temphum23",
    "sku": "MIKROE-5301",
    "name": "TempHum 23 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-23-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26Hum_23_click/Temp%26Hum_23_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum23/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp_and_hum_23_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 23 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "sht45"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-23-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5301",
      "price": "20.00",
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
    "contacts": assets["mikroe-mikroe-5301-temphum23"]["contacts"],
    "artwork": assets["mikroe-mikroe-5301-temphum23"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp_and_hum_23_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5301-temphum23"]["provenance"],
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
    "id": "mikroe-mikroe-4702-temphum17",
    "sku": "MIKROE-4702",
    "name": "TempHum 17 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temphum-17-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp%26hum_17_click/temp%26hum_17_click_v101_Schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/temphum17/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp%26Hum_17_click_2d_3d_files.zip"
      }
    ],
    "description": "TempHum 17 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "hs3001"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temphum-17-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4702",
      "price": "25.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4702-temphum17"]["contacts"],
    "artwork": assets["mikroe-mikroe-4702-temphum17"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp%26Hum_17_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4702-temphum17"]["provenance"],
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
];
