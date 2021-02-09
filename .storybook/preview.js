import React from "react"
import { ThemeProvider } from "styled-components"
import { Base, theme } from "@rent_avail/base"

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Base />
        <Story />
      </ThemeProvider>
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
