import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronLeft = forwardRef(function ChevronLeft(props, ref) {
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
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  )
})
ChevronLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronLeft.displayName = 'ChevronLeft'
