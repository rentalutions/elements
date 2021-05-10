import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerLeftUp = forwardRef(function CornerLeftUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 9L9 4L4 9"></path>
      <path d="M20 20H13C11.9391 20 10.9217 19.5786 10.1716 18.8284C9.42143 18.0783 9 17.0609 9 16V4"></path>
    </svg>
  )
})

CornerLeftUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerLeftUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerLeftUp.displayName = "CornerLeftUp"
