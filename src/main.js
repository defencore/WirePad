import { bindCanvas } from './canvas-input.js';
import { DrawingCanvas } from './canvas.js';
import { componentById } from './catalog.js';
import { bindLibrary } from './component-library.js';
import { DiagramEditor } from './editor.js';
import { addIcons, icon } from './icons.js';
import { bindInspector, endpointName } from './inspector.js';
import { bindPinPicker } from './pin-picker.js';
import { bindProjectControls } from './project-controls.js';
import { ProjectHistory } from './project-history.js';
import { ProjectStorage } from './project-storage.js';
import { newProject } from './project.js';
import { bindToolbar } from './toolbar.js';

const element = id => document.getElementById(id);
const svg = element('canvas');
const title = element('project-title');
const count = element('project-count');
const hint = element('canvas-hint-text');
const cancelWire = element('cancel-wire');
const cancelWireLabel = element('cancel-wire-label');
const addBend = element('add-bend');
const removeBend = element('remove-bend');
const branchWire = element('branch-wire');
const inspectWire = element('inspect-wire');
const clearTrace = element('clear-trace');
const status = element('editor-status-text');
const saveState = element('save-state');
const emptyBoard = element('empty-board');
const toast = element('toast');
const undo = element('undo');
const redo = element('redo');
const moveToggle = element('toggle-move');
const moveControls = element('move-controls');
const warning = element('workspace-warning');
const warningText = element('workspace-warning-text');
const singleKeyToggle = element('single-key-shortcuts');
const modes = [...document.querySelectorAll('[data-mode]')];
const shortcutPreference = 'wirepad.singleKeyShortcuts';

const panels = {
  library: { node: element('library'), toggle: element('toggle-library'), compact: matchMedia('(max-width: 630px)') },
  inspector: { node: element('inspector'), toggle: element('toggle-inspector'), compact: matchMedia('(max-width: 880px)') },
};

const storage = new ProjectStorage();
const savedProject = storage.project;
const history = new ProjectHistory(savedProject ?? newProject());
const editor = new DiagramEditor(history, render, notify);
const focusCanvas = () => svg.focus({ preventScroll: true });
const canvas = new DrawingCanvas({
  svg, scene: element('scene'), draft: element('draft'),
  onZoom: zoom => { element('zoom-value').textContent = `${Math.max(1, Math.round(zoom * 100))}%`; },
});

let toastTimer;
let storageStatus = storage.status;
let unsavedToBrowser = false;
let moveOpen = false;
try { singleKeyToggle.checked = localStorage.getItem(shortcutPreference) !== 'off'; } catch {}

function notify(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3600);
}

function persist() {
  try {
    storage.save(editor.project);
    storageStatus = 'saved';
    unsavedToBrowser = false;
  } catch (error) {
    if (storageStatus !== storage.status) notify(error.message);
    storageStatus = storage.status;
    unsavedToBrowser = true;
  }
}

function setPanel(name, open, { focus = false } = {}) {
  const panel = panels[name];
  if (open) {
    if (!panel.compact.matches) return;
    setPanel(name === 'library' ? 'inspector' : 'library', false);
  }
  const restoreFocus = !open && panel.compact.matches && panel.node.classList.contains('open') &&
    panel.node.contains(document.activeElement);
  panel.node.classList.toggle('open', open);
  panel.toggle.setAttribute('aria-expanded', String(open));
  if (restoreFocus) panel.toggle.focus({ preventScroll: true });
  if (open && focus) panel.node.querySelector('[data-panel-heading]').focus({ preventScroll: true });
}

function paint(project = editor.project) {
  canvas.draw(project, editor.selection, editor.pending?.from, editor.traceSeed, controls.wireControls);
  controls.renderDraft();
}

function canvasHint() {
  const touchLayout = panels.library.compact.matches;
  const tool = controls.wireTool?.kind;
  if (tool === 'add') return 'Choose a place on the canvas for the new bend.';
  if (tool === 'from' || tool === 'to') return 'Choose a pin, module, junction, or another wire for this end.';
  if (tool === 'bend') return 'Use Move or drag this bend. Choose Remove bend to delete it.';
  if (tool === 'segment') return 'Use Move or drag this handle to shift the segment.';
  if (editor.pending) {
    const { from } = editor.pending;
    if (from.wireId) return 'Choose a pin or another wire to add a branch.';
    if (from.junctionId) return 'Choose a pin or wire to connect to this junction.';
    const source = endpointName(editor.project, from);
    return `From ${source}. Choose a destination pin or wire.`;
  }
  const net = canvas.tracedNet;
  if (net?.wireIds.size) {
    const pins = [...net.endpoints.values()].filter(endpoint => endpoint.partId).length;
    const wires = net.wireIds.size;
    const summary = `${pins} ${pins === 1 ? 'pin' : 'pins'} · ${wires} ${wires === 1 ? 'wire' : 'wires'}`;
    return editor.mode === 'select' ? `Drag the handles to edit. ${summary}.` : `Highlighted net: ${summary}.`;
  }
  if (editor.mode === 'trace') return editor.trace
    ? 'No wires are connected to this point.' : 'Choose a wire, junction, or pin to trace its connections.';
  if (editor.mode === 'wire') return touchLayout
    ? 'Tap a module to choose a pin, or tap a wire to branch.'
    : 'Choose a pin, module, wire, or junction to start.';
  if (editor.mode === 'pan') return 'Drag to move the view. Pinch to zoom on touchscreens.';
  return touchLayout ? 'Use Wire to choose pins. Tap a wire to highlight its connections.'
    : 'Drag parts to move them. Click a pin to wire or a wire to trace it.';
}

function render({ persist: shouldSave = false } = {}) {
  if (shouldSave) persist();
  paint();
  inspector.render();
  projectControls.render();

  if (saveState.dataset.status !== storageStatus) {
    saveState.dataset.status = storageStatus;
    saveState.innerHTML = {
      saved: `${icon('check')} Saved in this browser`,
      empty: 'Edits save to this browser',
      invalid: 'Recovery data available',
      unavailable: 'Save a project file to keep changes',
      failed: 'Browser storage is full',
      conflict: 'Project updated in another tab',
    }[storageStatus];
  }
  const showWarning = ['invalid', 'unavailable', 'failed', 'conflict'].includes(storageStatus);
  warning.hidden = !showWarning;
  if (warningText.textContent !== storage.message) warningText.textContent = storage.message;

  const { parts, wires } = editor.project;
  const routing = Boolean(editor.pending);
  const selectedWire = editor.wire && !routing && editor.mode !== 'pan';
  const tool = controls.wireTool?.kind;
  const editingWire = tool === 'from' || tool === 'to' || tool === 'add';
  const editableWire = selectedWire && editor.mode === 'select';
  const movable = controls.movable;
  if (!movable) moveOpen = false;
  moveToggle.hidden = !movable;
  moveToggle.setAttribute('aria-expanded', String(moveOpen));
  moveControls.hidden = !moveOpen;
  moveControls.setAttribute('aria-label', movable ? `Move ${movable.label}` : 'Move selection');
  for (const button of moveControls.querySelectorAll('[data-nudge-x]')) {
    button.disabled = Boolean(movable?.axis && Number(button.dataset[movable.axis === 'x' ? 'nudgeX' : 'nudgeY']) === 0);
  }
  const guide = canvasHint();
  const currentStatus = editingWire ? 'Editing wire' : routing ? 'Routing wire' : editor.traceSeed ? 'Tracing connections' : 'Ready';
  const total = `${parts.length} ${parts.length === 1 ? 'part' : 'parts'} · ${wires.length} ${wires.length === 1 ? 'wire' : 'wires'}`;
  if (hint.textContent !== guide) hint.textContent = guide;
  if (status.textContent !== currentStatus) status.textContent = currentStatus;
  if (count.textContent !== total) count.textContent = total;
  undo.disabled = !history.canUndo;
  redo.disabled = !history.canRedo;
  cancelWire.hidden = !routing && !editingWire;
  cancelWireLabel.textContent = editingWire ? 'Cancel edit' : 'Cancel wire';
  addBend.hidden = !editableWire || (editingWire && tool !== 'add');
  addBend.setAttribute('aria-pressed', String(tool === 'add'));
  removeBend.hidden = !editableWire || tool !== 'bend';
  branchWire.hidden = !selectedWire || editingWire;
  inspectWire.hidden = !selectedWire || editingWire || !panels.inspector.compact.matches;
  clearTrace.hidden = editor.mode !== 'trace' || !editor.trace;
  emptyBoard.hidden = editor.hasDrawing;
  if (document.activeElement !== title) title.value = editor.project.title;
  for (const button of modes) button.setAttribute('aria-pressed', String(button.dataset.mode === editor.mode));
}

function automaticPosition({ width, height }) {
  const { center, scale } = canvas;
  if (!editor.project.parts.length) return { x: center.x - width / 2, y: center.y - height / 2 };

  const halfWidth = svg.clientWidth / (2 * scale);
  const halfHeight = svg.clientHeight / (2 * scale);
  const left = center.x - halfWidth + 18 / scale;
  const top = center.y - halfHeight + 74 / scale;
  const right = center.x + halfWidth - 18 / scale;
  const bottom = center.y + halfHeight - 53 / scale;
  const occupied = editor.project.parts.map(part => {
    const component = componentById.get(part.componentId);
    const turned = part.rotation % 180;
    const w = turned ? component.height : component.width;
    const h = turned ? component.width : component.height;
    return { x: part.x + (component.width - w) / 2, y: part.y + (component.height - h) / 2, w, h };
  });
  const stepX = Math.max(115, (width + 65) / 2, (right - left - width) / 15);
  const stepY = Math.max(95, (height + 70) / 2, (bottom - top - height) / 15);
  for (let y = top; y + height <= bottom; y += stepY) {
    for (let x = left; x + width <= right; x += stepX) {
      if (occupied.every(area => x + width + 22 < area.x || x > area.x + area.w + 22 ||
        y + height + 37 < area.y || y > area.y + area.h + 37)) return { x, y };
    }
  }
  const bounds = canvas.bounds();
  return { x: bounds.x + bounds.width + 58, y: bounds.y };
}

function addPart(id, drop) {
  if (controls.gesturing) return false;
  const component = componentById.get(id);
  const center = drop && canvas.point(drop.clientX, drop.clientY);
  const position = center
    ? { x: center.x - component.width / 2, y: center.y - component.height / 2 }
    : automaticPosition(component);
  const hadDrawing = editor.hasDrawing;
  const part = editor.addPart(id, position);
  if (!part) return false;

  const rect = svg.getBoundingClientRect();
  const start = canvas.point(rect.left, rect.top);
  const end = canvas.point(rect.right, rect.bottom);
  if (!hadDrawing || part.x < start.x || part.y < start.y ||
      part.x + component.width > end.x || part.y + component.height > end.y) canvas.fit();
  return true;
}

const controls = bindCanvas({
  canvas, svg, editor, paint, refresh: render,
  openPinPicker: (id, pinId, from, mode = editor.mode === 'trace' ? 'trace' : 'wire') => pinPicker.open(editor.item('part', id), {
    mode, from, pinId,
  }),
  dismissInspector: () => setPanel('inspector', false),
});
const pinPicker = bindPinPicker({ onChoose: controls.chooseEndpoint, focusCanvas });
const inspector = bindInspector({
  inspection: element('inspection'), editor, notify, focusCanvas,
  autoRouteWire() {
    const wire = editor.wire;
    if (!wire) return;
    const plan = canvas.autoRoute(canvas.position(wire.from), canvas.position(wire.to), { excludeWire: wire.id });
    if (!plan) notify('An automatic route is unavailable for this wire.');
    else editor.rerouteWire(plan);
  },
});
const projectControls = bindProjectControls({
  editor, canvas, savedProject, storage, notify, focusCanvas, canExport: () => !controls.gesturing,
});
const library = bindLibrary({
  library: panels.library.node, board: element('board'), addPart,
  openPanel: () => setPanel('library', true),
  closePanel: () => { if (panels.library.compact.matches) { setPanel('library', false); focusCanvas(); } },
});

title.addEventListener('change', () => {
  const name = title.value.trim();
  if (name && name !== editor.project.title) editor.commit({ ...editor.project, title: name });
  title.value = editor.project.title;
});
title.addEventListener('keydown', event => {
  if (event.key === 'Escape') title.value = editor.project.title;
  if (event.key === 'Enter' || event.key === 'Escape') title.blur();
});
function changeMode(mode) {
  if (controls.gesturing) return;
  controls.clearWireTool();
  if (mode !== 'select') {
    setPanel('library', false);
    setPanel('inspector', false);
  }
  editor.setMode(mode);
}

for (const button of modes) button.addEventListener('click', () => changeMode(button.dataset.mode));
bindToolbar(document.querySelector('.tool-group'));
for (const [name, panel] of Object.entries(panels)) {
  panel.toggle.addEventListener('click', () => {
    setPanel(name, !panel.node.classList.contains('open'), { focus: true });
  });
  panel.compact.addEventListener('change', () => { setPanel(name, false); render(); });
}
element('help').addEventListener('click', () => element('help-dialog').showModal());
element('fit').addEventListener('click', () => canvas.fit());
element('zoom-in').addEventListener('click', () => canvas.zoom(canvas.scale * 1.25));
element('zoom-out').addEventListener('click', () => canvas.zoom(canvas.scale / 1.25));
element('zoom-value').addEventListener('click', () => canvas.zoom(1));
element('browse-components').addEventListener('click', library.browse);
element('skip-to-canvas').addEventListener('click', event => {
  event.preventDefault();
  setPanel('library', false);
  setPanel('inspector', false);
  focusCanvas();
});
element('download-unsaved').addEventListener('click', () => projectControls.saveFile());
moveToggle.addEventListener('click', () => {
  moveOpen = !moveOpen;
  render();
  if (moveOpen) moveControls.querySelector('button:not(:disabled)').focus({ preventScroll: true });
});
moveControls.addEventListener('click', event => {
  const button = event.target.closest('[data-nudge-x]');
  if (button && !button.disabled) controls.nudge(Number(button.dataset.nudgeX), Number(button.dataset.nudgeY));
});
singleKeyToggle.addEventListener('change', () => {
  updateShortcutHints();
  try {
    localStorage.setItem(shortcutPreference, singleKeyToggle.checked ? 'on' : 'off');
  } catch {
    notify('Shortcut preference changed for this session. Browser storage is unavailable.');
  }
});
undo.addEventListener('click', () => editor.step('undo'));
redo.addEventListener('click', () => editor.step('redo'));
cancelWire.addEventListener('click', () => { controls.clearWireTool(); editor.cancelWire(); focusCanvas(); });
addBend.addEventListener('click', () => { controls.armBend(); focusCanvas(); });
removeBend.addEventListener('click', () => { controls.removeBend(); focusCanvas(); });
branchWire.addEventListener('click', () => {
  const anchor = editor.wire && canvas.branchAnchor(editor.wire.id);
  if (!anchor) return;
  setPanel('inspector', false);
  editor.beginWire(anchor, 'wire');
  focusCanvas();
});
inspectWire.addEventListener('click', () => setPanel('inspector', true, { focus: true }));
clearTrace.addEventListener('click', () => { editor.tracePoint(null); focusCanvas(); });

function deleteSelection() {
  const tool = controls.wireTool?.kind;
  if (tool === 'bend') controls.removeBend();
  else if (tool === 'add' || tool === 'from' || tool === 'to') controls.clearWireTool();
  else editor.removeSelection();
}

function updateShortcutHints() {
  const keys = { select: 'V', wire: 'W', trace: 'T', pan: 'H' };
  for (const button of modes) {
    const enabled = singleKeyToggle.checked;
    if (enabled) button.setAttribute('aria-keyshortcuts', keys[button.dataset.mode]);
    else button.removeAttribute('aria-keyshortcuts');
    button.querySelector('kbd').hidden = !enabled;
    button.title = enabled ? `${button.getAttribute('aria-label')} (${keys[button.dataset.mode]})` : button.getAttribute('aria-label');
  }
}

function switchRegion(backward) {
  const active = document.activeElement;
  const regions = ['library', 'canvas', 'inspector'];
  const current = panels.library.node.contains(active) ? 0 : svg.contains(active) || active === svg ? 1
    : panels.inspector.node.contains(active) ? 2 : backward ? 0 : -1;
  const next = regions[(current + (backward ? -1 : 1) + regions.length) % regions.length];
  if (next === 'canvas') {
    setPanel('library', false);
    setPanel('inspector', false);
    focusCanvas();
  } else if (next === 'library') library.browse();
  else {
    setPanel('inspector', true);
    panels.inspector.node.querySelector('[data-panel-heading]').focus({ preventScroll: true });
  }
}

const shortcuts = {
  v: () => changeMode('select'), w: () => changeMode('wire'), t: () => changeMode('trace'), h: () => changeMode('pan'),
  f: () => canvas.fit(), r: () => editor.rotatePart(), '/': library.browse,
  delete: deleteSelection, backspace: deleteSelection,
  escape: () => {
    moveOpen = false;
    controls.clearWireTool();
    editor.cancelWire();
    editor.tracePoint(null);
    setPanel('library', false);
    setPanel('inspector', false);
    projectControls.closeMenus();
    render();
  },
};
document.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.isComposing || controls.gesturing || document.querySelector('dialog[open]')) return;
  const key = event.key.toLowerCase();
  const editing = event.target.matches('input, select, textarea, [contenteditable]');
  if (key === 'f6' && !event.altKey && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    switchRegion(event.shiftKey);
    return;
  }
  if ((event.ctrlKey || event.metaKey) && key === 's') {
    event.preventDefault();
    if (event.repeat) return;
    if (editing) event.target.blur();
    projectControls.saveFile();
    return;
  }
  if (editing && !(key === 'escape' && event.target.id === 'search' && !event.target.value)) return;
  if ((event.ctrlKey || event.metaKey) && ['z', 'y'].includes(key)) {
    event.preventDefault();
    editor.step(key === 'y' || event.shiftKey ? 'redo' : 'undo');
    return;
  }
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (!singleKeyToggle.checked && key.length === 1 && key !== ' ') return;
  if (['delete', 'backspace'].includes(key) && !svg.contains(event.target) && event.target !== svg && !moveControls.contains(event.target)) return;
  if (key === ' ' && !event.target.closest('button, a, summary')) {
    event.preventDefault();
    controls.panWithSpace(true);
  } else if (Object.hasOwn(shortcuts, key)) {
    event.preventDefault();
    shortcuts[key]();
  }
});

window.addEventListener('storage', () => {
  storage.check();
  storageStatus = storage.status;
  render();
});
window.addEventListener('beforeunload', event => {
  if (!unsavedToBrowser) return;
  event.preventDefault();
  event.returnValue = '';
});

addIcons();
updateShortcutHints();
render();
canvas.fit();
projectControls.openStart();
