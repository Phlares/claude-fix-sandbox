import { expect, test } from "vitest";
import { isEven } from "../src/num.js";

test("isEven", () => {
  expect(isEven(4)).toBe(true);
});
