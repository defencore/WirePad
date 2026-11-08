import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/power/manifest.js';

export default defineFamily('modules-mikroe-power', specs.map(sourceModule));
