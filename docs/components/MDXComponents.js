import styled from "styled-components"
import { Heading, Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import CodeBlock from "components/CodeBlock"
import Avatar from "@rent_avail/avatar"
import { Button, Checkbox, Radio, Switch } from "@rent_avail/controls"

const Th = styled(Box)`
  text-align: left;
`

export default {
  h1: props => <Heading {...props} as="h1" mt="4rem" mb="2rem" />,
  h2: props => <Heading {...props} as="h2" my="2rem" />,
  h3: props => <Heading {...props} as="h3" mt="2rem" mb="1rem" />,
  h4: props => <Heading {...props} as="h4" mt="2rem" mb="0.5rem" />,
  h5: props => <Heading {...props} as="h5" mt="1rem" />,
  p: props => <Text {...props} mt="1rem" />,
  inlineCode: props => (
    <Box
      {...props}
      as="code"
      p="0.25rem"
      bg="blue_100"
      color="blue_700"
      borderRadius="0.25rem"
    />
  ),
  table: props => <Box {...props} as="table" width="100%" />,
  th: props => <Th {...props} as="th" pr="1rem" />,
  td: props => (
    <Box
      {...props}
      as="td"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="ui_300"
      py="1rem"
      pr="1rem"
    />
  ),
  img: props => <Box {...props} as="img" maxWidth="100%" />,
  code: props => <Box {...props} as="code" />,
  pre: props => (
    <CodeBlock {...props} scope={{ Avatar, Button, Checkbox, Radio, Switch }} />
  ),
  ol: props => <Box {...props} as="ol" ml="2rem" />,
  li: props => <Box {...props} as="li" mt="1rem" />,
  hr: props => (
    <Box
      {...props}
      as="hr"
      borderColor="ui_500"
      borderStyle="solid"
      my="2rem"
    />
  )
}
