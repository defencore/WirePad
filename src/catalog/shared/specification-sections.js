// A family keeps one explicit component order while its source specifications
// live in related device groups. Missing, repeated and orphaned records fail here
// before catalog registration can silently change the library contents.
export function specificationSections(family, sections, order) {
  if (typeof family !== 'string' || !family.trim() || !Array.isArray(sections) || !sections.length ||
      !Array.isArray(order) || !order.length) throw new Error('A specification manifest needs a family, sections and component order.');
  const specifications = new Map();
  for (const section of sections) {
    if (!Array.isArray(section) || !section.length) throw new Error(`Specification family "${family}" has an empty section.`);
    for (const specification of section) {
      const id = specification?.id;
      if (typeof id !== 'string' || !id.trim()) throw new Error(`Specification family "${family}" has a missing component ID.`);
      if (specifications.has(id)) throw new Error(`Specification family "${family}" repeats component "${id}".`);
      specifications.set(id, specification);
    }
  }
  const seen = new Set();
  const result = order.map(id => {
    if (seen.has(id)) throw new Error(`Specification family "${family}" repeats ordered component "${id}".`);
    seen.add(id);
    if (!specifications.has(id)) throw new Error(`Specification family "${family}" has no specification for "${id}".`);
    return specifications.get(id);
  });
  for (const id of specifications.keys()) if (!seen.has(id)) throw new Error(`Specification family "${family}" does not order component "${id}".`);
  return result;
}
