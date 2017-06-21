import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import { colors } from './variables'

const returnColor = (props) => (
  props.primary ? colors.primary
  : props.success ? colors.positive
  : props.failure ? colors.negative
  : props.warning ? colors.warning
  : props.color ? props.color
  : colors.feedback
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
  padding: 0.5em 1em;
  background-color: ${({computedColor, primary}) => primary ? computedColor : 'transparent'};
  border: 2px solid ${({computedColor}) => computedColor};
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background: ${({computedColor, primary}) => primary ? darken(0.2, computedColor) : computedColor};
    color: ${colors.light};
  }
`

Button.displayName = 'Button'

export default Button
