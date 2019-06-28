import styled from "styled-components"
import { colors } from "../constants"

export default styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 1rem 2rem;
  background: ${({ primary, color }) =>
    primary ? (color ? color : colors.blue_500) : "transparent"};
  border: 2px solid
    ${({ color, subtle }) => (subtle ? "transparent" : color ? color : colors.blue_500)};
  border-radius: 4px;
  color: ${({ primary, color }) =>
    primary ? colors.grey_100 : color ? color : colors.blue_500};
  font-weight: 700;
  text-transform: uppercase;
`
