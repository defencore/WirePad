import { rotationSelector, modifiesSelection, selectionOptions } from './targets.js';
import { updateItem } from '../model/items.js';
import { translatePart } from '../editor/selection.js';
import { componentForPart } from '../model/part-component.js';
import { partBounds } from '../geometry/parts.js';
import { clampPoint, moveWireBend, segmentDrag, slideSegment } from '../geometry/routing.js';

const isEnd = kind => kind === 'from' || kind === 'to';
const clientPoint = event => ({ x: event.clientX, y: event.clientY });
const touchPair = (first, second) => ({
  x: (first.x + second.x) / 2, y: (first.y + second.y) / 2,
  distance: Math.hypot(first.x - second.x, first.y - second.y),
});

export function bindCanvasPointer({ scope, svg, canvas, editor, paint, targets, mode: currentMode,
  temporaryPan, actions }) {
  const document = svg.ownerDocument;
  const window = document.defaultView;
  const { hitAt, anchorAt } = targets;
  const position = endpoint => canvas.position(endpoint);
  const { currentTool, clearWireTool, panWithShift, moveCursor, renderDraft, connectionPreview, dropConnection, tap } = actions;
  const touches = new Map();
  const captures = new Set();
  let gesture, frame, frameAction, pinch, multipleTouches = false, rotationPress;

  function capture(id) {
    svg.setPointerCapture(id);
    captures.add(id);
  }

  function release(id) {
    captures.delete(id);
    if (svg.hasPointerCapture(id)) svg.releasePointerCapture(id);
  }

  function schedule(update) {
    frameAction = update;
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      const run = frameAction;
      frame = frameAction = null;
      run();
    });
  }

  function cancelFrame() {
    if (frame) window.cancelAnimationFrame(frame);
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
      capture(event.pointerId);
      return;
    }
    if (![0, 1, 2].includes(event.button)) return;
    const touch = event.pointerType === 'touch';
    const input = touch ? 'touch' : 'pointer';
    if (svg.dataset.input !== input) {
      svg.dataset.input = input;
      canvas.controls.update();
    }
    if (touch) {
      touches.set(event.pointerId, clientPoint(event));
      if (touches.size > 1 || multipleTouches) {
        event.preventDefault();
        capture(event.pointerId);
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
    capture(event.pointerId);
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
        moveCursor(canvas.point(event.clientX, event.clientY));
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
          moveCursor(canvas.point(event.clientX, event.clientY));
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
        moveCursor(hit.point, anchorAt(hit));
        renderDraft();
      });
    }
  });

  function finishGesture(event) {
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

  function finish(event) {
    try { finishGesture(event); }
    finally { release(event.pointerId); }
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

  function cancel() {
    cancelFrame();
    const preview = gesture?.next;
    gesture = rotationPress = pinch = null;
    multipleTouches = false;
    touches.clear();
    for (const id of [...captures]) release(id);
    svg.classList.remove('dragging', 'selecting');
    canvas.showSelectionBox();
    canvas.showReconnectPreview();
    if (preview) paint(editor.project);
  }

  scope.on(document, 'keydown', event => {
    if (event.key !== 'Escape' || !gesture || multipleTouches) return;
    event.preventDefault();
    finish({ pointerId: gesture.id, type: 'pointercancel' });
  });
  scope.cleanup(cancel);

  return {
    cancel, rotate: rotateFromControl,
    get busy() { return Boolean(gesture || multipleTouches); },
    get gesturing() { return Boolean(gesture || multipleTouches || rotationPress); },
    get connecting() { return ['connect', 'reconnect'].includes(gesture?.type); },
    get activeHandle() {
      return gesture?.handle && gesture.moved
        ? { ...gesture.handle, point: gesture.handlePosition ?? gesture.handle.point } : null;
    },
  };
}
