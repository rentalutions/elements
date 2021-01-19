import { Fragment } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Container, Box, Stack, Grid, Col } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { BlogFooter } from "components/blog"

const SystemSection = styled(Col)`
  padding: 4rem;
  background: ${({ theme }) => theme.colors.green_100};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    color: ${({ theme }) => theme.colors.green_700};
    box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.colors.green_300};
  }
`

export default function Home() {
  return (
    <Fragment>
      <Box as="section" sx={{ bg: "blue_900", color: "blue_100" }}>
        <Container
          as={Grid}
          sx={{
            minHeight: "calc(100vh - 10rem)",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Col span={[12, 6]}>
            <Heading as="h1">Avail Design System</Heading>
            <Text mt="2rem">
              Resources, tools, and component patterns for product design at
              Avail.
            </Text>
            <Box
              as={Stack}
              direction={["row"]}
              sx={{ mt: "2rem" }}
              wrapChildren
            >
              <Link href="/brand/principles">
                <a className="link">Principles</a>
              </Link>
              <a
                href="https://github.com/rentalutions/elements"
                className="link"
              >
                Source
              </a>
              <Link href="/blog">
                <a className="link">Blog</a>
              </Link>
            </Box>
          </Col>
          <Col span={[12, 6]} gridRow={[1, "auto"]}>
            <Box as="img" src="/images/building.svg" width="100%" />
          </Col>
        </Container>
      </Box>
      <Container as={Grid} mt="4rem">
        <Link href="/brand">
          <SystemSection gridColumn={["1 / -1", "span 6"]}>
            <Heading as="h4" mb="1rem">
              Brand Guidelines
            </Heading>
            <Text>
              Foundations, writing style, color, type, and personality of our
              brand.
            </Text>
          </SystemSection>
        </Link>
        <Link href="/packages">
          <SystemSection gridColumn={["1 / -1", "span 6"]}>
            <Heading as="h4" mb="1rem">
              Elements
            </Heading>
            <Text>
              Components, design patterns, animation guidelines to help you
              build products at Avail.
            </Text>
          </SystemSection>
        </Link>
        <Link href="/icons">
          <SystemSection gridColumn={["1 / -1", "span 6"]}>
            <Heading as="h4" mb="1rem">
              Illustrations & Icons
            </Heading>
            <Text>
              Illustrations, icons and guidelines for creating expressive and
              cohesive images.
            </Text>
          </SystemSection>
        </Link>
        <SystemSection gridColumn={["1 / -1", "span 6"]}>
          <Heading as="h4" mb="1rem">
            Presentation Resources
          </Heading>
          <Text>
            Deck templates and guidelines that let you focus on the story.
          </Text>
        </SystemSection>
      </Container>
      <BlogFooter sx={{ mt: "4rem" }} />
    </Fragment>
  )
}
