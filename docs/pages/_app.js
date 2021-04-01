import React from "react"
import { DefaultSeo } from "next-seo"
import { ElementsProvider } from "@rent_avail/core"
import { MDXProvider } from "@mdx-js/react"
import components from "components/mdx-components"
import defaultSeo from "../seo.config"

export default function App({ Component, pageProps }) {
  return (
    <ElementsProvider>
      <MDXProvider components={components}>
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </MDXProvider>
    </ElementsProvider>
  )
}
