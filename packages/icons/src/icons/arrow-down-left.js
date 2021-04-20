import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ArrowDownLeft = forwardRef(function ArrowDownLeft(props, ref) {
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
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="17 17 7 17 7 7"></polyline>
    </svg>
  )
})
ArrowDownLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ArrowDownLeft.displayName = 'ArrowDownLeft'
