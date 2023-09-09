import { addons } from "@storybook/addons"
import { create } from "@storybook/theming"
import { baseTheme } from "@rent_avail/core"

export const storybookTheme = create({
  base: "light",
  colorPrimary: baseTheme.colors.green_500,
  colorSecondary: baseTheme.colors.blue_500,

  appBg: baseTheme.colors.ui_300,
  appContentBg: baseTheme.colors.ui_100,

  fontBase: baseTheme.fonts.body,
  fontCode: "IBM Plex Mono, monospace",

  barTextColor: baseTheme.colors.ui_900,
  barSelectedColor: baseTheme.colors.green_500,
  barBg: baseTheme.colors.ui_100,

  brandTitle: "Avail Design System",
  brandImage: "https://www.avail.co/_next/static/media/avail-logo.da3ce793.svg",
  brandUrl: "https://github.com/rentalutions/elements",
  brandTarget: "_blank",
})

addons.setConfig({
  theme: storybookTheme,
})
