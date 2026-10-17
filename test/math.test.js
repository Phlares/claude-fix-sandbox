import { expect, test } from "vitest";
import { clamp, sum } from "../src/math.js";

test("sum adds", () => {
  expect(sum(2, 3)).toBe(5);
});

test("clamp bounds", () => {
  expect(clamp(5, 0, 3)).toBe(3);
  expect(clamp(-1, 0, 3)).toBe(0);
});
