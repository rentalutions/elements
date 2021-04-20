import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Navigation2 = forwardRef(function Navigation2(props, ref) {
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
      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
    </svg>
  )
})
Navigation2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Navigation2.displayName = 'Navigation2'
