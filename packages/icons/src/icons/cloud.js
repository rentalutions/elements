import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Cloud = forwardRef(function Cloud(props, ref) {
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
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  )
})
Cloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Cloud.displayName = 'Cloud'
