import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Crop = forwardRef(function Crop(props, ref) {
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
      <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
      <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
    </svg>
  )
})
Crop.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Crop.displayName = 'Crop'
