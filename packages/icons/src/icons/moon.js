import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Moon = forwardRef(function Moon(props, ref) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
})
Moon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Moon.displayName = 'Moon'
