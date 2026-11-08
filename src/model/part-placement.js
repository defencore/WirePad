export const MIN_PART_SCALE = 1 / 32;
export const MAX_PART_SCALE = 32;

const UNIT_SCALE = Object.freeze({ x: 1, y: 1 });

export function normalizePartScale(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value) ||
      ![value.x, value.y].every(scale => Number.isFinite(scale) && scale >= MIN_PART_SCALE && scale <= MAX_PART_SCALE)) {
    throw new Error(`Component scale must contain x and y values from ${MIN_PART_SCALE} to ${MAX_PART_SCALE}.`);
  }
  return { x: value.x, y: value.y };
}

export function partScale(part) {
  return part.scale ?? UNIT_SCALE;
}

export function partSize(part, component) {
  const scale = partScale(part);
  return { width: component.width * scale.x, height: component.height * scale.y };
}
