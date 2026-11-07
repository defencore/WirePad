export const quote = (value) => JSON.stringify(String(value));
export const format = (value) => Number(value.toFixed(4));
export const rgb = (color) => color.slice(1).match(/.{2}/g).map((part) => Number.parseInt(part, 16));
