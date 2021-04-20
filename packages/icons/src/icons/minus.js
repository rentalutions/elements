import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Minus = forwardRef(function Minus(props, ref) {
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
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
})
Minus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Minus.displayName = 'Minus'
