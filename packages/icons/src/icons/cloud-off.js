import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CloudOff = forwardRef(function CloudOff(props, ref) {
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
      <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  )
})
CloudOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CloudOff.displayName = 'CloudOff'
