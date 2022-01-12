import type { XOrYOrZ } from "../type/x_or_y_or_z";
import { XYZ } from "../constant/xyz";

export function isXOrYOrZ(x: unknown): x is XOrYOrZ {
  return XYZ.has(x as XOrYOrZ);
}
