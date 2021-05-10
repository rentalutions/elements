import React, { forwardRef } from "react"
import p from "prop-types"
export const Minimize2 = forwardRef(function Minimize2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 14H10V20"></path>
      <path d="M20 10H14V4"></path>
      <path d="M14 10L21 3"></path>
      <path d="M3 21L10 14"></path>
    </svg>
  )
})

Minimize2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Minimize2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Minimize2.displayName = "Minimize2"
