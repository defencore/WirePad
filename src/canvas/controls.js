import { componentForPart } from '../model/part-component.js';
import { instancePins } from '../model/part-pins.js';
import { escapeText } from '../shared/text.js';
import { pointOnPart, translation } from '../geometry/parts.js';
import { group, SceneLayer, updateWireHandle } from './layers.js';
import { wireHandleLayout } from './scene.js';

export class CanvasControls {
  constructor({ svg, scope, getState }) {
    this.svg = svg;
    this.getState = getState;
    this.wireHandles = new SceneLayer(svg);
    this.wireHandles.node.setAttribute('class', 'wire-handle-layer');
    this.wireHandles.node.setAttribute('role', 'group');
    this.wireHandles.node.setAttribute('aria-label', 'Wire editing handles');
    this.leadNode = group(svg);
    this.leadNode.setAttribute('class', 'lead-tip-controls');
    this.leadNode.setAttribute('role', 'group');
    this.leadNode.setAttribute('aria-label', 'Adjust component leads');
    svg.append(this.leadNode);
    this.coarsePointer = svg.ownerDocument.defaultView.matchMedia('(pointer: coarse)');
    scope.on(this.coarsePointer, 'change', () => this.update());
    scope.cleanup(() => { this.wireHandles.node.remove(); this.leadNode.remove(); });
  }

  update() {
    this.updateWires();
    this.updateLeads();
  }

  setPartEnabled(enabled) {
    this.partEnabled = enabled;
    this.updateLeads();
  }

  updateLeads() {
    const { geometry, selection, selections, scale } = this.getState();
    const part = selection?.type === 'part' && selections?.length === 1 && geometry?.parts.get(selection.id)?.part;
    const visible = this.partEnabled && part?.leads;
    const markup = visible ? instancePins(part, componentForPart(part)).map(pin => {
      const point = pointOnPart(part, pin);
      return `<g class="canvas-pin lead-tip-control" data-part="${part.id}" data-pin="${pin.id}" role="button" tabindex="0" aria-label="Adjust ${escapeText(pin.label)} lead; use Wire to connect a jumper" transform="${translation(point.x, point.y)} scale(${1 / scale})"><title>Drag ${escapeText(pin.label)} lead to a hole</title><circle r="10" fill="transparent"/><circle r="5" fill="#f3f8ff" stroke="#346fad" stroke-width="1.7"/><circle r="1.5" fill="#346fad"/></g>`;
    }).join('') : '';
    if (markup !== this.leadMarkup) { this.leadNode.innerHTML = markup; this.leadMarkup = markup; }
  }

  updateWires() {
    const { geometry: drawing, wireControls, scale } = this.getState();
    const { wireId, active } = wireControls ?? {};
    const geometry = drawing?.wires.get(wireId)?.geometry;
    const spacing = (this.coarsePointer.matches || this.svg.dataset.input === 'touch' ? 36 : 24) / scale;
    const state = [wireId, geometry, scale, spacing, active?.kind, active?.index, active?.axis, active?.point?.x, active?.point?.y];
    if (state.every((value, index) => value === this.handleState?.[index])) return;
    this.handleState = state;
    const items = geometry ? wireHandleLayout(wireId, geometry, active, spacing) : new Map();
    this.wireHandles.update(items, (item, entry) => updateWireHandle(this.wireHandles.node, entry, item, scale));
  }

}
