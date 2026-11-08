import { icon } from './icons.js';
import { endpointName } from '../model/names.js';
import { componentForPart } from '../model/part-component.js';
import { requireElement } from './dom.js';

export function workspaceInsets(root, svg) {
  const frame = svg.getBoundingClientRect();
  if (!frame.height) return {};
  const top = root.querySelector('.canvas-toolbar').getBoundingClientRect();
  const bottom = root.querySelector('.board-bottom').getBoundingClientRect();
  const ratio = svg.clientHeight / frame.height;
  return { top: Math.max(0, top.bottom - frame.top + 12) * ratio,
    bottom: Math.max(0, frame.bottom - bottom.top + 12) * ratio };
}

export function createWorkspaceView({ editor, history, canvas, controls, panels, persistence, root = document }) {
  const element = id => requireElement(root, `#${id}`);
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
  const undo = element('undo');
  const redo = element('redo');
  const fitSelection = element('fit-selection');
  const deleteSelection = element('delete-selection');
  const guidePanel = root.querySelector('.canvas-guide');
  const moveToggle = element('toggle-move');
  const moveControls = element('move-controls');
  const warning = element('workspace-warning');
  const warningText = element('workspace-warning-text');
  const modes = [...root.querySelectorAll('.tool-group [data-mode]')];
  let moveOpen = false;

  function canvasHint() {
    if (controls.mode === 'pan') return controls.temporaryPan
      ? 'Drag to pan · Release Shift or Space to return to your tool'
      : 'Drag to pan · Scroll to zoom · V to select';
    const touchLayout = panels.isCompact('library');
    const tool = controls.wireTool?.kind;
    if (tool === 'add') return 'Choose a place on the canvas for the new bend.';
    if (tool === 'from' || tool === 'to') return 'Choose a pin, module, junction, or another wire for this end.';
    if (tool === 'bend') return 'Drag bend · Arrows to nudge · Delete to remove';
    if (tool === 'segment') return 'Drag segment · Arrows to nudge';
    if (editor.pending) {
      const { from } = editor.pending;
      if (from.wireId) return 'Choose a pin or another wire to add a branch.';
      if (from.junctionId) return 'Choose a pin or wire to connect to this junction.';
      const source = endpointName(editor.project, from);
      return `From ${source}. Choose a destination pin or wire.`;
    }
    if (editor.selections.length > 1) return `${editor.canMoveSelection ? 'Drag to move · ' : ''}Ctrl/⌘+click to toggle · Esc to clear`;
    const net = canvas.tracedNet;
    if (net?.endpoints.size) {
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
    if (editor.part?.leads) return controls.keepLeadPositions
      ? 'Drag the body to bend its legs · Inserted tips stay fixed'
      : 'Drag blue tips to move leads · W to add a jumper';
    if (editor.part && componentForPart(editor.part).surface) return `Drag inside to ${canvas.controls.coarsePointer.matches ? 'pan' : 'select'} · Drag the border or label to move the board`;
    return touchLayout ? 'Drag to pan · Pinch to zoom · Tap to select'
      : 'Drag to select · Shift+scroll to pan · Scroll to zoom';
  }

  function render() {
    const storageStatus = persistence.status;

    if (saveState.dataset.status !== storageStatus) {
      saveState.dataset.status = storageStatus;
      saveState.innerHTML = {
        saved: `${icon('check')} Saved locally`,
        empty: 'Local workspace',
        invalid: 'Recovery data available',
        unavailable: 'Save a project file to keep changes',
        failed: 'Browser storage is full',
        conflict: 'Project updated in another tab',
      }[storageStatus];
    }
    const showWarning = ['invalid', 'unavailable', 'failed', 'conflict'].includes(storageStatus);
    warning.hidden = !showWarning;
    if (warningText.textContent !== persistence.message) warningText.textContent = persistence.message;

    const { parts, wires } = editor.project;
    const routing = Boolean(editor.pending);
    const selectedWire = editor.wire && !routing && controls.mode !== 'pan';
    const tool = controls.wireTool?.kind;
    const editingWire = tool === 'from' || tool === 'to' || tool === 'add';
    const editableWire = selectedWire && editor.mode === 'select';
    const selected = editor.selections.length > 0;
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
    const currentStatus = controls.temporaryPan ? 'Panning' : editingWire ? 'Editing wire' : routing ? 'Routing wire' : editor.selections.length > 1
      ? `${editor.selections.length} selected` : editor.traceSeed ? 'Tracing connections' : 'Ready';
    const total = `${parts.length} ${parts.length === 1 ? 'part' : 'parts'} · ${wires.length} ${wires.length === 1 ? 'wire' : 'wires'}`;
    if (hint.textContent !== guide) hint.textContent = guide;
    if (status.textContent !== currentStatus) status.textContent = currentStatus;
    if (count.textContent !== total) count.textContent = total;
    undo.disabled = !history.canUndo;
    redo.disabled = !history.canRedo;
    fitSelection.disabled = !selected || Boolean(editor.pending || editingWire);
    deleteSelection.hidden = !selected || routing || editingWire || tool === 'bend' || controls.mode === 'pan';
    guidePanel.dataset.active = String(routing || editingWire);
    cancelWire.hidden = !routing && !editingWire;
    cancelWireLabel.textContent = editingWire ? 'Cancel edit' : 'Cancel wire';
    addBend.hidden = !editableWire || (editingWire && tool !== 'add');
    addBend.setAttribute('aria-pressed', String(tool === 'add'));
    removeBend.hidden = !editableWire || tool !== 'bend';
    branchWire.hidden = !selectedWire || editingWire;
    inspectWire.hidden = !selectedWire || editingWire || !panels.isCompact('inspector');
    clearTrace.hidden = controls.mode !== 'trace' || !editor.trace;
    emptyBoard.hidden = editor.hasDrawing;
    if (document.activeElement !== title) title.value = editor.project.title;
    for (const button of modes) button.setAttribute('aria-pressed', String(button.dataset.mode === controls.mode));
  }

  return {
    render,
    closeMove() { moveOpen = false; },
    toggleMove() {
      moveOpen = !moveOpen;
      render();
      if (moveOpen) moveControls.querySelector('button:not(:disabled)').focus({ preventScroll: true });
    },
  };
}
