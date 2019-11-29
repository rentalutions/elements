import React, { forwardRef } from "react"
import styled from "styled-components"
import { colors } from "../constants"

const StyledRadioButton = styled.label`
  position: relative;
  display: inline-flex;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "cursor")};
  input[type="radio"] {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }
  .radio__target {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    flex-shrink: 0;
    border: 2px solid ${colors.ui_500};
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
    background: ${colors.blue_300};
    border: 2px solid ${colors.blue_500};
    &:after {
      background: ${colors.blue_500};
    }
  }
  input:disabled {
    pointer-events: none;
  }
  input:disabled ~ .radio__target {
    border: 2px solid ${colors.ui_300};
  }
  .label {
    margin-left: 1rem;
  }
`

export default forwardRef(({ children, className, disabled, ...props }, ref) => (
  <StyledRadioButton className={className} isDisabled={disabled}>
    <input type="radio" {...props} ref={ref} disabled={disabled} />
    <div className="radio__target" />
    {children && <span className="label">{children}</span>}
  </StyledRadioButton>
))

export const RadioGroup = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: ${({ inline }) => (inline ? "block" : "flex")};
  > *:not(:last-child) {
    ${({ inline }) => (inline ? `margin-right: 2rem;` : `margin-bottom: 2rem;`)}
  }
`
