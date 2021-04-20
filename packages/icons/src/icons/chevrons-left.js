import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronsLeft = forwardRef(function ChevronsLeft(props, ref) {
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
      <polyline points="11 17 6 12 11 7"></polyline>
      <polyline points="18 17 13 12 18 7"></polyline>
    </svg>
  )
})
ChevronsLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronsLeft.displayName = 'ChevronsLeft'
