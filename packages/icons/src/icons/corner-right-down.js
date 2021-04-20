import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CornerRightDown = forwardRef(function CornerRightDown(props, ref) {
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
      <polyline points="10 15 15 20 20 15"></polyline>
      <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
    </svg>
  )
})
CornerRightDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CornerRightDown.displayName = 'CornerRightDown'
