import React from "react"
import { Table } from "@storybook/components"
import { ElementsProvider, baseTheme } from "@rent_avail/core"
import { storybookTheme } from "./manager"

export const decorators = [
  (Story) => {
    return (
      <ElementsProvider>
        <Story />
      </ElementsProvider>
    )
  },
]

export const parameters = {
  docs: {
    theme: storybookTheme,
    components: {
      table: (props) => <Table style={{ width: "100%" }} {...props} />,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    default: "App Background",
    values: [
      { name: "App Background", value: baseTheme.colors.ui_300 },
      { name: "Light", value: baseTheme.colors.ui_100 },
      { name: "Dark", value: baseTheme.colors.ui_900 },
    ],
  },
  options: {
    storySort: {
      order: ["Intro", "Packages", ["Core", "Controls"], "Patterns"],
    },
  },
}
