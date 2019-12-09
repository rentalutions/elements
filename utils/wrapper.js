import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useConfig } from "docz"
import PropTypes from "prop-types"
import Base from "src/base"

const DocBase = createGlobalStyle`
  h1 {
    font-weight: 200;
  }
  img {
    max-width: 100%;
  }
  img[alt="intro-personality"] {
    width: 100%;
    max-width: 120px;
    margin-top: 4rem;
  }
`

export default function Wrapper({ children }) {
  return (
    <>
      <Base />
      <DocBase />
      {children}
    </>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
