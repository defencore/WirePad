import assert from 'node:assert/strict';
import { test } from 'node:test';

import { bindCanvas } from '../src/canvas/input.js';
import { DrawingCanvas } from '../src/canvas/canvas.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { newProject } from '../src/model/project.js';
import { ProjectHistory } from '../src/model/history.js';
import { endpointPositions } from '../src/geometry/parts.js';

const point = (x, y) => ({ x, y });
const selection = id => ({ type: 'part', id });

function surface(classes = [], dataset = {}) {
  const listeners = new Map();
  const names = new Set(classes);
  return {
    dataset,
    classList: { add: (...items) => items.forEach(item => names.add(item)), remove: (...items) => items.forEach(item => names.delete(item)), contains: item => names.has(item) },
    matches(selector) { return selector.split(',').some(item => names.has(item.trim().slice(1))); },
    closest(selector) { return this.matches(selector) ? this : null; },
    addEventListener(type, callback, options = {}) {
      listeners.set(type, [...(listeners.get(type) ?? []), { callback, signal: options.signal }]);
    },
    emit(type, properties = {}) {
      const event = {
        type, target: this, button: 0, pointerId: 1, pointerType: 'mouse', clientX: 0, clientY: 0,
        shiftKey: false, ctrlKey: false, metaKey: false, altKey: false,
        preventDefault() { this.defaultPrevented = true; }, stopPropagation() {}, ...properties,
      };
      for (const { callback, signal } of listeners.get(type) ?? []) if (!signal?.aborted) callback(event);
      return event;
    },
    focus() { globalThis.document.activeElement = this; },
  };
}

function workspace(t) {
  const svg = surface();
  const a = surface(['part-body'], { part: 'a' });
  const b = surface(['part-body'], { part: 'b' });
  const captures = new Set();
  const frames = new Map();
  let frameId = 0;
  let hit = svg;
  let stack;
  let dialogOpen = false;
  const document = surface();
  const window = surface();
  document.activeElement = surface();
  document.elementsFromPoint = () => stack ?? [hit];
  document.elementFromPoint = () => hit;
  document.querySelector = () => dialogOpen ? {} : null;
  svg.contains = node => [svg, a, b].includes(node);
  svg.setPointerCapture = id => captures.add(id);
  svg.hasPointerCapture = id => captures.has(id);
  svg.releasePointerCapture = id => captures.delete(id);
  const globals = {
    document, window,
    requestAnimationFrame: callback => { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame: id => frames.delete(id),
  };
  svg.ownerDocument = document;
  document.defaultView = window;
  window.requestAnimationFrame = globals.requestAnimationFrame;
  window.cancelAnimationFrame = globals.cancelAnimationFrame;
  for (const [key, value] of Object.entries(globals)) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
    t.after(() => previous ? Object.defineProperty(globalThis, key, previous) : delete globalThis[key]);
  }
  const history = new ProjectHistory({
    ...newProject(), parts: [
      { id: 'a', componentId: 'resistor', x: 0, y: 0 },
      { id: 'b', componentId: 'resistor', x: 250, y: 0 },
    ],
  });
  let commits = 0;
  const commit = history.commit.bind(history);
  history.commit = project => { commits++; return commit(project); };
  const editor = new DiagramEditor(history, () => {}, message => assert.fail(message));
  const calls = { pan: [], zoom: [], boxes: [], boxQueries: [], paint: [], placement: [], refresh: [] };
  const canvas = {
    center: point(0, 0), scale: 1, boxSelection: [selection('a'), selection('b')],
    point(x, y) { return point(this.center.x + x / this.scale, this.center.y + y / this.scale); },
    pan(center, dx, dy) { calls.pan.push({ center, dx, dy }); this.center = point(center.x - dx / this.scale, center.y - dy / this.scale); },
    zoom(scale, anchor) { calls.zoom.push({ scale, anchor }); DrawingCanvas.prototype.zoom.call(this, scale, anchor); },
    applyView() {},
    showSelectionBox(...args) { calls.boxes.push(args); },
    selectionInBox(start, end) { calls.boxQueries.push({ start, end }); return this.boxSelection; },
    showReconnectPreview() {}, controls: { update() {}, setPartEnabled() {} }, showDraft() {},
    showPlacementPreview(preview) { calls.placement.push(preview); },
    position() { return point(0, 0); },
  };
  let controls;
  controls = bindCanvas({
    canvas, svg, editor, paint: project => calls.paint.push(project), refresh() { calls.refresh.push(controls.gesturing); controls.renderDraft(); },
    openPinPicker() { assert.fail('Selection must not open the pin picker.'); }, dismissInspector() {},
  });
  function send(type, target = svg, properties = {}) {
    hit = target;
    return svg.emit(type, { target, ...properties });
  }
  function flush() {
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach(callback => callback());
  }
  function click(target, properties = {}) {
    send('pointerdown', target, properties);
    send('pointerup', target, properties);
  }
  return { svg, a, b, document, window, canvas, editor, history, controls, calls, send, flush, click, captures,
    setHitStack(nodes) { stack = nodes; },
    setDialogOpen(open) { dialogOpen = open; }, commits: () => commits };
}

test('plain pointer down/up without movement selects the clicked component and blank space clears it', t => {
  const { editor, history, controls, b, svg, click, commits } = workspace(t);
  const original = editor.project;
  click(b, { clientX: 270, clientY: 15 });
  assert.deepEqual(editor.selections, [selection('b')]);
  assert.equal(controls.gesturing, false);
  click(svg, { clientX: 800, clientY: 500 });
  assert.deepEqual(editor.selections, []);
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  assert.equal(commits(), 0);
});

test('gesture boundaries refresh contextual visibility immediately for selection, marquee and pinch', t => {
  const { editor, controls, canvas, calls, a, svg, send } = workspace(t);
  canvas.zoomAt = () => {};
  editor.select('part', 'a');
  for (const target of [a, svg]) {
    calls.refresh.length = 0;
    send('pointerdown', target);
    assert.deepEqual(calls.refresh, [true], 'The context hides before any drag frame or project edit.');
    send('pointercancel', target);
    assert.equal(calls.refresh.at(-1), false, 'Cancellation restores the selected context.');
  }
  calls.refresh.length = 0;
  send('pointerdown', svg, { pointerType: 'touch', pointerId: 1 });
  assert.deepEqual(calls.refresh, [true]);
  send('pointerdown', svg, { pointerType: 'touch', pointerId: 2, clientX: 40 });
  assert.deepEqual(calls.refresh, [true, true], 'A pinch also refreshes before any view movement.');
  send('pointerup', svg, { pointerType: 'touch', pointerId: 1 });
  assert.equal(calls.refresh.at(-1), true);
  send('pointerup', svg, { pointerType: 'touch', pointerId: 2, clientX: 40 });
  assert.equal(calls.refresh.at(-1), false);
  assert.equal(controls.gesturing, false);
});

function formedWorkspace(t) {
  const view = workspace(t);
  view.editor.replace({ ...newProject(), parts: [{ id: 'host', componentId: 'breadboard', x: 0, y: 0 }] });
  const point = view.editor.suggestPlacement('resistor', 'host');
  assert.ok(point);
  const part = view.editor.addPart('resistor', point, { mount: true, hostPartId: 'host' });
  assert.ok(part?.leads);
  view.canvas.position = endpoint => endpointPositions(view.editor.project)(endpoint);
  const pin = surface(['canvas-pin'], { part: part.id, pin: '1' });
  const contains = view.svg.contains;
  view.svg.contains = node => node === pin || contains(node);
  return { ...view, part, pin };
}

test('Select dragging a formed lead previews only that tip and commits once while Wire still creates a jumper', t => {
  const { editor, canvas, history, pin, part, calls, send, flush, commits, click, controls } = formedWorkspace(t);
  const original = editor.project, beforeCommits = commits();
  const start = canvas.position({ partId: part.id, pinId: '1' });
  send('pointerdown', pin, { clientX: start.x, clientY: start.y });
  send('pointermove', pin, { clientX: start.x, clientY: start.y + 32 });
  flush();
  assert.equal(editor.project, original);
  const preview = calls.paint.at(-1).parts.find(item => item.id === part.id);
  assert.equal(preview.x, part.x); assert.equal(preview.y, part.y);
  assert.notDeepEqual(preview.leads.find(lead => lead.pinId === '1'), part.leads.find(lead => lead.pinId === '1'));
  assert.deepEqual(preview.leads.find(lead => lead.pinId === '2'), part.leads.find(lead => lead.pinId === '2'));
  send('pointerup', pin, { clientX: start.x, clientY: start.y + 32 });
  assert.equal(commits(), beforeCommits + 1);
  assert.equal(editor.project.wires.length, 0);
  assert.equal(editor.project.parts.find(item => item.id === part.id).attachment.contacts.length, 2);
  assert.equal(editor.pending, null);
  editor.step('undo'); assert.equal(editor.project, original);
  editor.setMode('wire');
  click(pin, { clientX: start.x, clientY: start.y });
  assert.deepEqual(editor.pending.from, { partId: part.id, pinId: '1' });
  assert.equal(history.project.wires.length, 0);
  controls.destroy();
});

test('visible keep-leads body mode uses its planner and rolls back on Escape', t => {
  const { editor, controls, part, a, calls, send, flush, document } = formedWorkspace(t);
  a.dataset.part = part.id;
  controls.setKeepLeadPositions(true);
  assert.equal(controls.keepLeadPositions, true);
  let planned = 0;
  const bodyPlacement = editor.bodyPlacementProject.bind(editor);
  editor.bodyPlacementProject = (...args) => { planned++; return bodyPlacement(...args); };
  const original = editor.project;
  send('pointerdown', a, { clientX: part.x, clientY: part.y });
  send('pointermove', a, { clientX: part.x + 10, clientY: part.y - 10 });
  flush();
  assert.equal(planned, 1);
  assert.equal(editor.project, original);
  assert.ok(calls.paint.at(-1).parts.find(item => item.id === part.id).leads);
  document.emit('keydown', { key: 'Escape' });
  assert.equal(editor.project, original);
  assert.equal(controls.gesturing, false);
  controls.destroy();
});

test('touching an exact breadboard hole acts directly without opening a dense pin picker', t => {
  const view = workspace(t);
  view.editor.replace({ ...newProject(), parts: [{ id: 'host', componentId: 'breadboard', x: 0, y: 0 }] });
  const pin = surface(['canvas-pin'], { part: 'host', pin: 'a2' });
  view.svg.contains = node => node === pin || node === view.svg;
  view.click(pin, { pointerType: 'touch', clientX: 96, clientY: 112 });
  assert.deepEqual(view.editor.pending.from, { partId: 'host', pinId: 'a2' });
  view.controls.destroy();
});

test('left drag on blank space displays a box and selects the geometry returned by the canvas', t => {
  const { editor, controls, svg, calls, send, flush, commits } = workspace(t);
  send('pointerdown', svg, { clientX: 20, clientY: 30 });
  send('pointermove', svg, { clientX: 400, clientY: 200 });
  flush();
  assert.equal(svg.classList.contains('selecting'), true);
  assert.deepEqual(calls.boxes.at(-1), [point(20, 30), point(400, 200)]);
  send('pointerup', svg, { clientX: 400, clientY: 200 });
  assert.deepEqual(calls.boxQueries, [{ start: point(20, 30), end: point(400, 200) }]);
  assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
  assert.deepEqual(calls.boxes.at(-1), []);
  assert.equal(svg.classList.contains('selecting'), false);
  assert.equal(controls.gesturing, false);
  assert.equal(commits(), 0);
});

test('Ctrl/Meta clicks toggle and Ctrl/Meta+Shift subtract; modifier box selection preserves unrelated items', t => {
  const { editor, canvas, a, b, svg, click, send } = workspace(t);
  click(b, { ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
  click(a, { ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('b')]);
  click(a, { metaKey: true });
  assert.deepEqual(editor.selections, [selection('b'), selection('a')]);
  click(a, { shiftKey: true, metaKey: true });
  assert.deepEqual(editor.selections, [selection('b')]);
  canvas.boxSelection = [selection('a')];
  send('pointerdown', svg, { clientX: 10, clientY: 10, ctrlKey: true });
  send('pointerup', svg, { clientX: 100, clientY: 100, ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('b'), selection('a')]);
});

test('middle, right and temporary Space drag pan over components without changing selection or project', t => {
  const { editor, controls, a, b, svg, calls, send, flush, commits } = workspace(t);
  editor.selectMany([selection('a'), selection('b')]);
  const original = editor.project;
  for (const button of [1, 2, 0]) {
    if (button === 0) controls.panWithSpace(true);
    send('pointerdown', b, { button, clientX: 250, clientY: 20 });
    send('pointermove', svg, { button, clientX: 290, clientY: 45 });
    flush();
    send('pointerup', a, { button, clientX: 290, clientY: 45 });
    if (button === 0) controls.panWithSpace(false);
    assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
    assert.equal(editor.project, original);
    assert.equal(editor.mode, 'select');
  }
  assert.equal(calls.pan.length, 3);
  assert.deepEqual(calls.pan.map(({ dx, dy }) => point(dx, dy)), [point(40, 25), point(40, 25), point(40, 25)]);
  assert.equal(commits(), 0);
});

test('dragging a selected group previews both parts and commits one undo step', t => {
  const { editor, history, a, svg, calls, send, flush, commits } = workspace(t);
  editor.selectMany([selection('a'), selection('b')]);
  const original = editor.project;
  send('pointerdown', a, { clientX: 10, clientY: 10 });
  send('pointermove', svg, { clientX: 40, clientY: 30 });
  flush();
  assert.equal(editor.project, original);
  assert.deepEqual(calls.paint.at(-1).parts.map(({ x, y }) => point(x, y)), [point(30, 20), point(280, 20)]);
  send('pointerup', svg, { clientX: 50, clientY: 35 });
  assert.equal(commits(), 1);
  assert.deepEqual(editor.project.parts.map(({ x, y }) => point(x, y)), [point(40, 25), point(290, 25)]);
  assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
});

test('Escape and pointer cancellation discard group previews and hide a selection box', t => {
  const { editor, controls, document, a, svg, calls, send, flush, commits } = workspace(t);
  editor.selectMany([selection('a'), selection('b')]);
  const original = editor.project;
  send('pointerdown', a, { clientX: 10, clientY: 10 });
  send('pointermove', svg, { clientX: 80, clientY: 50 });
  flush();
  document.emit('keydown', { key: 'Escape' });
  assert.equal(editor.project, original);
  assert.equal(calls.paint.at(-1), original);
  assert.equal(controls.gesturing, false);
  send('pointerdown', svg, { clientX: 20, clientY: 30 });
  send('pointermove', svg, { clientX: 400, clientY: 200 });
  flush();
  send('pointercancel', svg);
  assert.deepEqual(calls.boxQueries, []);
  assert.deepEqual(calls.boxes.at(-1), []);
  assert.equal(svg.classList.contains('selecting'), false);
  assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
  assert.equal(commits(), 0);
});

test('mouse wheel zooms at the pointer; Shift and horizontal scroll pan instead', t => {
  const { svg, canvas, calls, send } = workspace(t);
  const zoom = send('wheel', svg, { clientX: 120, clientY: 80, deltaX: 0, deltaY: -100, deltaMode: 0 });
  assert.equal(zoom.defaultPrevented, true);
  assert.equal(calls.zoom.length, 1);
  assert.deepEqual(calls.zoom[0].anchor, point(120, 80));
  assert.ok(canvas.scale > 1);
  send('wheel', svg, { shiftKey: true, deltaX: 0, deltaY: 50, deltaMode: 0 });
  send('wheel', svg, { deltaX: 25, deltaY: 0, deltaMode: 0 });
  send('wheel', svg, { altKey: true, deltaX: 0, deltaY: 40, deltaMode: 0 });
  assert.deepEqual(calls.pan.map(({ dx, dy }) => point(dx || 0, dy || 0)), [point(0, -50), point(-25, 0), point(0, -40)]);
  assert.equal(calls.zoom.length, 1);
});

test('Shift pans both scroll axes without zooming, including Ctrl/Meta pinch events and every delta unit', t => {
  const { canvas, editor, history, calls, svg, send, commits } = workspace(t);
  canvas.scale = 2;
  canvas.center = point(60, -30);
  svg.clientHeight = 480;
  editor.selectMany([selection('a'), selection('b')]);
  const original = editor.project;
  const selected = [...editor.selections];
  const cases = [
    [{ deltaX: 0, deltaY: 45, deltaMode: 0 }, point(0, -45)],
    [{ deltaX: 22, deltaY: -18, deltaMode: 0 }, point(-22, 18)],
    [{ deltaX: -30, deltaY: 0, deltaMode: 0 }, point(30, 0)],
    [{ ctrlKey: true, deltaX: 0, deltaY: -70, deltaMode: 0 }, point(0, 70)],
    [{ metaKey: true, deltaX: 11, deltaY: 14, deltaMode: 0 }, point(-11, -14)],
    [{ ctrlKey: true, metaKey: true, deltaX: 1, deltaY: 2, deltaMode: 0 }, point(-1, -2)],
    [{ deltaX: 1, deltaY: -2, deltaMode: 1 }, point(-16, 32)],
    [{ deltaX: -1, deltaY: .5, deltaMode: 2 }, point(480, -240)],
  ];
  for (const [properties, expected] of cases) {
    const event = send('wheel', svg, { shiftKey: true, clientX: 130, clientY: 90, ...properties });
    assert.equal(event.defaultPrevented, true);
    const { dx, dy } = calls.pan.at(-1);
    assert.deepEqual(point(dx || 0, dy || 0), expected);
    assert.equal(canvas.scale, 2);
    assert.equal(calls.zoom.length, 0);
    assert.equal(editor.project, original);
    assert.deepEqual(editor.selections, selected);
  }
  assert.equal(calls.pan.length, cases.length);
  assert.equal(history.canUndo, false);
  assert.equal(commits(), 0);

  send('wheel', svg, { ctrlKey: true, deltaX: 0, deltaY: -40, deltaMode: 0 });
  assert.equal(calls.zoom.length, 1);
  assert.ok(canvas.scale > 2);
  assert.equal(calls.pan.length, cases.length);
});

test('vertical wheel gestures ignore horizontal noise and keep the cursor anchor through zoom in and out', t => {
  const { canvas, calls, svg, send } = workspace(t);
  const cursor = point(237, 149);
  const anchor = canvas.point(cursor.x, cursor.y);
  for (const [deltaX, deltaY] of [[.25, -60], [-.5, -80], [2, -40], [-1, 40], [.75, 80], [.1, 60]]) {
    send('wheel', svg, { clientX: cursor.x, clientY: cursor.y, deltaX, deltaY, deltaMode: 0 });
    const current = canvas.point(cursor.x, cursor.y);
    assert.ok(Math.abs(current.x - anchor.x) < 1e-9);
    assert.ok(Math.abs(current.y - anchor.y) < 1e-9);
  }
  assert.equal(calls.zoom.length, 6);
  assert.equal(calls.pan.length, 0);
  assert.ok(Math.abs(canvas.scale - 1) < 1e-12);
});

test('holding Shift temporarily pans in every tool and restores its mode, selection and wire draft on release', t => {
  const { editor, controls, document, svg, b, calls, send, flush, commits } = workspace(t);
  editor.selectMany([selection('a'), selection('b')]);
  const original = editor.project;
  const selected = [...editor.selections];
  for (const mode of ['select', 'wire', 'trace', 'pan']) {
    editor.mode = mode;
    const draft = mode === 'wire' ? { from: { partId: 'a', pinId: '1' }, points: [point(70, 50)] } : null;
    const trace = mode === 'trace' ? { partId: 'a', pinId: '1' } : null;
    editor.pending = draft;
    editor.trace = trace;
    controls.renderDraft();
    document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
    assert.equal(controls.mode, 'pan');
    assert.equal(svg.dataset.mode, 'pan');
    assert.equal(editor.mode, mode);
    send('pointerdown', b, { shiftKey: true, clientX: 250, clientY: 20 });
    send('pointermove', svg, { shiftKey: true, clientX: 290, clientY: 45 });
    flush();
    send('pointerup', svg, { shiftKey: true, clientX: 290, clientY: 45 });
    document.emit('keyup', { key: 'Shift', target: svg });
    assert.equal(controls.mode, mode);
    assert.equal(svg.dataset.mode, mode);
    assert.equal(editor.pending, draft);
    assert.equal(editor.trace, trace);
    assert.equal(editor.project, original);
    assert.deepEqual(editor.selections, selected);
  }
  assert.equal(calls.pan.length, 4);
  assert.equal(commits(), 0);
});

test('Shift and Space temporary pan remain active until both held keys are released', t => {
  const { controls, editor, document, svg } = workspace(t);
  editor.mode = 'wire';
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  controls.panWithSpace(true);
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'pan');
  assert.equal(svg.dataset.mode, 'pan');
  document.emit('keyup', { key: ' ', target: svg });
  assert.equal(controls.mode, 'wire');
  controls.panWithSpace(true);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  document.emit('keyup', { key: ' ', target: svg });
  assert.equal(controls.mode, 'pan');
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'wire');
  assert.equal(editor.mode, 'wire');
});

test('Shift on pointer down pans even when its keydown was missed, without changing the selected item', t => {
  const { editor, document, controls, b, svg, send, flush, calls, commits } = workspace(t);
  const original = editor.project;
  const selected = [...editor.selections];
  send('pointerdown', b, { shiftKey: true, clientX: 250, clientY: 20 });
  send('pointermove', svg, { shiftKey: true, clientX: 285, clientY: 50 });
  flush();
  send('pointerup', svg, { shiftKey: true, clientX: 285, clientY: 50 });
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(calls.pan.length, 1);
  assert.deepEqual(point(calls.pan[0].dx, calls.pan[0].dy), point(35, 30));
  assert.equal(editor.project, original);
  assert.deepEqual(editor.selections, selected);
  assert.equal(controls.mode, 'select');
  assert.equal(commits(), 0);
});

test('releasing Shift during a pan restores the tool without turning that drag into a component edit', t => {
  const { editor, controls, document, b, svg, send, flush, calls, commits } = workspace(t);
  const original = editor.project;
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  send('pointerdown', b, { shiftKey: true, clientX: 250, clientY: 20 });
  send('pointermove', svg, { shiftKey: true, clientX: 285, clientY: 50 });
  flush();
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'select');
  send('pointermove', svg, { clientX: 300, clientY: 65 });
  flush();
  send('pointerup', svg, { clientX: 300, clientY: 65 });
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
  assert.equal(calls.pan.length, 2);
  send('pointerdown', b, { clientX: 250, clientY: 20 });
  send('pointerup', svg, { clientX: 270, clientY: 35 });
  assert.equal(commits(), 1);
  assert.equal(calls.pan.length, 2);
});

test('temporary Shift pan ignores text entry, dialogs, composition and Ctrl/Meta selection chords', t => {
  const { editor, controls, document, svg, setDialogOpen } = workspace(t);
  editor.mode = 'trace';
  for (const tag of ['input', 'select', 'textarea', '[contenteditable]']) {
    const input = surface();
    input.matches = selector => selector.includes(tag);
    document.activeElement = input;
    document.emit('keydown', { key: 'Shift', shiftKey: true, target: input });
    assert.equal(controls.mode, 'trace', `Shift in ${tag} must not change the canvas tool`);
    document.emit('keyup', { key: 'Shift', target: input });
  }
  document.activeElement = svg;
  for (const properties of [{ ctrlKey: true }, { metaKey: true }, { isComposing: true }]) {
    document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg, ...properties });
    assert.equal(controls.mode, 'trace');
    document.emit('keyup', { key: 'Shift', target: svg });
  }
  setDialogOpen(true);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  assert.equal(controls.mode, 'trace');
  setDialogOpen(false);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  assert.equal(controls.mode, 'pan');
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'trace');
});

test('window blur cancels an active temporary pan and restores the preceding tool without stuck keys', t => {
  const { editor, controls, document, window, b, svg, send, flush, commits } = workspace(t);
  editor.mode = 'wire';
  const draft = { from: { partId: 'a', pinId: '1' }, points: [] };
  editor.pending = draft;
  const original = editor.project;
  controls.panWithSpace(true);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  send('pointerdown', b, { shiftKey: true, clientX: 250, clientY: 20 });
  send('pointermove', svg, { shiftKey: true, clientX: 285, clientY: 50 });
  flush();
  window.emit('blur');
  assert.equal(controls.mode, 'wire');
  assert.equal(svg.dataset.mode, 'wire');
  assert.equal(controls.gesturing, false);
  assert.equal(svg.classList.contains('dragging'), false);
  assert.equal(editor.mode, 'wire');
  assert.equal(editor.pending, draft);
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
});

test('Ctrl/Meta selection chords suspend the Shift hand and releasing them while Shift stays held restores it', t => {
  const { editor, controls, document, svg } = workspace(t);
  editor.mode = 'trace';
  for (const modifier of ['Control', 'Meta']) {
    document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
    assert.equal(controls.mode, 'pan');
    assert.equal(controls.temporaryPan, true);
    document.emit('keydown', { key: modifier, shiftKey: true, [modifier === 'Control' ? 'ctrlKey' : 'metaKey']: true, target: svg });
    assert.equal(controls.mode, 'trace');
    assert.equal(controls.temporaryPan, false);
    document.emit('keyup', { key: modifier, shiftKey: true, target: svg });
    assert.equal(controls.mode, 'pan');
    assert.equal(controls.temporaryPan, true);
    document.emit('keyup', { key: 'Shift', target: svg });
    assert.equal(controls.mode, 'trace');
    assert.equal(controls.temporaryPan, false);
  }
});

test('Shift hand preserves the larger keyboard nudge shortcut and restores the selected tool', t => {
  const { editor, controls, document, svg, send } = workspace(t);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  send('keydown', svg, { key: 'ArrowRight', shiftKey: true });
  assert.equal(editor.part.x, 10);
  assert.equal(controls.mode, 'pan');
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'select');
});

test('a held Shift key stays authoritative throughout pointer input until keyup', t => {
  const { editor, controls, document, svg, b, calls, send, flush, commits } = workspace(t);
  editor.mode = 'wire';
  const original = editor.project;
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  send('pointerdown', b, { clientX: 250, clientY: 20 });
  send('pointermove', svg, { clientX: 290, clientY: 45 });
  flush();
  send('pointerup', svg, { clientX: 290, clientY: 45 });
  assert.equal(controls.mode, 'pan');
  assert.deepEqual(calls.pan.map(({ dx, dy }) => point(dx, dy)), [point(40, 25)]);
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'wire');
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
});

test('the temporary Shift hand pans a two-touch gesture without changing its zoom', t => {
  const { editor, canvas, controls, document, svg, send, flush, commits } = workspace(t);
  const original = editor.project;
  canvas.zoomAt = (scale, anchor, x, y) => DrawingCanvas.prototype.zoomAt.call(canvas, scale, anchor, x, y);
  document.emit('keydown', { key: 'Shift', shiftKey: true, target: svg });
  send('pointerdown', svg, { pointerType: 'touch', pointerId: 1, clientX: 100, clientY: 100 });
  send('pointerdown', svg, { pointerType: 'touch', pointerId: 2, clientX: 200, clientY: 100 });
  send('pointermove', svg, { pointerType: 'touch', pointerId: 2, clientX: 300, clientY: 100 });
  flush();
  assert.equal(canvas.scale, 1);
  assert.deepEqual(canvas.center, point(-50, 0));
  send('pointerup', svg, { pointerType: 'touch', pointerId: 2, clientX: 300, clientY: 100 });
  send('pointerup', svg, { pointerType: 'touch', pointerId: 1, clientX: 100, clientY: 100 });
  document.emit('keyup', { key: 'Shift', target: svg });
  assert.equal(controls.mode, 'select');
  assert.equal(controls.gesturing, false);
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
});

test('macOS-style Ctrl secondary clicks toggle disparate selections instead of panning', t => {
  const { editor, a, b, click, calls, commits } = workspace(t);
  click(b, { button: 2, ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('a'), selection('b')]);
  click(a, { button: 2, ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('b')]);
  assert.equal(calls.pan.length, 0);
  assert.equal(commits(), 0);
});

test('modifier selection prefers a wire hit over an overlapping board contact', t => {
  const { editor, a, b, svg, click, setHitStack } = workspace(t);
  editor.commit({ ...editor.project, wires: [{ id: 'inside-wire', color: '#2c83d9',
    from: { partId: 'a', pinId: '1' }, to: { partId: 'b', pinId: '1' } }] });
  editor.select('part', 'b');
  const contact = surface(['canvas-pin'], { part: 'a', pin: '1' });
  const wire = surface(['wire-hit'], { wire: 'inside-wire' });
  svg.contains = node => [svg, a, b, contact, wire].includes(node);
  setHitStack([contact, wire, a]);
  click(contact, { ctrlKey: true });
  assert.deepEqual(editor.selections, [selection('b'), { type: 'wire', id: 'inside-wire' }]);
  click(contact, { metaKey: true });
  assert.deepEqual(editor.selections, [selection('b')]);
});

test('dragging inside a breadboard selects contents while dragging its caption moves the complete assembly', t => {
  const { editor, a, canvas, calls, send, flush, commits } = workspace(t);
  editor.replace({ ...newProject(), parts: [
    { id: 'a', componentId: 'breadboard', x: 0, y: 0 },
    { id: 'child', componentId: 'resistor', x: 100, y: 220 },
  ], junctions: [{ id: 'joint', x: 200, y: 200 }], wires: [{ id: 'inside', color: '#2c83d9',
    from: { partId: 'a', pinId: 'a1' }, to: { junctionId: 'joint' },
    points: [point(120, 96), point(120, 200)], fixedRoute: true }] });
  const original = editor.project;
  canvas.boxSelection = [{ type: 'wire', id: 'inside' }];
  a.dataset.partRegion = 'body';
  send('pointerdown', a, { clientX: 184, clientY: 200 });
  send('pointermove', a, { clientX: 110, clientY: 100 });
  flush();
  assert.equal(editor.project, original);
  assert.deepEqual(calls.boxes.at(-1), [point(184, 200), point(110, 100)]);
  send('pointerup', a, { clientX: 110, clientY: 100 });
  assert.deepEqual(editor.selections, [{ type: 'wire', id: 'inside' }]);
  assert.equal(commits(), 0);

  a.dataset.partRegion = 'caption';
  send('pointerdown', a, { clientX: 180, clientY: 670 });
  send('pointermove', a, { clientX: 210, clientY: 690 });
  flush();
  const preview = calls.paint.at(-1);
  assert.equal(preview.parts[0].x, 30);
  assert.equal(preview.parts[1].x, 130);
  assert.deepEqual(preview.junctions[0], { id: 'joint', x: 230, y: 220 });
  send('pointerup', a, { clientX: 210, clientY: 690 });
  assert.equal(commits(), 1);
  assert.equal(editor.project.parts[1].x, 130);
});

test('destroying canvas input rolls back an active preview and detaches pointer, wheel and keyboard handlers', t => {
  const { editor, b, svg, controls, calls, send, flush, click, captures, commits } = workspace(t);
  const original = editor.project;
  send('pointerdown', b, { clientX: 250, clientY: 20 });
  send('pointermove', b, { clientX: 290, clientY: 40 });
  flush();
  assert.notEqual(calls.paint.at(-1), original);
  assert.equal(captures.has(1), true);
  controls.destroy();
  controls.destroy();
  assert.equal(calls.paint.at(-1), original);
  assert.equal(controls.gesturing, false);
  assert.equal(captures.size, 0);
  assert.equal(svg.classList.contains('dragging'), false);
  click(b);
  send('wheel', svg, { deltaX: 0, deltaY: 80, deltaMode: 0 });
  send('keydown', svg, { key: 'ArrowRight' });
  assert.deepEqual(editor.selections, [selection('b')]);
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
  assert.equal(calls.zoom.length, 0);
});

for (const stop of ['destroy', 'blur']) {
  test(`${stop} releases every active pinch capture and cancels its queued frame`, t => {
    const { editor, controls, canvas, svg, window, calls, send, flush, captures, commits } = workspace(t);
    const original = editor.project;
    canvas.zoomAt = (...args) => calls.zoom.push(args);
    send('pointerdown', svg, { pointerType: 'touch', pointerId: 11, clientX: 100, clientY: 100 });
    send('pointerdown', svg, { pointerType: 'touch', pointerId: 12, clientX: 200, clientY: 100 });
    send('pointermove', svg, { pointerType: 'touch', pointerId: 12, clientX: 250, clientY: 100 });
    assert.deepEqual([...captures], [11, 12]);
    assert.equal(controls.gesturing, true);

    if (stop === 'destroy') controls.destroy();
    else window.emit('blur');
    assert.equal(captures.size, 0);
    assert.equal(controls.gesturing, false);
    flush();
    assert.equal(calls.zoom.length, 0);
    assert.equal(editor.project, original);
    assert.equal(commits(), 0);

    if (stop === 'blur') {
      send('pointerdown', svg, { pointerType: 'touch', pointerId: 13, clientX: 20, clientY: 20 });
      assert.deepEqual([...captures], [13]);
      send('pointerup', svg, { pointerType: 'touch', pointerId: 13, clientX: 20, clientY: 20 });
      assert.equal(captures.size, 0);
    }
    controls.destroy();
  });
}

test('part dragging previews the placement planner and commits its final fractional scaled pose once', t => {
  const { editor, a, svg, calls, send, flush, commits } = workspace(t);
  const original = editor.project;
  const proposals = [];
  editor.placementProject = (id, destination, project) => {
    proposals.push({ id, destination, project });
    return { ...project, parts: project.parts.map(part => part.id === id
      ? { ...part, x: destination.x + .25, y: destination.y + .5, scale: { x: .8, y: 1.2 } } : part) };
  };
  send('pointerdown', a, { clientX: 10, clientY: 10 });
  send('pointermove', svg, { clientX: 40, clientY: 30 });
  flush();
  assert.equal(editor.project, original);
  assert.equal(commits(), 0);
  assert.deepEqual(calls.paint.at(-1).parts[0], { ...original.parts[0], x: 30.25, y: 20.5, scale: { x: .8, y: 1.2 } });
  send('pointermove', svg, { clientX: 50, clientY: 45 });
  send('pointerup', svg, { clientX: 60, clientY: 50 });
  assert.equal(commits(), 1);
  assert.deepEqual(proposals.at(-1), { id: 'a', destination: point(50, 40), project: original });
  assert.deepEqual(editor.project.parts[0], { ...original.parts[0], x: 50.25, y: 40.5, scale: { x: .8, y: 1.2 } });
  flush();
  assert.equal(commits(), 1);
  editor.step('undo');
  assert.equal(editor.project, original);
});

for (const stop of ['Escape', 'pointercancel', 'blur', 'pinch', 'destroy']) {
  test(`${stop} clears a fitted part preview without saving an attachment or scale`, t => {
    const { editor, controls, document, window, a, svg, calls, send, flush, commits } = workspace(t);
    const original = editor.project;
    editor.placementProject = (id, destination, project) => ({ ...project,
      parts: project.parts.map(part => part.id === id ? { ...part, ...destination, scale: { x: 2, y: 2 },
        attachment: { hostPartId: 'b', contacts: [{ pinId: '1', hostPinId: '2' }] } } : part),
    });
    send('pointerdown', a, { clientX: 10, clientY: 10, pointerType: 'touch' });
    send('pointermove', svg, { clientX: 45, clientY: 35, pointerType: 'touch' });
    flush();
    assert.equal(calls.placement.at(-1).part.attachment.hostPartId, 'b');
    if (stop === 'Escape') document.emit('keydown', { key: 'Escape' });
    if (stop === 'pointercancel') send('pointercancel');
    if (stop === 'blur') window.emit('blur');
    if (stop === 'pinch') send('pointerdown', svg, { pointerId: 2, pointerType: 'touch', clientX: 100, clientY: 100 });
    if (stop === 'destroy') controls.destroy();
    assert.equal(calls.placement.at(-1), undefined);
    assert.equal(editor.project, original);
    assert.equal(commits(), 0);
    assert.equal(calls.paint.at(-1), original);
    controls.destroy();
  });
}
