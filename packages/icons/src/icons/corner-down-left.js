import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CornerDownLeft = forwardRef(function CornerDownLeft(props, ref) {
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
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </svg>
  )
})
CornerDownLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CornerDownLeft.displayName = 'CornerDownLeft'
