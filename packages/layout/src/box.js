import styled from "styled-components"
import {
  space,
  layout,
  color,
  flexbox,
  background,
  border,
} from "styled-system"

const Box = styled.div`
  min-width: 0;
  ${space};
  ${layout};
  ${color};
  ${flexbox};
  ${background};
  ${border};
`

export default Box
