import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CloudLightning = forwardRef(function CloudLightning(props, ref) {
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
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
      <polyline points="13 11 9 17 15 17 11 23"></polyline>
    </svg>
  )
})
CloudLightning.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CloudLightning.displayName = 'CloudLightning'
