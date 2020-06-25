import React, { memo, forwardRef, useState } from "react"
import styled from "styled-components"
import { colors, wrapEvent, noop } from "src/constants"
import clsx from "clsx"

const StyledInput = styled.label`
  position: relative;
  display: block;
  width: 100%;
  input {
    -webkit-appearance: none;
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
    transition: border-color 100ms;
    &:focus {
      border-color: ${colors.blue_500};
      ~ .input__label-row {
        font-size: 1.334rem;
        transform: translate3d(0, -1rem, 0);
        color: ${colors.blue_500};
      }
    }
  }
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    -webkit-appearance: none;
  }
  .input__label-row {
    position: absolute;
    display: flex;
    align-items: center;
    left: 2rem;
    top: 2.25rem;
    transition: 100ms;
    color: ${colors.ui_700};
    width: calc(100% - 4rem);
    .input__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .input__required {
      color: ${colors.red_500};
      width: 0.5rem;
      height: 0.5rem;
      background: ${colors.red_500};
      border-radius: 50%;
      margin-left: 1rem;
      flex-shrink: 0;
    }
  }
  .input__icon {
    position: absolute;
    left: 2rem;
    top: 2.25rem;
  }
  .input__error {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    color: ${colors.red_500};
    font-size: 1.334rem;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.field--has-icon {
    input {
      padding-left: 5rem;
    }
    .input__label-row {
      left: 5rem;
      width: calc(100% - 7rem);
    }
  }
  &.field--is-raised {
    input {
      border-color: ${colors.blue_500};
    }
    .input__label-row {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: ${colors.blue_500};
    }
  }
  &.field--is-date {
    input {
      border-color: ${colors.ui_500};
    }
    .input__label-row {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: ${colors.ui_700};
    }
  }
  &.field--is-date input:focus,
  &.field--is-date.field--is-raised input,
  &.field--is-date.field--is-raised .input__label-row {
    color: ${colors.blue_500};
    border-color: ${colors.blue_500};
  }
  &.field--has-error {
    input {
      border-color: ${colors.red_500};
    }
    .input__icon {
      color: ${colors.red_500};
    }
  }
  &.disabled {
    cursor: not-allowed;
    .input__icon,
    .input__label {
      color: ${colors.ui_500};
    }
  }
  input:disabled {
    pointer-events: none;
    border-color: ${colors.ui_500};
    color: ${colors.ui_700};
    background: ${colors.ui_300};
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
    disabled,
    style,
    ...props
  },
  ref
) {
  const isDate = type === "date"
  const [raised, setRaised] = useState(Boolean(value))
  const handleChange = ({ target: { value: inputValue } }) => {
    if (inputValue.length || isDate) setRaised(true)
    else setRaised(false)
  }
  return (
    <StyledInput
      className={clsx(className, {
        "field--is-raised": raised,
        "field--has-error": error,
        "field--is-required": required,
        "field--has-icon": !!Icon,
        "field--is-date": isDate,
        disabled
      })}
      style={style}
    >
      <input
        {...props}
        type={type}
        ref={ref}
        value={value}
        required={required}
        disabled={disabled}
        onChange={wrapEvent(onChange, handleChange)}
      />
      {Icon && <Icon className="input__icon" width={24} height={24} />}
      <div className="input__label-row">
        <span className="input__label">{label}</span>
        {required && <span className="input__required" />}
      </div>
      {error && <span className="input__error" title={error}>{error}</span>}
    </StyledInput>
  )
}

export default memo(forwardRef(TextInput))
