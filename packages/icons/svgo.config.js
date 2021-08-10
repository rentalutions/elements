module.exports = {
  plugins: [
    { name: "removeTitle", active: true },
    { name: "mergePaths", active: false },
    { name: "convertShapeToPath", active: false },
    { name: "removeAttrs", params: { attrs: "(fill|stroke.*)" } },
  ],
}
