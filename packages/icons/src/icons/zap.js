import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Zap = forwardRef(function Zap(props, ref) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  )
})
Zap.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Zap.displayName = 'Zap'
