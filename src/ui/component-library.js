import { createScope } from '../shared/lifecycle.js';
import { componentArt, componentById, components } from '../catalog/index.js';
import { createLibraryIndex, filterLibrary, manufacturerName } from '../catalog/filter.js';
import { icon } from './icons.js';
import { escapeText } from '../shared/text.js';

const dragType = 'application/x-wirepad-component';

export function bindLibrary({ library, board, addPart, openPanel, closePanel, root = document, signal }) {
  const scope = createScope({ signal });
  const document = library.ownerDocument;
  const search = library.querySelector('#search');
  const category = library.querySelector('#category');
  const manufacturer = library.querySelector('#manufacturer');
  const catalog = library.querySelector('#catalog');
  const count = library.querySelector('#part-count');
  const reset = library.querySelector('#clear-catalog-filters');
  const index = createLibraryIndex(components);
  category.replaceChildren(new Option('All categories', ''), ...index.categories.map(name => new Option(name, name)));
  manufacturer.replaceChildren(new Option('All manufacturers', ''),
    ...index.manufacturers.map(({ name, count }) => new Option(`${name} (${count})`, name)));

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
    const maker = manufacturerName(component.manufacturer);
    const subtitle = component.subtitle ?? `${component.pins.length} contacts`;
    button.title = `Add ${component.name}\n${maker} · ${subtitle}`;
    button.setAttribute('aria-label', `Add ${component.name}`);
    button.innerHTML = `<span class="part-thumb" aria-hidden="true"></span>
      <span class="part-card-copy"><strong>${escapeText(component.name)}</strong><small class="part-maker">${escapeText(maker)}</small></span>
      <span class="card-add" aria-hidden="true">${icon('plus')}</span>`;
    cards.set(component.id, button);
    return button;
  }

  let filters;
  scope.cleanup(() => { thumbnails.disconnect(); cards.clear(); board.classList.remove('is-drop-target'); });

  function render() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const nextFilters = JSON.stringify([terms, category.value, manufacturer.value]);
    if (filters === nextFilters) return;
    filters = nextFilters;
    const results = filterLibrary(index, { query: search.value, category: category.value, manufacturer: manufacturer.value });
    manufacturer.title = manufacturer.value || 'All manufacturers';

    const filtered = Boolean(terms.length || category.value || manufacturer.value);
    count.textContent = filtered ? `${results.length} of ${components.length} components` : `${components.length} components`;
    reset.hidden = !filtered;
    thumbnails.disconnect();
    if (!results.length) {
      catalog.innerHTML = `<div class="catalog-empty">${icon('search')}<strong>No matching parts</strong><p>Try a shorter name or choose another category or manufacturer.</p><button class="button" type="button" data-action="clear-catalog">Reset all filters</button></div>`;
      return;
    }
    const groups = new Map();
    for (const { component } of results) {
      if (!groups.has(component.category)) {
        const section = document.createElement('section');
        section.className = 'catalog-group';
        section.setAttribute('aria-label', component.category);
        section.innerHTML = `<h2>${escapeText(component.category)}<span></span></h2><div class="catalog-cards"></div>`;
        groups.set(component.category, section);
      }
      groups.get(component.category).querySelector('.catalog-cards').append(cardFor(component));
    }
    for (const group of groups.values()) {
      group.querySelector('h2 span').textContent = String(group.querySelector('.catalog-cards').childElementCount);
    }
    const buttons = results.map(({ component }) => cardFor(component));
    catalog.replaceChildren(...groups.values());
    catalog.scrollTop = 0;
    for (const button of buttons) {
      if (!button.querySelector('.part-thumb').firstChild) thumbnails.observe(button);
    }
  }

  const browse = () => {
    openPanel();
    search.focus({ preventScroll: true });
  };
  scope.on(search, 'input', render);
  scope.on(category, 'change', render);
  scope.on(manufacturer, 'change', render);
  scope.on(library, 'click', event => {
    if (event.target.closest('[data-action="clear-catalog"]')) {
      search.value = '';
      category.value = '';
      manufacturer.value = '';
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
  scope.on(catalog, 'dragstart', event => {
    const card = event.target.closest('[data-component]');
    if (!card) return;
    dragging = card.dataset.component;
    event.dataTransfer.setData(dragType, dragging);
    event.dataTransfer.effectAllowed = 'copy';
  });
  scope.on(catalog, 'dragend', finishDrag);
  scope.on(board, 'dragover', event => {
    if (!dragging) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    board.classList.add('is-drop-target');
  });
  scope.on(board, 'dragleave', event => {
    if (!board.contains(event.relatedTarget)) board.classList.remove('is-drop-target');
  });
  scope.on(board, 'drop', event => {
    if (!dragging) return;
    event.preventDefault();
    const id = dragging;
    finishDrag();
    if (addPart(id, event)) closePanel();
  });

  render();
  return { browse, destroy: scope.destroy };
}
