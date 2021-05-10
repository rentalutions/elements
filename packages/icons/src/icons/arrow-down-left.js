import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowDownLeft = forwardRef(function ArrowDownLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 7L7 17"></path>
      <path d="M17 17H7V7"></path>
    </svg>
  )
})

ArrowDownLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowDownLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowDownLeft.displayName = "ArrowDownLeft"
