module.exports = {
  env: {
    test: {
      presets: [
        ["@babel/env", { targets: { node: "current" } }],
        "@babel/react",
        "@babel/typescript",
      ],
    },
  },
}
