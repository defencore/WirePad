import { createScope } from '../shared/lifecycle.js';
import { canvasTargets, handleSelector, modifiesSelection } from './targets.js';
import { bindCanvasPointer } from './pointer.js';
import { bindCanvasKeyboard } from './keyboard.js';
import { nudgeTarget } from '../editor/nudge.js';
import { clampPoint, wireRoute } from '../geometry/routing.js';

const isEnd = kind => kind === 'from' || kind === 'to';
const opposite = side => side === 'from' ? 'to' : 'from';
export function bindCanvas({ canvas, svg, editor, paint, refresh, openPinPicker, dismissInspector, signal }) {
  const scope = createScope({ signal });
  const document = svg.ownerDocument;
  const window = document.defaultView;
  const targets = canvasTargets(canvas, svg);
  const { hitAt, anchorAt } = targets;
  let cursor;
  let hover;
  let holdingSpace = false;
  let holdingShift = false;
  let wireTool;
  let pendingNudge;
  const temporaryPan = () => holdingSpace || holdingShift;
  const currentMode = () => temporaryPan() ? 'pan' : editor.mode;
  const position = endpoint => canvas.position(endpoint);
  const planRoute = (from, to) => canvas.autoRoute(from, to);
  const editableWire = () => editor.mode === 'select' && !editor.pending ? editor.wire : null;
  function currentTool() {
    if (pendingNudge && pendingNudge.before !== editor.project) {
      wireTool = pendingNudge.target && { ...pendingNudge.target, project: editor.project };
    }
    if (wireTool && (wireTool.project !== editor.project || wireTool.wireId !== editableWire()?.id)) wireTool = null;
    return wireTool;
  }

  function setWireTool(tool) {
    wireTool = tool && { ...tool, project: editor.project };
    canvas.showReconnectPreview();
    refresh();
  }

  function clearWireTool() {
    if (!currentTool()) return false;
    setWireTool(null);
    return true;
  }

  function setCanvasMode() {
    svg.dataset.mode = currentMode();
    svg.dataset.routing = currentMode() !== 'pan' && Boolean(editor.pending);
    svg.dataset.wireAction = currentMode() === 'pan' ? ''
      : currentTool()?.kind === 'add' ? 'add-bend' : isEnd(currentTool()?.kind) ? 'reconnect' : '';
  }

  function renderDraft() {
    setCanvasMode();
    canvas.controls.setPartEnabled(currentMode() === 'select' && !editor.pending);
    if (currentMode() === 'pan') {
      canvas.showReconnectPreview();
      canvas.showDraft(null);
      return;
    }
    if (!isEnd(currentTool()?.kind) && !pointer.connecting) canvas.showReconnectPreview();
    if (!editor.pending) cursor = hover = null;
    const point = cursor ?? (editor.pending && position(editor.pending.from));
    const color = editor.pending ? editor.connectionColor(editor.pending.from, hover) : editor.wireColor;
    canvas.showDraft(editor.pending, point, color, hover);
  }

  function chooseEndpoint(endpoint) {
    const tool = currentTool();
    if (isEnd(tool?.kind)) {
      const plan = (from, to) => canvas.autoRoute(from, to, { excludeWire: tool.wireId });
      editor.reconnectWire(tool.wireId, tool.kind, endpoint, position, plan);
      return;
    }
    if (editor.mode === 'trace') editor.tracePoint(endpoint);
    else editor.activateEndpoint(endpoint, position, planRoute);
  }

  function finishConnection(hit, { touch = false } = {}) {
    const tool = currentTool();
    const reconnecting = isEnd(tool?.kind);
    const fixed = reconnecting ? editor.wire[opposite(tool.kind)] : editor.pending?.from;
    if (hit.partId && (touch || !hit.pin)) {
      openPinPicker(hit.partId, hit.pin?.pinId, fixed, reconnecting ? 'reconnect' : 'wire');
      return true;
    }
    const endpoint = anchorAt(hit);
    if (!endpoint) return false;
    chooseEndpoint(endpoint);
    return true;
  }

  function connectionPreview(action, event) {
    const reconnecting = action.type === 'reconnect';
    const fixed = position(reconnecting ? action.item[opposite(action.handle.kind)] : action.hit.pin);
    const hit = hitAt(event, { handles: false, excludeWire: reconnecting ? action.item.id : undefined });
    const endpoint = anchorAt(hit);
    const moving = endpoint ? position(endpoint) : hit.point;
    const [start, end] = action.handle?.kind === 'from' ? [moving, fixed] : [fixed, moving];
    const route = endpoint ? canvas.autoRoute(start, end, { excludeWire: reconnecting ? action.item.id : undefined }) : wireRoute(start, end);
    const color = reconnecting ? action.item.color : editor.connectionColor(action.hit.pin, endpoint);
    canvas.showReconnectPreview(start, end, route, color);
  }

  function dropConnection(action, event) {
    const reconnecting = action.type === 'reconnect';
    canvas.showReconnectPreview();
    const hit = hitAt(event, { handles: false, excludeWire: reconnecting ? action.item.id : undefined });
    if (reconnecting) setWireTool(action.handle);
    else if (hit.partId || anchorAt(hit)) editor.beginWire(action.hit.pin);
    else return;
    if (!finishConnection(hit, action) && reconnecting) clearWireTool();
  }

  function tap(hit, { touch = false, keyboard = false, selection: options = {} } = {}) {
    const { handle, partId, pin, junction, wireId, point } = hit;
    const tool = currentTool();
    if (editor.mode === 'select' && !editor.pending && modifiesSelection(options)) {
      clearWireTool();
      if (junction) editor.select('junction', junction.junctionId, options);
      else if (wireId) editor.select('wire', wireId, options);
      else if (partId) editor.select('part', partId, options);
      return;
    }
    if (tool?.kind === 'add' && point && !keyboard) {
      editor.addWireBend(tool.wireId, point, position);
      return;
    }
    if (handle) {
      setWireTool(handle);
      return;
    }
    if (isEnd(tool?.kind)) {
      finishConnection(hit, { touch });
      return;
    }
    if (editor.mode === 'trace') {
      if (partId && (touch || !pin)) openPinPicker(partId, pin?.pinId);
      else editor.tracePoint(pin || junction || (wireId ? { wireId } : null));
      return;
    }
    if (editor.pending || editor.mode === 'wire' || pin) {
      if (!finishConnection(hit, { touch }) && !touch && !keyboard && editor.pending) {
        cursor = clampPoint(point);
        hover = null;
        editor.addBend(cursor);
        renderDraft();
      }
      return;
    }
    clearWireTool();
    const selected = junction ? { type: 'junction', id: junction.junctionId }
      : wireId ? { type: 'wire', id: wireId } : partId ? { type: 'part', id: partId } : null;
    if (selected) {
      if (!editor.hasSelection(selected.type, selected.id)) editor.select(selected.type, selected.id);
    }
    else {
      editor.select(null);
      dismissInspector();
    }
  }

  const pointer = bindCanvasPointer({
    scope, svg, canvas, editor, paint, targets, mode: currentMode, temporaryPan,
    actions: { currentTool, clearWireTool, panWithShift, renderDraft, connectionPreview, dropConnection, tap,
      moveCursor(point, endpoint = null) { cursor = point; hover = endpoint; },
    },
  });

  function movementTarget(hit, { keyboard = false } = {}) {
    if (editor.mode !== 'select' || editor.pending || (temporaryPan() && !keyboard)) return null;
    if (editor.selections.length > 1 && !hit?.handle) return editor.canMoveSelection ? { kind: 'group' } : null;
    if (hit?.junction) return { kind: 'junction', id: hit.junction.junctionId };
    if (hit?.partId && !hit.pin) return { kind: 'part', id: hit.partId };
    const tool = hit?.handle ?? currentTool();
    if (tool?.kind === 'bend' || tool?.kind === 'segment') return tool;
    if (tool) return null;
    const selection = editor.selection;
    return selection && ['part', 'junction'].includes(selection.type) ? { kind: selection.type, id: selection.id } : null;
  }

  function focusMovementTarget(target) {
    if (!target || !['bend', 'segment'].includes(target.kind)) return;
    const index = target.kind === 'bend' ? 'bend-index' : 'segment-index';
    const selector = `[data-wire-handle="${target.kind}"][data-handle-wire="${CSS.escape(target.wireId)}"][data-${index}="${target.index}"]`;
    (svg.querySelector(selector) ?? svg).focus({ preventScroll: true });
  }

  function nudge(dx, dy, pixels = 8, target = movementTarget()) {
    if (!target || pointer.busy || editor.mode !== 'select' || editor.pending) return false;
    const step = Math.max(1, Math.round(pixels / canvas.scale));
    if (target.kind === 'group') return editor.moveSelection(dx * step, dy * step);
    const result = nudgeTarget(editor.project, target, dx * step, dy * step);
    if (!result) return false;

    const fromHandle = document.activeElement.closest(handleSelector);
    const wire = target.kind === 'bend' || target.kind === 'segment';
    const selection = { type: wire ? 'wire' : target.kind, id: wire ? target.wireId : target.id };
    pendingNudge = wire ? { before: editor.project, target: result.target } : null;
    const moved = editor.commit(result.project, { selection });
    pendingNudge = null;
    if (moved && fromHandle) {
      if (result.target) focusMovementTarget(result.target);
      else svg.focus({ preventScroll: true });
    }
    return moved;
  }

  const keyboard = bindCanvasKeyboard({
    scope, svg, canvas, editor, targets,
    mode: currentMode, busy: () => Boolean(pointer.busy),
    actions: {
      rotate: pointer.rotate, movementTarget, nudge, removeBend, tap,
      focusEndpoint(endpoint) {
        hover = endpoint;
        cursor = position(endpoint);
        renderDraft();
      },
    },
  });

  const panWithSpace = active => {
    if (holdingSpace === active) return;
    holdingSpace = active;
    refresh();
  };
  function panWithShift(active) {
    if (holdingShift === active) return;
    holdingShift = active;
    refresh();
  }
  function syncShift(event, active) {
    const editing = event.target.matches('input, select, textarea, [contenteditable]');
    panWithShift(Boolean(active && !event.ctrlKey && !event.metaKey && !event.isComposing &&
      !editing && !document.querySelector('dialog[open]')));
  }
  scope.on(document, 'keydown', event => {
    if (['Shift', 'Control', 'Meta'].includes(event.key)) syncShift(event, event.key === 'Shift' || event.shiftKey);
  });
  scope.on(document, 'keyup', event => {
    if (event.key === ' ') panWithSpace(false);
    if (['Shift', 'Control', 'Meta'].includes(event.key)) syncShift(event, event.key !== 'Shift' && event.shiftKey);
  });
  scope.on(window, 'blur', () => {
    pointer.cancel();
    keyboard.reset();
    svg.classList.remove('dragging', 'selecting');
    canvas.showSelectionBox();
    const restoreMode = temporaryPan();
    holdingSpace = holdingShift = false;
    if (restoreMode) refresh();
  });

  function removeBend(tool = currentTool()) {
    if (tool?.kind !== 'bend') return;
    setWireTool(null);
    editor.removeWireBend(tool.wireId, tool.point, position);
  }

  scope.cleanup(() => {
    pointer.cancel();
    wireTool = pendingNudge = cursor = hover = null;
    holdingSpace = holdingShift = false;
    keyboard.reset();
    canvas.showDraft(null);
  });

  return {
    destroy: scope.destroy,
    renderDraft, chooseEndpoint, panWithSpace, clearWireTool, removeBend, nudge,
    get mode() { return currentMode(); },
    get temporaryPan() { return temporaryPan(); },
    armBend() {
      const wire = editableWire();
      if (wire) setWireTool(currentTool()?.kind === 'add' ? null : { kind: 'add', wireId: wire.id });
    },
    get wireTool() { return currentTool(); },
    get movable() {
      const target = movementTarget();
      if (!target || pointer.busy) return null;
      const label = { part: 'component', junction: 'junction', bend: 'wire bend', segment: 'wire segment', group: 'selection' }[target.kind];
      return { kind: target.kind, label, axis: target.axis };
    },
    get wireControls() {
      const wire = editableWire();
      if (!wire || temporaryPan()) return null;
      const tool = currentTool();
      const active = pointer.activeHandle ?? (tool && { kind: tool.kind, index: tool.index });
      return { wireId: wire.id, active };
    },
    get gesturing() { return pointer.gesturing; },
  };
}
