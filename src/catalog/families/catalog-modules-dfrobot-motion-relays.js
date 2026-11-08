import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-motion-relays/manifest.js';

export default defineFamily('modules-dfrobot-motion-relays', specs.map(sourceModule));
