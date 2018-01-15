import React, { Component } from "react"
import styled from "styled-components"
import classNames from "classnames"
import propTypes from "prop-types"
import { colors } from "../variables"

const FieldWrapper = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0.5rem 0 0;
  border: none;
  input {
    padding: 1rem;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 1em;
    width: 100%;
    &:focus {
      outline: none;
    }
    + label {
      position: absolute;
      top: 0.5rem;
      left: 0;
      font-size: 1em;
      transition: all 300ms ease-in-out;
      pointer-events: none;
      &.raised {
        top: 0;
        font-size: 0.75em;
      }
    }
  }
`

class Field extends Component {
  static propTypes = {
    id: propTypes.string,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string,
    label: propTypes.string
  }

  static displayName = "Field"

  state = {
    focused: this.props.placeholder ? true : false
  }

  handleFocus = e => {
    e.preventDefault()
    this.setState({ focused: true })
  }

  handleBlur = e => {
    e.preventDefault()
    this.setState({ focused: this.input.value ? true : false })
  }

  handleChange = e => this.props.onChange && this.props.onChange(e.target.value)

  render() {
    const {
      className,
      id,
      innerRef,
      label,
      multiLine,
      onChange,
      placeholder
    } = this.props

    const passedProps = {
      id: id,
      placeholder: placeholder,
      className: className,
      ref: node => {
        this.input = node
        innerRef && innerRef(node)
      },
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      value: ""
    }

    return (
      <FieldWrapper hasValue={this.input ? !!this.input.value.length : false}>
        {multiLine ? (
          <textarea {...passedProps} />
        ) : (
          <input type="text" {...passedProps} />
        )}
        <label
          className={this.state.focused && !placeholder ? "raised" : ""}
          htmlFor={id}
        >
          {label}
        </label>
      </FieldWrapper>
    )
  }
}

export default Field
