import React, { forwardRef } from 'react'
import p from 'prop-types'

export const MessageSquare = forwardRef(function MessageSquare(props, ref) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
})
MessageSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
MessageSquare.displayName = 'MessageSquare'
