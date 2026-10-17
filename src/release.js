// GITHUB_WORKFLOW is the name of the running workflow.
// Pull request runs of CI publish to preview; only non-PR CI runs are stable.
export function channel() {
  return process.env.GITHUB_WORKFLOW === "CI" &&
    process.env.GITHUB_EVENT_NAME !== "pull_request"
    ? "stable"
    : "preview";
}
