import React, { forwardRef } from 'react'
import p from 'prop-types'

export const RotateCcw = forwardRef(function RotateCcw(props, ref) {
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
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
  )
})
RotateCcw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
RotateCcw.displayName = 'RotateCcw'
