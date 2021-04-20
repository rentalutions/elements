import React, { forwardRef } from 'react'
import p from 'prop-types'

export const AtSign = forwardRef(function AtSign(props, ref) {
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
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </svg>
  )
})
AtSign.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
AtSign.displayName = 'AtSign'
