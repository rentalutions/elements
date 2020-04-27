import styled from "styled-components"
import { typography, color, layout, space, flexbox } from "styled-system"

const Text = styled.p`
  ${typography};
  ${color};
  ${layout};
  ${space};
  ${flexbox};
`

const Heading = styled.h2`
  ${typography};
  ${color};
  ${layout};
  ${space};
  ${flexbox};
`

export { Heading, Text }
