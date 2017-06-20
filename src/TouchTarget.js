import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { colors } from './variables'

const Button = styled.button`
  padding: 0.5em 1em;
  background-color: ${({primary, success}) => primary ? colors.primary : 'transparent' };
  border: 2px solid ${({color, primary, success}) => color ? color : colors.dark };
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: ${colors.dark};
    color: ${colors.light};
  }
`
Button.displayName = 'Button'

const Link = Button.withComponent(RouterLink)

Link.displayName = 'Link'

export default function TouchTarget (props) {
  if (props.to) return Link
  else return Button
}
