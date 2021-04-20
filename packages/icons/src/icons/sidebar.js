import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Sidebar = forwardRef(function Sidebar(props, ref) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="3" x2="9" y2="21"></line>
    </svg>
  )
})
Sidebar.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Sidebar.displayName = 'Sidebar'
