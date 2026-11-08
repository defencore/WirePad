import { defineFamily } from "../registry.js";
import { circle, label, line, rect } from "../shared/svg.js";
import { gowinBoardComponent, gowinBoardArt, gowinBoardFootprint } from "../shared/gowin-board.js";
import boards from "../data/gowin-special/manifest.js";

// Component-side connector locations follow the exact manual's PCB Components photo.
// Cable contacts stay inside their illustrated socket; PCIe A/B rows adjoin the two edge faces.
function physicalSpecial(board) {
  const headers = Object.fromEntries(board.headers.map(header => [header.name, header]));
  const grid = (name, x, y, dx, dy, rows = 1, ax = 0, ay = 0) => {
    const header = headers[name];
    if (!header) throw new Error(`Unknown physical connector ${board.index}/${name}`);
    header.contactPoints = header.pins.map((_, index) => [x + Math.floor(index / rows) * dx + index % rows * ax, y + Math.floor(index / rows) * dy + index % rows * ay]);
    header.visual = [x, y, Math.abs(dy) > Math.abs(dx) ? "y" : "x"];
    header.visualRows = rows; header.visualPitch = Math.hypot(dx, dy) || 4; header.contactRadius = header.visualPitch < 2.2 ? 0.4 : 0.9;
  };
  const port = (name, x, y, w, h, rows = 1) => {
    const n = headers[name].pins.length;
    grid(name, x + 2, y + 2, (w - 4) / Math.max(1, Math.ceil(n / rows) - 1), 0, rows, 0, rows > 1 ? (h - 4) / (rows - 1) : 0);
  };
  const coax = (name, x, y) => grid(name, x, y, 5, 0);
  board.visualScale = 3.5;
  board.visualMargin = 32;
  if (board.index === 26) {
    board.ports = [["usb",-2,18,18,12,"UART"],["usb",-2,51,18,12,"USB"],["usb",-2,84,18,12,"JTAG"],["ethernet",25,-2,30,35,"ETH"],["socket",60,-2,27,81,"SFP1"],["socket",90,-2,27,81,"SFP2"],["ribbon",148,7,35,9,"MIPI"],["socket",142,30,20,20,"6G IN"],["socket",178,30,20,20,"6G OUT"],["socket",219,-2,20,26,"3G OUT"],["socket",267,43,35,20,"3G IN"],["socket",278,78,24,20,"12V"],["socket",-2,126,25,21,"HDMI TX"],["socket",-2,170,25,21,"HDMI RX"]];
    grid("J9",149,9,.82,0,2,0,4); grid("J247",70,110,3.8,0,2,0,5); grid("J7",70,125,3.8,0,2,0,5); grid("J254",43,153,4.1,0,2,0,5);
    grid("J2",123,28,0,5,2,4,0); grid("J5",83,192,5,0,2,0,5);
    headers.P1.contactPoints=headers.P1.numbers.map(number=>[66+(Number(number.slice(1))-1)*1.48,216+(number[0]==="B"?4:0)]);headers.P1.visual=[66,216,"x"];headers.P1.visualPitch=1.48;headers.P1.visualRows=2;
    port("P3",63,18,20,51,2); port("P4",93,18,20,51,2);
    port("HDMI_TX",0,128,19,16,2); port("HDMI_RX",0,172,19,16,2); port("RJ45",26,19,25,10);
    coax("J26-CABLE",288,87); coax("SDI0_IN",152,40); coax("SDI0_OUT",188,40); coax("SDI1_IN",287,53); coax("SDI1_OUT",229,10);
    port("J13",0,84,14,9); port("J14",0,51,14,9); port("J246",0,18,14,9);
    ["J262","J263","J264","J6"].forEach((name,i)=>grid(name,47,77+i*5.2,4,0));
    ["J259","J260","J261","J210"].forEach((name,i)=>grid(name,122,58+i*5.2,4,0));
    const rails={J230:[265,205],J229:[285,183],J236:[285,132],J231:[256,105],J241:[252,124],J223:[218,205],J224:[226,205],J225:[234,205],J227:[242,205],J245:[245,88],J232:[221,185],J233:[229,185],J234:[237,185],J242:[265,148],J243:[273,148],J239:[281,148],J240:[289,148]};
    for(const [name,[x,y]] of Object.entries(rails))grid(name,x,y,0,0);
  } else if (board.index === 27) {
    board.ports = [["socket",65,1,76,23,"FMC HPC400"],["socket",3,-2,19,65,"SFP1"],["socket",25,-2,19,65,"SFP2"],["usb",-2,170,19,12,"USB"],["ribbon",175,8,29,9,"MIPI"],["socket",278,20,24,19,"12V"]];
    const fmc=headers.J30;fmc.contactPoints=fmc.numbers.map(number=>[68+(Number(number.slice(1))-1)*1.78,4+"ABCDEFGHJK".indexOf(number[0])*1.85]);fmc.visual=[68,4,"x"];fmc.visualPitch=1.78;fmc.visualRows=10;fmc.contactRadius=.38;fmc.hideContactLabels=true;
    grid("J9",177,10,.62,0,2,0,4);grid("J2",51,4,0,4.1,2,4,0);
    grid("J1",45,104,0,4,2,4,0);grid("J8",45,82,0,4,2,4,0);grid("J24",45,60,0,4,2,4,0);
    grid("J3",5,147,0,4,2,4,0);grid("J4",5,68,0,4,2,4,0);grid("J222",5,90,0,4);grid("J5",5,109,0,4);grid("J60",5,128,0,4);
    headers.P1.contactPoints=headers.P1.numbers.map(number=>[52+(Number(number.slice(1))-1)*1.48,216+(number[0]==="B"?4:0)]);headers.P1.visual=[52,216,"x"];headers.P1.visualPitch=1.48;headers.P1.visualRows=2;
    port("P3",5,18,14,38,2);port("U24",27,18,14,38,2);port("J10",0,170,15,9);coax("DC12-CABLE",287,29);
    const sma={CN1:[159,126],CN2:[184,126],CN3:[211,93],CN4:[211,121],CN5:[159,184],CN6:[184,184],CN7:[211,155],CN8:[211,184],CN9:[135,42],CN10:[159,153],CN11:[159,42],CN12:[184,153],CN13:[108,184],CN14:[135,184],CN15:[184,42],CN16:[70,142],CN17:[70,170],CN18:[211,42],CN19:[159,94],CN20:[184,94]};
    for(const [name,[x,y]] of Object.entries(sma))coax(name,x,y);
    grid("J28",293,44,0,4.5,2,4,0);
    ["J6","J39","J38","J22","J21","J20"].forEach((name,i)=>grid(name,49,3+i*6,3.5,0));
    ["J210","J23","J220","J18","J19","J200"].forEach((name,i)=>grid(name,18,64+i*6,3.5,0));
    ["J6","J39","J38","J22","J21","J20"].forEach((name,i)=>{
      headers[name].hideContactLabels=true;
      headers[name].captionPosition=[61,3.5+i*6,"start"];
      headers[name].captionSize=3.2;
    });
    ["J210","J23","J220","J18","J19","J200"].forEach((name,i)=>{
      headers[name].hideContactLabels=true;
      headers[name].captionPosition=[29,64.5+i*6,"start"];
      headers[name].captionSize=3.2;
    });
    headers.J2.captionPosition=[45,20,"end"];
    headers.J2.captionSize=2.8;
    board.chipRect=[95,126,36,36];
    board.titleY=198;
    board.smaPositions=sma;
  } else if (board.index === 28) {
    grid("J13",45,20,4,0,2,0,5);grid("J11",45,231,4.2,0,2,0,5);
    port("J2",0,40,14,10);port("J3",0,72,14,10);port("J16",0,104,14,10);coax("J1-CABLE",287,30);
    coax("J10",122,8);coax("J8",151,8);coax("J9",181,8);coax("J14",212,8);coax("J15",242,8);
    const tp=[[34,34],[63,150],[92,144],[241,148],[34,245],[244,245],[245,174],[245,211]];tp.forEach(([x,y],i)=>grid(`TP${i+1}`,x,y,0,0));
  } else if (board.index === 29) {
    grid("J7",119,13,5.4,0,2,0,7);grid("J9",119,247,5.4,0,2,0,7);grid("J6",36,13,5.4,0,2,0,7);grid("J8",36,247,5.4,0,2,0,7);
    port("J4",0,65,14,10);port("J5",0,110,14,10);coax("J1-CABLE",287,55);
    const tp=[[225,228],[168,129],[183,151],[199,212],[211,160],[289,240],[23,30]];tp.forEach(([x,y],i)=>grid(`TP${i+1}`,x,y,0,0));
  } else if (board.index === 30) {
    grid("J7",104,4,2.4,0);grid("J6",20,105,0,5,2,4,0);grid("J3",24,4,1.7,0);grid("J4",40,105,0,5,2,4,0);
    grid("J14",21,213,2.35,0);grid("J13",108,213,2,0);grid("J12",208,198,4,0);grid("J17",18,184,5,0);
    port("J11",0,165,14,10);coax("J2-CABLE",287,30);
    ["HDMI1_RX","HDMI2_TX","HDMI3_RX","HDMI4_TX"].forEach((name,i)=>port(name,279,57+i*36,18,16,2));
  } else if (board.index === 34) {
    board.ports = [["usb",-2,82,18,12,"USB"],["usb",282,150,20,16,"JTAG"],["socket",-2,168,27,24,"12V"],["socket",-2,25,25,28,"HDMI"],["ribbon",135,7,49,10,"MIPI"],["socket",218,4,60,11,"GPIO"]];
    grid("J2",220,7,5.7,0,2,0,5);grid("J6",289,102,0,4.4,2,4,0);grid("J7",289,31,0,4.4,2,4,0);grid("J5",137,9,1.13,0,2,0,4);
    grid("J15",236,106,4,0);port("HDMI_TX",0,28,19,20,2);port("J9",0,82,14,10);port("J13",284,152,14,10);coax("J8-CABLE",9,181);
    ["J19","J20","J21","J22"].forEach((name,i)=>grid(name,105+i*10,39,0,5));
  }
  for(const header of board.headers)if(!header.contactPoints)throw new Error(`Unmapped connector ${board.index}/${header.name}`);
  board.extraArtwork=()=>extraArt(board);
}
boards.forEach(physicalSpecial);

function extraArt(board, showLabels = true) {
  const copper = "#bfa665", silk = "#e2e8d3", black = "#26322f";
  let svg = "";
  if (board.extra === "pcie" || board.extra === "sma-grid") {
    const edge = board.headers.find(header=>header.name==="P1").contactPoints;
    const left = Math.min(...edge.map(point=>point[0]))-2, right = Math.max(...edge.map(point=>point[0]))+2;
    svg += rect(left,212,right-left,21,0,copper) + edge.slice(0,32).map(([x])=>line(x,213,x,232,"#e0cc7e",0.65)).join("");
    if(board.extra!=="sma-grid")svg += rect(175,149,16,29,1,black,"#7e9680") + rect(194,149,16,29,1,black,"#7e9680") + label(183,164,"DDR3",3,silk) + label(202,164,"DDR3",3,silk);
  }
  if (board.extra === "sma-grid") {
    svg += Object.values(board.smaPositions).map(([x,y]) => {
      return circle(x,y,7,copper,"#d3c58b")+circle(x,y,3.4,"#c9b774")+circle(x,y,1.3,black);
    }).join("");
    if(showLabels) {
      svg += [..."ABCDEFGHJK"].map((row,index)=>label(66,4+index*1.85,row,1.6,silk,"end")).join("");
      svg += [1,10,20,30,40].map(number=>label(68+(number-1)*1.78,24,number,1.8,silk)).join("");
    }
  }
  if (board.extra === "audio") {
    svg += [60,110,160,210].map(x=>rect(x,183,17,18,1,black,"#97a08a")+label(x+8.5,192,"AUDIO",2.8,silk)).join("");
    svg += [145,176,207,238].map(x=>circle(x,8,6,copper)+circle(x,8,2.8,black)).join("");
  }
  if (board.extra === "dual") svg += rect(65,70,39,39,1,black,"#7c9188")+label(84,89,"GW1NSR4",4,silk);
  if (board.extra === "video") svg += rect(58,65,32,32,1,black,"#7c9188")+label(74,82,"ADV7513",3.4,silk)+rect(208,133,35,35,1,black,"#7c9188")+label(225,152,"ADV7611",3.4,silk);
  return svg;
}
function componentFor(board) {
  const component = gowinBoardComponent(board);
  component.category = "FPGA boards";
  component.tags = component.tags.filter(tag=>tag!=="gw1" && tag!=="gw2");
  component.tags.push(board.index===28 ? "gw1n" : board.index===29 || board.index===30 ? "gw2a" : "gw5a");
  component.description += ` Manufacturer reference: ${board.manual}.`;
  component.pins = component.pins.map(pin => {
    const signal = pin.label;
    if (/^(?:AlwaysOn|VCCR$|VCCT$|VCC3V3_AUX|DVCC|VCC1V2|12V$|VCC5V$)/.test(signal)) return {...pin,type:"power_out",description:pin.description+" Board supply/reference rail; observe the documented voltage and power-source configuration."};
    if (/^DC(?:5|12)V_IN/.test(signal)) return {...pin,type:"power_in",description:pin.description+" Adapter center-positive input. Use the board's specified supply voltage."};
    if (/^(?:ADCT|ADCV|H_ADC)/.test(signal)) return {...pin,type:"input",description:pin.description+" Dedicated analog input through the documented filter, not a GPIO contact."};
    if (/^RUN_/.test(signal)) return {...pin,type:"input",description:pin.description+" Power-rail enable input. Follow the documented sequencing."};
    if (/HORN_OUT|^[RL]_OUT$|SPDIF_OUT/.test(signal)) return {...pin,type:"output",description:pin.description+" External audio output; use the converter/amplifier electrical interface."};
    if (signal==="SPDIF_IN") return {...pin,type:"input",description:pin.description+" External coaxial audio input through the receiver."};
    return pin;
  });
  return component;
}

const gowinSpecialComponents = boards.map(componentFor);
const gowinSpecialArt = Object.fromEntries(boards.map(board=>[board.id,(component,labels=true)=>{
  let svg=gowinBoardArt({...board,extraArtwork:()=>extraArt(board,labels)},component,labels);

  if ([26,27,34].includes(board.index)) svg=svg.replaceAll("#174568","#235d48");
  if (board.index===29) svg=svg.replaceAll("#174568","#2b3336");
  return svg;
}]));
const gowinSpecialFootprints = Object.fromEntries(boards.map(board=>[board.id,gowinBoardFootprint(board)]));
const gowinSpecialModels = Object.fromEntries(boards.map(board=>[board.id,{
  label:"Manufacturer development-board schematic (PDF; no STEP supplied)",url:board.schematic,
  note:"Verified manufacturer circuit drawing. The WirePad carrier geometry and 3D illustration are approximate; this link is not a STEP model.",
}]));

export default defineFamily("gowin-special", (gowinSpecialComponents).map(component => ({ component, render: (gowinSpecialArt)[component.art], footprint: (gowinSpecialFootprints)[component.id], model: gowinSpecialModels[component.id] })));
