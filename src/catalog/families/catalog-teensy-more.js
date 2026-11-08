import { defineFamily } from "../registry.js";
import { makerContact as c, makerReferenceBoard } from "../shared/maker-reference-board.js";
import { chip, circle, label, line, path, rect, smd, tactile } from "../shared/svg.js";
import { reviewedBoardMounting, clippedFrontArtwork } from "../shared/reviewed-board-mounting.js";
import { rearContactOverlay } from "../shared/rear-contact-overlay.js";

const unit = 12, frontX = 80, rearX = 450, top = 40;
const number = value => String(value).replaceAll("+","plus").replaceAll("-","minus").replace(/[^a-z0-9]+/gi,"-").toLowerCase();
const alternate40 = {
  0:"RX1",1:"TX1",2:"OUT2",3:"LRCLK2",4:"BCLK2",5:"IN2",6:"OUT1D",7:"RX2 / OUT1A",8:"TX2 / IN1",9:"OUT1C",
  10:"CS / MQSR",11:"MOSI / CTX1",12:"MISO / MQSL",13:"SCK / onboard LED",14:"A0 / TX3 / SPDIF OUT",15:"A1 / RX3 / SPDIF IN",
  16:"A2 / RX4 / SCL1",17:"A3 / TX4 / SDA1",18:"A4 / SDA0",19:"A5 / SCL0",20:"A6 / TX5 / LRCLK1",21:"A7 / RX5 / BCLK1",
  22:"A8 / CTX1",23:"A9 / CRX1 / MCLK1",24:"A10 / TX6 / SCL2",25:"A11 / RX6 / SDA2",26:"A12 / MOSI1",27:"A13 / SCK1",28:"RX7",29:"TX7",30:"CRX3",31:"CTX3",32:"OUT1B",33:"MCLK2",
  34:"DAT1 / MISO2",35:"DAT0 / MOSI2",36:"CLK / CS2",37:"CMD / SCK2",38:"DAT3 / RX5",39:"DAT2 / TX5",
};
const alternateLC = {0:"RX1",1:"TX1",5:"TX3",7:"RX3",8:"TX3",9:"RX2",10:"TX2 / CS0",11:"MOSI0",12:"MISO0",13:"SCK0 / onboard LED",
  14:"A0 / SCK0",15:"A1 / CS0",16:"A2 / SCL0",17:"A3 / SDA0",18:"A4 / SDA0",19:"A5 / SCL0",20:"A6 / SCK1",21:"A7 / MOSI1",22:"A8 / SCL1",23:"A9 / SDA1",24:"A10",25:"A11",26:"A12 / DAC"};
const alternate20 = {0:"PB0 / SS",1:"PB1 / SCK",2:"PB2 / MOSI",3:"PB3 / MISO",4:"PB7 / PWM",5:"PD0 / SCL / PWM / INT0",6:"PD1 / SDA / INT1",7:"PD2 / RX / INT2",8:"PD3 / TX / INT3",9:"PC6 / PWM",10:"PC7 / PWM",11:"PD6 / A10 / onboard LED",12:"PD7 / A9 / PWM",13:"PB4 / A8",14:"PB5 / A7 / PWM",15:"PB6 / A6 / PWM",16:"PF7 / A5",17:"PF6 / A4",18:"PF5 / A3",19:"PF4 / A2",20:"PF1 / A1",21:"PF0 / A0",22:"PD4 / A11",23:"PD5",24:"PE6"};

function electrical(signal, spec) {
  if (/^\d+$/.test(signal)) return ["bidirectional",`${spec.logic} GPIO${signal}. ${spec.alternate[signal] ?? "General-purpose digital I/O"}. ${spec.voltageNote}`];
  const info = {
    GND:["power_in","Common ground reference."], VIN:["power_in",`External board power input, ${spec.vin}. Factory-linked to USB power; separate the documented VIN/VUSB bridge before using an independent supply while USB power is present.`],
    VCC:["power_in","Board +5 V supply rail in the factory 5 V configuration; connected to USB power. Follow PJRC's optional 3.3 V regulator conversion instructions before changing power configuration."],
    "3V3":["power_out",`Regulated 3.3 V output, maximum external current ${spec.current}. Do not apply 5 V.`], VBAT:["power_in","RTC backup battery input, nominal 3 V; not the main board supply."],
    PROGRAM:["input","Active-low bootloader/program request; this is not a general-purpose reset/GPIO."], ONOFF:["input","Power-control input. Momentary contact to ground controls 3.3 V power; follow PJRC's hold-time behavior."],
    RESET:["input","Active-low ATmega32U4 reset input."], AREF:["input","Analog reference input. Follow the microcontroller analog-reference configuration and limits."],
    "17_BUF":["output","Buffered copy of GPIO17 at VIN voltage, output-only, maximum 8 mA. This is not a 3.3 V GPIO input."],
    VUSB:["passive","USB 5 V power rail; factory-linked to VIN through the documented cuttable bridge."],
    "D-":["bidirectional","USB D− differential data; not a GPIO."],"D+":["bidirectional","USB D+ differential data; not a GPIO."],
  };
  if (!info[signal]) throw new Error(`Unknown Teensy contact ${signal}`);
  return info[signal];
}
function userContact(spec, ref, signal, x, y, options={}) {
  const [type, description]=electrical(signal,spec);
  return c(`${ref.toLowerCase()}-${number(signal)}`,`${ref}.${signal}`,signal,type,description,x,y,options);
}
function rows(spec) {
  const left=["GND",...Array.from({length:spec.count-1},(_,i)=>String(i))];
  const right=spec.right;
  const contacts=[...left.map((s,i)=>userContact(spec,"HL",s,frontX+1.27*unit,top+(1.27+i*2.54)*unit,{group:"HL",dx:-23,dy:0,anchor:"end",font:7.5,color:"#345447"})),
    ...right.map((s,i)=>userContact(spec,"HR",s,frontX+16.51*unit,top+(1.27+i*2.54)*unit,{group:"HR",dx:23,dy:0,anchor:"start",font:7.5,color:"#345447"})),
    ...spec.end.map((s,i)=>userContact(spec,"END",s,frontX+(3.81+i*2.54)*unit,top+(spec.length-1.27)*unit,{group:"END",dy:27,font:6.5,caption:spec.endCaptions[i],color:"#345447"}))];
  if(spec.version!=="2.0")contacts.push(userContact(spec,"USB", "VUSB",frontX+13.97*unit,top+3.81*unit,{group:"POWER",dy:11,font:5.8,caption:"USB 5 V"}));
  if(spec.version==="LC")[["AREF",8.89],["24",11.43],["25",13.97]].forEach(([s,y])=>contacts.push(userContact(spec,"INNER",s,frontX+13.97*unit,top+y*unit,{group:"INNER",dx:-10,dy:0,anchor:"end",font:6.5})));
  if(spec.version==="2.0")[["24",3.81],["AREF",13.97]].forEach(([s,x])=>contacts.push(userContact(spec,"INNER",s,frontX+x*unit,top+11.43*unit,{group:"INNER",dx:0,dy:-12,font:6.5})));
  return contacts;
}
function rear(spec, signal, mmx, mmy, ref="BACK", options={}) {
  return userContact(spec,ref,signal,rearX+mmx*unit,top+mmy*unit,{group:ref,shape:"pad",radius:3,padWidth:12,padHeight:5,dy:-8,font:5.8,...options});
}
// Manufacturer card10b rear has USB to the right. Rotate it 90° counterclockwise
// to put USB at the top; this rear view is mirrored in X from the front view.
function rear40(spec) {
  const fromCard=(px,py)=>[(py-169)/108*17.78,35.56-(px-78)/228*35.56];
  const contacts=[];
  for(let i=0;i<10;i++){
    const [x,y]=fromCard(i%2?138:112,193+Math.floor(i/2)*16.3);
    contacts.push(rear(spec,String(24+i),x,y,"GPIO",{caption:String(24+i),dx:0,dy:-8,padWidth:15,padHeight:6}));
  }
  ["34","35","GND","36","3V3","37","38","39"].forEach((s,i)=>{
    // Eight SD lands; the adjacent long lands belong to fitted components.
    const [x,y]=fromCard(259,202+i*6.1);
    const p=rear(spec,s,x,y,`SD${i+1}`,{group:"SD",caption:s==="3V3"?"3V":s==="GND"?"G":s,dy:-7,font:5.3,padWidth:5,padHeight:14});contacts.push(p);
  });
  for(const [s,py] of [["VUSB",183],["D-",217],["D+",239]]){
    const[x,y]=fromCard(294,py);contacts.push(rear(spec,s,x,y,"USBPAD",{caption:s,padWidth:15,padHeight:7,dy:12}));
  }
  const tp=[
    ["NVCC_PLL",95,51],["VDD_SOC_IN",95,75],["VDD_SNVS_IN",95,100],["VDD_USB_CAP",95,124],
    ["AD_B0_00",191,50],["VDD_SNVS_CAP",201,70],["VDD_HIGH_CAP",146,81],["PTA0",315,54],["PTA2",315,78],["PMIC_ON_REQ",315,119],["USB_VBUS",347,135],
  ];
  for(const [i,[signal,px,py]] of tp.entries()){
    const mmx=(py/175)*17.78,mmy=35.56-(px-22)/348*35.56;
    contacts.push(c(`tp-${number(signal)}`,`TP.${signal}`,signal,"passive",`Manufacturer factory test point ${signal}, identified in PJRC's Teensy 4.0 test-point map. This is not an ordinary expansion GPIO; use the linked schematic before probing or driving it.`,rearX+mmx*unit,top+mmy*unit,{group:"TP",shape:"pad",radius:2.2,caption:`T${i+1}`,dy:7,font:4.6}));
  }
  return contacts;
}

function drawBoard(spec, rearView, show) {
  const x=rearView?rearX:frontX,w=17.78*unit,h=spec.length*unit;
  let art=rect(x,top,w,h,2,"#276a4b","#66a27e");
  if(rearView){
    // Through contacts have their interactive anchors in the front view only.
    for(let i=0;i<spec.count;i++)for(const xx of [x+1.27*unit,x+16.51*unit])art+=circle(xx,top+(1.27+i*2.54)*unit,3.1,"#90aa82","#c9d9b7");
    art+=rect(x+8.89*unit-25,top+3,50,36,2,"#486b59","#9cb6a0");
    if(show)art+=label(x+w/2,top+h*.54,`Teensy ${spec.version}`,13,"#d0e1c5")+label(x+w/2,top+h+47,"REAR / mirrored",9,"#345447");
  }else{
    art+=rect(x+w/2-42,top-5,84,54,3,"#adb9b8","#e0e6d9")+rect(x+w/2-34,top-3,68,17,2,"#384e51","#e0e6d9")+rect(x+w/2-26,top+8,52,7,1,"#111d20");
    if(spec.version==="LC"){
      const cx=x+w/2,cy=top+230;
      art+=path(`M${cx} ${cy-50}L${cx+50} ${cy}L${cx} ${cy+50}L${cx-50} ${cy}Z`,"#17282c","#93a79c")+
        Array.from({length:9},(_,i)=>{const d=-35+i*8.5;return line(cx+d,cy-50+Math.abs(d),cx+d,cy-55+Math.abs(d),"#a7b7a8",2)+line(cx+d,cy+50-Math.abs(d),cx+d,cy+55-Math.abs(d),"#a7b7a8",2);}).join("")+
        label(cx,cy,"MKL26Z64",7,"#bacaba");
    }
    else art+=chip(x+w/2-42,top+(spec.version==="4.0"?115:150),84,84,spec.version==="4.0"?"i.MXRT1062":"ATmega32U4",10);
    art+=tactile(x+w/2-8,top+h-62)+smd(x+61,top+72)+smd(x+65,top+235)+smd(x+128,top+250);
    const crystalX=spec.version==="4.0"?151:42,crystalY=spec.version==="4.0"?305:spec.version==="LC"?156:246;
    art+=rect(x+crystalX,top+crystalY,26,32,2,"#b3b9aa","#e3dec3")+circle(x+crystalX+12,top+crystalY+15,6,"#c5be9b");
    if(spec.version!=="2.0")art+=chip(x+47,top+82,26,27,"",4)+chip(x+45,top+(spec.version==="4.0"?295:110),25,25,"",4);
    art+=Array.from({length:12},(_,i)=>smd(x+[28,48,164][i%3],top+205+Math.floor(i/3)*15)).join("");
    if(show)art+=label(x+w/2,top+h+47,"FRONT / USB at top",9,"#345447");
  }
  return art;
}
function make(spec) {
  spec.contacts=rows(spec);
  if(spec.version==="4.0")spec.contacts.push(...rear40(spec));
  if(spec.version==="LC"){
    // Original rear card6b has USB at right; rotate 90° counterclockwise.
    [["VUSB",4.5],["D-",7.2],["D+",9.6],["GND",12.7]].forEach(([s,x])=>spec.contacts.push(rear(spec,s,x,1.7,"USBPAD",{dy:12,padWidth:18,padHeight:7})));
  }
  const bySignal = new Map();
  for(const p of spec.contacts)if(["GND","3V3","VCC","VUSB"].includes(p.label)){
    if(!bySignal.has(p.label))bySignal.set(p.label,[]);bySignal.get(p.label).push(p.id);
  }
  const internalConnections=[...bySignal.values()].filter(ids=>ids.length>1);
  // Factory USB/VIN bridge is closed; cutting it changes this power connection.
  if(spec.version!=="2.0")internalConnections.push(["hr-vin",...spec.contacts.filter(p=>p.label==="VUSB"||p.label==="USB_VBUS").map(p=>p.id)]);
  const hasRear=spec.version!=="2.0", width=hasRear?750:380;
  const entry = makerReferenceBoard({id:spec.id,name:`PJRC Teensy ${spec.version}`,shortName:`Teensy ${spec.version}`,manufacturer:"PJRC",category:"Microcontrollers",width,height:spec.length*unit+145,
    subtitle:spec.subtitle,source:spec.source,
    description:`${spec.description} Front view has USB at the top. ${hasRear?"The separate rear view is explicitly mirrored in X and exposes the rear solder contacts; through-hole contacts are connectable in the front view." : "All 29 outer header holes and both interior user contacts are present. Optional regulator conversion/bridge pads are configuration sites, not separate user terminals."} Terminal identifiers use printed signal names with WirePad row/group prefixes, because PJRC does not number the board like a DIP package. Board revision is ${spec.revision}; source card and mechanical drawing are linked in the audit. Native export is an approximate off-board wire carrier, not a verified Teensy mating land pattern.`,
    tags:["diy","starter kit","arduino","teensy","pjrc",spec.cpu,"usb","microcontroller"],contacts:spec.contacts,internalConnections,
    draw:show=>drawBoard(spec,false,show)+(hasRear?drawBoard(spec,true,show):""),
    footprintNote:"PJRC dimension drawings verify the main header pitch, but the off-board carrier does not claim those native board coordinates. No vendor STEP was verified.",
  });
  const viewPins = spec.contacts.map(pin => ({ pinId: pin.id,
    x: pin.x >= rearX ? frontX + 17.78 * unit - (pin.x - rearX) : pin.x,
    y: pin.y, face: pin.x >= rearX ? 'rear' : 'front' }));
  const bounds = { x: frontX, y: top - 5, width: 17.78 * unit, height: spec.length * unit + 5 };
  entry.mounting = reviewedBoardMounting({
    source: { url: spec.source, label: `PJRC Teensy ${spec.version} pinout card and dimension drawing` },
    contacts: spec.contacts.filter(pin => ['HL', 'HR'].includes(pin.group))
      .map(pin => ({ pinId: pin.id, x: (pin.x - frontX) / unit, y: (pin.y - top) / unit })),
    calibration: { origin: { x: frontX, y: top }, unitsPerMm: unit },
    bodyRegions: [{ x: frontX, y: top, width: 17.78 * unit, height: spec.length * unit },
      { x: frontX + 8.89 * unit - 42, y: top - 5, width: 84, height: 54 }],
    viewBounds: bounds,
    bodyEvidence: 'PJRC dimensional drawings verify the 17.78 mm PCB width, board length and main plated-hole centers. The component-side PCB and USB shell match drawBoard; the second mirrored board and footer captions are omitted.',
    note: `Populate only the two complete ${spec.count}-pin HL/HR side rows, 15.24 mm apart at 2.54 mm pitch. Leave the crosswise END and interior holes unpopulated or face-up; they would otherwise short independent signals on the breadboard strips. Back solder/test pads are dashed B projections from the reviewed PJRC rear card, not insertion leads.`,
    view: { id: 'breadboard', pins: viewPins, note: 'The single component-side view keeps every original pin ID. Mirrored rear-card anchors project through the same PCB and are clearly marked B; their photo-reviewed locations retain reference precision.' },
    renderMounted: component => clippedFrontArtwork(entry.render, entry.component, bounds) +
      rearContactOverlay(viewPins.map(pin => ({ ...entry.component.pins.find(p => p.id === pin.pinId), ...pin }))),
  });
  return entry;
}

const t40={id:"pjrc-teensy-4-0",version:"4.0",cpu:"imxrt1062",logic:"3.3V",voltageNote:"Not 5 V tolerant; never apply more than 3.3 V to any signal pin.",vin:"3.6–5.5 V",current:"250 mA",length:35.56,count:14,
  right:["VIN","GND","3V3","23","22","21","20","19","18","17","16","15","14","13"],end:["VBAT","3V3","GND","PROGRAM","ONOFF"],endCaptions:["VBAT","3V","GND","PROG","ON/OFF"],alternate:alternate40,
  subtitle:"i.MXRT1062 / Cortex-M7 / card 10 rev 2",source:"https://www.pjrc.com/store/teensy40.html",revision:"unmarked in the referenced PJRC product photo; card 10 rev 2 pinout, main board version 4.0",
  description:"600 MHz Cortex-M7 development board with 3.3 V-only I/O. All named header/solder connections and the 11 manufacturer-identified factory test points are included. Rear SDIO lands include 3.3 V and ground; USB host D+/D− are separate from the fitted main USB connector. T1–T11 captions identify factory test points; full net names appear on hover. The factory VIN/VUSB bridge is modeled closed; cutting it disconnects those power nets.",};
const tlc={id:"pjrc-teensy-lc",version:"LC",cpu:"mkl26z64",logic:"3.3V",voltageNote:"Not 5 V tolerant. The bufferedGPIO17 output is a separate VIN-level output.",vin:"3.7–5.5 V",current:"100 mA",length:35.56,count:14,
  right:["VIN","GND","3V3","23","22","21","20","19","18","17","16","15","14","13"],end:["17_BUF","3V3","GND","PROGRAM","26"],endCaptions:["17↑","3V","GND","PROG","26"],alternate:alternateLC,
  subtitle:"MKL26Z64 / Cortex-M0+ / card 6 rev 4",source:"https://www.pjrc.com/store/teensylc.html",revision:"unmarked; product Teensy-LC and card 6 rev 4",
  description:"48 MHz Cortex-M0+ board. All 27 GPIO signals, AREF, power/program contacts and four rear USB lands are included. GPIO26 is also A12/DAC; the dedicated 17_BUF contact is an output-only buffer at VIN voltage, distinct from 3.3 V GPIO17. The factory VIN/VUSB bridge is modeled closed; cutting it disconnects those power nets.",};
const t20={id:"pjrc-teensy-2-0",version:"2.0",cpu:"atmega32u4",logic:"5V in the factory configuration",voltageNote:"Native board logic follows its supply; optional 3.3 V regulator conversion is not fitted in this reference.",vin:"5V",current:"not applicable",length:30.48,count:12,
  right:["VCC","21","20","19","18","17","16","15","14","13","12","11"],end:["23","VCC","GND","RESET","22"],endCaptions:["23","+5V","GND","RST","22"],alternate:alternate20,
  subtitle:"ATmega32U4 / 16 MHz / card 2 rev 5",source:"https://www.pjrc.com/store/teensy.html",revision:"Teensy 2.0; no further PCB revision in the photo, card 2 rev 5",
  description:"Original 16 MHz ATmega32U4 USB development board with 25 digital I/O signals and 12 analog input functions. Header numbers are Teensyduino/Arduino pin numbers; native AVR port names are in the contact descriptions. Interior 24 is PE6, not AREF. Default supply and logic 5 V.",};

export default defineFamily("teensy-more",[make(t40),make(tlc),make(t20)]);
