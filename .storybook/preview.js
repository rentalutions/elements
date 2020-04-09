import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Base from "@rent_avail/elements/src/base"

const theme = {}

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
