import styled from "styled-components"
import {
  space,
  layout,
  color,
  flexbox,
  background,
  border,
  grid,
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
`

export default Box
