import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { sizing, colors } from "../variables"

const getColor = ({ primary, success, alert, warning, color }) =>
  primary
    ? colors.primary
    : success
      ? colors.success
      : alert
        ? colors.alert
        : warning ? colors.warning : color ? color : colors.darkGray

const StyledButton = styled.button`
  display: inline-block;
  padding: ${sizing / 2}px ${sizing}px;
  background-color: ${({ bare, ...props }) =>
    bare ? "transparent" : getColor(props)};
  border: ${({ bare, ...props }) =>
    bare ? `2px solid ${getColor(props)}` : "none"};
  border-radius: 2px;
  color: ${({ bare, ...props }) => (bare ? getColor(props) : colors.light)};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  min-width: ${sizing * 4}px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: ${({ bare }) => (bare ? "none" : "0 1px 3px rgba(0,0,0,0.12)")};
    background-color: ${props => getColor(props)};
  }
`

const StyledLink = StyledButton.withComponent(Link)

const Button = props => {
  if (props.to) return <StyledLink {...props}>{props.children}</StyledLink>
  else return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.displayName = "Button"

export default Button
