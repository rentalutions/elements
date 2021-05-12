import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerUpRight = forwardRef(function CornerUpRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 14L20 9L15 4"></path>
      <path d="M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20"></path>
    </svg>
  )
})

CornerUpRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerUpRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerUpRight.displayName = "CornerUpRight"
