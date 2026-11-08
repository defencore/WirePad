import { defineFamily } from "../registry.js";
import { makerContact as c, makerReferenceBoard } from "../shared/maker-reference-board.js";
import { chip, circle, label, rect, smd } from "../shared/svg.js";

const qtr = (rc, item) => makerReferenceBoard({
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

export default defineFamily("pololu-more", [qtr(false,958),qtr(true,959),drv]);
