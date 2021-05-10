import React, { forwardRef } from "react"
import p from "prop-types"
export const BarChart2 = forwardRef(function BarChart2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 20V10"></path>
      <path d="M12 20V4"></path>
      <path d="M6 20V14"></path>
    </svg>
  )
})

BarChart2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

BarChart2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

BarChart2.displayName = "BarChart2"
