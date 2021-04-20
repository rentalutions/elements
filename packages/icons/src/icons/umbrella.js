import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Umbrella = forwardRef(function Umbrella(props, ref) {
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
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
    </svg>
  )
})
Umbrella.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Umbrella.displayName = 'Umbrella'
