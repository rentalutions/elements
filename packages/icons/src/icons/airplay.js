import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Airplay = forwardRef(function Airplay(props, ref) {
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
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
      <polygon points="12 15 17 21 7 21 12 15"></polygon>
    </svg>
  )
})
Airplay.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Airplay.displayName = 'Airplay'
