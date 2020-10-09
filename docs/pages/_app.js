import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Base, theme as availTheme } from "@rent_avail/base"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "components/MDXComponents"
import { DefaultSeo } from "next-seo"

const ExtendedBase = createGlobalStyle`
  a {
    color: ${({ theme }) => theme.colors.green_500};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    &:visited {
      color: ${({ theme }) => theme.colors.ui_700};
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={availTheme}>
      <MDXProvider components={MDXComponents}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://design.avail.co/",
            site_name: "Avail Design",
          }}
          twitter={{
            handle: "@helloavail",
            site: "@helloavail",
            cardType: "summary_large_image",
          }}
        />
        <Base />
        <ExtendedBase />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
