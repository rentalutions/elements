import React, { forwardRef } from 'react'
import p from 'prop-types'

export const DownloadCloud = forwardRef(function DownloadCloud(props, ref) {
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
      <polyline points="8 17 12 21 16 17"></polyline>
      <line x1="12" y1="12" x2="12" y2="21"></line>
      <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
    </svg>
  )
})
DownloadCloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
DownloadCloud.displayName = 'DownloadCloud'
