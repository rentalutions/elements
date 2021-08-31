module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/env",
          { targets: { node: "current" }, loose: true, shippedProposals: true },
        ],
        "@babel/react",
        "@babel/typescript",
      ],
    },
  },
  babelrcRoots: [".", "packages/*"],
}
