import React, { Component } from "react"
import styled from "styled-components"
import classNames from "classnames"
import PropTypes from "prop-types"
import { colors } from "../variables"

const FieldWrapper = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0.5rem 0 0;
  border: none;
  input {
    display: block;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    font-size: 1rem;
    width: 100%;
    outline: none;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.48);
    }
    + label {
      position: absolute;
      top: 1rem;
      left: 0.75rem;
      font-size: 1.5rem;
      transition: all 300ms ease-in-out;
      pointer-events: none;
      background-color: #f9f9f9;
      will-change: top;
      color: #ddd;
      &.raised {
        top: 0;
        font-size: 1rem;
      }
    }
  }
`

export default class Field extends Component {
  static displayName = "Field"
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  }
  static defaultProps = {
    type: "text",
    value: ""
  }
  state = {
    focused: this.props.placeholder ? true : false
  }
  handleFocus = e => {
    e.preventDefault()
    this.setState({ focused: true })
  }
  handleBlur = e => {
    e.preventDefault()
    this.setState({ focused: false })
  }
  render = _ => {
    const { props } = this
    const { type, name, label, value } = props
    return (
      <FieldWrapper {...props}>
        <input
          type={type}
          name={name}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label
          htmlFor={name}
          className={`label ${
            this.state.focused || value.length > 0 ? "raised" : ""
          }`}
        >
          {label}
        </label>
      </FieldWrapper>
    )
  }
}
