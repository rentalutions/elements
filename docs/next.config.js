const withMdxEnhanced = require("next-mdx-enhanced")
const withTranspile = require("next-transpile-modules")
const compose = require("next-compose-plugins")

const mdx = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx"],
})

const transpile = withTranspile([
  "@rent_avail/avatar",
  "@rent_avail/base",
  "@rent_avail/controls",
  "@rent_avail/dialog",
  "@rent_avail/feedback",
  "@rent_avail/input",
  "@rent_avail/layout",
  "@rent_avail/menu",
  "@rent_avail/popover",
  "@rent_avail/progress",
  "@rent_avail/select",
  "@rent_avail/tag",
  "@rent_avail/tooltip",
  "@rent_avail/typography",
  "@rent_avail/utils",
])

module.exports = compose([mdx, transpile], {
  pageExtensions: ["mdx", "js"],
})
