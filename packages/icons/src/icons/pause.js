import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Pause = forwardRef(function Pause(props, ref) {
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
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  )
})
Pause.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Pause.displayName = 'Pause'
