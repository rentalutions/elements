export function formatPath(path) {
  return path.replace(/(index|\.mdx$|\/$)/gi, "").replace(/\/$/, "")
}
