import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useState
} from "react"
import styled from "styled-components"
import { colors } from "src/constants"
import PropTypes from "prop-types"

const StyledDropdown = styled.ul`
  position: fixed;
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
  ({ children, open, toggle, anchor, ...props }, ref) => {
    const dropdownRef = useRef(null)
    const [{ top, left }, setPosition] = useState({ top: 0, left: 0 })
    function handleOutsideClick(e) {
      if (open && !dropdownRef.current.contains(e.target)) {
        toggle(e)
      }
    }
    function handleTargetClick() {
      const { x, y } = anchor.current.getBoundingClientRect()
      setPosition({ top: y, left: x })
    }
    function handleScroll() {
      const { x, y } = anchor.current.getBoundingClientRect()
      setPosition({ top: y, left: x })
    }
    useImperativeHandle(ref, () => ({ ...dropdownRef.current }))
    useEffect(() => {
      if (anchor) {
        anchor.current.addEventListener("click", handleTargetClick)
      }
      if (open) {
        document.addEventListener("click", handleOutsideClick)
        document.addEventListener("scroll", handleScroll)
      }
      return () => {
        document.removeEventListener("click", handleOutsideClick)
        document.removeEventListener("scroll", handleScroll)
      }
    }, [open, dropdownRef, anchor])
    return (
      open && (
        <StyledDropdown {...props} ref={dropdownRef} style={{ top, left }}>
          {children}
        </StyledDropdown>
      )
    )
  }
)

DropdownMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  anchor: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

DropdownMenu.defaultProps = {
  anchor: null
}

export const DropdownItem = styled.li`
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background: ${colors.ui_300};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

DropdownItem.displayName = "MenuItem"
