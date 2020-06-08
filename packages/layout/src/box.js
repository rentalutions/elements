import styled from "styled-components"
import {
  space,
  layout,
  color,
  flexbox,
  background,
  border,
  grid,
  typography,
} from "styled-system"

const Box = styled.div`
  min-width: 0;
  ${space};
  ${layout};
  ${color};
  ${flexbox};
  ${background};
  ${border};
  ${grid};
  ${typography};
`

export default Box
