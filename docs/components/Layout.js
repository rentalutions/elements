import React from "react"
import styled from "styled-components"
import { Box, Stack } from "@rent_avail/layout"
import Link from "next/link"
import { formatPath } from "utils"

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  min-height: 100vh;
`

const Main = styled.main`
  height: 100vh;
  overflow-y: auto;
  position: relative;
`

const SidebarWrapper = styled.aside`
  background: ${({ theme }) => theme.colors.ui_300};
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  ul {
    list-style: none;
  }
  ul li a {
    color: ${({ theme }) => theme.colors.blue_500};
    &:hover {
      color: ${({ theme }) => theme.colors.blue_300};
    }
  }
  img {
    cursor: pointer;
    filter: drop-shadow(${({ theme }) => theme.shadows[1]});
  }
`

function Sidebar({ children, pages, ...props }) {
  return (
    <SidebarWrapper {...props}>
      <Stack as="ul">
        <Box as="li">
          <Link href="/">
            <Box
              as="img"
              src="/icon-100.png"
              aria-label="home button"
              height="3rem"
            />
          </Link>
        </Box>
        {pages.map((page) => (
          <Box key={page.__resourcePath} as="li">
            <Link href={`/${formatPath(page.__resourcePath)}`}>
              <a>{page.title}</a>
            </Link>
          </Box>
        ))}
      </Stack>
    </SidebarWrapper>
  )
}

export { PageWrapper, Main, Sidebar }
