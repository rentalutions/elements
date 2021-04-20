import React, { forwardRef } from 'react'
import p from 'prop-types'

export const MinusCircle = forwardRef(function MinusCircle(props, ref) {
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
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  )
})
MinusCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
MinusCircle.displayName = 'MinusCircle'
