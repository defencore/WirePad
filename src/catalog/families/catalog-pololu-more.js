import { defineFamily } from "../registry.js";
import { reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { makerContact as c, makerReferenceBoard } from "../shared/maker-reference-board.js";
import { chip, circle, label, rect, smd } from "../shared/svg.js";

const qtr = (rc, item) => {
const entry = makerReferenceBoard({
  id: `pololu-qtr-1${rc ? "rc" : "a"}-${item}`, name: `Pololu QTR-1${rc ? "RC" : "A"} Reflectance Sensor`, shortName: `QTR-1${rc ? "RC" : "A"}`,
  manufacturer: "Pololu", category: "Sensors", subtitle: `#${item} / single IR reflectance / ${rc ? "RC timing" : "analog voltage"}`,
  source: `https://www.pololu.com/product/${item}`,
  description: `Original red QTR-1${rc ? "RC" : "A"} carrier, sold singly as #${item} and later in two-packs. Component-side view with the three user contacts on the left: OUT, VIN, GND from top to bottom. The sensing face is the black optical package on this same side. Supply 5 V. ${rc ? "Charge OUT high for at least 10 µs, then release it and measure discharge time; shorter time means stronger reflection." : "OUT is an analog voltage from ground to VIN; lower voltage means stronger reflection."} PCB revision is not marked in the product photo. Header order is verified; illustrated geometry and the native wire carrier are approximate.`,
  tags: ["diy", "starter kit", "arduino", "pololu", "reflectance", "line follower", "infrared", rc ? "rc timing" : "analog"], width: 240, height: 154, color: "#a53a2e",
  contacts: [
    c("out", "OUT", "OUT", rc ? "bidirectional" : "output", rc ? "RC node: host drives HIGH briefly to charge the 10 nF capacitor, then changes to high impedance and times its discharge. Not a driven comparator output." : "Analog reflectance output, 0 V to VIN; stronger reflection produces lower voltage.", 28, 35, { dx:15,dy:0,anchor:"start" }),
    c("vin", "VIN", "VIN", "power_in", "5 V supply input; approximately 17 mA LED current.", 28, 77, { dx:15,dy:0,anchor:"start" }),
    c("gnd", "GND", "GND", "power_in", "Common ground reference.",28,119,{dx:15,dy:0,anchor:"start"}),
  ],
  draw: show => rect(14,17,210,120,1,"#ad3e31","#df7c5e") + circle(188,77,24,"#bcc1b8","#e9e4d7") + circle(188,77,15,"#eaf0ef") +
    rect(72,47,48,58,5,"#181f21","#5d6460") + rect(76,51,18,50,3,"#202b2d") + rect(98,51,18,50,3,"#192326") +
    smd(137,43) + smd(137,75,rc?"#bead82":"#292e2a") + smd(137,105) +
    (show ? label(160,128,rc?"QTR-1RC":"QTR-1A",7.5,"#f6ded5") : ""),
});
  const unitsPerMm = 10, origin = { x: 120, y: 77 };
  const contacts = ["out", "vin", "gnd"].map((pinId, index) => ({ pinId, x: -5.08, y: -2.54 + index * 2.54 }));
  const viewPins = contacts.map(contact => ({ pinId: contact.pinId, x: origin.x + contact.x * unitsPerMm,
    y: origin.y + contact.y * unitsPerMm, face: "front" }));
  const region = { x: 56.5, y: 38.9, width: 127, height: 76.2 };
  return { ...entry, mounting: reviewedBoardMounting({
    source: { label: `Pololu #${item} QTR-1${rc ? "RC" : "A"} dimensions and supplied 0.1 inch male strip`, url: `https://www.pololu.com/product/${item}` },
    contacts, calibration: { origin, unitsPerMm }, bodyRegions: [region],
    bodyEvidence: "Pololu specifies a 0.5 × 0.3 inch PCB and supplies a three-pin 0.1 inch header that can be installed perpendicular to the board. The contact order follows the exact SKU photo. Header inset and small package finishes remain representative; the native off-board carrier is unchanged.",
    viewBounds: { x: 56, y: 38.4, width: 128, height: 77.2 },
    view: { id: "breadboard", pins: viewPins,
      note: "Complete supplied straight male-header assembly with sensing face up. The manufacturer explicitly permits perpendicular installation; the pictured parallel-header option is not used. Every original contact ID is retained." },
    renderMounted: () => rect(region.x, region.y, region.width, region.height, 1, "#ad3e31", "#df7c5e") +
      circle(162, 77, 12, "#bcc1b8", "#e9e4d7") + circle(162, 77, 7, "#eaf0ef") +
      rect(99, 50, 30, 54, 3, "#181f21", "#5d6460") + rect(102, 53, 11, 48, 2, "#202b2d") +
      rect(116, 53, 10, 48, 2, "#192326") + smd(140, 52) + smd(140, 77, rc ? "#bead82" : "#292e2a") + smd(140, 100) +
      viewPins.map(pin => circle(pin.x, pin.y, 4, "#d2b56e", "#f1d99e") + circle(pin.x, pin.y, 1.8, "#23372d")).join(""),
    note: "Install the supplied complete 1×3 straight male strip below the PCB, keeping the sensing package above. Do not use the alternative parallel/header-wire assembly for this flat insertion view.",
  }) };
};

const signals = [
  ["GND", "VIN", "O2", "O1", "VM"], ["GND", "VCC", "EN", "PH", "SLP"],
];
const descriptions = {
  GND:"Common motor/logic ground.", VIN:"Reverse-protected motor power input. Recommended supply 1.5–11 V; below 1.5 V use VM instead.",
  VM:"Motor rail after reverse protection; normally available as an output. May be supplied directly for very low voltage operation 0–11 V, bypassing protection.",
  VCC:"Logic supply input 1.8–7 V, separate from motor supply.", O1:"Motor H-bridge output 1.", O2:"Motor H-bridge output 2.",
  EN:"Enable/PWM input; LOW brakes by shorting both motor outputs to ground.", PH:"Phase/direction input.",
  SLP:"Active-low sleep input; onboard 10 kΩ pull-up keeps driver awake by default. LOW makes outputs high impedance for coasting.",
};
const drv = makerReferenceBoard({ id:"pololu-drv8838-2990", name:"Pololu DRV8838 Single Motor Driver", shortName:"DRV8838", manufacturer:"Pololu", category:"Actuators",
  subtitle:"#2990 / md26a / phase-enable H-bridge", source:"https://www.pololu.com/product/2990", width:230,height:218,
  description:"Pololu #2990 md26a carrier, drawing dated 23 September 2014. Solder-side view matches the manufacturer's labeled bottom photo: left column GND, VIN, O2, O1, VM and right column GND, VCC, EN, PH, SLP top to bottom. This bottom view is mirrored in X relative to a component-side footprint. Motor input 0–11 V (VIN at least 1.5 V), logic 1.8–7 V; about 1.7 A continuous subject to operating conditions. All 10 user contacts represented. The native export is an explicitly approximate wire carrier; the vendor STEP is linked separately.",
  tags:["diy","starter kit","arduino","pololu","drv8838","motor driver","h bridge","phase enable","2990"],
  contacts:signals.flatMap((row,col)=>row.map((s,i)=>c(`${col?"r":"l"}-${s.toLowerCase()}`,`${col?"R":"L"}.${s}`,s,["O1","O2"].includes(s)?"output":["EN","PH","SLP"].includes(s)?"input":s==="VM"?"passive":"power_in",descriptions[s],col?192:38,32+i*38,{group:col?"R":"L",dx:col?-12:12,dy:0,anchor:col?"end":"start",font:8}))),
  internalConnections:[["l-gnd","r-gnd"]], model:{label:"Pololu DRV8838 md26a manufacturer STEP",url:"https://www.pololu.com/file/0J1696/drv8838-motor-driver-carrier.step"},
  footprintNote:"Manufacturer md26a mechanical drawing and STEP are available at the product resource page; this export does not reproduce that mating pattern.",
  draw:show=>rect(24,17,182,184,1,"#30694c","#71a687")+(show?label(115,74,"Pololu",11)+label(115,106,"md26a",9)+label(115,133,"DRV8838",8)+label(115,188,"BOTTOM / mirrored",6,"#d3e5cd"):""),
});

const drvOrigin = { x: 115, y: 109 }, drvUnits = 10;
const drvContacts = signals.flatMap((row, side) => row.map((signal, index) => ({
  pinId: `${side ? "r" : "l"}-${signal.toLowerCase()}`, x: side ? -3.81 : 3.81, y: -5.08 + index * 2.54,
})));
const drvViewPins = drvContacts.map(contact => ({ pinId: contact.pinId,
  x: drvOrigin.x + contact.x * drvUnits, y: drvOrigin.y + contact.y * drvUnits, face: "front" }));
const drvMounting = reviewedBoardMounting({
  source: { label: "Pololu DRV8838 md26a dimension diagram, 23 September 2014", url: "https://www.pololu.com/product/2990/resources" },
  contacts: drvContacts, calibration: { origin: drvOrigin, unitsPerMm: drvUnits },
  bodyRegions: [{ x: 64.2, y: 45.5, width: 101.6, height: 127 }],
  viewBounds: { x: 63.7, y: 45, width: 102.6, height: 128 },
  bodyEvidence: "Pololu md26a dimension diagram specifies a 10.16 × 12.7 mm PCB, ten 1.02 mm holes at 2.54 mm pitch and 7.62 mm opposing-row spacing. Both complete downward male strips fit across a normal breadboard trench. Component finish and small passive sizes remain representative.",
  view: { id: "breadboard", pins: drvViewPins,
    note: "The old catalog art is the labeled bottom view. This explicit component-side view mirrors the two physical banks horizontally, retaining all ten original IDs and the verified ground pair. Through-hole pads are visible from the front; no composite rear inset is inserted." },
  renderMounted: () => rect(64.2, 45.5, 101.6, 127, 1, "#30694c", "#71a687") +
    chip(95, 93, 32, 22, "TI", 4) + smd(100, 64) + smd(113, 75) + smd(108, 126) +
    smd(103, 143) + smd(125, 143) + smd(101, 156) +
    drvViewPins.map(pin => circle(pin.x, pin.y, 4.5, "#d2b56e", "#f1d99e") + circle(pin.x, pin.y, 2.1, "#23372d")).join(""),
  note: "Populate both complete five-pin rows with straight 2.54 mm male leads below the PCB. The 7.62 mm row spacing straddles the breadboard center trench. Original bottom-view wiring and native reference carrier are preserved for existing instances.",
});

export default defineFamily("pololu-more", [qtr(false,958),qtr(true,959),{ ...drv, mounting: drvMounting }]);
