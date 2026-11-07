import { defineFamily } from "../registry.js";
import { chip, circle, label, line, pad, pinRow, rect, smd, usb } from "../shared/svg.js";

// The manufacturer prints the header legend on the underside. These rows follow the component-side view.
const left = [
  ["gpio3", "3", "Configurable GPIO.3.", "bidirectional"],
  ["gpio2", "2", "Configurable GPIO.2.", "bidirectional"],
  ["gpio1", "1", "Configurable GPIO.1.", "bidirectional"],
  ["gpio0", "0", "Configurable GPIO.0.", "bidirectional"],
  ["vdd", "VDD", "3.3 V output from the CP2102N regulator.", "power_out"],
  ["vbus", "VBUS", "5 V from the USB bus.", "power_out"],
  ["rx", "RX", "UART receive input. Connect to the target TX.", "input"],
  ["tx", "TX", "UART transmit output. Connect to the target RX.", "output"],
  ["gnd", "GND", "USB supply return and UART reference.", "power_in"],
];
const right = [
  ["rst", "RST", "Active-low reset input.", "input"],
  ["nsuspend", "~SUSP", "Driven low during USB suspend. Shared with the green status LED.", "output"],
  ["suspend", "SUSP", "Driven high during USB suspend.", "output"],
  ["ri", "RI", "Active-low ring indicator input.", "input"],
  ["dcd", "DCD", "Active-low data carrier detect input.", "input"],
  ["dtr", "DTR", "Active-low data terminal ready output.", "output"],
  ["dsr", "DSR", "Active-low data set ready input.", "input"],
  ["cts", "CTS", "Active-low clear to send input.", "input"],
  ["rts", "RTS", "Active-low ready to send output.", "output"],
];

const width = 220;
const height = 228;
const cp2102n = {
  id: "pololu-cp2102n-usb-uart", art: "pololu-cp2102n-usb-uart",
  name: "Pololu CP2102N USB-to-Serial Adapter", shortName: "CP2102N USB–UART",
  manufacturer: "Pololu", category: "Interfaces", referencePrefix: "U",
  subtitle: "Micro-B / 3.3 V logic / full handshaking",
  description: "Pololu #1317 (usb03b). USB-to-TTL UART adapter with 3.3 V logic and 5 V-tolerant signal inputs. The six-hole end header repeats contacts from the side rows. VIO is on the underside.",
  tags: ["usb uart", "usb serial", "uart", "cp2102n", "cp2102", "micro usb", "ttl", "1317", "rts", "cts", "dtr"],
  source: "https://www.pololu.com/product/1317",
  width, height,
  pins: [
    ...pinRow("left", width, height, 34, 21, left, "L"),
    ...pinRow("right", width, height, 34, 21, right, "R"),
    ...pinRow("bottom", width, height, 110, 0, [
      ["vio", "VIO", "Logic supply via on the reverse side. Cut the VDD jumper before connecting an external logic supply.", "power_in", "VIO"],
    ]),
  ],
};

function cp2102nArt({ pins }, showLabels) {
  const banks = pins.filter(pin => pin.id !== "vio").map(pin => {
    const onLeft = pin.x === 0;
    const x = onLeft ? 59 : 161;
    const bankX = onLeft ? 5 : 215;
    const labelX = onLeft ? 8 : 212;
    const textAnchor = onLeft ? "start" : "end";
    return pad(x, pin.y) + (showLabels
      ? line(pin.x, pin.y, bankX, pin.y, "#967445", 1.3) + circle(bankX, pin.y, 2.6, "#c69a57") +
        label(labelX, pin.y, pin.label, 8.1, "#334450", textAnchor)
      : "");
  }).join("");
  return rect(49, 24, 122, 188, 1.5, "#2c6546", "#74a983") +
    usb(78, 15, 64) + rect(83, 31, 54, 22, 2, "#a6aeb9", "#dce2e8") +
    chip(96, 96, 34, 34, "CP2102N", 5) + circle(137, 78, 3.2, "#a1c38d", "#d7e5ba") +
    smd(75, 64) + smd(78, 76) + smd(74, 118) + smd(78, 145) + smd(78, 155) + smd(78, 165) +
    label(121, 170, "Pololu", 10, "#dce9d9") + label(121, 183, "1317", 8, "#dce9d9") +
    [79.4, 99.8, 120.2, 140.6].map(x => pad(x, 202)).join("") + banks +
    (showLabels ? line(110, 224, 110, 228, "#967445", 1.3) + label(110, 220, "VIO (BACK)", 7, "#334450") : "");
}

const usbUartComponents = [cp2102n];
const usbUartArt = { [cp2102n.id]: cp2102nArt };
const usbUartFootprints = {
  [cp2102n.id]: {
    body: [15.24, 22.86], color: "#2d6948", drill: 1.02, size: 1.8,
    note: "Reference carrier for Pololu #1317 (usb03b). The 22 through-hole centers follow the published drawing. The four inner end-header holes repeat side-row terminals. The extra pad outside the outline terminates a separate wire to the underside VIO via.",
    groups: [
      { ids: left.map(([id]) => id), x: -6.35, y: -10.16, axis: "y" },
      { ids: right.map(([id]) => id), x: 6.35, y: -10.16, axis: "y" },
      { ids: ["cts", "vbus", "tx", "rx"], x: -3.81, y: 10.16 },
    ],
    pads: [{ id: "vio", x: 0, y: 13.3 }],
    details: [[0, -9.7, 8, 5.6, 2.8, "#b0b7bd"], [0.5, -0.25, 4, 4, 0.8, "#2a2c31"]],
  },
};
const usbUartModels = {
  [cp2102n.id]: {
    label: "Pololu CP2102N adapter STEP",
    url: "https://www.pololu.com/file/0J1764/cp2102n-usb-to-serial-adapter-carrier.step",
  },
};

export default defineFamily("usb-uart", (usbUartComponents).map(component => ({ component, render: (usbUartArt)[component.art], footprint: (usbUartFootprints)[component.id], model: usbUartModels[component.id] })));
