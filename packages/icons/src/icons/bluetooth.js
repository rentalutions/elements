import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Bluetooth = forwardRef(function Bluetooth(props, ref) {
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
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
    </svg>
  )
})
Bluetooth.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Bluetooth.displayName = 'Bluetooth'
