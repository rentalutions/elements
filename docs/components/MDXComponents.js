import styled from "styled-components"
import { Heading, Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
// import CodeSandbox from "components/CodeSandbox"
import CodeBlock from "components/CodeBlock"

const Th = styled(Box)`
  text-align: left;
`

export default {
  h1: props => <Heading {...props} as="h1" my="2rem" />,
  h2: props => <Heading {...props} as="h2" my="2rem" />,
  h3: props => <Heading {...props} as="h3" my="1rem" />,
  h4: props => <Heading {...props} as="h4" my="1rem" />,
  h5: props => <Heading {...props} as="h5" mt="1rem" />,
  p: props => <Text {...props} mt="1rem" />,
  inlineCode: props => (
    <Box
      {...props}
      as="code"
      p="2px"
      bg="blue_100"
      color="blue_700"
      borderRadius="0.25rem"
    />
  ),
  table: props => <Box {...props} as="table" width="100%" />,
  th: props => <Th {...props} as="th" />,
  td: props => (
    <Box
      {...props}
      as="td"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="ui_300"
      py="1rem"
    />
  ),
  img: props => <Box {...props} as="img" maxWidth="100%" />,
  code: props => <Box {...props} as="code" />,
  pre: ({ children, ...props }) => {
    const language = children?.props?.className.replace(/language-/, "")
    const code = children?.props?.children.trim()
    return <CodeBlock {...props} language={language} code={code} />
  },
  ol: props => <Box {...props} as="ol" ml="2rem" />,
  li: props => <Box {...props} as="li" mt="1rem" />
}
