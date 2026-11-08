import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect, smd } from "../shared/svg.js";

// Manufacturer photos show no PCB revision. These entries identify the photographed SKU,
// retain its component-side contact order, and use explicitly approximate wire carriers.
const yellow = "#e2cd62", pcb = "#202322", outline = "#6e7167";
const docs = sku => `https://docs.keyestudio.com/projects/${sku}/en/latest/docs/${sku}.html`;
const carrierNote = "Reference off-board wire-termination carrier (2.54 mm pitch), not a verified module mating footprint. The source-based board outline and connector offsets are illustrative. No manufacturer land pattern or STEP model was verified; generated 3D geometry is approximate.";
const contact = (id, caption, type, description, x, y, extra = {}) => ({ id, caption, type, description, x, y, ...extra });
const hole = (x, y, r = 12) => circle(x, y, r, "#c3c5bd", "#e7e8df") + circle(x, y, r * .54, "#69706a") +
  Array.from({ length: 8 }, (_, i) => circle(x + Math.cos(i * Math.PI / 4) * r * .78, y + Math.sin(i * Math.PI / 4) * r * .78, 1.4, "#e5e8df")).join("");

function entry(spec) {
  const pins = spec.contacts.map(p => ({ id: p.id, number: p.number ?? p.caption, label: p.caption, type: p.type,
    description: p.description, x: p.x, y: p.y, surface: true }));
  const component = { id: spec.id, art: spec.id, name: spec.name, shortName: spec.short, manufacturer: spec.manufacturer ?? "Keyestudio",
    category: spec.category ?? "Indicators", referencePrefix: spec.referencePrefix ?? "U", subtitle: spec.subtitle,
    description: `${spec.description} PCB revision is not marked in the manufacturer reference. Terminal names follow the printed signal labels; IN/OUT and MOTOR prefixes distinguish connector groups. Physical dimensions and the native carrier are approximate.`,
    source: spec.source, tags: ["diy", "starter kit", "arduino", ...spec.tags], width: spec.width ?? 244, height: spec.height ?? 160,
    contactLayout: "physical", pins, ...(spec.connections ? { internalConnections: spec.connections } : {}) };
  const refs = [...new Set(spec.contacts.map(p => p.group ?? "J"))];
  const pads = spec.contacts.map((p, i) => {
    const group = p.group ?? "J", row = refs.indexOf(group), groupPins = spec.contacts.filter(c => (c.group ?? "J") === group);
    return { id: pins[i].id, x: row * 12.7, y: groupPins.indexOf(p) * 2.54, size: 1.75, drill: 1, square: groupPins.indexOf(p) === 0 };
  });
  const xmax = Math.max(...pads.map(p => p.x)), ymax = Math.max(...pads.map(p => p.y));
  pads.forEach(p => { p.x -= xmax / 2; p.y -= ymax / 2; });
  const footprint = { body: [xmax + 8, ymax + 8], color: pcb, pads, note: `${carrierNote} ${spec.footnote ?? ""}` };
  const render = (part, showLabels = true) => spec.draw(showLabels) + spec.contacts.map((p, i) => {
    const pin = part.pins[i];
    const metal = p.socket ? rect(pin.x - 4, pin.y - 4, 8, 8, 1, "#9c986f", "#e2ded0") + rect(pin.x - 1.8, pin.y - 1.8, 3.6, 3.6, .2, "#30332f")
      : rect(pin.x - (p.vertical ? 1.8 : 8), pin.y - (p.vertical ? 8 : 1.8), p.vertical ? 3.6 : 16, p.vertical ? 16 : 3.6, .4, "#c9c8b8", "#ecead9");
    const caption = showLabels ? label(pin.x + (p.dx ?? -31), pin.y + (p.dy ?? 0), p.caption, p.font ?? 8.5, p.color ?? yellow, p.anchor ?? "end") : "";
    return `<g data-contact="${pin.id}">${metal}${caption}</g>`;
  }).join("");
  return { component, render, footprint };
}

function smallBoard(title, populated, showLabels) {
  return path("M18 20H145Q158 42 171 20H194Q202 20 202 28V132Q202 140 194 140H171Q158 118 145 140H18Q10 140 10 132V28Q10 20 18 20Z", pcb, outline) +
    hole(135, 80, 15) + rect(197, 51, 9, 58, 1.5, "#cfad35", "#efce61") + populated +
    (showLabels ? label(81, 32, title, 9, yellow) + label(82, 127, "Keyestudio", 9.5, yellow) : "");
}
const standard = (signalDescription, signalType = "input") => [
  contact("signal", "S", signalType, signalDescription, 219, 61),
  contact("vcc", "+", "power_in", "Module supply input. Use the voltage range in the component description.", 219, 80),
  contact("gnd", "−", "power_in", "Common ground, printed minus (−) contact.", 219, 99, { number: "-" }),
];
const buzzerArt = active => circle(62, 79, 38, "#151716", "#454a44") + circle(62, 79, 35, "#20231f") +
  (active ? circle(62, 79, 10, "#070b09") + label(43, 60, "+", 12, "#b6b9ae") : circle(62, 73, 8, "#090d0b") + circle(62, 93, 5, "#0a0f0c")) +
  smd(105, 51) + rect(99, 103, 11, 12, 1.5, "#303a32", "#82917c") + line(102, 102, 102, 99, "#c9ccbb", 1.7);

const active = entry({ id: "keyestudio-ks0018-active-buzzer", name: "Keyestudio KS0018 Active Buzzer", short: "Active buzzer", subtitle: "KS0018 / digital / 3.3–5 V",
  description: "Digital active buzzer module with onboard drive transistor. Component-side view with the three header contacts at the right: S, +, − from top to bottom. Supply 3.3–5 V.",
  source: docs("KS0018"), tags: ["buzzer", "active", "sound", "ks0018"], contacts: standard("Digital buzzer control input; HIGH enables the buzzer driver."),
  draw: show => smallBoard("BUZZER", buzzerArt(true), show) });
const passive = entry({ id: "keyestudio-ks0019-passive-buzzer", name: "Keyestudio KS0019 Passive Buzzer", short: "Passive buzzer", subtitle: "KS0019 / external tone / 3.3–5 V",
  description: "Passive piezo buzzer module with drive transistor; it requires a tone waveform. Component-side view: right header S, +, − from top to bottom. Supply 3.3–5 V.",
  source: docs("KS0019"), tags: ["buzzer", "passive", "tone", "piezo", "ks0019"], contacts: standard("Tone/PWM input to the onboard buzzer driver; this passive buzzer requires external pulse frequencies."),
  draw: show => smallBoard("BUZZER", buzzerArt(false), show) });

const rgb = entry({ id: "keyestudio-ks0032-rgb-led", name: "Keyestudio KS0032 RGB LED Module", short: "RGB LED", subtitle: "KS0032 / common anode / 5 V",
  description: "Four-contact non-addressable RGB LED module, with three series resistors. The photographed component-side header reads G, R, B, V from top to bottom. V is the common positive supply; sink the three color inputs to illuminate them. Use 5 V.",
  source: docs("KS0032"), tags: ["rgb", "led", "pwm", "common anode", "ks0032"], contacts: [
    contact("green", "G", "input", "Green LED cathode through its onboard resistor; sink current/drive LOW to light green.", 219, 53),
    contact("red", "R", "input", "Red LED cathode through its onboard resistor; sink current/drive LOW to light red.", 219, 71),
    contact("blue", "B", "input", "Blue LED cathode through its onboard resistor; sink current/drive LOW to light blue.", 219, 89),
    contact("vcc", "V", "power_in", "Common-anode positive supply, 5 V. This module has no separate ground contact.", 219, 107),
  ], draw: show => smallBoard("RGB LED", rect(45, 66, 29, 29, 3, "#e8e2d5", "#bcbcb0") + circle(59.5, 80.5, 9, "#f6f0df", "#bcbcab") +
    circle(56, 78, 2.4, "#be6656") + circle(63, 78, 2.4, "#679868") + circle(59.5, 85, 2.4, "#557ab0") + smd(51, 48) +
    '<g transform="translate(34 72) rotate(90)">' + smd(0, 0) + "</g>" + '<g transform="translate(88 72) rotate(90)">' + smd(0, 0) + "</g>", show) });

const traffic = entry({ id: "keyestudio-ks0310-traffic-light", name: "Keyestudio KS0310 Traffic Light", short: "Traffic light", subtitle: "KS0310 / red-yellow-green / 3.3–5 V", width: 284, height: 182,
  description: "T-shaped red/yellow/green traffic-light board. Component-side view with LEDs at the right; left header reads R, Y, G, GND from top to bottom. Each color lights with a HIGH input. Operating voltage 3.3–5 V.",
  source: docs("KS0310"), tags: ["traffic light", "led", "red", "yellow", "green", "ks0310"], contacts: [
    contact("red", "R", "input", "Red LED anode via its onboard series resistor; HIGH illuminates red.", 25, 64, { dx: 16, anchor: "start" }),
    contact("yellow", "Y", "input", "Yellow LED anode via its onboard series resistor; HIGH illuminates yellow.", 25, 82, { dx: 16, anchor: "start" }),
    contact("green", "G", "input", "Green LED anode via its onboard series resistor; HIGH illuminates green.", 25, 100, { dx: 16, anchor: "start" }),
    contact("gnd", "GND", "power_in", "Shared LED cathode/ground reference.", 25, 118, { dx: 16, anchor: "start", font: 7 }),
  ], draw: show => path("M30 12H72V69H196V12H270V170H196V113H72V170H30Z", pcb, outline) + hole(51, 36, 14) + hole(51, 146, 14) +
    rect(25, 56, 11, 70, 1.2, "#d8ba3f", "#e7d080") + [[40,"#ad252a"],[91,"#e2c72d"],[142,"#2d9253"]].map(([y,c]) => circle(232,y,22,"#d1ca9a") + circle(232,y,18,c,"#9d9f7e") + circle(227,y-6,5,"#ffffff55") + smd(204,y+18)).join("") +
    (show ? label(132,91,"TRAFFIC LIGHT",8,yellow) : "") });

const irtx = entry({ id: "keyestudio-ks0027-ir-transmitter", name: "Keyestudio KS0027 IR Transmitter", short: "IR transmitter", category: "Communication", subtitle: "KS0027 / IR LED / 3–5 V",
  description: "Digital infrared transmitter with a forward-facing clear IR LED and driver transistor. Component-side view with right header S, +, − from top to bottom. Supply 3–5 V; generate the carrier and protocol in firmware.",
  source: docs("KS0027"), tags: ["infrared", "ir", "transmitter", "remote", "38khz", "ks0027"], contacts: standard("IR LED driver input. HIGH enables IR emission; supply a carrier (for example 38 kHz) for a demodulating remote-control receiver."),
  draw: show => smallBoard("IR Transmitter", line(18,74,43,74,"#bfc6b9",3) + line(18,89,43,89,"#bfc6b9",3) + rect(13,65,29,33,4,"#d9e0d2", "#a1b2a6") +
    path("M13 65Q-1 81.5 13 98", "#e7eee2", "#a1b2a6") + smd(82,64) + smd(83,94) + rect(65,95,9,12,1,"#223127", "#85947c"), show) });
const irrx = entry({ id: "keyestudio-ks0026-ir-receiver", name: "Keyestudio KS0026 IR Receiver", short: "IR receiver", category: "Communication", subtitle: "KS0026 / demodulating 38 kHz / 5 V",
  description: "38 kHz remote-control IR receiver module with metal receiver shield and onboard activity LED. Component-side view, receiver facing left; right header S, +, − from top to bottom. Manufacturer operating voltage 5 V.",
  source: docs("KS0026"), tags: ["infrared", "ir", "receiver", "remote", "38khz", "ks0026"], contacts: standard("Demodulated infrared envelope output to a microcontroller digital input; active-low receive pulses.", "output"),
  draw: show => smallBoard("IR Receiver", rect(36,55,37,49,5,"#acb7af", "#d3dace") + rect(34,63,15,33,3,"#3e4742", "#b4c1b7") + circle(42,80,10,"#3b2929", "#8f7a6d") +
    line(55,105,55,112,"#d1d4c5",2) + line(64,105,64,112,"#d1d4c5",2) + smd(83,65) + smd(83,93) + rect(91,79,7,6,1,"#9f4138", "#b8c0a1"), show) });

const maxSource = "https://www.haljia.com/products/haljia-max7219-dot-matrix-mcu-led-display-control-module-kit-compatible-with-arduino-with-dupont-cable";
const matrixContacts = ["VCC", "GND", "DIN", "CS", "CLK"].map((s,i) => contact(`in-${s.toLowerCase()}`, s, ["VCC","GND"].includes(s) ? "power_in" : "input", `Input connector ${s}: ${s === "VCC" ? "5 V module supply" : s === "GND" ? "common ground" : s === "DIN" ? "MAX7219 serial data input" : s === "CS" ? "LOAD/chip-select input" : "serial clock input"}.`, 26, 58+i*22, { group:"IN", number:`IN.${s}`, dx:15, anchor:"start", font:7.5 }));
matrixContacts.push(...["VCC", "GND", "DOUT", "CS", "CLK"].map((s,i) => contact(`out-${s.toLowerCase()}`, s, s === "DOUT" ? "output" : "passive", `Cascade connector ${s}: ${s === "DOUT" ? "serial data output to the next module; not the same net as DIN" : "direct continuation of the matching input connector net"}.`, 332,58+i*22,{group:"OUT",number:`OUT.${s}`,dx:14,anchor:"start",color:"#34554b",font:7.5})));
const matrix = entry({ id: "haljia-max7219-8x8-dip", name: "HALJIA MAX7219 8×8 LED Matrix", short:"MAX7219 8×8", manufacturer:"HALJIA", subtitle:"50 × 32 mm DIP-driver listing / 5 V / representative revision", width:382,height:204,
  description:"Single red 8×8 common-cathode matrix with a DIP MAX7219 and two five-contact cascade headers, matching HALJIA's 50 × 32 mm product photos. This is the DIP-driver listing, not the compact 32 mm module. Component-side view with driver left, matrix right; both headers run VCC, GND, data, CS, CLK from top to bottom. Input labels are readable; cascade order is inferred from the rear routing, with the middle DOUT path partly hidden by the LED assembly. Board revision and numeric SKU are not supplied; this photographed variant is representative. Verify the actual supplied module's cascade header before wiring.",
  source:maxSource,tags:["max7219","8x8","led matrix","red","spi","cascade"],contacts:matrixContacts,
  connections:[["in-vcc","out-vcc"],["in-gnd","out-gnd"],["in-cs","out-cs"],["in-clk","out-clk"]],
  draw:show => rect(26,15,306,174,4,"#21664b","#5d9980") + hole(44,31,8) + hole(44,174,8) + hole(315,31,8) + hole(315,174,8) +
    rect(20,48,12,108,1,"#232d2c") + rect(326,48,12,108,1,"#232d2c") + chip(83,37,39,129,"MAX7219",12) +
    rect(151,22,160,160,2,"#dedbd0","#eeebe1") + rect(154,25,154,154,1,"#1b2223") +
    Array.from({length:64},(_,i)=>circle(164+i%8*19,35+Math.floor(i/8)*19,6.3,"#d8d4c5","#eeeadf")).join("") +
    (show?label(101,178,"DIP DRIVER",7,"#d5e4d6"):"") });

const driverContacts = ["VCC","GND","IN1","IN2","IN3","IN4"].map((s,i)=>contact(s.toLowerCase(),s,i<2?"power_in":"input",s === "VCC" ? "5 V motor supply and clamp-diode common; also connected to the red motor wire." : s === "GND" ? "ULN2003 ground/common reference." : `ULN2003 phase ${i-1} input; HIGH enables the corresponding sinking output.`,35+i*22,209,{number:`J1.${s}`,group:"J1",vertical:true,dx:0,dy:16,anchor:"middle",font:7.5}));
driverContacts.push(...["OUT1","OUT2","OUT3","OUT4","VCC"].map((s,i)=>contact(`motor-${s.toLowerCase()}`,s,s === "VCC"?"passive":"open_collector",s === "VCC" ? "Motor socket common, red wire; same 5 V net as J1 VCC." : `ULN2003 sinking phase output ${i+1}, ${["blue","pink","yellow","orange"][i]} motor wire.`,38+i*22,43,{number:`MOTOR.${s}`,group:"MOTOR",socket:true,dx:0,dy:18,anchor:"middle",font:6.8})));
const stepper = entry({id:"keyestudio-ks0327-uln2003-stepper",name:"Keyestudio KS0327 ULN2003 + 28BYJ-48",short:"ULN2003 + stepper",category:"Actuators",subtitle:"KS0327 / driver and 5 V geared stepper",width:410,height:244,
  description:"One driver/motor pair from the KS0327 three-pair kit: ULN2003 driver board and 5 V 28BYJ-48 geared unipolar stepper. Component-side driver view with motor socket at the top: blue OUT1, pink OUT2, yellow OUT3, orange OUT4, red VCC left to right. Bottom J1 runs VCC, GND, IN1, IN2, IN3, IN4 left to right. The manufacturer rear photo shows the reverse order; this illustration uses the front. Motor shown alongside is the supplied accessory; the five socket contacts remain available for wiring.",
  source:docs("KS0327"),tags:["uln2003","28byj-48","stepper","motor driver","ks0327"],referencePrefix:"M",contacts:driverContacts,connections:[["vcc","motor-vcc"]],
  footnote:"The 28 mm motor and driver are an off-board assembly; this carrier does not mount the motor or reproduce its socket.",
  draw:show=>path("M24 24H140V139Q122 151 140 164V214H24V164Q42 151 24 139Z",pcb,outline)+hole(82,178,14)+rect(28,30,108,22,3,"#e0dfd4","#b5b7a8")+rect(29,199,117,17,1,"#d5b840","#eee0a2")+
    chip(59,99,44,45,"ULN2003",8)+[0,1,2,3].map(i=>rect(40+i*24,76,7,6,1,"#c6b252","#e7d879")+smd(39+i*24,88)).join("")+
    circle(295,119,69,"#afb5b2","#e7ebe3")+rect(212,111,167,20,10,"#b1b7b3","#e3e7df")+circle(225,121,7,"#686e69")+circle(366,121,7,"#686e69")+
    circle(295,119,63,"#c7ccc7","#929c93")+circle(295,108,15,"#a5afa3","#e4e7d9")+circle(295,108,6,"#cbb85b","#e9d38b")+
    rect(267,171,56,17,2,"#3a708e","#6d9aad")+["#4962a7","#d9a0bb","#dec74c","#df9650","#b74942"].map((c,i)=>line(274+i*10,185,260+i*7,218,c,3)+line(260+i*7,218,181+i*5,209,c,3)).join("")+
    (show?label(295,137,"28BYJ-48",10,"#477c5c")+label(295,152,"5 V / nominal 1:64",7,"#477c5c")+label(81,155,"KS0327",7,yellow):"") });

export default defineFamily("diy-kit-outputs", [active, passive, rgb, traffic, irtx, irrx, matrix, stepper]);
