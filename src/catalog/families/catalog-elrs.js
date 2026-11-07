import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, pinRow, rect, smd } from "../shared/svg.js";

const crsf = [
  ["rx", "RX", "Uninverted CRSF UART receive input. Connect to the flight controller TX.", "input", "4"],
  ["tx", "TX", "Uninverted CRSF UART transmit output. Connect to the flight controller RX.", "output", "3"],
  ["5v", "5V", "Regulated 5 V supply input.", "power_in", "2"],
  ["gnd", "GND", "Supply and UART ground.", "power_in", "1"],
];

const rp1 = {
  id: "radiomaster-rp1-v2", art: "radiomaster-rp1-v2",
  name: "RadioMaster RP1 V2 ExpressLRS Receiver", shortName: "RP1 V2",
  manufacturer: "RadioMaster", category: "Radio Receivers", referencePrefix: "U",
  subtitle: "2.4 GHz ELRS / CRSF UART",
  description: "RP1 V2 nano receiver with a single U.FL connector for the external T antenna. Use a full UART for CRSF.",
  tags: ["elrs", "expresslrs", "fpv", "rc", "receiver", "crsf", "uart", "2.4 ghz"],
  source: "https://cdn.shopify.com/s/files/1/0609/8324/7079/files/RP1_User_Manual.pdf?v=1722923320",
  width: 120, height: 145, contactLayout: "physical",
  pins: [
    ...pinRow("bottom", 120, 145, 24, 24, crsf.map(pin =>
      pin[0] === "gnd" ? [pin[0], "G", ...pin.slice(2)] : pin
    )),
    ...pinRow("right", 120, 145, 100, 0, [
      ["boot", "BOOT", "Recovery pad. Short to ground at power-up to enter the serial bootloader.", "input", "B1"],
    ]),
  ].map(pin => ({ ...pin, symbolPlacement: { side: pin.x <= 60 ? "left" : "right", order: pin.y * 1000 + pin.x }, x: pin.id === "boot" ? 100 : pin.x, y: pin.id === "boot" ? 100 : 120, surface: true })),
};

const superD = {
  id: "betafpv-superd-2-4ghz", art: "betafpv-superd-2-4ghz",
  name: "BETAFPV SuperD 2.4 GHz ExpressLRS Receiver", shortName: "SuperD 2.4G",
  manufacturer: "BETAFPV", category: "Radio Receivers", referencePrefix: "U",
  subtitle: "2.4 GHz true diversity / CRSF UART",
  description: "SuperD 2.4 GHz true-diversity receiver with two U.FL antenna connectors. The illustration shows the RF side. The boot button is on the reverse side.",
  tags: ["elrs", "expresslrs", "diversity", "fpv", "rc", "receiver", "crsf", "uart", "2.4 ghz"],
  source: "https://betafpv.com/products/superd-elrs-2-4g-diversity-receiver",
  width: 120, height: 199, contactLayout: "physical",
  pins: pinRow("bottom", 120, 199, 24, 24, crsf).map(pin => ({ ...pin, symbolPlacement: { side: pin.x <= 60 ? "left" : "right", order: pin.y * 1000 + pin.x }, y: 158, surface: true })),
};

function servoChannel(channel, reversed = false) {
  const pins = [
    [`ch${channel}`, `CH${channel}`, `RC PWM output for channel ${channel}.`, "output", `CH${channel}.1`],
    [`ch${channel}-v+`, "+", "Shared servo and receiver power rail. Supply 4.5–8.4 V within the servo ratings.", "power_in", `CH${channel}.2`],
    [`ch${channel}-gnd`, "−", "Shared servo ground and supply return.", "power_in", `CH${channel}.3`],
  ];
  return reversed ? pins.reverse() : pins;
}

const er4 = {
  id: "radiomaster-er4", art: "radiomaster-er4",
  name: "RadioMaster ER4 ExpressLRS PWM Receiver", shortName: "ER4",
  manufacturer: "RadioMaster", category: "Radio Receivers", referencePrefix: "U",
  subtitle: "2.4 GHz ELRS / 4 PWM channels",
  description: "Four servo outputs on a two-row 2.54 mm header. The keyed connector mating face shows both physical rows; the separate rear view locates the EXT-V battery telemetry pad.",
  tags: ["elrs", "expresslrs", "fpv", "rc", "receiver", "pwm", "servo", "2.4 ghz"],
  source: "https://cdn.shopify.com/s/files/1/0609/8324/7079/files/ER4_User_Manual.pdf?v=1722224113",
  width: 275, height: 140, contactLayout: "physical",
  pins: [
    ...pinRow("left", 275, 140, 19, 20, [...servoChannel(1), ...servoChannel(3, true)]),
    ...pinRow("right", 275, 140, 19, 20, [...servoChannel(2), ...servoChannel(4, true)]),
    ...pinRow("bottom", 275, 140, 148, 0, [
      ["ext-v", "EXT-V", "Battery voltage sensing input, 4–35 V. Connect to the positive battery lead for telemetry.", "input", "EXT.1"],
    ]),
  ].map(original => {
    const pin = { ...original, symbolPlacement: { side: original.x <= 137.5 ? "left" : "right", order: original.y * 1000 + original.x } };
    if (pin.id === "ext-v") return { ...pin, x: 259, y: 36, surface: true };
    const channel = Number(pin.id.match(/^ch(\d)/)[1]);
    const second = channel >= 3;
    const position = pin.id.endsWith("-gnd") ? 2 : pin.id.endsWith("-v+") ? 1 : 0;
    return { ...pin, x: channel % 2 ? 44 : 24, y: 29 + (second ? 5 - position : position) * 15, surface: true };
  }),
};

function ufl(x, y) {
  return rect(x - 8, y - 8, 16, 16, 2, "#dfd8ca", "#928c83") +
    circle(x, y, 5.5, "#bf9c55", "#f1d496") + circle(x, y, 2.6, "#665338") + circle(x, y, 0.95, "#e7c678");
}

function contact(x, y, drill) {
  return rect(x - 6.5, y - 5, 13, 10, 1.8, "#d9b46a", "#f1d495") +
    (drill ? circle(x, y, 2.3, "#352e26") : "");
}

function bottomPads(component, showLabels, drill) {
  return component.pins.filter(pin => pin.id !== "boot").map(pin =>
    contact(pin.x, pin.y, drill) +
    (showLabels ? label(pin.x, pin.y - 10, pin.label, 7, "#f0e9df") : "")
  ).join("");
}

function rp1Art(component, showLabels) {
  return path("M12 125V12H87L108 33V125Z", "#272829", "#625f5c") +
    ufl(26, 40) + chip(49, 38, 37, 34, "SX1281", 5) +
    rect(68, 77, 15, 11, 1.7, "#bcbaa1", "#e7d9b9") +
    chip(34, 75, 17, 14, "", 2) + smd(25, 92) + smd(54, 86) + smd(92, 57) +
    circle(91, 28, 2.5, "#6dbe83", "#bbbca5") +
    label(74, 24, "RP1 V2", 9, "#f1eade") +
    contact(100, 100, false) +
    (showLabels ? label(106, 89, "BOOT", 5.5, "#f0e9df", "end") : "") +
    bottomPads(component, showLabels, false);
}

function superDArt(component, showLabels) {
  return rect(10, 10, 100, 157, 1.7, "#222326", "#666262") +
    ufl(30, 23) + ufl(90, 23) + rect(56, 29, 8, 7, 1.3, "#e6dbc6", "#f5efdc") +
    [30, 90].map(x =>
      chip(x - 10, 48, 20, 22, "", 3) + chip(x - 14, 91, 28, 31, "SX1281", 4) +
      smd(x - 5, 77) + smd(x - 10, 128) + smd(x + 3, 128)
    ).join("") + smd(56, 52) + smd(56, 67) + smd(56, 112) +
    label(60, 82, "SuperD 2.4G", 8, "#f1eade") +
    bottomPads(component, showLabels, true);
}

function er4Art(component, showLabels) {
  const connector = Array.from({ length: 6 }, (_, index) => {
    const y = 29 + index * 15;
    return line(58, y, 82, y, "#c0a269", 3.4) + rect(80, y - 5.5, 13, 11, 1, "#363b41", "#53575c");
  }).join("");
  const terminals = rect(17, 22, 34, 90, 1, "#242a31", "#626c74") + component.pins.map(pin => {
    if (pin.id === "ext-v") return rect(pin.x - 3, pin.y - 3, 6, 6, .5, "#d0af69") +
      (showLabels ? label(246, 76, "EXT-V", 6.2) : "");
    const left = pin.x === 24;
    const caption = pin.label.startsWith("CH") ? pin.label.slice(2) : pin.label;
    return rect(pin.x - 2.6, pin.y - 2.6, 5.2, 5.2, .3, "#c5a261") +
      (showLabels ? label(left ? 14 : 54, pin.y, caption, 6, "#344450", left ? "end" : "start") : "");
  }).join("");
  const rear = rect(226, 29, 40, 72, 2, "#25282a", "#78807a") +
    rect(228, 31, 36, 68, 1, "none", "#d6d5c8") + label(246, 113, "BACK", 6, "#344450");
  return rect(79, 18, 130, 98, 4, "#222629", "#6c706f") +
    rect(93, 21, 113, 92, 2, "#252728", "#e4ded2") +
    rect(97, 23, 13, 88, 0, "#ba3f3e") +
    label(103, 44, "1", 7) + label(103, 87, "3", 7) + connector +
    ufl(192, 32) + path("M192 25L203 9H220", "none", "#544e47", 2.2) +
    label(146, 44, "ExpressLRS", 7.6, "#efece4") + label(151, 59, "RADIOMASTER", 6.7, "#efece4") +
    label(151, 76, "ER4", 21, "#efece4") +
    rect(183, 94, 14, 12, 2, "#c1bdad") + circle(190, 100, 3, "#272b31") +
    label(176, 100, "BOOT", 6, "#efece4", "end") +
    rear + terminals + label(35, 126, "MATING FACE", 5.5, "#344450");
}

const elrsComponents = [rp1, superD, er4];
const elrsArt = { [rp1.id]: rp1Art, [superD.id]: superDArt, [er4.id]: er4Art };

const elrsFootprints = {
  [rp1.id]: {
    body: [11, 13], color: "#292929", smd: true,
    note: "Reference RF-module carrier pattern. Module outline is 11 × 13 mm in this orientation. Solder land locations are estimated from the product view and require measurement before fabrication.",
    groups: [{ ids: ["rx", "tx", "5v", "gnd"], x: -3.8, y: 5.7, pitch: 2.54, size: [1.7, 1.4] }],
    pads: [{ id: "boot", x: 4.6, y: 3.2, size: [1.2, 1.2] }],
    details: [[-3.8, -3.9, 2.3, 2.3, 1.3, "#cda860"], [1.4, -1.9, 4, 4, 0.8, "#252a2e"]],
  },
  [superD.id]: {
    body: [14, 22], color: "#242528", drill: 0.8, size: 1.7,
    note: "Reference RF-module carrier pattern. Hole locations are estimated from the RF-side product view. Measure the board and check the U.FL cable clearance before fabrication.",
    groups: [{ ids: ["rx", "tx", "5v", "gnd"], x: -3.81, y: 9.7, pitch: 2.54 }],
    details: [[-4.3, -9.2, 2.3, 2.3, 1.3, "#cda860"], [4.3, -9.2, 2.3, 2.3, 1.3, "#cda860"]],
  },
  [er4.id]: {
    body: [9, 16], color: "#292d31", drill: 1, size: 1.7,
    note: "Off-board wiring terminations. The 2 × 6 field follows the receiver's connector-side view, with channels 2 and 4 on the left and 1 and 3 on the right. EXT-V is a separate wire termination.",
    groups: [
      { ids: ["ch2", "ch2-v+", "ch2-gnd", "ch4-gnd", "ch4-v+", "ch4"], x: -1.27, y: -6.35, axis: "y" },
      { ids: ["ch1", "ch1-v+", "ch1-gnd", "ch3-gnd", "ch3-v+", "ch3"], x: 1.27, y: -6.35, axis: "y" },
    ],
    pads: [{ id: "ext-v", x: 3.8, y: 0 }],
  },
};

export default defineFamily("elrs", (elrsComponents).map(component => ({ component, render: (elrsArt)[component.art], footprint: (elrsFootprints)[component.id] })));
