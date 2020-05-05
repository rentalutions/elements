import { Fragment } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Container, Box, Grid, Col } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { frontMatter as packages } from "../pages/packages/**/*.mdx"

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

function PackageInfo({ info: { package_name, title } }) {
  const packageInfo = [
    {
      name: "Install",
      value: <code>yarn add @rentAvail/{package_name}</code>
    },
    {
      name: "Source",
      value: (
        <a
          href={`https://github.com/rentalutions/elements/packages/${package_name}`}
        >
          Github
        </a>
      )
    }
  ]
  return (
    <PackageInfoWrapper bg="ui_300" borderRadius="0.25rem">
      <Heading as="h1" p="2rem">
        {title}
      </Heading>
      <Grid p="2rem" className="grid">
        {packageInfo.map(item => (
          <Fragment key={item.name}>
            <Col gridColumn={["span 4"]}>{item.name}</Col>
            <Col gridColumn={["span 8"]}>{item.value}</Col>
          </Fragment>
        ))}
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
    const packageInfo = pageMatter.package_name
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
