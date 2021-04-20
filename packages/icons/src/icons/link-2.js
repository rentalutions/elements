import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Link2 = forwardRef(function Link2(props, ref) {
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
      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  )
})
Link2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Link2.displayName = 'Link2'
