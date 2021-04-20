import React, { forwardRef } from 'react'
import p from 'prop-types'

export const CreditCard = forwardRef(function CreditCard(props, ref) {
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
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  )
})
CreditCard.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
CreditCard.displayName = 'CreditCard'
