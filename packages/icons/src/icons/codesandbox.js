import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Codesandbox = forwardRef(function Codesandbox(props, ref) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
      <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
      <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  )
})
Codesandbox.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Codesandbox.displayName = 'Codesandbox'
