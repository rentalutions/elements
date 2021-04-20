import React, { forwardRef } from 'react'
import p from 'prop-types'

export const PlayCircle = forwardRef(function PlayCircle(props, ref) {
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
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
  )
})
PlayCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
PlayCircle.displayName = 'PlayCircle'
