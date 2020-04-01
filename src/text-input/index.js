import React, { memo, forwardRef, useState } from "react"
import styled from "styled-components"
import { colors, wrapEvent, noop } from "src/constants"
import clsx from "clsx"

const StyledInput = styled.label`
  position: relative;
  display: block;
  width: 100%;
  input {
    position: relative;
    all: unset;
    display: block;
    padding: 3rem 2rem 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.ui_500};
    border-radius: 4px;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    height: 6.5rem;
    outline: none;
    width: 100%;
    &:focus {
      border-color: ${colors.blue_500};
      ~ .input__label {
        font-size: 1.334rem;
        transform: translate3d(0, -1rem, 0);
        color: ${colors.blue_500};
      }
    }
  }
  .input__label {
    position: absolute;
    left: 2rem;
    top: 2rem;
    transition: 80ms;
    color: ${colors.ui_700};
    white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 4rem);
    text-overflow: ellipsis;
  }
  .input__icon {
    position: absolute;
    left: 2rem;
    top: 2rem;
  }
  .input__error,
  .input__required {
    position: absolute;
    top: 100%;
    font-size: 1.334rem;
    line-height: 1.5;
  }
  .input__error {
    left: 0;
    color: ${colors.red_500};
    width: calc(100% - 5rem);
  }
  .input__required {
    margin-left: auto;
    color: ${colors.ui_700};
    right: 0;
  }
  &.icon {
    input {
      padding-left: 5rem;
    }
    .input__label {
      left: 5rem;
    }
  }
  &.raised {
    input {
      border-color: ${colors.blue_500};
    }
    .input__label {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: ${colors.blue_500};
    }
  }
  &.required {
    &:before {
      content: "";
      position: absolute;
      top: 2.75rem;
      right: 2rem;
      width: 0.5rem;
      height: 0.5rem;
      background: ${colors.red_500};
      border-radius: 50%;
    }
    .input__label {
      width: calc(100% - 6rem);
    }
  }
  &.error {
    input {
      border-color: ${colors.red_500};
    }
    .input__icon {
      color: ${colors.red_500};
    }
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
    style,
    ...props
  },
  ref
) {
  const [raised, setRaised] = useState(!!value || type === "date")
  const handleChange = ({ target: { value: inputValue } }) => {
    if (inputValue.length || type === "date") setRaised(true)
    else setRaised(false)
  }
  return (
    <StyledInput
      className={clsx({ className, raised, error, required, icon: !!Icon })}
      style={style}
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
      {required && <span className="input__required">Required</span>}
    </StyledInput>
  )
}

export default memo(forwardRef(TextInput))
