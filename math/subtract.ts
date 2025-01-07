import { add } from "./add.ts";

export function subtract(a: number, b: number): number {
  return add(a, b * -1);
}
