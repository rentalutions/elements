import React, { forwardRef } from "react"
import styled, { css } from "styled-components"

const StyledToggle = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  input {
    display: none;
    &:checked + .slider {
      background-color: ${({ theme }) => theme.colors.blue_500};
      &:before {
        background-color: ${({ theme }) => theme.colors.ui_100};
        border: 0.25rem solid ${({ theme }) => theme.colors.blue_500};
        transform: translateX(2rem);
      }
    }
  }
  .slider {
    position: relative;
    height: 2rem;
    width: 4rem;
    background-color: ${({ theme }) => theme.colors.ui_500};
    border-radius: 1rem;
    transition: 200ms;
    flex-shrink: 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
      background-color: ${({ theme }) => theme.colors.ui_100};
      border: 0.25rem solid ${({ theme }) => theme.colors.ui_500};
      transition: 200ms;
    }
  }
  .label {
    margin-left: 1rem;
  }
  ${({ block }) => block && blockStyles}
`

const blockStyles = css`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  .label {
    margin-right: auto;
    margin-left: 0;
  }
`

export default forwardRef(({ className, children, block, ...props }, ref) => {
  return (
    <StyledToggle className={className} block={block}>
      <input type="checkbox" {...props} ref={ref} />
      <div className="slider" />
      {children && <p className="label">{children}</p>}
    </StyledToggle>
  )
})
