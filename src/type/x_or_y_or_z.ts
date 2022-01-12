import type { XYZ } from "../constant/xyz"

export type XOrYOrZ = typeof XYZ extends Set<infer T> ? T : never;
