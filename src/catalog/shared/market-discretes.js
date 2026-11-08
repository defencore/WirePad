import { circle, label, line, path, rect } from "./svg.js";
import { marketBreadboardPart } from './market-breadboard-parts.js';

const metal = "#bac3bf", dark = "#242b2b", ink = "#dce1d7";
const lead = (x,y,w,h) => rect(x-w/2,y-h/2,w,h,.6,metal,"#e3e7df");
// Front/component-side package views. A caller supplies the manufacturer pin order;
// these layouts never infer polarity or terminal functions from the part name.
const shapes = {
  to92: {size:[136,182],body:[4.9,4.0],points:[[36,146],[68,146],[100,146]],pads:[[-1.27,0],[0,0],[1.27,0]],draw:()=>
    [36,68,100].map(x=>lead(x,123,5,64)).join("")+path("M25 39Q68 12 111 39V96H25Z",dark,"#5c6963")+rect(28,44,80,47,2,"#303936")},
  to126: {size:[146,220],body:[7.8,10.8],points:[[39,184],[73,184],[107,184]],pads:[[-2.28,0],[0,0],[2.28,0]],draw:()=>
    [39,73,107].map(x=>lead(x,162,6,61)).join("")+path("M28 24H118V139H28Z",dark,"#69796e")+circle(73,52,13,"#69766f","#a4afa4")+circle(73,52,8,"#eaf0e9")+rect(31,80,84,52,2,"#303936")},
  to220: {size:[156,238],body:[10.2,15.5],points:[[43,202],[78,202],[113,202]],pads:[[-2.54,0],[0,0],[2.54,0]],draw:spec=>
    [43,78,113].map(x=>lead(x,171,7,76)).join("")+rect(28,17,100,78,3,spec.insulatedTab?"#4c5650":metal,"#dce3d7")+circle(78,41,14,"#78867d")+circle(78,41,9,"#eaf0e9")+
    rect(24,83,108,72,3,dark,"#617167")+rect(28,87,100,63,2,"#303936")},
  to247: {size:[188,254],body:[15.6,20],points:[[42,221],[94,221],[146,221]],pads:[[-5.45,0],[0,0],[5.45,0]],draw:()=>
    [42,94,146].map(x=>lead(x,190,8,77)).join("")+rect(22,17,144,143,4,dark,"#617167")+circle(94,42,14,"#7b8780")+circle(94,42,9,"#eaf0e9")+rect(28,72,132,81,2,"#303936")},
  to220ac: {size:[156,238],body:[10.2,15.5],points:[[43,202],[113,202]],pads:[[-2.54,0],[2.54,0]],draw:()=>
    [43,113].map(x=>lead(x,171,7,76)).join("")+rect(28,17,100,78,3,metal,"#dce3d7")+circle(78,41,14,"#78867d")+circle(78,41,9,"#eaf0e9")+rect(24,83,108,72,3,dark,"#617167")},
  dpak: {size:[172,188],body:[6.6,6.1],points:[[42,155],[86,30],[130,155]],pads:[[-2.28,3.7],[0,-1.5],[2.28,3.7]],smd:true,draw:()=>
    rect(48,17,76,51,1,metal,"#e1e7dd")+[42,130].map(x=>lead(x,139,15,44)).join("")+rect(28,60,116,65,2,dark,"#66766c")},
  to92Bottom: {size:[170,166],body:[4.8,4.8],points:[[76,42],[76,83],[76,124]],pads:[[0,-1.27],[0,0],[0,1.27]],draw:()=>
    path("M41 23H91A60 60 0 0 1 91 143H41Z",dark,"#6d7c70")},
  sot23: {size:[136,156],body:[2.9,1.3],points:[[31,118],[105,118],[68,25]],pads:[[-.95,1.1],[.95,1.1],[0,-1.1]],smd:true,draw:()=>
    lead(31,111,16,31)+lead(105,111,16,31)+lead(68,32,16,31)+rect(21,49,94,47,3,dark,"#66756b")},
  axial: {size:[206,115],body:[5.2,2.7],points:[[23,58],[183,58]],pads:[[-5.08,0],[5.08,0]],draw:spec=>
    lead(45,58,55,4)+lead(161,58,55,4)+rect(66,37,74,42,9,spec.glass?"#bd794b":dark,"#6c7a6d")+(!spec.bidirectional?rect(70,38,10,40,1,spec.glass?"#5a3d35":"#c3c5b8"):"")},
  sma: {size:[206,124],body:[4.6,2.6],points:[[29,62],[177,62]],pads:[[-2.55,0],[2.55,0]],smd:true,draw:()=>
    lead(40,62,43,24)+lead(166,62,43,24)+rect(58,35,90,54,3,dark,"#67776c")+rect(65,36,10,52,.5,"#c7cbbb")},
  smb: {size:[206,132],body:[4.6,3.6],points:[[29,66],[177,66]],pads:[[-2.65,0],[2.65,0]],smd:true,draw:spec=>
    lead(40,66,43,27)+lead(166,66,43,27)+rect(58,30,90,72,3,dark,"#67776c")+(!spec.bidirectional?rect(65,31,10,70,.5,"#c7cbbb"):"")},
  smc: {size:[206,148],body:[7.0,6.0],points:[[27,74],[179,74]],pads:[[-3.85,0],[3.85,0]],smd:true,draw:()=>
    lead(37,74,40,30)+lead(169,74,40,30)+rect(55,24,96,100,3,dark,"#67776c")+rect(63,25,10,98,.5,"#c7cbbb")},
  sod123: {size:[184,106],body:[2.7,1.6],points:[[25,53],[159,53]],pads:[[-1.7,0],[1.7,0]],smd:true,draw:()=>
    lead(34,53,32,18)+lead(150,53,32,18)+rect(51,28,82,50,2,dark,"#67776c")+rect(57,29,9,48,.5,"#c7cbbb")},
  bridgeInline: {size:[216,201],body:[20,16],points:[[39,166],[85,166],[131,166],[177,166]],pads:[[-7.62,0],[-2.54,0],[2.54,0],[7.62,0]],draw:(spec,points)=>
    points.map(([x])=>lead(x,144,6,58)).join("")+path(spec.beveledRight?"M19 26H182L197 41V123H19Z":"M19 41L34 26H197V123H19Z",dark,"#68786d")+(spec.mountingHole?circle(108,47,9,"#65756c")+circle(108,47,5,"#e8eee8"):"")},
  bridgeDip: {size:[190,160],body:[8.3,6.4],points:[[31,112],[31,48],[159,48],[159,112]],pads:[[-3.81,2.54],[-3.81,-2.54],[3.81,-2.54],[3.81,2.54]],draw:()=>
    [48,112].map(y=>lead(40,y,39,8)+lead(150,y,39,8)).join("")+rect(50,25,90,109,4,dark,"#68786d")},
  bridgeSmd: {size:[190,160],body:[4.7,3.9],points:[[31,112],[31,48],[159,48],[159,112]],pads:[[-2.9,1.27],[-2.9,-1.27],[2.9,-1.27],[2.9,1.27]],smd:true,draw:()=>
    [48,112].map(y=>lead(40,y,39,12)+lead(150,y,39,12)).join("")+rect(50,25,90,109,4,dark,"#68786d")},
  bridgeSquare: {size:[206,193],body:[28.6,28.6],points:[[43,43],[163,43],[163,147],[43,147]],pads:[[-10,-10],[10,-10],[10,10],[-10,10]],draw:(_spec,points)=>
    path("M20 38L38 20H186V170H20Z","#939f97","#dce4d9")+path("M28 42L42 28H178V162H28Z",dark,"#617168")+circle(103,95,17,"#829289")+circle(103,95,11,"#edf1eb")+points.map(([x,y])=>lead(x,y,13,28)).join("")},
  bridgeRound: {size:[180,180],body:[9.4,9.4],points:[[58,50],[122,50],[122,120],[58,120]],pads:[[2.54,-2.54],[-2.54,-2.54],[-2.54,2.54],[2.54,2.54]],draw:()=>
    path("M57 21H123A72 72 0 1 1 57 21Z",dark,"#617168")},
  led5: {size:[142,196],body:[5.0,5.0],points:[[52,160],[90,160]],pads:[[-1.27,0],[1.27,0]],draw:spec=>
    lead(52,137,5,63)+lead(90,137,5,63)+path("M32 97V58A39 39 0 0 1 110 58V97Z",spec.color??"#bc4d43","#b9c1ae")+rect(28,96,86,9,2,spec.color??"#bc4d43","#b9c1ae")+line(105,66,105,91,"#e5ded1",2)},
  led3: {size:[136,186],body:[3.0,3.0],points:[[49,151],[87,151]],pads:[[-1.27,0],[1.27,0]],draw:spec=>
    lead(49,128,4,63)+lead(87,128,4,63)+path("M40 91V61A28 28 0 0 1 96 61V91Z",spec.color??"#d5d8bc","#a4ada3")+rect(36,90,64,8,1,spec.color??"#d5d8bc","#a4ada3")+line(92,66,92,84,"#f7f6e8",2)},
  photoFlat: {size:[160,178],body:[4.3,4.65],points:[[80,24],[80,151]],pads:[[0,-2.54],[0,2.54]],draw:()=>
    lead(80,34,7,32)+lead(80,141,7,32)+rect(32,49,96,78,1,"#c9bdb2","#e7e3d9")+rect(38,55,84,66,0,"#d5c8ba")+rect(45,60,70,56,0,"#312a28","#777067")+line(48,63,48,114,"#ac9979",1)+line(80,116,80,125,"#e8ddc3",2)},
};

export function marketDiscrete(spec, { breadboard = false } = {}) {
  const shape=shapes[spec.shape];
  if(!shape)throw new Error(`Unknown discrete package view ${spec.shape}`);
  const points=spec.contactPositions??shape.points;
  if(spec.pins.length!==points.length)throw new Error(`${spec.part}: contact count differs from package drawing`);
  const [width,height]=shape.size;
  const narrowLeadRow=spec.shape==="to92"||spec.shape==="to92Bottom";
  const pins=spec.pins.map(([name,type,description],i)=>({id:`p${i+1}`,number:String(spec.numbers?.[i]??i+1),label:name,type,description,
    x:points[i][0],y:points[i][1],surface:true}));
  const component={id:spec.id,art:spec.id,name:spec.name??`${spec.manufacturer} ${spec.part}`,shortName:spec.part,manufacturer:spec.manufacturer,
    category:spec.category??"Semiconductors",referencePrefix:spec.referencePrefix??"Q",subtitle:spec.subtitle,source:spec.source,
    description:`${spec.description} ${spec.viewNote??"Front/component-side view; lead order follows the cited manufacturer drawing."} Selected native lands and generated 3D are approximate; verify the exact package revision before fabrication.`,
    tags:["diy","starter kit","arduino",spec.part.toLowerCase(),spec.packageName.toLowerCase(),...(spec.tags??[])],
    width,height,contactLayout:"physical",pins,references:spec.references,availability:spec.availability,
    ...(spec.internalConnections?{internalConnections:spec.internalConnections}:{})};
  const pads=pins.map((p,i)=>({id:p.id,x:(spec.padPositions??shape.pads)[i][0],y:(spec.padPositions??shape.pads)[i][1],
    ...(shape.smd?{smd:true,size:spec.padSizes?.[i]??spec.padSize??[1.2,1.1]}:{size:spec.padSizes?.[i]??spec.padSize??(narrowLeadRow ? 1 : 1.8),drill:spec.drill??(narrowLeadRow ? .6 : .9)}),square:i===0}));
  const body=spec.body??shape.body;
  const footprint={body,color:spec.color??dark,pads,modelHeight:spec.modelHeight??2.5,
    note:`Selected reference lands for ${spec.part}, ${spec.packageName}. Pin functions and orientation are manufacturer-reviewed; lead forming, pad sizes, clearance and full mounting pattern are not production-verified. ${spec.footprintNote??""}`};
  const render=(part,showLabels=true)=>shape.draw(spec,points)+(["led3","led5","photoFlat"].includes(spec.shape)?"":spec.shape!=="to92Bottom"?label(width/2,["to220","to220ac","to247"].includes(spec.shape)?112:spec.shape==="to126"?99:spec.shape==="to92"?68:spec.shape.startsWith("bridge")?81:height/2,spec.marking??spec.part,7.5,ink):label(117,85,spec.marking??spec.part,7.5,ink))+
    part.pins.map((p,i)=>{
      const [x,y]=points[i];
      const pad=shape.smd?rect(x-6,y-4,12,8,.4,"#d8bd7c","#f0deaa"):circle(x,y,3.2,"#c8b278","#eddfb4");
      const above=spec.shape==="sot23"&&i===2,left=["axial","sma","smb","smc","sod123"].includes(spec.shape)&&i===0,right=["axial","sma","smb","smc","sod123"].includes(spec.shape)&&i===1;
      const insideDarkBody=["to92Bottom","bridgeRound","bridgeSquare"].includes(spec.shape);
      const labelOffset=spec.shape==="bridgeSquare"?(y<height/2?24:-24):spec.shape==="to92Bottom"?3:above?-12:left||right?16:13;
      return `<g data-contact="${p.id}">${pad}${showLabels?label(x+(spec.shape==="to92Bottom"?-17:0),y+labelOffset,p.number===p.label?p.label:`${p.number} ${p.label}`,7,insideDarkBody?ink:"#334c42"):""}</g>`;
    }).join("")+(["to92Bottom","bridgeRound"].includes(spec.shape)?label(width/2,height-7,spec.shape==="bridgeRound"?"BOTTOM VIEW · NATIVE X MIRRORED":"BOTTOM VIEW",5.5,"#334c42"):"");
  const mounting = breadboard ? marketBreadboardPart(component, spec, body) : undefined;
  return {component,render,footprint,...(spec.model?{model:spec.model}:{}),...(mounting?{mounting}:{})};
}
