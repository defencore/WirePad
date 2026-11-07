export const itemCollections = Object.freeze({ part: 'parts', wire: 'wires', junction: 'junctions' });

export function updateItem(project, type, id, properties) {
  const key = itemCollections[type];
  return { ...project, [key]: project[key].map(item => item.id === id ? { ...item, ...properties } : item) };
}
