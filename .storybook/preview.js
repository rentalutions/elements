import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Base, { theme } from "@rent_avail/base"

const ExtendedBase = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.ui_300};
  }
`

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Base />
    <ExtendedBase />
    {story()}
  </ThemeProvider>
))
