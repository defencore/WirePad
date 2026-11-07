import { createAutoRouter } from '../geometry/autoroute.js';
import { traceNet } from '../model/continuity.js';
import { endpointKey } from '../model/endpoints.js';
import { partName } from '../model/names.js';
import { componentForPart } from '../model/part-component.js';
import { partBounds, translation } from '../geometry/parts.js';
import { nearestSegment, wireAnchor, wireRoute } from '../geometry/routing.js';
import { selectionInBox as itemsInBox, selectionRect } from '../editor/selection.js';
import { createScope } from '../shared/lifecycle.js';
import { pathFrom, samePosition, resolveDrawing, foregroundParts, wireHandleLayout } from './scene.js';
import { traceMarkup } from './markup.js';
import { group, SceneLayer, SVG_NAMESPACE, updateWireHandle, updateWire, updatePart, updateJunction } from './layers.js';
import { CanvasViewport } from './viewport.js';

export class DrawingCanvas extends CanvasViewport {
  constructor({ svg, scene, draft, onZoom, signal }) {
    super({ svg, onZoom });
    this.scope = createScope({ signal });
    this.scene = scene;
    this.draft = draft;
    this.surfaceParts = new SceneLayer(scene);
    this.surfaceParts.node.setAttribute('class', 'surface-part-layer');
    this.wires = new SceneLayer(scene);
    this.branches = group(scene);
    scene.append(this.branches);
    this.parts = new SceneLayer(scene);
    this.junctions = new SceneLayer(scene);
    this.traceLayer = group(svg);
    this.traceLayer.setAttribute('class', 'net-trace');
    this.traceLayer.setAttribute('aria-hidden', 'true');
    this.traceLayer.setAttribute('pointer-events', 'none');
    svg.insertBefore(this.traceLayer, draft);
    this.reconnectLayer = group(svg);
    this.reconnectLayer.setAttribute('class', 'wire-reconnect-preview');
    this.reconnectLayer.setAttribute('aria-hidden', 'true');
    this.reconnectLayer.setAttribute('pointer-events', 'none');
    svg.insertBefore(this.reconnectLayer, draft);
    this.wireHandles = new SceneLayer(svg);
    this.wireHandles.node.setAttribute('class', 'wire-handle-layer');
    this.wireHandles.node.setAttribute('role', 'group');
    this.wireHandles.node.setAttribute('aria-label', 'Wire editing handles');
    this.partControls = group(svg);
    this.partControls.setAttribute('class', 'part-rotation-controls');
    this.partControls.setAttribute('role', 'group');
    this.partControls.setAttribute('display', 'none');
    this.partControls.setAttribute('aria-hidden', 'true');
    svg.append(this.partControls);
    this.selectionLayer = group(svg);
    this.selectionLayer.setAttribute('class', 'selection-box-layer');
    this.selectionLayer.setAttribute('aria-hidden', 'true');
    this.selectionLayer.setAttribute('pointer-events', 'none');
    svg.append(this.selectionLayer);
    this.coarsePointer = matchMedia('(pointer: coarse)');
    this.scope.on(this.coarsePointer, 'change', () => {
      this.updateWireHandles();
      this.updatePartControls();
    });
    this.draftMarkup = '';
    const observer = new ResizeObserver(() => {
      if (!this.scope.destroyed) this.autoFit ? this.fit() : this.applyView();
    });
    observer.observe(svg);
    this.scope.cleanup(() => observer.disconnect());
    this.scope.cleanup(() => {
      for (const node of [this.surfaceParts.node, this.wires.node, this.branches, this.parts.node,
        this.junctions.node, this.traceLayer, this.reconnectLayer, this.wireHandles.node,
        this.partControls, this.selectionLayer]) node.remove();
      this.draft.replaceChildren();
    });
  }

  destroy() {
    this.scope.destroy();
  }

  onViewChange() {
    this.updateWireHandles();
    this.updatePartControls();
  }

  draw(project, selection, active, trace, wireControls, selections = selection ? [selection] : []) {
    if (this.scope.destroyed) return;
    const projectChanged = this.geometryProject !== project;
    const selectedKeys = new Set(selections.map(item => `${item.type}/${item.id}`));
    const selectionKey = [...selectedKeys].sort().join('|');
    const selectionChanged = this.selectionKey !== selectionKey || this.selection !== selection || this.active !== active;
    const previous = this.geometry;
    if (projectChanged || selectionChanged) {
      if (projectChanged) {
        this.geometry = resolveDrawing(project, previous?.wires);
        this.defaultRouteCache = null;
        this.excludedRouteCache = null;
      }
      this.geometryProject = project;
      this.selection = selection;
      this.selectionKey = selectionKey;
      this.selections = selections;
      this.active = active;
      const { wires, branches, parts, junctions } = this.geometry;
      this.wires.update(wires, (data, entry) => updateWire(this.wires.node, entry, data,
        selectedKeys.has(`wire/${data.wire.id}`)));
      if (branches !== (previous?.branches ?? '')) this.branches.innerHTML = branches;
      this.parts.update(foregroundParts(parts), (data, entry) => updatePart(this.parts.node, entry, data,
        selectedKeys.has(`part/${data.part.id}`),
        active?.partId === data.part.id ? active.pinId : undefined));
      const surfaces = new Map([...this.parts.entries].filter(([, entry]) => entry.background)
        .sort(([, a], [, b]) => Number(!a.component.surface) - Number(!b.component.surface))
        .map(([id, entry]) => [id, entry.background]));
      this.surfaceParts.update(surfaces, node => ({ node }));
      this.junctions.update(junctions, (data, entry) => updateJunction(this.junctions.node, entry, data,
        selectedKeys.has(`junction/${data.id}`)));
    }
    const traceKey = trace?.wireId ? `wire/${trace.wireId}` : trace && endpointKey(trace);
    if (this.traceKey !== traceKey || (trace && projectChanged)) {
      this.traceKey = traceKey;
      const net = trace && traceNet(project, trace);
      this.tracedNet = net;
      const dim = Boolean(net?.wireIds.size);
      this.traceLayer.innerHTML = net ? traceMarkup(net, this.geometry) : '';
      this.wires.node.setAttribute('opacity', dim ? '.26' : '1');
      this.branches.setAttribute('opacity', dim ? '.26' : '1');
    }
    this.wireControls = wireControls;
    this.updateWireHandles();
    this.updatePartControls();
  }

  setPartControls(enabled) {
    this.partControlsEnabled = enabled;
    this.updatePartControls();
  }

  updatePartControls() {
    const part = this.selection?.type === 'part' && this.geometry?.parts.get(this.selection.id)?.part;
    const visible = Boolean(this.partControlsEnabled && part && this.selections?.length === 1);
    const controls = this.partControls;
    const touch = this.coarsePointer.matches || this.svg.dataset.input === 'touch';
    const panelWidth = touch ? 200 : 136;
    const panelHeight = touch ? 56 : 34;
    const buttonWidth = touch ? 44 : 31;
    const buttonHeight = touch ? 44 : 28;
    const padding = touch ? 6 : 3;
    const stride = touch ? 48 : 33;
    if (this.partControlTouch !== touch) {
      this.partControlTouch = touch;
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
    const { width } = component;
    const bounds = partBounds(part, component);
    const centerX = part.x + width / 2;
    const viewWidth = this.svg.clientWidth;
    const viewHeight = this.svg.clientHeight;
    const screenX = viewWidth / 2 + (centerX - this.center.x) * this.scale;
    const top = viewHeight / 2 + (bounds.top - this.center.y) * this.scale;
    const bottom = viewHeight / 2 + (bounds.bottom - this.center.y) * this.scale;
    const left = viewWidth / 2 + (bounds.left - this.center.x) * this.scale;
    const right = viewWidth / 2 + (bounds.right - this.center.x) * this.scale;
    let x = screenX - panelWidth / 2;
    let y = top - panelHeight - 10;
    if (y < 8) {
      y = bottom + 29 * this.scale + 14;
      if (y + panelHeight > viewHeight - 8) {
        x = right + 14;
        y = (top + bottom) / 2 - panelHeight / 2;
        if (x + panelWidth > viewWidth - 8) x = left - panelWidth - 14;
      }
    }
    x = Math.max(8, Math.min(Math.max(8, viewWidth - panelWidth - 8), x));
    y = Math.max(8, Math.min(Math.max(8, viewHeight - panelHeight - 8), y));
    const worldX = this.center.x + (x - viewWidth / 2) / this.scale;
    const worldY = this.center.y + (y - viewHeight / 2) / this.scale;
    controls.setAttribute('transform', `${translation(worldX, worldY)} scale(${1 / this.scale})`);
    controls.dataset.rotationPart = part.id;
    controls.setAttribute('aria-label', `Orientation of ${partName(part, component)}`);
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(Number(button.dataset.partRotation) === (part.rotation ?? 0)));
    }
  }

  updateWireHandles() {
    const { wireId, active } = this.wireControls ?? {};
    const geometry = this.geometry?.wires.get(wireId)?.geometry;
    const { scale } = this;
    const spacing = (this.coarsePointer.matches || this.svg.dataset.input === 'touch' ? 36 : 24) / scale;
    const state = [wireId, geometry, scale, spacing, active?.kind, active?.index, active?.axis, active?.point?.x, active?.point?.y];
    if (state.every((value, index) => value === this.handleState?.[index])) return;
    this.handleState = state;
    const items = geometry ? wireHandleLayout(wireId, geometry, active, spacing) : new Map();
    this.wireHandles.update(items, (item, entry) => updateWireHandle(this.wireHandles.node, entry, item, scale));
  }

  position(endpoint) {
    return this.geometry.position(endpoint);
  }

  nearestWire(ids, point) {
    let best;
    let distance = Infinity;
    for (const id of ids) {
      const entry = this.geometry.wires.get(id);
      if (!entry) continue;
      const hit = nearestSegment(entry.geometry.route, point);
      if (!hit) continue;
      const squaredDistance = (point.x - hit.point.x) ** 2 + (point.y - hit.point.y) ** 2;
      if (squaredDistance < distance) {
        best = id;
        distance = squaredDistance;
      }
    }
    return best;
  }

  anchorWire(id, point, threshold) {
    const entry = this.geometry.wires.get(id);
    return entry ? wireAnchor(entry.wire, entry.geometry.route, point, threshold) : null;
  }

  wireRoute(wireId) {
    return this.geometry.wires.get(wireId)?.geometry.route;
  }

  branchAnchor(wireId) {
    const route = this.wireRoute(wireId);
    if (!route) return null;
    let length = 0;
    let point = null;
    for (let index = 1; index < route.length; index++) {
      const start = route[index - 1];
      const end = route[index];
      const distance = Math.abs(end.x - start.x) + Math.abs(end.y - start.y);
      if (distance > length) {
        length = distance;
        point = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
      }
    }
    return point ? { wireId, point } : null;
  }

  autoRoute(start, end, { excludeWire } = {}) {
    const key = excludeWire ? 'excludedRouteCache' : 'defaultRouteCache';
    let cached = this[key];
    if (!cached || cached.excludeWire !== excludeWire) {
      const routes = [];
      for (const [id, { geometry }] of this.geometry.wires) {
        if (id !== excludeWire) routes.push(geometry.route);
      }
      cached = { excludeWire, router: createAutoRouter(this.geometryProject, routes) };
      this[key] = cached;
    }
    if (cached.route && samePosition(start, cached.start) && samePosition(end, cached.end)) {
      return cached.route;
    }
    cached.start = start;
    cached.end = end;
    cached.route = cached.router(start, end);
    return cached.route;
  }

  showDraft(pending, point, color, endpoint) {
    let markup = '';
    if (pending && point) {
      const start = this.position(pending.from);
      const end = endpoint ? this.position(endpoint) : point;
      if (start.x !== end.x || start.y !== end.y) {
        const route = endpoint && !pending.points?.length ? this.autoRoute(start, end) : wireRoute(start, end, pending.points);
        markup = `<path d="${pathFrom(route)}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 4" vector-effect="non-scaling-stroke"/>`;
      }
      const ring = ({ x, y }) => `<circle cx="${x}" cy="${y}" r="6.3" fill="#d7f4ed" stroke="#087a6f" stroke-width="1.5"/>`;
      if (!pending.from.partId) markup += ring(start);
      if (endpoint && !endpoint.partId) markup += ring(end);
    }
    if (this.draftMarkup !== markup) {
      this.draft.innerHTML = markup;
      this.draftMarkup = markup;
    }
  }

  showReconnectPreview(start, end, route, color) {
    let markup = '';
    if (route?.length) {
      const outline = 'fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"';
      const ring = ({ x, y }) => `<circle cx="${x}" cy="${y}" r="${5 / this.scale}" fill="#eff6ff" stroke="${color}" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`;
      markup = `<path d="${pathFrom(route)}" ${outline} stroke="#ffffff" stroke-width="5"/>
        <path d="${pathFrom(route)}" ${outline} stroke="${color}" stroke-width="2.5" stroke-dasharray="6 4"/>${ring(start)}${ring(end)}`;
    }
    if (markup !== this.reconnectMarkup) {
      this.reconnectLayer.innerHTML = markup;
      this.reconnectMarkup = markup;
    }
  }

  showSelectionBox(start, end) {
    if (!start || !end) {
      this.selectionLayer.replaceChildren();
      return;
    }
    const { left, top, right, bottom } = selectionRect(start, end);
    const crossing = end.x < start.x;
    let rectangle = this.selectionLayer.firstElementChild;
    if (!rectangle) {
      rectangle = this.svg.ownerDocument.createElementNS(SVG_NAMESPACE, 'rect');
      rectangle.setAttribute('class', 'selection-box');
      rectangle.setAttribute('stroke-width', '1');
      rectangle.setAttribute('vector-effect', 'non-scaling-stroke');
      this.selectionLayer.append(rectangle);
    }
    rectangle.setAttribute('x', left);
    rectangle.setAttribute('y', top);
    rectangle.setAttribute('width', right - left);
    rectangle.setAttribute('height', bottom - top);
    rectangle.setAttribute('fill', crossing ? '#16876f' : '#3b78c4');
    rectangle.setAttribute('fill-opacity', '.1');
    rectangle.setAttribute('stroke', crossing ? '#16876f' : '#3b78c4');
    rectangle.setAttribute('stroke-dasharray', crossing ? '5 3' : 'none');
    rectangle.dataset.crossing = String(crossing);
  }

  selectionInBox(start, end) {
    if (!this.geometryProject) return [];
    return itemsInBox(this.geometryProject, start, end, {
      partBounds,
      wirePoints: wire => this.geometry.wires.get(wire.id)?.geometry.route ?? [],
    });
  }

  selectionBounds(selections) {
    const points = [];
    for (const { type, id } of selections) {
      if (type === 'part') {
        const part = this.geometry?.parts.get(id)?.part;
        if (!part) continue;
        const bounds = partBounds(part);
        points.push({ x: bounds.left - 8, y: bounds.top - 8 }, { x: bounds.right + 8, y: bounds.bottom + 29 });
      } else if (type === 'wire') {
        points.push(...(this.wireRoute(id) ?? []));
      } else if (type === 'junction') {
        const point = this.geometry?.junctions.get(id);
        if (point) points.push({ x: point.x - 10, y: point.y - 10 }, { x: point.x + 10, y: point.y + 10 });
      }
    }
    if (!points.length) return null;
    const left = Math.min(...points.map(point => point.x));
    const top = Math.min(...points.map(point => point.y));
    const right = Math.max(...points.map(point => point.x));
    const bottom = Math.max(...points.map(point => point.y));
    return { x: left, y: top, width: right - left, height: bottom - top };
  }

  fitSelection(selections = this.selections ?? []) {
    const bounds = this.selectionBounds(selections);
    if (bounds) this.fitBounds(bounds);
  }

  bounds() {
    const { x, y, width, height } = this.scene.getBBox();
    return { x, y, width, height };
  }

  suggestPartPosition(project, { width, height }) {
    const { center, scale, svg } = this;
    if (!project.parts.length) return { x: center.x - width / 2, y: center.y - height / 2 };

    const halfWidth = svg.clientWidth / (2 * scale);
    const halfHeight = svg.clientHeight / (2 * scale);
    const left = center.x - halfWidth + 18 / scale;
    const top = center.y - halfHeight + 74 / scale;
    const right = center.x + halfWidth - 18 / scale;
    const bottom = center.y + halfHeight - 53 / scale;
    const occupied = project.parts.map(part => {
      const bounds = partBounds(part);
      return { x: bounds.left, y: bounds.top, w: bounds.right - bounds.left, h: bounds.bottom - bounds.top };
    });
    const stepX = Math.max(115, (width + 65) / 2, (right - left - width) / 15);
    const stepY = Math.max(95, (height + 70) / 2, (bottom - top - height) / 15);
    for (let y = top; y + height <= bottom; y += stepY) {
      for (let x = left; x + width <= right; x += stepX) {
        if (occupied.every(area => x + width + 22 < area.x || x > area.x + area.w + 22 ||
          y + height + 37 < area.y || y > area.y + area.h + 37)) return { x, y };
      }
    }
    const bounds = this.bounds();
    return { x: bounds.x + bounds.width + 58, y: bounds.y };
  }


  fit() {
    this.fitBounds(this.bounds(), true);
  }

}
