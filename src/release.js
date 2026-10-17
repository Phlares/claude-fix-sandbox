// GITHUB_WORKFLOW is the name of the running workflow.
export function channel() {
  return process.env.GITHUB_WORKFLOW === "CI" ? "stable" : "preview";
}
