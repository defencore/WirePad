import { serializeProject } from "../model/project.js";

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
