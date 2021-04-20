import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Unlock = forwardRef(function Unlock(props, ref) {
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
    </svg>
  )
})
Unlock.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Unlock.displayName = 'Unlock'
