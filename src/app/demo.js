import { componentById } from "../catalog/index.js";
import { pinById } from "../model/component-pins.js";
import { newProject } from "../model/project.js";
import { GROUND_WIRE_COLOR, SUPPLY_WIRE_COLOR } from "../model/wire-colors.js";

export function demoProject() {
  const project = newProject("RS-485 sensor node");
  const controller = { id: "u1", componentId: "esp32-s3", label: "ESP32-S3 DevKitC-1", x: 20, y: 35 };
  const sensor = { id: "u2", componentId: "bme280", label: "BME280", x: 515, y: 35 };
  const transceiver = { id: "u3", componentId: "max3485", label: "MAX3485 RS-485", x: 515, y: 268 };
  project.parts = [controller, sensor, transceiver];

  const pinY = (part, pinId) => part.y + pinById(componentById.get(part.componentId), pinId).y;
  const point = (x, y) => ({ x, y });
  const endpoint = (part, pinId) => pinId ? { partId: part.id, pinId } : { junctionId: part.id };
  const wire = (id, color, start, startPin, end, endPin, points) => ({
    id,
    color,
    from: endpoint(start, startPin),
    to: endpoint(end, endPin),
    points,
  });
  const through = (x, start, startPin, end, endPin) => [
    point(x, pinY(start, startPin)),
    point(x, pinY(end, endPin)),
  ];

  const groundPin = "gnd-2";
  const power = SUPPLY_WIRE_COLOR;
  const ground = GROUND_WIRE_COLOR;
  const direction = "#d08722";
  const powerJunction = { id: "power-branch", x: 474, y: pinY(sensor, "vin") };
  const groundJunction = { id: "ground-branch", x: 439, y: pinY(sensor, "gnd") };
  const directionJunction = { id: "direction-branch", x: 494, y: pinY(transceiver, "de") };
  project.junctions = [powerJunction, groundJunction, directionJunction];

  const powerTrunk = [
    point(4, pinY(controller, "3v3")),
    point(4, 10),
    point(powerJunction.x, 10),
  ];

  project.wires = [
    wire("power-trunk", power, controller, "3v3", powerJunction, null, powerTrunk),
    wire("sensor-power", power, powerJunction, null, sensor, "vin", []),
    wire("bus-power", power, powerJunction, null, transceiver, "vcc", [point(powerJunction.x, pinY(transceiver, "vcc"))]),
    wire("ground-trunk", ground, controller, groundPin, groundJunction, null, [point(groundJunction.x, pinY(controller, groundPin))]),
    wire("sensor-ground", ground, groundJunction, null, sensor, "gnd", []),
    wire("bus-ground", ground, groundJunction, null, transceiver, "gnd", [point(groundJunction.x, pinY(transceiver, "gnd"))]),
    wire("i2c-clock", "#2c83d9", controller, "gpio1", sensor, "scl", through(396, controller, "gpio1", sensor, "scl")),
    wire("i2c-data", "#12946d", controller, "gpio2", sensor, "sda", through(373, controller, "gpio2", sensor, "sda")),
    wire("uart-tx", "#8b5cc7", controller, "gpio42", transceiver, "di", through(386, controller, "gpio42", transceiver, "di")),
    wire("uart-rx", "#5475c5", controller, "gpio41", transceiver, "ro", through(350, controller, "gpio41", transceiver, "ro")),
    wire("direction-trunk", direction, controller, "gpio40", directionJunction, null, through(314, controller, "gpio40", transceiver, "de")),
    wire("driver-enable", direction, directionJunction, null, transceiver, "de", []),
    wire("receiver-enable", direction, directionJunction, null, transceiver, "re", [point(directionJunction.x, pinY(transceiver, "re"))]),
  ];
  return project;
}
