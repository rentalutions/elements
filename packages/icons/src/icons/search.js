import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Search = forwardRef(function Search(props, ref) {
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
})
Search.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Search.displayName = 'Search'
