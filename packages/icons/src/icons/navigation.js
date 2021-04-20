import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Navigation = forwardRef(function Navigation(props, ref) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  )
})
Navigation.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Navigation.displayName = 'Navigation'
