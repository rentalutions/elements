import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Check = forwardRef(function Check(props, ref) {
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
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
})
Check.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Check.displayName = 'Check'
