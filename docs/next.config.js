const readingTime = require("reading-time")
const withMdxEnhanced = require("next-mdx-enhanced")
const compose = require("next-compose-plugins")

const mdx = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx"],
  extendFrontMatter: {
    process: (content) => ({
      readingTime: readingTime(content),
    }),
  },
})

module.exports = compose([mdx], {
  pageExtensions: ["mdx", "js"],
  env: { placesKey: process.env.PLACES_KEY },
})
