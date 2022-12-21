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
      { name: "app", value: "#f3f3f3" },
      { name: "light", value: "#fff" },
      { name: "dark", value: "#2d2d2d" },
    ],
  },
}
