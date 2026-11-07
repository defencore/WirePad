import { createScope } from '../shared/lifecycle.js';
const modeKeys = { select: 'V', wire: 'W', trace: 'T', pan: 'H' };

export function bindKeyboardShortcuts({ commands, controls, library, projectControls, panels,
  cancel, enabled, svg, moveControls, modeButtons, root = document, signal }) {
  const scope = createScope({ signal });
  function updateHints() {
    for (const button of modeButtons) {
      const key = modeKeys[button.dataset.mode];
      if (enabled()) button.setAttribute('aria-keyshortcuts', key);
      else button.removeAttribute('aria-keyshortcuts');
      button.querySelector('kbd').hidden = !enabled();
      const label = button.getAttribute('aria-label');
      button.title = button.dataset.mode === 'pan'
        ? `${label} (${enabled() ? `${key}; hold ` : 'hold '}Shift or Space)`
        : enabled() ? `${label} (${key})` : label;
    }
  }

  const actions = {
    v: () => commands.changeMode('select'),
    w: () => commands.changeMode('wire'),
    t: () => commands.changeMode('trace'),
    h: () => commands.changeMode('pan'),
    f: event => commands.fit(event.shiftKey),
    home: () => commands.fit(),
    '+': () => commands.zoom(1.25),
    '=': () => commands.zoom(1.25),
    '-': () => commands.zoom(.8),
    '0': () => commands.zoom(1),
    r: () => commands.rotate(),
    '/': library.browse,
    delete: commands.deleteSelection,
    backspace: commands.deleteSelection,
    escape: cancel,
  };

  scope.on(root, 'keydown', event => {
    if (event.defaultPrevented || event.isComposing || controls.gesturing || root.querySelector('dialog[open]')) return;
    const key = event.key.toLowerCase();
    const editing = event.target.matches('input, select, textarea, [contenteditable]');
    if (key === 'f6' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      panels.switchRegion(event.shiftKey, library.browse);
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
    if ((event.ctrlKey || event.metaKey) && key === 'a' && (event.target === svg || svg.contains(event.target))) {
      event.preventDefault();
      commands.selectAll();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && ['z', 'y'].includes(key)) {
      event.preventDefault();
      (key === 'y' || event.shiftKey ? commands.redo : commands.undo)();
      return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (!enabled() && key.length === 1 && key !== ' ') return;
    if (['delete', 'backspace'].includes(key) && !svg.contains(event.target) && event.target !== svg && !moveControls.contains(event.target)) return;
    if (key === ' ' && !event.target.closest('button, a, summary')) {
      event.preventDefault();
      controls.panWithSpace(true);
    } else if (Object.hasOwn(actions, key)) {
      event.preventDefault();
      actions[key](event);
    }
  });

  updateHints();
  return { updateHints, destroy: scope.destroy };
}
