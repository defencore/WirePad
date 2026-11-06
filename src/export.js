import { serializeProject } from "./project.js";

const PNG_SCALE = 2;
const PNG_EDGE_LIMIT = 8192;
const PNG_PIXEL_LIMIT = 16_000_000;

function xml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, "");
}

export function createDrawingSVG({ title = "WirePad drawing", bounds, markup, background = "#ffffff", padding = 24 }) {
  if (![bounds.x, bounds.y, bounds.width, bounds.height, padding].every(Number.isFinite) ||
    bounds.width < 0 || bounds.height < 0 || padding < 0) {
    throw new Error("The drawing has invalid dimensions.");
  }
  const x = Math.floor(bounds.x - padding);
  const y = Math.floor(bounds.y - padding);
  const width = Math.max(1, Math.ceil(bounds.x + bounds.width + padding) - x);
  const height = Math.max(1, Math.ceil(bounds.y + bounds.height + padding) - y);
  const backdrop = background === null ? "" :
    `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${xml(background)}"/>`;
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${x} ${y} ${width} ${height}" font-family="Arial, sans-serif">`,
    `<title>${xml(title)}</title>`,
    backdrop,
    markup,
    "</svg>",
  ].join("\n");
  return { svg, width, height };
}

function fileStem(title) {
  return String(title).trim().toLowerCase()
    .replace(/[^\p{L}\p{N}_-]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "wirepad-project";
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
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

async function drawingPNG({ svg, width, height }) {
  const url = URL.createObjectURL(svgBlob(svg));
  try {
    const image = await imageFromURL(url);
    const scale = Math.min(
      PNG_SCALE,
      PNG_EDGE_LIMIT / Math.max(width, height),
      Math.sqrt(PNG_PIXEL_LIMIT / (width * height)),
    );
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("PNG export is unavailable in this browser.");
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
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
  await navigator.clipboard.write([
    new ClipboardItem({ "image/png": drawingPNG(drawing) }),
  ]);
}

export function downloadProject(project) {
  const blob = new Blob([serializeProject(project)], { type: "application/json" });
  downloadBlob(blob, `${fileStem(project.title)}.wirepad.json`);
}
