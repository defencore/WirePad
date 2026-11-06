import { componentArt, componentById } from './catalog.js';
import { escapeText, partName } from './canvas.js';
import { icon } from './icons.js';
import { footprintNote, footprintPreview, kicadFootprint, kicadModel, kicadSymbol, modelFor, modelPreview, symbolPreview } from './kicad.js';

const palette = [
  ['#e35050', 'Red'], ['#d08722', 'Orange'], ['#eab739', 'Yellow'], ['#12946d', 'Green'],
  ['#2c83d9', 'Blue'], ['#8b5cc7', 'Violet'], ['#46536a', 'Slate'], ['#1b2531', 'Black'],
];

const assets = {
  symbol: { preview: symbolPreview, create: kicadSymbol, extension: 'kicad_sym' },
  pcb: { preview: footprintPreview, create: kicadFootprint, extension: 'kicad_mod' },
  model: { preview: modelPreview, create: kicadModel, extension: 'wrl' },
};

export function assetFile(component, tab) {
  const { create, extension } = assets[tab];
  return { contents: create(component), filename: `${component.id}.${extension}` };
}

export function previewAsset(component, tab) {
  return tab === 'part' ? componentArt(component) : assets[tab].preview(component);
}

function sourceLink(url, label) {
  return `<a class="asset-source" href="${escapeText(url)}" target="_blank" rel="noopener noreferrer">${icon('external')} ${escapeText(label)}</a>`;
}

function assetDetails(component, tab) {
  const actions = {
    symbol: 'Download .kicad_sym',
    pcb: 'Download .kicad_mod',
    model: 'Download .wrl',
  };
  const notes = {
    symbol: 'Add the symbol file to a KiCad symbol library. The associated footprint uses the WirePad library nickname.',
    pcb: footprintNote(component),
    model: 'Approximate package or carrier geometry for placement. Store the model in the KiCad project’s WirePad.3dshapes folder.',
  };
  const model = tab === 'model' ? modelFor(component) : null;
  return `<p class="asset-note">${escapeText(notes[tab])}</p>
    <div class="asset-actions"><button class="button" type="button" data-asset="${tab}">${icon('download')} ${actions[tab]}</button></div>
    ${model ? sourceLink(model.url, model.label) : ''}`;
}

export function inspectPart(part, tab) {
  const component = componentById.get(part.componentId);
  const tabs = [['part', 'Module'], ['symbol', 'Symbol'], ['pcb', 'PCB'], ['model', '3D']];
  const preview = tab === 'part' ? componentArt(component, { labels: false }) : assets[tab].preview(component);
  const pinList = component.pins.map(pin => `<div><dt>${escapeText(pin.label)}</dt><dd>${escapeText(pin.description)}</dd></div>`).join('');
  return `<button type="button" class="inspector-preview" data-action="preview" aria-label="Open larger preview" title="Open larger preview">${preview}<span aria-hidden="true">${icon('fit')}</span></button>
    <div class="inspector-tabs" role="tablist" aria-label="Component assets">
      ${tabs.map(([id, text]) => `<button type="button" role="tab" id="tab-${id}" aria-controls="asset-panel" aria-selected="${tab === id}" tabindex="${tab === id ? 0 : -1}" data-tab="${id}">${text}</button>`).join('')}
    </div>
    <div id="asset-panel" role="tabpanel" aria-labelledby="tab-${tab}">
      <h3 class="inspector-name">${escapeText(component.name)}</h3>
      <span class="category-tag">${escapeText(component.category)}</span>
      ${tab === 'part' ? `<p class="component-description">${escapeText(component.description)}</p>
        ${component.source ? sourceLink(component.source, 'Reference documentation') : ''}
        <div class="part-controls">
          <label class="part-label">Canvas label<input id="part-label" value="${escapeText(part.label ?? '')}" maxlength="60" placeholder="${escapeText(component.name)}"></label>
          <button class="button compact" type="button" data-action="rotate" aria-label="Rotate component" title="Rotate component">${icon('rotate')}</button>
          <button class="button compact danger" type="button" data-action="delete" aria-label="Remove component" title="Remove component">${icon('trash')}</button>
        </div>
        <div class="section-heading"><span>PINOUT</span><span>${component.pins.length} PINS</span></div>
        <dl class="pins">${pinList}</dl>` : assetDetails(component, tab)}
    </div>`;
}

function endpointName(project, endpoint) {
  if (endpoint.junctionId) return 'Wire junction';
  if (endpoint.wireId) return 'Existing wire';
  const part = project.parts.find(item => item.id === endpoint.partId);
  const component = componentById.get(part.componentId);
  const pin = component.pins.find(item => item.id === endpoint.pinId);
  return `${partName(part, component)} · ${pin.label}`;
}

export function inspectWire(project, wire, pending, currentColor) {
  const color = wire?.color ?? currentColor;
  const endpoints = wire ? [wire.from, wire.to] : pending ? [pending.from] : [];
  return `<h3 class="inspector-name">${wire ? 'Wire' : 'New wire'}</h3>
    <p class="component-description">${wire ? 'Drag a segment sideways on the canvas to adjust its route. Use Wire to join another connection.' : 'Click a pin, a wire, or a junction to start or finish. Click the canvas to add a bend.'}</p>
    ${endpoints.length ? `<div class="wire-endpoints">${endpoints.map(endpoint => `<div>${escapeText(endpointName(project, endpoint))}</div>`).join('')}</div>` : ''}
    <div class="section-heading">WIRE COLOR</div>
    <div class="palette">
      ${palette.map(([value, label]) => `<button type="button" class="swatch" data-color="${value}" style="--swatch:${value}" aria-label="${label}" title="${label}" aria-pressed="${value === color}"><span></span></button>`).join('')}
      <input type="color" value="${color}" id="custom-color" title="Custom color" aria-label="Custom wire color">
    </div>
    ${wire ? `<div class="asset-actions"><button class="button danger" type="button" data-action="delete">${icon('trash')} Remove wire</button></div>` : ''}`;
}

export function inspectEmpty() {
  return `<div class="inspector-placeholder">${icon('cursor')}<strong>Nothing selected</strong><span>Select a component to inspect its pinout, or select a wire to change its color.</span></div>`;
}
