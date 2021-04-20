import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Plus = forwardRef(function Plus(props, ref) {
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
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
})
Plus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Plus.displayName = 'Plus'
