import React, { forwardRef } from 'react'
import p from 'prop-types'

export const PieChart = forwardRef(function PieChart(props, ref) {
  const { color = 'currentColor', size = 24, ...rest } = props
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  )
})
PieChart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
PieChart.displayName = 'PieChart'
