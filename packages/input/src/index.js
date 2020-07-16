import React, {
  memo,
  forwardRef,
  useState,
  createElement,
  useEffect,
} from "react"
import styled from "styled-components"
import { space, layout } from "styled-system"
import { pick, omit } from "@styled-system/props"
import { wrapEvent, noop } from "@rent_avail/utils"
import clsx from "clsx"

const InputWrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;
  ${space};
  ${layout};
  input {
    position: relative;
    all: unset;
    display: block;
    padding: 3rem 2rem 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.ui_500};
    border-radius: 4px;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    height: 6.5rem;
    outline: none;
    width: 100%;
    transition: border-color 100ms;
    &:focus {
      border-color: ${({ theme }) => theme.colors.blue_500};
      ~ .input__row {
        font-size: 1.334rem;
        transform: translate3d(0, -1rem, 0);
        color: ${({ theme }) => theme.colors.blue_500};
        .input__label {
          line-height: ${({ theme }) => theme.lineHeights.small};
        }
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
    color: ${({ theme }) => theme.colors.ui_700};
    width: calc(100% - 4rem);
    .input__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .input__required {
      color: ${({ theme }) => theme.colors.red_500};
      width: 0.5rem;
      height: 0.5rem;
      background: ${({ theme }) => theme.colors.red_500};
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
    color: ${({ theme }) => theme.colors.red_500};
    font-size: 1.334rem;
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
  &.raised {
    input {
      border-color: ${({ theme }) => theme.colors.blue_500};
    }
    .input__row {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: ${({ theme }) => theme.colors.blue_500};
    }
    .input__label {
      line-height: ${({ theme }) => theme.lineHeights.small};
    }
  }
  &.date {
    input {
      border-color: ${({ theme }) => theme.colors.ui_500};
    }
    .input__row {
      font-size: 1.334rem;
      transform: translate3d(0, -1rem, 0);
      color: ${({ theme }) => theme.colors.ui_700};
    }
  }
  &.date input:focus,
  &.date.raised input,
  &.date.raised .input__row {
    color: ${({ theme }) => theme.colors.blue_500};
    border-color: ${({ theme }) => theme.colors.blue_500};
  }
  &.error {
    input {
      border-color: ${({ theme }) => theme.colors.red_500};
    }
    .input__icon {
      color: ${({ theme }) => theme.colors.red_500};
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
    setRaised(value?.length)
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
