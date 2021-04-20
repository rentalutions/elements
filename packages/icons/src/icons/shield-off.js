import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ShieldOff = forwardRef(function ShieldOff(props, ref) {
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
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
      <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  )
})
ShieldOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ShieldOff.displayName = 'ShieldOff'
