import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CornerRightUp = forwardRef(function CornerRightUp(props, ref) {
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
      <polyline points="10 9 15 4 20 9"></polyline>
      <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
    </svg>
  )
})
CornerRightUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CornerRightUp.displayName = 'CornerRightUp'
