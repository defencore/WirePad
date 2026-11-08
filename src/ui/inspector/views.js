import { configurationFor, mountingFor } from '../../catalog/index.js';
import { componentForPart } from '../../model/part-component.js';
import { instancePins } from '../../model/part-pins.js';
import { viewForPart } from '../../model/part-view.js';
import { wirePalette } from '../../model/wire-colors.js';
import { escapeText } from '../../shared/text.js';
import { icon } from '../icons.js';
import { assetDetails, previewAsset, sourceLink } from './assets.js';
import { configurationMarkup } from './configuration.js';

export function inspectPart(part, tab, { keepLeadPositions = false } = {}) {
  const component = componentForPart(part);
  const tabs = [['part', 'Overview'], ['symbol', 'Symbol'], ['pcb', 'Footprint'], ['model', '3D']];
  const preview = previewAsset(component, tab, { labels: false });
  const configurable = Boolean(configurationFor(component.id));
  const mounting = mountingFor(component.id);
  const mountable = mounting && mounting.type !== 'breadboard';
  const bendable = mounting?.mode === 'bendable';
  const mountingStatus = !mountable ? '' : part.attachment
    ? bendable
      ? `${part.attachment.contacts.length} of ${mounting.contacts.length} leads connected. Select: drag a lead tip. Wire: add a jumper.`
      : `Seated on breadboard · ${part.attachment.contacts.length} contacts connected. Drag the module away to disconnect.`
    : bendable ? 'Drop onto a breadboard to form its leads. Each lead can then be moved to another hole.'
      : mounting.type === 'breadboard-part' ? 'Through-hole part. Drag onto a breadboard and release when all contacts are highlighted.'
        : 'Requires straight 2.54 mm male headers. Drag onto a breadboard and release when its contacts are highlighted.';
  const rearContacts = viewForPart(part)?.pins.some(pin => pin.face === 'rear');
  const pinList = tab === 'part' ? instancePins(part, component).map((pin, index) => {
    const number = pin.number ?? index + 1;
    const text = [pin.id, pin.label, number, pin.description].join(' ').toLowerCase();
    return `<div data-pin-row data-pin-text="${escapeText(text)}"><dt>${escapeText(pin.label)}<small>Contact ${escapeText(number)}</small></dt><dd>${escapeText(pin.description)}</dd></div>`;
  }).join('') : '';
  return `<div class="component-heading"><div class="component-meta"><span class="component-maker">${escapeText(component.manufacturer ?? component.category)}</span><span class="category-tag">${escapeText(component.category)}</span></div>
      <h3 class="inspector-name">${escapeText(component.name)}</h3></div>
    <button type="button" class="inspector-preview" data-action="preview" aria-label="Open larger preview" title="Open larger preview">${preview}<span class="preview-label" aria-hidden="true">${tab === 'part' ? 'Component' : tabs.find(([id]) => id === tab)[1]} preview</span><span class="preview-expand" aria-hidden="true">${icon('fit')}</span></button>
    <div class="inspector-tabs" role="tablist" aria-label="Component assets">
      ${tabs.map(([id, text]) => `<button type="button" role="tab" id="tab-${id}" aria-controls="asset-panel" aria-selected="${tab === id}" tabindex="${tab === id ? 0 : -1}" data-tab="${id}">${text}</button>`).join('')}
    </div>
    <div id="asset-panel" role="tabpanel" aria-labelledby="tab-${tab}">
      ${tab === 'part' ? `<details class="component-about"><summary>Part details</summary><p class="component-description">${escapeText(component.description)}</p>
        ${mountable && mounting.note ? `<p class="control-note">${escapeText(mounting.note)}</p>` : ''}
        ${component.source ? sourceLink(component.source, 'Reference documentation') : ''}</details>
        <section class="inspector-section canvas-settings" aria-label="Component on canvas"><h4>On canvas</h4>
          <label class="part-label">Canvas label<input id="part-label" value="${escapeText(part.label ?? '')}" maxlength="60" placeholder="${escapeText(component.name)}"></label>
          <div class="part-controls"><label class="part-orientation">Orientation<select id="part-rotation" aria-label="Component orientation">${[0, 90, 180, 270].map(angle =>
            `<option value="${angle}"${(part.rotation ?? 0) === angle ? ' selected' : ''}>${angle}°</option>`).join('')}</select></label>
            <button class="button" type="button" data-action="rotate" aria-label="Rotate component 90 degrees" title="Rotate component 90 degrees">${icon('rotate')} Rotate</button>
          </div>
          ${mountingStatus ? `<p class="control-note" role="status" data-mounting-status>${escapeText(mountingStatus)}</p>` : ''}
          ${rearContacts ? '<p class="control-note">Dashed B markers identify underside contacts. They are not inserted leads.</p>' : ''}
          ${bendable && part.leads ? `<label class="lead-body-toggle"><input id="keep-lead-positions" type="checkbox"${keepLeadPositions ? ' checked' : ''}> Move body, keep leads</label><p class="control-note">When enabled, dragging the body bends its legs while the tips stay in their holes.</p>` : ''}
        </section>
        ${configurationMarkup(part, component)}
        <details class="inspector-section pinout-section"${configurable ? '' : ' open'}><summary><span>Pinout</span><span>${component.pins.length} contacts</span></summary>
          <label class="search pinout-search">${icon('search')}<input type="search" id="inspector-pin-search" aria-label="Search component contacts" aria-controls="inspector-pin-list" placeholder="Find a contact or function" autocomplete="off"></label>
          <p class="pinout-count" id="pinout-count" role="status">${component.pins.length} contacts</p>
          <dl class="pins" id="inspector-pin-list">${pinList}</dl><p class="pinout-empty" id="pinout-empty" hidden>No matching contacts.</p>
        </details>
        <button class="button danger remove-component" type="button" data-action="delete">${icon('trash')} Remove component</button>` : assetDetails(component, tab)}
    </div>`;
}

export function inspectWire(wire, color, endpoints) {
  return `<div class="connection-heading">${icon('wire')}<h3 class="inspector-name">${wire ? 'Wire connection' : 'New connection'}</h3></div>
    <p class="component-description">${wire ? 'Drag a wire segment to adjust its path. Use Add branch on the canvas to connect another point.' : 'Choose a starting pin, then a destination pin, wire or junction. Tap a component to find its contacts.'}</p>
    ${endpoints.length ? `<div class="wire-endpoints">${endpoints.map((name, index) => `<div><small>${index ? 'TO' : 'FROM'}</small><span>${escapeText(name)}</span></div>`).join('')}${!wire ? '<div class="endpoint-pending"><small>TO</small><span>Choose a destination on the canvas</span></div>' : ''}</div>` : ''}
    <section class="inspector-section wire-color-section" aria-label="Wire color"><h4>Wire color</h4>
      <div class="palette">
        ${wirePalette.map(([value, label]) => `<button type="button" class="swatch" data-color="${value}" style="--swatch:${value}" aria-label="${label}" title="${label}" aria-pressed="${value === color}"><span></span></button>`).join('')}
        <input type="color" value="${color}" id="custom-color" title="Custom color" aria-label="Custom wire color">
      </div>
      <button type="button" class="button auto-color" data-action="automatic-color"${!wire && !endpoints.length ? ' disabled title="Choose a starting contact first"' : ''}>${icon('wire')} Use automatic color</button>
      <p class="control-note">New power connections use red for supply and black for ground. Pick a color to override.</p>
    </section>
    ${wire ? `<div class="wire-actions"><button class="button" type="button" data-action="auto-route">${icon('wire')} Auto route wire</button><button class="button danger" type="button" data-action="delete">${icon('trash')} Remove wire</button></div>` : ''}`;
}

export function inspectEmpty() {
  return `<div class="inspector-empty"><span class="placeholder-icon">${icon('cursor')}</span><h3>Nothing selected</h3><p>Select a component or wire to inspect its properties.</p></div>
    <div class="inspector-tips"><div>${icon('cursor')}<span><strong>Select &amp; move</strong>Click an item or drag a selection box.</span><kbd>V</kbd></div><div>${icon('wire')}<span><strong>Connect pins</strong>Draw connections between contacts.</span><kbd>W</kbd></div><div>${icon('trace')}<span><strong>Trace a connection</strong>Highlight every connected contact.</span><kbd>T</kbd></div></div>`;
}

export function inspectSelection(selections, movable) {
  const summary = [['part', 'component'], ['wire', 'wire'], ['junction', 'junction']]
        .map(([type, label]) => [selections.filter(item => item.type === type).length, label])
        .filter(([count]) => count).map(([count, label]) => `<span>${count} ${label}${count === 1 ? '' : 's'}</span>`).join('');
  return `<div class="selection-summary"><span class="selection-count" aria-hidden="true">${icon('cursor')}</span><div><span class="inspector-eyebrow">Selection</span><h3 class="inspector-name">${selections.length} items selected</h3></div></div>
        <div class="selection-breakdown">${summary}</div>
        <div class="selection-help"><p>${movable
          ? 'Drag a selected item to move the group.'
          : 'Select one wire to edit its segments and bends.'}</p>${movable ? '<p>Arrow keys nudge. Hold <kbd>Shift</kbd> for larger steps.</p>' : ''}</div>
        <dl class="selection-shortcuts"><div><dt><kbd>Shift</kbd> + drag</dt><dd>Pan temporarily</dd></div><div><dt><kbd>Ctrl/⌘</kbd> + click</dt><dd>Toggle items</dd></div><div><dt><kbd>Ctrl/⌘</kbd> + <kbd>Shift</kbd> + click</dt><dd>Remove items</dd></div><div><dt><kbd>Esc</kbd></dt><dd>Clear selection</dd></div></dl>
        <button class="button danger remove-selection" type="button" data-action="delete">${icon('trash')} Remove selection</button>`;
}
