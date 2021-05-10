import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerLeftDown = forwardRef(function CornerLeftDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 15L9 20L4 15"></path>
      <path d="M20 4H13C11.9391 4 10.9217 4.42143 10.1716 5.17157C9.42143 5.92172 9 6.93913 9 8V20"></path>
    </svg>
  )
})

CornerLeftDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerLeftDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerLeftDown.displayName = "CornerLeftDown"
