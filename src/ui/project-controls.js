import { drawingMarkup } from '../canvas/markup.js';
import { demoProject } from '../app/demo.js';
import { createDrawingSVG } from '../export/drawing.js';
import { copyDrawing, downloadBlob, downloadDrawing, downloadProject } from '../export/browser.js';
import { DEFAULT_PROJECT_TITLE, newProject, parseProject } from '../model/project.js';

import { PROJECT_FILE_LIMIT } from '../model/limits.js';
import { createScope } from '../shared/lifecycle.js';
import { requireElement } from './dom.js';
import { nextImportTurn } from './import-turn.js';

export function bindProjectControls({ editor, canvas, savedProject, storage, notify, focusCanvas, canExport, root = document, signal }) {
  const scope = createScope({ signal });
  const element = id => requireElement(root, `#${id}`);
  const start = element('start-dialog');
  const importError = element('start-error');
  const replace = element('replace-dialog');
  const fileInput = element('project-file');
  const copyButton = element('copy-image');
  const copyLabel = element('copy-image-label');
  const menus = [...root.querySelectorAll('.topbar .menu')];
  const importButtons = [...root.querySelectorAll('[data-start="open"], #open-project')];
  const importHeading = start.querySelector('[data-start="open"] strong');
  const importStatus = element('project-import-status');
  const startImportStatus = element('start-import-status');
  const storageNotice = element('storage-notice');
  const storageNoticeText = element('storage-notice-text');
  const recoveryButtons = [element('download-recovery'), element('download-recovery-start')];
  let replacement;
  let importing;
  let copying = false;

  function closeMenus(except) {
    for (const menu of menus) if (menu !== except) menu.open = false;
  }

  function render() {
    const { hasDrawing } = editor;
    copyButton.disabled = !hasDrawing;
    copyButton.setAttribute('aria-disabled', String(copying || !hasDrawing));
    copyButton.setAttribute('aria-busy', String(copying));
    copyButton.title = hasDrawing ? 'Copy the drawing as a PNG image' : 'Add a component before copying the drawing';
    copyLabel.textContent = copying ? 'Copying…' : 'Copy image';
    const hasRecovery = storage.recovery !== null;
    const storageWarning = storage.status !== 'empty' && storage.status !== 'saved';
    storageNotice.hidden = !storageWarning && !hasRecovery;
    storageNoticeText.textContent = storageWarning ? storage.message : 'Recovery data from an earlier workspace is available.';
    for (const button of recoveryButtons) button.hidden = !hasRecovery;
  }

  function setImportBusy(busy) {
    for (const button of importButtons) {
      button.disabled = busy;
      button.setAttribute('aria-busy', String(busy));
    }
    importHeading.textContent = busy ? 'Opening project…' : 'Import project';
    importStatus.hidden = !busy;
    startImportStatus.hidden = !busy;
    fileInput.disabled = busy;
  }

  function useProject(next) {
    editor.replace(next);
    if (start.open) start.close();
    canvas.fit();
    focusCanvas();
  }

  function offerProject(next) {
    importing = null;
    setImportBusy(false);
    if (!editor.hasDrawing && editor.project.title === DEFAULT_PROJECT_TITLE) {
      useProject(next);
      return;
    }
    replacement = next;
    replace.returnValue = '';
    replace.showModal();
  }

  function chooseFile() {
    if (importing) return;
    importError.hidden = true;
    fileInput.click();
  }

  function saveFile() {
    try {
      downloadProject(editor.project);
      notify('Project file downloaded.');
    } catch (error) {
      notify(error.message);
    }
  }

  function downloadRecovery() {
    if (storage.recovery === null) return;
    downloadBlob(new Blob([storage.recovery], { type: 'application/json' }), 'wirepad-recovery.json');
    notify('Original recovery data downloaded.');
  }

  async function exportDrawing(format) {
    if (!canExport()) {
      notify('Finish dragging before exporting the drawing.');
      return;
    }
    if (!editor.hasDrawing) {
      notify('Add a component before exporting a drawing.');
      return;
    }
    const copy = format === 'copy';
    if (copy && copying) return;
    if (copy) {
      copying = true;
      render();
    }
    try {
      const project = editor.project;
      const drawing = createDrawingSVG({ title: project.title, bounds: canvas.bounds(), markup: drawingMarkup(project) });
      if (copy) {
        await copyDrawing(drawing);
        if (!scope.destroyed) notify('Drawing copied to the clipboard.');
      } else {
        await downloadDrawing(drawing, project.title, format);
        if (!scope.destroyed) notify(`${format.toUpperCase()} downloaded.`);
      }
    } catch (error) {
      if (!scope.destroyed) notify(copy && error.name === 'NotAllowedError'
        ? 'Clipboard access was blocked. Use Export to download a PNG.' : error.message);
    } finally {
      if (copy && !scope.destroyed) {
        copying = false;
        render();
      }
    }
  }

  const actions = {
    open: chooseFile,
    demo: () => offerProject(demoProject()),
    blank: () => offerProject(newProject()),
    continue: () => start.close(),
  };
  for (const button of root.querySelectorAll('[data-start]')) {
    scope.on(button, 'click', actions[button.dataset.start]);
  }
  for (const [id, action] of Object.entries({
    'new-project': actions.blank, 'load-demo': actions.demo, 'open-project': actions.open,
    'save-project': saveFile, 'backup-project': saveFile,
  })) scope.on(element(id), 'click', action);
  for (const button of root.querySelectorAll('[data-export]')) {
    scope.on(button, 'click', () => exportDrawing(button.dataset.export));
  }
  for (const button of recoveryButtons) scope.on(button, 'click', downloadRecovery);
  for (const menu of menus) {
    scope.on(menu, 'toggle', () => { if (menu.open) closeMenus(menu); });
    scope.on(menu.querySelector('.menu-panel'), 'click', event => {
      if (event.target.closest('button')) {
        menu.open = false;
        if (!root.querySelector('dialog[open]')) menu.querySelector('summary').focus();
      }
    });
  }
  scope.on(root, 'pointerdown', event => closeMenus(event.target.closest('.menu')));
  scope.on(start, 'close', () => {
    importError.hidden = true;
    if (importing?.fromStartup) {
      importing = null;
      setImportBusy(false);
    }
    focusCanvas();
  });
  scope.on(replace, 'close', () => {
    const next = replacement;
    replacement = null;
    if (replace.returnValue === 'replace' && next) useProject(next);
  });
  scope.on(fileInput, 'change', async () => {
    const file = fileInput.files[0];
    fileInput.value = '';
    if (!file || importing) return;
    const fromStartup = start.open;
    const token = { file, fromStartup };
    importing = token;
    setImportBusy(true);
    const stillOpening = () => !scope.destroyed && importing === token && (!fromStartup || start.open);
    try {
      if (file.size > PROJECT_FILE_LIMIT) throw new Error(`This project file exceeds ${PROJECT_FILE_LIMIT / 1024 ** 2} MB.`);
      const text = await file.text();
      const ready = await nextImportTurn({ document: fileInput.ownerDocument, signal: scope.signal });
      if (ready && stillOpening()) offerProject(parseProject(text));
    } catch (error) {
      if (!stillOpening()) return;
      if (fromStartup) {
        importError.textContent = error.message;
        importError.hidden = false;
      } else notify(error.message);
    } finally {
      if (importing === token) {
        importing = null;
        setImportBusy(false);
      }
    }
  });

  scope.cleanup(() => {
    importing = replacement = null;
    closeMenus();
    setImportBusy(false);
    fileInput.value = '';
    for (const dialog of [start, replace]) if (dialog.open) dialog.close();
  });

  return {
    render, closeMenus, saveFile, destroy: scope.destroy,
    openStart() {
      if (savedProject) {
        element('start-project-name').textContent = savedProject.title;
        element('start-resume').hidden = false;
      }
      start.showModal();
    },
  };
}
