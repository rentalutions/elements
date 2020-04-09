import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Base, { theme } from "@rent_avail/base"

const ExtendedBase = createGlobalStyle`
  body {
    padding: 2rem;
  }
`

function storyWrapper(story) {
  return (
    <ThemeProvider theme={theme}>
      <Base />
      <ExtendedBase />
      {story()}
    </ThemeProvider>
  )
}

addDecorator(storyWrapper)
