import styled from "styled-components"
import Link from "next/link"
import { Container, Box } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { frontMatter as packages } from "../pages/packages/**/*.mdx"

const formatPath = (path) =>
  path.replace(/(index|\.mdx$|\/$)/gi, "").replace(/\/$/, "")

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  min-height: 100vh;
`

const Main = styled.main`
  height: 100vh;
  overflow-y: auto;
`

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.ui_300};
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  ul {
    list-style: none;
  }
  ul li {
    margin-bottom: 1rem;
  }
  ul li a {
    color: ${({ theme }) => theme.colors.blue_500};
    &:hover {
      color: ${({ theme }) => theme.colors.blue_300};
    }
  }
`

export default (pageMatter) => {
  const order = packages.sort((curr, next) => {
    const path = formatPath(curr.__resourcePath)
    console.log(path)
    return path === "packages" ? -1 : 0
  })
  return ({ children: content }) => {
    const packageInfo = pageMatter.package
    return (
      <PageWrapper>
        <Sidebar>
          <Box mb="2rem">
            <Link href="/">
              <Text color="blue_500" as="a">
                Home
              </Text>
            </Link>
          </Box>
          <Heading as="h4" mb="2rem" color="ui_700">
            Packages
          </Heading>
          <ul>
            {order.map((item) => (
              <li key={item.__resourcePath}>
                <Link href={`/${formatPath(item.__resourcePath)}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Sidebar>
        <Main>
          <Container my="4rem">
            {packageInfo && <PackageInfo info={pageMatter} />}
            {content}
          </Container>
        </Main>
      </PageWrapper>
    )
  }
}
