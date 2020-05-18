module.exports = {
  presets: [["next/babel", { "preset-env": { targets: { node: "current" } } }]],
  plugins: [
    "import-glob-array",
    ["styled-components", { ssr: true }],
    ["module-resolver", { alias: { components: "./components" } }],
  ],
}
