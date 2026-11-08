import { componentForPart } from '../../model/part-component.js';
import { endpointName } from '../../model/names.js';
import { downloadBlob } from '../../export/browser.js';
import { createScope } from '../../shared/lifecycle.js';
import { requireElement } from '../dom.js';
import { assetFile, previewAsset } from './assets.js';
import { configurationSignature, configurationValues } from './configuration.js';
import { inspectPart, inspectWire, inspectEmpty, inspectSelection } from './views.js';

export function bindInspector({ inspection, editor, notify, focusCanvas, autoRouteWire,
  getKeepLeadPositions = () => false, setKeepLeadPositions = () => {}, root = document, signal }) {
  const scope = createScope({ signal });
  const element = id => requireElement(root, `#${id}`);
  const dialog = element('asset-dialog');
  const image = element('asset-image');
  const title = element('asset-title');
  let tab = 'part';
  let view;
  let selectedPart;

  function setView(key, markup) {
    if (view === key) return;
    const focused = root.activeElement;
    const hadFocus = inspection.contains(focused);
    view = key;
    inspection.innerHTML = markup();
    if (!hadFocus) return;

    const attribute = ['id', 'data-action', 'data-color', 'data-asset'].find(name => focused.hasAttribute(name));
    const next = attribute && inspection.querySelector(`[${attribute}="${CSS.escape(focused.getAttribute(attribute))}"]`);
    if (next) next.focus({ preventScroll: true });
    else focusCanvas();
  }

  function render() {
    const { part, wire, pending, mode, project, wireColor } = editor;
    if (selectedPart !== part?.id) {
      selectedPart = part?.id;
      tab = 'part';
      inspection.scrollTop = 0;
    }
    if (editor.selections.length > 1) {
      setView(`selection/${JSON.stringify(editor.selections)}`, () => inspectSelection(editor.selections, editor.canMoveSelection));
    } else if (part) {
      setView(`part/${part.id}/${part.componentId}/${part.rotation ?? 0}/${configurationSignature(part)}/${JSON.stringify(part.attachment ?? null)}/${Boolean(part.leads)}/${getKeepLeadPositions()}/${tab}`,
        () => inspectPart(part, tab, { keepLeadPositions: getKeepLeadPositions() }));
      const label = inspection.querySelector('#part-label');
      if (label && root.activeElement !== label) label.value = part.label ?? '';
    } else if (wire || pending || mode === 'wire') {
      const color = wire?.color ?? (pending ? editor.connectionColor(pending.from) : wireColor);
      const endpoints = (wire ? [wire.from, wire.to] : pending ? [pending.from] : []).map(endpoint => endpointName(project, endpoint));
      setView(JSON.stringify(['wire', wire?.id, color, endpoints]), () => inspectWire(wire, color, endpoints));
    } else {
      setView('empty', inspectEmpty);
    }
  }

  function showTab(next) {
    tab = next;
    inspection.scrollTop = 0;
    render();
    inspection.querySelector(`#tab-${tab}`).focus({ preventScroll: true });
  }

  scope.on(inspection, 'click', event => {
    const target = event.target.closest('button');
    if (!target) return;
    const { tab: next, action, asset, color } = target.dataset;
    if (next) showTab(next);
    if (action === 'rotate') editor.rotatePart();
    if (action === 'delete') editor.removeSelection();
    if (action === 'auto-route') autoRouteWire();
    if (action === 'automatic-color') editor.resetWireColor();
    if (color) editor.setWireColor(color);
    if (!asset && action !== 'preview') return;

    const component = componentForPart(editor.part);
    if (action === 'preview') {
      title.textContent = component.name;
      image.innerHTML = previewAsset(component, tab);
      dialog.showModal();
    } else {
      const { contents, filename } = assetFile(component, asset);
      downloadBlob(new Blob([contents], { type: 'text/plain;charset=utf-8' }), filename);
      notify(`Downloaded ${filename}.`);
    }
  });

  scope.on(inspection, 'input', ({ target }) => {
    if (target.id !== 'inspector-pin-search') return;
    const terms = target.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const rows = [...inspection.querySelectorAll('[data-pin-row]')];
    let visible = 0;
    for (const row of rows) {
      row.hidden = !terms.every(term => row.dataset.pinText.includes(term));
      if (!row.hidden) visible++;
    }
    inspection.querySelector('#pinout-count').textContent = terms.length ? `${visible} of ${rows.length} contacts` : `${rows.length} contacts`;
    inspection.querySelector('#pinout-empty').hidden = visible > 0;
  });

  scope.on(inspection, 'change', ({ target }) => {
    if (target.id === 'keep-lead-positions') setKeepLeadPositions(target.checked);
    if (target.id === 'part-rotation') editor.rotatePart(Number(target.value));
    if (target.id === 'custom-color') editor.setWireColor(target.value);
    if (target.id === 'part-label') {
      const label = target.value.trim();
      target.value = label;
      if (label !== (editor.part?.label ?? '')) editor.updatePart({ label });
    }
  });

  scope.on(inspection, 'submit', event => {
    if (!event.target.matches('[data-part-configuration]')) return;
    event.preventDefault();
    const form = event.target;
    if (!editor.configurePart(configurationValues(form))) form.reset();
  });

  scope.on(inspection, 'keydown', event => {
    if (event.target.id === 'part-label' && event.key === 'Enter') event.target.blur();
    if (!event.target.matches('[role="tab"]')) return;
    const tabs = [...inspection.querySelectorAll('[role="tab"]')];
    const index = tabs.indexOf(event.target);
    const next = { ArrowLeft: (index + tabs.length - 1) % tabs.length, ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    showTab(tabs[next].dataset.tab);
  });

  scope.cleanup(() => { if (dialog.open) dialog.close(); image.replaceChildren(); });
  return { render, destroy: scope.destroy };
}
