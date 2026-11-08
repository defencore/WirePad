import { partSize } from '../model/part-placement.js';
import { componentForPart } from '../model/part-component.js';

export function attachedPartIds(project, hostIds) {
  const ids = new Set(hostIds);
  for (const part of project.parts) if (hostIds.has(part.attachment?.hostPartId)) ids.add(part.id);
  return ids;
}

export function detachPart(part) {
  if (!part.attachment) return part;
  const { attachment, ...detached } = part;
  return detached;
}

export function rotateWithAttachments(project, part, rotation) {
  const size = partSize(part, componentForPart(part));
  const center = { x: part.x + size.width / 2, y: part.y + size.height / 2 };
  const delta = (rotation - (part.rotation ?? 0) + 360) % 360;
  return {
    ...project,
    parts: project.parts.map(item => {
      if (item.id === part.id) return { ...detachPart(item), rotation };
      if (item.attachment?.hostPartId !== part.id) return item;
      const child = partSize(item, componentForPart(item));
      const dx = item.x + child.width / 2 - center.x, dy = item.y + child.height / 2 - center.y;
      const offset = delta === 90 ? { x: -dy, y: dx } : delta === 180 ? { x: -dx, y: -dy } : { x: dy, y: -dx };
      return { ...item, x: center.x + offset.x - child.width / 2, y: center.y + offset.y - child.height / 2,
        rotation: ((item.rotation ?? 0) + delta) % 360 };
    }),
  };
}
