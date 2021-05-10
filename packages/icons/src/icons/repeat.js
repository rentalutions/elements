import React, { forwardRef } from "react"
import p from "prop-types"
export const Repeat = forwardRef(function Repeat(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 1L21 5L17 9"></path>
      <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21"></path>
      <path d="M7 23L3 19L7 15"></path>
      <path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3"></path>
    </svg>
  )
})

Repeat.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Repeat.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Repeat.displayName = "Repeat"
