import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ArrowUpLeft = forwardRef(function ArrowUpLeft(props, ref) {
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
      <line x1="17" y1="17" x2="7" y2="7"></line>
      <polyline points="7 17 7 7 17 7"></polyline>
    </svg>
  )
})
ArrowUpLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ArrowUpLeft.displayName = 'ArrowUpLeft'
