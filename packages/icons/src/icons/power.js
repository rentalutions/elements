import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Power = forwardRef(function Power(props, ref) {
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
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
      <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
  )
})
Power.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Power.displayName = 'Power'
