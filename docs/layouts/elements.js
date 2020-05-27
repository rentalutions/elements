import { Fragment } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Container, Box, Grid, Col } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { frontMatter as packages } from "../pages/packages/*.mdx"

const formatPath = path =>
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

const PackageInfoWrapper = styled(Box)`
  .grid {
    border-top: 1px solid ${({ theme }) => theme.colors.ui_500};
  }
`

function PackageInfo({ info: { source, title, install } }) {
  return (
    <PackageInfoWrapper bg="blue_100" borderRadius="0.25rem">
      <Heading as="h1" p="2rem">
        {title}
      </Heading>
      <Box
        as="img"
        px="2rem"
        pb="2rem"
        alt="npm (scoped)"
        src="https://img.shields.io/npm/v/@rent_avail/avatar?color=%237c95b0&label=version&style=for-the-badge"
      />
      <Grid p="2rem" className="grid">
        <Col gridColumn={["span 2"]}>Install</Col>
        <Col gridColumn={["span 10"]} as="code">
          {install}
        </Col>
        <Col gridColumn={["span 2"]}>Source</Col>
        <Col gridColumn={["span 10"]}>
          <a href={source}>Github</a>
        </Col>
      </Grid>
    </PackageInfoWrapper>
  )
}

export default pageMatter => {
  const order = packages.sort(curr => {
    const path = formatPath(curr.__resourcePath)
    return path === "packages" ? -1 : 0
  })
  return ({ children: content }) => {
    const packageInfo = pageMatter.source
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
            {order.map(item => (
              <li key={item.__resourcePath}>
                <Link href={`/${formatPath(item.__resourcePath)}`}>
                  <a>{item.title}</a>
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
