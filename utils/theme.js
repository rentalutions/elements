import React from "react"
import { theme, useConfig, ComponentsProvider } from "docz"
import { ThemeProvider } from "styled-components"
import { colors } from "../components/constants"
import Base from "../components/base"

function Theme({ children }) {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <>
        <Base></Base>
        <ComponentsProvider>{children}</ComponentsProvider>
      </>
    </ThemeProvider>
  )
}

const config = {
  colors: colors
}

export default theme(config)(Theme)
