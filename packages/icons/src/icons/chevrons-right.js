import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronsRight = forwardRef(function ChevronsRight(props, ref) {
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
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  )
})
ChevronsRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronsRight.displayName = 'ChevronsRight'
