import { createScope } from '../shared/lifecycle.js';
export function bindWorkspacePanels({ svg, onChange, root = document, signal }) {
  const scope = createScope({ signal });
  const workspace = root.querySelector('.editor');
  const panels = {
    library: {
      node: root.getElementById('library'),
      toggle: root.getElementById('toggle-library'),
      compact: matchMedia('(max-width: 630px)'),
    },
    inspector: {
      node: root.getElementById('inspector'),
      toggle: root.getElementById('toggle-inspector'),
      compact: matchMedia('(max-width: 880px)'),
    },
  };

  function set(name, open, { focus = false, force = false } = {}) {
    const panel = panels[name];
    if (!open && !panel.compact.matches && !force) return;
    if (open && panel.compact.matches) {
      set(name === 'library' ? 'inspector' : 'library', false);
    }
    const restoreFocus = !open && panel.node.classList.contains('open') &&
      panel.node.contains(document.activeElement);
    panel.node.classList.toggle('open', open);
    panel.node.inert = !open;
    workspace.classList.toggle(`${name}-collapsed`, !open);
    panel.toggle.setAttribute('aria-expanded', String(open));
    if (restoreFocus) panel.toggle.focus({ preventScroll: true });
    if (open && focus) panel.node.querySelector('[data-panel-heading]').focus({ preventScroll: true });
  }

  function close() {
    set('library', false);
    set('inspector', false);
  }

  function switchRegion(backward, browse) {
    const active = document.activeElement;
    const regions = ['library', 'canvas', 'inspector'];
    const current = panels.library.node.contains(active) ? 0 : svg.contains(active) || active === svg ? 1
      : panels.inspector.node.contains(active) ? 2 : backward ? 0 : -1;
    const next = regions[(current + (backward ? -1 : 1) + regions.length) % regions.length];
    if (next === 'canvas') {
      close();
      svg.focus({ preventScroll: true });
    } else if (next === 'library') browse();
    else {
      set('inspector', true);
      panels.inspector.node.querySelector('[data-panel-heading]').focus({ preventScroll: true });
    }
  }

  for (const [name, panel] of Object.entries(panels)) {
    set(name, !panel.compact.matches, { force: true });
    scope.on(panel.toggle, 'click', () => set(name, !panel.node.classList.contains('open'), { focus: true, force: true }));
    scope.on(root.getElementById(`close-${name}`), 'click', () => set(name, false, { force: true }));
    scope.on(panel.compact, 'change', () => {
      set(name, !panel.compact.matches, { force: true });
      onChange();
    });
  }

  return { isCompact: name => panels[name].compact.matches, set, close, switchRegion, destroy: scope.destroy };
}
