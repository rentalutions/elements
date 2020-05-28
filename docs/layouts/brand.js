import React from "react"
import styled from "styled-components"
import { Box, Container, Stack } from "@rent_avail/layout"
import Link from "next/link"
import { frontMatter as brandPages } from "../pages/brand/**/*.mdx"
import { formatPath } from "utils"
import { PageWrapper, Main, Sidebar } from "components/Layout"

export default function BrandLayout(pageMatter) {
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
            {brandPages.map((page) => (
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
