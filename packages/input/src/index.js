import React, { memo, forwardRef, useState, useEffect } from "react"
import styled from "styled-components"
import { wrapEvent, noop } from "@rent_avail/utils"

const StyledInput = styled.label`
  position: relative;
  cursor: text;
  display: block;
  width: 100%;
  &.required {
    &:before {
      content: "";
      position: absolute;
      top: 3rem;
      right: 2rem;
      background: ${({ theme }) => theme.colors.red_500};
      border-radius: 50%;
      height: 0.5rem;
      width: 0.5rem;
    }
    input {
      padding-right: 4rem;
    }
    .input__label {
      right: calc(4rem - 2px);
    }
  }
  input {
    position: relative;
    all: unset;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 3rem 2rem 1rem 2rem;
    border: 2px solid
      ${({ hasValue, hasError }) => {
        if (hasError) return ({ theme }) => theme.colors.red_500
        if (hasValue) return ({ theme }) => theme.colors.blue_500
        return ({ theme }) => theme.colors.ui_500
      }};
    border-radius: 4px;
    height: 6.5rem;
    ${({ hasIcon }) => hasIcon && `padding-left: 5rem;`}
    &:focus {
      border-color: ${({ hasError }) =>
        hasError
          ? ({ theme }) => theme.colors.red_500
          : ({ theme }) => theme.colors.blue_500};
      & ~ .input__label {
        font-size: 1.333rem;
        transform: translate3d(0, -1.333rem, 0);
      }
      & ~ .input__icon {
        color: ${({ hasError }) =>
          hasError
            ? ({ theme }) => theme.colors.red_500
            : ({ theme }) => theme.colors.blue_500};
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
    color: ${({ theme }) => theme.colors.ui_700};
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
      if (hasError) return ({ theme }) => theme.colors.red_500
      if (hasValue) return ({ theme }) => theme.colors.blue_500
      return ({ theme }) => theme.colors.ui_700
    }};
  }
  .input__error {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.red_500};
    font-size: 1.334rem;
    line-height: 1.5;
    text-align: left;
    width: 100%;
  }
`

function TextInput(
  {
    type = "text",
    className,
    icon: Icon,
    label,
    onChange = noop,
    initialValue,
    value,
    error,
    required,
    ...props
  },
  ref
) {
  const [hasValue, setHasValue] = useState(initialValue)
  const handleChange = (e) => {
    if (e.target.value.length || type === "date") setHasValue(true)
    else setHasValue(false)
  }
  useEffect(() => {
    if (type === "date") setHasValue(true)
    if (value && value.length) setHasValue(true)
  }, [value])
  return (
    <StyledInput
      className={`${className} ${required && "required"}`}
      hasError={!!error?.length}
      hasIcon={!!Icon}
      hasValue={hasValue}
    >
      <input
        {...props}
        type={type}
        ref={ref}
        value={value}
        required={required}
        onChange={wrapEvent(onChange, handleChange)}
      />
      {Icon && <Icon className="input__icon" width={24} height={24} />}
      <span className="input__label">{label}</span>
      {error && <span className="input__error">{error}</span>}
    </StyledInput>
  )
}

export default memo(forwardRef(TextInput))
