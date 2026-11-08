import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-converters/manifest.js';

export default defineFamily('modules-dfrobot-converters', specs.map(sourceModule));
