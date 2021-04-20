import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronDown = forwardRef(function ChevronDown(props, ref) {
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
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
})
ChevronDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronDown.displayName = 'ChevronDown'
