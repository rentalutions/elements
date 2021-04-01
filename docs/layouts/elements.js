import React from "react"
import { Container } from "@rent_avail/layout"
import { ToastProvider } from "@rent_avail/toast"
import { formatPath } from "utils"
import { PageWrapper, Main, Sidebar } from "components/layout"
import PackageInfo from "components/package-info"
import { frontMatter as packageFiles } from "../pages/packages/**/*.mdx"
import { frontMatter as patternFiles } from "../pages/patterns/**/*.mdx"

export default function ElementsLayout({ children: content, frontMatter }) {
  // console.log(packages)
  const packages = packageFiles.sort((curr) => {
    const path = formatPath(curr.__resourcePath)
    return path === "packages" ? -1 : 0
  })
  const packageInfo = frontMatter.source
  return (
    <ToastProvider>
      <PageWrapper>
        <Sidebar sections={{ Elements: packages, Patterns: patternFiles }} />
        <Main>
          <Container my="4rem">
            {packageInfo && <PackageInfo info={frontMatter} />}
            {content}
          </Container>
        </Main>
      </PageWrapper>
    </ToastProvider>
  )
}
