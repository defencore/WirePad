import { defineFamily } from "../registry.js";
import { circle, label, rect } from "../shared/svg.js";

const usbSignals = ["TCK", "GND", "TDI", "NC", "TDO", "VREF", "NC", "NC", "TMS", "GND"];
const quadSignals = ["TCK", "GND", "TDI", "VCC2", "TDO", "EVCC", "NC", "VCC1", "TMS", "GND"];
const sixteenSignals = ["VCC1", "VCC2", "EVCC", "GND", "TDO", "TDI", "TMS", "TCK", "GND"];

function signalInfo(name, offline) {
  if (name === "GND") return ["power_in", "Target-interface signal ground."];
  if (name === "NC") return ["no_connect", "Unused target-connector contact. Leave open."];
  if (name === "VREF" || name === "EVCC") return ["power_in", "Target VCCIO reference input. Connect to the target's JTAG-bank supply. This is not a programmer power output."];
  if (name === "VCC1" || name === "VCC2") return ["power_out", "Configurable target power output. Select a supported 1.0/1.2/1.5/1.8/2.5/3.3 V setting according to this programmer's guide and observe its current limit."];
  return [name === "TDO" ? "input" : "output", `${name} ${name === "TDO" ? "input from the target FPGA" : "output to the target FPGA"}.${offline ? " I/O level follows the required EVCC target reference." : " Target I/O supports 1.2–3.3 V according to the selected bank voltage."}`];
}

function programmer({ id, name, shortName, channels, signals, source, subtitle, body }) {
  const offline = channels > 1;
  const count = channels * signals.length;
  const width = channels === 16 ? 760 : channels === 4 ? 660 : 430;
  const height = channels === 16 ? 700 : channels === 4 ? 520 : 280;
  const bx = channels === 16 ? 55 : channels === 4 ? 45 : 60;
  const by = channels === 4 ? 122 : 60;
  const bw = channels === 16 ? 650 : channels === 4 ? 570 : 270;
  const bh = channels === 16 ? 580 : channels === 4 ? 350 : 150;
  const portPoint = (channel, contact) => channels === 16
    ? { x: bx + bw - 125 + contact * 12, y: by + 35 + channel * 32, side: "number" }
    : channels === 4 ? { x: bx + 54 + channel * 139 + contact % 2 * 18, y: 46 + Math.floor(contact / 2) * 16, side: contact % 2 ? "right" : "left" }
    : { x: bx + bw - 4 + contact % 2 * 18, y: by + 38 + Math.floor(contact / 2) * 16, side: contact % 2 ? "right" : "left" };
  const pins = [];
  const pads = [];
  for (let channel = 0; channel < channels; channel++) signals.forEach((signal, contact) => {
    const number = contact + 1;
    const ref = channels === 1 ? "JTAG" : `CH${channel + 1}`;
    const { x, y, side } = portPoint(channel, contact);
    const [type, description] = signalInfo(signal, offline);
    const pinId = `${ref.toLowerCase()}-${number}`;
    pins.push({ id: pinId, label: channels > 1 ? `${ref} ${signal}` : signal, number: `${ref}.${number}`, type, x, y, surface: true, labelSide: side,
      description: `${ref}.${number} — ${description}${channels === 4 && ["TCK", "TDI", "TMS"].includes(signal) ? " The four channels share this outgoing signal; return TDO remains channel-specific." : ""}` });
    const singleRow = channels === 16;
    pads.push({ id: pinId, x: singleRow ? -10.16 + contact * 2.54 : -5.08 + contact % 2 * 2.54 + channel % 2 * 25.4,
      y: body[1] / 2 + 8 + (singleRow ? channel * 5.08 : Math.floor(channel / 2) * 15.24 + Math.floor(contact / 2) * 2.54),
      size: 1.7, drill: 1, square: contact === 0 });
  });
  const component = {
    id, art: id, name, shortName, manufacturer: "Gowin Semiconductor", category: "Programming tools", referencePrefix: "U", width, height, pins, source, subtitle, contactLayout: "physical",
    description: `${name} with all ${count} target-interface contacts across ${channels === 1 ? "one keyed ten-contact cable" : `${channels} target channels`}. Contact functions are from the linked manufacturer guide, viewed at the documented target connector. ${channels === 1 ? "The product catalog calls this PL_USB_CABLE_V5.1; UG112 names the V5.1 variant PL-U2X-Cable and explicitly excludes UART support. Pin 6 is printed VCC in the guide and serves as the target VREF input. " : ""}USB, host/control ports, voltage-setting jumpers and enclosure controls are complete interfaces outside the target-wiring map. The target connector mating faces are shown directly at the corresponding enclosure ports, with pin 1 marked. Enclosure placement and carrier geometry are references.`,
    tags: ["gowin", "fpga", "programmer", "jtag", "spi", "download cable", offline ? "offline programmer" : "usb cable", id, ...(channels === 4 ? ["op720-4", "ol-programmer-a", "v3.0"] : channels === 16 ? ["op901-16", "b-op901-16"] : ["pl_usb_cable", "pl-u2x-cable", "v5.1", "i2c"])],
  };
  const art = (part, showLabels = true) => {
    const x = bx, y = by;
    const ports = Array.from({ length: channels }, (_, channel) => {
      const p1 = portPoint(channel, 0);
      const px = p1.x - 8, py = p1.y - 11;
      const w = channels === 16 ? 112 : 34, h = channels === 16 ? 22 : 86;
      return rect(px, py, w, h, 1, "#1c2427", "#89968e") +
        (channels === 16 ? "" : rect(px - 2, py + h / 2 - 5, 4, 10, 0, "#9b9f89")) +
        label(channels === 16 ? px - 8 : px + w / 2, channels === 16 ? py + 10 : py - 10,
          channels === 1 ? "JTAG mating face" : `CH${channel + 1}`, channels === 16 ? 7 : 9, "#344851", channels === 16 ? "end" : "middle");
    }).join("") + (offline ? "" : rect(x - 13, y + 45, 18, 40, 2, "#adbabc", "#dce3df"));
    const panel = offline ? rect(x + 28, y + 86, 65, 94, 2, "#11292c", "#697e7a") +
      rect(x + 33, y + 91, 55, 84, 1, "#173d43", "#243e3f") +
      circle(x + 55, y + bh - 26, 10, "#ceb736", "#8c8042") + circle(x + 105, y + bh - 26, 10, "#aa493c", "#d18d70") +
      rect(x + bw - 78, y + bh - 25, 48, 4, 0.5, "#b4c1b7") +
      label(x + 125, y + 108, "Offline Programmer", 9, "#e2e5d7") + label(x + 128, y + 128, channels === 16 ? "B-OP901-16" : "OP720-4", 8, "#dce3d6")
      : label(width / 2, y + 63, "USB Cable", 23, "#526e70") + label(width / 2, y + 84, "Gowin FPGA", 10, "#728989") +
        circle(x + bw - 18, y + 22, 3, "#97b2b3", "#4f7074");
    const contacts = part.pins.map(pin => {
      const n = pin.number.split(".")[1];
      const metal = circle(pin.x, pin.y, 3, "#c4a96b", "#ead6a0");
      const marker = n === "1" ? rect(pin.x - 4.5, pin.y - 4.5, 9, 9, 0, "none", "#e8cc77") : "";
      if (!showLabels) return metal + marker;
      const caption = channels === 16 ? n : `${n} ${pin.label.replace(/^CH\d+ /, "")}`;
      return metal + marker + label(pin.x + (pin.labelSide === "left" ? -8 : pin.labelSide === "right" ? 8 : 0),
        pin.y + (pin.labelSide === "number" ? -8 : 0), caption, channels === 16 ? 6 : 7,
        channels === 16 ? "#e8e9d9" : "#344851", pin.labelSide === "left" ? "end" : pin.labelSide === "right" ? "start" : "middle");
    }).join("");
    return rect(x, y, bw, bh, offline ? 5 : 12, offline ? "#3d4240" : "#e8e9df", offline ? "#7a8780" : "#a5b5ac") +
      ports + panel + label(x + bw * 0.44, y + 32, "GOWIN", 21, offline ? "#dfe4d6" : "#577e7c") + contacts;
  };
  return { component, art, footprint: {
    body, color: offline ? "#3d4240" : "#e8e9df", pads,
    note: `Off-board reference cable termination for ${channels} documented target interface${channels > 1 ? "s" : ""}. ${channels === 16 ? "Each channel uses a nine-contact single row at 2.54 mm pitch." : "Each target interface uses a two-by-five contact bank at 2.54 mm pitch."} Numbering follows the guide's target connector diagram, not a mirrored cable solder side. The enclosure envelope and bank offsets are representative; this is not an enclosure mounting or programmer PCB footprint.`,
  }, model: { label: "Gowin programmer connector and mechanical reference guide (PDF)", url: source } };
}

const entries = [
  programmer({ id: "gowin-pl-usb-cable-v5-1", name: "Gowin PL-USB-Cable V5.1", shortName: "Gowin USB Cable V5.1", channels: 1, signals: usbSignals, body: [50, 30],
    subtitle: "JTAG / SSPI / I²C / target VREF", source: "https://www.gowinsemi.com/upload/database_doc/206/document/68b8a03ea0c3f.pdf" }),
  programmer({ id: "gowin-op720-4", name: "Gowin OP720-4 Quad Offline Programmer", shortName: "OP720-4 Programmer", channels: 4, signals: quadSignals, body: [110, 105],
    subtitle: "OL-Programmer-A V3.0 catalog / four target channels", source: "https://www.gowinsemi.com/upload/database_doc/701/document/687a756528856.pdf" }),
  programmer({ id: "gowin-b-op901-16", name: "Gowin B-OP901-16 Offline Programmer", shortName: "B-OP901-16 Programmer", channels: 16, signals: sixteenSignals, body: [145, 140],
    subtitle: "16 nine-contact target interfaces / VCC1/VCC2/EVCC", source: "https://www.gowinsemi.com/upload/database_doc/702/document/687a7593d5866.pdf" }),
];

const gowinProgrammerComponents = entries.map(entry => entry.component);
const gowinProgrammerArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const gowinProgrammerFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const gowinProgrammerModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("gowin-programmers", (gowinProgrammerComponents).map(component => ({ component, render: (gowinProgrammerArt)[component.art], footprint: (gowinProgrammerFootprints)[component.id], model: gowinProgrammerModels[component.id] })));
