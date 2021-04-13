import React, { forwardRef } from "react"
import styled from "styled-components"

const StyledRadio = styled.label`
  position: relative;
  display: inline-flex;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "cursor")};
  input[type="radio"] {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }
  .radio__target {
    all: unset;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    flex-shrink: 0;
    border: 2px solid ${({ theme }) => theme.colors.ui_500};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;
    &:after {
      content: "";
      width: 1rem;
      height: 1rem;
      background: transparent;
      border-radius: 50%;
      transition: 200ms;
    }
  }
  input:checked ~ .radio__target {
    background: ${({ theme }) => theme.colors.blue_300};
    border: 2px solid ${({ theme }) => theme.colors.blue_500};
    &:after {
      background: ${({ theme }) => theme.colors.blue_500};
    }
  }
  input:disabled {
    pointer-events: none;
  }
  input:disabled ~ .radio__target {
    border: 2px solid ${({ theme }) => theme.colors.ui_300};
  }
  .radio__label {
    margin-left: 0.5rem;
  }
`

export const RadioGroup = styled.fieldset`
  all: unset;
  display: ${({ inline }) => (inline ? "block" : "flex")};
  > *:not(:last-child) {
    ${({ inline }) => (inline ? `margin-right: 2rem;` : `margin-bottom: 2rem;`)}
  }
`

function Radio(
  { children = null, className = "", disabled = false, ...props },
  ref
) {
  return (
    <StyledRadio className={className} disabled={disabled}>
      <input {...props} ref={ref} type="radio" disabled={disabled} />
      <div role="button" className="radio__target" aria-label="radio button" />
      {children && <span className="radio__label">{children}</span>}
    </StyledRadio>
  )
}

export default forwardRef(Radio)
