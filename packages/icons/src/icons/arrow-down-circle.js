import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ArrowDownCircle = forwardRef(function ArrowDownCircle(props, ref) {
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
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="8 12 12 16 16 12"></polyline>
      <line x1="12" y1="8" x2="12" y2="16"></line>
    </svg>
  )
})
ArrowDownCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ArrowDownCircle.displayName = 'ArrowDownCircle'
