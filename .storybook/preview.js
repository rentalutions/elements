import React from "react"
import { ElementsProvider } from "@rent_avail/core"

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
  layout: "fullscreen",
  backgrounds: {
    default: "light",
    values: [
      { name: "app", value: "#F3F3F3" },
      { name: "light", value: "#FFFFFF" },
      { name: "dark", value: "#2D2D2D" },
    ],
  },
  options: {
    storySort: {
      order: ["Intro", "Packages", "Patterns"],
    },
  },
}
