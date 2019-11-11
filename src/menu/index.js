import React, { forwardRef, Children } from "react"
import styled from "styled-components"
import { colors } from "src/constants"

const StyledDropdown = styled.ul`
  display: block;
  list-style: none;
  background: ${colors.ui_100};
  border-radius: 4px;
  box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 0.12);
  border: 1px solid ${colors.ui_500};
  min-width: 15rem;
`

export const DropdownMenu = forwardRef(({ children, ...props }, ref) => {
  Children.map(
    children,
    child =>
      child.type.displayName !== "MenuItem" &&
      console.error("Immediate children of DropdownMenu should be MenuItems")
  )
  return (
    <StyledDropdown {...props} ref={ref}>
      {children}
    </StyledDropdown>
  )
})

export const MenuItem = styled.li`
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background: ${colors.ui_300};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

MenuItem.displayName = "MenuItem"
