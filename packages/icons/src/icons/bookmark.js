import React, { forwardRef } from 'react'
import p from 'prop-types'

export const Bookmark = forwardRef(function Bookmark(props, ref) {
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
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  )
})
Bookmark.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
Bookmark.displayName = 'Bookmark'
