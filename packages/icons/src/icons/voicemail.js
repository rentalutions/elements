import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Voicemail = forwardRef(function Voicemail(props, ref) {
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
      <circle cx="5.5" cy="11.5" r="4.5"></circle>
      <circle cx="18.5" cy="11.5" r="4.5"></circle>
      <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
    </svg>
  )
})
Voicemail.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Voicemail.displayName = 'Voicemail'
