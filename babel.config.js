module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        include: ["@babel/plugin-proposal-optional-chaining"],
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    ["styled-components", { ssr: true }],
    ["module-resolver", { alias: { "testing-utils": "./testing-utils.js" } }],
  ],
}
