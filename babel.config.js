module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: { node: "current" },
        include: ["@babel/plugin-proposal-optional-chaining"],
      },
    ],
    "@babel/react",
  ],
  plugins: [
    ["styled-components", { ssr: true }],
    ["module-resolver", { alias: { "testing-utils": "./testing-utils.js" } }],
  ],
}
