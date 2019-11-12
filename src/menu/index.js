import React, { forwardRef, useRef, useImperativeHandle, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { colors } from "src/constants"
import PropTypes from "prop-types"

const Anchors = createGlobalStyle`
  .dropdown__anchor {
    position: relative;
  }
`

const StyledDropdown = styled.ul`
  position: absolute;
  display: block;
  top: calc(100% + 1em);
  left: 1rem;
  list-style: none;
  background: ${colors.ui_100};
  border-radius: 4px;
  box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 0.12);
  border: 1px solid ${colors.ui_500};
  width: 100%;
  max-width: 20rem;
  z-index: 10;
`

export const DropdownMenu = forwardRef(
  ({ children, open, setOpen, anchor, ...props }, ref) => {
    const dropdownRef = useRef(null)
    function handleClickOutside(e) {
      if (open && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    useImperativeHandle(ref, () => ({ ...dropdownRef.current }))
    useEffect(() => {
      if (open) {
        document.addEventListener("click", handleClickOutside)
      }
      return () => document.removeEventListener("click", handleClickOutside)
    }, [open, dropdownRef])
    return (
      open && (
        <StyledDropdown {...props} ref={dropdownRef}>
          {children}
          <Anchors />
        </StyledDropdown>
      )
    )
  }
)

DropdownMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  anchor: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

DropdownMenu.defaultProps = {
  anchor: null
}

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
