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
}
