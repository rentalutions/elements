import React from "react"
import styled from "styled-components"
import { Box, Container, Stack } from "@rent_avail/layout"
import Link from "next/link"
import { frontMatter as brandPages } from "../pages/brand/**/*.mdx"
import { formatPath } from "utils"
import { PageWrapper, Main, Sidebar } from "components/Layout"

export default function BrandLayout(pageMatter) {
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
  return ({ children: content }) => {
    return (
      <PageWrapper>
        <Sidebar>
          <Stack as="ul">
            <Box as="li">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Box>
            {sortedPages.map((page) => (
              <Box key={page.__resourcePath} as="li">
                <Link href={`/${formatPath(page.__resourcePath)}`}>
                  <a>{page.title}</a>
                </Link>
              </Box>
            ))}
          </Stack>
        </Sidebar>
        <Main>
          <Container my="4rem">{content}</Container>
        </Main>
      </PageWrapper>
    )
  }
}
