import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useConfig } from "docz"
import PropTypes from "prop-types"
import Base from "src/base"

const DocBase = createGlobalStyle`
  img[alt="intro-personality"] {
    width: 100%;
    max-width: 120px;
    margin-top: 4rem;
  }
`

export default function Wrapper({ children }) {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <>
        <Base />
        <DocBase />
        {children}
      </>
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
