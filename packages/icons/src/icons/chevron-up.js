import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronUp = forwardRef(function ChevronUp(props, ref) {
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
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  )
})
ChevronUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronUp.displayName = 'ChevronUp'
