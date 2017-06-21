import React from 'react'
import styled from 'styled-components'
import { colors } from './variables'
import classNames from 'classnames'

const InputMarkup = props => {
  const classes = classNames('input-group', props.className)
  return (
    <div className={classes}>
      <input id={props.id} type={props.type} placeholder={props.placeholder}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

const Input = styled(InputMarkup)`
  input {
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  input + label {

  }
`

Input.displayName = 'Input'

export default Input
