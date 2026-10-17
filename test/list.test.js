import { expect, test } from "vitest";
import { last } from "../src/list.js";

test("last returns the last item", () => {
  expect(last([1, 2, 3])).toBe(3);
});
