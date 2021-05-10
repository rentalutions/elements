import React, { forwardRef } from "react"
import p from "prop-types"
export const Trello = forwardRef(function Trello(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"></path>
      <path d="M10 7H7V16H10V7Z"></path>
      <path d="M17 7H14V12H17V7Z"></path>
    </svg>
  )
})

Trello.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Trello.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Trello.displayName = "Trello"
