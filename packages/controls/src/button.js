import styled from "styled-components"
import {
  color,
  space,
  layout,
  flexbox,
  border,
  buttonStyle,
} from "styled-system"
import { lighten } from "polished"

const Button = styled.button`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${border};
  ${buttonStyle};
  appearance: none;
  border-width: 2px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.5rem;
  font-family: inherit;
  text-transform: uppercase;
  transition: 100ms;
  white-space: nowrap;
  border-color: ${({ theme, color }) => theme.colors[color] || color};
  outline: none;
  &:focus {
    background: ${({ color, theme }) =>
      lighten(0.66, theme.colors[color] || color)};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.ui_100};
    background: ${({ color, theme }) => theme.colors[color] || color};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.ui_300};
    background: ${({ theme }) => theme.colors.ui_500};
    border-color: transparent;
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  py: "1rem",
  px: "2rem",
  borderRadius: "0.25rem",
  bg: "transparent",
  color: "blue_500",
}

export default Button
