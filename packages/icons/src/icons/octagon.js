import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Octagon = forwardRef(function Octagon(props, ref) {
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
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
    </svg>
  )
})
Octagon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Octagon.displayName = 'Octagon'
