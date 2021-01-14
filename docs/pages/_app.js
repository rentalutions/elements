import React from "react"
import { ThemeProvider } from "styled-components"
import { Base as Reset, theme as availTheme } from "@rent_avail/base"
import { MDXProvider } from "@mdx-js/react"
import components from "components/mdx-components"
import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={availTheme}>
      <MDXProvider components={components}>
        <DefaultSeo
          title="Avail Design"
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
        <Reset />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
