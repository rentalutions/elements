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
    "@babel/plugin-transform-modules-commonjs",
  ],
}
