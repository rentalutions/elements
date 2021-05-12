import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerRightDown = forwardRef(function CornerRightDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 15L15 20L20 15"></path>
      <path d="M4 4H11C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V20"></path>
    </svg>
  )
})

CornerRightDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerRightDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerRightDown.displayName = "CornerRightDown"
