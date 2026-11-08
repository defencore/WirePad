import specifications from "../data/market-sensors/manifest.js";
import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import { marketSensorPackage } from "../shared/market-sensor-packages.js";

export default defineFamily("market-sensors", specifications.map(({ builder, ...spec }) => builder === "sensor" ? marketSensorPackage(spec) : marketPackage({ ...spec, category: "Sensors" })));
