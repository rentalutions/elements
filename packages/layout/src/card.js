import styled from "styled-components"
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  border,
  position,
  shadow,
} from "styled-system"
import { sx } from "@rent_avail/base"

const Card = styled.section`
  min-width: 0;
  ${position};
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
  ${color};
  ${border};
  ${shadow};
  ${sx};
`

Card.defaultProps = {
  p: "2rem",
  bg: "ui_100",
  border: "1px solid",
  borderColor: "ui_500",
  borderRadius: "0.25rem",
  boxShadow: 2,
}

export default Card
