module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          { targets: { node: "current" }, loose: true, shippedProposals: true },
        ],
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
    },
  },
  babelrcRoots: [".", "packages/*"],
}
