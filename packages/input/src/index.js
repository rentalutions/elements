import React, {
  memo,
  forwardRef,
  useState,
  createElement,
  useEffect,
} from "react"
import styled from "styled-components"
import { space, layout, compose } from "styled-system"
import { pick, omit } from "@styled-system/props"
import { wrapEvent, noop } from "@rent_avail/utils"
import clsx from "clsx"

const InputWrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;
  --small-font: 1.334rem;
  --inactive-color: ${({ theme }) => theme.colors.ui_500};
  --active-color: ${({ theme }) => theme.colors.blue_500};
  --filled-color: ${({ theme }) => theme.colors.ui_700};
  --error-color: ${({ theme }) => theme.colors.red_500};
  --line-height: ${({ theme }) => theme.lineHeights.small};
  ${compose(space, layout)};
  input {
    position: relative;
    all: unset;
    display: block;
    padding: 3rem 2rem 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: var(--inactive-color);
    border-radius: 4px;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    height: 6.5rem;
    outline: none;
    width: 100%;
    transition: border-color 100ms;
    &:focus {
      border-color: var(--active-color);
      ~ .input__row {
        font-size: var(--small-font);
        transform: translate3d(0, -1rem, 0);
        color: var(--active-color);
      }
    }
  }
  .input__row {
    position: absolute;
    display: flex;
    align-items: center;
    left: 2rem;
    top: 2.25rem;
    transition: 100ms;
    color: var(--filled-color-color);
    width: calc(100% - 4rem);
    line-height: var(--line-height);
    .input__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .input__required {
      color: var(--error-color);
      width: 0.5rem;
      height: 0.5rem;
      background: var(--error-color);
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
    color: var(--error-color);
    font-size: var(--small-font);
    line-height: 1.5;
  }
  &.icon {
    input {
      padding-left: 5rem;
    }
    .input__row {
      left: 5rem;
      width: calc(100% - 7rem);
    }
  }
  &.raised .input__row {
    font-size: 1.334rem;
    transform: translate3d(0, -1rem, 0);
    color: var(--active-color);
  }
  &.date {
    input {
      border-color: var(--inactive-color);
    }
    .input__row {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: var(--filled-color);
    }
  }
  &.date.raised:not(.error) input,
  &.date.raised .input__row {
    color: var(--active-color);
    border-color: var(--active-color);
  }
  &.error {
    input {
      border-color: var(--error-color);
    }
    .input__icon {
      color: var(--error-color);
    }
  }
`

function Input(
  {
    className,
    type = "text",
    value,
    label,
    required = false,
    error = "",
    onChange = noop,
    style,
    icon = null,
    ...props
  },
  ref
) {
  const date = type === "date"
  const [raised, setRaised] = useState(Boolean(value) || date)
  const styledProps = pick(props)
  const inputProps = omit(props)
  function handleChange({ target: { value: inputValue } }) {
    setRaised(inputValue.length || date)
  }
  useEffect(() => {
    setRaised(value?.length || props.defaultValue)
  }, [value])
  return (
    <InputWrapper
      {...styledProps}
      className={clsx(className, {
        required,
        raised,
        date,
        icon,
        error,
      })}
      style={style}
    >
      <input
        {...inputProps}
        type={type}
        ref={ref}
        value={value}
        required={required}
        onChange={wrapEvent(onChange, handleChange)}
      />
      {icon &&
        createElement(icon, {
          className: "input__icon",
          width: 24,
          height: 24,
        })}
      <div className="input__row">
        <span className="input__label">{label}</span>
        {required && <span className="input__required" />}
      </div>
      {error && <span className="input__error">{error}</span>}
    </InputWrapper>
  )
}

export default memo(forwardRef(Input))
