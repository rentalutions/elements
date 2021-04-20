import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Sunset = forwardRef(function Sunset(props, ref) {
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
      <path d="M17 18a5 5 0 0 0-10 0"></path>
      <line x1="12" y1="9" x2="12" y2="2"></line>
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
      <line x1="1" y1="18" x2="3" y2="18"></line>
      <line x1="21" y1="18" x2="23" y2="18"></line>
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
      <line x1="23" y1="22" x2="1" y2="22"></line>
      <polyline points="16 5 12 9 8 5"></polyline>
    </svg>
  )
})
Sunset.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Sunset.displayName = 'Sunset'
