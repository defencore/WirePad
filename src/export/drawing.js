import { escapeText } from "../shared/text.js";

const PNG_SCALE = 2;
const PNG_EDGE_LIMIT = 8192;
const PNG_PIXEL_LIMIT = 16_000_000;

export function createDrawingSVG({ title = "WirePad drawing", bounds, markup, background = "#ffffff", padding = 24 }) {
  const { x, y, width, height } = bounds;
  if (![x, y, width, height, padding].every(Number.isFinite) || width < 0 || height < 0 || padding < 0) {
    throw new Error("The drawing has invalid dimensions.");
  }
  const left = Math.floor(x - padding);
  const top = Math.floor(y - padding);
  const viewWidth = Math.max(1, Math.ceil(x + width + padding) - left);
  const viewHeight = Math.max(1, Math.ceil(y + height + padding) - top);
  if (![left, top, viewWidth, viewHeight].every(Number.isSafeInteger)) {
    throw new Error("The drawing has invalid dimensions.");
  }

  const viewBox = `${left} ${top} ${viewWidth} ${viewHeight}`;
  const backdrop = background === null ? "" :
    `<rect x="${left}" y="${top}" width="${viewWidth}" height="${viewHeight}" fill="${escapeText(background)}"/>`;
  const heading = `<title>${escapeText(title)}</title>`;
  const render = (imageWidth, imageHeight, options = "") => [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${imageWidth}" height="${imageHeight}" viewBox="${viewBox}" font-family="Arial, sans-serif"${options}>`,
    heading, backdrop, markup, "</svg>",
  ].join("\n");
  return {
    width: viewWidth,
    height: viewHeight,
    get svg() { return render(viewWidth, viewHeight); },
    raster() {
      const scale = Math.min(
        PNG_SCALE,
        PNG_EDGE_LIMIT / Math.max(viewWidth, viewHeight),
        Math.sqrt(PNG_PIXEL_LIMIT / (viewWidth * viewHeight)),
      );
      const width = Math.max(1, Math.floor(viewWidth * scale));
      const height = Math.max(1, Math.floor(viewHeight * scale));
      return { width, height, svg: render(width, height, ' preserveAspectRatio="none"') };
    },
  };
}
