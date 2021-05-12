import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowUpLeft = forwardRef(function ArrowUpLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 17L7 7"></path>
      <path d="M7 17V7H17"></path>
    </svg>
  )
})

ArrowUpLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowUpLeft.displayName = "ArrowUpLeft"
