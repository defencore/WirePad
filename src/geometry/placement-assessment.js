import { mountingFor } from '../catalog/index.js';
import { componentForPart } from '../model/part-component.js';
import { attachmentError } from '../model/mounting.js';
import { pointOnPart } from './parts.js';
import { pinById } from '../model/component-pins.js';
import { mountingTargets } from './breadboard-targets.js';

export function placementAssessment(project, part) {
  if (!part) return null;
  const component = componentForPart(part), profile = component && mountingFor(component.id);
  if (!profile || profile.type === 'breadboard') return null;
  if (part.attachment && !attachmentError(project, part)) {
    const host = project.parts.find(item => item.id === part.attachment.hostPartId);
    const hostComponent = componentForPart(host);
    const contacts = part.attachment.contacts.map(contact => ({ ...contact,
      point: pointOnPart(host, pinById(hostComponent, contact.hostPinId), hostComponent) }));
    const complete = contacts.length === profile.contacts.length;
    return { state: complete ? 'fit' : 'partial', contacts, hostPartId: host.id,
      reason: complete ? `${contacts.length} contacts connected`
        : `${contacts.length} of ${profile.contacts.length} leads connected. Move the free lead to a free hole.` };
  }
  const hosts = mountingTargets(project, part, profile);
  if (!hosts.length) return null;
  return { state: 'blocked', contacts: [], hostPartId: hosts[0].part.id,
    reason: 'No complete fit here. Use free holes, separate electrical lines and space for the body.' };
}
