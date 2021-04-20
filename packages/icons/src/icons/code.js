import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Code = forwardRef(function Code(props, ref) {
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
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )
})
Code.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Code.displayName = 'Code'
