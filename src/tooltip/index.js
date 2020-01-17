import React, { cloneElement, useState, forwardRef } from "react"
import styled from "styled-components"
import { colors } from "src/constants"

const StyledTooltip = styled.div`
  position: relative;
  .tooltip {
    position: absolute;
    display: block;
    top: calc(100% + 1rem);
    left: 0;
    min-width: 10rem;
    background: ${colors.blue_700};
    color: ${colors.ui_100};
    padding: 1rem;
    border-radius: 4px;
  }
  .tooltip[aria-hidden="true"] {
    display: none;
  }
  .tooltip[aria-hidden="false"] {
    display: block;
  }
`

function Tooltip({ children, content: Content = null, id, ...props }, ref) {
  const [show, setShow] = useState(true)
  function showTooltip() {
    setShow(false)
  }
  function hideTooltip() {
    setShow(true)
  }
  return (
    <StyledTooltip ref={ref} {...props}>
      <span className="tooltip" role="tooltip" tabIndex="0" aria-hidden={show} id={id}>
        {Content}
      </span>
      {cloneElement(children, {
        "aria-describedby": id,
        onFocus: showTooltip,
        onBlur: hideTooltip,
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip
      })}
    </StyledTooltip>
  )
}

export default forwardRef(Tooltip)
