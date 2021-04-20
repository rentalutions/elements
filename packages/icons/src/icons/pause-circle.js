import React, { forwardRef } from 'react'
import p from 'prop-types'

export const PauseCircle = forwardRef(function PauseCircle(props, ref) {
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
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="10" y1="15" x2="10" y2="9"></line>
      <line x1="14" y1="15" x2="14" y2="9"></line>
    </svg>
  )
})
PauseCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
PauseCircle.displayName = 'PauseCircle'
