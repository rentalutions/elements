import React, { forwardRef } from 'react'
import p from 'prop-types'

export const DollarSign = forwardRef(function DollarSign(props, ref) {
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
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  )
})
DollarSign.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
DollarSign.displayName = 'DollarSign'
