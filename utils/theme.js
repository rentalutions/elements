import React from "react"
import { theme, useConfig, ComponentsProvider, useDocs } from "docz"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { colors } from "src/constants"
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

function Theme({ children }) {
  // const config = useConfig()
  const docs = useDocs()
  console.log(docs)
  return (
    <>
      <ul>
        {docs.map(doc => (
          <li>{doc.name}</li>
        ))}
      </ul>
      <Base />
      <DocBase />
      <ComponentsProvider>{children}</ComponentsProvider>
    </>
  )
}

const config = {
  colors
}

export default theme(config)(Theme)
