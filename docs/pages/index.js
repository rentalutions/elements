import { Fragment } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Container, Box, Stack, Grid, Col } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"

const HeroContainer = styled(Container)`
  display: grid;
  align-content: center;
  min-height: calc(100vh - 5rem);
`

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
      <Box
        as="section"
        bg="blue_900"
        color="blue_100"
        _hover={{ background: "pink" }}
      >
        <HeroContainer>
          <Heading as="h1">Avail Design System</Heading>
          <Text mt="2rem">
            Resources, tools, and component patterns for product design at
            Avail.
          </Text>
          <Stack variant="horizontal" mt="2rem">
            <Link href="/principles">
              <a>Principles</a>
            </Link>
            <a href="https://github.com/rentalutions/elements">Source</a>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </Stack>
        </HeroContainer>
      </Box>
      <Container as={Grid} mt="4rem">
        <SystemSection gridColumn={["1 / -1", "span 6"]}>
          <Heading as="h4" mb="1rem">
            Brand Guidelines
          </Heading>
          <Text>
            Foundations, writing style, color, type, and personality of our
            brand.
          </Text>
        </SystemSection>
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
        <SystemSection gridColumn={["1 / -1", "span 6"]}>
          <Heading as="h4" mb="1rem">
            Illustrations & Icons
          </Heading>
          <Text>
            Illustrations, icons and guidelines for creating expressive and
            cohesive images.
          </Text>
        </SystemSection>
        <SystemSection gridColumn={["1 / -1", "span 6"]}>
          <Heading as="h4" mb="1rem">
            Presentation Resources
          </Heading>
          <Text>
            Deck templates and guidelines that let you focus on the story.
          </Text>
        </SystemSection>
      </Container>
      <Box as="footer" mt="4rem" py="4rem" bg="blue_100">
        <Container>
          <Text>
            Created and maintained by the{" "}
            <Link href="/about">
              <a>design team</a>
            </Link>
          </Text>
        </Container>
      </Box>
    </Fragment>
  )
}
