module.exports = {
  presets: ["@babel/preset-env", "@babel/react"],
  plugins: [["styled-components", { ssr: true }]],
  env: {
    test: {
      plugins: [
        [
          "module-resolver",
          { alias: { "testing-utils": "./testing-utils.js" } },
        ],
      ],
    },
  },
}
