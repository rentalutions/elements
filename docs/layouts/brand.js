import React from "react"
import { Container } from "@rent_avail/layout"
import { PageWrapper, Main, Sidebar } from "components/layout"
import { frontMatter as brandPages } from "../pages/brand/**/*.mdx"

export default function BrandLayout({ children: content }) {
  const order = [
    "Foundations",
    "Design ethos",
    "Voice and tone",
    "Color usage",
    "Typography",
    "Logo usage",
  ]
  const sortedPages = brandPages.sort((a, b) => {
    return order.indexOf(a.title) - order.indexOf(b.title)
  })
  return (
    <PageWrapper>
      <Sidebar sections={{ Brand: sortedPages }} />
      <Main>
        <Container my="4rem">{content}</Container>
      </Main>
    </PageWrapper>
  )
}
