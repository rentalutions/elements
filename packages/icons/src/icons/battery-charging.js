import React, { forwardRef } from 'react'
import p from 'prop-types'

export const BatteryCharging = forwardRef(function BatteryCharging(props, ref) {
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
      <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
      <line x1="23" y1="13" x2="23" y2="11"></line>
      <polyline points="11 6 7 12 13 12 9 18"></polyline>
    </svg>
  )
})
BatteryCharging.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
BatteryCharging.displayName = 'BatteryCharging'
