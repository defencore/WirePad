import { mountingFor } from '../catalog/index.js';
import { partSize } from '../model/part-placement.js';
import { componentForPart } from '../model/part-component.js';
import { partBounds, partOutlineBounds } from '../geometry/parts.js';

function rotationCenter(part) {
  const profile = mountingFor(part.componentId);
  const bounds = part.scale && profile?.viewBounds ? partBounds(part) : partOutlineBounds(part);
  return { x: (bounds.left + bounds.right) / 2, y: (bounds.top + bounds.bottom) / 2 };
}

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
  const center = rotationCenter(part);
  const delta = (rotation - (part.rotation ?? 0) + 360) % 360;
  return {
    ...project,
    parts: project.parts.map(item => {
      if (item.id === part.id) {
        const rotated = { ...detachPart(item), rotation };
        const nextCenter = rotationCenter(rotated);
        return { ...rotated, x: rotated.x + center.x - nextCenter.x, y: rotated.y + center.y - nextCenter.y };
      }
      if (item.attachment?.hostPartId !== part.id) return item;
      const child = partSize(item, componentForPart(item));
      const dx = item.x + child.width / 2 - center.x, dy = item.y + child.height / 2 - center.y;
      const offset = delta === 90 ? { x: -dy, y: dx } : delta === 180 ? { x: -dx, y: -dy } : { x: dy, y: -dx };
      return { ...item, x: center.x + offset.x - child.width / 2, y: center.y + offset.y - child.height / 2,
        rotation: ((item.rotation ?? 0) + delta) % 360 };
    }),
  };
}
