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
  position,
} from "styled-system"
import { sx } from "@rent_avail/base"

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
  ${position};
  ${sx};
`

export default Box
