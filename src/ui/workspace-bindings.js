import { createScope } from '../shared/lifecycle.js';
import { bindKeyboardShortcuts } from './keyboard-shortcuts.js';
import { bindToolbar } from './toolbar.js';
import { requireElement } from './dom.js';

export function bindWorkspaceActions({ editor, controls, commands, preferences, view, projectControls,
  library, panels, svg, render, notify, focusCanvas, root = document, signal }) {
  const scope = createScope({ signal });
  const element = id => requireElement(root, `#${id}`);
  const click = (id, action) => scope.on(element(id), 'click', action);
  const title = element('project-title');
  const moveControls = element('move-controls');
  const singleKeyToggle = element('single-key-shortcuts');
  const modeButtons = [...root.querySelectorAll('.tool-group [data-mode]')];
  singleKeyToggle.checked = preferences.singleKeyShortcuts;

  function cancel() {
    view.closeMove();
    commands.cancel();
    panels.close();
    projectControls.closeMenus();
    render();
  }

  scope.on(title, 'change', () => {
    const name = title.value.trim();
    if (name && name !== editor.project.title) editor.commit({ ...editor.project, title: name });
    title.value = editor.project.title;
  });
  scope.on(title, 'keydown', event => {
    if (event.key === 'Escape') title.value = editor.project.title;
    if (event.key === 'Enter' || event.key === 'Escape') title.blur();
  });
  for (const button of modeButtons) scope.on(button, 'click', () => commands.changeMode(button.dataset.mode));
  const toolbar = bindToolbar(requireElement(root, '.tool-group'), { signal: scope.signal });
  scope.cleanup(toolbar.destroy);
  click('help', () => element('help-dialog').showModal());
  click('fit', event => commands.fit(event.shiftKey));
  click('fit-selection', () => commands.fit(true));
  click('zoom-in', () => commands.zoom(1.25));
  click('zoom-out', () => commands.zoom(.8));
  click('zoom-value', () => commands.zoom(1));
  click('browse-components', library.browse);
  click('skip-to-canvas', event => { event.preventDefault(); panels.close(); focusCanvas(); });
  click('download-unsaved', projectControls.saveFile);
  click('toggle-move', view.toggleMove);
  scope.on(moveControls, 'click', event => {
    const button = event.target.closest('[data-nudge-x]');
    if (button && !button.disabled) controls.nudge(Number(button.dataset.nudgeX), Number(button.dataset.nudgeY));
  });
  click('undo', commands.undo);
  click('redo', commands.redo);
  click('cancel-wire', commands.cancelWire);
  click('add-bend', commands.addBend);
  click('remove-bend', commands.removeBend);
  click('branch-wire', commands.branchWire);
  click('inspect-wire', () => panels.set('inspector', true, { focus: true }));
  click('clear-trace', commands.clearTrace);
  click('delete-selection', () => { commands.deleteSelection(); focusCanvas(); });

  const shortcuts = bindKeyboardShortcuts({
    commands, controls, library, projectControls, panels, cancel,
    enabled: () => preferences.singleKeyShortcuts, svg, moveControls, modeButtons, root, signal: scope.signal,
  });
  scope.cleanup(shortcuts.destroy);
  scope.on(singleKeyToggle, 'change', () => {
    preferences.setSingleKeyShortcuts(singleKeyToggle.checked);
    shortcuts.updateHints();
  });
  scope.cleanup(() => {
    const help = element('help-dialog');
    if (help.open) help.close();
  });
  return { destroy: scope.destroy };
}
