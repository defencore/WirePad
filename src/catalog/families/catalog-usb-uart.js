import { defineFamily } from "../registry.js";
import { reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { rearContactOverlay } from "../shared/rear-contact-overlay.js";
import { chip, circle, label, pad, pinRow, rect, smd, usb } from "../shared/svg.js";

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
  width, height, contactLayout: "physical",
  pins: [
    ...pinRow("left", width, height, 34, 21, left, "L"),
    ...pinRow("right", width, height, 34, 21, right, "R"),
    ...pinRow("bottom", width, height, 110, 0, [
      ["vio", "VIO", "Logic supply via on the reverse side. Cut the VDD jumper before connecting an external logic supply.", "power_in", "VIO"],
    ]),
  ].map(pin => ({ ...pin, surface: true, symbolPlacement: { side: pin.x <= width / 2 ? "left" : "right", order: pin.y * 1000 + pin.x },
    ...(pin.id === "vio" ? { x: 194.6, y: 45.1 } : { x: pin.x === 0 ? 59 : 161 }),
  })),
};

function cp2102nArt({ pins }, showLabels) {
  const banks = pins.filter(pin => pin.id !== "vio").map(pin => {
    const onLeft = pin.x === 59;
    return pad(pin.x, pin.y) + (showLabels
      ? label(pin.x + (onLeft ? 7 : -7), pin.y, pin.label, 6.8, "#e0eedb", onLeft ? "start" : "end")
      : "");
  }).join("");
  const vio = pins.find(pin => pin.id === "vio");
  const rear = rect(177, 30, 33.5, 50.3, 1, "#2c6546", "#74a983") +
    label(194, 22, "BACK", 5.7, "#344450") +
    [180, 207].map(x => Array.from({ length: 9 }, (_, i) => circle(x, 33 + i * 5.3, 1.3, "#ceb46d"))).join("") +
    circle(vio.x, vio.y, 2.7, "#d8b570", "#f3dfad") +
    rect(vio.x + 3, vio.y - 1, 4, 2, .3, "#b7beb3") +
    (showLabels ? label(vio.x, vio.y + 8, "VIO", 5.5) : "");
  return rect(49, 24, 122, 188, 1.5, "#2c6546", "#74a983") +
    usb(78, 15, 64) + rect(83, 31, 54, 22, 2, "#a6aeb9", "#dce2e8") +
    chip(96, 96, 34, 34, "CP2102N", 5) + circle(137, 78, 3.2, "#a1c38d", "#d7e5ba") +
    smd(75, 64) + smd(78, 76) + smd(74, 118) + smd(78, 145) + smd(78, 155) + smd(78, 165) +
    label(121, 170, "Pololu", 10, "#dce9d9") + label(121, 183, "1317", 8, "#dce9d9") +
    [79.4, 99.8, 120.2, 140.6].map(x => pad(x, 202)).join("") + banks + rear;
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

const insertionOrigin = { x: 110, y: 120 }, insertionUnits = 10;
const insertionContacts = [left, right].flatMap((bank, side) => bank.map(([id], index) => ({
  pinId: id, x: side ? 6.35 : -6.35, y: -10.16 + index * 2.54,
})));
const physicalPins = insertionContacts.map(contact => ({ pinId: contact.pinId,
  x: insertionOrigin.x + contact.x * insertionUnits, y: insertionOrigin.y + contact.y * insertionUnits, face: "front" }));
// VIO is a wire-only underside via; its photo-derived projection is not a lead center.
physicalPins.push({ pinId: "vio", x: insertionOrigin.x - .386 * insertionUnits,
  y: insertionOrigin.y - 4.57 * insertionUnits, face: "rear" });
const insertionBody = { x: 33.8, y: 5.7, width: 152.4, height: 228.6 };
const insertionBounds = { x: 33.3, y: -7.5, width: 153.4, height: 242.3 };
const mounting = reviewedBoardMounting({
  source: { label: "Pololu usb03b dimension diagram and complete breadboard assembly", url: "https://www.pololu.com/product/1317" },
  contacts: insertionContacts, calibration: { origin: insertionOrigin, unitsPerMm: insertionUnits },
  bodyRegions: [insertionBody, { x: 65, y: -7, width: 90, height: 69 }], viewBounds: insertionBounds,
  bodyEvidence: "The usb03b dimension diagram gives 0.1 inch side-header pitch and 0.5 inch row spacing on the 0.6 × 0.9 inch PCB. Pololu explicitly illustrates both complete straight male rows inserted in a solderless breadboard. Include the projecting Micro-B shell; leave the alternative end header unpopulated.",
  view: { id: "breadboard", pins: physicalPins,
    note: "All 18 side-header IDs use the manufacturer grid. VIO is the separately identified, photo-projected rear via, mirrored into this front view and marked BACK; it is never a downward lead. Default composite rear inset and saved project coordinates are preserved." },
  renderMounted: () => `<svg x="${insertionBounds.x}" y="${insertionBounds.y}" width="${insertionBounds.width}" height="${insertionBounds.height}" viewBox="${insertionBounds.x} ${insertionBounds.y} ${insertionBounds.width} ${insertionBounds.height}" overflow="hidden"><g transform="translate(${insertionBody.x - 49 * 1.2491803278688524} ${insertionBody.y - 24 * 1.2159574468085107}) scale(1.2491803278688524 1.2159574468085107)"><svg x="48.5" y="14.5" width="123" height="198" viewBox="48.5 14.5 123 198" overflow="hidden">${cp2102nArt({ ...cp2102n, pins: [cp2102n.pins.find(pin => pin.id === "vio")] }, false)}</svg></g>` +
    physicalPins.filter(pin => pin.face === "front").map(pin => pad(pin.x, pin.y)).join("") + rearContactOverlay(physicalPins) + "</svg>",
  note: "Use both supplied 1×9 straight male side strips below the PCB. The alternative six-pin end strip is left unpopulated. VIO remains a rear wire connection; neither VIO nor the duplicated alternative end contacts create extra insertion leads.",
});

export default defineFamily("usb-uart", usbUartComponents.map(component => ({
  component, render: usbUartArt[component.art], footprint: usbUartFootprints[component.id], model: usbUartModels[component.id], mounting,
})));
