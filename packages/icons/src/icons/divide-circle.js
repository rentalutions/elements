import React, { forwardRef } from 'react'
import p from 'prop-types'

export const DivideCircle = forwardRef(function DivideCircle(props, ref) {
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
      <line x1="8" y1="12" x2="16" y2="12"></line>
      <line x1="12" y1="16" x2="12" y2="16"></line>
      <line x1="12" y1="8" x2="12" y2="8"></line>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  )
})
DivideCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
DivideCircle.displayName = 'DivideCircle'
