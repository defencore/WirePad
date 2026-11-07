import { footprintLayout } from "./footprint-layout.js";

export function modelLayout(component) {
  const layout = footprintLayout(component);
  const { width, height, color = "#396c50", details = [] } = layout;
  const shell = layout.modelHeight ?? 1.6;
  const body = [0, 0, shell / 2 + 0.2, width, height, shell, color];
  const fittings = details.map(([x, y, w, h, depth, tint]) => [
    x, y, shell + 0.2 + depth / 2, w, h, depth, tint,
  ]);
  const leads = layout.pads.flatMap(({ x, y, smd }) => {
    if (smd) return [];
    const reach = Math.max(0, Math.abs(x) - width / 2);
    const lead = [x, y, -0.65, 0.53, 0.53, 2.4, "#a7b2bc"];
    if (!layout.inline || reach === 0) return [lead];
    const center = shell / 2 + 0.2;
    return [
      [x, y, (center - 1.85) / 2, 0.53, 0.53, center + 1.85, "#a7b2bc"],
      [x - Math.sign(x) * reach / 2, y, center, reach + 0.25, 0.53, 0.53, "#a7b2bc"],
    ];
  });
  const terminals = layout.inline || layout.switch ? [] : layout.pads.map((pad) => (
    pad.smd ? [pad.x, pad.y, 0.19, pad.width, pad.height, 0.14, "#d5a450"]
      : [pad.x, pad.y, shell + 0.27, 1.15, 1.15, 0.14, "#d5a450"]
  ));
  return [...leads, body, ...terminals, ...fittings];
}
