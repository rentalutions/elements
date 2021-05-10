import React, { forwardRef } from "react"
import p from "prop-types"
export const CornerRightUp = forwardRef(function CornerRightUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 9L15 4L20 9"></path>
      <path d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4"></path>
    </svg>
  )
})

CornerRightUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CornerRightUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CornerRightUp.displayName = "CornerRightUp"
