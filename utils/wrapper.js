import React from "react"
import Base from "../src/base"
import { ThemeProvider } from "styled-components"
import { useConfig } from "docz"

export default function({ children }) {
  const config = useConfig()
  console.log(config)
  return (
    <ThemeProvider theme={config}>
      <>
        <Base />
        {children}
      </>
    </ThemeProvider>
  )
}
