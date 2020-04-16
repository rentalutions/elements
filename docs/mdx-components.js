import styled from "styled-components"
import { Heading, Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"

const Th = styled(Box)`
  text-align: left;
`

export default {
  h1: ({ ...props }) => <Heading {...props} as="h1" my="2rem" />,
  h2: ({ ...props }) => <Heading {...props} as="h2" my="2rem" />,
  h3: ({ ...props }) => <Heading {...props} as="h3" my="1rem" />,
  h4: ({ ...props }) => <Heading {...props} as="h4" my="1rem" />,
  h5: ({ ...props }) => <Heading {...props} as="h5" mt="1rem" />,
  p: ({ ...props }) => <Text {...props} mt="1rem" />,
  inlineCode: ({ ...props }) => (
    <Box
      {...props}
      as="code"
      p="2px"
      bg="blue_100"
      color="blue_700"
      borderRadius="0.25rem"
    />
  ),
  table: ({ ...props }) => (
    <Box {...props} as="table" color="ui_100" width="100%" />
  ),
  th: ({ ...props }) => <Th {...props} as="th" />,
  td: ({ ...props }) => (
    <Box
      {...props}
      as="td"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="ui_300"
      py="1rem"
    />
  ),
  img: ({ ...props }) => <Box {...props} as="img" maxWidth="100%" />,
}
