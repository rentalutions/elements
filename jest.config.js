module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/template/"],
  transformIgnorePatterns: ["/node_modules/", "<rootDir>/packages/*./dist/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "#testing": "<rootDir>/utils/testing.js",
  },
}
