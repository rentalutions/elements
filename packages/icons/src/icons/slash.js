import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Slash = forwardRef(function Slash(props, ref) {
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
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  )
})
Slash.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Slash.displayName = 'Slash'
