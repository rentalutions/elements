import React, { forwardRef } from "react"
import p from "prop-types"
export const Maximize2 = forwardRef(function Maximize2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 3H21V9"></path>
      <path d="M9 21H3V15"></path>
      <path d="M21 3L14 10"></path>
      <path d="M3 21L10 14"></path>
    </svg>
  )
})

Maximize2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Maximize2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Maximize2.displayName = "Maximize2"
