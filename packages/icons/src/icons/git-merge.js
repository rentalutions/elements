import React, { forwardRef } from 'react'
import p from 'prop-types'

export const GitMerge = forwardRef(function GitMerge(props, ref) {
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
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M6 21V9a9 9 0 0 0 9 9"></path>
    </svg>
  )
})
GitMerge.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
GitMerge.displayName = 'GitMerge'
