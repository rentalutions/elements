import React, { forwardRef } from "react"
import p from "prop-types"
export const Archive = forwardRef(function Archive(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 8V21H3V8"></path>
      <path d="M23 3H1V8H23V3Z"></path>
      <path d="M10 12H14"></path>
    </svg>
  )
})

Archive.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Archive.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Archive.displayName = "Archive"
