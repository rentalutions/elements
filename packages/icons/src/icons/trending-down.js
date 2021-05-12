import React, { forwardRef } from "react"
import p from "prop-types"
export const TrendingDown = forwardRef(function TrendingDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M23 18L13.5 8.5L8.5 13.5L1 6"></path>
      <path d="M17 18H23V12"></path>
    </svg>
  )
})

TrendingDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

TrendingDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

TrendingDown.displayName = "TrendingDown"
