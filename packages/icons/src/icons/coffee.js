import React, { forwardRef } from "react"
import p from "prop-types"
export const Coffee = forwardRef(function Coffee(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157 22.5786 9.92172 23 10.9391 23 12 23 13.0609 22.5786 14.0783 21.8284 14.8284 21.0783 15.5786 20.0609 16 19 16H18M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284 16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284 2.42143 19.0783 2 18.0609 2 17V8ZM6 1V4M10 1V4M14 1V4"></path>
    </svg>
  )
})

Coffee.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Coffee.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Coffee.displayName = "Coffee"
