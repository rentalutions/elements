import React from "react"
import { theme, useConfig, ComponentsProvider } from "docz"
import { ThemeProvider } from "styled-components"
import { colors } from "../src/constants"
import Base from "../src/base"

function Theme({ children }) {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <>
        <Base />
        <ComponentsProvider>{children}</ComponentsProvider>
      </>
    </ThemeProvider>
  )
}

const config = {
  colors: colors
}

export default theme(config)(Theme)
