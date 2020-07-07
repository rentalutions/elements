module.exports = {
  plugins: [["styled-components", { ssr: true }]],
  env: {
    test: {
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
        [
          "module-resolver",
          { alias: { "testing-utils": "./testing-utils.js" } },
        ],
        ["styled-components", { ssr: true }],
      ],
    },
  },
}
