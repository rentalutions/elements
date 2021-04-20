import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Edit2 = forwardRef(function Edit2(props, ref) {
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
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  )
})
Edit2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Edit2.displayName = 'Edit2'
