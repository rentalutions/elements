const withMdxEnhanced = require("next-mdx-enhanced")

module.exports = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
})()
