import React from "react"
import { css } from "styled-components"

const fieldStyles = css`
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

const FieldView = ({
  className,
  focused,
  id,
  innerRef,
  hasValue,
  passedProps,
  placeholder,
  multiLine
}) => (
  <fieldset className={fieldStyles} hasValue={hasValue}>
    {multiLine ? (
      <textarea {...passedProps} />
    ) : (
      <input type="text" {...passedProps} />
    )}
    <label className={focused && !placeholder ? "raised" : ""} htmlFor={id}>
      {label}
    </label>
  </fieldset>
)
