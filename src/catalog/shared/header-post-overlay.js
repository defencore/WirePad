import { escapeText } from '../../shared/text.js';
import { rect } from './svg.js';

// Installed straight posts are independent of deliberately staggered PCB drills.
export function headerPostOverlay(pins, unitsPerMm, sizeMm = .5) {
  const size = sizeMm * unitsPerMm;
  return `<g class="installed-header-posts" pointer-events="none"><title>Installed straight male-header posts; connection centers follow the header assembly, not offset PCB drill centers.</title>` +
    pins.map(pin => `<g data-header-post="${escapeText(pin.pinId ?? pin.id)}">${rect(pin.x - size / 2, pin.y - size / 2, size, size, 0, '#efd18a', '#705d32')}</g>`).join('') + '</g>';
}
