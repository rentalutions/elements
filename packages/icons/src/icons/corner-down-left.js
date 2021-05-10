import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerDownLeft = forwardRef(function CornerDownLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 10L4 15L9 20"></path>
      <path d="M20 4V11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H4"></path>
    </svg>
  )
})

CornerDownLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerDownLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerDownLeft.displayName = "CornerDownLeft"
