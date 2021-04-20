import React, { forwardRef } from 'react'
import p from 'prop-types'

export const GitCommit = forwardRef(function GitCommit(props, ref) {
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
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="1.05" y1="12" x2="7" y2="12"></line>
      <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
    </svg>
  )
})
GitCommit.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
GitCommit.displayName = 'GitCommit'
