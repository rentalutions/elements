require("dotenv").config()

module.exports = {
  stories: ["../packages/**/*.stories.js"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-storysource"],
}
