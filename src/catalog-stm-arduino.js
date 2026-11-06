import { arduinoDefinitions, arduinoModels } from "./catalog-arduino.js";
import { stm32Definitions } from "./catalog-stm32.js";

const boards = [...arduinoDefinitions, ...stm32Definitions];

export const stmArduinoComponents = boards.map(({ component }) => component);
export const stmArduinoArt = Object.fromEntries(boards.map(({ component, art }) => [component.art, art]));
export const stmArduinoFootprints = Object.fromEntries(boards.map(({ component, footprint }) => [component.id, footprint]));
export const stmArduinoModels = arduinoModels;
