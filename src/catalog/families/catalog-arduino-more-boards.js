import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { chip, circle, label, line, rect, smd } from "../shared/svg.js";

// Arduino V0.3 schematic + Gerber source (2024-06-27). Coordinates are native
// manufacturing mm, rotated into portrait. Rear contacts are mirrored in artwork.
const scale = 7, top = 24, frontX = 64, rearX = 316;
const widthMm = 25.36, heightMm = 41, color = "#007d87", silk = "#e1eee4";
const source = kind => `https://docs.arduino.cc/hardware/modulino-${kind}/`;
const signalSpecs = {
  GND: ["power_in", "Common supply and signal ground."],
  "3V3": ["power_in", "Regulated 3.3 V module supply input; shared by both Qwiic sockets and the solder headers."],
  SDA: ["bidirectional", "3.3 V I²C data shared by both Qwiic sockets, J4 and the rear test pad. The module operates as an I²C peripheral by default."],
  SCL: ["input", "3.3 V I²C clock shared by both Qwiic sockets, J4 and the rear test pad. Provide external bus pull-ups; optional 4.7 kΩ pull-up footprints are not fitted by default."],
  PF2: ["input", "STM32C011 PF2/NRST reset signal. Pull low to reset the onboard microcontroller."],
  SWCLK: ["input", "STM32C011 PA14/SWCLK/BOOT0 debug clock and boot configuration signal. Used to reprogram the module firmware."],
  SWDIO: ["bidirectional", "STM32C011 PA13 SWD debug data. Used with SWCLK and GND to reprogram the module firmware."],
  TX1: ["output", "STM32C011 PA9/PA11 alternate-function USART1 transmit signal. Available for custom module firmware."],
  RX1: ["input", "STM32C011 PA10/PA12 alternate-function USART1 receive signal. Available for custom module firmware."],
  NC: ["no_connect", "Unconnected rear fixture pad in the manufacturer V0.3 schematic. It is exposed copper but has no assigned electrical function."],
};

function boardEntry(kind, sku, cadPath) {
  const knob = kind === "knob", pins = [];
  const left = knob ? ["PA2", "GND", "3V3", "PF2", "SWCLK", "SWDIO", "TX1", "RX1", "PA0", "PA1"]
    : ["A", "GND", "3V3", "PF2", "SWCLK", "SWDIO", "TX1", "RX1", "B", "C"];
  function contact(number, net, nativeX, nativeY, view = "front", shape = "hole", size = [1.7, 1.7]) {
    const fallback = knob ? `${net === "PA2" ? "Encoder push switch" : net === "PA0" ? "Encoder A phase" : "Encoder B phase"} shared with the STM32C011. The factory firmware enables internal pull-ups. This is a direct 3.3 V GPIO/contact signal; avoid driving against the onboard MCU.`
      : `Button ${net} contact shared with the STM32C011. Read through the module's I²C firmware, or use this direct 3.3 V GPIO/contact signal with suitable custom firmware. Avoid driving against the onboard MCU.`;
    const [type, description] = signalSpecs[net] ?? ["bidirectional", fallback];
    const x = (view === "rear" ? rearX + (widthMm - nativeY) * scale : frontX + nativeY * scale);
    pins.push({ id: number.toLowerCase().replaceAll(".", "-"), number, label: net, description, type, x, y: top + nativeX * scale,
      nativeX, nativeY, view, shape, padSize: size, edge: nativeY < 6 ? "left" : nativeY > 19 ? "right" : "bottom", net });
  }
  left.forEach((net, i) => contact(`J3.${i + 1}`, net, 9.07 + i * 2.54, 1.25));
  ["GND", "3V3", "SDA", "SCL"].forEach((net, i) => contact(`J4.${i + 1}`, net, 16.69 + i * 2.54, 24.11));
  // SM04B-SRSS-TB source solder-tail centers: J1 opens toward native -X,
  // J2 toward +X. The rendered metal tails are explicitly not mating faces.
  ["GND", "3V3", "SDA", "SCL"].forEach((net, i) => {
    contact(`J1.${i + 1}`, net, 5.2745, 14.18 - i, "front", "tail", [1.55, 0.6]);
    contact(`J2.${i + 1}`, net, 35.7255, 11.18 + i, "front", "tail", [1.55, 0.6]);
  });
  // Fifteen actual bottom fixture pads, including eight NC pads. TP numbers
  // are assigned for this catalog: the maker's schematic shows their nets only.
  const fixture = [
    [3.5, 16.49, "3V3"], [3.5, 13.95, "SDA"], [3.5, 11.41, "SCL"], [3.5, 8.87, "GND"],
    [5.5, 16.49, "NC"], [5.5, 13.95, "NC"], [5.5, 11.41, "NC"], [5.5, 8.87, "NC"],
    [35.5, 16.49, "NC"], [35.5, 13.95, "NC"], [35.5, 11.41, "NC"], [35.5, 8.87, "PF2"],
    [37.5, 13.95, "NC"], [37.5, 11.41, "SWCLK"], [37.5, 8.87, "SWDIO"],
  ];
  fixture.forEach(([x, y, net], i) => contact(`TP.${i + 1}`, net, x, y, "rear", "fixture", [1, 1]));
  const nets = new Map();
  pins.forEach(pin => { if (pin.net !== "NC") nets.set(pin.net, [...(nets.get(pin.net) ?? []), pin.id]); });
  const id = `arduino-modulino-${kind}-${sku.toLowerCase()}`;
  const component = physicalComponent({
    id, name: `Arduino Modulino ${knob ? "Knob" : "Buttons"}`, shortName: `Modulino ${knob ? "Knob" : "Buttons"}`, manufacturer: "Arduino", category: "Inputs", source: source(kind),
    description: `${sku}, V0.3 hardware from the manufacturer's 2024-06-27 CAD/schematic. ${knob ? "A Bourns PEC11J-9215F-S0015 encoder with push switch is read by an STM32C011 over I²C (7-bit address 0x3A, software configurable)." : "Three momentary buttons and three controllable LEDs are managed by an STM32C011 over I²C (7-bit address 0x3E, software configurable)."} Supply and logic are 3.3 V. The left drawing is the component side; Qwiic pins are anchored on their visible solder tails, not hidden mating contacts. The right drawing is a horizontally mirrored rear view showing all 15 fixture pads, including eight NC pads. TP numbers are catalog-assigned; they are not printed on the source PCB. Through headers, Qwiic contacts and wired test pads sharing a net are internally connected. The KiCad export is a source-coordinate contact reference from both sides, not a production or mating land pattern; generated 3D geometry is approximate.`,
    subtitle: `${sku} / V0.3 / 3.3 V I²C`, tags: ["diy", "starter kit", "arduino", "modulino", kind, sku.toLowerCase(), "i2c", "qwiic", "stm32c011", ...(knob ? ["rotary encoder", "knob", "quadrature"] : ["buttons", "push button", "led"])],
    referencePrefix: "U", art: id, width: 516, height: 354, pins, internalConnections: [...nets.values()].filter(group => group.length > 1),
  }, pins.map(pin => [pin.x, pin.y]));
  return {
    component,
    render: (part, showLabels) => {
      const bw = widthMm * scale, bh = heightMm * scale, cx = frontX + bw / 2;
      let svg = rect(frontX, top, bw, bh, 24, color, "#69b0ad") + rect(rearX, top, bw, bh, 24, color, "#69b0ad");
      for (const origin of [frontX, rearX]) svg += [4.68, 20.68].flatMap(y => [4.5, 36.5].map(x =>
        circle(origin + y * scale, top + x * scale, 14, "#afc8bb", "#e1eee4") + circle(origin + y * scale, top + x * scale, 10, "#e9eee3"))).join("");
      for (const x of [1.7, 39.3]) {
        const cy = top + x * scale;
        svg += rect(cx - 21, cy - 11, 42, 22, 2, "#aaaead", "#e0e7dd") + rect(cx - 18, cy - 8, 36, 7, 1, "#626e6c");
      }
      if (knob) {
        svg += rect(cx - 45, top + 105, 90, 84, 3, "#b4c6bc", "#e3e9dc") +
          circle(cx, top + 146, 47, "#d5dfd3", "#f5f7e9") + circle(cx, top + 146, 40, "#c3d3c7") + line(cx, top + 146, cx + 40, top + 146, "#263b35", 4);
      } else {
        svg += [10.5, 20.5, 30.5].map((x, i) => rect(cx - 27, top + x * scale - 23, 54, 46, 2, "#8eaaa1", "#c4d8c9") +
          circle(cx, top + x * scale, 13, "#cbd9cd", "#9ab4a7") + circle(cx + 40, top + x * scale, 3.5, "#d8bd44") +
          (showLabels ? label(cx - 37, top + x * scale, "ABC"[i], 7, silk) : "")).join("");
      }
      svg += chip(frontX + bw - 39, top + 218, 20, 20, "", 4) + smd(cx - 35, top + 244, "#c5c7a1") +
        label(frontX + bw / 2, 334, "Component side · socket solder tails", 8, "#6a716a") +
        label(rearX + bw / 2, 334, "Rear · mirrored horizontally", 8, "#6a716a");
      if (showLabels) svg += label(cx, 12, `MODULINO ${kind.toUpperCase()}`, 10, "#5b6e65") + label(rearX + bw / 2, 12, "REAR FIXTURE PADS", 10, "#5b6e65") +
        label(rearX + bw / 2, top + 130, sku, 11, silk) + label(rearX + bw / 2, top + 145, "V0.3 · 3.3 V", 8, silk);
      svg += part.pins.map(pin => {
        if (pin.shape === "hole") return circle(pin.x, pin.y, 5, "#c5d2bd", "#e8ebdf") + circle(pin.x, pin.y, 2.7, "#1c777d") +
          (showLabels ? label(pin.x + (pin.number.startsWith("J3") ? -8 : -9), pin.y, pin.label, 7.1, pin.number.startsWith("J3") ? "#65766b" : silk, "end") : "");
        if (pin.shape === "tail") return rect(pin.x - 1.9, pin.y - 5.4, 3.8, 10.8, 0.2, "#b5c9c1", "#dce7db") +
          (showLabels ? label(pin.x, pin.y + (pin.number.startsWith("J1") ? 11 : -11), pin.number.split(".")[1], 4.8, silk) : "");
        return circle(pin.x, pin.y, 3.5, "#c9af62", "#e4d59b") +
          label(pin.x, pin.y + (pin.nativeX < 4 ? -7 : pin.nativeX < 6 ? 7 : pin.nativeX < 36 ? -7 : 7), pin.number.split(".")[1], 5.2, silk);
      }).join("");
      return svg;
    },
    footprint: {
      body: [widthMm, heightMm], color, modelHeight: 1.6,
      note: "Source-coordinate contact reference from the Arduino V0.3 Gerbers and drill files. Includes J1/J2 solder tails, J3/J4 through headers and all 15 bottom fixture pads; four grounded Qwiic retaining lands repeat the corresponding GND terminal. Both-side contact coordinates are represented on the carrier top layer. This is not a production or host-mating land pattern; clearances and illustration details are representative. Generated 3D geometry is approximate.",
      pads: [...pins.map(pin => ({ id: pin.id, x: pin.nativeY - 12.68, y: pin.nativeX - 20.5,
        size: [pin.padSize[1], pin.padSize[0]], drill: pin.shape === "hole" ? 1 : 0, smd: pin.shape !== "hole", shape: pin.shape === "hole" ? "circle" : "rect" })),
      ...[1.3995, 39.6005].flatMap((x, i) => [9.88, 15.48].map(y => ({ id: `j${i + 1}-1`, x: y - 12.68, y: x - 20.5, size: [1.2, 1.8], smd: true })))],
      details: [[0, 0, knob ? 13 : 7, knob ? 13 : 7, knob ? 15 : 3, "#bbcfc1"]],
    },
    model: { label: `Arduino ${sku} V0.3 Altium, Gerber, DXF and STEP CAD`, url: `https://docs.arduino.cc/static/${cadPath}/${sku}-cad-files.zip` },
  };
}

export default defineFamily("arduino-more-boards", [
  boardEntry("knob", "ABX00107", "9168eb936d4d6df4ab93d355b49a6fdb"),
  boardEntry("buttons", "ABX00110", "3e769f41c2bdc1dc397975eb2c2e83e4"),
]);
