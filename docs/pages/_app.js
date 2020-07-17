import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Base, theme } from "@rent_avail/base"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "components/MDXComponents"

const ExtendedBase = createGlobalStyle`
  a {
    color: ${({ theme }) => theme.colors.green_500};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    &:visited {
      color: ${({ theme }) => theme.colors.green_300};
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
