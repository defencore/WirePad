const MIN_ZOOM = .01;
const MAX_ZOOM = 4;
const limitZoom = scale => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, scale));

export class CanvasViewport {
  constructor({ svg, onZoom }) {
    this.svg = svg;
    this.onZoom = onZoom;
    this.scale = 1;
    this.center = { x: 0, y: 0 };
    this.autoFit = true;
  }

  onViewChange() {}

  fitBounds(bounds, autoFit = false) {
    const { clientWidth, clientHeight } = this.svg;
    if (!clientWidth || !clientHeight) return;
    this.autoFit = autoFit;
    this.center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 };
    this.scale = bounds.width || bounds.height ? Math.min(
      1.4, Math.max(MIN_ZOOM, Math.max(1, clientWidth - Math.min(105, clientWidth * .16)) / Math.max(1, bounds.width)),
      Math.max(MIN_ZOOM, Math.max(1, clientHeight - Math.min(138, clientHeight * .26)) / Math.max(1, bounds.height)),
    ) : 1;
    this.applyView();
  }

  point(clientX, clientY) {
    const transform = this.svg.getScreenCTM().inverse();
    return {
      x: transform.a * clientX + transform.c * clientY + transform.e,
      y: transform.b * clientX + transform.d * clientY + transform.f,
    };
  }

  zoom(scale, anchor = this.center) {
    const next = limitZoom(scale);
    const ratio = this.scale / next;
    this.center = {
      x: anchor.x + (this.center.x - anchor.x) * ratio,
      y: anchor.y + (this.center.y - anchor.y) * ratio,
    };
    this.scale = next;
    this.autoFit = false;
    this.applyView();
  }

  zoomAt(scale, anchor, clientX, clientY) {
    const current = this.point(clientX, clientY);
    const next = limitZoom(scale);
    const ratio = this.scale / next;
    this.center = {
      x: anchor.x - (current.x - this.center.x) * ratio,
      y: anchor.y - (current.y - this.center.y) * ratio,
    };
    this.scale = next;
    this.autoFit = false;
    this.applyView();
  }

  pan(start, x, y) {
    this.center = { x: start.x - x / this.scale, y: start.y - y / this.scale };
    this.autoFit = false;
    this.applyView();
  }

  applyView() {
    const width = this.svg.clientWidth / this.scale;
    const height = this.svg.clientHeight / this.scale;
    if (!width || !height) return;
    this.svg.setAttribute('viewBox', `${this.center.x - width / 2} ${this.center.y - height / 2} ${width} ${height}`);
    this.onViewChange();
    this.onZoom(this.scale);
  }
}
