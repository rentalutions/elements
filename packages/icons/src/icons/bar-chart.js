import React, { forwardRef } from "react"
import p from "prop-types"
export const BarChart = forwardRef(function BarChart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 20V10"></path>
      <path d="M18 20V4"></path>
      <path d="M6 20V16"></path>
    </svg>
  )
})

BarChart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

BarChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

BarChart.displayName = "BarChart"
