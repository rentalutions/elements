import React from 'react'
import styled from 'styled-components'
import { colors } from './variables'
import classNames from 'classnames'

const FieldMarkup = props => {
  const classes = classNames('input-group', props.className)
  return (
    <fieldset className={classes}>
      <input id={props.id} type={props.type} placeholder={props.placeholder}/>
      <label htmlFor={props.id}>{props.label}</label>
    </fieldset>
  )
}

const Field = styled(InputMarkup)`
  input {
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  input + label {

  }
`

Field.displayName = 'Field'

export default Field
