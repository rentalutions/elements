import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { darken, timingFunctions } from 'polished'
import { colors } from './variables'

const returnColor = (props) => (
  props.primary ? colors.brand.primary
  : props.success ? colors.ui.positive
  : props.failure ? colors.ui.negative
  : props.warning ? colors.ui.warning
  : props.btnColor ? props.btnColor
  : colors.grey.darkSecondary
)

const ButtonWrapper = styled.button.attrs({
  computedColor: props => returnColor(props)
})`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({computedColor, primary}) => primary ? computedColor : 'transparent'};
  border: ${({bare, computedColor}) => bare ? 'none' : `2px solid ${computedColor}`};
  border-radius: 2px;
  color: ${({computedColor, primary}) => primary ? colors.grey.light : computedColor};
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  font-weight: 600;
  min-width: 90px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: all 200ms ${timingFunctions('easeInQuad')};
  &:hover {
    background: ${props => props.primary ? darken(0.24, props.computedColor) : props.computedColor};
    border: 2px solid ${props => props.primary ? darken(0.24, props.computedColor) : props.computedColor};
    box-shadow: ${({primary}) => primary ? '0 1px 3px rgba(0,0,0,0.12)' : 'inital'};
    color: ${colors.grey.light};
  }
`

const Link = ButtonWrapper.withComponent(RouterLink)

const Button = props => {
  if (props.to) return <Link {...props}>{props.children}</Link>
  else return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

Button.displayName = 'Button'

export default Button
