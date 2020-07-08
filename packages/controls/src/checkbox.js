import React, { forwardRef, useReducer } from "react"
import styled from "styled-components"

const StyledCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  .input__target {
    width: 2rem;
    height: 2rem;
    border: 2px solid ${({ theme }) => theme.colors.ui_500};
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: 300ms;
    color: ${({ theme }) => theme.colors.ui_100};
    will-change: stroke-dashoffset;
  }

  input:checked ~ .input__target {
    border: 2px solid ${({ theme }) => theme.colors.blue_500};
    background: ${({ theme }) => theme.colors.blue_500};
    stroke-dashoffset: 0;
  }

  input:disabled ~ .input__target {
    border: 2px solid ${({ theme }) => theme.colors.ui_300};
  }

  .label {
    margin-left: 1rem;
  }
`

function Checkbox(
  {
    children,
    className = "",
    disabled,
    onChange = null,
    defaultChecked = false,
    ...props
  },
  ref
) {
  const reducer = (state, action) => ({ ...state, ...action })
  const [{ checked }, dispatch] = useReducer(reducer, {
    checked: defaultChecked,
  })
  function handleChange(event) {
    if (onChange) onChange(event)
    dispatch({ checked: event.target.checked })
  }
  return (
    <StyledCheckbox
      disabled={disabled}
      className={`${checked ? "checked" : ""} ${className}`}
    >
      <input
        {...props}
        type="checkbox"
        ref={ref}
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
      />
      <svg
        role="button"
        className="input__target"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12L9 17L20 6" />
      </svg>
      {children && <span className="label">{children}</span>}
    </StyledCheckbox>
  )
}

export default forwardRef(Checkbox)
