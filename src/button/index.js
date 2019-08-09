import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors } from "../constants"

const primaryStyles = css`
  background-color: ${colors.blue_500};
  color: ${colors.ui_100};
  &:hover {
    color: ${colors.blue_100};
    background: ${colors.blue_900};
  }
`

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 1rem 2rem;
  background-color: "transparent";
  color: ${colors.blue_500};
  border: 2px solid ${colors.blue_500};
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue_500};
    color: ${colors.ui_100};
  }
  ${({ primary }) => primary && primaryStyles}
`

Button.propTypes = {
  /** Control the visual importance of a button. */
  primary: PropTypes.bool
}

export default Button
