import React, { forwardRef } from 'react'
import p from 'prop-types'

export const RotateCw = forwardRef(function RotateCw(props, ref) {
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
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  )
})
RotateCw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
RotateCw.displayName = 'RotateCw'
