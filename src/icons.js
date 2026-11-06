const icons = {
  help: '<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4m0 3h.01"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6m-12 4h8m-8 4h8"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 4H6a2 2 0 0 0-2 2v10"/>',
  library: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3m6-3v3m-6 14v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/>',
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 4 4"/>',
  filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Zm0 9 8-4.5M12 12 4 7.5m8 4.5v9"/>',
  cursor: '<path d="m5 3 14 10-7 1-3.5 6Z"/>',
  wire: '<circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M5 16v-4h14V8"/>',
  trace: '<path d="M5 16v-4h14V8M12 12V6"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="19" cy="6" r="2"/>',
  hand: '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-2c-2 0-3-1-4-2l-4-5a1.5 1.5 0 0 1 2-2Z"/>',
  undo: '<path d="M4 11h10a5 5 0 0 1 0 10M4 11l5-5m-5 5 5 5"/>',
  redo: '<path d="M20 11H10a5 5 0 0 0 0 10m10-10-5-5m5 5-5 5"/>',
  fit: '<path d="M8 4H4v4m12-4h4v4m0 8v4h-4M4 16v4h4"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  sliders: '<path d="M5 3v3m0 5v10m7-18v9m0 5v4m7-18v3m0 5v10"/><circle cx="5" cy="8.5" r="2.5"/><circle cx="12" cy="14.5" r="2.5"/><circle cx="19" cy="8.5" r="2.5"/>',
  edit: '<path d="m14 6 4 4M5 19l1-5L17 3l4 4-11 11Z"/>',
  shield: '<path d="M12 22s7-3 7-9V5l-7-3-7 3v8c0 6 7 9 7 9Z"/><path d="m9 12 2 2 4-4"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  rotate: '<path d="M4 11a8 8 0 1 1 2 7m-2-7V5m0 6h6"/>',
  trash: '<path d="M4 6h16M9 6V3h6v3M6 6l1 14h10l1-14M10 10v6m4-6v6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  external: '<path d="M13 4h7v7m0-7-9 9m6 0v7H4V7h7"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
};

export function icon(name) {
  return icons[name] ? `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>` : '';
}

export function addIcons(root = document) {
  for (const element of root.querySelectorAll('[data-icon]')) {
    element.insertAdjacentHTML('afterbegin', icon(element.dataset.icon));
  }
}
