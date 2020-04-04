module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "styled-components",
    [
      "module-resolver",
      {
        alias: {
          src: "./src",
          utils: "./utils",
        },
      },
    ],
  ],
}
