import React, {
  Fragment,
  cloneElement,
  useState,
  forwardRef,
  Children,
  useImperativeHandle
} from "react"
import styled from "styled-components"
import { colors } from "src/constants"
import Popover from "src/popover"

const StyledTooltip = styled(Popover)`
  min-width: 10rem;
  max-width: 40rem;
  background: ${colors.blue_700};
  color: ${colors.ui_100};
  padding: 1rem;
  border-radius: 4px;
  margin-right: 2rem;
`

function Tooltip({ children, targetRef, content = null, id, ...props }, ref) {
  const [isOpen, setIsOpen] = useState(false)
  const child = Children.only(children)
  function onFocus(e) {
    if (child.props.onFocus) child.props.onFocus(e)
    setIsOpen(true)
  }
  function onBlur(e) {
    if (child.props.onBlur) child.props.onBlur(e)
    setIsOpen(false)
  }
  function onMouseEnter(e) {
    if (child.props.onMouseEnter) child.props.onMouseEnter(e)
    setIsOpen(true)
  }
  function onMouseLeave(e) {
    if (child.props.onMouseLeave) child.props.onMouseLeave(e)
    setIsOpen(false)
  }
  useImperativeHandle(ref, () => ({ ...targetRef }))
  return (
    <Fragment>
      {cloneElement(child, {
        "aria-labelledby": id,
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave
      })}
      {isOpen && (
        <StyledTooltip
          {...props}
          targetRef={targetRef}
          ref={ref}
          role="tooltip"
          tabIndex="0"
          aria-hidden={!isOpen}
          id={id}
        >
          {content}
        </StyledTooltip>
      )}
    </Fragment>
  )
}

export default forwardRef(Tooltip)
