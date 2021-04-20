import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ArrowUp = forwardRef(function ArrowUp(props, ref) {
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
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  )
})
ArrowUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ArrowUp.displayName = 'ArrowUp'
