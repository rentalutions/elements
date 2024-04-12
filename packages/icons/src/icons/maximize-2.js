import React, { forwardRef } from "react"
import p from "prop-types"
export const Maximize2 = forwardRef(function Maximize2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 3H21V9M9 21H3V15M21 3 14 10M3 21 10 14"></path>
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
