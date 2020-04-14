module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
  plugins: [
    "styled-components",
    ["module-resolver", { alias: { tester: "./test-utils.js" } }],
  ],
}
