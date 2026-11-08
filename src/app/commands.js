import { componentById, isMountable, mountingFor } from '../catalog/index.js';
import { partBounds } from '../geometry/parts.js';

export function createCommands({ editor, canvas, controls, panels, svg, notify, focusCanvas }) {
  function dropPosition(id, event) {
    const center = canvas.point(event.clientX, event.clientY);
    return editor.insertionPoint(id, center);
  }

  const commands = {
    previewPart(id, event) {
      if (controls.gesturing) { commands.clearPlacementPreview(); return; }
      const preview = editor.previewPart(id, dropPosition(id, event));
      canvas.showPlacementPreview({ ...preview, ghost: true });
      return preview;
    },
    clearPlacementPreview() { canvas.showPlacementPreview(); },
    addPart(id, drop) {
      if (controls.gesturing) return false;
      const component = componentById.get(id);
      const selected = editor.part;
      const hosts = editor.project.parts.filter(part => mountingFor(part.componentId)?.type === 'breadboard');
      const hostPartId = !drop && isMountable(id) && (mountingFor(selected?.componentId)?.type === 'breadboard'
        ? selected.id : selected?.attachment?.hostPartId ?? (hosts.length === 1 ? hosts[0].id : undefined));
      const suggested = hostPartId ? editor.suggestPlacement(id, hostPartId) : null;
      if (hostPartId && !suggested) {
        notify('No free placement is available on this breadboard. Move a part or choose another position.');
        return false;
      }
      const position = suggested ?? (drop
        ? dropPosition(id, drop)
        : canvas.suggestPartPosition(editor.project, component));
      const hadDrawing = editor.hasDrawing;
      commands.clearPlacementPreview();
      const part = editor.addPart(id, position, { mount: Boolean(drop || hostPartId), ...(hostPartId && { hostPartId }) });
      if (!part) return false;
      const rect = svg.getBoundingClientRect();
      const start = canvas.point(rect.left, rect.top);
      const end = canvas.point(rect.right, rect.bottom);
      const bounds = partBounds(part);
      if (!hadDrawing || bounds.left < start.x || bounds.top < start.y ||
          bounds.right > end.x || bounds.bottom > end.y) canvas.fit();
      return true;
    },
    changeMode(mode) {
      if (controls.gesturing) return;
      controls.clearWireTool();
      editor.setMode(mode);
    },
    selectAll() { commands.changeMode('select'); editor.selectAll(); },
    fit(selection = false) { selection ? canvas.fitSelection(editor.selections) : canvas.fit(); },
    zoom(factor) { canvas.zoom(factor === 1 ? 1 : canvas.scale * factor); },
    undo() { editor.step('undo'); },
    redo() { editor.step('redo'); },
    rotate(angle) { editor.rotatePart(angle); },
    deleteSelection() {
      const tool = controls.wireTool?.kind;
      if (tool === 'bend') controls.removeBend();
      else if (tool === 'add' || tool === 'from' || tool === 'to') controls.clearWireTool();
      else editor.removeSelection();
    },
    cancel() {
      controls.clearHover?.();
      controls.clearWireTool();
      const hadOperation = Boolean(editor.pending || editor.mode !== 'select');
      editor.cancelWire();
      editor.tracePoint(null);
      if (hadOperation) editor.setMode('select');
      else editor.select(null);
    },
    cancelWire() { controls.clearWireTool(); editor.cancelWire(); focusCanvas(); },
    addBend() { controls.armBend(); focusCanvas(); },
    removeBend() { controls.removeBend(); focusCanvas(); },
    branchWire() {
      const anchor = editor.wire && canvas.branchAnchor(editor.wire.id);
      if (!anchor) return;
      panels.set('inspector', false);
      editor.beginWire(anchor, 'wire');
      focusCanvas();
    },
    clearTrace() { editor.tracePoint(null); focusCanvas(); },
    autoRouteWire() {
      const wire = editor.wire;
      if (!wire) return;
      const plan = canvas.autoRoute(canvas.position(wire.from), canvas.position(wire.to), { excludeWire: wire.id });
      if (!plan) notify('An automatic route is unavailable for this wire.');
      else editor.rerouteWire(plan);
    },
  };
  return commands;
}
