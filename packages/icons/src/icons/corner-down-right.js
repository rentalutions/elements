import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerDownRight = forwardRef(function CornerDownRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 10L20 15L15 20"></path>
      <path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20"></path>
    </svg>
  )
})

CornerDownRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerDownRight.displayName = "CornerDownRight"
