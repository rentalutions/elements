const withMdxEnhanced = require("next-mdx-enhanced")
const mdxPrism = require("mdx-prism")

module.exports = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx"],
  rehypePlugins: [mdxPrism],
})({ pageExtensions: ["mdx", "js"] })
