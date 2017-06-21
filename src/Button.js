import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

const TouchTarget = ({
  to,
  className,
  children,
  ...rest
}) => {
  if (to) return <Link to={to} className={className} {...rest}>{children}</Link>
  else return <button className={className} {...rest}>{children}</button>
}

const Button = styled(TouchTarget).attrs({
  computedColor: props => returnColor(props)
})`
  padding: 0.5rem 1rem;
  background-color: ${({computedColor, primary}) => primary ? computedColor : 'transparent'};
  border: 2px solid ${({computedColor}) => computedColor};
  border-radius: 2px;
  color: ${({computedColor, primary}) => primary ? colors.grey.light : computedColor};
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  font-weight: 600;
  min-width: 90px;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 200ms ${timingFunctions('easeInQuad')};
  &:hover {
    background: ${props => props.primary ? darken(0.24, props.computedColor) : props.computedColor};
    border: 2px solid ${props => props.primary ? darken(0.24, props.computedColor) : props.computedColor};
    box-shadow: ${({primary}) => primary ? '0 1px 3px rgba(0,0,0,0.12)' : 'inital'};
    color: ${colors.grey.light};
  }
`

Button.displayName = 'Button'

export default Button
