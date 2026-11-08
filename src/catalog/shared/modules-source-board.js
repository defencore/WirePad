import { circle, label, path, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';
import { sourceModuleMounting } from './source-module-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';

// Source coordinates are millimeters, centered on the board, with Y downward.
// Artwork, physical anchors and native contacts share this coordinate system.
export function sourceModule(spec) {
  const { width: boardWidth, height: boardHeight } = spec.board;
  if (![boardWidth, boardHeight].every(n => Number.isFinite(n) && n > 0) || !spec.contacts?.length) throw new Error(`Invalid module geometry: ${spec.id}`);
  const scale = spec.scale ?? Math.min(10, 630 / Math.max(boardWidth, boardHeight));
  if (!Number.isFinite(scale) || scale <= 0) throw new Error(`Invalid module scale: ${spec.id}`);
  const margin = 52, top = 24;
  const artworkBounds = [spec.artworkBounds, spec.backArtworkBounds].filter(Boolean);
  if (artworkBounds.some(b => !Array.isArray(b) || b.length !== 4 || !b.every(Number.isFinite) || b[0] > b[2] || b[1] > b[3])) throw new Error(`Invalid module artwork bounds: ${spec.id}`);
  const extentX = Math.max(boardWidth / 2, ...spec.contacts.map(p => Math.abs(p.x) + (p.size?.[0] ?? 1.7) / 2), ...artworkBounds.flatMap(b => [Math.abs(b[0]), Math.abs(b[2])]));
  const extentY = Math.max(boardHeight / 2, ...spec.contacts.map(p => Math.abs(p.y) + (p.size?.[1] ?? 1.7) / 2), ...artworkBounds.flatMap(b => [Math.abs(b[1]), Math.abs(b[3])]));
  const hasBack = spec.contacts.some(p => p.back) || Boolean(spec.backArtwork);
  const separation = (extentY * 2 + 8) * scale;
  const width = Math.ceil(extentX * 2 * scale + margin * 2);
  const height = Math.ceil(extentY * 2 * scale + top * 2 + 26 + (hasBack ? separation : 0));
  const cx = width / 2, cy = top + extentY * scale;
  const contacts = spec.contacts.map((p, i) => {
    if (![p.label, p.type, p.description].every(v => typeof v === 'string' && v.trim()) || ![p.x, p.y].every(Number.isFinite)) throw new Error(`Missing physical contact evidence: ${spec.id}/${i}`);
    if (p.number === undefined || p.number === null || !String(p.number).trim() || (p.size && (p.size.length !== 2 || !p.size.every(n => Number.isFinite(n) && n > 0))) || (p.drill !== undefined && (!Number.isFinite(p.drill) || p.drill <= 0))) throw new Error(`Invalid physical terminal: ${spec.id}/${i}`);
    const number = String(p.number), id = p.id ?? `p-${number.toLowerCase().replace(/\+/g,'plus').replace(/[^a-z0-9_-]/g, '-')}`;
    const distances = { left: p.x + boardWidth / 2, right: boardWidth / 2 - p.x, top: p.y + boardHeight / 2, bottom: boardHeight / 2 - p.y };
    const side = p.side ?? Object.keys(distances).reduce((a,b) => distances[a] < distances[b] ? a : b);
    return { ...p, id, number, side, size: p.size ?? [1.7,1.7] };
  });
  const canvasPoint = p => [cx + p.x * scale * (p.back ? -1 : 1), cy + (p.back ? separation : 0) + p.y * scale];
  const pins = contacts.map(p => ({ id:p.id, number:p.number, label:p.label, type:p.type,
    description:`${p.number} — ${p.description}${p.back ? ' Underside contact, shown in the separate mirrored view.' : ''}`,
    x:canvasPoint(p)[0], y:canvasPoint(p)[1], surface:true,
    edge:p.back && p.side==='left'?'right':p.back && p.side==='right'?'left':p.side }));
  const sourceNote = spec.footprintMode === 'reference'
    ? 'The native asset is a reference contact carrier; selected copper and drill geometry are approximate.'
    : 'The native contact reference follows the cited manufacturer board CAD; it is not a complete production mating footprint.';
  const component = { id:spec.id, art:spec.id, name:spec.name, shortName:spec.sku,
    manufacturer:spec.manufacturer, category:spec.category ?? 'Sensors', referencePrefix:spec.referencePrefix ?? 'U',
    source:spec.source, references:spec.references ?? [], revision:spec.revision,
    subtitle:`${spec.sku} / ${spec.revision ?? 'cited manufacturer revision'}`,
    description:`${spec.description} ${sourceNote} Small component finishes and markings are representative; generated 3D geometry is approximate.`,
    tags:['module','modules expansion',spec.manufacturer.toLowerCase(),spec.sku.toLowerCase(),...(spec.tags ?? [])],
    availability:spec.availability, provenance:spec.provenance, module:true,
    contactLayout:'physical', width, height, pins,
    ...(spec.internalConnections ? {internalConnections:spec.internalConnections} : {}) };
  const minimumPitch = contacts.reduce((m,p,i) => Math.min(m,...contacts.slice(i+1).map(q => Math.hypot(p.x-q.x,p.y-q.y)).filter(d=>d>1e-6)),Infinity);
  const compact = spec.numericLabels ?? (contacts.length > 20 || minimumPitch < 1.5);
  const captionSize = Math.min(7, Number.isFinite(minimumPitch) ? minimumPitch * scale * .62 : 7);
  const render = (part, labels = true, frontOnly = false) => {
    const board = spec.board.outline ? path(spec.board.outline,spec.board.color ?? '#246545','#8caaa0',.16)
      : rect(-boardWidth/2,-boardHeight/2,boardWidth,boardHeight,spec.board.radius ?? .8,spec.board.color ?? '#246545','#8caaa0');
    const holes = (spec.holes ?? []).map(h => circle(h.x,h.y,h.drill/2,'#eef3ed','#a7ad9a')).join('');
    const padsFor = back => contacts.filter(p => Boolean(p.back)===back || !back && frontOnly &&
      spec.mountingReview?.projectRearContacts && p.back && p.drill && !p.smd).map(p => {
      const [w,h]=p.size;
      const metal = p.shape==='circle' || (!p.smd && p.shape!=='rect' && p.shape!=='oval')
        ? circle(p.x,p.y,Math.min(w,h)/2,p.metalColor ?? '#d4bb75','#efe1af')
        : rect(p.x-w/2,p.y-h/2,w,h,p.shape==='oval'?Math.min(w,h)/2:.04,p.metalColor ?? '#d4bb75','#efe1af');
      const shape = metal + (p.drill ? circle(p.x,p.y,p.drill/2,'#203b35') : '') +
        (p.screwSlot ? path(`M${p.x} ${p.y-h*.34}v${h*.68}`,'none','#47565c',.16) : '');
      return `<g data-contact="${escapeText(p.id)}" stroke-width="0.06"><title>${escapeText(p.number+' '+p.label+': '+p.description)}</title>${shape}</g>`;
    }).join('');
    const captions = labels ? contacts.filter(p => !frontOnly || !p.back).map(p => {
      let dense = compact ? p.caption ?? p.number : p.caption ?? p.label;
      if (!dense) return '';
      if (String(dense).length>9 && p.caption===undefined) dense=p.number.split('.').at(-1);
      const side=p.back && p.side==='left'?'right':p.back && p.side==='right'?'left':p.side;
      const [px,py]=canvasPoint(p), centerY=cy+(p.back?separation:0);
      const x=px+(side==='left'?-(p.size[0]*scale/2+4):side==='right'?p.size[0]*scale/2+4:0);
      const y=py+(side==='top'?-(p.size[1]*scale/2+captionSize/2+3):side==='bottom'?p.size[1]*scale/2+captionSize/2+3:0);
      const inside = x>cx-boardWidth*scale/2 && x<cx+boardWidth*scale/2 && y>centerY-boardHeight*scale/2 && y<centerY+boardHeight*scale/2;
      const anchor=side==='left'?'end':side==='right'?'start':'middle';
      const font=Math.max(2,Math.min(captionSize,(margin-p.size[0]*scale/2-8)/(Math.max(1,String(dense).length)*.62)));
      const textWidth=String(dense).length*font*.62;
      const textLeft=x-(anchor==='end'?textWidth:anchor==='middle'?textWidth/2:0);
      return (inside?rect(textLeft-.8,y-font/2-.8,textWidth+1.6,font+1.6,.6,'#203d45'):'')+
        label(x,y,dense,font,inside?'#f4ecd3':'#354e58',anchor);
    }).join('') : '';
    const front=`<g transform="translate(${cx} ${cy}) scale(${scale})" stroke-width="0.1">${board}${holes}${spec.artwork ?? ''}${padsFor(false)}</g>`;
    const back=hasBack&&!frontOnly?`<g transform="translate(${cx} ${cy+separation}) scale(${-scale} ${scale})" stroke-width="0.1">${board}${holes}${spec.backArtwork ?? ''}${padsFor(true)}</g>`+
      label(width/2,cy+extentY*scale+separation/2,'UNDERSIDE BELOW · MIRRORED',6,'#405c63'):'';
    if (frontOnly) {
      const rearHardware = (spec.mountingReview?.rearOverhangRegions ?? []).map(region =>
        rect(region.x, region.y, region.width, region.height, .1, '#c49ac122', '#9b4899') +
        label(region.x + region.width / 2, region.y + region.height / 2, 'BACK', Math.min(.7, region.width / 3), '#8e368d')).join('');
      const rearProjection = rearHardware ? `<g class="rear-hardware-overlay" pointer-events="none" aria-hidden="true" transform="translate(${cx} ${cy}) scale(${scale})" stroke-width=".12" stroke-dasharray=".4 .25"><title>BACK HARDWARE · projecting rear packages shown through the PCB at their physical source coordinates.</title>${rearHardware}</g>` : '';
      const rear = spec.mountingReview?.projectRearContacts ? rearContactOverlay(contacts
        .filter(contact => contact.back && (contact.smd || !contact.drill))
        .map(contact => ({ ...contact, face: 'rear', x: cx + contact.x * scale, y: cy + contact.y * scale })),
      { radius: .4 * scale, labelSize: .5 * scale }) : '';
      return rearProjection + front + rear + captions;
    }
    return front+back+captions+label(width/2,9,spec.sku,7,'#405c63')+
      label(width/2,height-9,spec.viewLabel ?? (hasBack?'COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE':'COMPONENT-SIDE CONTACT VIEW'),6,'#405c63');
  };
  const footprint = { body:[boardWidth,boardHeight], color:spec.board.color ?? '#246545', modelHeight:spec.modelHeight ?? 5,
    pads:(spec.footprintPads ?? contacts).map(p => ({id:p.id, x:p.x, y:p.y, size:p.size,
      ...(p.smd || !p.drill ? {smd:true,shape:p.shape ?? 'rect'} : {drill:p.drill,shape:p.shape ?? 'circle'})})),
    note:`${sourceNote} ${spec.footprintNote} Source board outline ${boardWidth} × ${boardHeight} mm. Contact numbering and schematic functions remain independent of approximate component heights and generated WRL artwork.` };
  const mounting = sourceModuleMounting(spec, contacts, { cx, cy, scale, renderMounted: (part, labels = true) => render(part, labels, true) });
  return {component,render,footprint,...(spec.cad ? {model:spec.cad} : {}),...(mounting ? {mounting} : {})};
}
