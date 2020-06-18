const withMdxEnhanced = require("next-mdx-enhanced")
const compose = require("next-compose-plugins")

const mdx = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx"]
})

module.exports = compose([mdx], {
  pageExtensions: ["mdx", "js"]
})
