import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Play = forwardRef(function Play(props, ref) {
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
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  )
})
Play.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Play.displayName = 'Play'
