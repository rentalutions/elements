export const formatPath = (path) =>
  path.replace(/(index|\.mdx$|\/$)/gi, "").replace(/\/$/, "")
