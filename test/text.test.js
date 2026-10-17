import { expect, test } from "vitest";
import { shout } from "../src/text.js";

test("shout upper-cases", () => {
  expect(shout("hi")).toBe("HI!");
});
