import { createScope } from '../shared/lifecycle.js';
import { canvasTargets, handleSelector, rotationSelector, selectionOptions, modifiesSelection } from './targets.js';
import { bindCanvasKeyboard } from './keyboard.js';
import { updateItem } from '../model/items.js';
import { nudgeTarget } from '../editor/nudge.js';
import { translatePart } from '../editor/selection.js';
import { componentForPart } from '../model/part-component.js';
import { partBounds } from '../geometry/parts.js';
import { clampPoint, moveWireBend, segmentDrag, slideSegment, wireRoute } from '../geometry/routing.js';

const isEnd = kind => kind === 'from' || kind === 'to';
const opposite = side => side === 'from' ? 'to' : 'from';
const clientPoint = event => ({ x: event.clientX, y: event.clientY });

function touchPair(first, second) {
  return {
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2,
    distance: Math.hypot(first.x - second.x, first.y - second.y),
  };
}

export function bindCanvas({ canvas, svg, editor, paint, refresh, openPinPicker, dismissInspector, signal }) {
  const scope = createScope({ signal });
  const targets = canvasTargets(canvas, svg);
  const { hitAt, anchorAt, focusedHit } = targets;
  let gesture;
  let cursor;
  let hover;
  let frame;
  let frameAction;
  let holdingSpace = false;
  let holdingShift = false;
  let pinch;
  let multipleTouches = false;
  let wireTool;
  let pendingNudge;
  let rotationPress;
  const touches = new Map();
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
    canvas.setPartControls(currentMode() === 'select' && !editor.pending);
    if (currentMode() === 'pan') {
      canvas.showReconnectPreview();
      canvas.showDraft(null);
      return;
    }
    if (!isEnd(currentTool()?.kind) && !['connect', 'reconnect'].includes(gesture?.type)) canvas.showReconnectPreview();
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

  function schedule(update) {
    frameAction = update;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const run = frameAction;
      frame = frameAction = null;
      run();
    });
  }

  function cancelFrame() {
    if (frame) cancelAnimationFrame(frame);
    frameAction = frame = null;
  }

  function applyPinch() {
    const [first, second] = pinch.ids.map(id => touches.get(id));
    const { x, y, distance } = touchPair(first, second);
    canvas.zoomAt(temporaryPan() ? pinch.scale : pinch.scale * distance / pinch.distance, pinch.anchor, x, y);
  }

  function startPinch() {
    if (multipleTouches) return;
    multipleTouches = true;
    cancelFrame();
    const changed = gesture?.next;
    gesture = null;
    if (changed) paint(editor.project);
    canvas.showSelectionBox();
    canvas.showReconnectPreview();
    const ids = [...touches.keys()];
    const { x, y, distance } = touchPair(...touches.values());
    pinch = { ids, distance: Math.max(1, distance), scale: canvas.scale, anchor: canvas.point(x, y) };
    svg.classList.add('dragging');
  }

  function rotateFromControl(button, partId = button.closest('.part-rotation-controls').dataset.rotationPart) {
    if (gesture || rotationPress || multipleTouches || touches.size || currentMode() !== 'select' || editor.pending) return;
    if (editor.part?.id === partId && button.closest('.part-rotation-controls').dataset.rotationPart === partId) {
      editor.rotatePart(Number(button.dataset.partRotation));
    }
  }

  function surfaceInterior(hit) {
    if (!hit.partId || hit.partRegion === 'caption' || hit.pin) return false;
    const part = editor.item('part', hit.partId);
    if (!componentForPart(part)?.surface) return false;
    const bounds = partBounds(part);
    const edge = 10 / canvas.scale;
    return hit.point.x > bounds.left + edge && hit.point.x < bounds.right - edge &&
      hit.point.y > bounds.top + edge && hit.point.y < bounds.bottom - edge;
  }

  scope.on(svg, 'pointerdown', event => {
    if (event.pointerType !== 'touch') {
      if (event.ctrlKey || event.metaKey) panWithShift(false);
      else if (event.shiftKey) panWithShift(true);
    }
    const rotationButton = event.target.closest(rotationSelector);
    if ((event.button === 0 && !temporaryPan() && event.target.closest('.part-rotation-controls')) || rotationPress) {
      event.preventDefault();
      event.stopPropagation();
      if (rotationPress || !rotationButton || event.button !== 0 || gesture || multipleTouches || touches.size) return;
      rotationButton.focus({ preventScroll: true });
      rotationPress = {
        id: event.pointerId, button: rotationButton, partId: rotationButton.closest('.part-rotation-controls').dataset.rotationPart,
        ...clientPoint(event), touch: event.pointerType === 'touch',
      };
      svg.setPointerCapture(event.pointerId);
      return;
    }
    if (![0, 1, 2].includes(event.button)) return;
    const touch = event.pointerType === 'touch';
    const input = touch ? 'touch' : 'pointer';
    if (svg.dataset.input !== input) {
      svg.dataset.input = input;
      canvas.updateWireHandles();
    }
    if (touch) {
      touches.set(event.pointerId, clientPoint(event));
      if (touches.size > 1 || multipleTouches) {
        event.preventDefault();
        svg.setPointerCapture(event.pointerId);
        startPinch();
        return;
      }
    }
    if (gesture) return;
    cancelFrame();
    if (document.activeElement.matches('#project-title, #part-label')) document.activeElement.blur();

    const forcePan = event.button === 1 || event.button === 2 && !event.ctrlKey && !event.metaKey || currentMode() === 'pan';
    const selection = selectionOptions(event);
    const modifying = editor.mode === 'select' && !editor.pending && modifiesSelection(selection);
    const tool = currentTool();
    const reconnecting = isEnd(tool?.kind);
    const hit = forcePan ? {} : hitAt(event, { handles: !modifying && tool?.kind !== 'add' && !reconnecting,
      selecting: modifying, excludeWire: reconnecting ? tool.wireId : undefined });
    const { handle, wireId, partId, pin, junction, point } = hit;
    let type = touch || forcePan ? 'pan' : 'tap';
    let item;
    let segment;
    if (!forcePan && !modifying && handle && tool?.kind !== 'add') {
      item = editor.wire;
      if (isEnd(handle.kind)) type = 'reconnect';
      else if (handle.kind === 'bend') type = 'bend';
      else {
        segment = segmentDrag(item, position, handle.point, handle.index);
        if (segment) type = 'wire';
      }
    } else if (!forcePan && !modifying && !editor.pending && !isEnd(tool?.kind) && tool?.kind !== 'add' && pin && !touch && editor.mode !== 'trace') {
      type = 'connect';
    } else if (!forcePan && !isEnd(tool?.kind) && tool?.kind !== 'add' && editor.mode === 'select' && !editor.pending && !pin) {
      if (junction) {
        type = 'junction';
        item = editor.item('junction', junction.junctionId);
      } else if (wireId) {
        item = editor.item('wire', wireId);
        segment = segmentDrag(item, position, point);
        if (segment) type = 'wire';
      } else if (partId) {
        if (surfaceInterior(hit)) type = touch ? 'pan' : 'box';
        else {
          type = 'part';
          item = editor.item('part', partId);
        }
      } else if (!touch) {
        type = 'box';
      }
      if (item && modifying) type = 'tap';
      else if (item && editor.selections.length > 1 && editor.hasSelection(type, item.id)) type = 'group';
    }
    gesture = {
      id: event.pointerId, type, item, segment, hit, handle, forcePan, touch, selection, dx: 0, dy: 0,
      ...clientPoint(event), center: canvas.center, scale: canvas.scale, project: editor.project,
    };
    event.preventDefault();
    svg.focus({ preventScroll: true });
    svg.setPointerCapture(event.pointerId);
  });

  function move(action, event) {
    const dx = event.clientX - action.x;
    const dy = event.clientY - action.y;
    if (dx === action.dx && dy === action.dy) return;
    action.dx = dx;
    action.dy = dy;
    if (action.type === 'tap') return;
    const threshold = action.touch ? 7 : 3;
    const distance = Math.hypot(dx, dy);
    if (!action.moved && distance <= threshold) return;

    const { item, segment, type, scale, project } = action;
    if (!action.moved && item && type !== 'group' && !action.handle) {
      editor.select(type, item.id);
    }
    action.moved = true;
    svg.classList.add('dragging');
    if (type === 'pan') {
      canvas.pan(action.center, dx, dy);
      if (editor.pending) {
        cursor = canvas.point(event.clientX, event.clientY);
        hover = null;
      }
      return;
    }
    if (type === 'box') {
      svg.classList.add('selecting');
      canvas.showSelectionBox(action.hit.point, canvas.point(event.clientX, event.clientY));
      return;
    }
    if (type === 'group') {
      action.next = editor.selectionProject(dx / scale, dy / scale, project);
      paint(action.next ?? project);
      return;
    }
    if (type === 'part') {
      action.next = translatePart(project, item.id, { x: item.x + dx / scale, y: item.y + dy / scale });
      paint(action.next ?? project);
      return;
    }
    if (type === 'connect' || type === 'reconnect') {
      connectionPreview(action, event);
      return;
    }
    if (type === 'bend') {
      const start = action.handle.point;
      const point = clampPoint({ x: start.x + dx / scale, y: start.y + dy / scale });
      action.handlePosition = point;
      const points = moveWireBend(item, position, start, point);
      if (points || action.next) {
        action.next = points ? updateItem(project, 'wire', item.id, { fixedRoute: true, points }) : null;
        paint(action.next ?? project);
      }
      return;
    }

    const offset = segment?.axis === 'x' ? dx : dy;
    const properties = segment ? { fixedRoute: true, points: slideSegment(segment, offset / scale) }
      : clampPoint({ x: item.x + dx / scale, y: item.y + dy / scale });
    const changed = segment ? Math.abs(offset) > threshold : item.x !== properties.x || item.y !== properties.y;
    if (action.handle) action.handlePosition = { ...action.handle.point, [segment.axis]: action.handle.point[segment.axis] + offset / scale };
    if (changed || action.next) {
      action.next = changed ? updateItem(project, type, item.id, properties) : null;
      paint(action.next ?? project);
    }
  }

  scope.on(svg, 'pointermove', event => {
    if (rotationPress) return;
    if (touches.has(event.pointerId)) touches.set(event.pointerId, clientPoint(event));
    if (pinch) {
      schedule(() => applyPinch());
    } else if (gesture?.id === event.pointerId) {
      schedule(() => {
        if (gesture?.project === editor.project) move(gesture, event);
      });
    } else if (!gesture && !multipleTouches && event.pointerType !== 'touch') {
      if (currentMode() === 'pan') {
        if (editor.pending) {
          cursor = canvas.point(event.clientX, event.clientY);
          hover = null;
        }
        return;
      }
      const tool = currentTool();
      if (isEnd(tool?.kind)) {
        schedule(() => {
          if (currentTool() === tool) connectionPreview({ type: 'reconnect', item: editor.wire, handle: tool }, event);
        });
        return;
      }
      if (!editor.pending) return;
      schedule(() => {
        if (!editor.pending) return;
        const hit = hitAt(event);
        cursor = hit.point;
        hover = anchorAt(hit);
        renderDraft();
      });
    }
  });

  function finish(event) {
    if (rotationPress?.id === event.pointerId) {
      const press = rotationPress;
      rotationPress = null;
      event.preventDefault();
      event.stopPropagation();
      const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(rotationSelector);
      if (event.type === 'pointerup' && target === press.button &&
        Math.hypot(event.clientX - press.x, event.clientY - press.y) <= (press.touch ? 7 : 3)) {
        rotateFromControl(press.button, press.partId);
      }
      return;
    }
    const wasTouch = touches.has(event.pointerId);
    if (wasTouch && pinch?.ids.includes(event.pointerId)) {
      if (event.type === 'pointerup') {
        touches.set(event.pointerId, clientPoint(event));
        applyPinch();
      }
      cancelFrame();
      pinch = null;
    }
    if (wasTouch) touches.delete(event.pointerId);
    if (multipleTouches) {
      if (!touches.size) {
        multipleTouches = false;
        svg.classList.remove('dragging');
      }
      return;
    }
    if (gesture?.id !== event.pointerId) return;
    const action = gesture;
    gesture = null;
    cancelFrame();
    svg.classList.remove('dragging');
    svg.classList.remove('selecting');
    canvas.showSelectionBox();
    if (event.type !== 'pointerup' || action.project !== editor.project) {
      if (action.next) paint(editor.project);
      canvas.showReconnectPreview();
      return;
    }
    move(action, event);
    svg.classList.remove('dragging');
    svg.classList.remove('selecting');
    canvas.showSelectionBox();
    if (action.type === 'box' && action.moved) {
      clearWireTool();
      editor.selectMany(canvas.selectionInBox(action.hit.point, canvas.point(event.clientX, event.clientY)), action.selection);
    } else if (action.next) editor.commit(action.next);
    else if (action.moved && ['connect', 'reconnect'].includes(action.type)) dropConnection(action, event);
    else if (!action.moved && !action.forcePan && Math.hypot(action.dx, action.dy) <= (action.touch ? 7 : 3)) tap(action.hit, action);
    else if (action.handle && action.moved) paint(editor.project);
  }

  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) scope.on(svg, event, finish);
  scope.on(svg, 'contextmenu', event => event.preventDefault());
  scope.on(svg, 'auxclick', event => event.preventDefault());

  scope.on(svg, 'click', event => {
    const button = event.target.closest(rotationSelector);
    if (!event.target.closest('.part-rotation-controls')) return;
    event.preventDefault();
    event.stopPropagation();
    if (button && event.detail === 0) rotateFromControl(button);
  });

  scope.on(svg, 'wheel', event => {
    event.preventDefault();
    if (gesture || multipleTouches) return;
    const factor = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? svg.clientHeight : 1;
    const delta = event.deltaY * factor;
    const horizontalScroll = event.deltaX !== 0 && event.deltaY === 0;
    if (event.shiftKey || (!event.ctrlKey && !event.metaKey && (event.altKey || horizontalScroll))) {
      canvas.pan(canvas.center, -event.deltaX * factor, -delta);
      return;
    }
    canvas.zoom(canvas.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * .002), canvas.point(event.clientX, event.clientY));
  }, { passive: false });

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
    if (!target || gesture || multipleTouches || editor.mode !== 'select' || editor.pending) return false;
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
    mode: currentMode, busy: () => Boolean(gesture || multipleTouches),
    actions: {
      rotate: rotateFromControl, movementTarget, nudge, removeBend, tap,
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
    if (event.key !== 'Escape' || !gesture || multipleTouches) return;
    const pointerId = gesture.id;
    event.preventDefault();
    finish({ pointerId, type: 'pointercancel' });
    if (svg.hasPointerCapture(pointerId)) svg.releasePointerCapture(pointerId);
  });
  scope.on(document, 'keyup', event => {
    if (event.key === ' ') panWithSpace(false);
    if (['Shift', 'Control', 'Meta'].includes(event.key)) syncShift(event, event.key !== 'Shift' && event.shiftKey);
  });
  scope.on(window, 'blur', () => {
    if (gesture) finish({ pointerId: gesture.id, type: 'pointercancel' });
    cancelFrame();
    touches.clear();
    pinch = null;
    multipleTouches = false;
    rotationPress = null;
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
    cancelFrame();
    const preview = gesture?.next;
    const pointerId = gesture?.id ?? rotationPress?.id;
    gesture = rotationPress = wireTool = pendingNudge = cursor = hover = null;
    touches.clear();
    pinch = null;
    multipleTouches = holdingSpace = holdingShift = false;
    keyboard.reset();
    if (pointerId !== undefined && svg.hasPointerCapture(pointerId)) svg.releasePointerCapture(pointerId);
    svg.classList.remove('dragging', 'selecting');
    canvas.showSelectionBox();
    canvas.showReconnectPreview();
    canvas.showDraft(null);
    if (preview) paint(editor.project);
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
      if (!target || gesture || multipleTouches) return null;
      const label = { part: 'component', junction: 'junction', bend: 'wire bend', segment: 'wire segment', group: 'selection' }[target.kind];
      return { kind: target.kind, label, axis: target.axis };
    },
    get wireControls() {
      const wire = editableWire();
      if (!wire || temporaryPan()) return null;
      const tool = currentTool();
      const active = gesture?.handle && gesture.moved
        ? { ...gesture.handle, point: gesture.handlePosition ?? gesture.handle.point }
        : tool && { kind: tool.kind, index: tool.index };
      return { wireId: wire.id, active };
    },
    get gesturing() { return Boolean(gesture || multipleTouches || rotationPress); },
  };
}
