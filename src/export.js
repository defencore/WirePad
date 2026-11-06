import { serializeProject } from "./project.js";
import { escapeText } from "./text.js";

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

function fileStem(title) {
  return String(title).trim().toLowerCase()
    .replace(/[^\p{L}\p{N}_-]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "wirepad-project";
}

export function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  try {
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
  } finally {
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

function svgBlob(svg) {
  return new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
}

function imageFromURL(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("The drawing could not be rendered."));
    image.src = url;
  });
}

async function drawingPNG(drawing) {
  const { svg, width, height } = drawing.raster();
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("PNG export is unavailable in this browser.");
  }
  const url = URL.createObjectURL(svgBlob(svg));
  try {
    const image = await imageFromURL(url);
    context.drawImage(image, 0, 0);
    return await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error("The PNG could not be created."));
      }, "image/png");
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function downloadDrawing(drawing, title, format) {
  if (format !== "svg" && format !== "png") {
    throw new Error("Choose PNG or SVG to export the drawing.");
  }
  const blob = format === "svg" ? svgBlob(drawing.svg) : await drawingPNG(drawing);
  downloadBlob(blob, `${fileStem(title)}.${format}`);
}

export async function copyDrawing(drawing) {
  if (!globalThis.ClipboardItem || !navigator.clipboard?.write) {
    throw new Error("Image copying is unavailable here. Download the drawing as PNG.");
  }
  const png = Promise.resolve(drawing).then(drawingPNG);
  try {
    // Start the write during the user gesture, before the PNG is ready.
    const item = new ClipboardItem({ "image/png": png });
    await Promise.all([navigator.clipboard.write([item]), png]);
  } catch (error) {
    // A synchronous clipboard failure can occur before Promise.all observes the PNG.
    png.catch(() => {});
    throw error;
  }
}

export function downloadProject(project) {
  const blob = new Blob([serializeProject(project)], { type: "application/json" });
  downloadBlob(blob, `${fileStem(project.title)}.wirepad.json`);
}
