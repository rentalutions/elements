import React from "react"
import { ThemeProvider } from "styled-components"
import { useConfig } from "docz"
import PropTypes from "prop-types"
import Base from "../src/base"

export default function Wrapper({ children }) {
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

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
