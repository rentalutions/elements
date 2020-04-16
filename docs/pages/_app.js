import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Base, { theme } from "@rent_avail/base"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "../mdx-components.js"

const ExtendedBase = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.ui_900};
    color: ${({ theme }) => theme.colors.ui_100};
  }
  h1, h2, h3, h4, h5, p {
    color: ${({ theme }) => theme.colors.ui_100};
  }
  a {
    color: ${({ theme }) => theme.colors.green_500};
    &:visited {
      color: ${({ theme }) => theme.colors.green_100};
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Base />
        <ExtendedBase />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
