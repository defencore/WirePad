import { componentById } from './catalog.js';
import { partName } from './canvas.js';

const normalize = value => value.normalize('NFKD').toLowerCase();

function pinChoice(pin, { disabled, suggested }) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'pin-choice';
  button.dataset.pinChoice = pin.id;
  button.disabled = disabled;
  button.toggleAttribute('data-suggested', suggested && !disabled);

  const heading = document.createElement('span');
  heading.className = 'pin-choice-label';
  const label = document.createElement('strong');
  label.textContent = pin.label;
  heading.append(label);

  if (disabled || (pin.number !== undefined && String(pin.number) !== pin.label)) {
    const terminal = document.createElement('span');
    terminal.className = 'pin-terminal';
    terminal.textContent = disabled ? 'Wire start' : `Contact ${pin.number}`;
    heading.append(terminal);
  }

  const description = document.createElement('small');
  description.textContent = pin.description;
  button.append(heading, description);
  return button;
}

export function bindPinPicker({ onChoose, focusCanvas }) {
  const dialog = document.getElementById('pin-picker');
  const title = document.getElementById('pin-picker-title');
  const partLabel = document.getElementById('pin-picker-part');
  const instruction = document.getElementById('pin-picker-instruction');
  const search = document.getElementById('pin-picker-search');
  const results = document.getElementById('pin-picker-results');
  const list = document.getElementById('pin-picker-list');
  let partId;
  let entries = [];
  let pressedInside = false;

  function filter() {
    const terms = normalize(search.value.trim()).split(/\s+/);
    let count = 0;
    for (const { button, text } of entries) {
      const matches = terms.every(term => text.includes(term));
      button.hidden = !matches;
      if (matches) count += 1;
    }
    results.textContent = count ? `${count} ${count === 1 ? 'pin' : 'pins'}` : 'No pins match your search.';
    list.scrollTop = 0;
  }

  function choose(button) {
    if (!dialog.open || !button || button.disabled || button.hidden) return;
    const endpoint = { partId, pinId: button.dataset.pinChoice };
    dialog.close();
    onChoose(endpoint);
  }

  search.addEventListener('input', filter);
  list.addEventListener('click', event => choose(event.target.closest('[data-pin-choice]')));
  dialog.addEventListener('pointerdown', () => { pressedInside = true; });
  dialog.addEventListener('pointercancel', () => { pressedInside = false; });
  dialog.addEventListener('click', event => {
    // A touch that opens the picker can send its click to the newly opened dialog.
    if (event.detail && !pressedInside) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    pressedInside = false;
  }, true);
  dialog.addEventListener('keydown', event => {
    const fromSearch = event.target === search;
    const fromChoice = list.contains(event.target);
    if (!fromSearch && !fromChoice) return;
    const choices = [...list.querySelectorAll('.pin-choice:not(:disabled):not([hidden])')];
    if (fromSearch && event.key === 'Enter' && choices.length === 1) {
      event.preventDefault();
      choose(choices[0]);
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const index = choices.indexOf(event.target);
    const next = event.key === 'ArrowDown' ? choices[index + 1] : choices[index - 1];
    (next ?? (fromSearch ? choices.at(-1) : search))?.focus();
  });
  dialog.addEventListener('close', () => {
    if (!dialog.open && !document.querySelector('dialog[open]')) focusCanvas();
  });

  return {
    open(part, { mode = 'wire', from, pinId } = {}) {
      const component = componentById.get(part?.componentId);
      if (!component?.pins.length) return false;
      partId = part.id;
      pressedInside = false;
      title.textContent = mode === 'trace' ? 'Trace a pin' : 'Choose a pin';
      partLabel.textContent = partName(part, component);
      instruction.textContent = mode === 'trace' ? 'Choose a pin to highlight its connected wires.'
        : from ? 'Choose where the wire should connect.' : 'Choose a starting pin for the wire.';
      search.value = '';
      entries = component.pins.map(pin => ({
        button: pinChoice(pin, { disabled: from?.partId === partId && from.pinId === pin.id, suggested: pin.id === pinId }),
        text: normalize([pin.id, pin.label, pin.number, pin.description].join(' ')),
      }));
      list.replaceChildren(...entries.map(({ button }) => button));
      filter();
      if (!dialog.open) dialog.showModal();
      list.querySelector('[data-suggested]')?.scrollIntoView({ block: 'nearest' });
      return true;
    },
  };
}
