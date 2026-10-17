import { expect, test } from "vitest";
import { channel } from "../src/release.js";

test("pull request builds publish to the preview channel", () => {
  expect(channel()).toBe("preview");
});
