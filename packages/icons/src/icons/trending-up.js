import React, { forwardRef } from "react"
import p from "prop-types"
export const TrendingUp = forwardRef(function TrendingUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18"></path>
      <path d="M17 6H23V12"></path>
    </svg>
  )
})

TrendingUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

TrendingUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

TrendingUp.displayName = "TrendingUp"
