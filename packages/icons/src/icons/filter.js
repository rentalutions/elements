import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Filter = forwardRef(function Filter(props, ref) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  )
})
Filter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Filter.displayName = 'Filter'
