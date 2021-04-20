import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ArrowLeft = forwardRef(function ArrowLeft(props, ref) {
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
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  )
})
ArrowLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ArrowLeft.displayName = 'ArrowLeft'
