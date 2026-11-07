import assert from 'node:assert/strict';
import { test } from 'node:test';
import { bindKeyboardShortcuts } from '../src/ui/keyboard-shortcuts.js';

test('workspace shortcuts respect text entry, canvas focus and the shortcut preference', t => {
  const previous = globalThis.document;
  t.after(() => {
    if (previous === undefined) delete globalThis.document;
    else globalThis.document = previous;
  });
  let handler;
  let dialogOpen = false;
  globalThis.document = {
    addEventListener(name, callback) { if (name === 'keydown') handler = callback; },
    querySelector() { return dialogOpen; },
  };
  const calls = [];
  let enabled = true;
  const svg = { contains: target => target.canvas === true };
  const target = {
    matches: () => false,
    closest: () => null,
    blur() { calls.push('blur'); },
  };
  const modeButtons = ['select', 'wire', 'trace', 'pan'].map(mode => ({
    dataset: { mode }, key: { hidden: false }, attributes: new Map(),
    setAttribute(name, value) { this.attributes.set(name, value); },
    removeAttribute(name) { this.attributes.delete(name); },
    getAttribute() { return mode; },
    querySelector() { return this.key; },
  }));
  const binding = bindKeyboardShortcuts({
    commands: {
      changeMode: mode => calls.push(mode),
      selectAll() { calls.push('select', 'select-all'); },
      fit: selection => calls.push(selection ? ['fit-selection', [{ type: 'part', id: 'one' }]] : 'fit'),
      zoom: factor => calls.push(['zoom', factor === 1 ? 1 : 2 * factor]),
      undo: () => calls.push('undo'), redo: () => calls.push('redo'),
      rotate: () => calls.push('rotate'), deleteSelection: () => calls.push('delete'),
    },
    controls: { gesturing: false, panWithSpace: active => calls.push(['pan', active]) },
    library: { browse: () => calls.push('browse') },
    projectControls: { saveFile: () => calls.push('save') },
    panels: { switchRegion: backwards => calls.push(['region', backwards]) },
    cancel: () => calls.push('cancel'),
    enabled: () => enabled,
    svg, moveControls: { contains: () => false }, modeButtons,
  });
  function press(key, options = {}) {
    const event = {
      key, target, preventDefault() { this.defaultPrevented = true; }, ...options,
    };
    handler(event);
    return event;
  }

  assert.equal(press('w').defaultPrevented, true);
  assert.deepEqual(calls.splice(0), ['wire']);
  press('Delete');
  assert.deepEqual(calls, []);
  press('Delete', { target: { ...target, canvas: true } });
  assert.deepEqual(calls.splice(0), ['delete']);

  const input = { ...target, matches: () => true };
  press('w', { target: input });
  press('z', { target: input, ctrlKey: true });
  assert.deepEqual(calls, []);
  press('s', { target: input, ctrlKey: true });
  press('s', { ctrlKey: true, repeat: true });
  assert.deepEqual(calls.splice(0), ['blur', 'save']);

  press('z', { ctrlKey: true });
  press('z', { metaKey: true, shiftKey: true });
  press('y', { ctrlKey: true });
  assert.deepEqual(calls.splice(0), ['undo', 'redo', 'redo']);
  press('a', { ctrlKey: true });
  press('a', { ctrlKey: true, target: input });
  assert.deepEqual(calls, []);
  press('a', { metaKey: true, target: { ...target, canvas: true } });
  assert.deepEqual(calls.splice(0), ['select', 'select-all']);
  press('f');
  press('Home');
  press('F', { shiftKey: true });
  assert.deepEqual(calls.splice(0), ['fit', 'fit', ['fit-selection', [{ type: 'part', id: 'one' }]]]);
  press('+');
  press('-');
  press('0');
  assert.deepEqual(calls.splice(0), [['zoom', 2.5], ['zoom', 1.6], ['zoom', 1]]);
  enabled = false;
  binding.updateHints();
  assert.ok(modeButtons.every(button => button.key.hidden && !button.attributes.has('aria-keyshortcuts')));
  press('w');
  press('/');
  assert.deepEqual(calls, []);
  press('F6', { shiftKey: true });
  press('Escape');
  assert.deepEqual(calls.splice(0), [['region', true], 'cancel']);
  dialogOpen = true;
  press('Escape');
  press('s', { ctrlKey: true });
  assert.deepEqual(calls, []);
});
