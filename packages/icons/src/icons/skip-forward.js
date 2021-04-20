import React, { forwardRef } from 'react'
import p from 'prop-types'

export const SkipForward = forwardRef(function SkipForward(props, ref) {
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
      <polygon points="5 4 15 12 5 20 5 4"></polygon>
      <line x1="19" y1="5" x2="19" y2="19"></line>
    </svg>
  )
})
SkipForward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
SkipForward.displayName = 'SkipForward'
