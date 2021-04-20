import React, { forwardRef } from 'react'
import p from 'prop-types'

export const ChevronsDown = forwardRef(function ChevronsDown(props, ref) {
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
      <polyline points="7 13 12 18 17 13"></polyline>
      <polyline points="7 6 12 11 17 6"></polyline>
    </svg>
  )
})
ChevronsDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
ChevronsDown.displayName = 'ChevronsDown'
