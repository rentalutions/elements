import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Underline = forwardRef(function Underline(props, ref) {
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
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
      <line x1="4" y1="21" x2="20" y2="21"></line>
    </svg>
  )
})
Underline.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Underline.displayName = 'Underline'
