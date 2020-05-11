module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    ["styled-components", { ssr: true }],
    ["module-resolver", { alias: { "testing-utils": "./testing-utils.js" } }],
  ],
}
