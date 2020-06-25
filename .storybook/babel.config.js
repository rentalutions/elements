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
  plugins: [["styled-components", { ssr: true }]],
}
