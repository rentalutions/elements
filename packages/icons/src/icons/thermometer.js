import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Thermometer = forwardRef(function Thermometer(props, ref) {
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
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
    </svg>
  )
})
Thermometer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Thermometer.displayName = 'Thermometer'
