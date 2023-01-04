module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/template/"],
  transformIgnorePatterns: ["/node_modules/", "<rootDir>/packages/*./dist/"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "packages", "utils"],
}
