import { componentForPart } from '../model/part-component.js';
import { instancePins } from '../model/part-pins.js';
import { escapeText } from '../shared/text.js';
import { partName } from '../model/names.js';
import { partSize } from '../model/part-placement.js';
import { partBounds, pointOnPart, translation } from '../geometry/parts.js';
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
    this.rotationNode = group(svg);
    this.rotationNode.setAttribute('class', 'part-rotation-controls');
    this.rotationNode.setAttribute('role', 'group');
    this.rotationNode.setAttribute('display', 'none');
    this.rotationNode.setAttribute('aria-hidden', 'true');
    svg.append(this.rotationNode);
    this.leadNode = group(svg);
    this.leadNode.setAttribute('class', 'lead-tip-controls');
    this.leadNode.setAttribute('role', 'group');
    this.leadNode.setAttribute('aria-label', 'Adjust component leads');
    svg.append(this.leadNode);
    this.coarsePointer = svg.ownerDocument.defaultView.matchMedia('(pointer: coarse)');
    scope.on(this.coarsePointer, 'change', () => this.update());
    scope.cleanup(() => { this.wireHandles.node.remove(); this.rotationNode.remove(); this.leadNode.remove(); });
  }

  update() {
    this.updateWires();
    this.updateParts();
    this.updateLeads();
  }

  setPartEnabled(enabled) {
    this.partEnabled = enabled;
    this.updateParts();
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

  updateParts() {
    const { geometry, selection, selections, scale, center } = this.getState();
    const part = selection?.type === 'part' && geometry?.parts.get(selection.id)?.part;
    const visible = Boolean(this.partEnabled && part && selections?.length === 1);
    const controls = this.rotationNode;
    const touch = this.coarsePointer.matches || this.svg.dataset.input === 'touch';
    const panelWidth = touch ? 200 : 136;
    const panelHeight = touch ? 56 : 34;
    const buttonWidth = touch ? 44 : 31;
    const buttonHeight = touch ? 44 : 28;
    const padding = touch ? 6 : 3;
    const stride = touch ? 48 : 33;
    if (this.touchStyle !== touch) {
      this.touchStyle = touch;
      controls.innerHTML = `<rect class="part-rotation-panel" width="${panelWidth}" height="${panelHeight}" rx="6"/>` +
        [0, 90, 180, 270].map((angle, index) => `<g class="part-rotation-button" data-part-rotation="${angle}" transform="translate(${padding + stride * index} ${padding})" role="button" tabindex="-1" aria-label="Set orientation to ${angle} degrees" aria-pressed="false">
          <title>Set orientation to ${angle}°</title><rect width="${buttonWidth}" height="${buttonHeight}" rx="4"/>
          <text x="${buttonWidth / 2}" y="${buttonHeight / 2 + 4}" text-anchor="middle">${angle}°</text>
        </g>`).join('');
    }
    const buttons = [...controls.querySelectorAll('.part-rotation-button')];
    controls.setAttribute('display', visible ? 'inline' : 'none');
    controls.setAttribute('aria-hidden', String(!visible));
    for (const button of buttons) button.setAttribute('tabindex', visible ? '0' : '-1');
    if (!visible) return;

    const component = componentForPart(part);
    const { width } = partSize(part, component);
    const bounds = partBounds(part, component);
    const centerX = part.x + width / 2;
    const viewWidth = this.svg.clientWidth;
    const viewHeight = this.svg.clientHeight;
    const screenX = viewWidth / 2 + (centerX - center.x) * scale;
    const top = viewHeight / 2 + (bounds.top - center.y) * scale;
    const bottom = viewHeight / 2 + (bounds.bottom - center.y) * scale;
    const left = viewWidth / 2 + (bounds.left - center.x) * scale;
    const right = viewWidth / 2 + (bounds.right - center.x) * scale;
    let x = screenX - panelWidth / 2;
    let y = top - panelHeight - 10;
    if (y < 8) {
      y = bottom + 29 * scale + 14;
      if (y + panelHeight > viewHeight - 8) {
        x = right + 14;
        y = (top + bottom) / 2 - panelHeight / 2;
        if (x + panelWidth > viewWidth - 8) x = left - panelWidth - 14;
      }
    }
    x = Math.max(8, Math.min(Math.max(8, viewWidth - panelWidth - 8), x));
    y = Math.max(8, Math.min(Math.max(8, viewHeight - panelHeight - 8), y));
    const worldX = center.x + (x - viewWidth / 2) / scale;
    const worldY = center.y + (y - viewHeight / 2) / scale;
    controls.setAttribute('transform', `${translation(worldX, worldY)} scale(${1 / scale})`);
    controls.dataset.rotationPart = part.id;
    controls.setAttribute('aria-label', `Orientation of ${partName(part, component)}`);
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(Number(button.dataset.partRotation) === (part.rotation ?? 0)));
    }
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
