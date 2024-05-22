import React, { forwardRef } from "react"
import p from "prop-types"
export const MousePointer = forwardRef(function MousePointer(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3ZM13 13 19 19"></path>
    </svg>
  )
})

MousePointer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

MousePointer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

MousePointer.displayName = "MousePointer"
