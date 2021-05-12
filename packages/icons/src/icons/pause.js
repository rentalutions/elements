import React, { forwardRef } from "react"
import p from "prop-types"
export const Pause = forwardRef(function Pause(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 4H6V20H10V4Z"></path>
      <path d="M18 4H14V20H18V4Z"></path>
    </svg>
  )
})

Pause.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Pause.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Pause.displayName = "Pause"
