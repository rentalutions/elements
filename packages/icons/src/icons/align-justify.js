import React, { forwardRef } from 'react'
import p from 'prop-types'

export const AlignJustify = forwardRef(function AlignJustify(props, ref) {
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
      <line x1="21" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg>
  )
})
AlignJustify.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
AlignJustify.displayName = 'AlignJustify'
