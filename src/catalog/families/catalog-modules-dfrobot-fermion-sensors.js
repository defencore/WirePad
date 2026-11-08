import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-fermion-sensors/manifest.js';

export default defineFamily('modules-dfrobot-fermion-sensors', specs.map(sourceModule));
