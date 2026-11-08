import { bindCanvas } from '../canvas/input.js';
import { DrawingCanvas } from '../canvas/canvas.js';
import { DiagramEditor } from '../editor/editor.js';
import { ProjectHistory } from '../model/history.js';
import { newProject } from '../model/project.js';
import { createScope } from '../shared/lifecycle.js';
import { bindLibrary } from '../ui/component-library.js';
import { requireElement } from '../ui/dom.js';
import { addIcons } from '../ui/icons.js';
import { bindInspector } from '../ui/inspector/controller.js';
import { bindNotifications } from '../ui/notifications.js';
import { bindWorkspacePanels } from '../ui/panels.js';
import { bindPinPicker } from '../ui/pin-picker.js';
import { bindProjectControls } from '../ui/project-controls.js';
import { bindWorkspaceActions } from '../ui/workspace-bindings.js';
import { createWorkspaceView, workspaceInsets } from '../ui/workspace-view.js';
import { createCommands } from './commands.js';
import { bindPersistence } from './persistence.js';
import { createPreferences } from './preferences.js';
import { ProjectStorage } from './project-storage.js';

export function createApplication({ root = document, storage = new ProjectStorage(), showStart = true } = {}) {
  const scope = createScope();
  try {
    const element = id => requireElement(root, `#${id}`);
    const svg = element('canvas');
    const focusCanvas = () => { if (!scope.destroyed) svg.focus({ preventScroll: true }); };
    const notifications = bindNotifications({ toast: element('toast'), signal: scope.signal });
    const { notify } = notifications;
    scope.cleanup(notifications.destroy);
    const savedProject = storage.project;
    const history = new ProjectHistory(savedProject ?? newProject());
    let ready = false;
    let saveOnReady = false;

    // Bindings may request a render while mounting; the complete view graph renders once ready.
    function render({ persist = false } = {}) {
      if (scope.destroyed) return;
      if (!ready) { saveOnReady ||= persist; return; }
      if (persist) persistence.save();
      paint();
      inspector.render();
      projectControls.render();
      view.render();
    }
    const editor = new DiagramEditor(history, render, notify);
    const persistence = bindPersistence({ storage, getProject: () => editor.project, notify,
      onChange: render, target: root.defaultView, signal: scope.signal });
    scope.cleanup(persistence.destroy);
    const preferences = createPreferences({ notify });
    const panels = bindWorkspacePanels({ svg, onChange: render, root, signal: scope.signal });
    scope.cleanup(panels.destroy);
    const canvas = new DrawingCanvas({
      svg, scene: element('scene'), draft: element('draft'), signal: scope.signal,
      viewInsets: () => workspaceInsets(root, svg),
      onZoom: zoom => { element('zoom-value').textContent = `${Math.max(1, Math.round(zoom * 100))}%`; },
    });
    scope.cleanup(() => canvas.destroy());

    function paint(project = editor.project) {
      if (!ready || scope.destroyed) return;
      canvas.draw(project, editor.selection, editor.pending?.from, editor.traceSeed, controls.wireControls, editor.selections);
      controls.renderDraft();
    }
    const controls = bindCanvas({
      canvas, svg, editor, paint, refresh: render, signal: scope.signal,
      openPinPicker: (id, pinId, from, mode = editor.mode === 'trace' ? 'trace' : 'wire') =>
        pinPicker.open(editor.item('part', id), { mode, from, pinId }),
      dismissInspector: () => panels.set('inspector', false),
    });
    scope.cleanup(controls.destroy);
    const commands = createCommands({ editor, canvas, controls, panels, svg, notify, focusCanvas });
    const pinPicker = bindPinPicker({ onChoose: controls.chooseEndpoint, focusCanvas, root, signal: scope.signal });
    scope.cleanup(pinPicker.destroy);
    const inspector = bindInspector({ inspection: element('inspection'), editor, notify, focusCanvas,
      autoRouteWire: commands.autoRouteWire, root, signal: scope.signal });
    scope.cleanup(inspector.destroy);
    const projectControls = bindProjectControls({ editor, canvas, savedProject, storage, notify, focusCanvas,
      canExport: () => !controls.gesturing, root, signal: scope.signal });
    scope.cleanup(projectControls.destroy);
    const library = bindLibrary({ library: element('library'), board: element('board'), addPart: commands.addPart,
      openPanel: () => panels.set('library', true),
      closePanel: () => { if (panels.isCompact('library')) { panels.set('library', false); focusCanvas(); } },
      root, signal: scope.signal });
    scope.cleanup(library.destroy);
    const view = createWorkspaceView({ editor, history, canvas, controls, panels, persistence, root });
    const actions = bindWorkspaceActions({ editor, controls, commands, preferences, view, projectControls,
      library, panels, svg, render, notify, focusCanvas, root, signal: scope.signal });
    scope.cleanup(actions.destroy);

    addIcons(root);
    ready = true;
    render({ persist: saveOnReady });
    canvas.fit();
    if (showStart) projectControls.openStart();
    return { editor, canvas, controls, commands, render, destroy: scope.destroy };
  } catch (error) {
    scope.destroy();
    throw error;
  }
}
