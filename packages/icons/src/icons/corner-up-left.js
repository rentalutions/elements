import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerUpLeft = forwardRef(function CornerUpLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 14L4 9L9 4"></path>
      <path d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"></path>
    </svg>
  )
})

CornerUpLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerUpLeft.displayName = "CornerUpLeft"
