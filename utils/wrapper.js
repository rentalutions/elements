import React from "react"
import Base from "../components/base"
import { ThemeProvider } from "styled-components"
import { useConfig } from "docz"

export default function({ children }) {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <>
        <Base />
        {children}
      </>
    </ThemeProvider>
  )
}
