import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// import { Link } from "react-router-dom"
import theme, { sizing, colors } from "../variables"

const getColor = ({ primary, success, alert, warning, external, color }) =>
  primary
    ? colors.primary
    : success
      ? colors.success
      : alert
        ? colors.alert
        : warning
          ? colors.warning
          : external ? colors.external : color ? color : colors.darkGray

const StyledButton = styled.button`
  display: inline-block;
  padding: ${sizing / 2 - 2}px ${sizing}px;
  margin: 0;
  background-color: ${({ bare, ...props }) =>
    bare ? "transparent" : getColor(props)};
  border: ${props => `2px solid ${getColor(props)}`};
  border-radius: 2px;
  color: ${({ bare, theme, ...props }) => (bare ? getColor(props) : theme.colors.ui.light)};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily};
  min-width: ${({ theme }) => theme.sizing * 4}px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 200ms ease-in-out;
  outline: none;
  &:hover {
    box-shadow: ${({ bare }) => (bare ? "none" : "0 3px 6px rgba(0,0,0,0.24)")};
    background-color: ${props => getColor(props)};
    color: ${({ theme }) => theme.colors.ui.light};
  }
  &:disabled,
  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.ui.main};
    background: ${({ theme }) => theme.colors.ui.semiLight};
    border: 2px solid ${({ theme }) => theme.colors.ui.semiLight};
  }
  &.disabled {
    pointer-events: none;
  }
`

// const StyledLink = StyledButton.withComponent(Link)

const Button = ({ children, className, to, disabled, ...props }) => {
  // if (to)
  //   return (
  //     <StyledLink
  //       className={`${className ? className : ""} ${disabled
  //         ? "disabled"
  //         : ""}`}
  //       to={to}
  //       {...props}
  //     >
  //       {children}
  //     </StyledLink>
  //   )
  return (
    <StyledButton className={className} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  alert: PropTypes.bool,
  warning: PropTypes.bool,
  external: PropTypes.bool
  // to: PropTypes.string
}

Button.displayName = "Button"

Button.defaultProps = {
  theme
}

export default Button
