import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Terminal = forwardRef(function Terminal(props, ref) {
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
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  )
})
Terminal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Terminal.displayName = 'Terminal'
