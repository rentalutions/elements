import React, { memo, forwardRef, useState, useEffect } from "react"
import styled from "styled-components"
import { colors, wrapEvent, noop } from "src/constants"

const StyledInput = styled.label`
  position: relative;
  cursor: text;
  display: block;
  width: 100%;
  input {
    all: unset;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 3rem 2rem 1rem 2rem;
    border: 2px solid
      ${({ hasValue, hasError }) => {
        if (hasError) return colors.red_500
        if (hasValue) return colors.blue_500
        return colors.ui_500
      }};
    border-radius: 4px;
    ${({ hasIcon }) => hasIcon && `padding-left: 5rem;`}
    &:focus {
      border-color: ${({ hasError }) => (hasError ? colors.red_500 : colors.blue_500)};
      & ~ .input__label {
        font-size: 1.333rem;
        transform: translate3d(0, -1.333rem, 0);
      }
      & ~ .input__icon {
        color: ${({ hasError }) => (hasError ? colors.red_500 : colors.blue_500)};
      }
    }
  }
  .input__label {
    position: absolute;
    left: calc(${({ hasIcon }) => (hasIcon ? "5rem" : "2rem")} + 2px);
    top: calc(2rem + 2px);
    right: calc(2rem - 2px);
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${colors.ui_700};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 100ms;
    will-change: font-size, transform;
    ${({ hasValue }) =>
      hasValue &&
      `
      font-size: 1.333rem;
      transform: translate3d(0, -1.333rem, 0);
    `}
  }
  .input__icon {
    position: absolute;
    left: calc(2rem + 2px);
    top: calc(2rem + 2px);
    color: ${({ hasValue, hasError }) => {
      if (hasError) return colors.red_500
      if (hasValue) return colors.blue_500
      return colors.ui_700
    }};
  }
  .input__error {
    position: absolute;
    bottom: -2rem;
    right: 0;
    display: block;
    color: ${colors.red_500};
    font-size: 1.334rem;
    line-height: 1.5;
    text-align: right;
  }
`

function TextInput(
  { className, icon: Icon, label, onChange = noop, initialValue, value, error, ...props },
  ref
) {
  const [hasValue, setHasValue] = useState(initialValue)
  const handleChange = e => {
    if (e.target.value.length) setHasValue(true)
    else setHasValue(false)
  }
  useEffect(() => {
    if (value && value.length) setHasValue(true)
  }, [value])
  return (
    <StyledInput
      className={className}
      hasError={!!error?.length}
      hasIcon={!!Icon}
      hasValue={hasValue}
    >
      <input
        type="text"
        ref={ref}
        {...props}
        value={value}
        onChange={wrapEvent(onChange, handleChange)}
      />
      {Icon && <Icon className="input__icon" width={24} height={24} />}
      <span className="input__label">{label}</span>
      {error && <span className="input__error">{error}</span>}
    </StyledInput>
  )
}

export default memo(forwardRef(TextInput))
