import { drawingMarkup } from './canvas.js';
import { demoProject } from './demo.js';
import { copyDrawing, createDrawingSVG, downloadBlob, downloadDrawing, downloadProject } from './export.js';
import { DEFAULT_PROJECT_TITLE, newProject, parseProject, PROJECT_FILE_LIMIT } from './project.js';

const element = id => document.getElementById(id);

export function bindProjectControls({ editor, canvas, savedProject, storage, notify, focusCanvas, canExport }) {
  const start = element('start-dialog');
  const importError = element('start-error');
  const replace = element('replace-dialog');
  const fileInput = element('project-file');
  const copyButton = element('copy-image');
  const copyLabel = element('copy-image-label');
  const menus = [...document.querySelectorAll('.topbar .menu')];
  const importButtons = [...document.querySelectorAll('[data-start="open"], #open-project')];
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
        notify('Drawing copied to the clipboard.');
      } else {
        await downloadDrawing(drawing, project.title, format);
        notify(`${format.toUpperCase()} downloaded.`);
      }
    } catch (error) {
      notify(copy && error.name === 'NotAllowedError'
        ? 'Clipboard access was blocked. Use Export to download a PNG.' : error.message);
    } finally {
      if (copy) {
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
  for (const button of document.querySelectorAll('[data-start]')) {
    button.addEventListener('click', actions[button.dataset.start]);
  }
  for (const [id, action] of Object.entries({
    'new-project': actions.blank, 'load-demo': actions.demo, 'open-project': actions.open,
    'save-project': saveFile, 'backup-project': saveFile,
  })) element(id).addEventListener('click', action);
  for (const button of document.querySelectorAll('[data-export]')) {
    button.addEventListener('click', () => exportDrawing(button.dataset.export));
  }
  for (const button of recoveryButtons) button.addEventListener('click', downloadRecovery);
  for (const menu of menus) {
    menu.addEventListener('toggle', () => { if (menu.open) closeMenus(menu); });
    menu.querySelector('.menu-panel').addEventListener('click', event => {
      if (event.target.closest('button')) {
        menu.open = false;
        if (!document.querySelector('dialog[open]')) menu.querySelector('summary').focus();
      }
    });
  }
  document.addEventListener('pointerdown', event => closeMenus(event.target.closest('.menu')));
  start.addEventListener('close', () => {
    importError.hidden = true;
    if (importing?.fromStartup) {
      importing = null;
      setImportBusy(false);
    }
    focusCanvas();
  });
  replace.addEventListener('close', () => {
    const next = replacement;
    replacement = null;
    if (replace.returnValue === 'replace' && next) useProject(next);
  });
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    fileInput.value = '';
    if (!file || importing) return;
    const fromStartup = start.open;
    const token = { file, fromStartup };
    importing = token;
    setImportBusy(true);
    const stillOpening = () => importing === token && (!fromStartup || start.open);
    try {
      if (file.size > PROJECT_FILE_LIMIT) throw new Error(`This project file exceeds ${PROJECT_FILE_LIMIT / 1024 ** 2} MB.`);
      const text = await file.text();
      await new Promise(resolve => {
        if (document.visibilityState === 'hidden') setTimeout(resolve, 0);
        else requestAnimationFrame(() => setTimeout(resolve, 0));
      });
      if (stillOpening()) offerProject(parseProject(text));
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

  return {
    render, closeMenus, saveFile,
    openStart() {
      if (savedProject) {
        element('start-project-name').textContent = savedProject.title;
        element('start-resume').hidden = false;
      }
      start.showModal();
    },
  };
}
