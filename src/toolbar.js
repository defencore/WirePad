export function bindToolbar(toolbar) {
  const buttons = [...toolbar.querySelectorAll('button')];
  toolbar.setAttribute('role', 'toolbar');

  function focusable(active) {
    for (const button of buttons) button.tabIndex = button === active ? 0 : -1;
  }

  focusable(buttons[0]);
  toolbar.addEventListener('focusin', event => {
    const button = event.target.closest('button');
    if (buttons.includes(button)) focusable(button);
  });
  toolbar.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const available = buttons.filter(button => !button.disabled && !button.hidden);
    const index = available.indexOf(event.target.closest('button'));
    if (index < 0) return;
    const positions = {
      ArrowLeft: (index + available.length - 1) % available.length,
      ArrowRight: (index + 1) % available.length,
      Home: 0,
      End: available.length - 1,
    };
    if (!Object.hasOwn(positions, event.key)) return;
    event.preventDefault();
    available[positions[event.key]].focus({ preventScroll: true });
  });
}
