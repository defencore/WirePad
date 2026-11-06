import { componentArt, componentById } from './catalog.js';
import { partName } from './canvas.js';
import { downloadBlob } from './export.js';
import { icon } from './icons.js';
import { footprintNote, footprintPreview, kicadFootprint, kicadModel, kicadSymbol, modelFor, modelPreview, symbolPreview } from './kicad.js';
import { escapeText } from './text.js';

const palette = [
  ['#e35050', 'Red'], ['#d08722', 'Orange'], ['#eab739', 'Yellow'], ['#12946d', 'Green'],
  ['#2c83d9', 'Blue'], ['#8b5cc7', 'Violet'], ['#46536a', 'Slate'], ['#1b2531', 'Black'],
];

const assets = {
  symbol: {
    preview: symbolPreview, create: kicadSymbol, extension: 'kicad_sym',
    note: () => 'Add the symbol file to a KiCad symbol library. The associated footprint uses the WirePad library nickname.',
  },
  pcb: { preview: footprintPreview, create: kicadFootprint, extension: 'kicad_mod', note: footprintNote },
  model: {
    preview: modelPreview, create: kicadModel, extension: 'wrl',
    note: () => 'Approximate package or carrier geometry for placement. Store the model in the KiCad project’s WirePad.3dshapes folder.',
  },
};

function assetFile(component, tab) {
  const { create, extension } = assets[tab];
  return { contents: create(component), filename: `${component.id}.${extension}` };
}

function previewAsset(component, tab) {
  return tab === 'part' ? componentArt(component) : assets[tab].preview(component);
}

function sourceLink(url, label) {
  return `<a class="asset-source" href="${escapeText(url)}" target="_blank" rel="noopener noreferrer">${icon('external')} ${escapeText(label)}</a>`;
}

function assetDetails(component, tab) {
  const { note, extension } = assets[tab];
  const model = tab === 'model' ? modelFor(component) : null;
  return `<p class="asset-note">${escapeText(note(component))}</p>
    <div class="asset-actions"><button class="button" type="button" data-asset="${tab}">${icon('download')} Download .${extension}</button></div>
    ${model ? sourceLink(model.url, model.label) : ''}`;
}

function inspectPart(part, tab) {
  const component = componentById.get(part.componentId);
  const tabs = [['part', 'Module'], ['symbol', 'Symbol'], ['pcb', 'PCB'], ['model', '3D']];
  const preview = tab === 'part' ? componentArt(component, { labels: false }) : assets[tab].preview(component);
  const pinList = tab === 'part' ? component.pins.map(pin => `<div><dt>${escapeText(pin.label)}</dt><dd>${escapeText(pin.description)}</dd></div>`).join('') : '';
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

export function endpointName(project, endpoint) {
  if (endpoint.junctionId) return 'Wire junction';
  if (endpoint.wireId) return 'Existing wire';
  const part = project.parts.find(item => item.id === endpoint.partId);
  const component = componentById.get(part.componentId);
  const pin = component.pins.find(item => item.id === endpoint.pinId);
  return `${partName(part, component)} · ${pin.label}`;
}

function inspectWire(wire, color, endpoints) {
  return `<h3 class="inspector-name">${wire ? 'Wire' : 'New wire'}</h3>
    <p class="component-description">${wire ? 'Drag a segment to move it, or use Auto route to lay out this wire again. Use Add branch on the canvas to connect another point.' : 'Choose a module to pick a pin, or choose a wire or junction. WirePad routes the connection automatically.'}</p>
    ${endpoints.length ? `<div class="wire-endpoints">${endpoints.map(name => `<div>${escapeText(name)}</div>`).join('')}</div>` : ''}
    <div class="section-heading">WIRE COLOR</div>
    <div class="palette">
      ${palette.map(([value, label]) => `<button type="button" class="swatch" data-color="${value}" style="--swatch:${value}" aria-label="${label}" title="${label}" aria-pressed="${value === color}"><span></span></button>`).join('')}
      <input type="color" value="${color}" id="custom-color" title="Custom color" aria-label="Custom wire color">
    </div>
    ${wire ? `<div class="asset-actions"><button class="button" type="button" data-action="auto-route">${icon('wire')} Auto route</button><button class="button danger" type="button" data-action="delete">${icon('trash')} Remove wire</button></div>` : ''}`;
}

function inspectEmpty() {
  return `<div class="inspector-placeholder">${icon('cursor')}<strong>Nothing selected</strong><span>Select a component to inspect its pinout, or select a wire to change its color.</span></div>`;
}

export function bindInspector({ inspection, editor, notify, focusCanvas, autoRouteWire }) {
  const dialog = document.getElementById('asset-dialog');
  const image = document.getElementById('asset-image');
  const title = document.getElementById('asset-title');
  let tab = 'part';
  let view;
  let selectedPart;

  function setView(key, markup) {
    if (view === key) return;
    const focused = document.activeElement;
    const hadFocus = inspection.contains(focused);
    view = key;
    inspection.innerHTML = markup();
    if (!hadFocus) return;

    const attribute = ['id', 'data-action', 'data-color', 'data-asset'].find(name => focused.hasAttribute(name));
    const next = attribute && inspection.querySelector(`[${attribute}="${CSS.escape(focused.getAttribute(attribute))}"]`);
    if (next) next.focus({ preventScroll: true });
    else focusCanvas();
  }

  function render() {
    const { part, wire, pending, mode, project, wireColor } = editor;
    if (selectedPart !== part?.id) {
      selectedPart = part?.id;
      tab = 'part';
      inspection.scrollTop = 0;
    }
    if (part) {
      setView(`part/${part.id}/${part.componentId}/${tab}`, () => inspectPart(part, tab));
      const label = inspection.querySelector('#part-label');
      if (label && document.activeElement !== label) label.value = part.label ?? '';
    } else if (wire || pending || mode === 'wire') {
      const color = wire?.color ?? wireColor;
      const endpoints = (wire ? [wire.from, wire.to] : pending ? [pending.from] : []).map(endpoint => endpointName(project, endpoint));
      setView(JSON.stringify(['wire', wire?.id, color, endpoints]), () => inspectWire(wire, color, endpoints));
    } else {
      setView('empty', inspectEmpty);
    }
  }

  function showTab(next) {
    tab = next;
    inspection.scrollTop = 0;
    render();
    inspection.querySelector(`#tab-${tab}`).focus({ preventScroll: true });
  }

  inspection.addEventListener('click', event => {
    const target = event.target.closest('button');
    if (!target) return;
    const { tab: next, action, asset, color } = target.dataset;
    if (next) showTab(next);
    if (action === 'rotate') editor.rotatePart();
    if (action === 'delete') editor.removeSelection();
    if (action === 'auto-route') autoRouteWire();
    if (color) editor.setWireColor(color);
    if (!asset && action !== 'preview') return;

    const component = componentById.get(editor.part.componentId);
    if (action === 'preview') {
      title.textContent = component.name;
      image.innerHTML = previewAsset(component, tab);
      dialog.showModal();
    } else {
      const { contents, filename } = assetFile(component, asset);
      downloadBlob(new Blob([contents], { type: 'text/plain;charset=utf-8' }), filename);
      notify(`Downloaded ${filename}.`);
    }
  });

  inspection.addEventListener('change', ({ target }) => {
    if (target.id === 'custom-color') editor.setWireColor(target.value);
    if (target.id === 'part-label') {
      const label = target.value.trim();
      target.value = label;
      if (label !== (editor.part?.label ?? '')) editor.updatePart({ label });
    }
  });

  inspection.addEventListener('keydown', event => {
    if (event.target.id === 'part-label' && event.key === 'Enter') event.target.blur();
    if (!event.target.matches('[role="tab"]')) return;
    const tabs = [...inspection.querySelectorAll('[role="tab"]')];
    const index = tabs.indexOf(event.target);
    const next = { ArrowLeft: (index + tabs.length - 1) % tabs.length, ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    showTab(tabs[next].dataset.tab);
  });

  return { render };
}
