import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { contactTables, manufacturerEntries } from "../data/gowin-modern.js";

const green = "#286b57";
const gold = "#c8a662";
const silk = "#eef0da";
const silver = "#b7c1c1";
const bodies = [[170, 92], [100, 75], [160, 102], [120, 100], [160, 100], [120, 75], [60, 106], [160, 100]];
// Reference carrier placements, component side, millimetres. These are not vendor land patterns.
// Tuple: x, y, pitch, rows, axis, rotation, finePitch. Header pitch comes from the user guide.
const placements = [
  { J4:[43,11,2.54,2,"y",-45], J6:[59,11,2.54,2,"y",-45], J8:[75,11,2.54,2,"y",-45], J10:[91,11,2.54,2,"y",-45], J5:[107,11,2.54,2,"y",-45], J7:[123,11,2.54,2,"y",-45], J9:[139,11,2.54,2,"y",-45], J11:[155,11,2.54,2,"y",-45], J12:[43,81,2.54,2,"y",45], J14:[59,81,2.54,2,"y",45], J16:[75,81,2.54,2,"y",45], J18:[91,81,2.54,2,"y",45], J13:[107,81,2.54,2,"y",45], J15:[123,81,2.54,2,"y",45], J17:[139,81,2.54,2,"y",45], J19:[155,81,2.54,2,"y",45], J23:[147,47,2.54,2,"y"], J2:[151,36,2.54,1,"x"] },
  { J10:[74,34,.4,2,"x",0,true], U13:[96,43,.5,1,"y",0,true], P8:[13,48,2.54,2,"x"], J3:[4,31,2.54,1,"y"], J11:[31,55,2.54,2,"y",0,false,true], J7:[40,55,2.54,2,"y",0,false,true] },
  { J3:[43,65,2.54,2,"y"], J1:[106,6,.5,1,"x",0,true], J10:[133,9,.4,2,"x",0,true], J28:[10,52,2,2,"x"], J26:[10,37,2,2,"x"], J8:[13,7,2.54,2,"x"], J22:[115,87,2.54,1,"x"], J6:[41,77,2.54,2,"y"] },
  { J23:[81,94,.5,1,"x",0,true], J21:[53,94,.5,1,"x",0,true], J28:[55,7,2,2,"x"], J26:[83,7,2,2,"x"], J2:[4,50,2.54,1,"y"], J30:[113,31,2.54,2,"y"], J29:[113,66,2.54,2,"y"] },
  { J3:[102,7,2.54,2,"y"], J12:[64,10,2,2,"y"], J18:[80,10,2,2,"y"], J19:[46,7,2.54,2,"y"], J13:[118,81,2,2,"y"], J14:[103,81,2,2,"y"], J17:[10,5,2.54,1,"x"], J2:[106,19,2.54,2,"x"] },
  { CORE_J4:[60,11,1.25,1,"x",0,true], CORE_J1:[41,30,.5,2,"y",0,true], CORE_J2:[79,30,.5,2,"y",0,true], IO_J4:[8,18,2,2,"y"], IO_J3:[110,18,2,2,"y"], IO_J11:[37,5,.5,1,"x",0,true], IO_J2:[94,42,.5,1,"y",0,true], IO_J7:[104,44,.5,1,"y",0,true], IO_J1:[30,68,.5,1,"x",0,true], IO_J10:[73,68,.5,1,"x",0,true], IO_JP1:[60,64,2.54,1,"x"] },
  { J2:[30,5,2.54,1,"x"], J19:[53,61,.5,2,"y",0,true], J9:[41,40,2,2,"y"], J4:[4,58,2.54,2,"y"], J20:[30,99,2.54,1,"x"], J21:[38,89,2.54,1,"y"], J22:[38,95,2.54,1,"y"] },
  { J3:[102,7,2.54,2,"y"], J12:[78,81,.5,2,"x",0,true], J13:[118,81,2,2,"y"], J14:[103,81,2,2,"y"], J17:[10,5,2.54,1,"x"], J2:[65,7,2.54,2,"x"] },
];
const versionNote = [
  "DBUG1298-1.0E (2026-10-22), schematic V2.1. Sixteen HUB75 headers have 5 V 74HC245PW output buffers; the manual's 3.3 V bank column describes the FPGA side.",
  "DBUG1294-1.0E (2026-05-22), PCB V1.1. The LVDS table calls the connector J4; the matching schematic and component-side photograph identify it as P8. P8 numbering is used here. J11 selects the 12 V source; do not power the adapter and PCIe inputs together.",
  "DBUG1290-1.0E (2026-04-10), PCB V1.1. Includes the schematic's PCIe presence strap J6 and current-monitor header J22. The ADC pin order differs from the PG484 boards.",
  "DBUG1289-1.0.2E (2026-04-24), PCB V1.0. Includes all 32 GPIO signals and eight ground contacts on J29/J30. GPIO27, GPIO30 and GPIO31 use 1.8 V; other general GPIO contacts use 3.3 V. LVDS banks 2/6 use 2.5 V.",
  "DBUG1288-1.0.1E (2026-03-13), PCB V1.2. Separate J12/J18 20-pin MIPI headers plus six-contact J19 GPIO replace the V1.1 80-contact MIPI connector. The product change notice and this revision's manual are the references.",
  "DBUG1281-1.0E (2025-03-07), PCB V1.0 core and carrier kit. CORE_J1/CORE_J2 are the two 80-contact connectors on the core board; CORE_J4 is its six-contact JTAG socket; IO_J* identify the carrier connectors. Their connector reference names overlap between the two PCBs, so both namespaces are retained.",
  "DBUG1279-1.0.1E (2026-03-13), PCB V1.1. J4 is a complete ten-contact header: four 1.8 V SPI signals, NC, 3.3 V controller enable, 2.5 V SDI I2C and two grounds. The schematic supplements the manual's SPI-only table. J20 exposes the Type-C status signals with 3.3 V pull-ups.",
  "DBUG1276-1.0.4E (2026-03-13), PCB V1.1. Uses the complete 80-contact J12 MIPI connector; this map is deliberately separate from V1.2."
];
const roles = [
  "LED receiving card with GW3A-LV20UG324S, DDR2, dual Gigabit Ethernet and MCU programming header.",
  "GW5ART-LV15MG132P PCIe x4 card with MIPI D-PHY, C-PHY and LVDS expansion.",
  "GW5AT-LV60UG324 PCIe x4 evaluation board with DDR3, ADC, MIPI and GPIO expansion.",
  "GW5A-LV25LQ144 starter board with paired LVDS FPC/PH interfaces, mixed-voltage GPIO and USB programming.",
  "GW5AT-LV60PG484A starter board with DDR3, dual SFP, dual Gigabit Ethernet, SDI, HDMI, MIPI and LVDS.",
  "GW5AT-LV60UG225 video core/carrier kit with DDR3 and DisplayPort, HDMI, MIPI and LVDS evaluation ports.",
  "GW5ART-LV15MG132P USB evaluation board with MIPI, SPI, SDI and four SMA SerDes ports.",
  "GW5AT-LV60PG484A starter board with DDR3, dual SFP, dual Gigabit Ethernet, SDI, HDMI and MIPI/LVDS."
];
function position(number, count, placement) {
  const [cx, cy, pitch, rows, axis, rotation = 0, fine] = placement;
  const columns = Math.ceil(count / rows);
  if (placement[7]) number = [1,3,2,4][number-1];
  const a = (Math.floor((number - 1) / rows) - (columns - 1) / 2) * pitch;
  const b = ((number - 1) % rows - (rows - 1) / 2) * (fine && rows === 2 ? 1.6 : pitch);
  const px = axis === "x" ? a : b;
  const py = axis === "x" ? b : a;
  const radians = rotation * Math.PI / 180;
  return [cx + px * Math.cos(radians) - py * Math.sin(radians), cy + px * Math.sin(radians) + py * Math.cos(radians)];
}
function electrical(index, connector, row) {
  const [, name, fpga, bank, level, description, page] = row;
  let type = "bidirectional";
  let detail = description;
  let correctedLabel;
  let externalLevel = /^\d\.\dV$/.test(name) ? name : level;
  if (/^(?:A?GND|DGND|GND|SGND)$/.test(name)) type = "power_in";
  else if (/^(NC|Reserved|DNC|N\/C)$/.test(name)) type = "no_connect";
  else if (/^\d\.\dV$|^VCC|^VDD|^AVDD|^DVDD|^3V3/.test(name)) type = "power_out";
  else if (/PCIE.*PRSNT|12V/.test(name)) type = "passive";
  else if (/ADCT|ADCV|Analog signal input/.test(name + description)) type = "input";
  else if (/input to FPGA|Receive signal|receive data|reset signal/i.test(description)) type = "input";
  else if (/output from FPGA|Transmit signal|transmit data/i.test(description)) type = "output";
  if (index === 5 && connector === "CORE_J4" && /^(TCK|TMS|TDI)$/.test(name)) type="input";
  if (index === 5 && connector === "CORE_J4" && name === "TDO") type="output";
  if (/^INA3221_SCL$|^SDI_SCL$|^MCU_(?:BOOT0|SWCLK|UART_RX|NRST)$/.test(name)) type = "input";
  if (/^MCU_(?:SWO|UART_TX)$/.test(name)) type = "output";
  if (index === 0 && /^J(?:[4-9]|1[0-9])$/.test(connector) && name !== "GND") { type = "output"; externalLevel = "5V"; }
  if (index === 5 && (connector === "CORE_J2" || connector === "IO_JP1") && name === "VDD5V") { type = "power_in"; externalLevel = "5V"; }
  if (index === 6 && connector === "J20") type = "open_collector";
  if (index === 6 && connector === "J4" && row[0] === 4) type = "input";
  if (index === 6 && /^J2[12]$/.test(connector) && row[0] === 1) type = "input";
  if (index === 5 && /IO_J[34]$/.test(connector)) {
    if (/^DPTX[PN]_/.test(name)) type = "output";
    if (/^DPRX[PN]_/.test(name)) type = "input";
    if (/AUX/.test(name)) { externalLevel = "-"; detail += "; AC-coupled DisplayPort AUX, not a direct CMOS bank connection"; }
    if (name === "DPTX_HPD") type = "input";
    if (name === "DPRX_HPD") type = "output";
    if (row[0] === 19) { type = "power_in"; correctedLabel = "GND"; detail = "DisplayPort return grounded in carrier schematic sheet 4. The guide's floating/NC description conflicts with the actual schematic"; }
    if (row[0] === 20) { type = connector === "IO_J4" ? "power_out" : "input"; detail = connector === "IO_J4" ? "Regulated 3.3 V DP power output from the XC6206P332MR" : "External DP 3.3 V power-detect input, sensed by FPGA P14 through 10k; does not power the board"; }
  }
  const volt = type === "no_connect" || /^A?GND$|^DGND$|^SGND$/.test(correctedLabel ?? name) ? "" : externalLevel && externalLevel !== "-" && externalLevel !== "--"
    ? ` External IO/supply domain: ${externalLevel}.` : " Follow the dedicated interface electrical standard; a CMOS voltage is not assigned by this table.";
  return { type, ...(correctedLabel ? { label: correctedLabel } : {}), description: `${correctedLabel ?? name}. ${detail.replace(/[.\s]+$/, "")}.${fpga && fpga !== "-" ? ` FPGA ball ${fpga}${bank && bank !== "-" ? `, bank ${bank}` : ""}.` : ""}${volt}${index === 0 && type === "output" && externalLevel === "5V" ? ` The FPGA side is 3.3 V; the 74HC245PW buffer is powered from VCC5P0.` : ""}${index === 5 && name === "VDD5V" && level === "5.5V" ? " The table column prints 5.5 V; the board power section and schematic identify this as the nominal 5 V rail." : ""}${page ? ` Manufacturer user-guide PDF page ${page}.` : " Schematic-verified supplementary connector."}` };
}
// Display placements follow the same-side photographs. They deliberately do not
// derive module anchors from the independent, approximate carrier footprint.
function physicalLayout(index,body,contacts) {
  const visible=Object.fromEntries(Object.entries(placements[index]).map(([name,p])=>[name,[...p]]));
  const visual={width:body[0],height:body[1],placements:visible};
  if(index===5) {
    // Carrier shown with its core removed; the actual core underside is at right.
    Object.assign(visible,{IO_J2:[48,5,.5,1,"x",0,true],IO_J1:[70,5,.5,1,"x",0,true],IO_J7:[6,42,.5,1,"y",0,true],IO_J10:[54,66,.5,1,"x",0,true],IO_J11:[85,67,.5,1,"x",0,true],IO_JP1:[17,5,2.54,1,"x"]});
    visual.width=120;visual.height=131;
  }
  for(const pin of contacts) {
    pin.vx=pin.x;pin.vy=pin.y;
    if(pin.connector&&!pin.connector.startsWith("CORE_")&&!(index===5&&/IO_J[34]$/.test(pin.connector))) [pin.vx,pin.vy]=position(Number(pin.number.split(".").at(-1)),contactTables[index][pin.connector].length,visible[pin.connector]);
    if(index===5&&pin.connector==="CORE_J4") {const n=Number(pin.number.split(".").at(-1))-1;pin.vx=88.875+n*1.25;pin.vy=87;pin.viewFine=true;pin.viewNote="Core-board component-side J4 JTAG socket, shown on the front view at lower right.";}
    if(index===5&&pin.connector?.startsWith("CORE_")&&pin.connector!=="CORE_J4") {
      const n=Number(pin.number.split(".").at(-1))-1;
      const first=pin.connector==="CORE_J1";
      pin.vx=(first?46:10)+(n%2?-.8:.8);pin.vy=98.5+Math.floor(n/2)*.5;
      pin.viewFine=true;pin.viewNote="Core-board underside view at right; 80-contact 0.5 mm board-to-board mating connector.";
    }
    if(index===5&&/IO_J[34]$/.test(pin.connector)) {
      const n=Number(pin.number.split(".").at(-1))-1,tx=pin.connector==="IO_J4";
      pin.vx=(tx?116:4)+(n%2?.7:-.7);pin.vy=11+Math.floor(n/2);
      pin.viewFine=true;pin.viewNote=`DisplayPort ${tx?"TX":"RX"} receptacle mating-face overlay at the physical port; 20 contacts in two rows.`;
    }
  }
  const powerCenters=[[3,19.5],[3.5,18],[157,22.5],[3,22],[4,14],[61,73],[50,4],[4,14]];
  const [px,py]=powerCenters[index],barrel=[1,4,6,7].includes(index);
  const plus=contacts.find(p=>p.id==="power-positive"),gnd=contacts.find(p=>p.id==="power-ground");
  plus.vx=px;plus.vy=py;gnd.vx=px+(barrel?2.1:2);gnd.vy=py;
  plus.viewNote=gnd.viewNote=barrel?"DC jack mating-face overlay at the physical input: center positive, outer sleeve return.":"USB-C power-input mating-face overlay at the physical port: VBUS and GND contact groups.";
  visual.power={x:px,y:py,barrel};
  return visual;
}
function physicalPorts(board,showLabels) {
  const {x,y,barrel}=board.visual.power;
  let art=barrel?circle(x,y,2.6,silver)+circle(x,y,2.15,"#142a2c",gold)+circle(x,y,.5,gold):rect(x-1,y-1.7,4.2,3.4,1,silver,"#e5e8dc")+rect(x-.6,y-1.1,3.4,2.2,.6,"#153438");
  if(showLabels)art+=label(x+5,y+4,barrel?"DC mating face":"USB-C power face",1.25,silk);
  if(board.index===5) {
    art+=`<g transform="translate(68 83)">${rect(0,0,48,48,1,green,"#a3b69b")+rect(19,1,10,5,.3,"#d7d6c2","#839a88")+rect(20,2,8,3,.2,"#263f38")+ic(12,15,20,19,"GW5AT-60")+ic(11,36,22,9,"DDR3")+(showLabels?label(24,11,"CORE FRONT • J4",1.8,silk):"")}</g>`;
    art+=`<g transform="translate(4 83)">${rect(0,0,48,48,1,green,"#a3b69b")+[[4,4],[44,4],[4,44],[44,44]].map(([hx,hy])=>circle(hx,hy,2.5,gold)+circle(hx,hy,1.3,green)).join("")+rect(5.2,14,1.6,23,.2,"#1c302d","#b2bfaa")+rect(41.2,14,1.6,23,.2,"#1c302d","#b2bfaa")+(showLabels?label(24,9,"CORE UNDERSIDE",2,silk)+label(24,41,"J2              J1",1.5,silk):"")}</g>`;
    for(const px of [4,116])art+=path(`M${px-2.3} 9h4.6v13h-3.3l-1.3-1.3Z`,silver,"#e4e8d6",.3)+rect(px-1.3,10,2.6,11,.15,"#183538");
    if(showLabels)art+=label(15,25,"DP RX face",1.6,silk)+label(104,25,"DP TX face",1.6,silk);
    art+=rect(39,25,3.5,25,.25,"#20352f","#8b9d83")+rect(76,25,3.5,25,.25,"#20352f","#8b9d83");
  }

  return art;
}
const boards = manufacturerEntries.map((entry, index) => {
  const body = bodies[index];
  const device = entry.name.match(/_(GW[^_]+)_V/)?.[1] ?? entry.device;
  const contacts = Object.entries(contactTables[index]).flatMap(([connector, rows]) => rows.map(row => {
    const [number, name] = row;
    const place = placements[index][connector];
    const [x,y] = position(number, rows.length, place);
    const [, , pitch, , , , fine] = place;
    return { id: `${connector.toLowerCase()}-${number}`, number: `${connector}.${number}`, label: name.split("/")[0], ...electrical(index, connector, row), x, y,
      size: fine ? (place[4] === "x" ? [.27, .85] : [.85, .27]) : pitch === 2 ? 1.4 : 1.7, drill: fine ? null : pitch === 2 ? .75 : 1, smd: Boolean(fine), connector };
  }));
  const supply = index === 0 || index === 5 ? "5V" : "12V";
  contacts.push({ id: "power-positive", number: "POWER.+", label: supply, type: "power_in", description: `${supply} positive supply at the complete adapter/cable input. Off-board reference termination; not a PCB pad number.`, x: -5, y: body[1] / 2 - 2, size: 2, drill: 1.1, offBoard: true },
    { id: "power-ground", number: "POWER.-", label: "GND", type: "power_in", description: "Adapter/cable supply return. Off-board reference termination; not a PCB pad number.", x: -5, y: body[1] / 2 + 2, size: 2, drill: 1.1, offBoard: true });
  const id = `gowin-${entry.name.toLowerCase().replaceAll("_", "-").replaceAll(".", "-")}`;
  const visual = physicalLayout(index,body,contacts);
  const scale = Math.min(6,660/Math.max(visual.width,visual.height));
  const margin=16;
  const width=Math.ceil(visual.width*scale+margin*2);
  const height=Math.ceil(visual.height*scale+margin*2+16);
  const component = { id, art: id, name: `GOWIN ${entry.name}`, shortName: entry.name.replace(/^DK_/, "").replace(/_V/, " v"), manufacturer: "GOWIN", category: "FPGA boards", referencePrefix: "U", subtitle: `${entry.deviceFamily} / ${device} / ${entry.status}`,
    description: `${roles[index]} ${versionNote[index]} All numbered expansion/control connector contacts in the referenced guide and schematic supplements are available. The video kit shows its core underside and numbered DP receptacle mating contacts. Other USB, HDMI, Ethernet, SMA/BNC and PCIe are complete cable/slot ports; internal DDR, clocks, LEDs and keys are not exposed as invented GPIO.`, source: entry.url,
    contactLayout:"physical", tags: ["gowin", "fpga", "dk", entry.deviceFamily.toLowerCase(), device.toLowerCase(), entry.name.toLowerCase()], width, height,
    pins: contacts.map(pin=>({ id:pin.id,number:pin.number,label:pin.label,type:pin.type,description:`${pin.description} ${pin.viewNote??"Component-side physical connector view."}`,x:Number((margin+pin.vx*scale).toFixed(4)),y:Number((margin+pin.vy*scale).toFixed(4)),surface:true })) };
  return { entry,index,id,body,contacts,component,scale,margin,visual };

});

function ic(x,y,w,h,text) {
  const legs=Array.from({length:Math.max(4,Math.round(w))},(_,i)=>line(x+(i+.5)*w/Math.max(4,Math.round(w)),y-.65,x+(i+.5)*w/Math.max(4,Math.round(w)),y+h+.65,"#a4afaa",.28)).join("");
  return legs+rect(x,y,w,h,.4,"#202c2c","#6f8d84")+circle(x+1,y+1,.35,"#aeb4a7")+label(x+w/2,y+h/2,text,Math.max(1,Math.min(2.2,w/7)),"#a1b3a8");
}
function metal(x,y,w,h,text="",blue=false) {return rect(x,y+.4,w,h,.6,"#7e9290")+rect(x,y,w,h,.6,silver,"#e0e3d9")+rect(x+.6,y+h*.76,w-1.2,h*.17,.2,blue?"#2886b7":"#263a3f")+(text?label(x+w/2,y+h*.4,text,Math.min(1.5,w/8),"#506463"):"");}
function coax(x,y,large=false) {return rect(x-3.2,y-3.2,6.4,6.4,.5,large?silver:gold)+circle(x,y,large?4.8:3.2,large?silver:gold,"#eff0d2")+circle(x,y,large?3.5:2.1,"#e7e9cf")+circle(x,y,.55,gold,"#b0ae80");}
function ribbon(x,y,w,h) {return rect(x,y,w,h,.3,"#d0d6c6","#8b9d91")+rect(x+.4,y+.4,w-.8,h*.3,.1,"#253c3d")+Array.from({length:Math.max(8,Math.round(w*1.8))},(_,i)=>line(x+.5+i*(w-1)/Math.max(7,Math.round(w*1.8)-1),y+h*.5,x+.5+i*(w-1)/Math.max(7,Math.round(w*1.8)-1),y+h-.2,gold,.14)).join("");}
function button(x,y) {return rect(x,y,4,4,.5,silver,"#e6e4d5")+circle(x+2,y+2,1.3,"#dcdcca");}
function headerArt(board,connector,showLabels) {
  if(connector.startsWith("CORE_") || (board.index===5 && /IO_J[34]$/.test(connector)))return "";
  const rows=contactTables[board.index][connector],place=board.visual.placements[connector];
  const [cx,cy,pitch,nrows,axis,angle=0,fine]=place;
  const length=Math.ceil(rows.length/nrows)*pitch+1.6;
  const width=nrows===1?(fine?2.6:2.7):(fine?3.5:pitch+2);
  const housing=rect(axis==="x"?-length/2:-width/2,axis==="x"?-width/2:-length/2,axis==="x"?length:width,axis==="x"?width:length,.3,fine?"#c6d0c0":"#20312f","#8ca295");
  return `<g transform="translate(${cx} ${cy}) rotate(${angle})">${housing}</g>`+rows.map(row=>{
    const[x,y]=position(row[0],rows.length,place);
    return fine?(axis==="x"?rect(x-.18,y-.6,.36,1.2,.06,gold):rect(x-.6,y-.18,1.2,.36,.06,gold)):circle(x,y,.7,gold,"#e0d2a4")+circle(x,y,.35,"#112d2a");
  }).join("")+(showLabels?label(cx,cy+(axis==="x"?4:length/2+2),connector.replace("IO_",""),1.9,silk):"");
}
function artwork(board,component,showLabels=true) {
  const {index,body,scale}=board;const[w,h]=body;
  let art=rect(0,.6,w,h,2,"#1b4e44")+rect(0,0,w,h,2,index===7?"#286f7d":green,"#8ea994");
  if(index===1||index===2){const a=index===1?45:36,b=index===1?79:85;art+=rect(0,h-10,w,10,0,"white")+rect(a,h-12,b-a,12,.2,green)+Array.from({length:index===1?32:32},(_,i)=>rect(a+.5+i*(b-a-1)/32,h-6,.65,6,.05,gold)).join("")+rect(a+(b-a)*.28,h-6,1.3,6,.1,"white");}
  const holes=[[4,4],[w-4,4],[4,h-(index===1||index===2?14:4)],[w-4,h-(index===1||index===2?14:4)]];
  art+=holes.map(([x,y])=>circle(x,y,2.6,gold,"#dbe0be")+circle(x,y,1.5,"#27473f")).join("");
  if(index===0){art+=ic(72,41,18,18,"GW3A")+ic(94,41,10,18,"DDR2")+ic(129,45,12,12,"MCU")+metal(-1,29,18,16,"ETH1")+metal(-1,48,18,16,"ETH2")+metal(-1,16,8,7,"5V")+metal(-1,74,8,7,"JTAG");for(let i=0;i<8;i++)art+=ic(44+i*16,27,7,5,"245")+ic(44+i*16,64,7,5,"245");art+=rect(26,14,11,7,.5,silver)+rect(28,15,5,5,.2,"#213a37")+button(42,h-8)+button(137,33)+label(88,67,"GOWIN",6,silk);}
  else if(index===1){art+=rect(-1,12,13,13,.8,"#172d2f",silver)+circle(0,18,3,"#0c1b25",gold)+metal(93,13,8,7,"JTAG")+ic(37,42,18,18,"GW5ART")+ic(70,14,13,13,"FTDI")+label(63,31,"CPHY / DPHY",2.5,silk)+rect(14,1,11,6,.4,silver)+rect(16,1.5,5,5,.2,"#213c37");for(let i=0;i<4;i++)art+=rect(23+i*16,5,9,8,.8,"#8f9e90")+label(27.5+i*16,9,"6R8",2.1,"#455d55");}
  else if(index===2){art+=ic(57,37,23,23,"GW5AT")+ic(58,8,16,22,"DDR3")+ic(82,8,16,22,"DDR3")+metal(153,18,9,9,"12V")+metal(-1,65,9,9,"JTAG")+label(80,68,"GOWIN",7,silk);for(let i=0;i<5;i++)art+=ic(115+(i%2)*18,34+Math.floor(i/2)*16,10,8,"PMIC");art+=rect(145,37,12,6,.4,silver)+rect(148,37.5,5,5,.2,"#213c37");for(let i=0;i<4;i++)art+=button(3,17+i*7);}
  else if(index===3){art+=ic(65,37,23,23,"GW5A-LV25")+ic(14,66,12,13,"FTDI")+ic(24,40,10,10,"FLASH")+metal(-1,18,8,8,"12V")+metal(-1,76,8,8,"JTAG")+ribbon(45,94,18,4)+ribbon(74,94,18,4)+button(44,87)+button(36,87)+label(68,74,"GOWIN",7,silk)+rect(18,84,5,9,.4,silver)+rect(26,84,5,9,.4,silver)+rect(19,85,3,6,.2,"#243d39")+rect(27,85,3,6,.2,"#243d39");for(let i=0;i<6;i++)art+=rect(57,39+i*2.6,1.8,.9,.15,"#e2c86b");for(let i=0;i<3;i++)art+=ic(14+i*10,7,7,7,"PMIC");}
  else if(index===4||index===7){art+=rect(-1,8,14,12,.8,"#1b2e2f",silver)+circle(0,14,3,"#152b30",gold)+metal(25,-1,8,8,"UART")+metal(88,-1,8,8,"MINI-B")+ic(69,34,23,23,"GW5AT-60")+ic(44,31,16,9,"DDR3")+ic(44,45,16,9,"DDR3")+metal(112,33,49,14,"SFP1")+metal(112,54,49,14,"SFP2")+metal(59,81,18,20,"ETH1")+metal(82,81,18,20,"ETH2")+metal(9,91,17,10,"HDMI")+metal(33,91,17,10,"HDMI")+coax(145,4,true)+coax(145,20,true)+coax(145,79,true)+coax(145,95,true)+label(83,28,"GOWIN",5,silk)+button(101,1)+rect(1,22,10,5,.5,silver)+rect(3,22.5,5,4,.2,"#223b37")+metal(-1,32,8,13);if(index===7)art+=ribbon(67,78,23,5);}
  else if(index===5){art+=metal(-1,8,10,15,"DP RX")+metal(-1,39,11,14,"HDMI")+metal(110,8,11,15,"DP TX")+metal(110,39,11,14,"HDMI")+metal(57,70,9,6,"5V");}
  else if(index===6){art+=rect(45,-1,10,12,.8,"#1b2b2d",silver)+circle(50,0,3,"#132a2e",gold)+metal(-1,40,9,11,"HDMI")+metal(-1,66,7,8,"JTAG")+ic(26,50,9,9,"GW5ART")+ic(17,71,11,12,"FTDI")+coax(48,33)+coax(56,33)+coax(48,44)+coax(56,44)+coax(4,81,true)+coax(56,81,true)+coax(15,104,true)+coax(45,104,true)+metal(27,102,8,5,"USB3");for(let i=0;i<5;i++)art+=rect(10+(i%3)*13,14+Math.floor(i/3)*14,7,6,.5,"#93a191")+label(13.5+(i%3)*13,17+Math.floor(i/3)*14,"R050",1.8,"#466254");}
  const components=Array.from({length:26},(_,i)=>{const x=15+((i*9.1)%(w-25)),y=18+((i*7.3)%(h-35));return rect(x,y,1.7,.9,.1,silver)+rect(x+.3,y,1.1,.9,.08,i%2?"#526b5a":"#a89973");}).join("");
  const titleY = [34,38,78,24,67,10,36,67][index];
  art+=components+Object.keys(contactTables[index]).map(con=>headerArt(board,con,showLabels)).join("")+label(w/2,titleY,board.entry.name,Math.min(2.3,w/50),silk);
  art+=physicalPorts(board,showLabels);
  const pads=board.contacts.map(pin=>{
    const x=pin.vx,y=pin.vy;
    const fine=pin.smd||pin.viewFine;
    const n=Number(pin.number.split(".").at(-1));
    const mark=pin.offBoard?circle(x,y,.45,gold):fine?rect(x-.13,y-.42,.26,.84,.03,gold):circle(x,y,.7,gold,"#e0d2a4")+circle(x,y,.34,"#112d2a");
    if(!showLabels||pin.offBoard)return mark;
    if(fine&&n!==1&&n!==2&&n%10!==0)return mark;
    const group=board.contacts.filter(p=>p.connector===pin.connector),cx=group.reduce((a,p)=>a+p.vx,0)/group.length;
    const left=x<=cx;
    return mark+label(x+(fine?0:left?-1.15:1.15),y-(fine?1.1:0),String(n),fine?.8:1.05,silk,fine?"middle":left?"end":"start");
  }).join("");
  return `<g transform="translate(${board.margin} ${board.margin}) scale(${scale})">${art}${pads}</g>`+(showLabels?label(component.width/2,component.height-7,"PHYSICAL CONNECTOR CONTACTS • HOVER FOR FUNCTIONS",8,"#5d7678"):"");

}
const gowinModernComponents=boards.map(b=>b.component);
const gowinModernArt=Object.fromEntries(boards.map(b=>[b.id,(component,showLabels=true)=>artwork(b,component,showLabels)]));
const gowinModernFootprints=Object.fromEntries(boards.map(b=>[b.id,{body:b.body,color:b.index===7?"#286f7d":green,modelHeight:18,pads:b.contacts.map(p=>({id:p.id,x:Number((p.x-b.body[0]/2).toFixed(4)),y:Number((p.y-b.body[1]/2).toFixed(4)),size:p.size,drill:p.drill,smd:p.smd,shape:p.smd?"rect":"circle"})),details:[[0,0,22,22,2.4,"#263231"]],note:"Reference connector carrier for the exact board revision named on this entry. Header/contact pitch follows the manufacturer guide; placement, board envelope and clearances are representative, not a vendor production land pattern. Fine-pitch contacts are breakout references rather than asserted connector lands. POWER.+/POWER.- are off-board input cable terminations. The video kit IO_J3/IO_J4 are off-board DisplayPort cable-contact breakouts using the guide’s mating-contact numbers. Other complete USB, HDMI, RJ45, SMA/BNC and PCIe ports are not duplicated as raw GPIO. Use the linked schematic and connector manufacturer CAD before fabrication."}]));
const gowinModernModels=Object.fromEntries(boards.map(b=>[b.id,{label:`GOWIN ${b.entry.name} official hardware references`,url:b.entry.sources[b.index===4?0:b.index===5?0:b.index===6?0:1].url}]));

export default defineFamily("gowin-modern", (gowinModernComponents).map(component => ({ component, render: (gowinModernArt)[component.art], footprint: (gowinModernFootprints)[component.id], model: gowinModernModels[component.id] })));
