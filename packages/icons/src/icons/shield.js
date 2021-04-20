import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Shield = forwardRef(function Shield(props, ref) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
})
Shield.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Shield.displayName = 'Shield'
