import React from "react"
import { Box, Container } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"

export default function MarketingIcons() {
  return (
    <Container my="4rem">
      <Heading as="h1">Icons & Illustration</Heading>
      <Text>
        Icon library and illustration guidelines for creating expressive images.
      </Text>
      <Box as="section" mt="4rem">
        <Heading>Marketing Icons</Heading>
        <Text>
          Icons for use in our web, email, and other digital marketing
          collateral. Choose from GitHub&apos;s brand blue color, or a
          monochrome white on dark.
        </Text>
      </Box>
    </Container>
  )
}
