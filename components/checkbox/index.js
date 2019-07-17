import React, { forwardRef } from "react"
import styled from "styled-components"
import { colors } from "../constants"

const StyledCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  .input__target {
    width: 2rem;
    height: 2rem;
    border: 2px solid ${colors.ui_500};
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms;
    svg {
      stroke-dasharray: 24;
      stroke-dashoffset: 24;
      transition: 300ms;
      color: ${colors.ui_100};
      will-change: stroke-dashoffset;
    }
  }
  input:checked ~ .input__target {
    border: 2px solid ${colors.blue_500};
    background: ${colors.blue_500};
    svg {
      stroke-dashoffset: 0;
    }
  }

  .label {
    margin-left: 1rem;
  }
`

export default forwardRef(({ children, className, ...props }, ref) => (
  <StyledCheckbox className={className}>
    <input type="checkbox" ref={ref} {...props} />
    <div className="input__target">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    {children && <span className="label">{children}</span>}
  </StyledCheckbox>
))
