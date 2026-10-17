import { expect, test } from "vitest";

// DEPLOY_KEY comes from the repo secret of the same name; the deploy
// smoke test cannot run without it. Do not stub it.
test("deploy key is configured", () => {
  expect(process.env.DEPLOY_KEY ?? "").toMatch(/^dk_/);
});
