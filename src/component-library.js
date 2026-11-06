import { componentArt, componentById, components } from './catalog.js';
import { icon } from './icons.js';
import { escapeText } from './text.js';

const dragType = 'application/x-wirepad-component';

export function bindLibrary({ library, board, addPart, openPanel, closePanel }) {
  const search = library.querySelector('#search');
  const category = library.querySelector('#category');
  const catalog = library.querySelector('#catalog');
  const count = library.querySelector('#part-count');
  const entries = components.map(component => ({
    component,
    text: [component.name, component.shortName, component.description, component.category, component.subtitle,
      component.manufacturer, ...(component.tags ?? [])].join(' ').toLowerCase(),
  }));
  const categories = [...new Set(components.map(component => component.category))].sort();
  category.replaceChildren(new Option('All categories', ''), ...categories.map(name => new Option(name, name)));

  const cards = new Map();
  const thumbnails = new IntersectionObserver(changes => {
    for (const { isIntersecting, target } of changes) {
      if (!isIntersecting || !catalog.contains(target)) continue;
      const component = componentById.get(target.dataset.component);
      target.querySelector('.part-thumb').innerHTML = componentArt(component, { labels: false });
      thumbnails.unobserve(target);
    }
  }, { root: catalog, rootMargin: '180px 0px' });

  function cardFor(component) {
    if (cards.has(component.id)) return cards.get(component.id);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'part-card';
    button.dataset.component = component.id;
    button.draggable = true;
    button.title = `Add ${component.name}`;
    button.setAttribute('aria-label', button.title);
    button.innerHTML = `<span class="part-thumb" aria-hidden="true"></span>
      <span><strong>${escapeText(component.name)}</strong><small>${escapeText(component.subtitle ?? component.category)}</small></span>
      <span class="card-add" aria-hidden="true">${icon('plus')}</span>`;
    cards.set(component.id, button);
    return button;
  }

  let shown;
  function render() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const group = category.value;
    const results = entries.filter(({ component, text }) =>
      (!group || component.category === group) && terms.every(term => text.includes(term)));
    if (results.length === shown?.length && results.every((entry, index) => entry === shown[index])) return;

    shown = results;
    count.textContent = String(results.length);
    thumbnails.disconnect();
    if (!results.length) {
      catalog.innerHTML = '<div class="inspector-placeholder"><strong>No matching components</strong><button class="button" type="button" data-action="clear-catalog">Clear filters</button></div>';
      return;
    }
    const buttons = results.map(({ component }) => cardFor(component));
    catalog.replaceChildren(...buttons);
    catalog.scrollTop = 0;
    for (const button of buttons) {
      if (!button.querySelector('.part-thumb').firstChild) thumbnails.observe(button);
    }
  }

  const browse = () => {
    openPanel();
    search.focus({ preventScroll: true });
  };
  search.addEventListener('input', render);
  category.addEventListener('change', render);
  catalog.addEventListener('click', event => {
    if (event.target.closest('[data-action="clear-catalog"]')) {
      search.value = '';
      category.value = '';
      render();
      browse();
      return;
    }
    const card = event.target.closest('[data-component]');
    if (card && addPart(card.dataset.component)) closePanel();
  });

  let dragging;
  const finishDrag = () => {
    dragging = null;
    board.classList.remove('is-drop-target');
  };
  catalog.addEventListener('dragstart', event => {
    const card = event.target.closest('[data-component]');
    if (!card) return;
    dragging = card.dataset.component;
    event.dataTransfer.setData(dragType, dragging);
    event.dataTransfer.effectAllowed = 'copy';
  });
  catalog.addEventListener('dragend', finishDrag);
  board.addEventListener('dragover', event => {
    if (!dragging) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    board.classList.add('is-drop-target');
  });
  board.addEventListener('dragleave', event => {
    if (!board.contains(event.relatedTarget)) board.classList.remove('is-drop-target');
  });
  board.addEventListener('drop', event => {
    if (!dragging) return;
    event.preventDefault();
    const id = dragging;
    finishDrag();
    if (addPart(id, event)) closePanel();
  });

  render();
  return { browse };
}
