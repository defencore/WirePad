import { board, chip, circle, label, line, path, rect, smd, tactile } from "./svg.js";

export function microUsb(x, y, width = 28) {
  return rect(x, y, width, 15, 2, "#a8b2b9", "#e2e8eb") +
    rect(x + 3, y + 8, width - 6, 5, 2, "#303a46") + line(x + 7, y + 11, x + width - 7, y + 11, "#89979e");
}

export function espDevKitArt({ width, height }, mini) {
  const mid = width / 2;
  const moduleWidth = mini ? 72 : 82;
  const shieldBottom = mini ? 104 : 137;
  const x = mid - moduleWidth / 2;
  return board(width, height, "#21252a", "#515961") +
    rect(7, 14, 9, 326, 2, "#191e25", "#545a60") +
    rect(width - 16, 14, 9, 326, 2, "#191e25", "#545a60") +
    rect(x, 2, moduleWidth, shieldBottom + 1, 2, "#25272a", "#515961") +
    path(`M${x + 9} 27v-16h10v16h10v-16h10v16h10v-16h10v16`, "none", "#504a3c", 1.5) +
    rect(x + 1, 32, moduleWidth - 2, shieldBottom - 32, 3, "#b0b0ab", "#deded7") +
    rect(x + 5, 36, moduleWidth - 10, shieldBottom - 40, 2, "#c4c5bf") +
    label(mid, 56, "ESPRESSIF", 8.5, "#414747") +
    label(mid, 72, "ESP32-S3", 8, "#505653") +
    label(mid, 86, mini ? "MINI-1" : "WROOM-1", 7.5, "#515856") +
    rect(mid - 23, 156, 23, 29, 2, "#343538", "#787b79") +
    rect(mid - 20, 153, 17, 7, 1, "#bfc3bb", "#e1e1da") +
    smd(mid + 19, 154, "#c7d78b") + label(mid + 23, 167, "PWR", 6) +
    rect(mid - 27, 202, 16, 17, 2, "#e4e5d9", "#b9c2b4") +
    circle(mid - 19, 210, 3.6, "#c7d2be") + label(mid - 19, 227, "RGB", 6) +
    chip(mid + 3, 237, 24, 31, "UART", 6) +
    smd(mid - 28, 237) + smd(mid - 29, 248) + smd(mid + 23, 279) +
    label(mid, 285, mini ? "DEVKITM-1" : "DEVKITC-1", 7.5) +
    tactile(mid - 33, 308) + tactile(mid + 18, 308) +
    label(mid - 26, 334, "BOOT", 6) + label(mid + 26, 334, "RESET", 6) +
    label(mid - 26, 347, "UART", 6) + label(mid + 26, 347, "USB", 6) +
    microUsb(mid - 41, height - 20, 30) + microUsb(mid + 11, height - 20, 30);
}

export const espDevKitCArt = component => espDevKitArt(component, false);
