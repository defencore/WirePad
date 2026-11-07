import { componentById } from '../catalog/index.js';

export function createCommands({ editor, canvas, controls, panels, svg, notify, focusCanvas }) {
  const commands = {
    addPart(id, drop) {
      if (controls.gesturing) return false;
      const component = componentById.get(id);
      const center = drop && canvas.point(drop.clientX, drop.clientY);
      const position = center
        ? { x: center.x - component.width / 2, y: center.y - component.height / 2 }
        : canvas.suggestPartPosition(editor.project, component);
      const hadDrawing = editor.hasDrawing;
      const part = editor.addPart(id, position);
      if (!part) return false;
      const rect = svg.getBoundingClientRect();
      const start = canvas.point(rect.left, rect.top);
      const end = canvas.point(rect.right, rect.bottom);
      if (!hadDrawing || part.x < start.x || part.y < start.y ||
          part.x + component.width > end.x || part.y + component.height > end.y) canvas.fit();
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
