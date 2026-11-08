import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createWorkspaceView, workspaceInsets } from '../src/ui/workspace-view.js';
import { bindWorkspaceActions } from '../src/ui/workspace-bindings.js';

class Element extends EventTarget {
  dataset = {};
  attributes = new Map();
  textContent = '';
  value = '';
  hidden = false;
  disabled = false;
  children = [];
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  removeAttribute(name) { this.attributes.delete(name); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  querySelectorAll() { return this.children; }
  querySelector(selector) {
    if (selector === 'kbd') return this.key;
    return this.children.find(child => !child.disabled) ?? null;
  }
  contains(target) { return target === this || this.children.includes(target); }
  focus() {}
  close() { this.open = false; }
}

function workspace(t) {
  const previous = globalThis.document;
  globalThis.document = { activeElement: null };
  t.after(() => previous === undefined ? delete globalThis.document : globalThis.document = previous);
  const ids = ['project-title', 'project-count', 'canvas-hint-text', 'cancel-wire', 'cancel-wire-label', 'add-bend',
    'remove-bend', 'branch-wire', 'inspect-wire', 'clear-trace', 'editor-status-text', 'save-state', 'empty-board',
    'undo', 'redo', 'fit-selection', 'delete-selection', 'toggle-move', 'move-controls', 'workspace-warning',
    'workspace-warning-text', 'single-key-shortcuts', 'help', 'help-dialog', 'fit', 'zoom-in', 'zoom-out',
    'zoom-value', 'browse-components', 'skip-to-canvas', 'download-unsaved'];
  const nodes = Object.fromEntries(ids.map(id => [id, new Element()]));
  const guide = new Element(), toolbar = new Element();
  const modes = ['select', 'wire', 'trace', 'pan'].map(mode => {
    const button = new Element();
    button.dataset.mode = mode;
    button.key = new Element();
    button.setAttribute('aria-label', mode);
    return button;
  });
  toolbar.children = modes;
  const root = new Element();
  root.querySelector = selector => selector === '.canvas-guide' ? guide : selector === '.tool-group' ? toolbar : nodes[selector.slice(1)] ?? null;
  root.querySelectorAll = () => modes;
  const editor = { project: { title: 'Existing wiring', parts: [], wires: [] }, selections: [], mode: 'select',
    pending: null, wire: null, part: null, trace: null, traceSeed: null, hasDrawing: false, canMoveSelection: false };
  const history = { canUndo: false, canRedo: false };
  const controls = { mode: 'select', wireTool: null, temporaryPan: false, movable: null, gesturing: false };
  const canvas = { tracedNet: null, coarsePointer: { matches: false } };
  const panels = { isCompact: () => false };
  const persistence = { status: 'saved', message: '' };
  const view = createWorkspaceView({ editor, history, controls, canvas, panels, persistence, root });
  return { root, nodes, guide, modes, editor, history, controls, canvas, panels, persistence, view };
}

test('floating selection controls follow selection, temporary pan and history without changing the project', t => {
  const { view, editor, history, controls, nodes, modes, guide } = workspace(t);
  view.render();
  assert.equal(nodes['fit-selection'].disabled, true);
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes.undo.disabled, true);
  assert.equal(nodes.redo.disabled, true);
  assert.equal(guide.dataset.active, 'false');

  editor.project.parts = [{ id: 'one' }, { id: 'two' }];
  editor.selections = [{ type: 'part', id: 'one' }, { type: 'part', id: 'two' }];
  editor.hasDrawing = true;
  history.canUndo = true;
  const before = JSON.stringify(editor.project);
  view.render();
  assert.equal(nodes['fit-selection'].disabled, false);
  assert.equal(nodes['delete-selection'].hidden, false);
  assert.equal(nodes.undo.disabled, false);
  assert.equal(nodes.redo.disabled, true);
  assert.equal(nodes['editor-status-text'].textContent, '2 selected');
  assert.equal(nodes['project-count'].textContent, '2 parts · 0 wires');

  controls.mode = 'pan';
  controls.temporaryPan = true;
  view.render();
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes['fit-selection'].disabled, false);
  assert.equal(nodes['editor-status-text'].textContent, 'Panning');
  assert.match(nodes['canvas-hint-text'].textContent, /Release Shift or Space/);
  assert.deepEqual(modes.map(button => button.getAttribute('aria-pressed')), ['false', 'false', 'false', 'true']);

  controls.mode = 'select';
  controls.temporaryPan = false;
  editor.selections = [];
  history.canUndo = false;
  history.canRedo = true;
  view.render();
  assert.equal(nodes['fit-selection'].disabled, true);
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes.undo.disabled, true);
  assert.equal(nodes.redo.disabled, false);
  assert.equal(JSON.stringify(editor.project), before);
});

test('routing and reconnecting keep the active hint visible and suppress selection-wide actions', t => {
  const { view, editor, controls, nodes, guide } = workspace(t);
  editor.selections = [{ type: 'wire', id: 'wire' }];
  editor.wire = { id: 'wire' };
  editor.pending = { from: { junctionId: 'branch' } };
  view.render();
  assert.equal(nodes['fit-selection'].disabled, true);
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes['cancel-wire'].hidden, false);
  assert.equal(nodes['cancel-wire-label'].textContent, 'Cancel wire');
  assert.equal(guide.dataset.active, 'true');
  assert.match(nodes['canvas-hint-text'].textContent, /this junction/);

  editor.pending = null;
  controls.wireTool = { kind: 'to' };
  view.render();
  assert.equal(nodes['fit-selection'].disabled, true);
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes['cancel-wire-label'].textContent, 'Cancel edit');
  assert.equal(nodes['branch-wire'].hidden, true);
  assert.equal(guide.dataset.active, 'true');

  controls.wireTool = { kind: 'bend' };
  view.render();
  assert.equal(nodes['fit-selection'].disabled, false);
  assert.equal(nodes['delete-selection'].hidden, true);
  assert.equal(nodes['remove-bend'].hidden, false);
  assert.equal(nodes['cancel-wire'].hidden, true);
  assert.equal(guide.dataset.active, 'false');
});

test('floating Fit selection and Delete actions reuse commands, restore focus, and detach on destroy', t => {
  const { root, nodes, editor, controls, panels, view } = workspace(t);
  const calls = [];
  const binding = bindWorkspaceActions({
    editor, controls, panels, view, root, svg: new Element(),
    commands: { fit: selection => calls.push(['fit', Boolean(selection)]), deleteSelection: () => calls.push(['delete']),
      undo() {}, redo() {}, cancelWire() {}, addBend() {}, removeBend() {}, branchWire() {}, clearTrace() {} },
    preferences: { singleKeyShortcuts: true }, projectControls: { saveFile() {} }, library: { browse() {} },
    render() {}, notify() {}, focusCanvas: () => calls.push(['focus']),
  });
  nodes['fit-selection'].dispatchEvent(new Event('click'));
  nodes.fit.dispatchEvent(new Event('click'));
  const fitSelected = new Event('click');
  Object.defineProperty(fitSelected, 'shiftKey', { value: true });
  nodes.fit.dispatchEvent(fitSelected);
  nodes['delete-selection'].dispatchEvent(new Event('click'));
  assert.deepEqual(calls, [['fit', true], ['fit', false], ['fit', true], ['delete'], ['focus']]);
  binding.destroy();
  nodes['fit-selection'].dispatchEvent(new Event('click'));
  nodes['delete-selection'].dispatchEvent(new Event('click'));
  assert.equal(calls.length, 5);
});

test('fit insets use the visible floating controls and normalize CSS-scaled canvas coordinates', () => {
  const root = { querySelector: selector => ({ getBoundingClientRect: () => selector === '.canvas-toolbar' ? { bottom: 180 } : { top: 700 } }) };
  const svg = { clientHeight: 1000, getBoundingClientRect: () => ({ top: 100, bottom: 900, height: 800 }) };
  assert.deepEqual(workspaceInsets(root, svg), { top: 115, bottom: 265 });
  svg.getBoundingClientRect = () => ({ height: 0 });
  assert.deepEqual(workspaceInsets(root, svg), {});
});
