module.exports = {
  plugins: [
    ["styled-components", { ssr: true }],
    ["module-resolver", { alias: { "testing-utils": "./testing-utils.js" } }],
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
}
