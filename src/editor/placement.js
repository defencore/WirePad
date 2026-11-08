import { componentById, configurationFor } from '../catalog/index.js';
import { makeId } from '../model/project.js';
import { componentForPart } from '../model/part-component.js';
import { detachInvalidAttachments } from '../model/mounting.js';
import { clampPoint } from '../geometry/routing.js';
import { fitPart } from '../geometry/breadboard-placement.js';
import { placementAssessment } from '../geometry/placement-assessment.js';
import { detachPart } from './attachments.js';
import { translatePart } from './selection.js';
import { poseAtCenter } from '../geometry/breadboard-targets.js';

export function insertionPoint(componentId, center) {
  const component = componentById.get(componentId);
  if (!component) return null;
  const pose = poseAtCenter({ componentId }, component, center, { x: 1, y: 1 }, 0);
  return { x: pose.x, y: pose.y };
}

export function previewPart(project, componentId, point, { mount = true, hostPartId } = {}) {
  const component = componentById.get(componentId);
  if (!component) return null;
  const part = { id: makeId('part'), componentId, ...clampPoint(point),
    ...(point.rotation !== undefined ? { rotation: point.rotation } : {}) };
  const configuration = configurationFor(componentId);
  if (configuration) part[configuration.key] = configuration.normalize();
  if (component.defaultValue) part.label = `${component.shortName ?? component.name} · ${component.defaultValue}`;
  const candidate = { ...project, parts: [...project.parts, part] };
  const fit = mount ? fitPart(candidate, part, { hostPartId }) : null;
  const next = fit ? { ...candidate, parts: [...project.parts, fit.part] } : candidate;
  const placed = fit?.part ?? part;
  return { project: next, part: placed, fit, assessment: mount ? placementAssessment(next, placed) : null };
}

export function placementProject(project, partId, destination) {
  const moved = translatePart(project, partId, destination);
  if (!moved) return null;
  const part = moved.parts.find(item => item.id === partId);
  if (componentForPart(part).surface) return moved;
  const detached = detachPart(part);
  const candidate = { ...moved, parts: moved.parts.map(item => item.id === partId ? detached : item) };
  const fit = fitPart(candidate, detached);
  return detachInvalidAttachments(fit
    ? { ...candidate, parts: candidate.parts.map(item => item.id === partId ? fit.part : item) }
    : candidate);
}
