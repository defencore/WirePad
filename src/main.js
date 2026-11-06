import { componentArt, componentById, components } from './catalog.js';
import { DrawingCanvas, drawingMarkup, escapeText, partName } from './canvas.js';
import { copyDrawing, createDrawingSVG, downloadBlob, downloadDrawing, downloadProject } from './export.js';
import { addIcons, icon } from './icons.js';
import { assetFile, inspectEmpty, inspectPart, inspectWire, previewAsset } from './inspector.js';
import { demoProject, loadProject, makeId, newProject, parseProject, saveProject, validateProject } from './project.js';
import { clampPoint, endpointPositions, sameEndpoint, segmentDrag, slideSegment, splitWire, wireAnchor } from './routing.js';

const $ = selector => document.querySelector(selector);
const search = $('#search');
const category = $('#category');
const catalog = $('#catalog');
const board = $('#board');
const svg = $('#canvas');
const inspection = $('#inspection');
const title = $('#project-title');
const replaceDialog = $('#replace-dialog');
const projectFile = $('#project-file');
const modes = Array.from(document.querySelectorAll('[data-mode]'));
const toolHints = {
  select: 'Drag segments to reroute · use Wire to join',
  wire: 'Start on a pin or wire',
  pan: 'Drag the canvas to pan',
};
const undoStack = [];
const redoStack = [];
const fileLimit = 20_000_000;
const touchInspector = matchMedia('(max-width: 880px)');
const touchLibrary = matchMedia('(max-width: 630px)');

let project = loadProject() ?? demoProject();
let selection = project.parts.length ? { type: 'part', id: project.parts[0].id } : null;
let mode = 'select';
let inspectorTab = 'part';
let wireColor = '#2c83d9';
let pending = null;
let draftCursor = null;
let draftEndpoint = null;
let gesture = null;
let holdingSpace = false;
let replacement = null;
let toastTimer;
let draggingComponent = null;
let saved = false;

const canvas = new DrawingCanvas({
  svg, scene: $('#scene'), draft: $('#draft'),
  onZoom: zoom => { $('#zoom-value').textContent = `${Math.max(1, Math.round(zoom * 100))}%`; },
});

const selectedPart = () => selection?.type === 'part' && project.parts.find(part => part.id === selection.id);
const selectedWire = () => selection?.type === 'wire' && project.wires.find(wire => wire.id === selection.id);

function notify(message) {
  const toast = $('#toast');
  toast.hidden = false;
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3600);
}

function persist() {
  try {
    saveProject(project);
    saved = true;
  } catch {
    if (saved) notify('Browser storage is unavailable. Save a project file to keep a copy.');
    saved = false;
  }
}

function commit(previous, options) {
  try {
    project = validateProject(project);
  } catch (error) {
    project = previous;
    render();
    notify(error.message);
    return;
  }
  undoStack.push(previous);
  if (undoStack.length > 80) undoStack.shift();
  redoStack.length = 0;
  persist();
  render(options);
}

function history(from, to) {
  if (!from.length) return;
  to.push(project);
  project = from.pop();
  resetDraft();
  if (!selectedPart() && !selectedWire()) selection = null;
  persist();
  render();
}

function paint() {
  canvas.draw(project, selection, pending?.from);
  canvas.showDraft(project, pending, draftCursor, wireColor, draftEndpoint);
}

function renderInspector() {
  const part = selectedPart();
  const wire = selectedWire();
  if (pending || wire || (!part && mode === 'wire')) {
    inspection.innerHTML = inspectWire(project, pending ? null : wire, pending, wireColor);
  } else {
    inspection.innerHTML = part ? inspectPart(part, inspectorTab) : inspectEmpty();
  }
}

function render({ refreshInspector = true } = {}) {
  paint();
  if (refreshInspector) renderInspector();
  $('#save-state').innerHTML = saved ? `${icon('check')} Saved in this browser` : 'Browser storage unavailable';
  $('#undo').disabled = !undoStack.length;
  $('#redo').disabled = !redoStack.length;
  $('#empty-board').hidden = Boolean(project.parts.length);
  if (document.activeElement !== title) title.value = project.title;
  svg.dataset.mode = holdingSpace ? 'pan' : mode;
  svg.dataset.routing = Boolean(pending);
  for (const button of modes) button.setAttribute('aria-pressed', button.dataset.mode === mode);
  const hint = pending ? 'Finish on a pin or wire · click the canvas to bend' : toolHints[mode];
  $('#canvas-hint').innerHTML = `${icon(pending ? 'wire' : 'info')} ${hint}`;
  $('#editor-status').innerHTML = `<span class="status-dot"></span> ${pending ? 'Routing wire' : 'Ready'}`;
  const { parts, wires } = project;
  $('#project-count').textContent = `${parts.length} ${parts.length === 1 ? 'part' : 'parts'} · ${wires.length} ${wires.length === 1 ? 'wire' : 'wires'}`;
}

function renderCatalog() {
  const query = search.value.trim().toLowerCase().split(/\s+/);
  const filtered = components.filter(component => {
    if (category.value && component.category !== category.value) return false;
    const terms = [component.name, component.shortName, component.description, component.category, component.subtitle,
      component.manufacturer, ...(component.tags ?? [])].join(' ').toLowerCase();
    return query.every(term => terms.includes(term));
  });
  $('#part-count').textContent = `${filtered.length}`;
  catalog.innerHTML = filtered.map(component => `<button type="button" class="part-card" data-component="${component.id}" draggable="true" aria-label="Add ${escapeText(component.name)}" title="Add ${escapeText(component.name)}">
    <span class="part-thumb" aria-hidden="true">${componentArt(component, { labels: false })}</span>
    <span><strong>${escapeText(component.name)}</strong><small>${escapeText(component.subtitle ?? component.category)}</small></span>
    <span class="card-add" aria-hidden="true">${icon('plus')}</span>
  </button>`).join('') || '<div class="inspector-placeholder">No parts match your search.</div>';
}

function setPanel(name, open) {
  $(`#${name}`).classList.toggle('open', open);
  $(`#toggle-${name}`).setAttribute('aria-expanded', open);
  if (open) setPanel(name === 'library' ? 'inspector' : 'library', false);
}

function select(type, id, { reveal = false } = {}) {
  if (selection?.type !== type || selection.id !== id) {
    selection = type ? { type, id } : null;
    inspectorTab = 'part';
    inspection.scrollTop = 0;
    render();
  }
  if (reveal && touchInspector.matches) setPanel('inspector', true);
}

function resetDraft() {
  pending = null;
  draftCursor = null;
  draftEndpoint = null;
}

function setMode(next) {
  if (next !== 'wire') resetDraft();
  if (next === 'wire') selection = null;
  mode = next;
  render();
}

function automaticPosition(component) {
  const { width, height } = component;
  const { center, scale } = canvas;
  if (!project.parts.length) return { x: center.x - width / 2, y: center.y - height / 2 };
  const bounds = canvas.bounds();
  const stepX = Math.max(115, (width + 65) / 2);
  const stepY = Math.max(95, (height + 70) / 2);
  const left = center.x - svg.clientWidth / (2 * scale) + 18;
  const top = center.y - svg.clientHeight / (2 * scale) + 74 / scale;
  const right = center.x + svg.clientWidth / (2 * scale) - 18;
  const bottom = center.y + svg.clientHeight / (2 * scale) - 53 / scale;
  const occupied = project.parts.map(part => {
    const existing = componentById.get(part.componentId);
    const turned = part.rotation % 180;
    const w = turned ? existing.height : existing.width;
    const h = turned ? existing.width : existing.height;
    return { x: part.x + (existing.width - w) / 2, y: part.y + (existing.height - h) / 2, w, h };
  });

  for (let y = top; y + height <= bottom; y += stepY) {
    for (let x = left; x + width <= right; x += stepX) {
      const clear = occupied.every(area => x + width + 22 < area.x || x > area.x + area.w + 22 ||
        y + height + 37 < area.y || y > area.y + area.h + 37);
      if (clear) return { x, y };
    }
  }
  return { x: bounds.x + bounds.width + 58, y: bounds.y };
}

function addPart(id, point) {
  const component = componentById.get(id);
  if (!component) return;
  const position = point
    ? { x: point.x - component.width / 2, y: point.y - component.height / 2 }
    : automaticPosition(component);
  const previous = structuredClone(project);
  const part = { id: makeId('part'), componentId: id, ...clampPoint(position) };
  if (component.defaultValue) part.label = `${component.shortName ?? component.name} · ${component.defaultValue}`;
  project.parts.push(part);
  resetDraft();
  mode = 'select';
  selection = { type: 'part', id: part.id };
  inspectorTab = 'part';
  inspection.scrollTop = 0;
  commit(previous);
  const rectangle = svg.getBoundingClientRect();
  const edge = canvas.point(rectangle.right, rectangle.bottom);
  if (!previous.parts.length || part.x + component.width > edge.x || part.y + component.height > edge.y) canvas.fit();
  if (touchLibrary.matches) setPanel('library', false);
}

function resolveAnchor(endpoint) {
  if (!endpoint.wireId) return endpoint;
  const index = project.wires.findIndex(wire => wire.id === endpoint.wireId);
  const split = splitWire(project.wires[index], endpointPositions(project), endpoint.point, makeId('junction'), makeId('wire'));
  (project.junctions ??= []).push(split.junction);
  project.wires.splice(index, 1, split.before, split.after);
  return { junctionId: split.junction.id };
}

function activateEndpoint(endpoint) {
  if (!pending) {
    pending = { from: endpoint, points: [] };
    draftCursor = endpointPositions(project)(endpoint);
    selection = null;
    inspection.scrollTop = 0;
    render();
    return;
  }
  if (!pending.from.wireId && !endpoint.wireId && sameEndpoint(pending.from, endpoint)) {
    resetDraft();
    render();
    return;
  }
  if (endpoint.wireId && endpoint.wireId === pending.from.wireId) {
    notify('Choose a different wire or pin to finish the connection.');
    return;
  }
  if (!pending.from.wireId && !endpoint.wireId && project.wires.some(wire =>
    (sameEndpoint(wire.from, pending.from) && sameEndpoint(wire.to, endpoint)) ||
    (sameEndpoint(wire.to, pending.from) && sameEndpoint(wire.from, endpoint)))) {
    notify('These pins already have a connection.');
    return;
  }
  const previous = structuredClone(project);
  const from = resolveAnchor(pending.from);
  const to = resolveAnchor(endpoint);
  const wire = { id: makeId('wire'), from, to, color: wireColor };
  if (pending.points.length) wire.points = pending.points;
  project.wires.push(wire);
  resetDraft();
  selection = { type: 'wire', id: wire.id };
  commit(previous);
}

function targetPin(target) {
  const pin = target.closest('[data-pin]');
  return pin ? { partId: pin.dataset.part, pinId: pin.dataset.pin } : null;
}

function targetJunction(target) {
  const junction = target.closest('[data-junction]');
  return junction ? { junctionId: junction.dataset.junction } : null;
}

function targetWire(target, point) {
  const hit = target.closest('[data-wire]');
  if (!hit) return null;
  const wire = project.wires.find(item => item.id === hit.dataset.wire);
  return wireAnchor(wire, endpointPositions(project), point, Math.min(20, 9 / canvas.scale));
}

function rotateSelection() {
  const part = selectedPart();
  if (!part) return;
  const previous = structuredClone(project);
  part.rotation = ((part.rotation ?? 0) + 90) % 360;
  commit(previous);
}

function deleteSelection() {
  const part = selectedPart();
  const wire = selectedWire();
  if (!part && !wire) return;
  const previous = structuredClone(project);
  if (part) {
    project.parts = project.parts.filter(item => item.id !== part.id);
    project.wires = project.wires.filter(item => item.from.partId !== part.id && item.to.partId !== part.id);
  } else {
    project.wires = project.wires.filter(item => item.id !== wire.id);
  }
  if (project.junctions) {
    const used = new Set(project.wires.flatMap(item => [item.from.junctionId, item.to.junctionId]));
    project.junctions = project.junctions.filter(junction => used.has(junction.id));
  }
  selection = null;
  commit(previous);
}

function setWireColor(color) {
  wireColor = color;
  const wire = selectedWire();
  if (wire && wire.color !== color) {
    const previous = structuredClone(project);
    wire.color = color;
    commit(previous);
  } else {
    paint();
    renderInspector();
  }
}

function capture(event, type, item, segment) {
  gesture = {
    id: event.pointerId, type, item, segment, x: event.clientX, y: event.clientY,
    center: canvas.center, position: item && { x: item.x, y: item.y },
  };
  svg.setPointerCapture(event.pointerId);
}

svg.addEventListener('pointerdown', event => {
  if (gesture || ![0, 1].includes(event.button)) return;
  if (document.activeElement.matches('#project-title, #part-label')) document.activeElement.blur();
  if (event.button === 1 || mode === 'pan' || holdingSpace) {
    event.preventDefault();
    capture(event, 'pan');
    svg.classList.add('dragging');
    return;
  }
  const pin = targetPin(event.target);
  if (pin) {
    event.preventDefault();
    activateEndpoint(pin);
    return;
  }
  const junction = targetJunction(event.target);
  const wire = event.target.closest('[data-wire]');
  const body = event.target.closest('[data-part]');
  const point = canvas.point(event.clientX, event.clientY);
  if (pending || mode === 'wire') {
    const endpoint = junction ?? targetWire(event.target, point);
    if (endpoint) {
      event.preventDefault();
      activateEndpoint(endpoint);
      return;
    }
  }
  if (pending) {
    capture(event, 'bend');
  } else if (junction && mode === 'select') {
    select(null);
    capture(event, 'junction', project.junctions.find(item => item.id === junction.junctionId));
  } else if (wire && mode === 'select') {
    select('wire', wire.dataset.wire, { reveal: true });
    const item = selectedWire();
    const segment = segmentDrag(item, endpointPositions(project), point);
    if (segment) capture(event, 'wire', item, segment);
  } else if (body && mode === 'select') {
    select('part', body.dataset.part);
    capture(event, 'part', selectedPart());
  } else {
    select(null);
    if (touchInspector.matches) setPanel('inspector', false);
  }
});

svg.addEventListener('pointermove', event => {
  if (gesture?.id === event.pointerId) {
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (gesture.type === 'pan') canvas.pan(gesture.center, dx, dy);
    if (gesture.type === 'wire') {
      const offset = gesture.segment.axis === 'x' ? dx : dy;
      if (gesture.previous || Math.abs(offset) > 3) {
        gesture.previous ??= structuredClone(project);
        svg.classList.add('dragging');
        gesture.item.fixedRoute = true;
        gesture.item.points = slideSegment(gesture.segment, offset / canvas.scale);
        paint();
      }
    }
    if ((gesture.type === 'part' || gesture.type === 'junction') && (gesture.previous || Math.hypot(dx, dy) > 3)) {
      gesture.previous ??= structuredClone(project);
      svg.classList.add('dragging');
      const point = clampPoint({ x: gesture.position.x + dx / canvas.scale, y: gesture.position.y + dy / canvas.scale });
      Object.assign(gesture.item, point);
      paint();
    }
    return;
  }
  if (pending) {
    draftCursor = canvas.point(event.clientX, event.clientY);
    draftEndpoint = targetPin(event.target) ?? targetJunction(event.target) ?? targetWire(event.target, draftCursor);
    canvas.showDraft(project, pending, draftCursor, wireColor, draftEndpoint);
  }
});

function finishGesture(event) {
  if (gesture?.id !== event.pointerId) return;
  const action = gesture;
  gesture = null;
  svg.classList.remove('dragging');
  if (event.type !== 'pointerup') {
    if (action.previous) {
      project = action.previous;
      render();
    }
    return;
  }
  if (action.type === 'bend' && pending) {
    if (pending.points.length >= 100) {
      notify('A wire can have up to 100 bend points.');
      return;
    }
    draftCursor = clampPoint(canvas.point(event.clientX, event.clientY));
    draftEndpoint = null;
    pending.points.push(draftCursor);
    paint();
  }
  if (action.previous) commit(action.previous);
}
svg.addEventListener('pointerup', finishGesture);
svg.addEventListener('pointercancel', finishGesture);
svg.addEventListener('lostpointercapture', finishGesture);

svg.addEventListener('wheel', event => {
  event.preventDefault();
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? svg.clientHeight : 1);
  canvas.zoom(canvas.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * .002), canvas.point(event.clientX, event.clientY));
}, { passive: false });

svg.addEventListener('keydown', event => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const pin = targetPin(event.target);
  const junction = targetJunction(event.target);
  const wire = event.target.closest('[data-wire]');
  const part = event.target.closest('[data-part]');
  if (!pin && !junction && !wire && !part) return;
  event.preventDefault();
  if (mode === 'pan') return;
  if (pin) {
    activateEndpoint(pin);
    svg.querySelector(`[data-pin="${pin.pinId}"][data-part="${pin.partId}"]`)?.focus();
  } else if (junction) {
    if (pending || mode === 'wire') activateEndpoint(junction);
    svg.querySelector(`[data-junction="${junction.junctionId}"]`)?.focus();
  } else if (wire && (pending || mode === 'wire')) {
    const anchor = targetWire(wire, wire.getPointAtLength(wire.getTotalLength() / 2));
    if (anchor) activateEndpoint(anchor);
    svg.querySelector(`[data-wire="${wire.dataset.wire}"]`)?.focus();
  } else {
    const id = wire ? wire.dataset.wire : part.dataset.part;
    select(wire ? 'wire' : 'part', id, { reveal: Boolean(wire) });
    svg.querySelector(wire ? `[data-wire="${id}"]` : `.part-body[data-part="${id}"]`)?.focus();
  }
});

catalog.addEventListener('click', event => {
  const card = event.target.closest('[data-component]');
  if (card) addPart(card.dataset.component);
});
catalog.addEventListener('dragstart', event => {
  const card = event.target.closest('[data-component]');
  if (!card) return;
  draggingComponent = card.dataset.component;
  event.dataTransfer.setData('application/x-wirepad-component', draggingComponent);
  event.dataTransfer.effectAllowed = 'copy';
});
catalog.addEventListener('dragend', () => {
  draggingComponent = null;
  board.classList.remove('is-drop-target');
});
board.addEventListener('dragover', event => {
  if (!draggingComponent) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
  board.classList.add('is-drop-target');
});
board.addEventListener('dragleave', event => {
  if (!board.contains(event.relatedTarget)) board.classList.remove('is-drop-target');
});
board.addEventListener('drop', event => {
  if (!draggingComponent) return;
  event.preventDefault();
  board.classList.remove('is-drop-target');
  addPart(draggingComponent, canvas.point(event.clientX, event.clientY));
  draggingComponent = null;
});

function showTab(tab) {
  inspectorTab = tab;
  inspection.scrollTop = 0;
  renderInspector();
  $(`#tab-${tab}`).focus();
}

inspection.addEventListener('click', event => {
  const tab = event.target.closest('[data-tab]')?.dataset.tab;
  const action = event.target.closest('[data-action]')?.dataset.action;
  const asset = event.target.closest('[data-asset]')?.dataset.asset;
  const color = event.target.closest('[data-color]')?.dataset.color;
  if (tab) showTab(tab);
  if (action === 'preview') {
    const component = componentById.get(selectedPart().componentId);
    $('#asset-title').textContent = component.name;
    $('#asset-image').innerHTML = previewAsset(component, inspectorTab);
    $('#asset-dialog').showModal();
  }
  if (action === 'rotate') rotateSelection();
  if (action === 'delete') deleteSelection();
  if (color) setWireColor(color);
  if (asset) {
    const { contents, filename } = assetFile(componentById.get(selectedPart().componentId), asset);
    downloadBlob(new Blob([contents], { type: 'text/plain;charset=utf-8' }), filename);
    notify(`Downloaded ${filename}.`);
  }
});
inspection.addEventListener('keydown', event => {
  if (!event.target.matches('[role="tab"]')) return;
  const tabs = [...inspection.querySelectorAll('[role="tab"]')];
  const index = tabs.indexOf(event.target);
  const next = { ArrowLeft: (index + tabs.length - 1) % tabs.length, ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
  if (next !== undefined) {
    event.preventDefault();
    showTab(tabs[next].dataset.tab);
  }
});
inspection.addEventListener('change', event => {
  if (event.target.id === 'custom-color') setWireColor(event.target.value);
  if (event.target.id === 'part-label') {
    const part = selectedPart();
    if (!part) return;
    const previous = structuredClone(project);
    part.label = event.target.value.trim();
    event.target.value = part.label;
    if ((previous.parts.find(item => item.id === part.id).label ?? '') !== part.label) {
      commit(previous, { refreshInspector: false });
    }
  }
});
inspection.addEventListener('keydown', event => {
  if (event.target.id === 'part-label' && event.key === 'Enter') event.target.blur();
});

function replaceProject(next) {
  if (!project.parts.length && project.title === 'Untitled project') {
    useProject(next);
    return;
  }
  replacement = next;
  replaceDialog.returnValue = '';
  replaceDialog.showModal();
}

function useProject(next) {
  project = next;
  selection = next.parts.length ? { type: 'part', id: next.parts[0].id } : null;
  inspectorTab = 'part';
  mode = 'select';
  resetDraft();
  undoStack.length = 0;
  redoStack.length = 0;
  persist();
  render();
  canvas.fit();
}

function saveFile() {
  try {
    downloadProject(project);
    notify('Project file downloaded.');
  } catch (error) {
    notify(error.message);
  }
}

async function exportDrawing(format) {
  if (!project.parts.length) {
    notify('Add a component before exporting a drawing.');
    return;
  }
  try {
    const drawing = createDrawingSVG({ title: project.title, bounds: canvas.bounds(), markup: drawingMarkup(project) });
    if (format === 'copy') {
      await copyDrawing(drawing);
      notify('Drawing copied to the clipboard.');
    } else {
      await downloadDrawing(drawing, project.title, format);
      notify(`${format.toUpperCase()} downloaded.`);
    }
  } catch (error) {
    notify(error.message);
  }
}

document.addEventListener('pointerdown', event => {
  for (const menu of document.querySelectorAll('.menu[open]')) {
    if (!menu.contains(event.target)) menu.open = false;
  }
});
document.querySelectorAll('.menu-panel button').forEach(button => button.addEventListener('click', () => {
  button.closest('.menu').open = false;
  if (button.dataset.export) exportDrawing(button.dataset.export);
}));
$('#help').addEventListener('click', () => $('#help-dialog').showModal());
$('#new-project').addEventListener('click', () => replaceProject(newProject()));
$('#load-demo').addEventListener('click', () => replaceProject(demoProject()));
$('#open-project').addEventListener('click', () => projectFile.click());
$('#save-project').addEventListener('click', saveFile);
$('#backup-project').addEventListener('click', saveFile);
replaceDialog.addEventListener('close', () => {
  if (replaceDialog.returnValue === 'replace' && replacement) useProject(replacement);
  replacement = null;
});
projectFile.addEventListener('change', async () => {
  const file = projectFile.files[0];
  projectFile.value = '';
  if (!file) return;
  try {
    if (file.size > fileLimit) throw new Error('This project file exceeds 20 MB.');
    replaceProject(parseProject(await file.text()));
  } catch (error) {
    notify(error.message);
  }
});

title.addEventListener('change', () => {
  const name = title.value.trim();
  if (!name || name === project.title) {
    title.value = project.title;
    return;
  }
  const previous = structuredClone(project);
  project.title = name;
  title.value = name;
  commit(previous, { refreshInspector: false });
});
title.addEventListener('keydown', event => {
  if (event.key === 'Enter') title.blur();
  if (event.key === 'Escape') {
    title.value = project.title;
    title.blur();
  }
});

for (const button of modes) button.addEventListener('click', () => setMode(button.dataset.mode));
$('#undo').addEventListener('click', () => history(undoStack, redoStack));
$('#redo').addEventListener('click', () => history(redoStack, undoStack));
$('#fit').addEventListener('click', () => canvas.fit());
$('#zoom-in').addEventListener('click', () => canvas.zoom(canvas.scale * 1.25));
$('#zoom-out').addEventListener('click', () => canvas.zoom(canvas.scale / 1.25));
$('#zoom-value').addEventListener('click', () => canvas.zoom(1));
for (const name of ['library', 'inspector']) {
  $(`#toggle-${name}`).addEventListener('click', () => setPanel(name, !$(`#${name}`).classList.contains('open')));
}

document.addEventListener('keydown', event => {
  if (event.defaultPrevented || document.querySelector('dialog[open]')) return;
  const editing = event.target.matches('input, select, textarea, [contenteditable]');
  if (editing || gesture) return;
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && key === 'z') {
    event.preventDefault();
    if (event.shiftKey) history(redoStack, undoStack);
    else history(undoStack, redoStack);
    return;
  }
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (key === ' ' && !event.target.closest('button, a, summary')) {
    event.preventDefault();
    holdingSpace = true;
    svg.dataset.mode = 'pan';
  }
  if (key === 'v') setMode('select');
  if (key === 'w') setMode('wire');
  if (key === 'h') setMode('pan');
  if (key === 'f') canvas.fit();
  if (key === 'r') rotateSelection();
  if (key === 'delete' || key === 'backspace') {
    event.preventDefault();
    deleteSelection();
  }
  if (key === 'escape') {
    resetDraft();
    render();
    setPanel('library', false);
    setPanel('inspector', false);
    for (const menu of document.querySelectorAll('.menu[open]')) menu.open = false;
  }
  if (key === '/') {
    event.preventDefault();
    if (touchLibrary.matches) setPanel('library', true);
    search.focus();
  }
});
function releaseSpace() {
  holdingSpace = false;
  svg.dataset.mode = mode;
}
document.addEventListener('keyup', event => { if (event.key === ' ') releaseSpace(); });
window.addEventListener('blur', releaseSpace);

const categories = [...new Set(components.map(component => component.category))].sort();
category.innerHTML = '<option value="">All categories</option>' + categories.map(name => `<option>${escapeText(name)}</option>`).join('');
search.addEventListener('input', renderCatalog);
category.addEventListener('change', renderCatalog);
addIcons();
persist();
renderCatalog();
render();
canvas.fit();
