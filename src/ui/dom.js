export function requireElement(root, selector) {
  const element = root.querySelector(selector);
  if (!element) throw new Error(`Missing interface element: ${selector}`);
  return element;
}
