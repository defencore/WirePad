import { updateItem } from './editor.js';
import { nudgeTarget } from './nudge.js';
import { clampPoint, moveWireBend, segmentDrag, slideSegment, wireRoute } from './routing.js';

const targetSelector = '.canvas-pin, .canvas-junction, .wire-hit, .part-body';
const handleSelector = '.wire-handle';
const isEnd = kind => kind === 'from' || kind === 'to';
const opposite = side => side === 'from' ? 'to' : 'from';
const clientPoint = event => ({ x: event.clientX, y: event.clientY });

function targetInfo(target, selector) {
  const { part, pin, junction, wire, wireHandle, handleWire, segmentIndex, bendIndex, handleX, handleY, axis } =
    target.closest(selector)?.dataset ?? {};
  const index = segmentIndex ?? bendIndex;
  if (wireHandle) return { handle: {
    kind: wireHandle, wireId: handleWire, index: index === undefined ? undefined : Number(index), axis,
    point: { x: Number(handleX), y: Number(handleY) },
  } };
  return { partId: part, wireId: wire, pin: pin && { partId: part, pinId: pin }, junction: junction && { junctionId: junction } };
}

function touchPair(first, second) {
  return {
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2,
    distance: Math.hypot(first.x - second.x, first.y - second.y),
  };
}

export function bindCanvas({ canvas, svg, editor, paint, refresh, openPinPicker, dismissInspector }) {
  let gesture;
  let cursor;
  let hover;
  let frame;
  let frameAction;
  let holdingSpace = false;
  let pinch;
  let multipleTouches = false;
  let wireTool;
  let pendingNudge;
  const touches = new Map();
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
    svg.dataset.mode = holdingSpace ? 'pan' : editor.mode;
    svg.dataset.routing = Boolean(editor.pending);
    svg.dataset.wireAction = currentTool()?.kind === 'add' ? 'add-bend' : isEnd(currentTool()?.kind) ? 'reconnect' : '';
  }

  function renderDraft() {
    setCanvasMode();
    if (!isEnd(currentTool()?.kind) && !['connect', 'reconnect'].includes(gesture?.type)) canvas.showReconnectPreview();
    if (!editor.pending) cursor = hover = null;
    const point = cursor ?? (editor.pending && position(editor.pending.from));
    canvas.showDraft(editor.pending, point, editor.wireColor, hover);
  }

  function hitAt(event, { handles = true, excludeWire } = {}) {
    const point = canvas.point(event.clientX, event.clientY);
    const stack = document.elementsFromPoint(event.clientX, event.clientY);
    const selector = handles ? `${handleSelector}, ${targetSelector}` : targetSelector;
    const target = stack.find(node => {
      const candidate = svg.contains(node) && node.closest(selector);
      return candidate && (!excludeWire || candidate.dataset.wire !== excludeWire);
    });
    const hit = targetInfo(target ?? (excludeWire ? svg : event.target), selector);
    if (hit.handle) {
      const candidates = new Set(stack.map(node => node.closest(handleSelector)).filter(Boolean));
      let minimum = Infinity;
      for (const candidate of candidates) {
        const bounds = candidate.querySelector('.wire-handle-hit').getBoundingClientRect();
        const distance = Math.hypot(event.clientX - bounds.x - bounds.width / 2, event.clientY - bounds.y - bounds.height / 2);
        if (distance < minimum) {
          hit.handle = targetInfo(candidate, handleSelector).handle;
          minimum = distance;
        }
      }
    }
    if (hit.wireId) {
      const ids = stack.filter(node => node.matches('.wire-hit') && node.dataset.wire !== excludeWire).map(node => node.dataset.wire);
      if (ids.length > 1) hit.wireId = canvas.nearestWire(ids, point) ?? hit.wireId;
    }
    return { ...hit, point };
  }

  function anchorAt({ pin, junction, wireId, point }) {
    return pin || junction || (wireId && point && canvas.anchorWire(wireId, point, Math.min(20, 9 / canvas.scale)));
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
    canvas.showReconnectPreview(start, end, route, reconnecting ? action.item.color : editor.wireColor);
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

  function tap(hit, { touch = false, keyboard = false } = {}) {
    const { handle, partId, pin, junction, wireId, point } = hit;
    const tool = currentTool();
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
    if (junction) editor.select('junction', junction.junctionId);
    else if (wireId) editor.select('wire', wireId);
    else if (partId) editor.select('part', partId);
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
    canvas.zoomAt(pinch.scale * distance / pinch.distance, pinch.anchor, x, y);
  }

  function startPinch() {
    if (multipleTouches) return;
    multipleTouches = true;
    cancelFrame();
    const changed = gesture?.next;
    gesture = null;
    if (changed) paint(editor.project);
    canvas.showReconnectPreview();
    const ids = [...touches.keys()];
    const { x, y, distance } = touchPair(...touches.values());
    pinch = { ids, distance: Math.max(1, distance), scale: canvas.scale, anchor: canvas.point(x, y) };
    svg.classList.add('dragging');
  }

  svg.addEventListener('pointerdown', event => {
    if (![0, 1].includes(event.button)) return;
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

    const forcePan = event.button === 1 || editor.mode === 'pan' || holdingSpace;
    const tool = currentTool();
    const reconnecting = isEnd(tool?.kind);
    const hit = forcePan ? {} : hitAt(event, { handles: tool?.kind !== 'add' && !reconnecting, excludeWire: reconnecting ? tool.wireId : undefined });
    const { handle, wireId, partId, pin, junction, point } = hit;
    let type = touch || forcePan ? 'pan' : 'tap';
    let item;
    let segment;
    if (handle && tool?.kind !== 'add') {
      item = editor.wire;
      if (isEnd(handle.kind)) type = 'reconnect';
      else if (handle.kind === 'bend') type = 'bend';
      else {
        segment = segmentDrag(item, position, handle.point, handle.index);
        if (segment) type = 'wire';
      }
    } else if (!forcePan && !editor.pending && !isEnd(tool?.kind) && tool?.kind !== 'add' && pin && !touch && editor.mode !== 'trace') {
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
        type = 'part';
        item = editor.item('part', partId);
      }
    }
    gesture = {
      id: event.pointerId, type, item, segment, hit, handle, forcePan, touch,
      ...clientPoint(event), center: canvas.center, scale: canvas.scale, project: editor.project,
    };
    event.preventDefault();
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
    if (!action.moved && item) {
      if (type === 'junction') editor.select(null);
      else if (!action.handle) editor.select(type, item.id);
    }
    action.moved = true;
    svg.classList.add('dragging');
    if (type === 'pan') {
      canvas.pan(action.center, dx, dy);
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

  svg.addEventListener('pointermove', event => {
    if (touches.has(event.pointerId)) touches.set(event.pointerId, clientPoint(event));
    if (pinch) {
      schedule(() => applyPinch());
    } else if (gesture?.id === event.pointerId) {
      schedule(() => {
        if (gesture?.project === editor.project) move(gesture, event);
      });
    } else if (!gesture && !multipleTouches && event.pointerType !== 'touch') {
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
    if (event.type !== 'pointerup' || action.project !== editor.project) {
      if (action.next) paint(editor.project);
      canvas.showReconnectPreview();
      return;
    }
    move(action, event);
    svg.classList.remove('dragging');
    if (action.next) editor.commit(action.next);
    else if (action.moved && ['connect', 'reconnect'].includes(action.type)) dropConnection(action, event);
    else if (!action.moved && !action.forcePan && Math.hypot(action.dx, action.dy) <= (action.touch ? 7 : 3)) tap(action.hit, action);
    else if (action.handle && action.moved) paint(editor.project);
  }

  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) svg.addEventListener(event, finish);

  svg.addEventListener('wheel', event => {
    event.preventDefault();
    if (gesture || multipleTouches) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? svg.clientHeight : 1);
    canvas.zoom(canvas.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * .002), canvas.point(event.clientX, event.clientY));
  }, { passive: false });

  function focusedHit(target) {
    const hit = targetInfo(target, `${handleSelector}, ${targetSelector}`);
    if (hit.wireId) hit.point = canvas.branchAnchor(hit.wireId)?.point;
    return hit;
  }

  function movementTarget(hit) {
    if (editor.mode !== 'select' || editor.pending) return null;
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

  svg.addEventListener('keydown', event => {
    if (event.isComposing) return;
    const hit = focusedHit(event.target);
    const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
    if (direction && !event.altKey && !event.ctrlKey && !event.metaKey && !gesture && !multipleTouches) {
      if (editor.mode === 'pan') {
        event.preventDefault();
        const distance = event.shiftKey ? 100 : 40;
        canvas.pan(canvas.center, -direction[0] * distance, -direction[1] * distance);
        return;
      }
      const target = !hit.pin && movementTarget(hit);
      if (target) {
        event.preventDefault();
        nudge(...direction, event.shiftKey ? 10 : 1, target);
        return;
      }
    }
    if (hit.handle && ['Delete', 'Backspace'].includes(event.key)) {
      event.preventDefault();
      if (hit.handle.kind === 'bend') removeBend(hit.handle);
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (!hit.partId && !hit.wireId && !hit.junction && !hit.handle) return;
    event.preventDefault();
    if (editor.mode !== 'pan') tap(hit, { keyboard: true });
  });

  svg.addEventListener('focusin', event => {
    if (!editor.pending) return;
    const endpoint = anchorAt(focusedHit(event.target));
    if (!endpoint) return;
    hover = endpoint;
    cursor = position(endpoint);
    renderDraft();
  });

  const panWithSpace = active => {
    if (holdingSpace === active) return;
    holdingSpace = active;
    refresh();
  };
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !gesture || multipleTouches) return;
    const pointerId = gesture.id;
    event.preventDefault();
    finish({ pointerId, type: 'pointercancel' });
    if (svg.hasPointerCapture(pointerId)) svg.releasePointerCapture(pointerId);
  });
  document.addEventListener('keyup', event => { if (event.key === ' ') panWithSpace(false); });
  window.addEventListener('blur', () => panWithSpace(false));

  function removeBend(tool = currentTool()) {
    if (tool?.kind !== 'bend') return;
    setWireTool(null);
    editor.removeWireBend(tool.wireId, tool.point, position);
  }

  return {
    renderDraft, chooseEndpoint, panWithSpace, clearWireTool, removeBend, nudge,
    armBend() {
      const wire = editableWire();
      if (wire) setWireTool(currentTool()?.kind === 'add' ? null : { kind: 'add', wireId: wire.id });
    },
    get wireTool() { return currentTool(); },
    get movable() {
      const target = movementTarget();
      if (!target || gesture || multipleTouches) return null;
      const label = { part: 'component', junction: 'junction', bend: 'wire bend', segment: 'wire segment' }[target.kind];
      return { kind: target.kind, label, axis: target.axis };
    },
    get wireControls() {
      const wire = editableWire();
      if (!wire || holdingSpace) return null;
      const tool = currentTool();
      const active = gesture?.handle && gesture.moved
        ? { ...gesture.handle, point: gesture.handlePosition ?? gesture.handle.point }
        : tool && { kind: tool.kind, index: tool.index };
      return { wireId: wire.id, active };
    },
    get gesturing() { return Boolean(gesture || multipleTouches); },
  };
}
